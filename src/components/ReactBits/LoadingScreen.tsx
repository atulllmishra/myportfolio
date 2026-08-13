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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0f17] text-white transition-opacity duration-700 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-6 max-w-sm px-6">
        <span className="font-mono text-6xl md:text-7xl font-bold tracking-tighter text-blue-500">
          {progress}%
        </span>
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-slate-400">
          ATUL KUMAR MISHRA
        </span>
      </div>
    </div>
  );
}
