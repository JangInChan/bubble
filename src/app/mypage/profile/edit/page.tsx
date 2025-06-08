"use client";
import { useAuth } from "@/components/common/auth-provider";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { updateUser } from "@/lib/user";

export default function ProfileEditPage() {
  const { user, isLoggedIn, isLoading } = useAuth();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    birthday: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user?.data) {
      const userData = (user as any).data;
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        phoneNumber: userData.phoneNumber || "",
        birthday: userData.birthday || ""
      });
    }
  }, [user]);

  if (isLoading) return null;
  if (!isLoggedIn) {
    router.replace("/login");
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 입력 시 해당 필드 에러 제거
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // 이름 검증
    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
    }

    // 이메일 검증
    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    }

    // 전화번호 검증
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "전화번호를 입력해주세요.";
    } else if (
      !/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(
        formData.phoneNumber
      )
    ) {
      newErrors.phoneNumber = "유효한 전화번호를 입력해주세요.";
    }

    // 생년월일 검증
    if (!formData.birthday) {
      newErrors.birthday = "생년월일을 입력해주세요.";
    } else {
      const birthDate = new Date(formData.birthday);
      const today = new Date();
      if (birthDate > today) {
        newErrors.birthday = "생년월일은 오늘 이전이어야 합니다.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const userData = (user as any)?.data;
      
      await updateUser({
        userId: userData.loginId,
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        birthday: formData.birthday.replace(/-/g, "") // YYYY-MM-DD를 YYYYMMDD로 변환
      });

      alert("프로필이 성공적으로 수정되었습니다.");
      router.push("/mypage/profile");
    } catch (error: any) {
      console.error("프로필 수정 오류:", error);
      alert(error.message || "프로필 수정 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push("/mypage/profile");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-6 flex items-center">
          <button
            type="button"
            onClick={handleCancel}
            className="mr-3 focus:outline-none text-main font-jj font-36pt cursor-pointer"
            aria-label="뒤로가기"
          >
            &lt; 기본정보 수정
          </button>
        </div>

        <div className="w-full max-w-[1000px] mx-auto">
          <div className="border-b-4 border-main mb-6"></div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-[#E5EAF2]">
                  <th className="py-4 px-6 text-left w-[160px] font-medium border-r border-[#E5EAF2] text-main">
                    이름
                  </th>
                  <td className="py-4 px-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-main ${
                        errors.name ? "border-red-300" : "border-[#E5EAF2]"
                      }`}
                      placeholder="이름을 입력하세요"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </td>
                </tr>
                <tr className="border-b border-[#E5EAF2]">
                  <th className="py-4 px-6 text-left w-[160px] font-medium text-main border-r border-[#E5EAF2]">
                    이메일
                  </th>
                  <td className="py-4 px-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-main ${
                        errors.email ? "border-red-300" : "border-[#E5EAF2]"
                      }`}
                      placeholder="이메일을 입력하세요"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </td>
                </tr>
                <tr className="border-b border-[#E5EAF2]">
                  <th className="py-4 px-6 text-left w-[160px] font-medium text-main border-r border-[#E5EAF2]">
                    일반전화
                  </th>
                  <td className="py-4 px-6">
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-main ${
                        errors.phoneNumber ? "border-red-300" : "border-[#E5EAF2]"
                      }`}
                      placeholder="전화번호를 입력하세요"
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
                    )}
                  </td>
                </tr>
                <tr className="border-b-3 border-sub-dark">
                  <th className="py-4 px-6 text-left w-[160px] font-medium text-main border-r border-[#E5EAF2]">
                    생년월일
                  </th>
                  <td className="py-4 px-6">
                    <input
                      type="date"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded focus:outline-none focus:border-main ${
                        errors.birthday ? "border-red-300" : "border-[#E5EAF2]"
                      }`}
                      max={new Date().toISOString().split("T")[0]}
                    />
                    {errors.birthday && (
                      <p className="mt-1 text-sm text-red-600">{errors.birthday}</p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div className="flex justify-center gap-4 py-6">
              <button
                type="button"
                onClick={handleCancel}
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 text-white rounded transition-colors ${
                  isSubmitting 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-main hover:bg-opacity-90"
                }`}
              >
                {isSubmitting ? "저장 중..." : "저장"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}