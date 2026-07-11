import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Github, ExternalLink, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  desc: string;
  features: string[];
  tech: string[];
  category: "Full-Stack" | "Frontend" | "AI" | "Embedded";
  status: "Completed" | "Featured" | "Hackathon Winner" | "Active";
  demo?: string;
  github?: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "PrimeVerse",
    tagline: "AI-Powered Blogging Platform",
    desc: "A blogging environment with user authentication, custom rich text formatting, and LLM-assisted editing capabilities.",
    features: [
      "JWT-based user account and session management",
      "AI-driven text generation & style optimization",
      "Dynamic blog categorization and search queries"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    category: "AI",
    status: "Featured",
    demo: "https://vedant571.github.io/PrimeVerse/",
    github: "https://github.com/Vedant571/PrimeVerse",
    gradient: "from-blue-500/30 to-indigo-500/20",
  },
  {
    title: "EduNest LMS",
    tagline: "Learning Management System",
    desc: "Full learning management platform offering enrollment flows, student dashboards, and payment portals.",
    features: [
      "Secure OTP-based user authentication",
      "Interactive student & instructor administration panels",
      "Integrated Razorpay billing gateway checkouts"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
    category: "Full-Stack",
    status: "Completed",
    github: "https://github.com/Vedant571",
    gradient: "from-emerald-500/30 to-teal-500/20",
  },
  {
    title: "AuraPic",
    tagline: "Wallpaper Gallery & Portal",
    desc: "A responsive media gallery portal showcasing categorical layouts and quick download triggers.",
    features: [
      "Highly responsive flexbox masonry grids",
      "Instant image download hooks and resolution options",
      "Categorized media filtering system"
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    status: "Completed",
    demo: "https://vedant571.github.io/AuraPic/",
    gradient: "from-pink-500/30 to-purple-500/20",
  },
  {
    title: "Smart Scheduler",
    tagline: "INNOVEX Hackathon Winner",
    desc: "Automated institutional scheduling solver utilizing custom allocation heuristics to prevent classroom overlaps.",
    features: [
      "Automated time slot scheduling algorithm",
      "Interactive class schedule builder GUI",
      "Conflict detection alerts and visual indicators"
    ],
    tech: ["Full-Stack", "JavaScript", "Algorithms"],
    category: "Full-Stack",
    status: "Hackathon Winner",
    gradient: "from-amber-500/30 to-orange-500/20",
  },
  {
    title: "Personal Portfolio",
    tagline: "Modern Brand Experience",
    desc: "Premium animated portfolio website featuring clean layouts, custom glassmorphism, and responsive timelines.",
    features: [
      "Dynamic layout calculations and scroll padding alignment",
      "Accessible modal triggers and focus trap cycles",
      "Framer Motion transitions and typography setups"
    ],
    tech: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    category: "Frontend",
    status: "Active",
    gradient: "from-cyan-500/30 to-sky-500/20",
  },
  {
    title: "RC Controlled Car",
    tagline: "Embedded Robotics Hardware",
    desc: "A Bluetooth-enabled robotic vehicle prototype controlled via an Android mobile client application.",
    features: [
      "Arduino board logic and circuit design layouts",
      "Wireless HC-05 serial communication triggers",
      "Real-time motor driver control algorithms"
    ],
    tech: ["Arduino", "Bluetooth Serial", "C++", "Electronics"],
    category: "Embedded",
    status: "Completed",
    gradient: "from-rose-500/30 to-red-500/20",
  },
  {
    title: "Bootstrap Blog",
    tagline: "Responsive Blogging Layout",
    desc: "A clean, grid-driven blogging homepage mockup demonstrating Bootstrap integration practices.",
    features: [
      "Mobile-first responsive layout structures",
      "Consistent container typography alignment",
      "Modular components including cards and pagination"
    ],
    tech: ["HTML5", "CSS3", "Bootstrap"],
    category: "Frontend",
    status: "Completed",
    gradient: "from-purple-500/30 to-indigo-500/20",
  },
];

const filters = ["All", "Full-Stack", "Frontend", "AI", "Embedded"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Featured Work"
        title={<>Selected <span className="text-gradient">projects</span></>}
        description="A curated catalog of software products and hardware prototypes built using full-stack patterns, algorithms, and AI tools."
      />

      {/* Filter Buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-5 py-2 text-xs font-semibold tracking-wider transition-all duration-300 ${
              filter === f
                ? "border-primary/60 bg-primary/20 text-foreground shadow-[0_0_20px_oklch(0.65_0.21_258/0.4)]"
                : "border-white/10 bg-white/[0.02] text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <motion.div 
        layout
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(104,117,245,0.08)]"
            >
              {/* Card Banner Background */}
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, oklch(0.98 0.005 250 / 0.3), transparent 60%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl font-black text-white/15 select-none transition-transform duration-500 group-hover:scale-110">
                    {p.title.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                </div>
                
                {/* Status Badges */}
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md border border-white/10">
                    {p.category}
                  </span>
                </div>

                <div className="absolute right-4 top-4">
                  {p.status === "Hackathon Winner" ? (
                    <span className="flex items-center gap-1 rounded-full bg-amber-500/20 px-3 py-1 text-[10px] font-bold text-amber-200 backdrop-blur-md border border-amber-500/30">
                      <Sparkles className="h-3 w-3" /> Winner
                    </span>
                  ) : p.status === "Featured" ? (
                    <span className="flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-[10px] font-bold text-primary-foreground backdrop-blur-md border border-primary/30">
                      <Sparkles className="h-3 w-3" /> Featured
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/30">
                      <CheckCircle2 className="h-3 w-3" /> {p.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-primary font-bold uppercase tracking-wider">{p.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">
                  {p.desc}
                </p>

                {/* Features List */}
                <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Key Features</p>
                  <ul className="space-y-1.5">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <ChevronRight className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-white/[0.03] border border-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors hover:border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="mt-6 flex gap-2 border-t border-white/5 pt-4">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-102"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="glass inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold transition-all hover:bg-primary/10 hover:scale-102"
                    >
                      <Github className="h-3.5 w-3.5" /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}