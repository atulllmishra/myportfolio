"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, Bot, CheckCircle2, Mail, MapPin, Building2, GraduationCap, Award, ExternalLink } from "lucide-react";

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
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[#0b0f19]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Hugo Blox Academic Profile Card (Sidebar Card Style) */}
          <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-24">
            <div className="w-full rounded-2xl bg-[#131c2e] border border-[#1e293b] p-6 space-y-6 shadow-xl academic-card">
              
              {/* Profile Image & Header */}
              <div className="flex flex-col items-center text-center pb-6 border-b border-[#1e293b] space-y-3">
                <div className="relative">
                  <img
                    src={profilePicUrl}
                    alt="Atul Kumar Mishra Academic Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500/80 shadow-xl shadow-blue-500/10"
                  />
                  <span
                    className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#131c2e]"
                    title="Active Developer & Researcher"
                  />
                </div>
                
                <div>
                  <h1 className="text-xl font-bold text-white tracking-tight">
                    Atul Kumar Mishra
                  </h1>
                  <p className="text-xs text-blue-400 font-mono font-semibold mt-0.5">
                    B.Tech CSE Undergraduate
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300 w-full pt-1">
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 font-mono text-[11px]">
                    <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>MCAET, ANDUAT University</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 font-mono text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Ayodhya / UP, India</span>
                  </div>
                </div>

                {/* Academic Social Bar */}
                <div className="flex items-center gap-2.5 pt-2">
                  <a
                    href="mailto:atulllmishra1@gmail.com"
                    className="p-2 rounded-lg bg-[#0b0f19] border border-[#1e293b] text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/atulllmishra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#0b0f19] border border-[#1e293b] text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                    title="GitHub Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/atul-kumar-mishra-3b3939363"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#0b0f19] border border-[#1e293b] text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-mono font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1"
                    title="Download Resume PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>CV</span>
                  </a>
                </div>
              </div>

              {/* Research & Technical Interests */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  Interests & Focus Areas
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-[#0b0f19] border border-[#1e293b] text-blue-400">
                    Generative AI & LLMs
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0b0f19] border border-[#1e293b] text-indigo-400">
                    Full-Stack Web Dev
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0b0f19] border border-[#1e293b] text-purple-400">
                    Agritech Systems
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0b0f19] border border-[#1e293b] text-emerald-400">
                    C++ & Algorithms
                  </span>
                </div>
              </div>

              {/* Academic Education Summary */}
              <div className="pt-4 border-t border-[#1e293b] space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>B.Tech in Computer Science & Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>IIT Guwahati ImpactHack '25 Finalist</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Hugo Blox Academic Bio & Highlights */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Top Academic Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131c2e] border border-[#1e293b] text-blue-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Academic Portfolio • Computer Science & Engineering (CSE)</span>
            </div>

            {/* Headline with Typing Effect */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="gradient-text-academic">Atul Kumar Mishra</span>
              </h2>
              <h3 className="text-xl sm:text-2xl text-slate-300 font-medium tracking-tight">
                Engineering <span className="gradient-text-academic font-bold">{displayText}</span>
                <span className="animate-pulse text-blue-400 font-normal">|</span>
              </h3>
            </div>

            {/* Academic Biography & Background */}
            <div className="academic-card p-7 space-y-4 text-slate-300 text-base leading-relaxed font-normal">
              <p>
                I am an undergraduate student pursuing my <strong className="text-white">Bachelor of Technology (B.Tech)</strong> in <strong className="text-blue-400">Computer Science & Engineering (CSE)</strong> at <strong className="text-white">Mahamaya College of Agricultural Engineering and Technology (MCAET)</strong>, affiliated with Acharya Narendra Deva University of Agriculture and Technology (ANDUAT).
              </p>

              <p>
                My passion lies at the intersection of <strong className="text-white">Full-Stack Web Development</strong>, <strong className="text-purple-400">Generative AI / LLM Systems</strong>, and <strong className="text-emerald-400">Data Structures & Algorithms in C++</strong>. I enjoy building high-impact platforms that solve real-world problems.
              </p>

              <p>
                Recently, I was recognized as a <strong className="text-amber-400 font-semibold">Finalist at IIT Guwahati ImpactHack 2025</strong> for developing <a href="https://smart-agri.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-mono">Smart Agri</a>. Additionally, I built and deployed the live <strong className="text-purple-400 font-semibold">MCAET AI College Chatbot</strong> (<a href="https://mcaet.vercel.app" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline font-mono">mcaet.vercel.app</a>) to assist students and prospective applicants.
              </p>
            </div>

            {/* Key Accomplishments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="academic-card p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                  <Award className="w-4 h-4" />
                  <span>ImpactHack '25 Finalist</span>
                </div>
                <h4 className="text-sm font-bold text-white">Smart Agri Platform</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Precision agritech dashboard providing live temperature forecasting and AI crop market price prediction.
                </p>
              </div>

              <div className="academic-card p-5 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase">
                  <Bot className="w-4 h-4" />
                  <span>Campus AI Lead</span>
                </div>
                <h4 className="text-sm font-bold text-white">MCAET Generative AI Bot</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deployed custom LLM chatbot integrated into official college web portal for automated student support.
                </p>
              </div>
            </div>

            {/* Target Role Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <span className="text-slate-500 uppercase tracking-wider font-semibold">Target Opportunities:</span>
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

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all active:scale-95"
              >
                <span>View Publications & Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ai-assistant"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-slate-200 bg-[#131c2e] border border-[#1e293b] hover:border-blue-500/40 hover:text-white transition-all"
              >
                <Bot className="w-4 h-4 text-blue-400" />
                <span>Talk to AI Assistant</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
