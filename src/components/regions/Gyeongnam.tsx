import * as React from "react";

interface GyeongnamProps {
  hovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Gyeongnam: React.FC<GyeongnamProps> = ({
  hovered = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="232"
    height="187"
    fill="none"
    viewBox="0 0 232 187"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    style={{ cursor: "pointer", transition: "fill 0.2s", ...style }}
  >
    <g opacity={hovered ? "1" : "0.7"}>
      <path
        fill={hovered ? "#FFD700" : "url(#paint0_linear_156_3415)"}
        d="M86.35 186.3c4.52-1.1-3.01-6.81-5.27-5.14-4.28 3.16 2.88 5.72 5.27 5.14"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint1_linear_156_3415)"}
        d="M77.45 172.22c3.13 1.73-.57 3.6-2.67 2.83-2.64-.97.42-4.07 2.67-2.83"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint2_linear_156_3415)"}
        d="M75.56 150.46c4.05-1.26 2.28 6.68-1.41 4.04-1.89-1.35-.24-3.53 1.41-4.04"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint3_linear_156_3415)"}
        d="M78.93 155.94c-.32 4.39 6.67 5.89 6.15 1.47-.05-.42-5.92-4.73-6.15-1.47"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint4_linear_156_3415)"}
        d="M55.91 145.12c1.68-5.42-6.69-.07-7.3 3.67-.43 2.64.57 5.91 3.53 6.67.66.17 7.01-.25 7.12-.27 2.35-.48 2.84 1.44 3.99-1.66.71-1.92-2.37-1.14-2.73-2.03-.42-1.04 1.03-3.62-.3-4.48-3.19-2.07-2.58 2.14-4.64 2.78-2.27.7.43-4.98.34-4.67z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint5_linear_156_3415)"}
        d="M42.12 147.39c5.52-3.78-.5-12.33-6.22-5.72-1.17 1.35-1.14 3.5-2.16 4.86-.93 1.25-2.85 1.74-3.7 3.2-2.41 4.16.29 6.4 2.12 9.79.63 1.16 1.95 1.83 2.33 3.18.29 1.03-1.19 2.72-.89 3.86.92 3.47 4.16 5.99 7.34 3 1.55-1.46-.35-4.1 1.92-4.93 4.62-1.68 2.07 3.65 3.25 5.56 2.33 3.77 3.64 1.3 7.01 1.91 2.15.39 3.36 4.36 5.73 1.32.82-1.06-.37-3.65-.03-4.94.76-2.9 3.56-4.6 2.16-8.35-3.14-8.42 1.11-15.1-1.04.7.32-3.2-4.93-3.08-4.71-.99-1.93-4.07-4.66-.68-6.99"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint6_linear_156_3415)"}
        d="M96.46 154.46c5.03 1.65-2.55 3.87-1.97 2.85.19-.35-1.75-4.07 1.97-2.85"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint7_linear_156_3415)"}
        d="M99.97 153.66c1.94 3.08.11 1.36.22 3.34.11 2.03-3.7 3.48.99 6.76 3.29 2.3 1.97 1.45 3.88-1.64.57-.92 1.66-3.38 1.9-4.57.21-1.03-1.05-3.04-.96-3.39.37-1.4 7.21-8.94 2.61-8.8-.6.02-8.42 8.66-8.64 8.31z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint8_linear_156_3415)"}
        d="M113.56 159.15c-.72-1.67-3.85 3.18-3.52 2.36-.54 1.34-1.02 1.31-1.05 3.16.02-1.22 3.42 5.05 2.17 4.19 2.18 1.5.49 1.75 2.51.79-1.74.83 1.45-6.09 1.44-4.25 0-1.91-.51-3.83-1.55-6.25"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint9_linear_156_3415)"}
        d="M114.92 136.32c.88-5.53 2.81-.51 3.07.56 1.62 6.75-3.37 1.36-3.07-.56"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint10_linear_156_3415)"}
        d="M153.5 130.95c.22-2.09-4.72-13.43 2.58-9.41 1.78.98.66 5.2.16 6.55.44-1.21-3.16 6.82-2.75 2.86z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint11_linear_156_3415)"}
        d="M138.83 130.38c2.52-2.44 1.13-6.1-2.31-4.51-1.79.83-2.3 6.86-4.45 8.76-1.58 1.4-5.08 1.29-6.12 2.8-2.32 3.36 5.88 3.89 2.56 7.36-4.35-4.86-2.94.26-6.17.31-2.45.03-1.47-2.59-4.66-2.16-1.37.18-3.25 2.17-4.1 3.16-4.09 4.76-2.15 6.3.94 9.26 3.17 3.03 1.53 2.18 4.43.84 1.4-.64 3.63-4.8 5.86-2.85 4.3 3.75-2 5.11-3.03 6.44-4.83 6.27 1.54 2.37 2.5 3.5 1.54 1.82-.12 3.03-.12 5.4 0-.05 2.17 1.76 2.24 2.02.38 1.3-3.42.98-1.57 3.21 2.77 3.33 5.24-.6 6.56-3.27 1.39-2.81 1.59-5.43 3.03-8.24.48-.93.28-2.56 1.14-3.24 1.02-.81 3.5 1.11 4.43.24 2.44-2.28-.61-3.16.07-5.71.38-1.44 3.67-.29 3.57-3.04-.05-1.41-1.86-1.75-2.01-2.12-.14-.35-2.11 1.44-2.88.19-1.25-2.02 1.65-3.44 2.03-5.32.64-3.12-4.08-10.95-1.95-13.02z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint12_linear_156_3415)"}
        d="M228.68 55.9c-.37 1.93.39 6.06-2.72 6.27-4.24.27.1-5.6-3.07-6.05-1.11-.16-4.13 13.72-4.01 15.46.48 7.29.39 4.48-3.25 8.07-1.83 1.82-2.66 5.17-5.94 4.73-4.79-.63-2.96 6.26-3.45 9.54-.89 6.03-2.25 9.22-6.65 12.73-1.67 1.34-3.58 1.82-5.33 3.41-.97.88-2.81 3.38-3.05 3.57-2.4 1.96-1.07 2.75-5.25 2.35-1.62-.16-2.33-3.25-4.11-1.81-3.02 2.44 5.51 4.98 2.05 7.74-1.71 1.36-2.75-2.96-3.68-2.83-3.25.47-1.19 1.4-3.09 3.01-2 1.72-2.93 4.2-6.15 1.96-1.5-1.04-1.11-5.95-2.6-6.28-2.15-.49-2.75 2.97-4.01 2.62-1.1-.3-1.38-2.58-1.48-2.62.17.04-1.69-1.57-2.09-1.65.6.12-1.36 2.55-2.02 2.63-.92.11-2.1-.53-3.22-1.53.19.27.36.49.48.68-2.61.15-4.51-1.02-6.57-1.11-.99-.03-3.22.44-4.25.35-2.41-.21-3.63.32-5.72-1.27-1.87-1.44-.89-4.52-2.97-5.77-1.97-1.2-4.53 1.07-6.74.16-2.53-1.03-.01-4.62-3.99-4.27-5.97.53 2.43 7.56 3.07 8.87 2.47 5.01-.13 7.59-4.66 7.8-5.06.25-2.34.08-3.22-3.11-.22-.77 1.73-.48.67-2.27-1.23-2.06-2.5-1.71-4.22-1.99.12.01-3.45 1.46-4.03 1.45-2.26-.03-4.33-3.14-6.48-.13 9.26 5.37 4.41 4.87-1.87 5.04-4.66.12-9.68 6.45-3.76 5.67 3.05-.41 9.85-8.47 11.64-.29 1.71 7.88-8.46 2.43-9.64 5.5.29.93 3.06 1.07 3.53 2.17.37.86-1.16 5.28-1.34 6.26-.96 5.25-4.63 11.29-11.69 8.81-7.78-2.74 3.45-6.16.25-11.5-3.58-5.97-3.22 5.81-7.86 4.9-2.86-.56-1.46-3.97-5.8-3.38-4.6.63-1.22 2.54-3.41 4.6-5.74 5.41-11.2-1.7-14.85-3.5-3.14-1.55-4.28.21-5.13-3.82-.4-1.89 1.15-5.4 1.44-7.31.18-1.23 2.36-9.3-.36-8.96-1.64.2-1.13 4.65-3.44 5.38.07-1.62-3.29-2.84-3.57-1.27-.29 1.61 8.5 4.87 1.29 8.59-6.1 3.13-4.71-4.17-6.75-4.9-3.11-1.11-2.76 6.36-4.73 8.09-1.59 1.4-8.91 2.63-11.05 2.49-5.71-.36-5.69-1.99-5.08-6.09 1-2.77 1.61-6.76.73-8.82-1.12-2.6-3.56-3.07-5.44-4.84-2.36-2.19-2.44-4.08-4.19-6.59-1.33-1.9-3.03-2.94-4.77-3.95-.42-.37-.89-.74-1.41-1.12-5.65-4.16-6.1-7.27-7.67-13.98-.18-1.25-.44-2.49-.76-3.71-.15-.21-.27-.41-.36-.59-.11-.47-.23-.94-.37-1.41q0-.12.06-.21c1.79.74 6.44-2.94 7.14-4.26.48-.91.66-1.81.68-2.71v-.04l.06-.3c.34-2.22-.76-3.98-.38-6.12.03-.17.07-.32.11-.49s.1-.34.17-.5c.74-1.92 4.93-1.39 4.64-4.82-.07-.75-.38-1.21-.82-1.53-.01-.11-.03-.22-.04-.34-.12 0-2.74-2.09-3.03-2.85.07-1.34.79-2.75.72-4.02-.09-1.35-.37-2.5-.75-3.53-.11-.59-.3-1.2-.6-1.8-.95-1.89-1.84-3.04-2.53-4.05-.88-1.74-1.46-3.68-1.05-6.43.03-.2.07-.42.11-.64.06-.28.11-.56.19-.84.03-.15.07-.29.1-.42.04-.21.1-.42.18-.64.54-1.82 1.29-3.66 2.01-5.43.02-.07.06-.13.08-.19 1.15-2.59 2.45-5.13 3.5-7.7.01-.02.02-.03.03-.06.83-1.62 1.55-3.25 1.84-4.76.32-1.77-.35-3.68.04-5.37 0-.02.01-.03.01-.04 1.17-2.18 2.48-1.02 4.22-2.5 2.99-2.55 5.39-4.43 8.3-6.55.55-.39 1.12-.82 1.72-1.24 1.12-.79 2.09-1.55 3.07-2.28.97-.7 1.95-1.38 3.06-2.03 1.25.18 2.37-.04 3.33-.7.01 0 .02-.01.03-.01.75-.28 1.23-.89 1.05-2.52.68.18 1.27.44 1.81.74.26.22.54.47.86.73.73.58 1.34.93 1.9 1.11 0 0 0 .01.01.01.65.39 1.35.74 2.19.94a7.55 7.55 0 0 1 3.86-1.19c.15.06.28.12.4.19.16.08.3.18.44.27q1.05.765 1.41 2.16.39.285.69.57c.83 1.54 1.67 3.14 3.86 3.9.53.18 1.11.23 1.72.2.23.02.5.04.78.07 1.96.12 4.93-1.61 7.14-1.48.22.06.45.15.65.26 2.29 1.36.04 2.93 1.22 4.43.11 1.49.86 2.15 2.27 1.97 1.49 2.16 4.19 3.89 5.57 7.45 1.12 2.88.27 10.52 1.3 12.24 1.07 1.81 3.71 2.14 6.14 2.14h.04c1.55.19 3.15.04 4.76-.08 3.26.04 5.5.34 8.8 1.53.6.21 1.1.41 1.51.58 1.08.59 1.65.96 2.47.92.66.04 1.41-.31 3.76-1.1 3.01-1.01 6.08-2.61 9.22-3.09 3.56-.1 6.81 1.24 9.37 4.56.94 2.16 1.59 4.71 3.1 5.51.02.01.06.02.09.03 1.49.61 7.33-.77 10.49-.79 3.63 1.01 7.82 3.91 11.01 3.24.26-.06.49-.13.7-.23 1.68-.68 5.09-2.67 6.54-3.53 1.01-.03 2.01-.07 2.8-.45.03-.01.06-.03.09-.04.32-.13.64-.32.93-.57.02-.02.04-.03.07-.04 2.83-2.07 2.55-4.79 7.24-5.14.07 0 .13-.01.21 0 2.09.31 4.18 1.26 6.25 1.67.51.1 1.03.16 1.52.2 1.24.32 2.45.53 3.57.39.13-.01.26-.03.38-.06 1.88-1.93 3.75-2.06 5.33-3.06.76-.46 1.44-1.13 2.03-2.29 1.34-2.58-.5-4.75 2.5-7.37.25-.21.5-.41.79-.59.12-.08.25-.16.37-.22 2.74-1.45 6.37-1.5 9.3-1.27 1.42.11 2.96.16 4.38.55.1.02.2.07.3.1 1.79.7 2.88 1.84 3.73 3.09.45.92.77 1.88 1.7 2.81 0 0 0 .01.01.01.92 1.49 2 2.75 4.11 3.15 2.59.5 5.48-1.81 8.09-2.11l.29-.03c.1-.01.2-.01.29-.01 2.11-.07 3.99.36 6.28.48.03 0 .07 0 .1.01 1.32.27 2.64.65 3.94 1.07-1.21 2.82-.95 4.6 1.23 6.61 1.46 1.36-2.54 12.28-3 14.68z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint13_linear_156_3415)"}
        d="M.84 89.46C.53 88.9.4 88.43.47 88.05c.13.47.26.94.37 1.41"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint14_linear_156_3415)"}
        d="M7.43 36.07c-.73 1.78-1.48 3.61-2.01 5.43.5-1.86 1.22-3.66 2.01-5.43"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint15_linear_156_3415)"}
        d="M8.35 80.87c-.02.89-.2 1.8-.68 2.71-.7 1.32-5.36 5-7.14 4.26.23-.67 1.19-.97 2.84-.91 2.38-2.43 4.27-2.01 4.99-6.06z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint16_linear_156_3415)"}
        d="M9.02 56.31c-.84-2.26-2.17-3.94-3.13-5.84.68 1.01 1.58 2.16 2.53 4.05.3.6.49 1.21.6 1.79"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint17_linear_156_3415)"}
        d="M12.13 67.07c-.96-.75-2.5-.82-2.93-2.01-.13-.38-.17-.77-.15-1.17.29.76 2.91 2.85 3.03 2.85.01.11.03.22.04.34z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint18_linear_156_3415)"}
        d="M12.89 23.36c-.29 1.51-1.02 3.14-1.84 4.76.41-1.03.81-2.08 1.12-3.13.6-1.98-.12-5.09.6-6.67.06-.12.11-.22.17-.32-.39 1.69.28 3.6-.04 5.37z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint19_linear_156_3415)"}
        d="M25.03 130.91c1.13-8.32-1.05-6.82-6-12.28-3.57-3.94-4.27-6.6-7.99-9.77 1.74 1.01 3.44 2.05 4.77 3.95 1.76 2.5 1.83 4.39 4.19 6.59 1.89 1.77 4.33 2.24 5.44 4.84.88 2.06.27 6.05-.73 8.82.1-.65.21-1.36.31-2.15z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint20_linear_156_3415)"}
        d="M36.65 2.63c-.96.66-2.08.88-3.33.7.98-.58 2.37-.37 3.33-.7"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint21_linear_156_3415)"}
        d="M42.31 2.68c-.56-.18-1.17-.53-1.9-1.11-.32-.26-.6-.5-.86-.73 1.01.56 1.83 1.25 2.76 1.83z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint22_linear_156_3415)"}
        d="M56.88 9.73c-.61.03-1.2-.02-1.72-.2-2.19-.76-3.03-2.36-3.86-3.9 2.06 1.87 2.03 3.66 5.58 4.1"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint23_linear_156_3415)"}
        d="M66.68 13.01c-1.17-1.5 1.07-3.06-1.22-4.43-.2-.11-.42-.2-.65-.26.55.03 1.05.17 1.48.49.65 1.35.78 2.75.39 4.19z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint24_linear_156_3415)"}
        d="M86.76 36.72c-1.61.12-3.21.27-4.76.08 1.32 0 2.58-.09 3.48-.09.45 0 .87 0 1.29.01z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint25_linear_156_3415)"}
        d="M99.54 39.75c-.82.04-1.39-.32-2.47-.92 1.4.57 1.9.89 2.47.92"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint26_linear_156_3415)"}
        d="M121.89 40.13c-2.56-3.32-5.81-4.66-9.37-4.56 2.46-.39 4.94-.08 7.46 1.76.84.6 1.41 1.64 1.91 2.81z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint27_linear_156_3415)"}
        d="M146.57 48.13c-3.2.67-7.38-2.24-11.01-3.24q.72-.015 1.23.09c2.94.6 6.76 3.68 9.78 3.15"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint28_linear_156_3415)"}
        d="M156.61 43.91c-.78.38-1.79.41-2.8.45.22-.12.39-.23.51-.3.85.16 1.6.11 2.28-.15z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint29_linear_156_3415)"}
        d="M165.16 38.11c-.08-.01-.15 0-.21 0-4.7.36-4.42 3.07-7.24 5.14q.42-.375.78-.87c.74-1.48 1.71-2.78 2.92-3.91 1.25-.51 2.5-.56 3.76-.36z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint30_linear_156_3415)"}
        d="M176.49 40.37c-1.12.13-2.33-.07-3.57-.39 1.31.1 2.54.09 3.57.39"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_156_3415"
        x1="85.03"
        x2="82.64"
        y1="181.82"
        y2="185.95"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_156_3415"
        x1="77.16"
        x2="75.25"
        y1="172.05"
        y2="175.36"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_156_3415"
        x1="76.96"
        x2="74.48"
        y1="150.42"
        y2="154.72"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint3_linear_156_3415"
        x1="82.82"
        x2="80.69"
        y1="155.69"
        y2="159.39"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint4_linear_156_3415"
        x1="59.38"
        x2="52.98"
        y1="145.07"
        y2="156.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint5_linear_156_3415"
        x1="53.33"
        x2="38.59"
        y1="146.19"
        y2="171.73"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint6_linear_156_3415"
        x1="96.72"
        x2="94.85"
        y1="154.46"
        y2="157.71"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint7_linear_156_3415"
        x1="109.75"
        x2="99.67"
        y1="145.57"
        y2="163.04"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint8_linear_156_3415"
        x1="115.13"
        x2="110.01"
        y1="159.9"
        y2="168.77"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint9_linear_156_3415"
        x1="118.1"
        x2="115.64"
        y1="134.86"
        y2="139.12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint10_linear_156_3415"
        x1="156.15"
        x2="150.98"
        y1="121.58"
        y2="130.53"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint11_linear_156_3415"
        x1="141.52"
        x2="116.95"
        y1="127.12"
        y2="169.69"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint12_linear_156_3415"
        x1="150.09"
        x2="54.02"
        y1="-11.79"
        y2="154.61"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint13_linear_156_3415"
        x1="0.91"
        x2="0.39"
        y1="88.31"
        y2="89.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint14_linear_156_3415"
        x1="7.86"
        x2="5"
        y1="36.32"
        y2="41.26"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint15_linear_156_3415"
        x1="7.25"
        x2="2.27"
        y1="80.24"
        y2="88.85"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint16_linear_156_3415"
        x1="8.33"
        x2="6.58"
        y1="51.88"
        y2="54.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint17_linear_156_3415"
        x1="10.9"
        x2="10.22"
        y1="64.94"
        y2="66.11"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint18_linear_156_3415"
        x1="14.42"
        x2="9.56"
        y1="18.85"
        y2="27.27"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint19_linear_156_3415"
        x1="21.4"
        x2="14.35"
        y1="114.85"
        y2="127.07"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint20_linear_156_3415"
        x1="35.55"
        x2="34.41"
        y1="2"
        y2="3.97"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint21_linear_156_3415"
        x1="40.98"
        x2="40.83"
        y1="1.67"
        y2="1.93"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint22_linear_156_3415"
        x1="54.29"
        x2="53.51"
        y1="7.35"
        y2="8.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint23_linear_156_3415"
        x1="66.69"
        x2="64.96"
        y1="9.03"
        y2="12.02"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint24_linear_156_3415"
        x1="84.99"
        x2="83.77"
        y1="35.7"
        y2="37.82"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint25_linear_156_3415"
        x1="98.41"
        x2="98.19"
        y1="39.1"
        y2="39.49"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint26_linear_156_3415"
        x1="118.16"
        x2="117.02"
        y1="36.2"
        y2="38.17"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint27_linear_156_3415"
        x1="141.74"
        x2="140.39"
        y1="45.34"
        y2="47.67"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint28_linear_156_3415"
        x1="155.66"
        x2="154.77"
        y1="43.36"
        y2="44.91"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint29_linear_156_3415"
        x1="163.47"
        x2="159.38"
        y1="37.14"
        y2="44.22"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint30_linear_156_3415"
        x1="175.07"
        x2="174.35"
        y1="39.55"
        y2="40.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default Gyeongnam;
