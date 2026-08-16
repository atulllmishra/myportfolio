"use client";

import { Download, ArrowRight, Terminal } from "lucide-react";
import FloatingDust from "@/components/ReactBits/FloatingDust";
import HackerBtn from "@/components/animation/HackerBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";
import TextRotator from "@/components/animation/TextRotator";
import { useTheme } from "@/components/ThemeProvider";

const profilePicUrl =
  "https://media.licdn.com/dms/image/v2/D4D03AQEZbzxHR0Z45Q/profile-displayphoto-crop_800_800/B4DZh7FG4QHwAI-/0/1754411595531?e=1787184000&v=beta&t=nSeMFlyp1Tf3p3940JcRZyBd7cJG_Bfp97VrVGZnz-o";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden scroll-mt-24 min-h-[90vh] flex items-center">
      <FloatingDust />

      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] pointer-events-none opacity-20 z-[4] transition-all duration-700 rounded-full"
        style={{
          background:
            theme === "light"
              ? "radial-gradient(circle, rgba(196,86,58,0.2) 0%, rgba(224,122,95,0.05) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(224,122,95,0.15) 0%, rgba(212,168,83,0.05) 50%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Text and Info */}
          <FramerWrapper y={0} x={-100} className="flex flex-col justify-center space-y-6">
            
            <div className="space-y-2">
              <h3 className="font-mono text-xl sm:text-2xl text-secondary">Hello, my name is</h3>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-primary pb-2" style={{ textShadow: theme === 'light' ? '4px 4px 0px rgba(196,86,58,0.1)' : '4px 4px 0px rgba(224,122,95,0.1)'}}>
                ATUL KUMAR <br /> 
                <span style={{ color: theme === 'light' ? '#C4563A' : '#E07A5F' }}>MISHRA .</span>
              </h1>
            </div>

            <TextRotator />

            <div className="p-6 text-sm leading-relaxed bg-card/90 border border-card rounded-2xl shadow-xl backdrop-blur-md font-medium text-secondary max-w-xl">
              <p>
                I write React by day and solve complex algorithms in C++ by night. Currently pursuing my B.Tech in CSE (Class of '28). 
                I don't just write code—I build and ship robust web applications that people actually want to use. 
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <HackerBtn 
                label="VIEW PROJECTS" 
                icon={ArrowRight}
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }} 
              />
              <button 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('toggle-command-palette'));
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm font-mono bg-main border border-card hover:border-accent hover:bg-card transition-all cursor-pointer text-primary shadow-sm"
              >
                <Terminal className="w-4 h-4" style={{ color: theme === 'light' ? '#C4563A' : '#E07A5F' }} />
                <span>OPEN TERMINAL (CMD+K)</span>
              </button>
            </div>
          </FramerWrapper>

          {/* RIGHT SIDE: Animated Avatar */}
          <FramerWrapper y={0} x={100} className="w-full flex justify-center lg:justify-end relative lg:block">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] mx-auto rounded-3xl p-6 flex flex-col items-center justify-center overflow-hidden transition-colors duration-300"
                 style={{ 
                   background: theme === 'light' ? 'linear-gradient(135deg, rgba(196,86,58,0.03), rgba(196,86,58,0.08))' : 'linear-gradient(135deg, rgba(224,122,95,0.03), rgba(224,122,95,0.08))',
                   border: `1px solid ${theme === 'light' ? 'rgba(196,86,58,0.15)' : 'rgba(224,122,95,0.15)'}`
                 }}
            >
               {/* Animated Avatar Composition */}
               <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                  
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: theme === 'light' ? '#C4563A' : '#E07A5F', animationDuration: '3s' }} />
                  <div className="absolute inset-4 rounded-full animate-pulse opacity-40" style={{ backgroundColor: theme === 'light' ? '#C4563A' : '#E07A5F', animationDuration: '2s' }} />
                  
                  {/* Core Avatar */}
                  <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-card border-4 shadow-2xl flex items-center justify-center transition-transform duration-500 hover:scale-105 hover:rotate-3" 
                       style={{ borderColor: theme === 'light' ? '#C4563A' : '#E07A5F' }}>
                     <Terminal className="w-12 h-12 sm:w-14 sm:h-14" style={{ color: theme === 'light' ? '#C4563A' : '#E07A5F' }} />
                  </div>

                  {/* Orbiting element */}
                  <div className="absolute w-full h-full animate-[spin_6s_linear_infinite]">
                     <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-card shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  </div>
               </div>
               
               <div className="mt-12 flex flex-col items-center space-y-3">
                 <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border shadow-sm" style={{ borderColor: theme === 'light' ? 'rgba(196,86,58,0.2)' : 'rgba(224,122,95,0.2)' }}>
                   <span className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                   </span>
                   <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase">Open to Work</span>
                 </div>
                 <p className="text-sm font-medium text-secondary text-center px-4">
                   Currently seeking full-time roles & freelance opportunities.
                 </p>
               </div>

            </div>
          </FramerWrapper>

        </div>
      </div>
    </section>
  );
}
