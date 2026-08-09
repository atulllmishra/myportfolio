export type SkillCategory = "all" | "ai" | "web" | "core";

export interface SkillItem {
  name: string;
  category: "ai" | "web" | "core";
  level: number;
  description: string;
  tags: string[];
}

export const skillsData: SkillItem[] = [
  {
    name: "Generative AI & LLM Systems",
    category: "ai",
    level: 92,
    description: "Developing custom AI conversational bots, LLM prompt engineering, and context-driven RAG models.",
    tags: ["Gemini API", "OpenAI", "Prompt Engineering", "RAG"],
  },
  {
    name: "AI Chatbot Architecture",
    category: "ai",
    level: 95,
    description: "End-to-end deployment of live conversational bots for web & educational portals.",
    tags: ["Render", "Vercel", "REST APIs", "Node.js"],
  },
  {
    name: "LangChain & Agentic Workflows",
    category: "ai",
    level: 85,
    description: "Multi-step AI reasoning chains, structured JSON outputs, and vector embedding retrieval.",
    tags: ["Embeddings", "Vector Search", "JSON Schemas"],
  },
  {
    name: "React.js & Next.js App Router",
    category: "web",
    level: 90,
    description: "Building modern Single Page Apps and App Router web applications with high performance.",
    tags: ["App Router", "SSR", "TypeScript", "Hooks"],
  },
  {
    name: "JavaScript (ES6+) & TypeScript",
    category: "web",
    level: 88,
    description: "Writing clean, type-safe asynchronous code for dynamic web interfaces.",
    tags: ["Async/Await", "Promises", "DOM", "TypeScript"],
  },
  {
    name: "HTML5, CSS3 & Tailwind CSS",
    category: "web",
    level: 94,
    description: "Crafting responsive, clean, modern layouts with precise typography.",
    tags: ["Tailwind", "Responsive", "Flex/Grid", "CSS3"],
  },
  {
    name: "REST APIs & Microservices",
    category: "web",
    level: 86,
    description: "Connecting web interfaces to backend APIs, database schemas, and AI endpoints.",
    tags: ["Fetch API", "Express", "JSON", "CORS"],
  },
  {
    name: "C++ Programming & OOP",
    category: "core",
    level: 88,
    description: "Solid foundation in C++ object-oriented programming, STL, and memory management.",
    tags: ["C++ STL", "OOP", "Pointers", "Memory"],
  },
  {
    name: "Data Structures & Algorithms",
    category: "core",
    level: 85,
    description: "Problem solving using arrays, trees, graphs, dynamic programming, and complexity analysis.",
    tags: ["Arrays", "Trees", "Graphs", "DP"],
  },
  {
    name: "DBMS & Operating Systems",
    category: "core",
    level: 84,
    description: "Core CSE fundamentals: relational databases, SQL queries, memory allocation, and process execution.",
    tags: ["SQL", "Relational Schema", "OS Concepts"],
  },
];
