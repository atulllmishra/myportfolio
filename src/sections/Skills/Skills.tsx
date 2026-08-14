"use client";

import { useState } from "react";
import { Code2, Bot, Cpu, Layers, CheckCircle2, Zap } from "lucide-react";
import { skillsData, SkillCategory, SkillItem } from "@/data/skillsData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("all");

  const filteredSkills = skillsData.filter(
    (s: SkillItem) => activeTab === "all" || s.category === activeTab
  );

  return (
    <section id="skills" className="py-20 relative border-t border-[#1e2638] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>HEAVYWEIGHT TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            TECH ARSENAL & CORE CAPABILITIES ⚡
          </h2>
          <p className="text-slate-400 text-sm">
            Generative AI engineering, full-stack web applications, and computer science fundamentals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex mb-8 overflow-x-auto pb-1">
          <div className="inline-flex p-1.5 rounded-xl bg-[#121824] border border-[#1e2638] text-xs font-mono font-bold">
            {[
              { id: "all", label: "ALL TECH", icon: Layers },
              { id: "ai", label: "GENERATIVE AI", icon: Bot },
              { id: "web", label: "FULL-STACK WEB", icon: Code2 },
              { id: "core", label: "CSE CORE (C++ & DSA)", icon: Cpu },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as SkillCategory)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white font-bold shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.name}
              className="academic-card p-5 flex flex-col justify-between space-y-4 bg-[#121824]/90 border border-[#1e2638] rounded-2xl shadow-lg hover:border-blue-500/50 transition-all duration-300 backdrop-blur-md"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-blue-400 uppercase font-bold">
                    {skill.category === "ai"
                      ? "Generative AI"
                      : skill.category === "web"
                      ? "Full-Stack Web"
                      : "CSE Core"}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-[#1e2638]">
                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-[#0b0f17] overflow-hidden p-0.5 border border-[#1e2638]">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {skill.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#0b0f17] text-slate-300 border border-[#1e2638]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
