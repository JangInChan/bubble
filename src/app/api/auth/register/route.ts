import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 백엔드 API 호출
    const response = await fetch(`/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { message: errorData.message || "회원가입에 실패했습니다." },
        { status: response.status }
      );
    }

    const data = await response.json();

    // 응답 생성
    return NextResponse.json({
      message: "success",
      user: data.user,
      accessToken: data.cookies.accessToken,
      refreshToken: data.cookies.refreshToken,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "회원가입 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
