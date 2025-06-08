"use client";
import { useAuth } from "@/components/common/auth-provider";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user, isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) return null;
  if (!isLoggedIn) {
    router.replace("/login");
    return null;
  }

  // 실제 유저 정보는 user.data에 있음
  const userData = (user as any)?.data || {};

  let birth = "-";
  if (userData.birthday) {
    const [y, m, d] = userData.birthday.split("-");
    birth = `${y}-${m}-${d}`;
  }

  // 전화번호 포맷팅 함수 (표시용)
  const formatPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber) return "-";
    
    // 숫자만 추출
    const numbers = phoneNumber.replace(/\D/g, "");
    
    // 010-1234-5678 형태로 포맷팅
    if (numbers.length === 11) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
    }
    // 기타 경우는 원본 반환
    return phoneNumber;
  };

  const handleEditClick = () => {
    router.push("/mypage/profile/edit"); // 수정 페이지로 이동
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen">
      <div className="w-full max-w-[1000px]">
        <div className="mb-4 flex justify-between items-end">
          <h1 className="font-jj text-[36px] font-extrabold text-main">
            기본정보
          </h1>
          <button
            onClick={handleEditClick}
            className="px-6 py-2 bg-main text-white rounded hover:bg-opacity-90 transition-colors"
          >
            수정하기
          </button>
        </div>
        <div className="border-b-4 border-main"></div>
        <div className="bg-white overflow-hidden">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-[#E5EAF2]">
                <th className="py-4 px-6 text-left w-[160px] font-medium text-main border-r border-[#E5EAF2]">
                  아이디
                </th>
                <td className="py-4 px-6">{userData.loginId || "-"}</td>
              </tr>
              <tr className="border-b border-[#E5EAF2]">
                <th className="py-4 px-6 text-left w-[160px] font-medium border-r border-[#E5EAF2] text-main">
                  이름
                </th>
                <td className="py-4 px-6">{userData.name || "-"}</td>
              </tr>
              <tr className="border-b border-[#E5EAF2]">
                <th className="py-4 px-6 text-left w-[160px] font-medium text-main border-r border-[#E5EAF2]">
                  이메일
                </th>
                <td className="py-4 px-6">{userData.email || "-"}</td>
              </tr>
              <tr className="border-b border-[#E5EAF2]">
                <th className="py-4 px-6 text-left w-[160px] font-medium text-main border-r border-[#E5EAF2]">
                  일반전화
                </th>
                <td className="py-4 px-6">{formatPhoneNumber(userData.phoneNumber)}</td>
              </tr>
              <tr className="border-b-3 border-sub-dark">
                <th className="py-4 px-6 text-left w-[160px] font-medium text-main border-r border-[#E5EAF2]">
                  생년월일
                </th>
                <td className="py-4 px-6">{birth}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}