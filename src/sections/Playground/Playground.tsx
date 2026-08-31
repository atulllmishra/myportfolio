"use client";

import { Cpu } from "lucide-react";
import HeroCenterpiece from "@/components/Hero3D/HeroCenterpiece";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { useTheme } from "@/components/ThemeProvider";

export default function Playground() {
  const { theme } = useTheme();
  const accentColor = theme === "light" ? "rgb(196, 86, 58)" : "rgb(224, 122, 95)";

  return (
    <section id="playground" className="py-20 sm:py-24 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-main border border-card text-xs font-mono font-bold uppercase tracking-wider" style={{ color: accentColor }}>
            <Cpu className="w-3.5 h-3.5" />
            <span>WebGL Physics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            INTERACTIVE <span style={{ color: accentColor }}>LAB</span>
          </h2>
          <p className="text-secondary max-w-2xl text-xs sm:text-sm font-medium">
            Throw the rigid bodies around, resize the window, and mess with the physics engine. Built with React Three Fiber and Rapier.
          </p>
        </div>

        <FramerWrapper y={60} delay={0.2} className="w-full">
          <div className="w-full h-72 sm:h-96 md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden relative border border-card shadow-2xl bg-card">
            <HeroCenterpiece theme={theme} />
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-main/70 border border-card backdrop-blur-md text-[11px] sm:text-xs font-mono text-secondary shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Physics Engine Running
            </div>
          </div>
        </FramerWrapper>
      </div>
    </section>
  );
}
