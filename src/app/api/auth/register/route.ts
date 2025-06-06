import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("회원가입 요청 데이터:", body);

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
      console.log("회원가입 에러 응답:", errorData);
      return NextResponse.json(
        { message: errorData.message || "회원가입에 실패했습니다." },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("회원가입 성공 응답:", data);

    // 응답 생성
    return NextResponse.json({
      message: "success",
      user: data.user,
      accessToken: data.cookies.accessToken,
      refreshToken: data.cookies.refreshToken,
    });
  } catch (error) {
    console.error("회원가입 처리 중 오류 발생:", error);
    return NextResponse.json(
      { message: "회원가입 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
