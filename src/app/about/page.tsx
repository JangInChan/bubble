import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-[1600px] h-screen overflow-hidden">
      {/* 상단 50%: 001.jpg */}
      <div className="absolute top-0 left-0 w-full h-1/2">
        <Image
          src="/images/001.jpg"
          alt="소개 배경1"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
      </div>
      {/* 하단 50%: 002.jpg */}
      <div className="absolute bottom-0 left-0 w-full h-1/2">
        <Image
          src="/images/002.jpg"
          alt="소개 배경2"
          fill
          style={{ objectFit: "cover", objectPosition: "center bottom" }}
          priority
        />
      </div>
    </div>
  );
}
