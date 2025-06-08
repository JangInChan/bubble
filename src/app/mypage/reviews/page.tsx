"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getMyReviews } from "@/lib/reviews";
import { Search as SearchIcon } from "lucide-react";

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
      <h1 className="font-pretendard text-[21px] font-bold text-main mb-6">
        내 리뷰
      </h1>
      <div className="mb-6 flex items-center w-full pb-2 justify-start gap-4">
        <div
          className="relative flex items-center"
          style={{ width: 728, height: 54 }}
        >
          {/* SVG 배경 */}
          <Image
            src="/white-search-bg.svg"
            alt="검색창"
            fill
            className="absolute left-0 top-0 w-full h-full z-0"
          />
          {/* 돋보기 아이콘 */}
          <span className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-[#B0B8C1]">
            <SearchIcon className="w-7 h-7" />
          </span>
          {/* input */}
          <input
            type="text"
            placeholder="이름, 이메일, 전화번호 검색"
            className="relative z-10 font-pretendard font-light bg-transparent border-none focus:outline-none text-[18px] text-[#333] pl-16 pr-4 h-full flex-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            maxLength={40}
            style={{ minWidth: 0 }}
          />
          <span className="absolute text-[#b18b6c] ml-155">모든 상태보기</span>
        </div>
        {/* <span className="text-[#b18b6c] ml-2">모든 상태보기</span> */}
      </div>
      <table className="w-full border-t-3 border-main text-center">
        <thead>
          <tr className="bg-gray-50">
            <th className="font-pretendard text-main font-semibold py-3">
              작성자
            </th>
            <th className="font-pretendard text-main font-semibold py-3">
              별점
            </th>
            <th className="font-pretendard text-main font-semibold py-3">
              내용
            </th>
            <th className="font-pretendard text-main font-semibold py-3">
              관리
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((review, idx) => (
            <tr
              key={idx}
              className={
                "border-b border-t border-gray-200 " +
                (idx === filtered.length - 1 ? "border-b-main" : "")
              }
            >
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
              <td
                className="text-center align-middle font-pretendard text-[#7d7d7d] font-light"
                style={{
                  maxWidth: "360px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  cursor: "pointer",
                  verticalAlign: "middle",
                }}
              >
                <ReviewContentCell content={review.content} />
              </td>
              <td>
                <button className="text-[#B18B6C] hover:underline cursor-pointer mr-2">
                  숨김
                </button>
                <button className="text-red-400 hover:underline cursor-pointer">
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-6 h-10">
        <div className="text-base font-pretendard font-light text-gray-400 flex items-center h-full">
          총 {filtered.length}개의 리뷰
        </div>
        <div className="text-gray-400 text-base font-pretendard font-light flex items-center h-full">
          &lt; page1 &gt;
        </div>
      </div>
    </div>
  );
}

function ReviewContentCell({ content }: { content: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span
        style={{
          display: "inline-block",
          maxWidth: "660px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          cursor: "pointer",
          verticalAlign: "middle",
        }}
        onClick={() => setOpen(true)}
        title="클릭해서 전체 내용 보기"
      >
        {content}
      </span>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-main text-xl"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <div className="text-base text-gray-800 whitespace-pre-line break-words">
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
