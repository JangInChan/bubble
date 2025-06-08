"use client";

import KoreaMap from "../map/KoreaMap";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getRankings } from "@/lib/rankings";

type RankingResponse = {
  region: string;
  ranking: { name: string; totalQuantity: number }[];
};

export default function HomePage() {
  const regions = [
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주도",
  ];
  const regionCodeMap: Record<string, string> = {
    경기도: "gyeonggi",
    강원도: "gangwon",
    충청북도: "chungbuk",
    충청남도: "chungnam",
    전라북도: "jeonbuk",
    전라남도: "jeonnam",
    경상북도: "gyeongbuk",
    경상남도: "gyeongnam",
    제주도: "jeju",
  };
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [ranking, setRanking] = useState<
    { name: string; totalQuantity: number }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRanking() {
      if (!selectedRegion) return;
      setLoading(true);
      setError(null);
      try {
        const code = regionCodeMap[selectedRegion];
        if (!code) throw new Error("지역 코드가 없습니다.");
        const data = (await getRankings(code)) as RankingResponse;
        setRanking(data.ranking);
      } catch (e: any) {
        setError(e.message || "랭킹을 불러오지 못했습니다.");
        setRanking([]);
      } finally {
        setLoading(false);
      }
    }
    fetchRanking();
  }, [selectedRegion]);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/test.svg')" }}
    >
      {/* Hero 영역 */}
      <section className="w-full flex flex-col items-center justify-center min-h-[600px] pt-24">
        <div className="w-full max-w-[520px] md:max-w-[700px] mx-auto">
          <KoreaMap />
        </div>
      </section>

      {/* 뱃지 랭킹 상단 타이틀 영역 */}
      <section className="w-full flex justify-center py-14">
        <div className="w-full max-w-[1200px] relative h-[107px] text-left text-[21px] text-darkslategray font-inter">
          {/* 블러 배경: 중앙 콘텐츠만 덮도록 */}
          {/* <div className="absolute left-[18%] top-0 w-[64%] h-full z-0">
            <Image
              src="/blur-bg-1.svg"
              alt="블러 배경"
              fill
              className="object-cover opacity-80"
            />
          </div> */}
          {/* 상단 구분선 (5px) */}
          <div
            className="absolute top-45 left-0 w-full z-10"
            style={{ borderTop: "5px solid #0E2E40" }}
          />
          {/* 하단 구분선 (0.75px) */}
          <div
            className="absolute top-75 bottom-0 left-0 w-full z-10"
            style={{ borderTop: "0.75px solid #0E2E40" }}
          />
          {/* 타이틀 텍스트 */}
          <div className="absolute font-pretendard text-[21px] text-main top-[211.71%] left-[14.02%] z-20">
            각 도 주류별 구매뱃지 보유자 랭킹
          </div>
          {/* 왼쪽 장식 - 피그마 기준 최대한 동일하게 조정 */}
          {/* <Image
            className="absolute z-20"
            style={{
              top: "38px",
              left: "18px",
              maxWidth: "none",
              maxHeight: "none",
            }}
            width={80}
            height={40}
            alt="뱃지 랭킹 타이틀 장식"
            src="/뱃지 랭킹_타이틀.svg"
          /> */}
          <div
            className="absolute z-20 font-jj font-extrabold text-[28px] text-main"
            style={{
              top: "222px",
              left: "18px",
              letterSpacing: "0.02em",
            }}
          >
            지역별 랭킹
          </div>
        </div>
      </section>

      {/* 지역별 랭킹 + 지도 flex 배치 */}
      {/* <section className="w-full flex justify-center py-8 relative min-h-[900px]">
        <div className="w-full max-w-[1200px] flex flex-row items-start">
          <div className="flex-1"></div>
          <Image
            src="/images/korea-map-2.svg"
            alt="한국 지도"
            width={420}
            height={1020}
            className="absolute"
            style={{
              right: "40px",
              bottom: "90px",
              width: "420px",
              height: "auto",
              zIndex: 10,
            }}
          />
        </div>
      </section> */}

      <section className="w-full flex flex-col items-center justify-center pt-40 pb-16">
        {/* 3x3 지역 버튼 그리드 - 더 넓게, 더 위로 */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-8 w-full mb-10 max-w-[1200px] mx-auto">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className="relative flex items-center justify-center w-full h-[52px] max-w-[322px] mx-auto group"
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <img
                src="/buy.svg"
                alt="지역 버튼 배경"
                className="absolute left-0 top-0 w-full h-full object-cover z-0 group-hover:opacity-90 transition-opacity"
                draggable={false}
              />
              <span className="relative z-10 font-pretendard font-light text-lg text-white select-none">
                {region}
              </span>
            </button>
          ))}
        </div>
        {/* 랭킹 기본 영역 및 안내 문구 */}
        <div className="w-full max-w-[600px] min-h-[320px] min-w-[320px] mx-auto mt-8 bg-white/80 rounded-lg shadow p-8 flex flex-col items-center justify-center">
          {!selectedRegion ? (
            <div className="text-gray-400 text-xl font-pretendard">
              지역을 클릭하여 확인해주세요
            </div>
          ) : (
            <>
              <div className="font-bold text-2xl mb-4 text-main">
                {selectedRegion} TOP 10
              </div>
              {loading ? (
                <div className="text-center text-gray-400">불러오는 중...</div>
              ) : error ? (
                <div className="text-center text-red-400">{error}</div>
              ) : ranking.length === 0 ? (
                <div className="text-center text-gray-400">
                  랭킹 데이터가 없습니다.
                </div>
              ) : (
                <ol className="list-decimal pl-6 w-full">
                  {ranking.map((item, idx) => (
                    <li
                      key={item.name}
                      className="mb-2 flex justify-between items-center"
                    >
                      <span className="font-semibold text-lg">{item.name}</span>
                      <span className="text-main font-bold">
                        {item.totalQuantity}개
                      </span>
                    </li>
                  ))}
                </ol>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
