"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { ProjectItem } from "@/data/projectsData";
import { audioHaptics } from "@/lib/audioHaptics";

interface ProjectCard3DProps {
  project: ProjectItem;
  theme: "light" | "dark";
  onOpenDetails: (project: ProjectItem) => void;
}

export default function ProjectCard3D({ project, theme, onOpenDetails }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setRotation({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15
    });
  };

  const handleMouseEnter = () => {
    audioHaptics.playClick(350, 0.05, "sine");
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  const isLight = theme === "light";
  const glareColor = isLight ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.4)";
  const accentColor = isLight ? "rgb(196, 86, 58)" : "rgb(224, 122, 95)";

  return (
    <div className="perspective-1000 w-full h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          audioHaptics.playPop(true);
          onOpenDetails(project);
        }}
        className="relative w-full h-full p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-card border border-card shadow-xl cursor-pointer transition-all duration-300 ease-out hover:border-accent hover:shadow-2xl flex flex-col justify-between"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div 
          className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, ${glareColor}, transparent 60%)`,
            opacity: glare.opacity,
            mixBlendMode: isLight ? "overlay" : "soft-light",
          }}
        />

        <div className="flex justify-between items-start mb-4" style={{ transform: "translateZ(30px)" }}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-main border border-card text-[11px] font-bold uppercase tracking-wider text-accent" style={{ color: accentColor }}>
            <Code2 className="w-3 h-3" />
            <span>{project.categoryLabel}</span>
          </div>
          <div className="text-xs text-secondary font-medium px-2.5 py-1 bg-main rounded-lg border border-card">
            {project.timeline}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight text-primary" style={{ transform: "translateZ(40px)" }}>
          {project.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-secondary font-medium leading-relaxed mb-5 flex-grow" style={{ transform: "translateZ(20px)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5" style={{ transform: "translateZ(25px)" }}>
          {project.tech.map((t, i) => (
            <span key={i} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-main border border-card text-primary">
              {t}
            </span>
          ))}
        </div>

        <div className="pt-4 mt-auto border-t border-card flex items-center justify-between" style={{ transform: "translateZ(35px)" }}>
          <div className="flex items-center gap-2">
            {project.url && (
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.stopPropagation(); audioHaptics.playClick(800, 0.05, "sine"); }}
                className="p-2 rounded-full bg-main border border-card hover:bg-accent hover:text-white transition-colors text-secondary cursor-pointer"
                title="Live App"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.stopPropagation(); audioHaptics.playClick(800, 0.05, "sine"); }}
                className="p-2 rounded-full bg-main border border-card hover:bg-accent hover:text-white transition-colors text-secondary cursor-pointer"
                title="Source Code"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
          
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              audioHaptics.playPop(true);
              onOpenDetails(project);
            }}
            className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#fdeee6] hover:bg-[#c4563a] hover:text-white border border-[#f7d5c5] hover:border-[#c4563a] transition-all cursor-pointer shadow-xs active:scale-95 group/btn"
            style={{ color: accentColor }}
            title={`Examine ${project.title}`}
          >
            <span className="transition-colors group-hover/btn:text-white">Examine</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
