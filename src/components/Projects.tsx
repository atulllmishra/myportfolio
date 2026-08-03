"use client";

import { useState } from "react";
import { ArrowUpRight, Eye, X, Award, Quote, Copy, Check, Info, ShieldCheck, Cpu, BarChart3, Layers, FileCheck } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "agritech" | "ai" | "saas" | "ecommerce";
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
    id: "procurehub",
    title: "ProcureHub - B2B Transparent IT Procurement & Bid Management SaaS",
    category: "saas",
    categoryLabel: "Enterprise SaaS Platform",
    url: "https://procurehub.vercel.app",
    badge: "B2B SaaS • Live Platform",
    description: "A transparent and fair Bid Management SaaS platform for IT maintenance contracts in India. Eliminates corruption and middleman bribery through open bidding, verified contractor vetting, smart contracts, and real-time analytics.",
    highlights: [
      "Bribeless & merit-based procurement bidding system for IT maintenance",
      "Equal opportunity algorithm enabling small contractors to compete with enterprises",
      "Blockchain-backed smart contracts for automated agreements & audit trails",
      "Real-time analytics dashboard tracking bid status, contractor ratings, & projects"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Smart Contracts", "Vercel"],
    bibtex: `@software{mishra2024procurehub,
  title={ProcureHub: B2B Transparent Enterprise Procurement & Bid Management SaaS},
  author={Mishra, Atul Kumar},
  year={2024},
  publisher={ProcureHub Production},
  url={https://procurehub.vercel.app}
}`
  },
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
  const [showProcureHubDetails, setShowProcureHubDetails] = useState(false);

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
    <section id="projects" className="py-20 relative bg-[#0b0f17] border-t border-[#1e2638]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
            Projects
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Featured Works
          </h2>
          <p className="text-slate-400 text-sm">
            Web platforms, hackathon projects, and Generative AI systems.
          </p>
        </div>

        {/* Simple Tabs */}
        <div className="flex mb-8 overflow-x-auto pb-1">
          <div className="inline-flex p-1 rounded-lg bg-[#121824] border border-[#1e2638] text-xs font-medium">
            {[
              { id: "all", label: "All Works" },
              { id: "saas", label: "SaaS & B2B" },
              { id: "agritech", label: "Agritech" },
              { id: "ai", label: "Generative AI" },
              { id: "ecommerce", label: "E-Commerce" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded transition-all ${
                    isActive
                      ? "bg-[#1e2638] text-white font-semibold"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="academic-card p-6 flex flex-col justify-between space-y-5 relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                    {project.categoryLabel}
                  </span>

                  {project.badge && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-300 text-[11px] font-mono">
                      <Award className="w-3 h-3 text-slate-400" />
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {project.description}
                </p>

                <div className="space-y-1.5 pt-1">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#1e2638] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0b0f17] text-slate-400 border border-[#1e2638]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* ProcureHub Extra Info Button */}
                {project.id === "procurehub" && (
                  <button
                    onClick={() => setShowProcureHubDetails(true)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-[#0b0f17] border border-[#1e2638] text-xs font-mono text-slate-200 hover:border-slate-500 hover:text-white transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                    <span>View System Architecture & Features</span>
                  </button>
                )}

                {/* Simple Action Buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded font-medium text-xs text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                  >
                    <span>Visit App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => openPreviewModal(project.url, project.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded text-xs font-medium text-slate-300 bg-[#0b0f17] border border-[#1e2638] hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    <span>Preview</span>
                  </button>

                  <button
                    onClick={() => setCiteProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded text-xs font-medium text-slate-300 bg-[#0b0f17] border border-[#1e2638] hover:text-white transition-colors font-mono"
                  >
                    <Quote className="w-3.5 h-3.5 text-slate-400" />
                    <span>Cite</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ProcureHub System Architecture & Visual Data Modal */}
      {showProcureHubDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b0f17]/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#121824] border border-[#1e2638] rounded-xl p-6 sm:p-8 shadow-2xl space-y-6 overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#1e2638] pb-4">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase font-semibold block">
                  System Architecture & Platform Insights
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  ProcureHub B2B Platform
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-300">
                    procurehub.vercel.app
                  </span>
                </h3>
              </div>
              <button
                onClick={() => setShowProcureHubDetails(false)}
                className="p-1.5 rounded bg-[#0b0f17] text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Platform Overview */}
            <div className="space-y-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
              <p>
                <strong className="text-white">ProcureHub</strong> is a transparent, fair, and bribeless bid management platform for IT maintenance contracts in India. It eliminates corruption and middleman fees, enabling small contractors to compete equally with large enterprises based on technical merit.
              </p>
            </div>

            {/* 6 Key Modules Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                6 Key Platform Architecture Modules
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                
                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold text-xs">
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                    <span>Open Transparency</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    All contract bids and deal values are tracked openly to prevent hidden markups.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold text-xs">
                    <Layers className="w-4 h-4 text-slate-400" />
                    <span>Equal Opportunity</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Small businesses get equal bidding rights without enterprise bias or favoritism.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold text-xs">
                    <FileCheck className="w-4 h-4 text-slate-400" />
                    <span>Bribeless Model</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Built to eradicate procurement corruption and reward technical capability.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold text-xs">
                    <Cpu className="w-4 h-4 text-slate-400" />
                    <span>Smart Contracts</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Automated agreements with tamper-proof blockchain execution & compliance audit trails.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold text-xs">
                    <BarChart3 className="w-4 h-4 text-slate-400" />
                    <span>Analytics Dashboard</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Real-time visual insights into active bids, projects, and contractor metrics.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold text-xs">
                    <Award className="w-4 h-4 text-slate-400" />
                    <span>Verified Contractors</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Automated vetting protocol to verify contractor credentials and performance.
                  </p>
                </div>

              </div>
            </div>

            {/* 3-Step Bidding Workflow Diagram */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                3-Step Procurement Workflow
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg text-center space-y-1">
                  <div className="w-6 h-6 rounded-full bg-[#121824] border border-[#1e2638] text-xs font-mono text-white flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <h5 className="text-xs font-bold text-white">Post Requirement</h5>
                  <p className="text-[11px] text-slate-400">Enterprises create open IT requests with transparent terms.</p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg text-center space-y-1">
                  <div className="w-6 h-6 rounded-full bg-[#121824] border border-[#1e2638] text-xs font-mono text-white flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <h5 className="text-xs font-bold text-white">Contractors Bid</h5>
                  <p className="text-[11px] text-slate-400">Verified contractors place open bids without hidden fees.</p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg text-center space-y-1">
                  <div className="w-6 h-6 rounded-full bg-[#121824] border border-[#1e2638] text-xs font-mono text-white flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <h5 className="text-xs font-bold text-white">Fair Selection</h5>
                  <p className="text-[11px] text-slate-400">Smart algorithms select the best deal based on merit & pricing.</p>
                </div>
              </div>
            </div>

            {/* Stakeholder Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-2">
                <h5 className="text-xs font-bold text-white font-mono">🏢 Enterprise Benefits</h5>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  <li>• Optimized cost efficiency through competitive bidding</li>
                  <li>• Risk mitigation via contractor verification protocols</li>
                  <li>• Blockchain-backed audit trails for compliance</li>
                  <li>• Automated vendor selection saves time & resources</li>
                </ul>
              </div>

              <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-2">
                <h5 className="text-xs font-bold text-white font-mono">👷 Contractor Benefits</h5>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  <li>• Level playing field regardless of company size</li>
                  <li>• Growth based on technical expertise & rating</li>
                  <li>• Access to national IT opportunities from anywhere</li>
                  <li>• No bribery required — compete on merit alone</li>
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between border-t border-[#1e2638] pt-4">
              <span className="text-[11px] font-mono text-slate-500">Live URL: procurehub.vercel.app</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://procurehub.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition-colors flex items-center gap-1.5"
                >
                  <span>Open Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setShowProcureHubDetails(false)}
                  className="px-3 py-2 rounded bg-[#0b0f17] text-slate-300 hover:text-white text-xs"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* BibTeX Citation Modal */}
      {citeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b0f17]/90 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#121824] border border-[#1e2638] rounded-xl p-6 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-[#1e2638] pb-3">
              <div className="flex items-center gap-2">
                <Quote className="w-4 h-4 text-slate-300" />
                <h3 className="text-sm font-bold text-white">BibTeX Citation</h3>
              </div>
              <button
                onClick={() => setCiteProject(null)}
                className="p-1 rounded bg-[#0b0f17] text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300">
              BibTeX format for <strong className="text-white">{citeProject.title}</strong>:
            </p>

            <div className="relative bg-[#0b0f17] border border-[#1e2638] rounded-lg p-3.5 font-mono text-xs text-slate-300 overflow-x-auto">
              <pre className="whitespace-pre-wrap">{citeProject.bibtex}</pre>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] font-mono text-slate-500">BibTeX Format</span>
              <button
                onClick={() => copyBibTeX(citeProject.bibtex)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition-colors"
              >
                {copiedCite ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCite ? "Copied!" : "Copy BibTeX"}</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Live Preview Modal */}
      {activePreviewUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b0f17]/90 backdrop-blur-md">
          <div className="relative w-full max-w-5xl h-[85vh] bg-[#121824] border border-[#1e2638] rounded-xl shadow-2xl flex flex-col overflow-hidden">
            
            <div className="px-5 py-3 bg-[#0b0f17] border-b border-[#1e2638] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-white truncate max-w-md">
                  {activePreviewTitle}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activePreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded bg-blue-600 text-white text-xs font-medium flex items-center gap-1"
                >
                  <span>Open Tab</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <button
                  onClick={closePreviewModal}
                  className="p-1 rounded bg-[#1e2638] text-slate-300 hover:text-white"
                >
                  <X className="w-4 h-4" />
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
