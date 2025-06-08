"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { createReview } from "@/lib/reviews";
import Image from "next/image";

export default function ReviewWritePage() {
  const router = useRouter();
  const params = useSearchParams();
  const orderId = params.get("orderId");
  const drinkName = params.get("drinkName") || "";
  const [score, setScore] = useState(0);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!orderId || !drinkName || !content.trim() || score < 1) {
      setError("별점과 내용을 모두 입력해주세요.");
      return;
    }
    setLoading(true);
    try {
      await createReview(Number(orderId), drinkName, content, score);
      setSuccess("리뷰가 등록되었습니다!");
      setTimeout(() => router.push("/mypage"), 1200);
    } catch (e: any) {
      setError(e?.response?.data?.message || e?.message || "리뷰 등록 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-white py-12">
      <div className="w-full max-w-[800px] mx-auto">
        <h1 className="font-pretendard text-[21px] text-main mb-6 border-b-4 border-main pb-6">
          리뷰작성
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* 별점 */}
          <div className="flex flex-row items-center justify-between w-full border-b border-sub-light pb-6">
            <div className="font-pretendard text-[21px] text-main font-light">
              구매하신 상품은 어떠셨나요?
              <br />
              평점을 남겨주세요
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  onClick={() => setScore(n)}
                  className="focus:outline-none"
                  aria-label={n + "점"}
                >
                  <Image
                    src={n <= score ? "/star.svg" : "/nonestar.svg"}
                    alt={n <= score ? "별점" : "빈 별점"}
                    width={40}
                    height={40}
                  />
                </button>
              ))}
            </div>
          </div>
          {/* 상세리뷰 */}
          <div>
            <label className="font-pretendard text-[21px] text-main font-light mb-6 block">
              상세리뷰
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[120px] border border-[#E5EAF2] rounded-lg px-4 py-3 text-[16px] font-pretendard focus:outline-main resize-none placeholder:text-[#B0B8C1]"
              placeholder="리뷰 작성하기..."
              required
            />
          </div>
          {/* 에러/성공 메시지 */}
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          {success && (
            <div className="text-green-600 text-sm text-center">{success}</div>
          )}
          {/* 하단 버튼 */}
          <div className="flex gap-10 w-full max-w-4xl mx-auto">
            {/* 작성취소 버튼 */}
            <button
              type="button"
              onClick={() => router.back()}
              className="relative flex-1 max-w-[400px] h-[80px] flex items-center justify-center"
              disabled={loading}
              style={{ minWidth: 0 }}
            >
              <img
                src="/white-cancel-button.svg"
                alt="작성취소"
                className="absolute left-0 top-0 w-full h-full"
                draggable={false}
                style={{ pointerEvents: "none" }}
              />
              <span className="relative z-10 text-main font-pretendard text-[22.65px] font-light">
                작성취소
              </span>
            </button>
            {/* 작성완료 버튼 */}
            <button
              type="submit"
              className="relative flex-1 max-w-[400px] h-[80px] flex items-center justify-center disabled:opacity-50"
              disabled={loading}
              style={{ minWidth: 0 }}
            >
              <img
                src="/main-button.svg"
                alt="작성완료"
                className="absolute left-0 top-0 w-full h-full"
                draggable={false}
                style={{ pointerEvents: "none" }}
              />
              <span className="relative z-10 text-white font-pretendard text-[22.65px] font-light">
                {loading ? "등록 중..." : "작성완료"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
