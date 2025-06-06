"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getMyReviews } from "@/lib/reviews";

const statusColor: Record<string, string> = {
  승인: "text-main",
  대기중: "text-gray-400",
  삭제됨: "text-red-400",
};

export default function MyReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await getMyReviews();
        // res.data가 배열이라고 가정
        setReviews(Array.isArray(res.data) ? res.data : []);
      } catch (e) {
        setReviews([]);
      }
    }
    fetchReviews();
  }, []);

  // 검색 필터링
  const filtered = reviews.filter(
    (r) =>
      r.product?.includes?.(search) ||
      "" ||
      r.name?.includes?.(search) ||
      "" ||
      r.content?.includes?.(search) ||
      ""
  );

  return (
    <div className="p-8">
      <h1 className="font-pretendard text-2xl font-bold mb-8">내 리뷰</h1>
      <div className="mb-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="이름, 이메일, 전화번호 검색"
          className="border px-4 py-2 rounded w-[400px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="text-gray-400 ml-2">모든 상태보기</span>
      </div>
      <table className="w-full border-t text-center">
        <thead>
          <tr className="bg-gray-50">
            <th className="py-3">작성자</th>
            <th>별점</th>
            <th>내용</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((review, idx) => (
            <tr key={idx} className="border-b">
              <td className="py-3">{review.name || review.userId || "-"}</td>
              <td>
                <div className="flex justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image
                      key={i}
                      src={
                        i < Number(review.score) ? "/star.svg" : "/nonestar.svg"
                      }
                      alt="별점"
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
              </td>
              <td className="text-left">{review.content}</td>
              <td>
                <button className="text-gray-400 hover:text-main mr-2">
                  숨김
                </button>
                <button className="text-red-400 hover:text-main">삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 페이지네이션 예시 */}
      <div className="flex justify-center mt-8 text-gray-400">
        &lt; page1 &gt;
      </div>
      <div className="mt-2 text-xs text-gray-400 text-right">
        총 {filtered.length}개의 리뷰
      </div>
    </div>
  );
}
