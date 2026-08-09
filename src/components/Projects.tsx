"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Eye,
  X,
  Award,
  Quote,
  Copy,
  Check,
  Info,
  ShieldCheck,
  Cpu,
  BarChart3,
  Layers,
  FileCheck,
  Play,
  Sparkles,
  Languages,
  GraduationCap,
  Sun,
  CloudRain,
  TrendingUp,
  RotateCw,
  ExternalLink,
  Video,
  BookOpen,
  Thermometer,
  Sprout,
  Search,
  Sliders,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

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
  timeline: string;
  bibtex: string;
}

const projectsList: ProjectItem[] = [
  {
    id: "heybuddy",
    title: "heyBuddy - AI Multilingual EdTech Video & Lecture Platform",
    category: "ai",
    categoryLabel: "AI EdTech Platform (Ongoing)",
    url: "https://heybuddyai.vercel.app",
    badge: "Ongoing Work • AI EdTech",
    timeline: "August 2026 — Present (Ongoing)",
    description: "An online edtech platform that automatically generates AI video & voice solutions for user questions in multiple languages and allows students to dynamically transform lecture complexity into custom difficulty levels (Beginner to Advanced).",
    highlights: [
      "Generates AI video & voice solutions to user questions in 10+ languages",
      "Dynamic lecture difficulty transformation (Beginner, Standard, Research/Advanced)",
      "Adaptive neural text-to-speech (TTS) with AI avatar lip-sync engine",
      "Real-time concept quiz generation & student comprehension tracking"
    ],
    tech: ["Generative AI", "AI Video Synthesis", "Next.js", "TypeScript", "Python FastAPI", "LLMs", "Tailwind CSS"],
    bibtex: `@software{mishra2026heybuddy,
  title={heyBuddy: AI Multilingual Video Learning & Lecture Transformation Platform},
  author={Mishra, Atul Kumar},
  year={2026},
  note={Ongoing Work (August 2026 -- Present)},
  url={https://heybuddyai.vercel.app}
}`
  },
  {
    id: "procurehub",
    title: "ProcureHub - B2B Transparent IT Procurement & Bid Management SaaS",
    category: "saas",
    categoryLabel: "Enterprise SaaS Platform",
    url: "https://procurehub.vercel.app",
    badge: "B2B SaaS • Oct 2024 – Sep 2025",
    timeline: "Oct 1, 2024 — Sept 24, 2025",
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
  year={2025},
  note={Developed Oct 1, 2024 -- Sept 24, 2025},
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
    badge: "IIT Guwahati ImpactHack '25 • March 2025",
    timeline: "March 2025",
    description: "Named Finalist at IIT Guwahati ImpactHack Hackathon 2025 in March 2025. An intelligent precision farming decision support platform empowering farmers with real-time city temperature forecasting, weather risk alerts, and live crop market price predictions.",
    highlights: [
      "Finalist project at IIT Guwahati ImpactHack Hackathon 2025 (March 2025)",
      "Real-time city temperature & weather forecasting API integration",
      "Predictive analytics engine for live crop market prices & yield insights",
      "Soil moisture & irrigation advisory management dashboard"
    ],
    tech: ["React", "JavaScript", "HTML5/CSS3", "Agritech AI", "Vercel"],
    bibtex: `@article{mishra2025smartagri,
  title={Smart Agri: Precision Agritech & AI Market Price Forecasting},
  author={Mishra, Atul Kumar and Team},
  journal={IIT Guwahati ImpactHack 2025 Finalist Proceedings},
  year={2025},
  month={March},
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
    badge: "Live Deployed • July 2026 – Present",
    timeline: "July 2026 — Present",
    description: "Custom Generative AI chatbot engineered for Mahamaya College of Agricultural Engineering and Technology (MCAET). Deployed live on Render and integrated into official portal mcaet.vercel.app for student queries.",
    highlights: [
      "Live deployment on Render & integrated into official college portal (mcaet.vercel.app)",
      "Automated natural language query answering for college students & prospective applicants",
      "Contextual prompt engineering and fast REST API response handling"
    ],
    tech: ["Generative AI", "LLMs", "Node.js", "Render", "Vercel"],
    bibtex: `@software{mishra2026mcaetchatbot,
  title={MCAET College Conversational Generative AI Chatbot System},
  author={Mishra, Atul Kumar},
  year={2026},
  note={July 2026 -- Present},
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
    badge: "Full-Stack Store • Aug 2026 – Present",
    timeline: "August 2026 — Present",
    description: "Comprehensive online storefront featuring product catalog navigation, cart management, checkout flows, and integrated customer helpcenter chatbot.",
    highlights: [
      "Modern product catalog with category filtering",
      "Integrated Helpcenter chatbot component",
      "Responsive cart state management and checkout workflow"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Chatbot UI", "Vercel"],
    bibtex: `@software{mishra2026ecommerce,
  title={E-Commerce Storefront with Conversational AI Helpcenter},
  author={Mishra, Atul Kumar},
  year={2026},
  note={August 2026 -- Present},
  url={https://ecommerce-store-ivory-sigma.vercel.app/}
}`
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activePreviewProject, setActivePreviewProject] = useState<ProjectItem | null>(null);
  const [previewViewMode, setPreviewViewMode] = useState<"interactive" | "iframe">("interactive");
  const [citeProject, setCiteProject] = useState<ProjectItem | null>(null);
  const [copiedCite, setCopiedCite] = useState(false);

  // Architecture Details Modal States
  const [showProcureHubDetails, setShowProcureHubDetails] = useState(false);
  const [showHeyBuddyDetails, setShowHeyBuddyDetails] = useState(false);
  const [showSmartAgriDetails, setShowSmartAgriDetails] = useState(false);

  // Smart Agri Preview Interactive Demo States
  const [agriCity, setAgriCity] = useState("Lucknow");
  const [agriCrop, setAgriCrop] = useState("Wheat");

  // heyBuddy Interactive Demo States
  const [hbLanguage, setHbLanguage] = useState("English");
  const [hbDifficulty, setHbDifficulty] = useState<"beginner" | "standard" | "advanced">("standard");
  const [hbTopic, setHbTopic] = useState("Quantum Computing & Qubits");
  const [hbIsPlaying, setHbIsPlaying] = useState(false);

  const filteredProjects = projectsList.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  const openPreviewModal = (project: ProjectItem) => {
    setActivePreviewProject(project);
    setPreviewViewMode("interactive");
  };

  const closePreviewModal = () => {
    setActivePreviewProject(null);
  };

  const copyBibTeX = (bibtexText: string) => {
    navigator.clipboard.writeText(bibtexText);
    setCopiedCite(true);
    setTimeout(() => setCopiedCite(false), 2000);
  };

  // Mock Smart Agri City Weather Data
  const cityWeatherData: Record<string, { temp: string; humidity: string; rainProb: string; status: string; advice: string }> = {
    Lucknow: { temp: "31°C", humidity: "62%", rainProb: "15%", status: "Optimal Growing Conditions", advice: "Ideal for scheduled field irrigation during early morning hours." },
    Ayodhya: { temp: "32°C", humidity: "58%", rainProb: "10%", status: "Warm & Sunny", advice: "Favorable conditions for mustard & paddy crop development." },
    Kanpur: { temp: "33°C", humidity: "54%", rainProb: "20%", status: "Moderate Moisture Level", advice: "Check soil moisture before applying nitrogen fertilizer." },
    Varanasi: { temp: "30°C", humidity: "65%", rainProb: "25%", status: "Humid & Breezy", advice: "Monitor vegetable crops for early pest risk due to humidity." },
    Guwahati: { temp: "28°C", humidity: "78%", rainProb: "60%", status: "Light Rainfall Expected", advice: "Postpone pesticide spraying until dry weather resumes." },
    Delhi: { temp: "34°C", humidity: "45%", rainProb: "5%", status: "Dry & Warm", advice: "Ensure adequate drip irrigation for root crops." }
  };

  // Mock Smart Agri Crop Price Forecast Data
  const cropPriceData: Record<string, { current: string; forecast: string; trend: string; change: string; recommendation: string }> = {
    Wheat: { current: "₹2,450 / Quintal", forecast: "₹2,580 / Quintal", trend: "Upward (+5.3%)", change: "+₹130", recommendation: "Hold stock for 7-10 days to maximize mandi sale margin." },
    "Paddy / Rice": { current: "₹2,180 / Quintal", forecast: "₹2,240 / Quintal", trend: "Steady (+2.7%)", change: "+₹60", recommendation: "Optimal market liquidity. Favorable time for phased selling." },
    Mustard: { current: "₹5,600 / Quintal", forecast: "₹5,820 / Quintal", trend: "High Demand (+3.9%)", change: "+₹220", recommendation: "Strong demand from processing mills. Great selling window." },
    Potato: { current: "₹1,350 / Quintal", forecast: "₹1,290 / Quintal", trend: "Slight Dip (-4.4%)", change: "-₹60", recommendation: "Sell current yield to avoid cold storage costs." }
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
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 font-mono text-xs">
                    <span className="text-slate-400 uppercase font-semibold">
                      {project.categoryLabel}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-300 font-medium">
                      {project.timeline}
                    </span>
                  </div>

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

                {/* System Architecture Buttons */}
                {project.id === "procurehub" && (
                  <button
                    onClick={() => setShowProcureHubDetails(true)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-[#0b0f17] border border-[#1e2638] text-xs font-mono text-slate-200 hover:border-slate-500 hover:text-white transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                    <span>View System Architecture & Features</span>
                  </button>
                )}

                {project.id === "heybuddy" && (
                  <button
                    onClick={() => setShowHeyBuddyDetails(true)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-[#0b0f17] border border-[#1e2638] text-xs font-mono text-slate-200 hover:border-slate-500 hover:text-white transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>View System Architecture & Features</span>
                  </button>
                )}

                {project.id === "smart-agri" && (
                  <button
                    onClick={() => setShowSmartAgriDetails(true)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-[#0b0f17] border border-[#1e2638] text-xs font-mono text-slate-200 hover:border-slate-500 hover:text-white transition-colors"
                  >
                    <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                    <span>View System Architecture & Features</span>
                  </button>
                )}

                {/* Simple Action Buttons */}
                <div className="flex items-center gap-2 pt-1">
                  {project.url !== "#" ? (
                    <>
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
                        onClick={() => openPreviewModal(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded text-xs font-medium text-slate-300 bg-[#0b0f17] border border-[#1e2638] hover:text-white transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-400" />
                        <span>Preview</span>
                      </button>
                    </>
                  ) : (
                    <div className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded font-medium text-xs text-slate-300 bg-[#0b0f17] border border-[#1e2638] font-mono">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <span>In Active Development</span>
                    </div>
                  )}

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

      {/* ProcureHub System Architecture Modal */}
      {showProcureHubDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b0f17]/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#121824] border border-[#1e2638] rounded-xl p-6 sm:p-8 shadow-2xl space-y-6 overflow-y-auto">
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

            <div className="space-y-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
              <p>
                <strong className="text-white">ProcureHub</strong> is a transparent, fair, and bribeless bid management platform for IT maintenance contracts in India. It eliminates corruption and middleman fees, enabling small contractors to compete equally with large enterprises based on technical merit.
              </p>
            </div>

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

      {/* heyBuddy System Architecture & Features Modal */}
      {showHeyBuddyDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b0f17]/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#121824] border border-[#1e2638] rounded-xl p-6 sm:p-8 shadow-2xl space-y-6 overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-[#1e2638] pb-4">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase font-semibold block flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Ongoing AI Project Specifications
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  heyBuddy — AI Multilingual Video Learning & Lecture Platform
                </h3>
              </div>
              <button
                onClick={() => setShowHeyBuddyDetails(false)}
                className="p-1.5 rounded bg-[#0b0f17] text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
              <p>
                <strong className="text-white">heyBuddy</strong> is an ongoing AI EdTech video platform designed by Atul Kumar Mishra (August 2026 — Present). It automatically synthesizes interactive video explanations for student queries in multiple languages and allows students to dynamically alter lecture video complexity tailored to their comprehension level.
              </p>
            </div>

            {/* 6 Key Architecture Modules */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                6 Core Platform Architecture Modules
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                
                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs">
                    <Video className="w-4 h-4 text-purple-400" />
                    <span>Multilingual Video Engine</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Generates AI video and voice solutions for queries across 10+ Indian and global languages.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-300 font-semibold text-xs">
                    <Sliders className="w-4 h-4 text-blue-400" />
                    <span>Difficulty Adapter</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Dynamically alters lecture videos between Beginner, Standard, and Research/Advanced tiers.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs">
                    <Languages className="w-4 h-4 text-emerald-400" />
                    <span>Neural Audio & Lip-Sync</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Integrates neural Text-to-Speech (TTS) with deep learning lip-syncing for virtual tutors.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>Automated Quizzes</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Extracts key concepts from lecture videos to generate automated quizzes & interactive flashcards.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-rose-300 font-semibold text-xs">
                    <BarChart3 className="w-4 h-4 text-rose-400" />
                    <span>Adaptive Analytics</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Tracks student watch time, quiz accuracy, and concept mastery curves in real time.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span>EdTech Cloud Pipeline</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Fast video streaming CDN pipeline powered by Next.js, Python FastAPI microservices, and LLMs.
                  </p>
                </div>

              </div>
            </div>

            {/* 3-Step Learning Workflow */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                3-Step AI Video Learning Workflow
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg text-center space-y-1">
                  <div className="w-6 h-6 rounded-full bg-purple-950/60 border border-purple-500/40 text-xs font-mono text-purple-300 flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <h5 className="text-xs font-bold text-white">Ask or Upload</h5>
                  <p className="text-[11px] text-slate-400">Student types/speaks a question or uploads a lecture transcript.</p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg text-center space-y-1">
                  <div className="w-6 h-6 rounded-full bg-purple-950/60 border border-purple-500/40 text-xs font-mono text-purple-300 flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <h5 className="text-xs font-bold text-white">Select Language & Level</h5>
                  <p className="text-[11px] text-slate-400">Choose preferred target language and difficulty tier (Beginner/Advanced).</p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg text-center space-y-1">
                  <div className="w-6 h-6 rounded-full bg-purple-950/60 border border-purple-500/40 text-xs font-mono text-purple-300 flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <h5 className="text-xs font-bold text-white">Stream Video Solution</h5>
                  <p className="text-[11px] text-slate-400">AI generates interactive video solution with captions & quiz checks.</p>
                </div>
              </div>
            </div>

            {/* Stakeholder Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-2">
                <h5 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>Student Advantages</span>
                </h5>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  <li>• Learn complex STEM & Humanities topics in your native language</li>
                  <li>• Dynamic video difficulty tailoring eliminates confusion</li>
                  <li>• 24/7 instant video tutor availability without scheduling</li>
                  <li>• Interactive quiz checks reinforce concept retention</li>
                </ul>
              </div>

              <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-2">
                <h5 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Educator & EdTech Advantages</span>
                </h5>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  <li>• Automated lecture translation & difficulty adaptation</li>
                  <li>• Scales personalized video tutoring to thousands of students</li>
                  <li>• Detailed comprehension analytics & learning gap diagnostics</li>
                  <li>• Seamless video streaming integration into LMS platforms</li>
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between border-t border-[#1e2638] pt-4">
              <span className="text-[11px] font-mono text-slate-500">Status: Active Development (August 2026 — Present)</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setShowHeyBuddyDetails(false);
                    const hbProj = projectsList.find(p => p.id === "heybuddy");
                    if (hbProj) openPreviewModal(hbProj);
                  }}
                  className="px-4 py-2 rounded bg-purple-600 text-white font-medium text-xs hover:bg-purple-500 transition-colors flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Launch Interactive Studio Demo</span>
                </button>
                <button
                  onClick={() => setShowHeyBuddyDetails(false)}
                  className="px-3 py-2 rounded bg-[#0b0f17] text-slate-300 hover:text-white text-xs"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Smart Agri System Architecture & Features Modal */}
      {showSmartAgriDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b0f17]/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#121824] border border-[#1e2638] rounded-xl p-6 sm:p-8 shadow-2xl space-y-6 overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-[#1e2638] pb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase font-semibold block flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  IIT Guwahati ImpactHack 2025 Finalist Project
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  Smart Agri — Precision Farming & Price Prediction Platform
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-300">
                    smart-agri.vercel.app
                  </span>
                </h3>
              </div>
              <button
                onClick={() => setShowSmartAgriDetails(false)}
                className="p-1.5 rounded bg-[#0b0f17] text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
              <p>
                <strong className="text-white">Smart Agri</strong> was named Finalist at the prestigious <strong className="text-white">IIT Guwahati ImpactHack Hackathon 2025</strong> in March 2025. It provides a precision farming decision support platform for farmers, combining real-time city temperature forecasting, live weather risk alerts, and crop market price predictions.
              </p>
            </div>

            {/* 6 Core Agritech Modules */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                6 Key Agritech Architecture Modules
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                
                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs">
                    <Thermometer className="w-4 h-4 text-emerald-400" />
                    <span>Live City Weather Tracker</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Real-time city temperature tracking & 7-day micro-climate forecasting tailored for farming operations.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-300 font-semibold text-xs">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <span>AI Crop Market Forecast</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Predictive analytics engine forecasting mandi rates & optimal crop selling windows for maximum profit.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs">
                    <CloudRain className="w-4 h-4 text-cyan-400" />
                    <span>Soil & Irrigation Advisory</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Moisture monitoring algorithms calculating precision water schedules to conserve groundwater.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs">
                    <Sprout className="w-4 h-4 text-amber-400" />
                    <span>Crop Disease Diagnostics</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Contextual crop risk engine alerting farmers to pest threats & fungal disease conditions.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-rose-300 font-semibold text-xs">
                    <Award className="w-4 h-4 text-rose-400" />
                    <span>ImpactHack '25 Verified</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Engineered, demonstrated, and pitch-verified by IIT Guwahati hackathon panel.
                  </p>
                </div>

                <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>Low-Bandwidth Mobile UI</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Lightweight, high-contrast web dashboard optimized for rural 3G/4G connectivity.
                  </p>
                </div>

              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between border-t border-[#1e2638] pt-4">
              <span className="text-[11px] font-mono text-slate-500">Live URL: smart-agri.vercel.app</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://smart-agri.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-500 transition-colors flex items-center gap-1.5"
                >
                  <span>Open Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => {
                    setShowSmartAgriDetails(false);
                    const saProj = projectsList.find(p => p.id === "smart-agri");
                    if (saProj) openPreviewModal(saProj);
                  }}
                  className="px-3.5 py-2 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-200 hover:text-white text-xs flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                  <span>Launch Live Preview</span>
                </button>
                <button
                  onClick={() => setShowSmartAgriDetails(false)}
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

      {/* Enhanced Live Preview Modal */}
      {activePreviewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0b0f17]/90 backdrop-blur-md">
          <div className="relative w-full max-w-5xl h-[88vh] bg-[#121824] border border-[#1e2638] rounded-xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Window Frame Header */}
            <div className="px-4 py-3 bg-[#0b0f17] border-b border-[#1e2638] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="h-4 w-px bg-[#1e2638]" />
                <span className="text-xs font-semibold text-white truncate max-w-xs sm:max-w-md font-mono">
                  {activePreviewProject.title}
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <div className="inline-flex p-0.5 rounded bg-[#121824] border border-[#1e2638] text-[11px] font-mono">
                  <button
                    onClick={() => setPreviewViewMode("interactive")}
                    className={`px-3 py-1 rounded transition-colors ${
                      previewViewMode === "interactive"
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Interactive Showcase
                  </button>
                  {activePreviewProject.url !== "#" && (
                    <button
                      onClick={() => setPreviewViewMode("iframe")}
                      className={`px-3 py-1 rounded transition-colors ${
                        previewViewMode === "iframe"
                          ? "bg-blue-600 text-white font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Live Site Frame
                    </button>
                  )}
                </div>

                {activePreviewProject.url !== "#" && (
                  <a
                    href={activePreviewProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded bg-[#1e2638] hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors flex items-center gap-1"
                    title="Open in new tab"
                  >
                    <span>Open</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                <button
                  onClick={closePreviewModal}
                  className="p-1.5 rounded bg-[#1e2638] text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Preview Modal Content */}
            <div className="flex-1 w-full relative bg-[#0b0f17] overflow-y-auto p-4 sm:p-6 space-y-6">
              
              {/* VIEW MODE 1: INTERACTIVE SHOWCASE DEMO */}
              {previewViewMode === "interactive" && (
                <div className="space-y-6 max-w-4xl mx-auto">
                  
                  {/* SMART AGRI INTERACTIVE DEMO SHOWCASE */}
                  {activePreviewProject.id === "smart-agri" && (
                    <div className="space-y-6">
                      
                      {/* Header Badge */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-blue-950/60 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase">
                            <Award className="w-4 h-4 text-emerald-400" />
                            <span>IIT Guwahati ImpactHack 2025 Finalist</span>
                          </div>
                          <h3 className="text-lg font-bold text-white">
                            Smart Agri — Precision Farming & Price Prediction Platform
                          </h3>
                          <p className="text-xs text-slate-300">
                            Interactive demo simulator for city weather forecasting & AI crop price predictions.
                          </p>
                        </div>

                        <a
                          href="https://smart-agri.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors flex items-center gap-1.5 shrink-0"
                        >
                          <span>Visit smart-agri.vercel.app</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Interactive Section 1: Live City Temperature & Weather Tracker */}
                      <div className="bg-[#121824] border border-[#1e2638] rounded-xl p-5 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1e2638] pb-3">
                          <div className="flex items-center gap-2">
                            <Thermometer className="w-4 h-4 text-emerald-400" />
                            <h4 className="text-sm font-bold text-white font-mono">
                              1. City Weather & Temperature Tracker
                            </h4>
                          </div>
                          <span className="text-[11px] font-mono text-slate-400">Select city to view live data</span>
                        </div>

                        {/* City Selector Buttons */}
                        <div className="flex flex-wrap gap-2">
                          {Object.keys(cityWeatherData).map((cityName) => (
                            <button
                              key={cityName}
                              onClick={() => setAgriCity(cityName)}
                              className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                                agriCity === cityName
                                  ? "bg-emerald-600 text-white font-bold"
                                  : "bg-[#0b0f17] text-slate-300 border border-[#1e2638] hover:text-white"
                              }`}
                            >
                              {cityName}
                            </button>
                          ))}
                        </div>

                        {/* Weather Data Display Cards */}
                        {cityWeatherData[agriCity] && (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                            <div className="bg-[#0b0f17] border border-[#1e2638] p-3 rounded-lg text-center space-y-0.5">
                              <span className="text-[11px] text-slate-400 font-mono block">Temperature</span>
                              <span className="text-xl font-bold text-emerald-400">{cityWeatherData[agriCity].temp}</span>
                            </div>

                            <div className="bg-[#0b0f17] border border-[#1e2638] p-3 rounded-lg text-center space-y-0.5">
                              <span className="text-[11px] text-slate-400 font-mono block">Relative Humidity</span>
                              <span className="text-xl font-bold text-blue-400">{cityWeatherData[agriCity].humidity}</span>
                            </div>

                            <div className="bg-[#0b0f17] border border-[#1e2638] p-3 rounded-lg text-center space-y-0.5">
                              <span className="text-[11px] text-slate-400 font-mono block">Rain Probability</span>
                              <span className="text-xl font-bold text-cyan-400">{cityWeatherData[agriCity].rainProb}</span>
                            </div>

                            <div className="bg-[#0b0f17] border border-[#1e2638] p-3 rounded-lg text-center space-y-0.5">
                              <span className="text-[11px] text-slate-400 font-mono block">Status</span>
                              <span className="text-xs font-semibold text-amber-300 truncate block mt-1">
                                {cityWeatherData[agriCity].status}
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="bg-[#0b0f17] border border-[#1e2638] p-3 rounded-lg flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-white font-mono">Farmer Weather Advisory:</strong> {cityWeatherData[agriCity]?.advice}
                          </span>
                        </div>
                      </div>

                      {/* Interactive Section 2: Live Crop Market Price Predictor */}
                      <div className="bg-[#121824] border border-[#1e2638] rounded-xl p-5 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1e2638] pb-3">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-blue-400" />
                            <h4 className="text-sm font-bold text-white font-mono">
                              2. AI Crop Market Price Predictor
                            </h4>
                          </div>
                          <span className="text-[11px] font-mono text-slate-400">Select crop to predict price</span>
                        </div>

                        {/* Crop Selector Buttons */}
                        <div className="flex flex-wrap gap-2">
                          {Object.keys(cropPriceData).map((cropName) => (
                            <button
                              key={cropName}
                              onClick={() => setAgriCrop(cropName)}
                              className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                                agriCrop === cropName
                                  ? "bg-blue-600 text-white font-bold"
                                  : "bg-[#0b0f17] text-slate-300 border border-[#1e2638] hover:text-white"
                              }`}
                            >
                              {cropName}
                            </button>
                          ))}
                        </div>

                        {/* Price Forecast Display */}
                        {cropPriceData[agriCrop] && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                            <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1">
                              <span className="text-[11px] text-slate-400 font-mono block">Current Mandi Rate</span>
                              <span className="text-lg font-bold text-white">{cropPriceData[agriCrop].current}</span>
                            </div>

                            <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1">
                              <span className="text-[11px] text-slate-400 font-mono block">7-Day Forecast Rate</span>
                              <span className="text-lg font-bold text-emerald-400">{cropPriceData[agriCrop].forecast}</span>
                            </div>

                            <div className="bg-[#0b0f17] border border-[#1e2638] p-4 rounded-lg space-y-1">
                              <span className="text-[11px] text-slate-400 font-mono block">Predicted Trend</span>
                              <span className="text-sm font-bold text-cyan-300">{cropPriceData[agriCrop].trend}</span>
                            </div>
                          </div>
                        )}

                        <div className="bg-[#0b0f17] border border-[#1e2638] p-3.5 rounded-lg flex items-start gap-2 text-xs text-slate-300">
                          <Sprout className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-white font-mono">Market Selling Advice:</strong> {cropPriceData[agriCrop]?.recommendation}
                          </span>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* HEYBUDDY INTERACTIVE DEMO SHOWCASE */}
                  {activePreviewProject.id === "heybuddy" && (
                    <div className="space-y-6">
                      
                      {/* Header Badge */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/60 to-blue-950/60 border border-purple-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-semibold uppercase">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span>AI Multilingual EdTech Video Studio</span>
                          </div>
                          <h3 className="text-lg font-bold text-white">
                            heyBuddy — AI Video Learning & Lecture Transformation
                          </h3>
                          <p className="text-xs text-slate-300">
                            Interactive demo preview: Customize lecture difficulty & multilingual video synthesis.
                          </p>
                        </div>
                      </div>

                      {/* Interactive EdTech Video Studio Simulator */}
                      <div className="bg-[#121824] border border-[#1e2638] rounded-xl p-5 space-y-5">
                        
                        {/* Topic Selector */}
                        <div className="space-y-2">
                          <label className="text-xs font-mono text-slate-300 font-semibold block">
                            Select Concept Topic / Lecture Query:
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Quantum Computing & Qubits",
                              "Data Structures & C++ Trees",
                              "Photosynthesis & Plant Biology",
                              "Generative AI & LLM Transformers"
                            ].map((topic) => (
                              <button
                                key={topic}
                                onClick={() => setHbTopic(topic)}
                                className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                                  hbTopic === topic
                                    ? "bg-purple-600 text-white font-bold"
                                    : "bg-[#0b0f17] text-slate-300 border border-[#1e2638] hover:text-white"
                                }`}
                              >
                                {topic}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Controls Grid: Language & Difficulty */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          
                          {/* Language Switcher */}
                          <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                              <Languages className="w-3.5 h-3.5 text-purple-400" />
                              <span>Target Audio/Subtitles Language:</span>
                            </label>
                            <div className="flex flex-wrap gap-1.5">
                              {["English", "Hindi", "Bengali", "Tamil", "Telugu"].map((lang) => (
                                <button
                                  key={lang}
                                  onClick={() => setHbLanguage(lang)}
                                  className={`px-2.5 py-1 rounded text-xs font-mono ${
                                    hbLanguage === lang
                                      ? "bg-purple-950/80 border border-purple-500/50 text-white font-bold"
                                      : "bg-[#0b0f17] text-slate-400 border border-[#1e2638]"
                                  }`}
                                >
                                  {lang}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Difficulty Tier Switcher */}
                          <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                              <Sliders className="w-3.5 h-3.5 text-blue-400" />
                              <span>Dynamic Difficulty Level:</span>
                            </label>
                            <div className="flex gap-1.5">
                              {[
                                { id: "beginner", label: "Beginner" },
                                { id: "standard", label: "Standard" },
                                { id: "advanced", label: "Advanced" }
                              ].map((lvl) => (
                                <button
                                  key={lvl.id}
                                  onClick={() => setHbDifficulty(lvl.id as "beginner" | "standard" | "advanced")}
                                  className={`flex-1 py-1 rounded text-xs font-mono ${
                                    hbDifficulty === lvl.id
                                      ? "bg-blue-950/80 border border-blue-500/50 text-white font-bold"
                                      : "bg-[#0b0f17] text-slate-400 border border-[#1e2638]"
                                  }`}
                                >
                                  {lvl.label}
                                </button>
                              ))}
                            </div>
                          </div>

                        </div>

                        {/* Simulated Video Player Screen */}
                        <div className="bg-[#0b0f17] border border-[#1e2638] rounded-xl overflow-hidden relative">
                          <div className="p-4 border-b border-[#1e2638] flex items-center justify-between bg-[#0e1420]">
                            <div className="flex items-center gap-2">
                              <Video className="w-4 h-4 text-purple-400" />
                              <span className="text-xs font-bold text-white font-mono truncate max-w-md">
                                {hbTopic} [{hbLanguage} • {hbDifficulty.toUpperCase()} LEVEL]
                              </span>
                            </div>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/40">
                              AI Synthesis Active
                            </span>
                          </div>

                          {/* Simulated Canvas Stream */}
                          <div className="p-6 sm:p-8 space-y-4 text-center">
                            
                            <div className="w-16 h-16 rounded-full bg-purple-950/60 border border-purple-500/50 flex items-center justify-center mx-auto text-purple-300">
                              <Play
                                onClick={() => setHbIsPlaying(!hbIsPlaying)}
                                className={`w-8 h-8 cursor-pointer transition-transform hover:scale-110 ${hbIsPlaying ? "fill-purple-400" : ""}`}
                              />
                            </div>

                            <div className="space-y-1 max-w-lg mx-auto">
                              <p className="text-xs sm:text-sm text-white font-medium">
                                {hbDifficulty === "beginner" && `"[${hbLanguage}] Imagine ${hbTopic} like building simple everyday blocks step-by-step..."`}
                                {hbDifficulty === "standard" && `"[${hbLanguage}] ${hbTopic} operates on foundational principles, structured algorithms, and core formulas..."`}
                                {hbDifficulty === "advanced" && `"[${hbLanguage}] Rigorous mathematical formulation and deep optimization techniques for ${hbTopic}..."`}
                              </p>
                              <span className="text-[11px] text-slate-400 font-mono block">
                                Subtitles & Voiceover generated in {hbLanguage}
                              </span>
                            </div>

                            {/* Simulated Interactive Quiz Widget */}
                            <div className="mt-4 pt-4 border-t border-[#1e2638] max-w-md mx-auto text-left bg-[#121824] p-3.5 rounded-lg space-y-2">
                              <span className="text-[11px] font-mono text-purple-400 font-bold block flex items-center gap-1">
                                <BookOpen className="w-3.5 h-3.5" />
                                Instant Comprehension Quiz Check
                              </span>
                              <p className="text-xs text-slate-300">
                                Question: What is the primary advantage of selecting {hbDifficulty} level in heyBuddy?
                              </p>
                              <div className="space-y-1 pt-1">
                                <div className="text-[11px] p-2 rounded bg-[#0b0f17] border border-purple-500/40 text-purple-200">
                                  ✓ Tailors explanations directly to your current knowledge level & native language.
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                    </div>
                  )}

                  {/* OTHER PROJECTS SHOWCASE */}
                  {activePreviewProject.id !== "smart-agri" && activePreviewProject.id !== "heybuddy" && (
                    <div className="space-y-6">
                      <div className="p-6 rounded-xl bg-[#121824] border border-[#1e2638] space-y-4">
                        <div className="flex items-center justify-between border-b border-[#1e2638] pb-3">
                          <h3 className="text-lg font-bold text-white">{activePreviewProject.title}</h3>
                          <span className="text-xs font-mono text-blue-400">{activePreviewProject.categoryLabel}</span>
                        </div>

                        <p className="text-slate-300 text-sm leading-relaxed">{activePreviewProject.description}</p>

                        <div className="space-y-2 pt-2">
                          <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold">Key Highlights</h4>
                          <div className="space-y-1.5">
                            {activePreviewProject.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                                <span className="text-blue-400 font-bold">•</span>
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {activePreviewProject.url !== "#" && (
                          <div className="pt-4 flex justify-end">
                            <a
                              href={activePreviewProject.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 flex items-center gap-1.5"
                            >
                              <span>Open Live Application</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* VIEW MODE 2: LIVE SITE IFRAME FRAME */}
              {previewViewMode === "iframe" && activePreviewProject.url !== "#" && (
                <div className="w-full h-[72vh] rounded-lg overflow-hidden border border-[#1e2638] bg-white relative">
                  <iframe
                    src={activePreviewProject.url}
                    className="w-full h-full border-0"
                    title={activePreviewProject.title}
                  />
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
