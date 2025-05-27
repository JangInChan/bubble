import * as React from "react";

interface JeonnamProps {
  hovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Jeonnam: React.FC<JeonnamProps> = ({
  hovered = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="232"
    height="188"
    fill="none"
    viewBox="0 0 232 188"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    style={{ cursor: "pointer", transition: "fill 0.2s", ...style }}
  >
    <g opacity={hovered ? "1" : "0.7"}>
      <path
        fill={hovered ? "#FFD700" : "url(#paint0_linear_156_3716)"}
        d="M27.51 59.23c1.07 6.39-11.46 3.44-7.37-2.79.66-1 7.83-7.84 9.3-6.03.89 1.11-2.26 6.83-1.93 8.82"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint1_linear_156_3716)"}
        d="M33.44 65.18c-1.22-.65-8.74-1.43-1.98-3.27 5.2-1.42 6.45 5.67 1.98 3.27"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint2_linear_156_3716)"}
        d="M28.4 70.24c-4.48-.5 1.08-5.54 4.69-1.75 1.31 1.38 2.68 2.8.35 4.2-2.03 1.22-3.03-2.23-5.04-2.45"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint3_linear_156_3716)"}
        d="M45.41 70.07c1.9.55 1.53 2.91-.3 3.22-3.37.57-2.15-3.94.3-3.22"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint4_linear_156_3716)"}
        d="M10.28 104.24c-1.41.88-3.41.28-4.63 1.47-.99.96.56 3.2-.84 4.29-3.66 2.86-6.29-3.34-3.69-6.15 1.14-1.23 2.83-.2 3.94-.95.6-.4 2.24-2.18 2.85-2.42 1.82-.72 2.61-3.8 4.18-1.24.69 1.12-.91 4.44-1.82 5z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint5_linear_156_3716)"}
        d="M7.63 113.05c-1.23 1.12-2.88.18-3.78 1.83-1.68 3.1 1.37 4.09 3.65 4.02 6.44-.2 5.95-11.14.13-5.85"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint6_linear_156_3716)"}
        d="M17.24 132.53c-3.63.49-4.53-9.01-.33-8.67-.95-.08 1.61 4.56 1.53 4.12.26 1.38 3.15 3.95-1.2 4.55"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint7_linear_156_3716)"}
        d="M22.35 128.97c.4 2.86-6.83 11.77.81 5.76 2.14-1.68 3.96-3.04 2.82-6.45.17.52-4.8-4.65-4.34-4.45-3.66-1.54.75 5.45.71 5.15z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint8_linear_156_3716)"}
        d="M29.98 120.34c-1.19 1.88-3.3 2.8-.7 4.84-.62-.49 5.01-.62 4.5-.2 3.25-2.66-1.26-8.69-3.8-4.63z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint9_linear_156_3716)"}
        d="M22.3 88.15c-.61 2.39-3.41 2.79-5.19 1.27-2.67-2.28.43-5.17 1.22-6.15 5.13-6.45 5.34-.51 3.97 4.88"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint10_linear_156_3716)"}
        d="M31.87 87.68c2 .96-2.52 6.34-4.55 2.22-1.7-3.44 2.67-3.12 4.55-2.22"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint11_linear_156_3716)"}
        d="M25.43 92.44c-.81.25-7.44-.41-4 3.39 3.52 3.89 7.86-4.58 4-3.39"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint12_linear_156_3716)"}
        d="M27.61 102.51c-5.18 1.8 1.73-4.8 3.51-4.4 1.79.4 2.68 1.51 2.12 3.58-.99 3.6-3.59.12-5.63.82"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint13_linear_156_3716)"}
        d="M23.64 109.43c.85 2.13 2.44.51 3.7 1.02-1.07-.44 4.63 1.83 3.65 1.91 1.83-.14 3.92.38 3.06-3.41-1-4.36-12.95-5.82-10.41.49z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint14_linear_156_3716)"}
        d="M43.14 80.59c2.46 2.06-2.21 3.18-3.53 2.07-.29-.25-3.07-4.4-.58-3.97.09.02 4.05 1.86 4.11 1.91z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint15_linear_156_3716)"}
        d="M48.13 77.08c-1.56-5.63-4.24 2.99-.71 3.17.94-.8 1.17-1.86.71-3.17"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint16_linear_156_3716)"}
        d="M50.33 82.99c-.96.27-3.2 4.81-4.6 5.88-1.92 1.47-8.29 3.11-2.15 4.37 1.86.38 8.2-2.38 9.23-3.67 1.79-2.23 1.94-7.81-2.47-6.58z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint17_linear_156_3716)"}
        d="M56.76 94.59c.53-3.02.33-7.92-2.65-3.21-2.36 3.73 1.43 10.11 2.65 3.21"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint18_linear_156_3716)"}
        d="M50.03 102.97c.27-2.03 3.68-1.34 3.33.55-.31 1.68-3.58 1.33-3.33-.55"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint19_linear_156_3716)"}
        d="M49.06 62.85c-.88.37-4.64 1.05-4.83 1.09-1.1.27-.1 2.39-2.26 2.17-.73-.07-.77-2.98-1.31-3.41-1.54-1.25-3.63-.51-5.43-2.09-2.72-2.38-2.48-4.75 1.29-5.6 1.5-.34 3.95 1.92 5.16 1.29 1.36-.71.72-2.48 1.43-3.11 1.97-1.75-1.65-1.46 2.83-3.33 1.06-.44 1.86.07 2.88-.02 2.62-.22 4.36-.17 5.71 1.84 1.83 2.71-.63 5.17-1.06 6.02.25-.49-1.73.17-2.01.49-1.46 1.64.75 3.33-2.4 4.66"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint20_linear_156_3716)"}
        d="M12.59 166.34c-1.95 1.88 3.74 2.16 4.34 2.77 2.21 2.25-1.34 4.43 3.31 5.08 3.22.45 5.93-1.91 4.35-4.54-.9-1.51-10.9-4.38-12.01-3.31z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint21_linear_156_3716)"}
        d="M49.48 134.02c-.7-2.22-4.4-4.19-6.27-2.11-.97 1.08 1.23 3.37.37 4.94-.66 1.21-4.97 2.79-6.34 3.89-1.98 1.6-4.1 3.68-6.28 5.4-4.15 3.27-9.53 8.79-4.08 13.5.4.34 5.48 2.67 5.82 2.73 3.22.53 2.83-.53 5.65-1.07 1.59-.3 3.25-.96 5.16-.91-.61-.02 5.28.4 3.94.67 3.31-.66 4.58-3.08 7.19-6.19.91-1.08 2.44-2.39 3.05-3.79.3-.68 1.3-7.88 1.17-8.49-.85-3.78-4.73-6.91-9.38-8.56z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint22_linear_156_3716)"}
        d="M84.89 186.92c1.75-1.36 3.41 1.01 3.11-3.03-.22-3-5.11-3.88-6.99-2.1-3.53 3.35-.13 8.23 3.87 5.13z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint23_linear_156_3716)"}
        d="M97.63 170.71c-10.96-5.42-5.23-20.53 2.68-13.14 1.91 1.79.87 3.54 1.59 5.74.59 1.83 2.53 3.79 2.94 5.58 1.35 5.97-3.56 3.62-7.21 1.82"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint24_linear_156_3716)"}
        d="M106.26 166.36c-1.04 2.02 3.56 1.78 4.08 2 .95-.02 1.9-.14 2.83-.36 1.24.21 1.76.85 1.56 1.91 1.58.35.78 1.52 3.64.31-.55.23 2.31-3.72 1.98-2.66.34-1.12.88-4.16-2.96-4.29-2.17-.07-2.44 2.19-4.32 2.62-1.99.45-5.45-2.21-6.82.45z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint25_linear_156_3716)"}
        d="M113.35 160.53c-11.32 1.62-10.07-5.69-1.79-8.13 3.39-1 4.44-.38 4.56 3.4.04 1.35 1.47 4.12-2.77 4.72z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint26_linear_156_3716)"}
        d="M118.81 160.15c1.08 2.54 7.52 4.23 9.01 1.29 2.4-4.75-11.07-6.15-9.01-1.29"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint27_linear_156_3716)"}
        d="M136.13 168.53c-.86-3.58-7.64-3.71-6.68.54.62 2.78 7.19 1.55 6.68-.54"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint28_linear_156_3716)"}
        d="M143.51 164.39c-.28-1.75-9.51-5.27-7.84-.81.61 1.63 8.5 5 7.84.81"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint29_linear_156_3716)"}
        d="M141.58 148.8c2.92 1.16 1.88 5.78-.98 4.82-3.38-1.13-3.1-6.44.98-4.82"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint30_linear_156_3716)"}
        d="M159.41 152.41c-3.19.95-10.39 1.2-12.23-2.21-1.91-3.55.86-5.14 4.11-6.06.41-.12 4.14-.08 4.93-.07 1.85.01 2.63-1.3 4.56.13 2.75 2.04 1.89 7.24-1.38 8.22z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint31_linear_156_3716)"}
        d="M195.68 148.33c8.77 2.01 3.28 11.3-2.55 7.32.32.22-2.12-5.94-2.22-5.21.29-2.24.73-3.04 4.76-2.11z"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint32_linear_156_3716)"}
        d="M189.24 137.58c.42-.18.85-.36 1.27-.54 1.73.78-.51 3.9.54 5.12.7.81 3.43-1.07 4.48.71.77 1.3-12.94 2.69-6.29-5.29"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint33_linear_156_3716)"}
        d="M222.92 141.03c-2.2-1.47-3.33-4.95-.35-6.41 3.43-1.68 2.12 1.25 3.53 2.71 4.04 4.16 3.01 7.83-3.18 3.7"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint34_linear_156_3716)"}
        d="M221.33 85.11c5.19-.1-.51 3.6-.5 3.41.02-.44-3.56-3.33.5-3.41"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint35_linear_156_3716)"}
        d="M220.84 80.87c-.22 1.13 5.08 3.8 6.23 2.31 1.28-1.66-5.47-6.21-6.23-2.31"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint36_linear_156_3716)"}
        d="M226.3 115.96c-.45 4.74-8.31 4.36-4.83 11.27-.61-1.21 3.65 1.76 3.23 1.53 2.17 1.15 2.93 4.89 5.64 1.62.8-.97 1.5-9.93 1.24-10.78-.08-.25-5.5-4.32-4.93-5.03-.12.46-.23.93-.35 1.39"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint37_linear_156_3716)"}
        d="M226.46 111.76c1.04.13 6.88 3.77 3.07-.88-3.55-4.34-4.7.67-3.07.88"
      ></path>
      <path
        fill={hovered ? "#FFD700" : "url(#paint38_linear_156_3716)"}
        d="M227.17 99.31c-.92 3.19-1.16 6.77-4.01 9.31-6.36 5.65-4.42-3.15-7.73-2.63.53 0-5.88 7.3-5.92 7.42-.85 3.28 6.64 11.11-.52 10.96-1.91-.04-7.64-4.55-8.19-6.34-1.81-6.04 6.88-7.95 3.55-14.66-1.06-2.14-3.36-2.85-4.68-4.63-1.38-1.88-1.53-4.09-2.57-6.03-3.04-5.63-.61-1.88-4.17.35-2.39 1.51-8.11 1.21-10.34 2.08-2.22.88-1.32-2.02-3.15.76.09 0 1.89 3.71 1.99 4.14.84 3.37-1.62 7.01-.43 10.49 1.98 5.84 23.28 16.98 8.72 19.58-3.27.58-2.37.79-5.98-.32-2.44-.75-12.03-.31-6.66 3.37.42.28 2.23-1.68 2.66-1.5.59.25 2.06 1.62 2.12 1.63.03.01 3.73 1.85 3.82 2.04 1.44 3.19-3.93 7.51-6.54 8.83-1.91.96-3.46.58-5.25 1.71-1.02.63.04 3.28-2.13 3.35-.88.03-3.91-5.68-4.38-6.24-3.78-4.44-5.56-2.91-11.27-3.19-3.35-.17-7.94-1.24-7.46-5.91.27-2.59 3.39-3.29 4.53-4.85.58-.79 1.35-2.28 1.84-2.94.99-1.32-.29-2.66 1.82-3.73 1.56-.81 2.84 1.54 3.93.95 3.04-1.64 1.41-10.58 4.96-11.16 3.76-.61 1.81 7.1 6.4 5.4 4.39-1.63 2.84-10.59-1.25-10.64-.07 0-1.56 2.08-2.8 2.12-2.08.07-3.77-2.83-4.14-2.85-3.99-.14-3.46 6.78-8.5 8.36-5.62 1.77-4.1-1.25-8.7 2.6-3.71 3.11-10.91 5.74-12.62 10.26-.84 2.2-.47 5.37-1.11 7.68-.3 1.09-1.72 2.04-2.05 3.21-.38 1.3.96 2.68.38 4.09-1.19 2.9-2.75 2.15-4.5 3.93-.96.99-.65 3.55-1.94 4.09-1.29.55-2.44-1.54-3.48-1.22-2.04.63-1.34 2.57-3.94 2.65-.85.03-5.51-3.05-6.07-3.59-2.69-2.57-2.57-3.73-2.81-7.68-.09-1.37.84-14.08-1.14-14.31-1.47-.18-1.16 11.81-1.51 13.04-1.2 4.25-4.59 9.1-8.01 11.92-4.63 3.82-8.32 2.97-9.73 9.47-1.25 5.81-.52 5.37-5.2 7.73-.52-.27-1.04-.52-1.56-.79-.99.4-1.67 1.11-2.06 2.12-1.15.27-1.61 3.52-3.62 1.48-2.06-2.08 3.29-6.98.44-8.69-2.77-1.65-4.85 5.41-5.5-.92-.17-1.67 3.28-4.84 3.55-6.07 1.05-4.95-.89-.28-3.72-3.55-2.9-3.35.28-8.2-3.05-12.2-3.28-3.94-8.34-4.48-12.57-6.43-4.86-2.25-6.65-5.56-8.34-11.09-1.2-3.88-2.36-9.74.18-13.43 4.72-6.84 5.63-.16 7.01 3.57 2.12 5.66 4.59 19.33 13.82 16.08-2.55-6.37-13.88-5-7.74-14.29 5.48-8.32 6.57 1.99 10.81 4.4 7.03 3.99 6.07-4.63.2-7.32-3.14-1.43-16.47-.9-10.86-6.54 2.95-2.96 14.5-.01 15.42-1.87 2.64-5.38-11.28-2.38-12.46-2.24-9.73 1.23-2.53-4.83-2.08-10.67.17-2.17 1.1-16.99-1.01-16.78-3.32.33-1.13 4.63-3.39 6.35-2.66 2.01-6.25-.07-5.77-3.33.37-2.49 6.07-6.28 7.29-8.03.65-.94 3.15-1.05 1.84-3.7-1.03-2.12-3.02.51-4.18-1.14-1.16-1.7-1.2-3.62 1.02-4.61 5.07-2.28 3.62 3.61 5.48 5.05 5 3.87 5.87-5.14 3.02-8.61-2.6-3.17-5.11-7.71-8.2-10.46-3.8-3.39-6.8-4.04-6.1-9.83.59-4.86 4.81-6.18 7.25-9.56 2.36-3.28 2.7-16.03 6.94-17.81 2.15-.91 4.24.92 5.97 3.38.1.14.19.28.29.42 1.82 2.71 3.19 6.03 3.73 7.32.82 1.98 2.03 6.25 4.03 8.2 0 0 .01 0 .01.01 0 0 .01 0 .01.01.01 0 .01.01.02.01 1.37 1.3 3.12 1.5 5.38-.85.55-.58.65-1.3.7-2.03.04-1.22-.09-2.46 1.36-3.12.71-.33 1.35-.32 1.92-.09h.01c.92.35 1.65 1.25 2.23 2.19.11.19.21.39.32.6.07.12.13.25.2.39.04.09.1.19.14.29.19-.31.38-.59.59-.84.08-.11.17-.21.25-.31 1.31-1.47 2.68-1.82 4.19-3.15l.02-.01c1.04.75 1.75.92 2.12.52h.01c.2-.22.3-.61.31-1.16.07-.41.18-.8.32-1.16.3-.78.75-1.46 1.36-2.09 1.88-3.45 3.36-9.06 6.03-11.79 4.5-4.58 7.89-3.7 10.8-1.3.01 0 .01.01.02.01 4.18 3.47 7.38 10.07 11.46 8.3 3.01-1.31 2.92-10.21 8.41-6.86 1.64 1.01 1.82 1.91 1.54 2.79.01.01 0 .02 0 .02-.35 1.13-1.42 2.26-1 3.6.04.13.08.24.11.35.61 1.84.8 1.55 2.03 3.27.02.02.03.06.07.08 1.21 1.6 2.68.72 3.1 2.78.04.25.08.55.1.91.02.59-.35 1.13-.81 1.63-.62.7-1.37 1.32-1.32 1.88q.06.675.27 1.2c.13.34.31.64.52.91.57.71 1.41 1.13 2.38 1.34 1.51.35 3.31.23 4.93.01h.01s.01 0 .02-.01c.72-.09 1.41-.21 1.99-.31 2.49-.43 3.4-.92 5.4-.74.07.01.14.01.21.02.49.06.89 1.23 1.84 1.64.18.09.37.13.58.16 1.4.1 2.71-.23 4.11-.49h.02c1.2-.23 2.47-.4 3.91-.2 1.25.17 2.12.32 2.88.41h.01c1.27.16 2.26.11 4.22-.4.08-.02.17-.04.24-.08 1.22-.4 2.57-1.44 3.86-1.7.33-.07.63-.08.9-.06 0 .01.01.01.01.01h.01c1.27.13 1.91 1.11 3.82.09 2.23-1.21 2.19-3.87 5.03-4.99.71-.28 1.5-.44 2.32-.51.03 0 .08-.01.11-.01.02 0 .04-.01.08-.01 1.09-.07 2.22.03 3.26.27.16.03.32.08.48.13.02 0 .06.01.08.02.3.08.58.18.84.28 4.54 1.76 6.49 5.17 7.66 9.12.02.1.06.2.08.3.13.47.25.93.37 1.4 1.36 5.71 1.63 12.14 5.71 16.18 1.36 1.34 2.9 2.18 4.4 3.05 1.73 1 3.41 2.03 4.73 3.91 1.74 2.48 1.82 4.35 4.15 6.53 1.87 1.75 4.29 2.22 5.4 4.8.88 2.04.27 5.99-.72 8.74-.27.74-.56 1.4-.86 1.91-1.82 3.05-.18 1.12-3.66 2.96-1.25.66-2.26.1-3.53 1.04-2.08 1.56-1.5 4.7-4.39 5.83-3.27 1.29-4.89-2.63-7.4-2.12-3.26.65-.35 7.33.91 9.2 5.04 7.4 7.4.35 12.93-.81 7.08-1.5 7.21 4.19 5.95 8.57z"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_156_3716"
        x1="28.82"
        x2="21.76"
        y1="50"
        y2="62.24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_156_3716"
        x1="33.8"
        x2="31.7"
        y1="61.7"
        y2="65.32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_156_3716"
        x1="32.12"
        x2="29.86"
        y1="67.7"
        y2="71.61"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint3_linear_156_3716"
        x1="45.75"
        x2="43.95"
        y1="70.19"
        y2="73.31"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint4_linear_156_3716"
        x1="9.63"
        x2="2.04"
        y1="97.39"
        y2="110.54"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint5_linear_156_3716"
        x1="10.23"
        x2="5.76"
        y1="111.25"
        y2="119"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint6_linear_156_3716"
        x1="18.97"
        x2="15.1"
        y1="125.05"
        y2="131.76"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint7_linear_156_3716"
        x1="24.5"
        x2="18.44"
        y1="125.47"
        y2="135.97"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint8_linear_156_3716"
        x1="33.57"
        x2="30.07"
        y1="119.56"
        y2="125.63"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint9_linear_156_3716"
        x1="22.91"
        x2="17.77"
        y1="80.97"
        y2="89.87"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint10_linear_156_3716"
        x1="30.6"
        x2="28.22"
        y1="86.94"
        y2="91.07"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint11_linear_156_3716"
        x1="25.02"
        x2="22.17"
        y1="91.53"
        y2="96.47"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint12_linear_156_3716"
        x1="31.73"
        x2="28.3"
        y1="98.22"
        y2="104.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint13_linear_156_3716"
        x1="30.73"
        x2="27.13"
        y1="105.76"
        y2="111.99"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint14_linear_156_3716"
        x1="41.44"
        x2="39.65"
        y1="79.61"
        y2="82.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint15_linear_156_3716"
        x1="48.14"
        x2="45.94"
        y1="75.83"
        y2="79.63"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint16_linear_156_3716"
        x1="51.65"
        x2="44.73"
        y1="82.5"
        y2="94.47"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint17_linear_156_3716"
        x1="57.41"
        x2="53.5"
        y1="90.11"
        y2="96.87"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint18_linear_156_3716"
        x1="52.43"
        x2="50.96"
        y1="101.92"
        y2="104.46"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint19_linear_156_3716"
        x1="48.97"
        x2="39.32"
        y1="47.91"
        y2="64.61"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint20_linear_156_3716"
        x1="20.09"
        x2="16.71"
        y1="166.84"
        y2="172.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint21_linear_156_3716"
        x1="51.67"
        x2="34.41"
        y1="134.12"
        y2="164.01"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint22_linear_156_3716"
        x1="85.84"
        x2="81.88"
        y1="181.22"
        y2="188.07"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint23_linear_156_3716"
        x1="102.37"
        x2="95.87"
        y1="158.47"
        y2="169.73"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint24_linear_156_3716"
        x1="116.21"
        x2="111.34"
        y1="161.94"
        y2="170.38"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint25_linear_156_3716"
        x1="114.24"
        x2="108.77"
        y1="151.83"
        y2="161.31"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint26_linear_156_3716"
        x1="124.89"
        x2="121.78"
        y1="157.2"
        y2="162.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint27_linear_156_3716"
        x1="134"
        x2="131.32"
        y1="166.17"
        y2="170.81"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint28_linear_156_3716"
        x1="140.51"
        x2="138.44"
        y1="162.07"
        y2="165.67"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint29_linear_156_3716"
        x1="141.96"
        x2="139.58"
        y1="148.99"
        y2="153.12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint30_linear_156_3716"
        x1="157.86"
        x2="151.56"
        y1="142.47"
        y2="153.39"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint31_linear_156_3716"
        x1="197.22"
        x2="193.19"
        y1="148.74"
        y2="155.71"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint32_linear_156_3716"
        x1="193.27"
        x2="190.14"
        y1="138.62"
        y2="144.04"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint33_linear_156_3716"
        x1="226.83"
        x2="223.43"
        y1="135.48"
        y2="141.37"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint34_linear_156_3716"
        x1="222.14"
        x2="220.2"
        y1="84.79"
        y2="88.16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint35_linear_156_3716"
        x1="225"
        x2="223.32"
        y1="80.09"
        y2="83.01"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint36_linear_156_3716"
        x1="231.04"
        x2="223.98"
        y1="117.11"
        y2="129.35"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint37_linear_156_3716"
        x1="229.13"
        x2="227.72"
        y1="110.11"
        y2="112.56"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint38_linear_156_3716"
        x1="173.95"
        x2="77.85"
        y1="6.12"
        y2="172.58"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFDC" stopOpacity="0.5"></stop>
        <stop offset="0.69" stopColor="#FFFFBA" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default Jeonnam;
