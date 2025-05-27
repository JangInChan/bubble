"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Plus,
  Filter,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  RefreshCw,
} from "lucide-react";
import { deleteDrink, getDrink, restoreDrink } from "@/lib/drink";

// 상품 타입 정의
interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: "판매중" | "품절" | "숨김";
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    // 예시: 1~10번 상품을 불러온다고 가정 (실제 구현 시 전체 목록 API 필요)
    Promise.all(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) =>
        getDrink(id).catch(() => null)
      )
    ).then((drinks) => {
      setProducts(
        drinks.filter(Boolean).map((drink: any) => ({
          id: drink.id,
          name: drink.name,
          category: drink.category?.name || "",
          price: drink.price.toLocaleString() + "원",
          stock: drink.stock,
          status: drink.is_delete ? "숨김" : "판매중",
        }))
      );
    });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 상품 삭제 핸들러 (soft delete)
  const handleDeleteProduct = async (id: number) => {
    if (!window.confirm("정말로 이 상품을 숨기시겠습니까?")) return;
    try {
      await deleteDrink(id);
      setProducts(
        products.map((p) => (p.id === id ? { ...p, status: "숨김" } : p))
      );
      alert("숨김 처리되었습니다.");
    } catch (e) {
      alert("숨김 실패");
    }
  };

  // 상품 재판매(복구) 핸들러
  const handleRestoreProduct = async (id: number) => {
    try {
      await restoreDrink(id);
      setProducts(
        products.map((p) => (p.id === id ? { ...p, status: "판매중" } : p))
      );
      alert("재판매 처리되었습니다.");
    } catch (e) {
      alert("재판매 실패");
    }
  };

  // 필터링된 상품 목록
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  // 카테고리 목록
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">상품 관리</h1>
          <p className="text-gray-500">
            전통주 상품을 관리하고 새 상품을 등록하세요.
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />새 상품 등록
        </Link>
      </div>

      {/* 검색 및 필터 */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="상품명 검색..."
              className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="pl-10 pr-8 py-2 border rounded-md appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={selectedCategory || ""}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
            >
              <option value="">모든 카테고리</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 상품 목록 테이블 */}
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
                <th className="px-6 py-3 font-medium">
                  <div className="flex items-center">
                    상품명
                    <ArrowUpDown className="w-4 h-4 ml-1" />
                  </div>
                </th>
                <th className="px-6 py-3 font-medium">카테고리</th>
                <th className="px-6 py-3 font-medium">
                  <div className="flex items-center">
                    가격
                    <ArrowUpDown className="w-4 h-4 ml-1" />
                  </div>
                </th>
                <th className="px-6 py-3 font-medium">
                  <div className="flex items-center">
                    재고
                    <ArrowUpDown className="w-4 h-4 ml-1" />
                  </div>
                </th>
                <th className="px-6 py-3 font-medium">상태</th>
                <th className="px-6 py-3 font-medium">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{product.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium">{product.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">{product.price}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={product.stock === 0 ? "text-red-500" : ""}>
                      {product.stock}개
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        product.status === "판매중"
                          ? "bg-green-100 text-green-800"
                          : product.status === "품절"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <Link
                        href={`/admin/products/${product.id}/edit`}
                        className="p-1 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-100"
                      >
                        <Edit className="w-5 h-5" />
                      </Link>
                      {product.status === "숨김" ? (
                        <button
                          onClick={() => handleRestoreProduct(product.id)}
                          className="p-1 text-green-600 hover:text-green-800 rounded-full hover:bg-green-100"
                        >
                          <RefreshCw className="w-5 h-5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-1 text-red-600 hover:text-red-800 rounded-full hover:bg-red-100"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
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
            총 <span className="font-medium">{filteredProducts.length}</span>개
            상품
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-md border hover:bg-gray-50">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="px-3 py-1 rounded-md bg-orange-600 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-md hover:bg-gray-50">2</button>
            <button className="px-3 py-1 rounded-md hover:bg-gray-50">3</button>
            <button className="p-2 rounded-md border hover:bg-gray-50">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
