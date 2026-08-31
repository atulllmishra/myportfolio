"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 400);
          return 100;
        }
        const diff = Math.floor(Math.random() * 18) + 8;
        return Math.min(prev + diff, 100);
      });
    }, 90);

    return () => clearInterval(timer);
  }, []);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[rgb(255,249,245)] text-[rgb(46,34,29)] transition-opacity duration-700 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-6 max-w-sm px-6">
        <span className="text-6xl md:text-7xl font-bold tracking-tighter text-[rgb(196,86,58)]">
          {progress}%
        </span>
        <div className="w-48 h-1.5 bg-[rgb(243,226,213)] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[rgb(224,122,95)] to-[rgb(196,86,58)] transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs tracking-[0.3em] uppercase text-[rgb(112,91,80)] font-semibold">
          ATUL KUMAR MISHRA
        </span>
      </div>
    </div>
  );
}
