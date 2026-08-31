"use client";

import { useState } from "react";
import { X, Layers, Terminal } from "lucide-react";
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
                style={activeTab === tab.id ? { backgroundColor: accentColor, borderColor: accentColor } : {}}
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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeDetails}
          />
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-card rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 border-b border-card bg-card/95 backdrop-blur-md">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Terminal className="w-4 h-4 text-accent" style={{ color: accentColor }} />
                  <span className="text-xs font-mono text-secondary tracking-widest uppercase">System Architecture</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-primary">{activeProject.title}</h3>
              </div>
              <button
                onClick={closeDetails}
                className="p-2 rounded-full bg-main border border-card hover:border-accent transition-colors text-secondary hover:text-primary cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-6 sm:space-y-8">
              
              <div className="space-y-2.5">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent" style={{ color: accentColor }}>
                  Implementation Mechanics
                </h4>
                <div className="p-4 sm:p-5 rounded-2xl bg-main border border-card text-xs sm:text-sm leading-relaxed text-secondary font-medium">
                  {activeProject.mechanics}
                </div>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent" style={{ color: accentColor }}>
                  Key Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {activeProject.metrics.map((metric, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-main border border-card flex flex-col gap-1">
                      <span className="text-xs font-mono text-secondary uppercase">{metric.label}</span>
                      <span className="text-base sm:text-lg font-bold text-primary">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent" style={{ color: accentColor }}>
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-main border border-card text-xs font-mono font-medium text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
