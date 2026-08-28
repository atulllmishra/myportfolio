"use client";

import React, { useRef, useState } from "react";
import { 
  User2, 
  GraduationCap, 
  Sparkles, 
  Heart, 
  MapPin, 
  Terminal, 
  Code2, 
  Cpu, 
  Compass, 
  ArrowUpRight,
  Flame,
  Layers,
  Zap,
  Globe2
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { useTheme } from "@/components/ThemeProvider";
import { audioHaptics } from "@/lib/audioHaptics";

// 3D Perspective Tilt Card with Dynamic Cursor Spotlight Glow
interface InteractiveTiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

function InteractiveTiltCard({
  children,
  className = "",
  glowColor = "rgba(224, 122, 95, 0.2)",
}: InteractiveTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    setMousePos({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    audioHaptics.playClick(700, 0.02, "sine");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-3xl border border-card/80 bg-card/75 backdrop-blur-xl shadow-2xl transition-shadow duration-300 overflow-hidden group ${className}`}
    >
      {/* Dynamic Cursor Spotlight Radial Gradient */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`,
        }}
      />

      {/* Shimmer Ambient Border Line */}
      <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none z-20" />

      <div className="relative z-30 transform-gpu">{children}</div>
    </motion.div>
  );
}

const academicTags = [
  "Data Structures & Algorithms (C++)",
  "Object-Oriented Architecture",
  "Relational & Vector Databases",
  "Operating Systems",
  "Computer Networks",
  "Generative AI & RAG",
  "Distributed Web Systems",
];

const hobbies = [
  { name: "Chess", desc: "Tactical vision & endgame strategy", emoji: "" },
  { name: "Basketball", desc: "Team rhythm & court flow", emoji: "" },
  { name: "Side Projects", desc: "2 AM prototypes shipped to production", emoji: "" },
  { name: "C++ Algorithms", desc: "Algorithmic purity & complexity optimization", emoji: "" },
];

export default function About() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const accentColor = isLight ? "#C4563A" : "#E07A5F";
  const glowColor = isLight ? "rgba(196, 86, 58, 0.15)" : "rgba(224, 122, 95, 0.18)";

  const [copied, setCopied] = useState(false);

  const copySnippet = () => {
    navigator.clipboard.writeText("atulllmishra1@gmail.com");
    setCopied(true);
    audioHaptics.playPop(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden scroll-mt-24">
      {/* Ambient Atmospheric Glow Orbs */}
      <div
        className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none opacity-20 blur-3xl rounded-full"
        style={{
          background: isLight
            ? "radial-gradient(circle, rgba(196,86,58,0.25) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(224,122,95,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-10 bottom-10 w-[450px] h-[450px] pointer-events-none opacity-15 blur-3xl rounded-full"
        style={{
          background: isLight
            ? "radial-gradient(circle, rgba(212,168,83,0.2) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(156,146,255,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/80 border border-card text-xs font-semibold uppercase tracking-wider text-secondary shadow-sm"
          >
            <User2 className="h-4 w-4" style={{ color: accentColor }} />
            <span>About Me</span>
          </motion.div>

          <FramerWrapper y={20} x={0} className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-primary">
                  A little about   {"  "}
                  <span style={{ color: accentColor }}> me.</span>
                </h2>
                
              </div>
              
            </div>
          </FramerWrapper>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          <div className="lg:col-span-8 flex flex-col justify-between">
            <InteractiveTiltCard glowColor={glowColor} className="p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-card">
                  <div className="flex items-center gap-2.5">
                    
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">
                      About me !
                    </span>
                  </div>
                  
                </div>

                <div className="text-base sm:text-lg text-secondary leading-relaxed space-y-5 font-normal">
                  <p>
                    Hey there! I'm <strong className="text-primary font-semibold">Atul Kumar Mishra</strong>. I'm a Computer Science undergraduate and Full-Stack AI Engineer who loves the feeling of taking a blank canvas and engineering it into an intuitive, polished digital product.
                  </p>
                  <p>
                    My love for programming started in the steel city of Jamshedpur with the pure algorithmic thrill of solving complex problems in <strong className="text-primary font-semibold">modern C++</strong>. Over time, that technical curiosity evolved into building full-stack platforms with <strong className="text-primary font-semibold">Next.js, React, strict TypeScript</strong>, and custom <strong className="text-primary font-semibold">generative AI pipelines</strong>.
                  </p>
                  <p>
                    I believe great software should feel fast, effortless, and empathetic. Whether it's architecting <strong className="text-primary font-semibold">heyBuddy</strong> (an AI-powered multilingual video and voice learning platform) or designing <strong className="text-primary font-semibold">Smart Agri</strong> (recognized as a National Finalist at IIT Guwahati ImpactHack 2025), I focus on building tools that solve real human friction.
                  </p>
                </div>
              </div>


              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-card">
                <div className="p-3 rounded-2xl bg-main/50 border border-card">
                  <span className="text-[10px] text-secondary uppercase block font-semibold">Core Focus</span>
                  <span className="text-xs font-bold text-primary mt-0.5 block">AI & Full-Stack</span>
                </div>
                <div className="p-3 rounded-2xl bg-main/50 border border-card">
                  <span className="text-[10px] text-secondary uppercase block font-semibold">Location</span>
                  <span className="text-xs font-bold text-primary mt-0.5 block">Ayodhya, India</span>
                </div>
                <div className="p-3 rounded-2xl bg-main/50 border border-card col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-secondary uppercase block font-semibold">Availability</span>
                  <span className="text-xs font-bold text-accent mt-0.5 block">Open to Work</span>
                </div>
              </div>
            </InteractiveTiltCard>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between space-y-7">
            <InteractiveTiltCard glowColor={glowColor} className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-card font-mono text-xs text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-1 text-[11px] text-secondary/70">engineer.ts</span>
                  </div>
                  <Terminal className="w-3.5 h-3.5" style={{ color: accentColor }} />
                </div>

                <div className="p-4 rounded-2xl bg-main/80 border border-card font-mono text-[11px] text-secondary space-y-2 leading-relaxed">
                  <div>
                    <span className="text-accent" style={{ color: accentColor }}>const</span>{" "}
                    <span className="text-primary font-bold">engineer</span> = &#123;
                  </div>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-secondary/70">name:</span>{" "}
                      <span className="text-emerald-400">"Atul Kumar Mishra"</span>,
                    </div>
                    <div>
                      <span className="text-secondary/70">university:</span>{" "}
                      <span className="text-amber-400">"MCAET (ANDUAT)"</span>,
                    </div>
                    <div>
                      <span className="text-secondary/70">degree:</span>{" "}
                      <span className="text-emerald-400">"B.Tech CSE '28"</span>,
                    </div>
                    <div>
                      <span className="text-secondary/70">craft:</span>{" "}
                      <span className="text-blue-400">["Next.js", "C++", "AI"]</span>,
                    </div>
                    <div>
                      <span className="text-secondary/70">status:</span>{" "}
                      <span className="text-rose-400">"Building & Shipping"</span>
                    </div>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* Direct Quick Ping Action */}
              <div className="pt-4 mt-4 border-t border-card flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-secondary truncate">
                  atulllmishra1@gmail.com
                </span>
                <button
                  type="button"
                  onClick={copySnippet}
                  className="px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all bg-main hover:bg-card border border-card hover:border-accent text-primary cursor-pointer active:scale-95 shrink-0"
                >
                  {copied ? "COPIED!" : "COPY"}
                </button>
              </div>
            </InteractiveTiltCard>
          </div>
          <div className="lg:col-span-7">
            <InteractiveTiltCard glowColor={glowColor} className="p-8 sm:p-9 h-full flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-card">
                  <div className="flex items-center gap-2.5">
                    
                    <h3 className="text-lg font-bold font-mono text-primary tracking-tight">
                      Education
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold  border-card text-secondary">
                    2024 — 2028
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-primary tracking-tight">
                      B.Tech in Computer Science & Engineering
                    </h4>
                    <p className="text-sm font-mono text-secondary mt-1" style={{ color: accentColor }}>
                      Mahamaya College of Agricultural Engineering and Technology (MCAET)
                    </p>
                    <p className="text-xs font-mono text-secondary/70 mt-0.5">
                      Acharya Narendra Deva University of Agriculture and Technology (ANDUAT), Ayodhya, UP
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    Rigorous academic training in core computer science, algorithmic foundations, database systems, and full-stack software architecture.
                  </p>

                  {/* Interactive Coursework Chips */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {academicTags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          className="px-3 py-1.5 rounded-xl bg-main/90 border border-card hover:border-accent/60 text-xs font-mono text-secondary hover:text-primary transition-colors cursor-default shadow-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </InteractiveTiltCard>
          </div>
          <div className="lg:col-span-5">
            <InteractiveTiltCard glowColor={glowColor} className="p-8 sm:p-9 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-card">
                  <h3 className="text-lg font-bold font-mono text-primary tracking-tight">
                    Hobbies
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {hobbies.map((hobby, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.04, y: -3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="p-3.5 rounded-2xl bg-main/60 border border-card hover:border-accent/40 transition-colors flex flex-col justify-between space-y-1 cursor-default shadow-sm group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg group-hover:scale-110 transition-transform">{hobby.emoji}</span>
                        <span className="text-xs font-bold font-mono text-primary">{hobby.name}</span>
                      </div>
                      <span className="text-[11px] text-secondary leading-tight">
                        {hobby.desc}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </InteractiveTiltCard>
          </div>

        </div>

      </div>
    </section>
  );
}
