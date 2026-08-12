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
    year: "August 2026 — Present",
    title: "EdTech Innovation & Full-Stack AI Projects",
    role: "Lead AI & Full-Stack Developer",
    institution: "heyBuddy & Web Apps",
    location: "Ayodhya / Remote",
    description: "Initiated heyBuddy, an AI-powered multilingual video learning platform, alongside deploying a full-stack e-commerce application with integrated AI assistance.",
    tags: ["Generative AI", "Next.js", "Multilingual Video", "Full-Stack"],
    iconName: "Sparkles",
    badge: "Active Initiative",
  },
  {
    id: "t2",
    year: "July 2026 — Present",
    title: "Campus AI Integration Lead",
    role: "Generative AI System Developer",
    institution: "MCAET College (ANDUAT)",
    location: "Ayodhya, UP, India",
    description: "Engineered and deployed an automated conversational AI chatbot to streamline student inquiries on the official college web portal.",
    tags: ["LLM Integration", "Node.js", "Render", "Campus AI"],
    iconName: "Bot",
    badge: "Official Deployment",
    link: "https://mcaet.vercel.app",
  },
  {
    id: "t3",
    year: "March 2025",
    title: "IIT Guwahati ImpactHack 2025",
    role: "National Finalist",
    institution: "IIT Guwahati",
    location: "Guwahati, Assam, India",
    description: "Recognized as National Finalist at ImpactHack 2025 for designing Smart Agri, an intelligent decision-support system for farmers.",
    tags: ["ImpactHack '25", "Agritech AI", "National Finalist"],
    iconName: "Trophy",
    badge: "National Finalist",
    link: "https://smart-agri.vercel.app",
  },
  {
    id: "t4",
    year: "Oct 2024 — Sept 2025",
    title: "B2B SaaS Platform Engineering",
    role: "Creator & Full-Stack Developer",
    institution: "ProcureHub Enterprise SaaS",
    location: "Remote",
    description: "Architected ProcureHub, an open-bidding B2B SaaS platform designed to ensure fair contractor vetting and transparent IT procurement.",
    tags: ["Next.js", "B2B SaaS", "Procurement", "Smart Contracts"],
    iconName: "Briefcase",
    badge: "SaaS Deployment",
    link: "https://procurehub.vercel.app",
  },
  {
    id: "t5",
    year: "2024 — Present",
    title: "Bachelor of Technology (B.Tech)",
    role: "Computer Science & Engineering (CSE)",
    institution: "MCAET, ANDUAT University",
    location: "Ayodhya, UP, India",
    description: "Core academic training in Data Structures & Algorithms, Object-Oriented Programming in C++, DBMS, Operating Systems, and Software Engineering.",
    tags: ["Data Structures", "C++ OOP", "DBMS", "Software Eng."],
    iconName: "GraduationCap",
    badge: "Undergraduate Degree",
  },
];

