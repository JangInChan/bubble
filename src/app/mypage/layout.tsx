import React from "react";
import Link from "next/link";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full min-h-[80vh] bg-white">
      {/* 좌측 메뉴 */}
      <aside className="w-[260px] bg-gray-100 border-r border-gray-200 py-10 px-6 flex-shrink-0">
        <h2 className="text-[32px] font-jj font-extrabold mb-4 text-main border-t-4 border-main pt-4">
          마이페이지
        </h2>
        <div className="border-b border-main mb-8"></div>
        <nav className="space-y-8">
          <div>
            <div className="text-[#222] font-semibold mb-2">MY 쇼핑</div>
            <ul className="space-y-1 text-[#666] text-sm">
              <li className="hover:text-main cursor-pointer">
                주문목록/배송조회
              </li>
              <li className="hover:text-main cursor-pointer">
                취소/반품/교환/환불내역
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[#222] font-semibold mb-2">MY 활동</div>
            <ul className="space-y-1 text-[#666] text-sm">
              <li className="hover:text-main cursor-pointer">Q&A 문의내역</li>
              <li className="hover:text-main cursor-pointer">
                <Link href="/mypage/reviews">리뷰관리</Link>
              </li>
              <li className="hover:text-main cursor-pointer">찜 리스트</li>
            </ul>
          </div>
          <div>
            <div className="text-[#222] font-semibold mb-2">MY 정보</div>
            <ul className="space-y-1 text-[#666] text-sm">
              <li className="hover:text-main cursor-pointer">
                <Link href="/mypage/profile">개인정보 확인/수정</Link>
              </li>
              <li className="hover:text-main cursor-pointer border-b-4 border-main pb-6">
                배송지 관리
              </li>
            </ul>
          </div>
        </nav>
      </aside>
      {/* 우측 본문 */}
      <main className="flex-1 py-10 px-12">{children}</main>
    </div>
  );
}
