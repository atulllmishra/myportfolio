export interface AchievementItem {
  title: string;
  category: string;
  issuer: string;
  description: string;
  tags: string[];
  link?: string;
}

export const achievementsList: AchievementItem[] = [
  {
    title: "IIT Guwahati ImpactHack 2025 National Finalist",
    category: "National Honor",
    issuer: "IIT Guwahati",
    description: "Awarded National Finalist status for engineering Smart Agri, an AI-driven agricultural decision-support platform.",
    tags: ["IIT Guwahati", "ImpactHack 2025", "Agritech"],
    link: "https://smart-agri.vercel.app"
  },
  {
    title: "Official Campus Generative AI Integration",
    category: "Institutional Recognition",
    issuer: "MCAET ANDUAT University",
    description: "Successfully built and integrated a production LLM chatbot system onto the official university web portal.",
    tags: ["Generative AI", "Production AI", "Campus Integration"],
    link: "https://mcaet.vercel.app"
  },
  {
    title: "C++ & Algorithmic Problem Solving Mastery",
    category: "Technical Credential",
    issuer: "LeetCode & Competitive Programming",
    description: "Extensive problem solving in C++ covering arrays, trees, dynamic programming, and algorithm optimization.",
    tags: ["C++ STL", "DSA", "Algorithms", "SDE Core"],
  },
];

