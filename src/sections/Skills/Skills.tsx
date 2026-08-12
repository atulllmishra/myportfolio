"use client";

import { useState } from "react";
import { Code2, Bot, Cpu, Layers, CheckCircle2 } from "lucide-react";
import { skillsData, SkillCategory, SkillItem } from "@/data/skillsData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("all");

  const filteredSkills = skillsData.filter(
    (s: SkillItem) => activeTab === "all" || s.category === activeTab
  );

  return (
    <section id="skills" className="py-20 relative bg-[#0b0f17] border-t border-[#1e2638] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="text-slate-400 text-sm">
            Generative AI engineering, full-stack web applications, and computer science fundamentals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex mb-8 overflow-x-auto pb-1">
          <div className="inline-flex p-1 rounded-lg bg-[#121824] border border-[#1e2638] text-xs font-medium">
            {[
              { id: "all", label: "All Tech", icon: Layers },
              { id: "ai", label: "Generative AI", icon: Bot },
              { id: "web", label: "Full-Stack Web", icon: Code2 },
              { id: "core", label: "CSE Core (C++ & DSA)", icon: Cpu },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as SkillCategory)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded transition-all ${
                    isActive
                      ? "bg-[#1e2638] text-white font-semibold shadow-sm"
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
              className="academic-card p-5 flex flex-col justify-between space-y-3 bg-[#121824] border border-[#1e2638] rounded-xl shadow-md hover:border-blue-500/50 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-blue-400 uppercase font-semibold">
                    {skill.category === "ai"
                      ? "Generative AI"
                      : skill.category === "web"
                      ? "Full-Stack Web"
                      : "CSE Core"}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Proficient</span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white tracking-tight">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-[#1e2638]">
                {/* Progress Bar */}
                <div className="w-full h-1.5 rounded-full bg-[#0b0f17] overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="flex flex-wrap gap-1 pt-0.5">
                  {skill.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0b0f17] text-slate-300 border border-[#1e2638]"
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

