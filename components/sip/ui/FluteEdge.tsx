"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

interface FluteEdgeProps {
  className?: string;
  color?: string; // hex or css variable or tailwind
  flip?: boolean; // rotated 180deg
}

export function FluteEdge({ className, color, flip = false }: FluteEdgeProps) {
  const pathD = useMemo(() => {
    const waves = 9;
    const width = 1200;
    const s = width / waves;
    const A = 34;
    const yOffset = 4; // allow -1.7 to be within viewBox 0 0 1200 74

    let d = `M 0 ${A + yOffset}`;

    for (let i = 0; i < waves; i++) {
      const x = i * s;
      const cp1x = (x + 0.18 * s).toFixed(2);
      const cp1y = (A - 1.05 * A + yOffset).toFixed(2);
      const cp2x = (x + 0.32 * s).toFixed(2);
      const cp2y = (A - 1.05 * A + yOffset).toFixed(2);
      const midx = (x + 0.5 * s).toFixed(2);
      const midy = (A - 0.02 * A + yOffset).toFixed(2);

      const cp3x = (x + 0.82 * s).toFixed(2);
      const cp3y = (A + A + yOffset).toFixed(2);
      const endx = ((i + 1) * s).toFixed(2);
      const endy = (A + yOffset).toFixed(2);

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${midx} ${midy} S ${cp3x} ${cp3y}, ${endx} ${endy}`;
    }

    const bottomY = 2 * A + 6;
    d += ` L 1200 ${bottomY} L 0 ${bottomY} Z`;
    return d;
  }, []);

  return (
    <div
      className={cn(
        "w-full overflow-hidden leading-none pointer-events-none select-none z-20",
        flip && "rotate-180",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 74"
        preserveAspectRatio="none"
        className="w-full h-[clamp(28px,5vw,64px)] block"
        style={{ fill: color || "currentColor" }}
      >
        <path d={pathD} />
      </svg>
    </div>
  );
}
