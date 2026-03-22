import { Project, Skill, Interest } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack shopping platform with cart, auth, and Stripe payments. Built with Next.js, PostgreSQL, and Tailwind.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    liveUrl: "https://your-project.vercel.app",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: 2,
    title: "AI Chat Interface",
    description:
      "Real-time chat app powered by an LLM API with streaming responses and conversation history.",
    tags: ["React", "OpenAI API", "TailwindCSS", "WebSockets"],
    githubUrl: "https://github.com/yourusername/ai-chat",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "This very portfolio — built with Next.js 14, Framer Motion, and TypeScript.",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js",  level: 90, category: "frontend" },
  { name: "TypeScript",        level: 82, category: "frontend" },
  { name: "Tailwind CSS",      level: 88, category: "frontend" },
  { name: "Framer Motion",     level: 75, category: "frontend" },
  // Backend
  { name: "Node.js",           level: 78, category: "backend"  },
  { name: "PostgreSQL",        level: 70, category: "backend"  },
  { name: "REST APIs",         level: 85, category: "backend"  },
  // Tools
  { name: "Git / GitHub",      level: 88, category: "tools"    },
  { name: "Figma",             level: 65, category: "tools"    },
  { name: "Docker",            level: 60, category: "tools"    },
];

export const interests: Interest[] = [
  {
    title: "UI/UX Design",
    description: "I love crafting interfaces that feel intuitive and beautiful.",
    emoji: "🎨",
  },
  {
    title: "Open Source",
    description: "Contributing to projects and learning from the community.",
    emoji: "🌍",
  },
  {
    title: "Music",
    description: "Playing guitar and discovering new genres keeps me balanced.",
    emoji: "🎸",
  },
  {
    title: "Reading",
    description: "Tech blogs, science fiction, and the occasional philosophy book.",
    emoji: "📚",
  },
];