import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Footer from "./Footer";
import BackgroundFX from "./BackgroundFX";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  const [mouse, setMouse] = useState({ x: -200, y: -200 });
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${header.offsetHeight}px`
        );
      }
    };

    updateNavbarHeight();

    const header = document.querySelector("header");
    let resizeObserver: ResizeObserver | null = null;
    if (header) {
      resizeObserver = new ResizeObserver(() => {
        updateNavbarHeight();
      });
      resizeObserver.observe(header);
    }

    window.addEventListener("resize", updateNavbarHeight);
    window.addEventListener("scroll", updateNavbarHeight);

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener("resize", updateNavbarHeight);
      window.removeEventListener("scroll", updateNavbarHeight);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundFX />
      {/* Mouse glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed z-0 h-[380px] w-[380px] rounded-full opacity-40 blur-3xl transition-transform duration-200"
        style={{
          left: mouse.x - 190,
          top: mouse.y - 190,
          background:
            "radial-gradient(circle, oklch(0.65 0.21 258 / 0.6), transparent 70%)",
        }}
      />
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-primary via-accent to-primary"
      />
      <Navbar hide={isResumeOpen} />
      <main className="relative z-10">
        <Hero isResumeOpen={isResumeOpen} setIsResumeOpen={setIsResumeOpen} />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}