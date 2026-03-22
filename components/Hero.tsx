"use client";

import { motion } from "framer-motion";
import { IconArrowDown, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20">
      {/* Decorative blobs */}
      <div
        className="absolute top-32 right-20 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: "var(--accent-pink)" }}
      />
      <div
        className="absolute bottom-32 left-10 w-56 h-56 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: "var(--accent-blue)" }}
      />

      <div className="max-w-4xl w-full text-center z-10">
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Hi, I'm{" "}
          <span
            className="relative"
            style={{ color: "var(--accent-pink)" }}
          >
            Your Name
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 10"
              fill="none"
            >
              <path
                d="M0 8 Q50 2 100 6 Q150 10 200 4"
                stroke="var(--accent-pink)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              />
            </motion.svg>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl mb-8 max-w-xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          A full-stack developer crafting clean, thoughtful digital experiences
          — one component at a time.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: "var(--accent-pink)" }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full text-sm font-semibold border transition-transform hover:scale-105 active:scale-95"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-primary)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-5 mt-8"
        >
          {[
            { icon: <IconBrandGithub size={20} />, href: "https://github.com/yourusername" },
            { icon: <IconBrandLinkedin size={20} />, href: "https://linkedin.com/in/yourusername" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border transition-all duration-200 hover:scale-110"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ color: "var(--text-secondary)" }}
      >
        <IconArrowDown size={22} />
      </motion.div>
    </section>
  );
}