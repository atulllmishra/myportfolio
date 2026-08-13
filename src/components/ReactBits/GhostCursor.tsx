"use client";

import { useEffect, useState } from "react";

export default function GhostCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.getAttribute("data-magnetic") === "true")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window === "undefined" || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Glow Orb */}
      <div
        className="fixed w-[360px] h-[360px] rounded-full opacity-20 filter blur-[70px] transition-transform duration-500 ease-out pointer-events-none"
        style={{
          left: `${mousePos.x - 180}px`,
          top: `${mousePos.y - 180}px`,
          background: "radial-gradient(circle, rgba(37,99,235,0.8) 0%, rgba(99,102,241,0.2) 50%, transparent 75%)",
        }}
      />

      {/* Trailing Cursor Circle */}
      <div
        className={`fixed rounded-full border border-blue-400/60 transition-all duration-150 ease-out pointer-events-none ${
          isPointer ? "w-12 h-12 -ml-6 -mt-6 bg-blue-500/15 border-blue-400" : "w-6 h-6 -ml-3 -mt-3"
        }`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Center Precision Dot */}
      <div
        className="fixed w-1.5 h-1.5 -ml-0.75 -mt-0.75 bg-blue-400 rounded-full shadow-[0_0_8px_#3b82f6] pointer-events-none"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
    </div>
  );
}
