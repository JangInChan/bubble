"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { createReview } from "@/lib/reviews";

export default function ReviewWritePage() {
  const router = useRouter();
  const params = useSearchParams();
  const orderId = params.get("orderId");
  const drinkId = params.get("drinkId");
  const [score, setScore] = useState(0);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!orderId || !drinkId || !content.trim() || score < 1) {
      setError("별점과 내용을 모두 입력해주세요.");
      return;
    }
    setLoading(true);
    try {
      await createReview(Number(orderId), Number(drinkId), content, score);
      setSuccess("리뷰가 등록되었습니다!");
      setTimeout(() => router.push("/mypage"), 1200);
    } catch (e: any) {
      setError(e?.response?.data?.message || e?.message || "리뷰 등록 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-16">
      <div className="bg-white p-8 rounded-lg shadow max-w-xl w-full">
        <h1 className="text-2xl font-bold text-main mb-6">리뷰 작성</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <label className="font-semibold text-main">별점</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  onClick={() => setScore(n)}
                  className={
                    n <= score
                      ? "text-yellow-400 text-2xl"
                      : "text-gray-300 text-2xl"
                  }
                >
                  ★
                </button>
              ))}
            </div>
            <span className="ml-2 text-main font-bold">{score}점</span>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border rounded px-3 py-2 min-h-[80px]"
            placeholder="리뷰 내용을 입력하세요"
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}
          <button
            type="submit"
            className="bg-main text-white px-6 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "등록 중..." : "리뷰 작성"}
          </button>
        </form>
      </div>
    </main>
  );
}
