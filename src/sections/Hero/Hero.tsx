"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, Bot, Mail, MapPin, Building2, GraduationCap, Code2, Sparkles, Trophy } from "lucide-react";
import TextPressure from "@/components/ReactBits/TextPressure";
import FloatingDust from "@/components/ReactBits/FloatingDust";
import MagneticButton from "@/components/ReactBits/MagneticButton";

const roles = [
  "Full-Stack Web Developer",
  "Generative AI Specialist",
  "Software Development Engineer (SDE)",
  "Computer Science CSE Student",
];

const profilePicUrl =
  "https://media.licdn.com/dms/image/v2/D4D03AQEZbzxHR0Z45Q/profile-displayphoto-crop_800_800/B4DZh7FG4QHwAI-/0/1754411595531?e=1787184000&v=beta&t=nSeMFlyp1Tf3p3940JcRZyBd7cJG_Bfp97VrVGZnz-o";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-[#0b0f17] overflow-hidden scroll-mt-24">
      {/* ReactBits Floating Particles */}
      <FloatingDust />

      {/* Ambient Blue Radial Glow */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20 z-[4]"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(99,102,241,0.1) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ReactBits TextPressure Interactive Header Title */}
        <div className="mb-8 w-full max-w-4xl mx-auto text-center drop-shadow-[0_0_25px_rgba(37,99,235,0.3)]">
          <TextPressure text="ATUL KUMAR MISHRA" minFontSize={30} strokeColor="#2563eb" />
          <p className="mt-2 text-xs font-mono font-bold tracking-[0.25em] uppercase text-blue-400">
            Crafting Intelligent Interfaces & Systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Academic Profile Card */}
          <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-24">
            <div className="w-full rounded-2xl bg-[#121824]/90 border border-[#1e2638] p-6 space-y-5 shadow-2xl backdrop-blur-md">

              {/* Profile Image & Details */}
              <div className="flex flex-col items-center text-center pb-5 border-b border-[#1e2638] space-y-3">
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profilePicUrl}
                    alt="Atul Kumar Mishra Profile"
                    className="w-28 h-28 rounded-full object-cover border-2 border-blue-500/40 shadow-lg"
                  />
                  <span
                    className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#121824]"
                    title="Available for Opportunities"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    Atul Kumar Mishra
                  </h2>
                  <p className="text-xs text-blue-400 font-mono mt-0.5 font-semibold">
                    B.Tech Computer Science (2024–Present)
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-400 w-full pt-1">
                  <div className="flex items-center justify-center gap-1.5 font-mono text-[11px]">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>MCAET, ANDUAT University</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 font-mono text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Ayodhya / UP, India</span>
                  </div>
                </div>

                {/* Social Links Bar */}
                <div className="flex items-center gap-2 pt-2">
                  <MagneticButton href="mailto:atulllmishra1@gmail.com">
                    <div className="p-2 rounded-lg bg-[#0b0f17] border border-[#1e2638] text-slate-300 hover:text-white hover:border-blue-500 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                  </MagneticButton>

                  <MagneticButton href="https://github.com/atulllmishra/" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-lg bg-[#0b0f17] border border-[#1e2638] text-slate-300 hover:text-white hover:border-blue-500 transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </div>
                  </MagneticButton>

                  <MagneticButton href="https://www.linkedin.com/in/atul-kumar-mishra-3b3939363" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-lg bg-[#0b0f17] border border-[#1e2638] text-slate-300 hover:text-white hover:border-blue-500 transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                  </MagneticButton>

                  <MagneticButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="px-3 py-1.5 rounded-lg bg-[#1e2638] text-slate-200 text-xs font-mono font-medium hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1">
                      <Download className="w-3.5 h-3.5" />
                      <span>CV</span>
                    </div>
                  </MagneticButton>
                </div>
              </div>

              {/* Core Skill Pills */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-full bg-[#0b0f17] border border-[#1e2638] text-slate-300">
                    Next.js & React
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#0b0f17] border border-[#1e2638] text-slate-300">
                    Generative AI / LLMs
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#0b0f17] border border-[#1e2638] text-slate-300">
                    C++ DSA
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#0b0f17] border border-[#1e2638] text-slate-300">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="pt-3 border-t border-[#1e2638] flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for SDE & Full-Stack Roles</span>
              </div>

            </div>
          </div>

          {/* Right Column: Warm Intro & Key Highlights */}
          <div className="lg:col-span-8 space-y-6">

            {/* Intro Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Computer Science & Engineering</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Building Production-Grade Web Applications & AI Engines
              </h2>

              <p className="text-lg sm:text-xl text-slate-300 font-medium h-8">
                {displayText}
                <span className="animate-pulse text-blue-400 font-normal">|</span>
              </p>
            </div>

            {/* Human Bio Box */}
            <div className="p-6 space-y-3.5 text-slate-300 text-sm leading-relaxed font-normal bg-[#121824]/90 border border-[#1e2638] rounded-2xl shadow-xl backdrop-blur-md">
              <p>
                Hi! I am <strong className="text-white font-semibold">Atul Kumar Mishra</strong>, an undergraduate Computer Science student at MCAET ANDUAT with a passion for software development, modern web engineering, and artificial intelligence.
              </p>

              <p>
                I specialize in building full-stack web applications using <strong className="text-white font-semibold">React, Next.js, and TypeScript</strong>, while engineering custom <strong className="text-white font-semibold">Generative AI & LLM solutions</strong> to solve real-world problems.
              </p>
            </div>

            {/* Metric Highlights Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 space-y-1 bg-[#121824]/90 border border-[#1e2638] rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-semibold">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span>Full-Stack & AI</span>
                </div>
                <h3 className="text-lg font-bold text-white">5+ Apps Built</h3>
                <p className="text-xs text-slate-400">
                  EdTech, B2B SaaS, Agritech & E-Commerce applications.
                </p>
              </div>

              <div className="p-4 space-y-1 bg-[#121824]/90 border border-[#1e2638] rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold">
                  <Trophy className="w-4 h-4 text-purple-400" />
                  <span>ImpactHack '25</span>
                </div>
                <h3 className="text-lg font-bold text-white">IIT Guwahati Finalist</h3>
                <p className="text-xs text-slate-400">
                  National Hackathon finalist recognition.
                </p>
              </div>

              <div className="p-4 space-y-1 bg-[#121824]/90 border border-[#1e2638] rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>C++ & DSA</span>
                </div>
                <h3 className="text-lg font-bold text-white">Strong CS Core</h3>
                <p className="text-xs text-slate-400">
                  Algorithmic problem solving and data structures foundation.
                </p>
              </div>
            </div>

            {/* Action Buttons with ReactBits Magnetic Hover */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton href="#projects">
                <div className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-xs text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                  <span>Explore Work →</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </MagneticButton>

              <MagneticButton href="#ai-assistant">
                <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-xs text-slate-200 bg-[#121824] border border-[#1e2638] hover:border-blue-500/50 hover:text-white transition-all">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span>Talk with AI Twin</span>
                </div>
              </MagneticButton>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


