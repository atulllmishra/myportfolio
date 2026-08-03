"use client";

import { useState } from "react";
import { ArrowUpRight, Eye, X, Award, Quote, Copy, Check, ExternalLink } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "ai" | "agritech" | "saas" | "ecommerce";
  categoryLabel: string;
  url: string;
  secondaryUrl?: string;
  description: string;
  highlights: string[];
  tech: string[];
  badge?: string;
  bibtex: string;
}

const projectsList: ProjectItem[] = [
  {
    id: "smart-agri",
    title: "Smart Agri - Precision Farming & Price Prediction Platform",
    category: "agritech",
    categoryLabel: "Agritech / Hackathon Finalist",
    url: "https://smart-agri.vercel.app",
    badge: "IIT Guwahati ImpactHack '25 Finalist",
    description: "Named Finalist at IIT Guwahati ImpactHack Hackathon 2025. An intelligent precision farming decision support platform empowering farmers with real-time city temperature forecasting and live crop market price predictions.",
    highlights: [
      "Finalist project at IIT Guwahati ImpactHack Hackathon 2025",
      "Real-time city temperature & weather condition forecasting for farmers",
      "Predictive analytics engine for live crop market prices & yield insights",
      "Responsive agritech resource management dashboard"
    ],
    tech: ["React", "JavaScript", "HTML5/CSS3", "Agritech AI", "Vercel"],
    bibtex: `@article{mishra2025smartagri,
  title={Smart Agri: Precision Agritech & AI Market Price Forecasting},
  author={Mishra, Atul Kumar and Team},
  journal={IIT Guwahati ImpactHack 2025 Finalist Proceedings},
  year={2025},
  publisher={Vercel Deployment},
  url={https://smart-agri.vercel.app}
}`
  },
  {
    id: "mcaet-chatbot",
    title: "MCAET College Generative AI Chatbot System",
    category: "ai",
    categoryLabel: "Generative AI System",
    url: "https://mcaetchatbot-2.onrender.com",
    secondaryUrl: "https://mcaet.vercel.app",
    badge: "Live Deployed College Bot",
    description: "Custom Generative AI chatbot engineered for Mahamaya College of Agricultural Engineering and Technology (MCAET). Deployed live on Render and integrated into official portal mcaet.vercel.app for student queries.",
    highlights: [
      "Live deployment on Render & integrated into official college portal (mcaet.vercel.app)",
      "Automated natural language query answering for college students & prospective applicants",
      "Contextual prompt engineering and fast REST API response handling"
    ],
    tech: ["Generative AI", "LLMs", "Node.js", "Render", "Vercel"],
    bibtex: `@software{mishra2024mcaetchatbot,
  title={MCAET College Conversational Generative AI Chatbot System},
  author={Mishra, Atul Kumar},
  year={2024},
  publisher={Render & Vercel Production},
  url={https://mcaetchatbot-2.onrender.com}
}`
  },
  {
    id: "procurehub",
    title: "ProcureHub - B2B Supply Chain & Procurement SaaS",
    category: "saas",
    categoryLabel: "Enterprise Web App",
    url: "https://procurehub.vercel.app",
    badge: "B2B SaaS Platform",
    description: "Procurement & supply chain management SaaS platform streamlining requisition workflows, vendor catalog management, purchase orders, and inventory tracking.",
    highlights: [
      "Interactive procurement workflow status tracking",
      "Vendor catalog & requisition management system",
      "Responsive web UI built for enterprise scalability"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    bibtex: `@software{mishra2024procurehub,
  title={ProcureHub: B2B Enterprise Supply Chain & Requisition SaaS},
  author={Mishra, Atul Kumar},
  year={2024},
  url={https://procurehub.vercel.app}
}`
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store & Helpcenter AI Integration",
    category: "ecommerce",
    categoryLabel: "Full-Stack Web App",
    url: "https://ecommerce-store-ivory-sigma.vercel.app/",
    badge: "Full-Stack E-Commerce",
    description: "Comprehensive online storefront featuring product catalog navigation, cart management, checkout flows, and integrated customer helpcenter chatbot.",
    highlights: [
      "Modern product catalog with category filtering",
      "Integrated Helpcenter chatbot component",
      "Responsive cart state management and checkout workflow"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Chatbot UI", "Vercel"],
    bibtex: `@software{mishra2024ecommerce,
  title={E-Commerce Storefront with Conversational AI Helpcenter},
  author={Mishra, Atul Kumar},
  year={2024},
  url={https://ecommerce-store-ivory-sigma.vercel.app/}
}`
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activePreviewUrl, setActivePreviewUrl] = useState<string | null>(null);
  const [activePreviewTitle, setActivePreviewTitle] = useState<string>("");
  const [citeProject, setCiteProject] = useState<ProjectItem | null>(null);
  const [copiedCite, setCopiedCite] = useState(false);

  const filteredProjects = projectsList.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  const openPreviewModal = (url: string, title: string) => {
    setActivePreviewUrl(url);
    setActivePreviewTitle(title);
  };

  const closePreviewModal = () => {
    setActivePreviewUrl(null);
    setActivePreviewTitle("");
  };

  const copyBibTeX = (bibtexText: string) => {
    navigator.clipboard.writeText(bibtexText);
    setCopiedCite(true);
    setTimeout(() => setCopiedCite(false), 2000);
  };

  return (
    <section id="projects" className="py-24 relative bg-[#0b0f19] border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block font-semibold">
            Publications & Software Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="gradient-text-academic">Projects & Works</span>
          </h2>
          <p className="text-slate-400 text-base">
            Deployed web platforms, hackathon award-winners, and Generative AI systems.
          </p>
        </div>

        {/* Hugo Blox Category Filter Tabs */}
        <div className="flex mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-xl bg-[#131c2e] border border-[#1e293b] text-xs font-semibold">
            {[
              { id: "all", label: "All Works" },
              { id: "agritech", label: "Agritech (ImpactHack)" },
              { id: "ai", label: "Generative AI" },
              { id: "saas", label: "Enterprise SaaS" },
              { id: "ecommerce", label: "E-Commerce" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="academic-card p-7 flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block font-semibold">
                    {project.categoryLabel}
                  </span>

                  {project.badge ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-medium">
                      <Award className="w-3.5 h-3.5 text-blue-400" />
                      {project.badge}
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">Live Production</span>
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
                      className="px-2 py-0.5 rounded text-xs font-mono bg-[#0b0f19] text-slate-300 border border-[#1e293b]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Academic Action Buttons Bar */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {/* Visit Live App */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-500/20"
                  >
                    <span>Visit App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {/* Live Preview */}
                  <button
                    onClick={() => openPreviewModal(project.url, project.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-300 bg-[#0b0f19] border border-[#1e293b] hover:border-blue-500/40 hover:text-white transition-colors"
                    title="Live Preview Modal"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>

                  {/* Hugo Blox Academic Citation / Cite Button */}
                  <button
                    onClick={() => setCiteProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-purple-400 bg-purple-950/20 border border-purple-800/40 hover:border-purple-500 transition-colors font-mono"
                    title="Get BibTeX Citation"
                  >
                    <Quote className="w-3.5 h-3.5" />
                    <span>Cite</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* BibTeX Academic Citation Modal */}
      {citeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b0f19]/90 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#131c2e] border border-[#1e293b] rounded-2xl p-6 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-[#1e293b] pb-3">
              <div className="flex items-center gap-2">
                <Quote className="w-5 h-5 text-purple-400" />
                <h3 className="text-base font-bold text-white">BibTeX Citation</h3>
              </div>
              <button
                onClick={() => setCiteProject(null)}
                className="p-1 rounded-lg bg-[#0b0f19] text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Copy LaTeX / BibTeX citation format for <strong className="text-white">{citeProject.title}</strong>:
            </p>

            <div className="relative bg-[#0b0f19] border border-[#1e293b] rounded-xl p-4 font-mono text-xs text-blue-300 overflow-x-auto">
              <pre className="whitespace-pre-wrap">{citeProject.bibtex}</pre>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-mono text-slate-500">Hugo Blox Academic BibTeX Format</span>
              <button
                onClick={() => copyBibTeX(citeProject.bibtex)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-600 text-white font-bold text-xs hover:bg-purple-500 transition-colors shadow-md shadow-purple-500/20"
              >
                {copiedCite ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCite ? "Copied BibTeX!" : "Copy BibTeX"}</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Live Preview Modal */}
      {activePreviewUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b0f19]/90 backdrop-blur-md">
          <div className="relative w-full max-w-5xl h-[85vh] bg-[#131c2e] border border-[#1e293b] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            
            <div className="px-6 py-4 bg-[#0b0f19] border-b border-[#1e293b] flex items-center justify-between">
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
