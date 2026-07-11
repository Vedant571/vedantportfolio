import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ hide = false }: { hide?: boolean }) {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hide) {
      setVisible(false);
      return;
    }

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (open) {
        setVisible(true);
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      if (currentScrollY <= 100) {
        setVisible(true);
      } else {
        const diff = currentScrollY - lastScrollY;
        const absDiff = Math.abs(diff);

        // Ignore small scroll movements (< 10px) to prevent flickering
        if (absDiff >= 10) {
          if (diff > 0) {
            // Scrolling down -> hide navbar
            setVisible(false);
          } else {
            // Scrolling up -> show navbar
            setVisible(true);
          }
        }
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, hide]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{
        y: visible ? 0 : -120,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed left-0 right-0 top-2.5 z-[9999] transition-[padding] duration-300 pointer-events-none bg-transparent ${
        scrolled ? "py-3" : "py-5"
      } ${hide ? "!invisible !opacity-0 !pointer-events-none" : ""}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          className={`glass-pill pointer-events-auto flex items-center gap-2 rounded-full px-4 py-2 transition-all ${
            scrolled ? "glow" : ""
          }`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
            VM
          </span>
          <span className="font-display text-sm font-semibold">Vedant Modi</span>
        </a>

        <nav className="hidden md:block pointer-events-auto">
          <ul className="glass-pill flex items-center gap-1 rounded-full px-2 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="pointer-events-auto hidden rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_oklch(0.65_0.21_258/0.6)] md:inline-block"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="glass-pill pointer-events-auto rounded-full p-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 bg-foreground" />
            <span className="h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="absolute left-0 right-0 top-full mx-auto mt-2 max-w-7xl px-6 md:hidden pointer-events-auto">
          <ul className="glass-pill flex flex-col gap-1 rounded-2xl p-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}