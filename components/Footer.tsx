export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t text-center text-sm"
      style={{
        borderColor: "var(--border)",
        color: "var(--text-secondary)",
      }}
    >
      <p>
        Designed & built by{" "}
        <span style={{ color: "var(--accent-pink)" }}>Your Name</span>{" "}
        — {new Date().getFullYear()}
      </p>
      <p className="mt-1 text-xs opacity-60">
        Built with Next.js · TypeScript · Tailwind · Framer Motion
      </p>
    </footer>
  );
}