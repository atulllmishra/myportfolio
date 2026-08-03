"use client";

import { Award, Trophy, ExternalLink } from "lucide-react";

interface AchievementItem {
  title: string;
  category: string;
  issuer: string;
  description: string;
  tags: string[];
  link?: string;
}

const achievementsList: AchievementItem[] = [
  {
    title: "Finalist - IIT Guwahati ImpactHack Hackathon 2025",
    category: "National Hackathon Finalist",
    issuer: "IIT Guwahati",
    description: "Built Smart Agri (smart-agri.vercel.app) with teammates at IIT Guwahati ImpactHack 2025. Developed a precision agritech platform offering real-time city temperature tracking and live crop market price predictions for farmers.",
    tags: ["IIT Guwahati", "ImpactHack 2025", "Smart Agri", "Agritech AI"],
    link: "https://smart-agri.vercel.app"
  },
  {
    title: "Generative AI College Chatbot Deployment",
    category: "Campus AI Integration",
    issuer: "MCAET College (ANDUAT)",
    description: "Designed, engineered, and deployed a live Generative AI chatbot (mcaetchatbot-2.onrender.com) for automated student queries, integrated directly into official college website mcaet.vercel.app.",
    tags: ["LLMs", "Generative AI", "Render", "Vercel"],
    link: "https://mcaetchatbot-2.onrender.com"
  },
  {
    title: "C++ Data Structures & Algorithms Problem Solving",
    category: "Competitive Programming",
    issuer: "LeetCode & CodeChef",
    description: "Strong foundation in C++ memory management, STL, object-oriented programming, and algorithmic problem-solving for SDE technical interviews.",
    tags: ["C++", "DSA", "Algorithms", "Problem Solving"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-[#0b0f17] border-t border-[#1e2638]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
            Recognitions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Achievements & Credentials
          </h2>
          <p className="text-slate-400 text-sm">
            Hackathon recognitions, deployed AI systems, and competitive programming accomplishments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievementsList.map((item, idx) => (
            <div
              key={idx}
              className="academic-card p-5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                    {item.category}
                  </span>
                  <Trophy className="w-4 h-4 text-slate-400" />
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <span className="text-xs font-mono text-slate-400 block font-medium">
                  {item.issuer}
                </span>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-[#1e2638]">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0b0f17] text-slate-400 border border-[#1e2638]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-white hover:underline pt-0.5"
                  >
                    <span>View Recognition</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
