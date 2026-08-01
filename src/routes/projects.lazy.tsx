import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/portfolio/Section";
import Footer from "@/components/portfolio/Footer";
import { Github, ExternalLink, Search, FileText, Award } from "lucide-react";

export const Route = createLazyFileRoute("/projects")({
  component: ProjectsPage,
});

type Project = {
  title: string;
  tagline: string;
  desc: string;
  tech?: string[];
  category: string;
  status: "Completed" | "Featured" | "Hackathon Winner" | "Active";
  demo?: string;
  github?: string;
  gradient: string;
  image?: string;
  gallery?: string[];
  report?: string;
  certificate?: string;
  demoLabel?: string;
};

const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    tagline: "Modern Brand Experience",
    desc: "A modern and fully responsive personal portfolio website designed to showcase my projects, technical skills, academic achievements, certifications, internships, volunteering experience, and professional journey through a clean, interactive, and professional user experience.",
    category: "Portfolio Website",
    status: "Active",
    demo: "https://vedant571.github.io/",
    demoLabel: "Visit Portfolio",
    gradient: "from-cyan-500/30 to-sky-500/20",
    image: "/images/portfolio_screenshot.png",
  },
  {
    title: "Automated Class Scheduling Website",
    tagline: "INNOVEX Hackathon Winner",
    desc: "The Automated Class Scheduling Website is a modern web application that automates timetable generation for educational institutions. It intelligently manages courses, faculty members, classrooms, and scheduling constraints to generate optimized class schedules while minimizing conflicts and improving resource utilization. This project was awarded 1st Place at the INNOVEX Hackathon for its practical impact and innovative approach.",
    tech: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Lucide React",
      "Git"
    ],
    category: "Full-Stack",
    status: "Hackathon Winner",
    gradient: "from-amber-500/30 to-orange-500/20",
    gallery: [
      "/images/scheduler_dashboard.jpg",
      "/images/scheduler_conflicts.jpg",
      "/images/scheduler_grid.jpg"
    ],
    report: "/certificates/class_scheduler_project_report.pdf"
  },
  {
    title: "AuraPic",
    tagline: "Wallpaper Gallery & Portal",
    desc: "AuraPic is a responsive wallpaper gallery and image discovery platform that allows users to browse, preview, and download high-quality wallpapers through a clean and modern interface. The project focuses on responsive design, intuitive navigation, and an optimized user experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    category: "Frontend",
    status: "Completed",
    demo: "https://vedant571.github.io/AuraPic/",
    github: "https://github.com/Vedant571/AuraPic",
    gradient: "from-pink-500/30 to-purple-500/20",
    image: "/images/aurapic_screenshot.png",
  },
  {
    title: "Drum Kit",
    tagline: "Interactive Music Web App",
    desc: "An interactive virtual drum kit built using HTML, CSS, and JavaScript. Users can play different drum sounds by clicking on-screen drum pads or pressing corresponding keyboard keys, providing an engaging and responsive musical experience.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    status: "Completed",
    demo: "https://vedant571.github.io/Drum-Kit/",
    github: "https://github.com/Vedant571/Drum-Kit",
    gradient: "from-indigo-500/30 to-purple-500/20",
    image: "/images/drum_kit_screenshot.png",
  },
  {
    title: "Dice Game",
    tagline: "Interactive 2-Player Game",
    desc: "Dice Game is a simple and interactive two-player web application that generates random dice rolls to determine the winner. The project demonstrates JavaScript DOM manipulation, random number generation, event handling, and dynamic UI updates through a clean and responsive interface.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend Web Application",
    status: "Completed",
    demo: "https://vedant571.github.io/Dice-Project/",
    github: "https://github.com/Vedant571/Dice-Project",
    gradient: "from-teal-500/30 to-cyan-500/20",
    image: "/images/dice_game_screenshot.png",
  },
  {
    title: "Android Controlled Car",
    tagline: "Embedded Robotics Hardware",
    desc: "Android Controlled Car is a Bluetooth-controlled robotic vehicle developed using Arduino Uno and the HC-05 Bluetooth module. The system enables users to wirelessly control the car from an Android smartphone, demonstrating practical applications of embedded systems, robotics, and Internet of Things (IoT) concepts. The project was successfully developed and presented during Technovation'26.",
    tech: [
      "Arduino Uno",
      "Embedded C",
      "Arduino IDE",
      "HC-05 Bluetooth Module",
      "L298N Motor Driver",
      "Android Bluetooth Controller",
      "IoT",
      "Robotics"
    ],
    category: "Embedded",
    status: "Completed",
    gradient: "from-rose-500/30 to-red-500/20",
    image: "/images/android_car.jpg",
    report: "/certificates/android_car_project_report.pdf",
    certificate: "/certificates/technovation_cert.pdf"
  },
];

const filters = ["All", "Full-Stack", "Frontend", "Embedded"] as const;

function ProjectCard({ p }: { p: Project }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const images = p.gallery && p.gallery.length > 0 ? p.gallery : (p.image ? [p.image] : []);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (images.length > 0) {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (images.length > 0) {
      setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="glass group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]"
    >
      {/* 1. Project Screenshot / Mockup Preview */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[16px] bg-black/40 border-b border-white/5 flex flex-col">
        {/* Status Badge */}
        {p.status && (
          <div className="absolute right-3 top-10 z-10">
            {p.title === "Automated Class Scheduling Website" ? (
              <span className="rounded-full bg-amber-500/20 backdrop-blur-md px-3 py-1 text-[9px] font-bold font-mono tracking-wider text-amber-200 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.3)] flex items-center gap-1.5 animate-pulse">
                🥇 Winner – INNOVEX Hackathon 2025
              </span>
            ) : (
              <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-semibold font-mono tracking-wider text-primary border border-primary/20">
                {p.status}
              </span>
            )}
          </div>
        )}

        {/* Browser Mockup Title bar */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-black/30 border-b border-white/5 shrink-0 z-10">
          <div className="flex gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
          </div>
          <div className="mx-auto max-w-[200px] w-full bg-white/[0.03] border border-white/5 rounded px-2 py-0.5 text-[8px] text-muted-foreground/60 font-mono truncate text-center font-bold">
            {p.demo ? p.demo.replace("https://", "") : `github.com/Vedant571/${p.title.toLowerCase().replace(/\s+/g, "-")}`}
          </div>
        </div>

        {/* Browser Mockup Content Area */}
        <div className="w-full flex-1 overflow-hidden relative">
          {images.length > 0 ? (
            <>
              <img
                src={images[currentImgIndex]}
                alt={`${p.title} Screenshot`}
                className={`w-full h-full ${p.title === "AuraPic" ? "object-contain bg-black" : "object-cover"} group-hover:scale-105 transition-transform duration-500 rounded-b-[16px]`}
              />
              
              {/* Carousel controls */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full w-6 h-6 bg-black/60 border border-white/15 text-white flex items-center justify-center text-xs hover:bg-primary transition cursor-pointer z-10"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-6 h-6 bg-black/60 border border-white/15 text-white flex items-center justify-center text-xs hover:bg-primary transition cursor-pointer z-10"
                  >
                    &rarr;
                  </button>
                  {/* Indicator Dots */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImgIndex ? "bg-primary w-3" : "bg-white/40"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${p.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-500 rounded-b-[16px]`}>
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative text-center p-4">
                <h4 className="font-display text-lg font-bold text-white tracking-tight drop-shadow">
                  {p.title}
                </h4>
                <p className="font-mono text-[8px] text-white/50 tracking-wider uppercase mt-1">
                  {p.tagline}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="p-6 flex flex-1 flex-col justify-between space-y-4">
        <div className="space-y-2 text-left">
          <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60 block">
            {p.category}
          </span>
          <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition duration-300">
            {p.title}
          </h3>
          <motion.div
            layout="position"
            className="overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <p className={`text-xs leading-relaxed text-muted-foreground ${isExpanded ? "" : "line-clamp-3"}`}>
              {p.desc}
            </p>
          </motion.div>
          {p.desc.length > 140 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[11px] font-semibold text-primary hover:text-accent tracking-wide transition duration-200 mt-1 cursor-pointer flex items-center gap-0.5 focus:outline-none"
            >
              {isExpanded ? "Show Less ↑" : "Read More →"}
            </button>
          )}
        </div>

        {/* 3. Technology chips */}
        {p.tech && p.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded bg-white/[0.03] border border-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors hover:border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* 4. Action Links */}
        <div className="flex gap-3 pt-2 border-t border-white/5">
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 py-2 text-xs font-semibold text-foreground hover:from-primary/30 hover:to-accent/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition duration-300"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>{p.demoLabel || "Live Demo"}</span>
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/[0.02] border border-white/10 py-2 text-xs font-semibold text-muted-foreground hover:bg-white/[0.05] hover:text-foreground hover:border-white/20 transition duration-300"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
          )}
          {p.report && (
            <a
              href={p.report}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 py-2 text-xs font-semibold text-foreground hover:from-primary/30 hover:to-accent/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition duration-300"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>View Report</span>
            </a>
          )}
          {p.certificate && (
            <a
              href={p.certificate}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/[0.02] border border-white/10 py-2 text-xs font-semibold text-muted-foreground hover:bg-white/[0.05] hover:text-foreground hover:border-white/20 transition duration-300"
            >
              <Award className="h-3.5 w-3.5" />
              <span>Certificate</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory =
      filter === "All" ||
      p.category === filter ||
      (filter === "Frontend" && (p.category === "Portfolio Website" || p.category === "Frontend Web Application"));
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.tech && p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      <Section id="projects-detailed">
        <SectionHeader
          eyebrow="Portfolio Gallery"
          title={
            <>
              Professional <span className="text-gradient">projects</span>
            </>
          }
          description="Explore my complete selection of full-stack systems, hardware integrations, and AI experiments."
        />

        {/* Search and Filters Strip */}
        <div className="mx-auto max-w-5xl mt-12 mb-8 flex flex-col md:flex-row items-center gap-4 justify-between">
          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search title or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:bg-primary/5"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wider transition-all duration-300 ${
                  filter === f
                    ? "border-primary/60 bg-primary/20 text-foreground shadow-[0_0_20px_oklch(0.65_0.21_258/0.4)]"
                    : "border-white/10 bg-white/[0.02] text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Projects */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      <Footer simple />
    </div>
  );
}
