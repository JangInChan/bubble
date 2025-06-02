"use client";

import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/common/auth-provider";
import { deleteUser, updateUserInfo } from "@/lib/auth";
import apiClient from "@/lib/api-client";
import type { User } from "@/lib/auth";
import { useAuthStore } from "@/store/auth";
import React from "react";
import { getOrderHistory } from "@/lib/order";
import Image from "next/image";

export default function MyPage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoggedIn === false && !redirecting) {
      setRedirecting(true);
      router.replace("/login");
    }
  }, [isLoggedIn, redirecting, router]);

  useEffect(() => {
    if (isLoggedIn !== true) return;
    async function fetchOrders() {
      try {
        setLoading(true);
        const res = await getOrderHistory();
        const result = res as any;
        setOrders(result.data || result);
      } catch (e: any) {
        setError(e?.message || "주문 내역을 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, [isLoggedIn]);

  if (typeof isLoggedIn === "undefined") {
    return <div />;
  }
  if (isLoggedIn === false && redirecting) {
    return <div />;
  }
  if (isLoggedIn !== true) {
    return null;
  }

  return (
    <main className="flex-1 py-10 px-12">
      {/* 주문목록 상단 */}
      <div className="flex items-center justify-between mb-2">
        <div className="font-pretendard text-[21px] font-extrabold text-main">
          주문목록
        </div>
        <div className="flex gap-4 text-[#888] text-sm">
          <button className="hover:text-main">최근 6개월</button>
          <button className="hover:text-main">2025</button>
          <button className="hover:text-main">2024</button>
          <button className="hover:text-main">2023</button>
          <button className="hover:text-main">2022</button>
          <button className="hover:text-main">2021</button>
          <button className="hover:text-main">이전년도 보기</button>
        </div>
      </div>
      {/* 검색창 */}
      <form
        className="relative flex items-center w-[328px] h-[38px] mb-6"
        style={{ maxWidth: 328 }}
      >
        {/* 검색창 배경 SVG */}
        <Image
          src="/search-bg.svg"
          alt="검색창 배경"
          fill
          className="absolute left-0 top-0 w-full h-full z-0"
        />
        <input
          type="text"
          placeholder="주문상품 검색"
          className="pl-4 pr-10 bg-transparent border-none w-full h-full relative z-10 focus:outline-none font-noh text-[18px] text-white placeholder:text-sub-light search-placeholder-fix"
          style={{
            background: "transparent",
            height: "38px",
            lineHeight: "38px",
            paddingTop: 0,
            paddingBottom: 0,
          }}
        />
        {/* 돋보기 아이콘 */}
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
        >
          <Image src="/search-icon.svg" alt="검색" width={22} height={22} />
        </button>
      </form>
      {/* 주문 리스트 */}
      <div className="space-y-10">
        {loading && (
          <div className="text-center py-10 text-gray-400">
            주문 내역을 불러오는 중...
          </div>
        )}
        {error && <div className="text-center py-10 text-red-500">{error}</div>}
        {!loading && !error && orders.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            주문 내역이 없습니다.
          </div>
        )}
        {!loading &&
          !error &&
          orders.map((order: any, idx: number) => (
            <section key={order.id || idx}>
              <div className="flex items-center justify-between border-b pb-2 mb-4">
                <div className="font-semibold text-[#222]">
                  {order.orderDate ? order.orderDate.split("T")[0] : "-"} 주문
                </div>
                <button className="text-main text-xs underline">
                  주문 상세보기
                </button>
              </div>
              <div className="space-y-4">
                {order.orderDetails &&
                  order.orderDetails.map((item: any, i: number) => (
                    <div
                      key={item.id || i}
                      className="flex items-center bg-white rounded-lg shadow p-4"
                    >
                      <img
                        src={item.thumbnailUrl || "/noimg.png"}
                        alt={item.productName || "상품 이미지"}
                        className="w-20 h-20 object-cover rounded mr-6 border"
                      />
                      <div className="flex-1">
                        <div className="text-sm text-[#222] font-semibold mb-1">
                          {item.productName}
                        </div>
                        <div className="text-xs text-[#888]">
                          옵션합계가 |{" "}
                          {item.price ? item.price.toLocaleString() : 0}원
                        </div>
                      </div>
                      <div className="flex flex-col items-end min-w-[120px]">
                        <div className="text-xs text-[#FF9100] font-bold mb-2">
                          {item.status || "-"}
                          <span className="text-[#888]">
                            {item.statusDate || ""}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="border border-[#FF9100] text-[#FF9100] rounded px-2 py-1 text-xs">
                            배송조회
                          </button>
                          <button className="border border-[#B18B6C] text-[#B18B6C] rounded px-2 py-1 text-xs">
                            교환/반품 신청
                          </button>
                          <button className="border border-[#0E2E40] text-[#0E2E40] rounded px-2 py-1 text-xs">
                            리뷰 작성
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          ))}
      </div>
    </main>
  );
}
