export type SkillCategory = "all" | "engineering" | "graphics" | "backend";

export interface SkillItem {
  name: string;
  category: "engineering" | "graphics" | "backend";
  description: string;
  tags: string[];
}

export const skillsData: SkillItem[] = [
  {
    name: "React & Next.js Architecture",
    category: "engineering",
    description: "I write pure components, manage server/client boundaries, and avoid unnecessary re-renders. Fluent in React 19 rules and Turbopack.",
    tags: ["React 19", "Next.js 15", "Server Actions", "Hooks"],
  },
  {
    name: "TypeScript & Tooling",
    category: "engineering",
    description: "Strict mode always on. I use TS to catch structural errors before CI, not just for autocomplete.",
    tags: ["Generics", "Zod", "ESLint", "Tailwind v4"],
  },
  {
    name: "WebGL & 3D Interactive",
    category: "graphics",
    description: "Writing custom shaders, optimizing draw calls, and mapping DOM events to 3D meshes using React Three Fiber.",
    tags: ["Three.js", "R3F", "Drei", "GLSL"],
  },
  {
    name: "Motion & Physics",
    category: "graphics",
    description: "Building 60fps micro-interactions and tactile UI using physics engines and frame-perfect animation loops.",
    tags: ["Framer Motion", "Matter.js", "GSAP", "Web Audio API"],
  },
  {
    name: "Node.js & API Design",
    category: "backend",
    description: "Building fast, stateless microservices that interface with external DBs and complex vendor APIs without bottlenecking.",
    tags: ["Express", "REST", "WebSockets", "Edge Functions"],
  },
  {
    name: "C++ & Core Algorithms",
    category: "engineering",
    description: "My foundation. I solve algorithmic challenges in C++ to keep my problem-solving sharp and understand memory allocation at a low level.",
    tags: ["STL", "Data Structures", "Dynamic Programming", "Pointers"],
  }
];
