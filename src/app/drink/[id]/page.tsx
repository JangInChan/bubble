"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getDrink } from "@/lib/drink";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { addCartItems } from "@/lib/cart";
import { addWishList, deleteWishList } from "@/lib/wishlist";

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
}

export default function DrinkPage() {
  const params = useParams();
  const [drink, setDrink] = useState<Drink | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

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

  const handleWishlist = async () => {
    if (!drink) return;
    try {
      if (isWishlisted) {
        await deleteWishList(drink.id);
        setIsWishlisted(false);
        alert("찜 목록에서 제거되었습니다.");
      } else {
        console.log("요청:", drink.id);
        await addWishList(drink.id);
        setIsWishlisted(true);
        alert("찜 목록에 추가되었습니다.");
      }
    } catch (e) {
      alert("찜하기 처리 중 오류가 발생했습니다.");
    }
  };

  const handleAddToCart = async () => {
    if (!drink) return;
    try {
      console.log("요청:", drink.id, quantity);
      await addCartItems(drink.id, quantity);
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
          href="/categories"
          className="text-orange-500 hover:text-orange-600"
        >
          ← 카테고리 목록
        </Link>
        <Link
          href={`/category/${drink.category.id}`}
          className="text-orange-500 hover:text-orange-600"
        >
          ← {drink.category.name} 목록
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 이미지 섹션 */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg">
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
          <div>
            <h1 className="text-3xl font-bold mb-2">{drink.name}</h1>
            <p className="text-2xl font-semibold text-orange-500">
              {drink.price.toLocaleString()}원
            </p>
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
          </div>

          {/* {drink.description && (
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">상품 설명</h2>
              <p className="text-gray-600 whitespace-pre-line">
                {drink.description}
              </p>
            </div>
          )} */}

          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center border rounded text-lg"
                type="button"
              >
                -
              </button>
              <span className="w-10 text-center text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center border rounded text-lg"
                type="button"
              >
                +
              </button>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleWishlist}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors ${
                  isWishlisted
                    ? "border-orange-500 text-orange-500 hover:bg-orange-50"
                    : "border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isWishlisted ? "fill-orange-500" : ""}`}
                />
                {isWishlisted ? "찜한 상품" : "찜하기"}
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                장바구니 담기
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                바로 구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
