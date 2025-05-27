"use client";

import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/common/auth-provider";
import { deleteUser, updateUserInfo } from "@/lib/auth";
import apiClient from "@/lib/api-client";
import type { User } from "@/lib/auth";
import { useAuthStore } from "@/store/auth";

export default function MyPage() {
  const { user: zustandUser, logout } = useAuth();
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();
  const [user, setUserState] = useState(zustandUser);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    birthday: user?.birthday || user?.birthDay || "",
  });
  const [isSaving, setIsSaving] = useState(false);

  // 마이페이지 진입 시 사용자 정보 fetch
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await apiClient.get("/api/users");
        const fetchedUser = (res.data as any).data as User;
        setUserState(fetchedUser);
        setEditForm({
          name: fetchedUser.name || "",
          email: fetchedUser.email || "",
          phoneNumber: fetchedUser.phoneNumber || "",
          birthday: fetchedUser.birthday || fetchedUser.birthDay || "",
        });
      } catch (e) {
        setUserState(null);
      }
    }
    if (!zustandUser) {
      fetchUser();
    }
  }, [zustandUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!user) return;
    setIsSaving(true);
    try {
      const updated = await updateUserInfo({
        userId: user.id,
        name: editForm.name,
        email: editForm.email,
        phoneNumber: editForm.phoneNumber,
        birthday: editForm.birthday,
      });
      setUserState((updated as any).data);
      setUser((updated as any).data);
      setIsEditModalOpen(false);
      alert("회원 정보가 수정되었습니다.");
    } catch (e) {
      alert("회원 정보 수정에 실패했습니다.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!confirm("정말 탈퇴하시겠습니까?")) return;
    setIsDeleting(true);
    try {
      await deleteUser();
      logout();
      router.push("/");
    } catch (error) {
      console.error("회원 탈퇴 실패:", error);
      alert("회원 탈퇴에 실패했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (!user) return null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">마이페이지</h1>
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">회원 정보</h2>
        <div className="space-y-2 text-gray-700">
          <div>
            <span className="font-semibold">이름:</span> {user.name}
          </div>
          <div>
            <span className="font-semibold">이메일:</span> {user.email}
          </div>
          <div>
            <span className="font-semibold">전화번호:</span> {user.phoneNumber}
          </div>
          <div>
            <span className="font-semibold">생년월일:</span>{" "}
            {user.birthday || user.birthDay || ""}
          </div>
        </div>
        <div className="flex gap-2 mt-6">
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors shadow"
          >
            수정하기
          </button>
          <button
            onClick={handleDeleteAccount}
            disabled={isDeleting}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:bg-red-300 transition-colors shadow"
          >
            {isDeleting ? "탈퇴 중..." : "회원 탈퇴"}
          </button>
        </div>
      </div>

      {/* 수정 모달 */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 animate-fadeIn">
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              회원 정보 수정
            </h3>
            <div className="space-y-4">
              <label className="block">
                <span className="font-semibold">이름</span>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </label>
              <label className="block">
                <span className="font-semibold">이메일</span>
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </label>
              <label className="block">
                <span className="font-semibold">전화번호</span>
                <input
                  type="text"
                  name="phoneNumber"
                  value={editForm.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </label>
              <label className="block">
                <span className="font-semibold">생년월일</span>
                <input
                  type="date"
                  name="birthday"
                  value={editForm.birthday}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </label>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300 transition-colors shadow"
              >
                {isSaving ? "저장 중..." : "저장"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
