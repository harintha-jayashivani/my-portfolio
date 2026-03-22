"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

// Projects data
const projects = [
  {
    id: 1,
    title: "BillVault",
    description:
      "A smart mobile app for managing bills and tracking warranties, built using React Native and Firebase for fast and reliable performance.",
    tags: ["React Native", "Firebase", "Mobile App"],
    githubUrl: "https://github.com/harintha-jayashivani/billvault",
    liveUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing projects, skills, and experience as a Software Engineering student, built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/harintha-jayashivani/portfolio",
    liveUrl: "https://harintha-portfolio.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Task Manager Web App",
    description:
      "A full-stack web application to organize and track daily tasks with user authentication and dynamic CRUD operations.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/harintha-jayashivani/task-manager",
    liveUrl: null,
    featured: false,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A responsive web app that fetches real-time weather data from APIs and displays it in an interactive dashboard.",
    tags: ["React", "API", "Tailwind CSS"],
    githubUrl: "https://github.com/harintha-jayashivani/weather-dashboard",
    liveUrl: "https://harintha-weather.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Expense Tracker",
    description:
      "A web-based tool for tracking personal expenses, visualizing spending patterns, and generating reports.",
    tags: ["React", "Chart.js", "Firebase"],
    githubUrl: "https://github.com/harintha-jayashivani/expense-tracker",
    liveUrl: null,
    featured: false,
  },
];

export default function Projects() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-mono uppercase tracking-widest mb-3"
            style={{ color: "var(--accent-pink)" }}
          >
            Projects
          </p>
          <h2
            className="font-display text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Things I've built
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl p-6 border flex flex-col justify-between transition-shadow hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              {/* Top */}
              <div>
                {project.featured && (
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full mb-3 inline-block"
                    style={{
                      backgroundColor: "rgba(255,111,145,0.12)",
                      color: "var(--accent-pink)",
                    }}
                  >
                    Featured
                  </span>
                )}
                <h3
                  className="font-display text-lg font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>
              </div>

              {/* Tags + Links */}
              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-1 rounded-md"
                      style={{
                        backgroundColor: "var(--border)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--accent-pink)]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <IconBrandGithub size={15} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--accent-pink)]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <IconExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}