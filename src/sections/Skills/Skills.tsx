"use client";

import { useState } from "react";
import { Cpu, TerminalSquare } from "lucide-react";
import { skillsData } from "@/data/skillsData";
import { useTheme } from "@/components/ThemeProvider";
import { audioHaptics } from "@/lib/audioHaptics";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { theme } = useTheme();

  const tabs = [
    { id: "all", label: "Overview" },
    { id: "engineering", label: "Engineering" },
    { id: "graphics", label: "Graphics & UI" },
    { id: "backend", label: "Systems" },
  ];

  const filteredSkills = skillsData.filter((skill) =>
    activeTab === "all" ? true : skill.category === activeTab
  );

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    audioHaptics.playClick(250, 0.05, "square");
  };

  const isLight = theme === "light";
  const accentColor = isLight ? "#C4563A" : "#E07A5F";

  return (
    <section id="skills" className="py-24 relative border-t border-card scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-main border border-card text-xs font-bold uppercase tracking-wider text-accent">
              <Cpu className="w-3.5 h-3.5" />
              <span>CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              TOOLKIT & <span style={{ color: accentColor }}>EXPERTISE</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                  activeTab === tab.id
                    ? "bg-accent text-white border-accent shadow-md"
                    : "bg-main border-card text-secondary hover:text-primary hover:border-accent"
                }`}
                style={activeTab === tab.id ? { backgroundColor: accentColor, borderColor: accentColor } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border border-card rounded-2xl shadow-sm hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col group"
              onMouseEnter={() => audioHaptics.playClick(600, 0.02, "sine")}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TerminalSquare className="w-5 h-5 transition-colors duration-300 text-secondary group-hover:text-primary" style={{ color: accentColor }} />
                  <h3 className="font-bold text-lg tracking-tight">{skill.name}</h3>
                </div>
              </div>

              <p className="text-sm font-medium leading-relaxed text-secondary mb-6 flex-grow">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-card mt-auto">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded bg-main border border-card text-[11px] font-semibold uppercase tracking-wider text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
