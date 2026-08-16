"use client";

import { Cpu } from "lucide-react";
import HeroCenterpiece from "@/components/Hero3D/HeroCenterpiece";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { useTheme } from "@/components/ThemeProvider";

export default function Playground() {
  const { theme } = useTheme();

  return (
    <section id="playground" className="py-24 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-6 mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-main border border-card text-xs font-mono font-bold uppercase tracking-wider" style={{ color: theme === 'light' ? '#C4563A' : '#E07A5F' }}>
            <Cpu className="w-3.5 h-3.5" />
            <span>WebGL Physics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            INTERACTIVE <span style={{ color: theme === 'light' ? '#C4563A' : '#E07A5F' }}>LAB</span>
          </h2>
          <p className="text-secondary max-w-2xl text-sm font-medium">
            Throw the rigid bodies around, resize the window, and mess with the physics engine. Built with React Three Fiber and Rapier.
          </p>
        </div>

        <FramerWrapper y={100} delay={0.2} className="w-full">
          <div className="w-full h-80 md:h-[500px] rounded-3xl overflow-hidden relative border-2 border-card shadow-2xl bg-card">
            <HeroCenterpiece theme={theme} />
            <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-main/70 border border-card backdrop-blur-md text-xs font-mono text-secondary shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Physics Engine Running
            </div>
          </div>
        </FramerWrapper>
      </div>
    </section>
  );
}
