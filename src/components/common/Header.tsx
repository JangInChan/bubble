"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Menu,
  ShoppingCart,
  User,
  X,
  Settings,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useAuth } from "@/components/common/auth-provider";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, isAdmin, user, logout } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 드롭다운 토글
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="relative w-full h-[64px] text-[18px] text-lightgray font-inter z-10 bg-darkslategray">
      <div className="container mx-auto px-4 h-full flex items-center justify-between relative">
        {/* 왼쪽: 로고/메뉴 */}
        <div className="flex items-center space-x-8 h-full relative">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="기주 로고" width={44} height={44} />
          </Link>
          <Link
            href="/categories"
            className="text-white hover:bg-darkgray rounded-full px-2 py-1"
            style={{ position: "relative", top: "2px", left: "0.5vw" }}
          >
            전체상품
          </Link>
          <Link
            href="/qna"
            className="text-white hover:bg-darkgray rounded-full px-2 py-1"
            style={{ position: "relative", top: "2px", left: "0vw" }}
          >
            Q&A
          </Link>
          <Link
            href="/about"
            className="text-white hover:bg-darkgray rounded-full px-2 py-1"
            style={{ position: "relative", top: "2px", left: "0vw" }}
          >
            소개란
          </Link>
        </div>
        {/* 오른쪽: 로그인/회원가입 + 검색창 */}
        <div className="flex items-center gap-4">
          {/* 로그인/회원가입 or 유저 메뉴 */}
          <div
            className="flex items-center space-x-2 h-full relative"
            style={{ top: "2px", right: "0vw" }}
          >
            {isLoggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  className="p-2 hover:bg-darkgray rounded-full flex items-center"
                  onClick={toggleDropdown}
                >
                  <User className="h-5 w-5" />
                  <span className="ml-2 hidden md:inline">{user?.name}</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/mypage"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      마이페이지
                    </Link>
                    {isAdmin && (
                      <Link
                        href="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <Settings className="h-4 w-4 mr-2" />
                          관리자 페이지
                        </div>
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        logout();
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      로그아웃
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <Link
                  href="/login"
                  className="flex items-center p-2 hover:bg-gray-100 rounded-md text-sm"
                >
                  <LogIn className="h-5 w-5 mr-1" />
                  <span className="hidden md:inline">로그인</span>
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center p-2 hover:bg-gray-100 rounded-md text-sm"
                >
                  <UserPlus className="h-5 w-5 mr-1" />
                  <span className="hidden md:inline">회원가입</span>
                </Link>
              </div>
            )}
          </div>
          {/* 검색창 */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchValue.trim()) {
                router.push(
                  `/search?keyword=${encodeURIComponent(searchValue.trim())}`
                );
                setSearchValue("");
              }
            }}
            className="relative flex items-center w-[328px] h-[38px]"
          >
            {/* 검색창 배경 SVG */}
            <Image
              src="/search-bg.svg"
              alt="검색창 배경"
              fill
              className="absolute left-0 top-0 w-full h-full z-0"
            />
            {/* 왼쪽 placeholder SVG (input 맨 왼쪽에 겹치게) */}
            {searchValue === "" && (
              <span className="absolute left-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <Image
                  src="/search-deco.svg"
                  alt="검색 데코"
                  width={170}
                  height={28}
                />
              </span>
            )}
            <input
              type="text"
              className="pl-4 pr-10 py-2 bg-transparent border-none text-white w-full h-full relative z-10 focus:outline-none"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              style={{ background: "transparent" }}
            />
            {/* 돋보기 아이콘 */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
            >
              <Image src="/search-icon.svg" alt="검색" width={22} height={22} />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
