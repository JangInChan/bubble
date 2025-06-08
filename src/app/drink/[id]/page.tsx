"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { getDrink } from "@/lib/drink";
import Image from "next/image";
import Link from "next/link";
import { addCartItems } from "@/lib/cart";
import { addWishList, deleteWishList } from "@/lib/wishlist";
import { getDrinkScores, getDrinkReviews } from "@/lib/reviews";

interface Drink {
  id: number;
  name: string;
  price: number;
  alcoholContent: number;
  volume: number;
  region: string;
  category: {
    id: number;
    name: string;
  };
  thumbnailUrl: string;
  drinkImageUrlList: string[];
  _like?: boolean;
}

export default function DrinkPage() {
  const params = useParams();
  const [drink, setDrink] = useState<Drink | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [reviews, setReviews] = useState<any[]>([]);
  const reviewSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchDrink() {
      try {
        const drinkId = Number(params.id);
        if (isNaN(drinkId)) {
          throw new Error("유효하지 않은 상품 ID입니다.");
        }
        const data = (await getDrink(drinkId)) as Drink;
        setDrink(data);
        setSelectedImage(data.thumbnailUrl);
        setIsWishlisted(!!data._like);
        const scores = await getDrinkScores(drinkId);
        setScore(Number(scores));
        const reviewsData = await getDrinkReviews(drinkId);
        setReviews(Array.isArray(reviewsData) ? reviewsData : []);
        setReviewCount(Array.isArray(reviewsData) ? reviewsData.length : 0);
      } catch (err) {
        console.error("상품 정보 조회 실패:", err);
        setError(
          err instanceof Error
            ? err.message
            : "상품 정보를 불러오는데 실패했습니다."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchDrink();
  }, [params.id]);

  useEffect(() => {
    console.log("[isWishlisted 상태 변경]", isWishlisted);
  }, [isWishlisted]);

  const handleWishlist = async () => {
    if (!drink || wishlistLoading) return;
    setWishlistLoading(true);
    try {
      if (isWishlisted) {
        console.log("[찜취소] 시작 - 현재 상태:", {
          isWishlisted,
          drinkId: drink.id,
        });
        await deleteWishList(drink.id);
        console.log("[찜취소] API 호출 성공");
        const updated = (await getDrink(drink.id)) as Drink;
        console.log("[찜취소 getDrink 응답]", updated);
        console.log("[찜취소 getDrink is_like]", updated._like);
        setIsWishlisted(!!updated._like);
        alert("찜 목록에서 제거되었습니다.");
      } else {
        console.log("[찜하기] 시작 - 현재 상태:", {
          isWishlisted,
          drinkId: drink.id,
        });
        await addWishList(drink.id);
        console.log("[찜하기] API 호출 성공");
        const updated = (await getDrink(drink.id)) as Drink;
        console.log("[찜하기 getDrink 응답]", updated);
        console.log("[찜하기 getDrink is_like]", updated._like);
        setIsWishlisted(!!updated._like);
        alert("찜 목록에 추가되었습니다.");
      }
    } catch (e: any) {
      console.error("[찜하기/취소] 에러 발생:", {
        message: e.message,
        response: e.response?.data,
        status: e.response?.status,
        headers: e.response?.headers,
        config: {
          url: e.config?.url,
          method: e.config?.method,
          headers: e.config?.headers,
        },
      });
      alert(
        e?.response?.data?.message ||
          e?.message ||
          "찜하기 처리 중 오류가 발생했습니다."
      );
    } finally {
      setWishlistLoading(false);
    }
  };

  const handleAddToCart = async () => {
    if (!drink) return;
    try {
      console.log("요청:", drink.id, quantity);
      await addCartItems(drink.id, Number(quantity));
      alert("장바구니에 담았습니다!");
    } catch (e) {
      alert("장바구니 담기 실패");
    }
  };

  const handleBuyNow = () => {
    // TODO: 구매 페이지로 이동 또는 모달 표시
    alert("구매 페이지로 이동합니다.");
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">로딩 중...</div>
      </div>
    );
  }

  if (error || !drink) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-500">
          에러: {error || "상품을 찾을 수 없습니다."}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 상단 네비게이션 */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href={`/category/${drink.category.id}`}
          className="mr-3 focus:outline-none text-main font-jj font-36pt cursor-pointer"
        >
          &lt; {drink.category.name} 목록
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 이미지 섹션 */}
        <div className="space-y-4">
          <div className="relative aspect-square max-w-[480px] mx-auto overflow-hidden rounded-lg">
            <Image
              src={selectedImage || drink.thumbnailUrl}
              alt={drink.name}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
          {drink.drinkImageUrlList.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              <div
                className={`relative aspect-square cursor-pointer rounded-lg overflow-hidden border-2 ${
                  selectedImage === drink.thumbnailUrl
                    ? "border-orange-500"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(drink.thumbnailUrl)}
              >
                <Image
                  src={drink.thumbnailUrl}
                  alt={`${drink.name} 썸네일`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              {drink.drinkImageUrlList.map((url, index) => (
                <div
                  key={index}
                  className={`relative aspect-square cursor-pointer rounded-lg overflow-hidden border-2 ${
                    selectedImage === url
                      ? "border-orange-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(url)}
                >
                  <Image
                    src={url}
                    alt={`${drink.name} 이미지 ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 상품 정보 섹션 */}
        <div className="space-y-6">
          <div
            className="mb-6"
            style={{
              borderTop: "5px solid #0E2E40",
              width: "100%",
            }}
          />
          <div className="flex items-center justify-between mb-2">
            <h1 className="font-pretendard text-main text-[21px] font-extrabold leading-none mb-6">
              {drink.name}
            </h1>
            <button
              className="flex flex-col items-center border-none bg-transparent cursor-pointer"
              style={{ color: isWishlisted ? "#B18B6C" : "#B18B6C" }}
              onClick={handleWishlist}
            >
              <Image
                src={isWishlisted ? "/찜하기svg.svg" : "/찜하기.svg"}
                alt="찜하기"
                width={32}
                height={32}
              />
              <span className="font-pretendard font-light mt-1">
                {isWishlisted ? "찜한 상품" : "찜하기"}
              </span>
            </button>
          </div>

          {/* 별점 및 리뷰 섹션 */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src={
                      index < Math.round(Number(score))
                        ? "/star.svg"
                        : "/nonestar.svg"
                    }
                    alt={index < Math.round(Number(score)) ? "별점" : "빈 별점"}
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({Number(score).toFixed(1)})
              </span>
            </div>
            <Link
              href="#"
              className="text-blue-500 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                reviewSectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              리뷰 {reviewCount}건 보기
            </Link>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">카테고리</p>
                <p className="font-medium">{drink.category.name}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">지역</p>
                <p className="font-medium">{drink.region}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">도수</p>
                <p className="font-medium">{drink.alcoholContent}%</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">용량</p>
                <p className="font-medium">{drink.volume}ml</p>
              </div>
            </div>
            <p className="font-pretendard text-[32px] font-extrabold text-main">
              {drink.price.toLocaleString()}원
            </p>
            {/* 수량 선택 드롭다운 - selected.svg를 배경으로 사용 (가격 아래로 이동, 비율 유지) */}
            <div
              className="relative w-full max-w-[658px] mb-4"
              style={{ aspectRatio: "658 / 37", height: "auto" }}
            >
              <img
                src="/selected.svg"
                alt="수량선택"
                className="absolute left-0 top-0 w-full h-full pointer-events-none"
                draggable={false}
                style={{ objectFit: "contain" }}
              />
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="absolute left-0 top-0 w-full h-full font-pretendard bg-transparent border-none appearance-none focus:outline-none flex items-center justify-center cursor-pointer"
                style={{
                  zIndex: 1,
                  fontWeight: quantity === "" ? 300 : 500,
                  height: "100%",
                  lineHeight: "normal",
                  padding: "0 16px",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  color: quantity === "" ? "#7D7D7D" : "#0E2E40",
                }}
              >
                <option value="" disabled hidden>
                  수량 선택
                </option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={String(i + 1)}>
                    {i + 1}개
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="border-t border-sub-light pt-6 space-y-4">
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 relative flex items-center justify-center py-3 cursor-pointer"
                style={{
                  height: "56px",
                  minWidth: "0",
                  padding: 0,
                  background: "none",
                  border: "none",
                }}
              >
                <img
                  src="/cart.svg"
                  alt="장바구니"
                  className="absolute left-0 top-0 w-full h-full"
                  style={{
                    objectFit: "contain",
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                  draggable={false}
                />
                <span
                  className="relative z-10 font-bold text-[21px] text-[#B18B6C] font-pretendard"
                  style={{ pointerEvents: "none" }}
                >
                  장바구니
                </span>
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 relative flex items-center justify-center py-3 cursor-pointer"
                style={{
                  height: "56px",
                  minWidth: "0",
                  padding: 0,
                  background: "none",
                  border: "none",
                }}
              >
                <img
                  src="/buy.svg"
                  alt="구매하기"
                  className="absolute left-0 top-0 w-full h-full"
                  style={{
                    objectFit: "contain",
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                  draggable={false}
                />
                <span
                  className="relative z-10 font-bold text-[21px] text-white font-pretendard"
                  style={{ pointerEvents: "none" }}
                >
                  구매하기
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 상품 정보(상세페이지) - container 내부, 메인 아래 */}
      <div className="container mx-auto px-4">
        <div className="pt-6 mt-8">
          <h2 className="border-b border-b-main text-[21px] font-pretendard font-semibold text-main mb-4 pb-3">
            상품 정보
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            예약 배송 상품과 일반 상품을 함께 구매하실 때, 출고일이 일주일
            내외로 차이날 경우 예약배송 상품 출고일에 합배송 되는 점 양해
            부탁드립니다.
          </p>
          <div className="w-full min-h-[1000px] bg-gray-100 p-8 flex flex-col items-center justify-center">
            {drink.id === 6 ? (
              <>
                {/* 쇼츠 영상 */}
                <div className="w-full max-w-[700px] mb-8">
                  <video
                    controls
                    className="w-full rounded-lg shadow-lg"
                    poster={drink.thumbnailUrl}
                  >
                    <source src="/gijuddpo.mp4" type="video/mp4" />
                    브라우저가 비디오를 지원하지 않습니다.
                  </video>
                </div>
                {/* 상세 이미지 */}
                <img
                  src="/ddpo.jpeg"
                  alt="상세 이미지"
                  className="mb-6 max-w-full h-auto mx-auto rounded-lg shadow-lg"
                  style={{ maxWidth: 900 }}
                />
              </>
            ) : drink.drinkImageUrlList &&
              drink.drinkImageUrlList.length > 0 ? (
              drink.drinkImageUrlList.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`상세 이미지 ${idx + 1}`}
                  className="mb-6 max-w-full h-auto mx-auto"
                  style={{ maxWidth: 700 }}
                />
              ))
            ) : (
              <span className="text-gray-400">상세페이지</span>
            )}
          </div>
        </div>

        {/* 리뷰 목록 섹션 */}
        <div ref={reviewSectionRef} className="pt-12">
          <h2 className="font-pretendard text-[21px] font-semibold text-main mb-6">
            리뷰({reviewCount})
          </h2>
          <div className="space-y-8">
            {reviews.length === 0 ? (
              <div className="text-gray-400 text-center">
                아직 작성된 리뷰가 없습니다.
              </div>
            ) : (
              reviews.map((review, idx) => (
                <div key={idx} className="border-b pb-8 flex gap-6 items-start">
                  {/* 별점 */}
                  <div className="flex flex-col items-center min-w-[80px]">
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Image
                          key={i}
                          src={
                            i < Math.round(Number(review.score))
                              ? "/star.svg"
                              : "/nonestar.svg"
                          }
                          alt={
                            i < Math.round(Number(review.score))
                              ? "별점"
                              : "빈 별점"
                          }
                          width={16}
                          height={16}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      {Number(review.score).toFixed(1)}
                    </span>
                  </div>
                  {/* 리뷰 내용 */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm">
                        {review.name || review.userId || "익명"}
                      </span>
                      <span className="text-xs text-gray-400">
                        {review.createdAt ? review.createdAt.slice(0, 10) : ""}
                      </span>
                    </div>
                    <div className="text-base mb-2">{review.content}</div>
                  </div>
                  {/* 리뷰 이미지 (있으면) */}
                  {review.imageUrl && (
                    <img
                      src={review.imageUrl}
                      alt="리뷰 이미지"
                      className="w-24 h-24 object-cover rounded"
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
