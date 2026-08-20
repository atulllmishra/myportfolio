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

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center mt-12 md:mt-0">

        <FramerWrapper y={0} x={0} className="flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto">

          <div className="space-y-4">
            <h3 className="font-mono text-xl sm:text-2xl text-secondary">Hello, my name is</h3>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-primary pb-2" style={{ textShadow: theme === 'light' ? '4px 4px 0px rgba(196,86,58,0.1)' : '4px 4px 0px rgba(224,122,95,0.1)' }}>
              ATUL KUMAR <br />
              <span style={{ color: theme === 'light' ? '#C4563A' : '#E07A5F' }}>MISHRA .</span>
            </h1>
          </div>

          <div className="flex justify-center w-full">
            <TextRotator />
          </div>

          <div className="p-6 md:p-8 text-base md:text-lg leading-relaxed bg-card/90 border border-card rounded-2xl shadow-xl backdrop-blur-md font-medium text-secondary max-w-2xl">
            <p>
              Full-Stack Web Developer & AI Solutions Engineer passionate about architecting high-performance applications and intuitive interfaces. Creator of <span className="text-primary font-bold">heyBuddy</span> (AI multilingual video learning) and National Finalist at <span className="text-primary font-bold">IIT Guwahati ImpactHack 2025</span>.
            </p>
          </div>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm font-mono bg-main border border-card hover:border-accent hover:bg-card transition-all cursor-pointer text-primary shadow-sm w-full sm:w-auto"
            >
              <Terminal className="w-4 h-4" style={{ color: theme === 'light' ? '#C4563A' : '#E07A5F' }} />
              <span>OPEN TERMINAL (CMD+K)</span>
            </button>
          </div>
        </FramerWrapper>

      </div>
    </section>
  );
}
