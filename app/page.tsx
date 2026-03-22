import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import About      from "@/components/About";
import Skills     from "@/components/Skills";
import Projects   from "@/components/Projects";
import Interests  from "@/components/Interests";
import Contact    from "@/components/Contact";
import Footer     from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
      <Footer />
    </main>
  );
}