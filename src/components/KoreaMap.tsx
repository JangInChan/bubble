import React, { useState } from "react";
import Chungbuk from "./regions/Chungbuk";
import Chungnam from "./regions/Chungnam";
import Gangwon from "./regions/Gangwon";
import Gyeongbuk from "./regions/Gyeongbuk";
import Gyeongnam from "./regions/Gyeongnam";
import Jeonnam from "./regions/Jeonnam";

const regions = [
  { name: "Chungbuk", Component: Chungbuk, x: 120, y: 120 },
  { name: "Chungnam", Component: Chungnam, x: 60, y: 140 },
  { name: "Gangwon", Component: Gangwon, x: 200, y: 20 },
  { name: "Gyeongbuk", Component: Gyeongbuk, x: 200, y: 120 },
  { name: "Gyeongnam", Component: Gyeongnam, x: 180, y: 200 },
  { name: "Jeonnam", Component: Jeonnam, x: 60, y: 220 },
];

const KoreaMap: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <svg width={500} height={500}>
      {regions.map(({ name, Component, x, y }) => (
        <g key={name} transform={`translate(${x},${y})`}>
          <Component
            hovered={hovered === name || selected === name}
            onMouseEnter={() => setHovered(name)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(name)}
            style={{
              filter:
                selected === name ? "drop-shadow(0 0 8px #FFD700)" : undefined,
            }}
          />
        </g>
      ))}
    </svg>
  );
};

export default KoreaMap;
