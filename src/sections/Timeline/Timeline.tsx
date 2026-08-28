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
    <section id="timeline" className="py-20 relative bg-main border-t border-card scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs text-accent uppercase tracking-wider block font-bold">
            Timeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
            Journey & Experience
          </h2>
          <p className="text-secondary text-sm font-medium">
            Academic achievements, software development milestones, hackathons, and production deployments.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-card ml-4 md:ml-6 space-y-10">
          {timelineData.map((item: TimelineItem) => {
            const IconComponent = iconMap[item.iconName] || GraduationCap;
            return (
              <div key={item.id} className="relative pl-6 md:pl-8 group">
                
                {/* Timeline Node Bullet */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-card border border-card flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all shadow-sm">
                  <IconComponent className="w-4 h-4 text-accent" />
                </div>

                {/* Content Card */}
                <div className="academic-card p-6 space-y-3.5 bg-card border border-card rounded-xl shadow-sm hover:border-accent">
                  
                  {/* Top Bar: Year & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-card pb-3">
                    <div className="flex items-center gap-2 text-xs text-secondary font-medium">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span>{item.year}</span>
                    </div>
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-accent/10 text-accent border border-accent/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Role */}
                  <div>
                    <h3 className="text-base font-bold text-primary tracking-tight flex items-center gap-2">
                      {item.title}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline inline-flex items-center"
                          title="Visit Link"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </h3>
                    <p className="text-xs text-accent mt-0.5 font-semibold">
                      {item.role} • <span className="text-secondary">{item.institution}</span>
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                    <MapPin className="w-3.5 h-3.5 text-secondary/70" />
                    <span>{item.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-secondary leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-main text-secondary border border-card"
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
