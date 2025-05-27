"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/common/auth-provider";
import { login } from "@/lib/auth";
import { useAuthStore } from "@/store/auth";
import apiClient from "@/lib/api-client";
import type { AuthState, User } from "@/store/auth";
import axios from "axios";

export default function LoginForm() {
  const router = useRouter();
  const { login: authLogin } = useAuth();
  const setTokens = useAuthStore((state: AuthState) => state.setTokens);
  const setUser = useAuthStore((state: any) => state.setUser);

  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.loginId.trim()) {
      newErrors.loginId = "아이디를 입력해주세요.";
    }

    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await login(formData);
      console.log("로그인 응답 전체:", response);
      console.log("message:", response.message);
      console.log("accessToken:", response.accessToken);
      console.log("refreshToken:", response.refreshToken);
      if (
        response.message === "로그인 성공" &&
        response.accessToken &&
        response.refreshToken
      ) {
        setTokens(response.accessToken, response.refreshToken);
        console.log("토큰값", response.accessToken);
        console.log("로그인 후 토큰 저장, 유저 정보 요청 시작");
        try {
          // const userResponse = await axios.get(
          //   "http://43.200.226.212:8080/api/users",
          //   {
          const userResponse = await apiClient.get("/api/users", {
            headers: {
              access: response.accessToken,
            },
          });
          console.log("유저 정보 요청 결과:", userResponse);
          if ((userResponse as any).data) {
            setUser((userResponse as any).data.data);
            console.log("setUser 실행, user:", (userResponse as any).data.data);
          }
        } catch (e) {
          console.log("유저 정보 요청 실패:", e);
        }
        router.push("/");
      } else {
        alert(response.message || "로그인에 실패했습니다.");
      }
    } catch (error: any) {
      console.log("로그인 오류 상세:", {
        error: error,
        message: error?.message,
        status: error?.status,
        timeStamp: error?.timeStamp,
      });
      const errorMessage =
        error?.message || "로그인에 실패했습니다. 다시 시도해주세요.";
      alert(errorMessage);
    }
  };

  return (
    <div className="bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex items-center justify-center">
          <span className="text-3xl font-bold">기주</span>
          <span className="text-sm ml-1 text-gray-500">[寄酒]</span>
        </Link>
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          로그인
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* 아이디 */}
            <InputField
              label="아이디"
              id="loginId"
              type="text"
              value={formData.loginId}
              onChange={handleChange}
              error={errors.loginId}
            />

            {/* 비밀번호 */}
            <InputField
              label="비밀번호"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-orange-600 hover:text-orange-500"
                >
                  비밀번호를 잊으셨나요?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              로그인
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              계정이 없으신가요?{" "}
              <Link
                href="/signup"
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 입력 필드 공통 컴포넌트
function InputField({
  label,
  id,
  type,
  value,
  onChange,
  error,
}: {
  label: string;
  id: string;
  type: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          className={`appearance-none block w-full px-3 py-2 border ${
            error ? "border-red-300" : "border-gray-300"
          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500`}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
}
