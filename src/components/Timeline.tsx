"use client";

import { GraduationCap, Trophy, Bot, Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  tags: string[];
  icon: typeof GraduationCap;
  iconColor: string;
  badge?: string;
  link?: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2022 — Present",
    title: "Bachelor of Technology (B.Tech)",
    role: "Computer Science & Engineering (CSE) Student",
    institution: "Mahamaya College of Agricultural Engineering and Technology (MCAET)",
    location: "ANDUAT University, Ayodhya / UP, India",
    description: "Rigorous academic program focusing on Data Structures & Algorithms, Object-Oriented Programming (C++), Database Management Systems (DBMS), Operating Systems, Software Engineering, and Web Development.",
    tags: ["Data Structures", "C++ OOP", "DBMS", "Operating Systems", "Software Engineering"],
    icon: GraduationCap,
    iconColor: "text-blue-400",
    badge: "Undergraduate Degree",
  },
  {
    year: "2025",
    title: "IIT Guwahati ImpactHack Hackathon",
    role: "National Finalist & Lead Developer (Smart Agri)",
    institution: "IIT Guwahati ImpactHack 2025",
    location: "Guwahati, Assam, India",
    description: "Built Smart Agri (smart-agri.vercel.app), a precision farming decision platform providing real-time city temperature forecasting and live crop market price prediction models for farmers.",
    tags: ["IIT Guwahati", "ImpactHack 2025", "Smart Agri", "Agritech AI", "Vercel"],
    icon: Trophy,
    iconColor: "text-amber-400",
    badge: "National Hackathon Finalist",
    link: "https://smart-agri.vercel.app",
  },
  {
    year: "2024 — Present",
    title: "MCAET College Generative AI System",
    role: "Lead Generative AI Developer",
    institution: "MCAET ANDUAT Web Portal",
    location: "Ayodhya, UP, India",
    description: "Engineered, deployed, and integrated an automated Generative AI chatbot (mcaetchatbot-2.onrender.com) into official college portal (mcaet.vercel.app) to answer student queries dynamically.",
    tags: ["Generative AI", "LLMs", "Node.js", "Render", "Campus Portal Integration"],
    icon: Bot,
    iconColor: "text-purple-400",
    badge: "Live Deployed Campus AI",
    link: "https://mcaetchatbot-2.onrender.com",
  },
  {
    year: "2023 — Present",
    title: "Full-Stack Web & SaaS Projects",
    role: "Independent Software Developer",
    institution: "Self-Driven Development",
    location: "Remote / Online",
    description: "Built ProcureHub (B2B Procurement SaaS), E-Commerce Store with Helpcenter, and custom React / Next.js web applications with modern responsive UI and REST API backend integrations.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ProcureHub"],
    icon: Briefcase,
    iconColor: "text-emerald-400",
    badge: "4+ Production Web Apps",
    link: "https://procurehub.vercel.app",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 relative bg-[#0b0f19] border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block font-semibold">
            Academic & Experience Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & <span className="gradient-text-academic">Milestones</span>
          </h2>
          <p className="text-slate-400 text-base">
            Academic progression, hackathon honors, and software engineering experience.
          </p>
        </div>

        {/* Vertical Academic Timeline */}
        <div className="relative border-l-2 border-[#1e293b] ml-4 md:ml-6 space-y-12 pl-6 md:pl-10">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group">
                
                {/* Timeline Dot Icon */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1 w-10 h-10 rounded-full bg-[#131c2e] border-2 border-[#1e293b] flex items-center justify-center group-hover:border-blue-500 transition-colors shadow-lg">
                  <Icon className={`w-4 h-4 ${item.iconColor}`} />
                </div>

                {/* Timeline Card */}
                <div className="academic-card p-6 space-y-4">
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e293b] pb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.year}</span>
                    </div>

                    {item.badge && (
                      <span className="px-3 py-0.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-medium">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-300 font-semibold">
                      {item.role}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-400 pt-0.5">
                      <span>{item.institution}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Tags & Action Link */}
                  <div className="pt-3 border-t border-[#1e293b] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0b0f19] text-slate-300 border border-[#1e293b]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:underline font-medium"
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
