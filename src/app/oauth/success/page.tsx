"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";

export default function OAuthSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    async function exchangeToken() {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/auth/exchange-token",
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        const accessToken = data?.data?.access;
        const refreshToken = data?.data?.refresh;
        if (accessToken && refreshToken) {
          useAuthStore.getState().setTokens(accessToken, refreshToken);
          router.replace("/");
        } else {
          alert("로그인에 실패했습니다.");
          router.replace("/login");
        }
      } catch (e) {
        alert("로그인 처리 중 오류가 발생했습니다.");
        router.replace("/login");
      }
    }
    exchangeToken();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen text-lg">
      로그인 처리 중입니다...
    </div>
  );
}
