"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: string;
  delay: string;
  isAccent: boolean;
}

export default function FloatingDust() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        size: Math.random() * 2.4 + 1,
        top: `${Math.random() * 95}%`,
        left: `${Math.random() * 95}%`,
        duration: `${Math.random() * 4 + 5}s`,
        delay: `${Math.random() * 5}s`,
        isAccent: i % 4 === 0,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[8] overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-24px) translateX(12px);
            opacity: 0.75;
          }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.isAccent ? "rgb(196, 86, 58)" : "rgba(224, 122, 95, 0.3)",
            top: p.top,
            left: p.left,
            animation: `floatParticle ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
            boxShadow: p.isAccent ? "0 0 6px rgba(196, 86, 58, 0.4)" : "none",
          }}
        />
      ))}
    </div>
  );
}
