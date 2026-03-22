"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <div>
            <p
              className="text-sm font-mono uppercase tracking-widest mb-3"
              style={{ color: "var(--accent-pink)" }}
            >
              About Me
            </p>

            <h2
              className="font-display text-4xl font-bold mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Crafting ideas into <br />
              <span style={{ color: "var(--accent-blue)" }}>
                digital reality
              </span>
            </h2>

            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              I'm Harintha Jayashivani, a Software Engineering undergraduate
              based in Sri Lanka, with a strong passion for building modern,
              user-friendly web applications. I enjoy turning ideas into
              functional and visually appealing digital experiences that solve
              real-world problems.
            </p>

            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Currently, I'm expanding my skills in full-stack development while
              working on projects like BillVault — a smart expense and warranty
              tracking mobile app. I focus on writing clean, efficient code and
              designing interfaces that are both intuitive and engaging.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Beyond coding, I’ve taken on leadership roles as a senior prefect,
              Interact Club treasurer, and an active member of my school’s
              netball team. I also love playing the guitar and exploring new
              trends in technology, design, and innovation.
            </p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "1+", label: "Years in Software Engineering" },
              { number: "10+", label: "Projects Completed" },
              { number: "8+", label: "Technologies Explored" },
              { number: "∞", label: "Ideas & Creativity" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                <p
                  className="font-display text-3xl font-bold mb-1"
                  style={{ color: "var(--accent-pink)" }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}