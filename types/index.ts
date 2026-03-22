export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;           // 0–100
  category: "frontend" | "backend" | "tools" | "other";
  icon?: string;
}

export interface Interest {
  title: string;
  description: string;
  emoji: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}