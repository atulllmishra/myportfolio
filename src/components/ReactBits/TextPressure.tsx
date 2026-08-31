"use client";

import { useEffect, useRef } from "react";

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
  textColor = "rgba(46, 34, 29, 0.95)",
  strokeColor = "rgb(224, 122, 95)",
  minFontSize = 32,
}: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let animationFrameId: number;
    let currentMousePos = { x: -1000, y: -1000 };
    let isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      currentMousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { 
      isHovered = false; 
      currentMousePos = { x: -1000, y: -1000 };
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    const renderLoop = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      
      charsRef.current.forEach((charEl) => {
        if (!charEl) return;
        
        let weight = 200;
        let scaleY = 1;
        let translateY = 0;

        if (isHovered) {
          const charRect = charEl.getBoundingClientRect();
          const charCenterX = charRect.left + charRect.width / 2 - containerRect.left;
          const charCenterY = charRect.top + charRect.height / 2 - containerRect.top;

          const dist = Math.hypot(currentMousePos.x - charCenterX, currentMousePos.y - charCenterY);
          const maxDist = 180;

          if (dist < maxDist) {
            const factor = 1 - dist / maxDist;
            weight = Math.round(200 + factor * 700);
            scaleY = 1 + factor * 0.2;
            translateY = -factor * 8;
          }
        }

        charEl.style.fontWeight = weight.toString();
        charEl.style.transform = `scaleY(${scaleY}) translateY(${translateY}px)`;
      });

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
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
              const globalIdx = wIdx * 100 + cIdx;
              return (
                <span
                  key={cIdx}
                  ref={(el) => { charsRef.current[globalIdx] = el; }}
                  data-char={char}
                  className="tp-char-span"
                  style={{
                    fontSize: `clamp(${minFontSize}px, 6vw, 76px)`,
                    color: textColor,
                    fontWeight: 200,
                    transform: `scaleY(1) translateY(0px)`,
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
