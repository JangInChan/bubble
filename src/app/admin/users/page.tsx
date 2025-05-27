"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  Eye,
  Ban,
  CheckCircle,
} from "lucide-react";
import { getUsers } from "@/lib/user";

// 유저 타입 정의
interface User {
  userId: string;
  loginId: string;
  name: string;
  email: string;
  phoneNumber: string;
  birthday: string;
  createdAt: string;
  role: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const pageSize = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response: any = await getUsers(currentPage, pageSize);
        // 실제 API 응답 구조에 맞게 파싱
        const userData = response.data.content.map((item: any) => ({
          userId: item.userId,
          loginId: item.loginId,
          name: item.name,
          email: item.email,
          phoneNumber: item.phoneNumber,
          birthday: item.birthday,
          createdAt: item.createdAt,
          role: item.role,
        }));
        setUsers(userData);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("유저 데이터를 불러오는데 실패했습니다:", error);
      }
    };
    fetchUsers();
  }, [currentPage]);

  // 필터링된 유저 목록
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phoneNumber.includes(searchTerm);
    return matchesSearch;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">회원 관리</h1>
        <p className="text-gray-500">회원 정보를 관리하고 상태를 변경하세요.</p>
      </div>

      {/* 검색 및 필터 */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="이름, 이메일, 전화번호 검색..."
              className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="pl-10 pr-8 py-2 border rounded-md appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={selectedStatus || ""}
              onChange={(e) => setSelectedStatus(e.target.value || null)}
            >
              <option value="">모든 상태</option>
              <option value="활성">활성</option>
              <option value="비활성">비활성</option>
              <option value="정지">정지</option>
            </select>
          </div>
        </div>
      </div>

      {/* 유저 목록 테이블 */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600 text-sm">
                <th className="px-6 py-3 font-medium">
                  <div className="flex items-center">
                    ID
                    <ArrowUpDown className="w-4 h-4 ml-1" />
                  </div>
                </th>
                <th className="px-6 py-3 font-medium">이름</th>
                <th className="px-6 py-3 font-medium">이메일</th>
                <th className="px-6 py-3 font-medium">전화번호</th>
                <th className="px-6 py-3 font-medium">
                  <div className="flex items-center">
                    가입일
                    <ArrowUpDown className="w-4 h-4 ml-1" />
                  </div>
                </th>
                <th className="px-6 py-3 font-medium">
                  <div className="flex items-center">
                    주문수
                    <ArrowUpDown className="w-4 h-4 ml-1" />
                  </div>
                </th>
                <th className="px-6 py-3 font-medium">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.userId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{user.loginId}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">{user.email}</td>
                  <td className="px-6 py-4 text-sm">{user.phoneNumber}</td>
                  <td className="px-6 py-4 text-sm">
                    {user.createdAt ? user.createdAt.slice(0, 10) : ""}
                  </td>
                  <td className="px-6 py-4 text-sm">{user.role}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        className="p-1 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100"
                        title="회원 상세 정보"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 */}
        <div className="px-6 py-4 flex items-center justify-between border-t">
          <div className="text-sm text-gray-500">
            총 <span className="font-medium">{filteredUsers.length}</span>명의
            회원
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 rounded-md border hover:bg-gray-50"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="px-3 py-1 rounded-md bg-orange-600 text-white">
              {currentPage}
            </button>
            <button
              className="p-2 rounded-md border hover:bg-gray-50"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
