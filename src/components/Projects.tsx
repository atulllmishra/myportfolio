"use client";

import { useState } from "react";
import { ArrowUpRight, Eye, X, Award, Sparkles } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  url: string;
  secondaryUrl?: string;
  description: string;
  highlights: string[];
  tech: string[];
  badge?: string;
}

const projectsList: ProjectItem[] = [
  {
    id: "smart-agri",
    title: "Smart Agri - Agritech Platform",
    category: "Hackathon Finalist / Agritech Solution",
    url: "https://smart-agri.vercel.app",
    badge: "IIT Guwahati ImpactHack '25 Finalist",
    description: "Built with teammates and named Finalist at IIT Guwahati ImpactHack Hackathon 2025. An intelligent precision farming platform empowering farmers with real-time city weather predictions and live crop market price forecasting.",
    highlights: [
      "Finalist project at IIT Guwahati ImpactHack Hackathon 2025",
      "Real-time city temperature & weather condition forecasting for farmers",
      "Predictive analytics engine for live crop market prices & yield insights",
      "Responsive agritech decision support & resource management dashboard"
    ],
    tech: ["React", "JavaScript", "HTML5/CSS3", "Agritech UI", "Vercel"]
  },
  {
    id: "mcaet-chatbot",
    title: "MCAET College Generative AI Chatbot",
    category: "Generative AI Deployment",
    url: "https://mcaetchatbot-2.onrender.com",
    secondaryUrl: "https://mcaet.vercel.app",
    badge: "Live Deployed College Bot",
    description: "Custom Generative AI chatbot engineered for Mahamaya College of Agricultural Engineering and Technology (MCAET). Deployed live to resolve student queries, admissions information, and campus guidance.",
    highlights: [
      "Live deployment on Render & integrated into official college portal (mcaet.vercel.app)",
      "Automated natural language query answering for college students & prospective applicants",
      "Contextual prompt engineering and fast API response handling"
    ],
    tech: ["Generative AI", "LLMs", "Node.js", "Render", "Vercel"]
  },
  {
    id: "procurehub",
    title: "ProcureHub - B2B Procurement SaaS",
    category: "Enterprise Web Application",
    url: "https://procurehub.vercel.app",
    description: "Procurement & supply chain management SaaS platform streamlining requisition workflows, vendor management, purchase orders, and inventory tracking.",
    highlights: [
      "Interactive procurement workflow status tracking",
      "Vendor catalog & requisition management system",
      "Responsive web UI built for enterprise scalability"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store & Helpcenter",
    category: "Full-Stack Web App",
    url: "https://ecommerce-store-ivory-sigma.vercel.app/",
    description: "Comprehensive online storefront featuring product catalog navigation, cart management, checkout flows, and integrated customer helpcenter chatbot.",
    highlights: [
      "Modern product catalog with category filtering",
      "Integrated Helpcenter chatbot component",
      "Responsive cart state management and checkout workflow"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Chatbot UI", "Vercel"]
  }
];

export default function Projects() {
  const [activePreviewUrl, setActivePreviewUrl] = useState<string | null>(null);
  const [activePreviewTitle, setActivePreviewTitle] = useState<string>("");

  const openPreviewModal = (url: string, title: string) => {
    setActivePreviewUrl(url);
    setActivePreviewTitle(title);
  };

  const closePreviewModal = () => {
    setActivePreviewUrl(null);
    setActivePreviewTitle("");
  };

  return (
    <section id="projects" className="py-24 relative bg-[#0a0e17] border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block font-semibold">
            03 / Featured Projects & Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="gradient-text-codehelp">Projects</span>
          </h2>
          <p className="text-slate-400 text-base">
            Deployed web platforms, hackathon finalists, and Generative AI systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="codehelp-card p-7 flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block font-semibold">
                    {project.category}
                  </span>

                  {project.badge ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-medium">
                      <Award className="w-3.5 h-3.5 text-blue-400" />
                      {project.badge}
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">Live App</span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  {project.description}
                </p>

                <div className="space-y-2 pt-1">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-blue-400 font-bold mt-0.5">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1e293b] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-[#0a0e17] text-slate-300 border border-[#1e293b]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-500/20"
                  >
                    <span>Visit Live App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => openPreviewModal(project.url, project.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-300 bg-[#0a0e17] border border-[#1e293b] hover:border-blue-500/40 hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>

                  {project.secondaryUrl && (
                    <a
                      href={project.secondaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2.5 rounded-lg text-xs font-semibold text-purple-400 bg-purple-950/30 border border-purple-800/50 hover:border-purple-500 transition-colors"
                      title="College Portal"
                    >
                      <span>Portal</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Preview Modal */}
      {activePreviewUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e17]/90 backdrop-blur-md">
          <div className="relative w-full max-w-5xl h-[85vh] bg-[#131c2e] border border-[#1e293b] rounded-xl shadow-2xl flex flex-col overflow-hidden">
            
            <div className="px-6 py-4 bg-[#0a0e17] border-b border-[#1e293b] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-white truncate max-w-md">
                  {activePreviewTitle}
                </span>
                <span className="text-xs font-mono text-blue-400 hidden sm:inline-block">
                  ({activePreviewUrl})
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activePreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center gap-1"
                >
                  <span>Open Tab</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <button
                  onClick={closePreviewModal}
                  className="p-1.5 rounded-lg bg-[#1e293b] text-slate-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full bg-white relative">
              <iframe
                src={activePreviewUrl}
                className="w-full h-full border-0"
                title={activePreviewTitle}
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
