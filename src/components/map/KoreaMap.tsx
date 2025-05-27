"use client";

import Link from "next/link";

// const regions = [
//   {
//     name: "서울",
//     code: "seoul",
//     top: "27%",
//     left: "38%",
//     description: "서울 지역의 전통주",
//   },
//   {
//     name: "경기도",
//     code: "gyeonggi",
//     top: "20%",
//     left: "42%",
//     description: "경기도 지역의 전통주",
//   },
//   {
//     name: "강원도",
//     code: "gangwon",
//     top: "20%",
//     left: "58%",
//     description: "강원도 지역의 전통주",
//   },
//   {
//     name: "충청북도",
//     code: "chungbuk",
//     top: "38%",
//     left: "50%",
//     description: "충청북도 지역의 전통주",
//   },
//   {
//     name: "충청남도",
//     code: "chungnam",
//     top: "42%",
//     left: "35%",
//     description: "충청남도 지역의 전통주",
//   },
//   {
//     name: "전라북도",
//     code: "jeonbuk",
//     top: "58%",
//     left: "38%",
//     description: "전라북도 지역의 전통주",
//   },
//   {
//     name: "전라남도",
//     code: "jeonnam",
//     top: "72%",
//     left: "35%",
//     description: "전라남도 지역의 전통주",
//   },
//   {
//     name: "경상북도",
//     code: "gyeongbuk",
//     top: "48%",
//     left: "66%",
//     description: "경상북도 지역의 전통주",
//   },
//   {
//     name: "경상남도",
//     code: "gyeongnam",
//     top: "67%",
//     left: "58%",
//     description: "경상남도 지역의 전통주",
//   },
//   {
//     name: "제주도",
//     code: "jeju",
//     top: "92.6%",
//     left: "27%",
//     description: "제주도 지역의 전통주",
//   },
// ];

export default function KoreaMap() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full max-w-2xl">
        <img
          src="/images/korea-map.svg"
          alt="한국 지도"
          className="w-full h-auto"
        />
        {/* {regions.map((region) => (
          <Link
            key={region.code}
            href={`/categories/${region.code}`}
            className="absolute group text-sm font-semibold text-white transition"
            style={{
              top: region.top,
              left: region.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="relative inline-block px-2 py-1">
              <span className="absolute inset-0 rounded-full bg-primary-100 opacity-0 scale-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 z-[-1]" />
              <span className="relative z-10">{region.name}</span>
            </span>
          </Link>
        ))} */}
      </div>
    </div>
  );
}
