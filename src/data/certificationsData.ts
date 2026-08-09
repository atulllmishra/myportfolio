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
    title: "Finalist - IIT Guwahati ImpactHack Hackathon 2025",
    category: "National Hackathon Finalist",
    issuer: "IIT Guwahati",
    description: "Built Smart Agri (smart-agri.vercel.app) with teammates at IIT Guwahati ImpactHack 2025. Developed a precision agritech platform offering real-time city temperature tracking and live crop market price predictions for farmers.",
    tags: ["IIT Guwahati", "ImpactHack 2025", "Smart Agri", "Agritech AI"],
    link: "https://smart-agri.vercel.app"
  },
  {
    title: "Generative AI College Chatbot Deployment",
    category: "Campus AI Integration",
    issuer: "MCAET College (ANDUAT)",
    description: "Designed, engineered, and deployed a live Generative AI chatbot (mcaetchatbot-2.onrender.com) for automated student queries, integrated directly into official college website mcaet.vercel.app.",
    tags: ["LLMs", "Generative AI", "Render", "Vercel"],
    link: "https://mcaetchatbot-2.onrender.com"
  },
  {
    title: "C++ Data Structures & Algorithms Problem Solving",
    category: "Competitive Programming",
    issuer: "LeetCode & CodeChef",
    description: "Strong foundation in C++ memory management, STL, object-oriented programming, and algorithmic problem-solving for SDE technical interviews.",
    tags: ["C++", "DSA", "Algorithms", "Problem Solving"],
  },
];
