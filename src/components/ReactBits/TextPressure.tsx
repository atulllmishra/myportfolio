"use client";

import { useEffect, useRef, useState } from "react";

interface TextPressureProps {
  text?: string;
  fontFamily?: string;
  className?: string;
  textColor?: string;
  strokeColor?: string;
  minFontSize?: number;
}

export default function TextPressure({
  text = "ATUL KUMAR MISHRA",
  fontFamily = "'Roboto Flex', 'Inter', sans-serif",
  className = "",
  textColor = "rgba(255, 255, 255, 0.95)",
  strokeColor = "#2563eb",
  minFontSize = 32,
}: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const words = text.split(" ");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", () => setIsHovered(true));
      container.addEventListener("mouseleave", () => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none cursor-default py-2 ${className}`}
      style={{ fontFamily }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap');
        
        .tp-char-span {
          transition: font-weight 0.12s ease-out, transform 0.12s ease-out, color 0.2s ease;
          display: inline-block;
          position: relative;
        }

        .tp-char-span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: ${strokeColor};
          opacity: 0.8;
          transition: -webkit-text-stroke-color 0.3s ease;
        }
      `}</style>

      <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 gap-y-2 w-full">
        {words.map((word, wIdx) => (
          <div key={wIdx} className="flex items-center tracking-tight">
            {word.split("").map((char, cIdx) => {
              let weight = 200;
              let scaleY = 1;
              let translateY = 0;

              if (isHovered && containerRef.current) {
                const charEl = containerRef.current.querySelector(
                  `[data-word="${wIdx}"][data-char-idx="${cIdx}"]`
                ) as HTMLElement;
                if (charEl) {
                  const charRect = charEl.getBoundingClientRect();
                  const containerRect = containerRef.current.getBoundingClientRect();
                  const charCenterX = charRect.left + charRect.width / 2 - containerRect.left;
                  const charCenterY = charRect.top + charRect.height / 2 - containerRect.top;

                  const dist = Math.hypot(mousePos.x - charCenterX, mousePos.y - charCenterY);
                  const maxDist = 180;

                  if (dist < maxDist) {
                    const factor = 1 - dist / maxDist;
                    weight = Math.round(200 + factor * 700);
                    scaleY = 1 + factor * 0.2;
                    translateY = -factor * 8;
                  }
                }
              }

              return (
                <span
                  key={cIdx}
                  data-word={wIdx}
                  data-char-idx={cIdx}
                  data-char={char}
                  className="tp-char-span"
                  style={{
                    fontSize: `clamp(${minFontSize}px, 6vw, 76px)`,
                    color: textColor,
                    fontWeight: weight,
                    transform: `scaleY(${scaleY}) translateY(${translateY}px)`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
