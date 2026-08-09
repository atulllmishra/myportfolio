export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  tags: string[];
  iconName: "Sparkles" | "ShoppingBag" | "Bot" | "Trophy" | "Briefcase" | "GraduationCap";
  badge?: string;
  link?: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: "t1",
    year: "August 2026 — Present (Ongoing)",
    title: "heyBuddy - AI Multilingual EdTech Video Platform",
    role: "Founder & Lead AI Developer",
    institution: "Self-Driven EdTech SaaS Project",
    location: "Remote / Online",
    description: "Building heyBuddy, an online edtech platform that generates AI video solutions for user questions in multiple languages and allows students to dynamically transform lectures into different difficulty levels.",
    tags: ["EdTech AI", "Multilingual Video", "Lecture Transformation", "Next.js", "LLMs"],
    iconName: "Sparkles",
    badge: "Ongoing Work",
  },
  {
    id: "t2",
    year: "August 2026 — Present",
    title: "E-Commerce Storefront & AI Helpcenter Integration",
    role: "Full-Stack Web Developer",
    institution: "Self-Driven Web Application",
    location: "Remote / Online",
    description: "Engineered a full-stack e-commerce application featuring product catalog navigation, cart management, checkout flows, and an integrated customer helpcenter AI chatbot.",
    tags: ["React", "TypeScript", "Tailwind CSS", "AI Chatbot UI", "Vercel"],
    iconName: "ShoppingBag",
    badge: "Live Web App",
    link: "https://ecommerce-store-ivory-sigma.vercel.app/",
  },
  {
    id: "t3",
    year: "July 2026 — Present",
    title: "MCAET College Generative AI Chatbot System",
    role: "Lead Generative AI Developer",
    institution: "MCAET ANDUAT Web Portal",
    location: "Ayodhya, UP, India",
    description: "Engineered, deployed, and integrated an automated Generative AI chatbot (mcaetchatbot-2.onrender.com) into official college portal (mcaet.vercel.app) to assist students.",
    tags: ["Generative AI", "LLMs", "Node.js", "Render", "Portal Integration"],
    iconName: "Bot",
    badge: "Live Campus AI",
    link: "https://mcaetchatbot-2.onrender.com",
  },
  {
    id: "t4",
    year: "March 2025",
    title: "IIT Guwahati ImpactHack Hackathon (Smart Agri)",
    role: "National Finalist & Lead Developer",
    institution: "IIT Guwahati ImpactHack 2025",
    location: "Guwahati, Assam, India",
    description: "Built Smart Agri (smart-agri.vercel.app), a precision farming decision support platform providing real-time weather forecasting and live crop market price prediction for farmers.",
    tags: ["IIT Guwahati", "ImpactHack 2025", "Smart Agri", "Agritech AI"],
    iconName: "Trophy",
    badge: "Hackathon Finalist",
    link: "https://smart-agri.vercel.app",
  },
  {
    id: "t5",
    year: "Oct 1, 2024 — Sept 24, 2025",
    title: "ProcureHub - B2B IT Procurement SaaS Platform",
    role: "Creator & Full-Stack Developer",
    institution: "Enterprise SaaS Project",
    location: "Remote / Online",
    description: "Engineered ProcureHub (procurehub.vercel.app), a transparent, bribeless B2B IT procurement platform featuring open bidding, smart contracts, verified contractor vetting, and real-time bid analytics.",
    tags: ["Next.js", "B2B SaaS", "Smart Contracts", "Procurement"],
    iconName: "Briefcase",
    badge: "B2B Production SaaS",
    link: "https://procurehub.vercel.app",
  },
  {
    id: "t6",
    year: "2024 — Present",
    title: "Bachelor of Technology (B.Tech)",
    role: "Computer Science & Engineering (CSE) Student",
    institution: "Mahamaya College of Agricultural Engineering and Technology (MCAET)",
    location: "ANDUAT University, Ayodhya / UP, India",
    description: "Academic coursework covering Data Structures & Algorithms, Object-Oriented Programming in C++, DBMS, Operating Systems, Software Engineering, and Web Technologies.",
    tags: ["Data Structures", "C++ OOP", "DBMS", "Operating Systems", "Web Dev"],
    iconName: "GraduationCap",
    badge: "Undergraduate Degree",
  },
];
