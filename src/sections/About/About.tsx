"use client";

import { User2, Globe2, Languages, Heart, Circle } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { useTheme } from "@/components/ThemeProvider";

const personalInfo = [
  {
    name: "Location",
    answer: "Jamshedpur, Jharkhand, India",
    icon: <Globe2 className="h-8 w-8" />,
  },
  {
    name: "Focus",
    answer: "Full Stack & AI Integrations",
    icon: <Languages className="h-8 w-8" />,
  },
];

const hobbies = [
  "Basketball",
  "Chess",
  "Building Side Projects",
  "Competitive Programming (C++)"
];

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-card text-xs font-mono font-medium text-secondary shadow-sm">
            <User2 className="h-4 w-4 text-accent" style={{ color: theme === 'light' ? '#C4563A' : '#E07A5F' }} />
            <span>About me</span>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <FramerWrapper y={0} x={-50}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-primary max-w-2xl">
                Full Stack Web Developer & AI Enthusiast Based In <span style={{ color: theme === 'light' ? '#C4563A' : '#E07A5F' }}>India.</span>
              </h2>
            </FramerWrapper>

            <FramerWrapper y={0} x={50}>
              <div className="p-6 text-base sm:text-lg leading-relaxed bg-card/60 border border-card rounded-2xl shadow-xl backdrop-blur-md font-medium text-secondary max-w-3xl space-y-4">
                <p>
                  I'm a Computer Science undergraduate (Class of '28) and Full-Stack AI Engineer. I specialize in developing performant web platforms with modern React / Next.js architectures, strict TypeScript, and production LLM/AI integrations.
                </p>
                <p>
                  My engineering journey is driven by shipping tools that solve tangible problems—ranging from <strong className="text-primary font-bold">heyBuddy</strong> (an AI-powered multilingual video and voice learning platform) and the official <strong className="text-primary font-bold">MCAET Campus AI Chatbot</strong> (handling 200+ daily queries with verified RAG search) to <strong className="text-primary font-bold">Smart Agri</strong> (a precision crop advisory PWA recognized as a National Finalist at IIT Guwahati ImpactHack 2025).
                </p>
                <p>
                  I combine clean design, robust backend systems, and strong algorithmic problem solving in C++ to craft responsive, scalable digital experiences.
                </p>
              </div>
            </FramerWrapper>
          </div>

          <FramerWrapper className="w-full flex flex-col sm:flex-row gap-10 mt-8" y={100} delay={0.2}>
            {personalInfo.map((val, indx) => (
              <div className="w-fit relative" key={indx}>
                <h3 className="flex items-center gap-2 text-2xl font-bold text-primary font-mono relative pb-3 border-b-4 border-card"
                    style={{ borderBottomColor: theme === 'light' ? 'rgba(196,86,58,0.2)' : 'rgba(224,122,95,0.2)' }}
                >
                  <span style={{ color: theme === 'light' ? '#C4563A' : '#E07A5F' }}>{val.icon}</span>
                  {val.name}
                </h3>
                <div className="flex gap-2 items-center text-lg text-secondary pt-4 font-medium">
                  <Circle className="h-2.5 w-2.5" style={{ fill: theme === 'light' ? '#C4563A' : '#E07A5F', stroke: 'none' }} /> {val.answer}
                </div>
              </div>
            ))}
          </FramerWrapper>


          <FramerWrapper className="block mt-8 w-full" y={100} delay={0.3}>
            <h3 className="flex items-center gap-2 text-2xl font-bold text-primary font-mono relative pb-3 border-b-4 border-card w-fit"
                style={{ borderBottomColor: theme === 'light' ? 'rgba(196,86,58,0.2)' : 'rgba(224,122,95,0.2)' }}
            >
              <Heart className="h-7 w-7" style={{ color: theme === 'light' ? '#C4563A' : '#E07A5F' }} /> 
              Hobbies
            </h3>
            <div className="w-full pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {hobbies.map((hobby, indx) => (
                <div
                  key={indx}
                  className="flex gap-2 items-center text-base text-secondary font-medium"
                >
                  <Circle className="h-2.5 w-2.5 shrink-0" style={{ fill: theme === 'light' ? '#C4563A' : '#E07A5F', stroke: 'none' }} /> 
                  {hobby}
                </div>
              ))}
            </div>
          </FramerWrapper>
          
        </div>
      </div>
    </section>
  );
}
