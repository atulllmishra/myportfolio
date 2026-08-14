"use client";

import { Code2, Heart, Lightbulb, Compass, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-[#1e293b] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>NO CAP PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ABOUT <span className="text-blue-400">ATUL KUMAR MISHRA</span>
          </h2>
          <p className="text-slate-400 text-base">
            Computer Science undergraduate, full-stack engineer, and product builder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Box */}
          <div className="lg:col-span-7 academic-card p-8 space-y-6 bg-[#121824]/90 border border-[#1e2638] rounded-2xl shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3 pb-4 border-b border-[#1e2638]">
              <Code2 className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-white">ENGINEERING JOURNEY 🚀</h3>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-normal">
              <p>
                My journey into software engineering started with a curiosity for how complex computer systems translate lines of code into impactful human experiences. Currently pursuing my <strong className="text-white">B.Tech in Computer Science & Engineering</strong> at MCAET, ANDUAT University, I balance academic rigors with hands-on product creation.
              </p>

              <p>
                I am deeply enthusiastic about <strong className="text-white font-semibold">Full-Stack Web Engineering</strong> and <strong className="text-blue-400 font-semibold">Generative Systems</strong>. Whether designing accessible user interfaces in React/Next.js or configuring custom LLM pipelines, I enjoy building software that solves genuine user pain points.
              </p>

              <p>
                When I&apos;m not writing code for web applications, I spend my time sharpening algorithmic problem-solving skills in <strong className="text-white font-semibold">C++ Data Structures & Algorithms</strong>.
              </p>
            </div>

            {/* Core Competencies Pills */}
            <div className="pt-4 border-t border-[#1e2638]">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 font-semibold">
                Engineering Foundations:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="px-3 py-1 rounded-full bg-[#0b0f17] border border-[#1e2638]">Data Structures & Algorithms</span>
                <span className="px-3 py-1 rounded-full bg-[#0b0f17] border border-[#1e2638]">C++ OOP & STL</span>
                <span className="px-3 py-1 rounded-full bg-[#0b0f17] border border-[#1e2638]">Generative AI & LLM Systems</span>
                <span className="px-3 py-1 rounded-full bg-[#0b0f17] border border-[#1e2638]">Next.js & TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-[#0b0f17] border border-[#1e2638]">DBMS & SQL</span>
              </div>
            </div>

          </div>

          {/* Personal Values Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="academic-card p-6 space-y-3 bg-[#121824]/90 border border-[#1e2638] rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 text-blue-400">
                <Lightbulb className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono font-bold uppercase">Problem-Solving Mindset</span>
              </div>
              <h4 className="text-base font-bold text-white">First-Principles Thinking ⚡</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deconstructing complex software requirements into clean, modular, and maintainable architectural components.
              </p>
            </div>

            <div className="academic-card p-6 space-y-3 bg-[#121824]/90 border border-[#1e2638] rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 text-purple-400">
                <Compass className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono font-bold uppercase">Continuous Learning</span>
              </div>
              <h4 className="text-base font-bold text-white">Adapting to Modern Tech 🚀</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Exploring AI video synthesis, LLM agent workflows, vector embeddings, and modern web frameworks.
              </p>
            </div>

            <div className="academic-card p-6 space-y-3 bg-[#121824]/90 border border-[#1e2638] rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 text-emerald-400">
                <Heart className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold uppercase">Beyond the Code</span>
              </div>
              <h4 className="text-base font-bold text-white">Community & Collaborations ✨</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Enthusiastic about open-source collaboration, hackathon innovation, and sharing technical knowledge with peers.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
