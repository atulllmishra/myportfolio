"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, Bot, Mail, MapPin, Building2, GraduationCap, Award } from "lucide-react";

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
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-[#0b0f17]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Simple Academic Profile Card */}
          <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-24">
            <div className="w-full rounded-xl bg-[#121824] border border-[#1e2638] p-6 space-y-5 academic-card">
              
              {/* Profile Image & Details */}
              <div className="flex flex-col items-center text-center pb-5 border-b border-[#1e2638] space-y-3">
                <div className="relative">
                  <img
                    src={profilePicUrl}
                    alt="Atul Kumar Mishra Profile"
                    className="w-28 h-28 rounded-full object-cover border-2 border-slate-700 shadow-md"
                  />
                  <span
                    className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#121824]"
                    title="Active"
                  />
                </div>
                
                <div>
                  <h1 className="text-lg font-bold text-white tracking-tight">
                    Atul Kumar Mishra
                  </h1>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    B.Tech CSE Student
                  </p>
                </div>

                <div className="space-y-1 text-xs text-slate-400 w-full pt-1">
                  <div className="flex items-center justify-center gap-1.5 font-mono text-[11px]">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>MCAET, ANDUAT University</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 font-mono text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Ayodhya / UP, India</span>
                  </div>
                </div>

                {/* Social Bar */}
                <div className="flex items-center gap-2 pt-2">
                  <a
                    href="mailto:atulllmishra1@gmail.com"
                    className="p-2 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/atulllmishra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/atul-kumar-mishra-3b3939363"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                    title="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded bg-[#1e2638] text-slate-200 text-xs font-mono font-medium hover:bg-slate-700 transition-all flex items-center gap-1"
                    title="Download Resume"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>CV</span>
                  </a>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  Focus Areas
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-300">
                    Generative AI & LLMs
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-300">
                    Full-Stack Web Dev
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-300">
                    Agritech Systems
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-300">
                    C++ & Algorithms
                  </span>
                </div>
              </div>

              {/* Education summary */}
              <div className="pt-3 border-t border-[#1e2638] space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>B.Tech CSE • MCAET ANDUAT</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>IIT Guwahati ImpactHack '25 Finalist</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Simple Bio */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                Computer Science & Engineering
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Atul Kumar Mishra
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium">
                {displayText}
                <span className="animate-pulse text-slate-400 font-normal">|</span>
              </p>
            </div>

            {/* Simple Academic Bio */}
            <div className="academic-card p-6 space-y-3.5 text-slate-300 text-sm leading-relaxed font-normal">
              <p>
                I am an undergraduate student pursuing my <strong className="text-white font-semibold">Bachelor of Technology (B.Tech)</strong> in <strong className="text-white font-semibold">Computer Science & Engineering (CSE)</strong> at Mahamaya College of Agricultural Engineering and Technology (MCAET), affiliated with Acharya Narendra Deva University of Agriculture and Technology (ANDUAT).
              </p>

              <p>
                My work focuses on <strong className="text-white font-semibold">Full-Stack Web Development</strong>, <strong className="text-white font-semibold">Generative AI / LLM Systems</strong>, and <strong className="text-white font-semibold">Data Structures & Algorithms in C++</strong>.
              </p>

              <p>
                Key achievements include being a <strong className="text-white font-semibold">Finalist at IIT Guwahati ImpactHack 2025</strong> for building Smart Agri (<a href="https://smart-agri.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-mono">smart-agri.vercel.app</a>) and developing the official <strong className="text-white font-semibold">MCAET AI College Chatbot</strong> (<a href="https://mcaet.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-mono">mcaet.vercel.app</a>).
              </p>
            </div>

            {/* Simple Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="academic-card p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-300 font-mono text-xs font-semibold">
                  <Award className="w-4 h-4 text-slate-400" />
                  <span>ImpactHack '25 Finalist</span>
                </div>
                <h2 className="text-sm font-bold text-white">Smart Agri Platform</h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Precision agritech dashboard providing live weather and market price predictions for farmers.
                </p>
              </div>

              <div className="academic-card p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-300 font-mono text-xs font-semibold">
                  <Bot className="w-4 h-4 text-slate-400" />
                  <span>Campus AI Chatbot Lead</span>
                </div>
                <h2 className="text-sm font-bold text-white">MCAET Generative AI Bot</h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered and deployed custom LLM chatbot integrated into official college portal.
                </p>
              </div>
            </div>

            {/* Target Role Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <span className="text-slate-500 uppercase tracking-wider font-semibold">Target Roles:</span>
              <span className="px-2.5 py-1 rounded bg-[#121824] border border-[#1e2638] text-slate-300 font-medium">
                Software Development Engineer (SDE)
              </span>
              <span className="px-2.5 py-1 rounded bg-[#121824] border border-[#1e2638] text-slate-300 font-medium">
                Full-Stack Web Developer
              </span>
              <span className="px-2.5 py-1 rounded bg-[#121824] border border-[#1e2638] text-slate-300 font-medium">
                AI / LLM Engineer
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-xs text-white bg-blue-600 hover:bg-blue-500 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ai-assistant"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-xs text-slate-200 bg-[#121824] border border-[#1e2638] hover:border-slate-500 transition-all"
              >
                <Bot className="w-4 h-4 text-slate-400" />
                <span>Talk to AI Assistant</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
