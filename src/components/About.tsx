"use client";

import { GraduationCap, Code2, Award, Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#0a0e17] border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block font-semibold">
            01 / Background & Academic Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="gradient-text-codehelp">Atul Kumar Mishra</span>
          </h2>
          <p className="text-slate-400 text-base">
            Computer Science & Engineering student, web developer, and Generative AI practitioner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Box */}
          <div className="lg:col-span-7 codehelp-card p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#1e293b]">
              <Code2 className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Computer Science Foundation</h3>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-normal">
              <p>
                I am an undergraduate student pursuing my Bachelor of Technology (B.Tech) in <strong className="text-white">Computer Science & Engineering (CSE)</strong> at <strong className="text-blue-400 font-medium">Mahamaya College of Agricultural Engineering and Technology (MCAET)</strong>, affiliated with <strong className="text-white font-medium">Acharya Narendra Deva University of Agriculture and Technology (ANDUAT)</strong>.
              </p>

              <p>
                My technical focus spans <strong className="text-white font-medium">Data Structures & Algorithms (C++)</strong>, <strong className="text-white font-medium">Full-Stack Web Development (React / Next.js / TypeScript)</strong>, and <strong className="text-white font-medium">Generative AI / LLM Systems</strong>.
              </p>

              <p>
                Notable achievements include being named a <strong className="text-blue-400 font-semibold">Finalist at IIT Guwahati ImpactHack Hackathon 2025</strong> for developing Smart Agri (<a href="https://smart-agri.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-mono">smart-agri.vercel.app</a>) and building the official <strong className="text-purple-400 font-semibold">MCAET AI College Chatbot</strong> (<a href="https://mcaetchatbot-2.onrender.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline font-mono">mcaetchatbot-2.onrender.com</a>) integrated into <a href="https://mcaet.vercel.app" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline font-mono">mcaet.vercel.app</a>.
              </p>
            </div>

            {/* Core Coursework Pills */}
            <div className="pt-4 border-t border-[#1e293b]">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 font-semibold">
                CSE Core Subjects & Expertise:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="px-3 py-1 rounded bg-[#0a0e17] border border-[#1e293b]">Data Structures & Algorithms</span>
                <span className="px-3 py-1 rounded bg-[#0a0e17] border border-[#1e293b]">OOP with C++</span>
                <span className="px-3 py-1 rounded bg-[#0a0e17] border border-[#1e293b]">Generative AI & LLMs</span>
                <span className="px-3 py-1 rounded bg-[#0a0e17] border border-[#1e293b]">Full-Stack Web Dev</span>
                <span className="px-3 py-1 rounded bg-[#0a0e17] border border-[#1e293b]">DBMS & SQL</span>
              </div>
            </div>

          </div>

          {/* Academic Timeline & Highlights Card */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="codehelp-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <Trophy className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase">IIT Guwahati ImpactHack '25</span>
              </div>
              <h4 className="text-base font-bold text-white">Hackathon Finalist</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Built Smart Agri platform providing live city temperature forecasting and AI crop market price prediction for farmers.
              </p>
            </div>

            <div className="codehelp-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-purple-400">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase">Academic Degree</span>
              </div>
              <h4 className="text-base font-bold text-white">B.Tech Computer Science & Engineering</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mahamaya College of Agricultural Engineering and Technology (MCAET, ANDUAT).
              </p>
            </div>

            <div className="codehelp-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400">
                <Award className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase">Campus Integration Lead</span>
              </div>
              <h4 className="text-base font-bold text-white">MCAET Generative AI Chatbot</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Engineered custom conversational AI bot integrated directly into official college web portal.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
