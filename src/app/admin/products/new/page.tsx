"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, X } from "lucide-react";
import { createDrink } from "@/lib/drink";
import { getCategories } from "@/lib/category";
import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const router = useRouter();
  const [productImage, setProductImage] = useState<string | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [name, setName] = useState("");
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [volume, setVolume] = useState("");
  const [status, setStatus] = useState("판매중");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);

  const MAX_SIZE_MB = 10;

  useEffect(() => {
    getCategories().then((data) => setCategories(data as any[]));
  }, []);

  // 이미지 업로드 핸들러
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        alert("이미지 파일은 10MB 이하만 업로드 가능합니다.");
        return;
      }
      setThumbnailFile(file);
      setProductImage(URL.createObjectURL(file));
    }
  };

  // 이미지 제거 핸들러
  const handleRemoveImage = () => {
    setProductImage(null);
    setThumbnailFile(null);
  };

  // 여러 장 이미지 업로드 핸들러
  const handleFilesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const validFiles = Array.from(files).filter(
        (file) => file.size <= MAX_SIZE_MB * 1024 * 1024
      );
      if (validFiles.length !== files.length) {
        alert("홍보/상세 이미지는 10MB 이하만 업로드 가능합니다.");
      }
      setImageFiles(validFiles);
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!thumbnailFile) {
      alert("썸네일 이미지를 업로드해주세요.");
      return;
    }
    if (
      !name ||
      !categoryId ||
      !price ||
      !stock ||
      !alcohol ||
      !volume ||
      !region
    ) {
      alert("모든 필수 정보를 입력해주세요.");
      return;
    }
    setLoading(true);
    try {
      await createDrink(
        {
          name,
          price: Number(price),
          stock: Number(stock),
          alcoholContent: Number(alcohol),
          volume: Number(volume),
          region,
          categoryId: Number(categoryId),
        },
        thumbnailFile,
        imageFiles
      );
      alert("상품이 등록되었습니다.");
      router.push("/admin/products");
    } catch (e) {
      alert("상품 등록에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/products"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          상품 목록으로 돌아가기
        </Link>
        <h1 className="text-2xl font-bold mb-2">새 상품 등록</h1>
        <p className="text-gray-500">새로운 전통주 상품 정보를 입력하세요.</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <form className="p-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 상품 이미지 업로드 */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                상품 대표 이미지 (썸네일)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                {productImage ? (
                  <div className="relative">
                    <img
                      src={productImage || "/placeholder.svg"}
                      alt="Product preview"
                      className="max-h-64 rounded-md"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-100"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none"
                      >
                        <span>이미지 업로드</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </label>
                      <p className="pl-1">또는 끌어서 놓기</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF 최대 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* 홍보/상세 이미지 업로드 */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                홍보/상세 이미지 (여러 장 가능)
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFilesUpload}
              />
              {imageFiles.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {imageFiles.map((file, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 rounded text-sm"
                    >
                      {file.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 상품명 */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                상품명
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="상품명을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* 카테고리 */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                카테고리
              </label>
              <select
                id="category"
                value={categoryId ?? ""}
                onChange={(e) => setCategoryId(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">카테고리 선택</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 가격 */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                가격
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="price"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-12"
                  placeholder="가격을 입력하세요"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">원</span>
                </div>
              </div>
            </div>

            {/* 재고 */}
            <div>
              <label
                htmlFor="stock"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                재고
              </label>
              <input
                type="number"
                id="stock"
                min="0"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="재고 수량을 입력하세요"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            {/* 도수 */}
            <div>
              <label
                htmlFor="alcohol"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                도수
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="alcohol"
                  min="0"
                  step="0.1"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-12"
                  placeholder="알코올 도수를 입력하세요"
                  value={alcohol}
                  onChange={(e) => setAlcohol(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">%</span>
                </div>
              </div>
            </div>

            {/* 용량 */}
            <div>
              <label
                htmlFor="volume"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                용량
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="volume"
                  min="0"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-12"
                  placeholder="용량을 입력하세요"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">ml</span>
                </div>
              </div>
            </div>

            {/* 지역 */}
            <div>
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                지역
              </label>
              <select
                id="region"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="">지역 선택</option>
                <option value="서울">서울</option>
                <option value="경기도">경기도</option>
                <option value="강원도">강원도</option>
                <option value="충청북도">충청북도</option>
                <option value="충청남도">충청남도</option>
                <option value="전라북도">전라북도</option>
                <option value="전라남도">전라남도</option>
                <option value="경상북도">경상북도</option>
                <option value="경상남도">경상남도</option>
                <option value="제주도">제주도</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-3">
            <Link
              href="/admin/products"
              className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
            >
              취소
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
              disabled={loading}
            >
              상품 등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
