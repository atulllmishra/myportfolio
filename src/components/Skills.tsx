"use client";

import { useState } from "react";
import { Code2, Bot, Cpu, Layers } from "lucide-react";

type SkillCategory = "all" | "ai" | "web" | "core";

interface SkillItem {
  name: string;
  category: "ai" | "web" | "core";
  level: number;
  description: string;
  tags: string[];
}

const skillsData: SkillItem[] = [
  {
    name: "Generative AI & LLM Systems",
    category: "ai",
    level: 92,
    description: "Developing custom AI conversational bots, LLM prompt engineering, and context-driven RAG models.",
    tags: ["Gemini API", "OpenAI", "Prompt Engineering", "RAG"],
  },
  {
    name: "AI Chatbot Architecture",
    category: "ai",
    level: 95,
    description: "End-to-end deployment of live conversational bots for web & educational portals.",
    tags: ["Render", "Vercel", "REST APIs", "Node.js"],
  },
  {
    name: "LangChain & Agentic Workflows",
    category: "ai",
    level: 85,
    description: "Multi-step AI reasoning chains, structured JSON outputs, and vector embedding retrieval.",
    tags: ["Embeddings", "Vector Search", "JSON Schemas"],
  },
  {
    name: "React.js & Next.js App Router",
    category: "web",
    level: 90,
    description: "Building modern Single Page Apps and App Router web applications with high performance.",
    tags: ["App Router", "SSR", "TypeScript", "Hooks"],
  },
  {
    name: "JavaScript (ES6+) & TypeScript",
    category: "web",
    level: 88,
    description: "Writing clean, type-safe asynchronous code for dynamic web interfaces.",
    tags: ["Async/Await", "Promises", "DOM", "TypeScript"],
  },
  {
    name: "HTML5, CSS3 & Tailwind CSS",
    category: "web",
    level: 94,
    description: "Crafting responsive, clean, modern layouts with precise typography.",
    tags: ["Tailwind", "Responsive", "Flex/Grid", "CSS3"],
  },
  {
    name: "REST APIs & Microservices",
    category: "web",
    level: 86,
    description: "Connecting web interfaces to backend APIs, database schemas, and AI endpoints.",
    tags: ["Fetch API", "Express", "JSON", "CORS"],
  },
  {
    name: "C++ Programming & OOP",
    category: "core",
    level: 88,
    description: "Solid foundation in C++ object-oriented programming, STL, and memory management.",
    tags: ["C++ STL", "OOP", "Pointers", "Memory"],
  },
  {
    name: "Data Structures & Algorithms",
    category: "core",
    level: 85,
    description: "Problem solving using arrays, trees, graphs, dynamic programming, and complexity analysis.",
    tags: ["Arrays", "Trees", "Graphs", "DP"],
  },
  {
    name: "DBMS & Operating Systems",
    category: "core",
    level: 84,
    description: "Core CSE fundamentals: relational databases, SQL queries, memory allocation, and process execution.",
    tags: ["SQL", "Relational Schema", "OS Concepts"],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("all");

  const filteredSkills = skillsData.filter(
    (s) => activeTab === "all" || s.category === activeTab
  );

  return (
    <section id="skills" className="py-20 relative bg-[#0b0f17] border-t border-[#1e2638]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm">
            Generative AI, Full-Stack Web Development, and CSE Core Fundamentals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex mb-8 overflow-x-auto pb-1">
          <div className="inline-flex p-1 rounded-lg bg-[#121824] border border-[#1e2638] text-xs font-medium">
            {[
              { id: "all", label: "All Skills", icon: Layers },
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
                      ? "bg-[#1e2638] text-white font-semibold"
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
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="academic-card p-5 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                    {skill.category === "ai"
                      ? "Generative AI"
                      : skill.category === "web"
                      ? "Full-Stack Web"
                      : "CSE Core"}
                  </span>
                  <span className="text-xs font-mono text-slate-300 font-bold">
                    {skill.level}%
                  </span>
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
                    className="h-full bg-slate-300 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="flex flex-wrap gap-1 pt-0.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0b0f17] text-slate-400 border border-[#1e2638]"
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
