"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  Package,
  Users,
  MessageSquare,
  Star,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useAuth } from "@/components/common/auth-provider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout, isAdmin, isLoggedIn, isLoading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      if (!isLoggedIn) {
        router.replace("/login");
      } else if (!isAdmin) {
        router.replace("/");
      }
    }
  }, [isLoggedIn, isAdmin, isLoading, router]);

  if (isLoading || !isLoggedIn || !isAdmin) return null;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const navItems = [
    {
      href: "/admin",
      label: "대시보드",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      href: "/admin/products",
      label: "상품 관리",
      icon: <Package className="w-5 h-5" />,
    },
    {
      href: "/admin/users",
      label: "회원 관리",
      icon: <Users className="w-5 h-5" />,
    },
    {
      href: "/admin/qna",
      label: "Q&A 관리",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      href: "/admin/reviews",
      label: "리뷰 관리",
      icon: <Star className="w-5 h-5" />,
    },
    {
      href: "/admin/settings",
      label: "설정",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 모바일 헤더 */}
      <div className="md:hidden bg-white border-b p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="mr-2">
            {isSidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <h1 className="text-xl font-bold">기주 관리자</h1>
        </div>
      </div>

      <div className="flex">
        {/* 사이드바 */}
        <aside
          className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 bg-white border-r w-64 md:sticky md:top-0`}
        >
          <div className="flex flex-col h-full">
            <div className="p-5 border-b">
              <h1 className="text-xl font-bold">기주 관리자</h1>
              <p className="text-sm text-gray-500">전통주 쇼핑몰 관리</p>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                    pathname === item.href
                      ? "bg-orange-50 text-orange-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t">
              <Link
                href="/"
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors mb-2"
              >
                <span className="ml-3">쇼핑몰로 이동</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors w-full"
              >
                <LogOut className="w-5 h-5" />
                <span className="ml-3">로그아웃</span>
              </button>
            </div>
          </div>
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
