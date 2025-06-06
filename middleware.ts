import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];
const adminRoutes = ["/admin"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 관리자 페이지 접근 시도 체크
  if (pathname.startsWith("/admin")) {
    const authCookie = request.cookies.get("auth-storage");

    if (!authCookie?.value) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const userData = JSON.parse(authCookie.value);
      const userRole = userData?.state?.user?.role?.toUpperCase();

      if (userRole !== "ADMIN") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // 이미 로그인한 사용자가 로그인/회원가입 페이지 접근 시
  if (
    (pathname.startsWith("/login") || pathname.startsWith("/register")) &&
    request.cookies.get("auth-storage")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register", "/admin/:path*"],
};
