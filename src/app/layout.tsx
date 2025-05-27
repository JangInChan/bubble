import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/common/auth-provider";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "기주 - 전통주 쇼핑몰",
  description: "대한민국 전통주의 아름다움을 전하는 온라인 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 쿠키에 있는 refresh 토큰 검사 있으면 access 토큰 재발급 후 스토어에 넣어주기
  // 없으면 스토어에서 access 토큰 검사 -> 없으면 로그인 페이지로 이동
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
