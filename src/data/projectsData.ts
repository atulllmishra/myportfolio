export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "agritech" | "ai" | "saas";
  categoryLabel: string;
  url: string;
  secondaryUrl?: string;
  githubUrl?: string;
  description: string;
  mechanics: string;
  metrics: ProjectMetric[];
  tech: string[];
  badge?: string;
  timeline: string;
}

export const projectsList: ProjectItem[] = [
  {
    id: "heybuddy",
    title: "heyBuddy - AI Multilingual Video Learning",
    category: "ai",
    categoryLabel: "AI EdTech",
    url: "https://heybuddyai.vercel.app",
    badge: "Active",
    timeline: "August 2026 — Present",
    description: "An edtech platform that synthesizes localized video and voice explanations for student queries in real-time. Automatically scales lecture difficulty based on the student's assessed comprehension level.",
    mechanics: "Built a custom pipeline wrapping open-weight TTS models and LLMs to generate structured JSON lecture nodes, which are then stitched into a synchronized video timeline via client-side Canvas APIs.",
    metrics: [
      { label: "Supported Languages", value: "10+" },
      { label: "Generation Latency", value: "< 2.5s" }
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "LLMs", "Web Audio API"],
  },
  {
    id: "procurehub",
    title: "ProcureHub - B2B IT Procurement",
    category: "saas",
    categoryLabel: "Enterprise SaaS",
    url: "https://procurehub.vercel.app",
    badge: "Production",
    timeline: "Oct 2024 — Sept 2025",
    description: "Replaces back-channel negotiation in Indian IT maintenance contracts with transparent open bidding. Built to give SMB contractors equal visibility against established enterprise vendors.",
    mechanics: "Implemented a cryptographic bid-sealing mechanism using subtle crypto API and smart contracts, ensuring bid amounts remain completely hidden until the designated opening window triggers.",
    metrics: [
      { label: "Bid audit trail", value: "Immutable" },
      { label: "Contract verification", value: "Automated" }
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Smart Contracts"],
  },
  {
    id: "smart-agri",
    title: "Smart Agri - Precision Farming",
    category: "agritech",
    categoryLabel: "Agritech",
    url: "https://smart-agri.vercel.app",
    badge: "IIT Guwahati Finalist '25",
    timeline: "March 2025",
    description: "A precision farming decision support dashboard. Cross-references real-time microclimate weather APIs with historical crop market data to predict localized mandi prices.",
    mechanics: "Engineered a low-bandwidth progressive web app (PWA) architecture with aggressive local caching, ensuring the dashboard remains usable for rural farmers on intermittent 3G networks.",
    metrics: [
      { label: "National Hackathon", value: "Finalist" },
      { label: "Offline support", value: "PWA IndexedDB" }
    ],
    tech: ["React", "JavaScript", "Service Workers", "Agritech AI"],
  },
  {
    id: "mcaet-chatbot",
    title: "MCAET College AI Chatbot",
    category: "ai",
    categoryLabel: "Campus AI",
    url: "https://mcaetchatbot-2.onrender.com",
    secondaryUrl: "https://mcaet.vercel.app",
    badge: "Live Campus Integration",
    timeline: "July 2026 — Present",
    description: "The official generative AI assistant for Mahamaya College of Agricultural Engineering and Technology. Replaces manual admission enquiry processing with instant, context-aware answers.",
    mechanics: "Constructed a highly specific RAG (Retrieval-Augmented Generation) vector index using the college's entire administrative handbook, admission policies, and syllabus documents to prevent hallucination.",
    metrics: [
      { label: "Daily Queries", value: "200+" },
      { label: "Uptime", value: "99.9%" }
    ],
    tech: ["Node.js", "Express", "Vector DB", "LLMs"],
  }
];
