"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { skills } from "@/data/portfolio";

const categories = ["frontend", "backend", "tools"] as const;

export default function Skills() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="skills" className="py-28 px-6">
      {/* Subtle section bg */}
      <div
        className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, var(--accent-blue) 0%, transparent 70%)" }}
      />
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono uppercase tracking-widest mb-3"
            style={{ color: "var(--accent-pink)" }}>
            Skills
          </p>
          <h2 className="font-display text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            What I work with
          </h2>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, ci) => (
            <div key={category}>
              <h3
                className="text-xs font-mono uppercase tracking-widest mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                {category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: ci * 0.15 + i * 0.08 }}
                      className="rounded-xl p-4 border"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span
                          className="text-sm font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ backgroundColor: "var(--border)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 0.9, delay: ci * 0.15 + i * 0.08 + 0.2, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(to right, var(--accent-pink), var(--accent-blue))`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}