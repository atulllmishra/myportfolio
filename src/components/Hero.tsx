"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, Bot, Code2, CheckCircle2 } from "lucide-react";

const roles = [
  "Full-Stack Web Developer",
  "Generative AI Specialist",
  "Software Development Engineer (SDE)",
  "Computer Science Student",
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
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 bg-[#0a0e17]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131c2e] border border-[#1e293b] text-blue-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>B.Tech Computer Science & Engineering (CSE) Student</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Atul Kumar Mishra
              </h1>
              <h2 className="text-xl sm:text-2xl text-slate-300 font-medium tracking-tight">
                Building modern <span className="gradient-text-codehelp font-bold">{displayText}</span>
                <span className="animate-pulse text-blue-400 font-normal">|</span>
              </h2>
            </div>

            {/* Intro paragraph */}
            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Undergraduate <strong className="text-white font-medium">Computer Science & Engineering (CSE)</strong> student at <strong className="text-blue-400 font-medium">Mahamaya College of Agricultural Engineering and Technology (MCAET, ANDUAT)</strong>. Finalist at <strong className="text-white font-medium">IIT Guwahati ImpactHack 2025</strong>. Developer of Smart Agri, ProcureHub, E-Commerce Store, and MCAET AI Chatbot.
            </p>

            {/* Target Role Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <span className="text-slate-500 uppercase tracking-wider font-semibold">Target Roles:</span>
              <span className="px-2.5 py-1 rounded bg-[#131c2e] border border-[#1e293b] text-blue-400 font-medium">
                Software Development Engineer (SDE)
              </span>
              <span className="px-2.5 py-1 rounded bg-[#131c2e] border border-[#1e293b] text-indigo-400 font-medium">
                Full-Stack Web Developer
              </span>
              <span className="px-2.5 py-1 rounded bg-[#131c2e] border border-[#1e293b] text-purple-400 font-medium">
                AI / LLM Engineer
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ai-assistant"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-xs text-slate-200 bg-[#131c2e] border border-[#1e293b] hover:border-blue-500/40 hover:text-white transition-all"
              >
                <Bot className="w-4 h-4 text-blue-400" />
                <span>Talk to AI Assistant</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-xs text-slate-300 bg-[#131c2e] border border-[#1e293b] hover:text-white transition-all"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Resume</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Picture & Credentials Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-xl bg-[#131c2e] border border-[#1e293b] p-6 space-y-6 shadow-2xl">
              
              {/* Profile Image & Header */}
              <div className="flex items-center gap-4 pb-4 border-b border-[#1e293b]">
                <div className="relative">
                  <img
                    src={profilePicUrl}
                    alt="Atul Kumar Mishra Profile Picture"
                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-500/80 shadow-lg shadow-blue-500/20"
                  />
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#131c2e]" title="Active Developer" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Atul Kumar Mishra</h3>
                  <p className="text-xs text-blue-400 font-mono font-medium">B.Tech CSE • MCAET ANDUAT</p>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[11px] font-mono">
                    SDE & AI Candidate
                  </span>
                </div>
              </div>

              {/* Feature Bullets */}
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>IIT Guwahati ImpactHack '25 Finalist</strong> (Smart Agri Platform)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>MCAET Live AI College Chatbot Lead</strong> (mcaet.vercel.app)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>4+ Production Deployed Apps</strong> (ProcureHub, Smart Agri, E-Commerce)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>C++ Data Structures & Algorithms</strong> (Problem Solving)</span>
                </div>
              </div>

              {/* Stats Box */}
              <div className="pt-4 border-t border-[#1e293b] grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-lg bg-[#0a0e17] border border-[#1e293b]">
                  <div className="text-xl font-bold text-white font-mono">4+ Live</div>
                  <div className="text-[11px] text-slate-400">Web & AI Apps</div>
                </div>
                <div className="p-3 rounded-lg bg-[#0a0e17] border border-[#1e293b]">
                  <div className="text-xl font-bold text-blue-400 font-mono">CSE</div>
                  <div className="text-[11px] text-slate-400">MCAET ANDUAT</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
