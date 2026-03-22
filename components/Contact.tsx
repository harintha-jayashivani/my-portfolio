"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { IconSend, IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export default function Contact() {
  const { ref, inView } = useScrollAnimation();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // 💡 Replace with your form backend (Formspree, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1200)); // simulate
    setStatus("sent");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm border outline-none focus:ring-2 transition-all";

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-mono uppercase tracking-widest mb-3"
            style={{ color: "var(--accent-pink)" }}>
            Contact
          </p>
          <h2 className="font-display text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Let's work together
          </h2>
          <p className="mt-3 text-base" style={{ color: "var(--text-secondary)" }}>
            Have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form — takes 3 cols */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-4"
          >
            <input
              name="name" type="text" placeholder="Your name" required
              value={form.name} onChange={handleChange}
              className={inputClass}
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            />
            <input
              name="email" type="email" placeholder="Your email" required
              value={form.email} onChange={handleChange}
              className={inputClass}
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            />
            <textarea
              name="message" rows={5} placeholder="Your message" required
              value={form.message} onChange={handleChange}
              className={`${inputClass} resize-none`}
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            />
            <button
              type="submit"
              disabled={status !== "idle"}
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-60"
              style={{ backgroundColor: "var(--accent-pink)" }}
            >
              <IconSend size={16} />
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending…"}
              {status === "sent" && "Sent! 🎉"}
            </button>
          </motion.form>

          {/* Sidebar — takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            {[
              { icon: <IconMail size={18} />, label: "Email", value: "h.jayashivani@gmail.com", href: "h.jayashivani@gmail.com" },
              { icon: <IconBrandGithub size={18} />, label: "GitHub", value: "github.com/you", href: "https://github.com/you" },
              { icon: <IconBrandLinkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/you", href: "https://linkedin.com/in/you" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                <div
                  className="p-2 rounded-lg"
                  style={{
                    backgroundColor: "rgba(255,111,145,0.1)",
                    color: "var(--accent-pink)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.label}</p>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}