"use client";

import { ExternalLink, Eye, Sparkles } from "lucide-react";
import { ProjectItem } from "@/data/projectsData";

interface ProjectCardProps {
  project: ProjectItem;
  onPreview: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onPreview }: ProjectCardProps) {
  return (
    <div className="academic-card p-6 flex flex-col justify-between space-y-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 group">
      
      <div className="space-y-4">
        {/* Top Header & Badge */}
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Sparkles className="w-3 h-3 text-blue-400" />
            {project.categoryLabel}
          </span>
          {project.badge && (
            <span className="text-[10px] font-mono text-slate-400 font-semibold px-2 py-0.5 rounded bg-[#0b0f17] border border-[#1e2638]">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-1.5 pt-2">
          {project.highlights.slice(0, 2).map((highlight: string, i: number) => (
            <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
              <span className="text-blue-400 mt-0.5">•</span>
              <span className="line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Tags & Actions Footer */}
      <div className="space-y-4 pt-4 border-t border-[#1e2638]">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0b0f17] text-slate-300 border border-[#1e2638]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-sm"
          >
            <span>Live Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => onPreview(project)}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded text-xs font-semibold bg-[#121824] hover:bg-[#1a2334] text-slate-200 border border-[#1e2638] hover:border-slate-600 transition-all cursor-pointer"
            title="View Details & BibTeX"
          >
            <Eye className="w-3.5 h-3.5 text-blue-400" />
            <span>Details</span>
          </button>
        </div>
      </div>

    </div>
  );
}
