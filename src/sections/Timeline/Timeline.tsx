"use client";

import { GraduationCap, Trophy, Bot, Calendar, MapPin, ExternalLink, Briefcase, Sparkles, ShoppingBag } from "lucide-react";
import { timelineData, TimelineItem } from "@/data/timelineData";

const iconMap = {
  Sparkles,
  ShoppingBag,
  Bot,
  Trophy,
  Briefcase,
  GraduationCap,
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 relative bg-[#0b0f17] border-t border-[#1e2638] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
            Timeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Journey & Experience
          </h2>
          <p className="text-slate-400 text-sm">
            Academic achievements, software development milestones, hackathons, and production deployments.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-[#1e2638] ml-4 md:ml-6 space-y-10">
          {timelineData.map((item: TimelineItem) => {
            const IconComponent = iconMap[item.iconName] || GraduationCap;
            return (
              <div key={item.id} className="relative pl-6 md:pl-8 group">
                
                {/* Timeline Node Bullet */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#121824] border border-[#1e2638] flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600/10 transition-all">
                  <IconComponent className="w-4 h-4 text-blue-400" />
                </div>

                {/* Content Card */}
                <div className="academic-card p-6 space-y-3.5 bg-[#121824] border border-[#1e2638] rounded-xl">
                  
                  {/* Top Bar: Year & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e2638] pb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.year}</span>
                    </div>
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Role */}
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                      {item.title}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline inline-flex items-center"
                          title="Visit Link"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </h3>
                    <p className="text-xs text-blue-400 font-mono mt-0.5 font-medium">
                      {item.role} • <span className="text-slate-400">{item.institution}</span>
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag: string) => (
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
