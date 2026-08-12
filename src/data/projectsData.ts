export interface ProjectItem {
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
  outcome?: string;
}

export const projectsList: ProjectItem[] = [
  {
    id: "heybuddy",
    title: "heyBuddy - AI Multilingual Video Learning Platform",
    category: "ai",
    categoryLabel: "AI EdTech Platform",
    url: "https://heybuddyai.vercel.app",
    badge: "Ongoing Initiative",
    timeline: "August 2026 — Present",
    description: "An online edtech platform generating AI video & voice solutions for student queries across 10+ languages with dynamic lecture difficulty transformation.",
    highlights: [
      "AI video & audio explanations in 10+ languages",
      "Dynamic difficulty scaling (Beginner to Advanced)",
      "Neural text-to-speech with virtual avatar engine",
      "Real-time concept quizzes & progress analytics"
    ],
    tech: ["Generative AI", "Next.js", "TypeScript", "Python FastAPI", "LLMs", "Tailwind CSS"],
    outcome: "Active Development — Scalable Multilingual EdTech Video Synthesis Engine"
  },
  {
    id: "procurehub",
    title: "ProcureHub - B2B IT Procurement & Bidding SaaS",
    category: "saas",
    categoryLabel: "Enterprise SaaS",
    url: "https://procurehub.vercel.app",
    badge: "B2B Production SaaS",
    timeline: "Oct 2024 — Sept 2025",
    description: "A transparent bid management platform for IT maintenance contracts in India. Eliminates middleman corruption through open bidding, verified contractor vetting, smart contracts, and real-time analytics.",
    highlights: [
      "Merit-based procurement bidding system eliminating hidden fees",
      "Equal opportunity algorithm enabling SMB contractors to compete",
      "Automated smart contracts for verified agreement audit trails",
      "Real-time analytics dashboard tracking project & bid metrics"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Smart Contracts", "Vercel"],
    outcome: "Live SaaS App — Transparent & Bribeless IT Procurement Platform"
  },
  {
    id: "smart-agri",
    title: "Smart Agri - Precision Farming & Price Prediction Platform",
    category: "agritech",
    categoryLabel: "Agritech Platform",
    url: "https://smart-agri.vercel.app",
    badge: "IIT Guwahati Finalist '25",
    timeline: "March 2025",
    description: "National Finalist project at IIT Guwahati ImpactHack 2025. An intelligent precision farming decision support platform offering real-time weather forecasting and crop market price predictions for farmers.",
    highlights: [
      "Recognized National Finalist at IIT Guwahati ImpactHack Hackathon 2025",
      "Real-time city temperature & microclimate forecasting API",
      "Predictive analytics engine for mandi crop market prices",
      "Soil moisture & irrigation advisory management dashboard"
    ],
    tech: ["React", "JavaScript", "HTML5/CSS3", "Agritech AI", "Vercel"],
    outcome: "IIT Guwahati ImpactHack 2025 National Finalist Project"
  },
  {
    id: "mcaet-chatbot",
    title: "MCAET College Generative AI Chatbot System",
    category: "ai",
    categoryLabel: "Campus AI Integration",
    url: "https://mcaetchatbot-2.onrender.com",
    secondaryUrl: "https://mcaet.vercel.app",
    badge: "Live Campus AI",
    timeline: "July 2026 — Present",
    description: "Custom Generative AI chatbot engineered for Mahamaya College of Agricultural Engineering and Technology (MCAET). Deployed live on Render and integrated into official college portal mcaet.vercel.app for student queries.",
    highlights: [
      "Live production deployment integrated into official college portal (mcaet.vercel.app)",
      "Automated query resolution for prospective & current college students",
      "Contextual prompt engineering and high-throughput REST API server"
    ],
    tech: ["Generative AI", "LLMs", "Node.js", "Render", "Vercel"],
    outcome: "Official Campus Integration — Servicing Student Enquiries 24/7"
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Storefront & AI Helpcenter",
    category: "ecommerce",
    categoryLabel: "Full-Stack Web App",
    url: "https://ecommerce-store-ivory-sigma.vercel.app/",
    badge: "Live Production App",
    timeline: "August 2026 — Present",
    description: "Modern online storefront featuring product catalog navigation, cart management, checkout flows, and an integrated customer helpcenter AI chatbot.",
    highlights: [
      "Interactive product catalog with category filtering",
      "Embedded AI Helpcenter chatbot for customer service",
      "Responsive cart state management and checkout workflow"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Chatbot UI", "Vercel"],
    outcome: "Live Web App — Full-Stack E-Commerce with AI Support"
  }
];

