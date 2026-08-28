"use client";

import { Trophy, ExternalLink } from "lucide-react";
import { achievementsList, AchievementItem } from "@/data/certificationsData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-main border-t border-card scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs text-accent uppercase tracking-wider block font-bold">
            Recognitions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
            Achievements & Credentials
          </h2>
          <p className="text-secondary text-sm font-medium">
            Hackathon recognitions, deployed AI systems, and competitive programming accomplishments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievementsList.map((item: AchievementItem, idx: number) => (
            <div
              key={idx}
              className="academic-card p-5 flex flex-col justify-between space-y-4 bg-card border border-card rounded-xl shadow-sm hover:border-accent"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-accent uppercase font-bold">
                    {item.category}
                  </span>
                  <Trophy className="w-4 h-4 text-accent" />
                </div>

                <h3 className="text-base font-bold text-primary tracking-tight">
                  {item.title}
                </h3>
                <span className="text-xs text-secondary block font-semibold">
                  {item.issuer}
                </span>

                <p className="text-xs text-secondary leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-card">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((t: string) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-main text-secondary border border-card"
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
                    className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline pt-1 font-semibold"
                  >
                    <span>View Achievement</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
