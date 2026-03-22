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
              <span style={{ color: "var(--accent-blue)" }}>digital reality</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              I'm a passionate developer based in [Your City], focused on building
              web applications that are fast, accessible, and delightful to use.
              I care deeply about clean code, good design, and the tiny details
              that make an experience feel polished.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              When I'm not coding, you'll find me exploring new design trends,
              jamming on guitar, or reading about technology and philosophy.
            </p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "2+",  label: "Years of Experience" },
              { number: "15+", label: "Projects Completed"  },
              { number: "10+", label: "Technologies Used"   },
              { number: "∞",   label: "Cups of Coffee"      },
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
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
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