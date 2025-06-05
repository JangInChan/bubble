import Image from "next/image";

export default function AboutPage() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "800px",
        overflow: "hidden",
        flex: 1,
      }}
    >
      <Image
        src="/images/gijuIntro.jpeg"
        alt="기주 소개 이미지"
        layout="fill"
        objectFit="cover"
        objectPosition="center -90px"
        priority
      />
    </div>
  );
}
