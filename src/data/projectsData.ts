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
  bibtex: string;
}

export const projectsList: ProjectItem[] = [
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
