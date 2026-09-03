"use client";

import { useState, useEffect } from "react";
import { X, Layers, Terminal, ArrowUpRight } from "lucide-react";
import { projectsList, ProjectItem } from "@/data/projectsData";
import ProjectCard3D from "@/components/ProjectCard/ProjectCard3D";
import { useTheme } from "@/components/ThemeProvider";
import { audioHaptics } from "@/lib/audioHaptics";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const { theme } = useTheme();

  const tabs = [
    { id: "all", label: "All Works" },
    { id: "saas", label: "SaaS" },
    { id: "ai", label: "Generative AI" },
    { id: "agritech", label: "Agritech" },
  ];

  const filteredProjects = projectsList.filter((p) => 
    activeTab === "all" ? true : p.category === activeTab
  );

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    audioHaptics.playClick(250, 0.05, "square");
  };

  const closeDetails = () => {
    setActiveProject(null);
    audioHaptics.playPop(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeProject) {
        closeDetails();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  useEffect(() => {
    if (activeProject) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [activeProject]);

  const accentColor = theme === "light" ? "rgb(196, 86, 58)" : "rgb(224, 122, 95)";

  return (
    <section id="projects" className="py-20 sm:py-24 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-main border border-card text-xs font-bold uppercase tracking-wider text-accent" style={{ color: accentColor }}>
              <Layers className="w-3.5 h-3.5" />
              <span>PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              RECENT <span style={{ color: accentColor }}>WORKS</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                  activeTab === tab.id
                    ? "bg-accent text-white border-accent shadow-md"
                    : "bg-main border-card text-secondary hover:text-primary hover:border-accent"
                }`}
                style={activeTab === tab.id ? { backgroundColor: accentColor, borderColor: accentColor, color: '#ffffff' } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="min-h-[420px] h-full">
              <ProjectCard3D 
                project={project} 
                theme={theme} 
                onOpenDetails={setActiveProject} 
              />
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          <div 
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-md transition-opacity"
            onClick={closeDetails}
          />
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-[#f3e2d5] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200 z-10 examine-details-card"
            style={{
              backgroundColor: '#ffffff',
              borderColor: 'rgb(243, 226, 213)',
              boxShadow: '0 25px 60px -15px rgba(46, 34, 29, 0.25), 0 0 0 1px rgba(243, 226, 213, 0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            
            <div 
              className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 border-b border-[#f3e2d5] bg-white/95 backdrop-blur-md"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)', borderColor: 'rgb(243, 226, 213)' }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Terminal className="w-4 h-4 text-accent" style={{ color: accentColor }} />
                  <span className="text-xs font-mono text-[#705b50] tracking-widest uppercase font-bold">System Architecture</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-[#2e221d]">{activeProject.title}</h3>
              </div>
              <button
                onClick={closeDetails}
                className="p-2 rounded-full bg-[#fff9f5] border border-[#f3e2d5] hover:border-[#c4563a] hover:bg-[#fdeee6] transition-colors text-[#705b50] hover:text-[#c4563a] cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-6 sm:space-y-8 bg-white">
              
              <div className="space-y-2.5">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: accentColor }}>
                  Implementation Mechanics
                </h4>
                <div 
                  className="p-4 sm:p-5 rounded-2xl bg-[#fff9f5] border border-[#f3e2d5] text-xs sm:text-sm leading-relaxed text-[#56443c] font-medium"
                  style={{ backgroundColor: 'rgb(255, 249, 245)', borderColor: 'rgb(243, 226, 213)' }}
                >
                  {activeProject.mechanics}
                </div>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: accentColor }}>
                  Key Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {activeProject.metrics.map((metric, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 rounded-2xl bg-[#fff9f5] border border-[#f3e2d5] flex flex-col gap-1"
                      style={{ backgroundColor: 'rgb(255, 249, 245)', borderColor: 'rgb(243, 226, 213)' }}
                    >
                      <span className="text-xs font-mono text-[#705b50] uppercase font-semibold">{metric.label}</span>
                      <span className="text-base sm:text-lg font-bold text-[#2e221d]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: accentColor }}>
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 rounded-xl bg-[#fff9f5] border border-[#f3e2d5] text-xs font-mono font-semibold text-[#2e221d]"
                      style={{ backgroundColor: 'rgb(255, 249, 245)', borderColor: 'rgb(243, 226, 213)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(activeProject.url || activeProject.githubUrl) && (
                <div className="pt-4 border-t border-[#f3e2d5] flex items-center gap-3">
                  {activeProject.url && (
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all shadow-sm hover:opacity-90 cursor-pointer"
                      style={{ backgroundColor: accentColor, color: '#ffffff' }}
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#fff9f5] border border-[#f3e2d5] text-[#2e221d] hover:border-[#c4563a] hover:bg-[#fdeee6] transition-all cursor-pointer"
                    >
                      <span>Source Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
