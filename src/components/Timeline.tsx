"use client";

import { GraduationCap, Trophy, Bot, Calendar, MapPin, ExternalLink, Briefcase, Sparkles, ShoppingBag } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  tags: string[];
  icon: typeof GraduationCap;
  badge?: string;
  link?: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "August 2026 — Present (Ongoing)",
    title: "heyBuddy - AI Multilingual EdTech Video Platform",
    role: "Founder & Lead AI Developer",
    institution: "Self-Driven EdTech SaaS Project",
    location: "Remote / Online",
    description: "Building heyBuddy, an online edtech platform that generates AI video solutions for user questions in multiple languages and allows students to dynamically transform lectures into different difficulty levels.",
    tags: ["EdTech AI", "Multilingual Video", "Lecture Transformation", "Next.js", "LLMs"],
    icon: Sparkles,
    badge: "Ongoing Work",
  },
  {
    year: "August 2026 — Present",
    title: "E-Commerce Storefront & AI Helpcenter Integration",
    role: "Full-Stack Web Developer",
    institution: "Self-Driven Web Application",
    location: "Remote / Online",
    description: "Engineered a full-stack e-commerce application featuring product catalog navigation, cart management, checkout flows, and an integrated customer helpcenter AI chatbot.",
    tags: ["React", "TypeScript", "Tailwind CSS", "AI Chatbot UI", "Vercel"],
    icon: ShoppingBag,
    badge: "Live Web App",
    link: "https://ecommerce-store-ivory-sigma.vercel.app/",
  },
  {
    year: "July 2026 — Present",
    title: "MCAET College Generative AI Chatbot System",
    role: "Lead Generative AI Developer",
    institution: "MCAET ANDUAT Web Portal",
    location: "Ayodhya, UP, India",
    description: "Engineered, deployed, and integrated an automated Generative AI chatbot (mcaetchatbot-2.onrender.com) into official college portal (mcaet.vercel.app) to assist students.",
    tags: ["Generative AI", "LLMs", "Node.js", "Render", "Portal Integration"],
    icon: Bot,
    badge: "Live Campus AI",
    link: "https://mcaetchatbot-2.onrender.com",
  },
  {
    year: "March 2025",
    title: "IIT Guwahati ImpactHack Hackathon (Smart Agri)",
    role: "National Finalist & Lead Developer",
    institution: "IIT Guwahati ImpactHack 2025",
    location: "Guwahati, Assam, India",
    description: "Built Smart Agri (smart-agri.vercel.app), a precision farming decision support platform providing real-time weather forecasting and live crop market price prediction for farmers.",
    tags: ["IIT Guwahati", "ImpactHack 2025", "Smart Agri", "Agritech AI"],
    icon: Trophy,
    badge: "Hackathon Finalist",
    link: "https://smart-agri.vercel.app",
  },
  {
    year: "Oct 1, 2024 — Sept 24, 2025",
    title: "ProcureHub - B2B IT Procurement SaaS Platform",
    role: "Creator & Full-Stack Developer",
    institution: "Enterprise SaaS Project",
    location: "Remote / Online",
    description: "Engineered ProcureHub (procurehub.vercel.app), a transparent, bribeless B2B IT procurement platform featuring open bidding, smart contracts, verified contractor vetting, and real-time bid analytics.",
    tags: ["Next.js", "B2B SaaS", "Smart Contracts", "Procurement"],
    icon: Briefcase,
    badge: "B2B Production SaaS",
    link: "https://procurehub.vercel.app",
  },
  {
    year: "2024 — Present",
    title: "Bachelor of Technology (B.Tech)",
    role: "Computer Science & Engineering (CSE) Student",
    institution: "Mahamaya College of Agricultural Engineering and Technology (MCAET)",
    location: "ANDUAT University, Ayodhya / UP, India",
    description: "Academic coursework covering Data Structures & Algorithms, Object-Oriented Programming in C++, DBMS, Operating Systems, Software Engineering, and Web Technologies.",
    tags: ["Data Structures", "C++ OOP", "DBMS", "Operating Systems", "Web Dev"],
    icon: GraduationCap,
    badge: "Undergraduate Degree",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 relative bg-[#0b0f17] border-t border-[#1e2638]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
            Timeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education & Experience
          </h2>
          <p className="text-slate-400 text-sm">
            Academic progression, hackathons, and software projects.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#1e2638] ml-3 md:ml-5 space-y-8 pl-5 md:pl-8">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group">
                
                {/* Icon Dot */}
                <div className="absolute -left-[27px] md:-left-[39px] top-1 w-8 h-8 rounded-full bg-[#121824] border border-[#1e2638] flex items-center justify-center text-slate-400">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Card */}
                <div className="academic-card p-5 space-y-3">
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e2638] pb-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.year}</span>
                    </div>

                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-300 text-[11px] font-mono">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-0.5">
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-300 font-medium">
                      {item.role}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-400 pt-0.5">
                      <span>{item.institution}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="pt-2.5 border-t border-[#1e2638] flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0b0f17] text-slate-400 border border-[#1e2638]"
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
                        className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-white font-medium"
                      >
                        <span>Details</span>
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
