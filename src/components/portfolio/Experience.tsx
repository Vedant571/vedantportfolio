import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    role: "Web Development Intern",
    org: "CodSoft",
    period: "Jul 2025 — Aug 2025",
    location: "Remote",
    tags: ["React", "JavaScript", "HTML5", "CSS3", "UI/UX", "Debugging"],
    points: [
      "Developed interactive and responsive web applications matching clean frontend design patterns.",
      "Engineered user-centric interfaces with JavaScript, enhancing page speeds and browser responsiveness.",
      "Optimized cross-browser rendering, aligning layouts with mobile-first specifications."
    ],
  },
  {
    icon: Award,
    role: "Community Engagement Volunteer",
    org: "Raichel Joseph Foundation",
    period: "Sep 2025",
    location: "Mumbai, IN",
    tags: ["Microsoft Word", "Microsoft Excel", "Mentoring", "Teaching"],
    points: [
      "Completed 60 hours of volunteer community service and educational mentoring for young students.",
      "Instructed classes on basic document creation and data layout spreadsheets.",
      "Developed communication, leadership, and public speaking skills through group management."
    ],
  },
];

export default function Experience() {
  const lineVariants = {
    hidden: { scaleY: 0 },
    show: { 
      scaleY: 1, 
      transition: { duration: 1.2, ease: "easeInOut" } 
    }
  };

  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title={<>Real-world <span className="text-gradient">impact</span></>} />
      
      <div className="relative mx-auto max-w-4xl px-4 md:px-0 mt-16">
        {/* Scroll-animated vertical line */}
        <motion.div 
          variants={lineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent origin-top md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-12">
          {items.map((it, i) => (
            <div
              key={it.role}
              className={`relative flex flex-col md:flex-row md:justify-between items-start ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Pulsing glow timeline node */}
              <div className="absolute left-4 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_0_20px_oklch(0.65_0.21_258/0.5)] md:left-1/2 md:-translate-x-1/2">
                <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping opacity-75" />
                <span className="relative z-10 flex h-3 w-3 rounded-full bg-foreground" />
              </div>

              {/* Timeline Glass Card */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`glass ml-12 rounded-3xl p-6 md:p-8 md:ml-0 md:w-[45%] transition-all hover:border-primary/40 hover:shadow-[0_0_30px_rgba(104,117,245,0.05)] ${
                  i % 2 === 0 ? "text-left" : "text-left"
                }`}
              >
                {/* Period & Place */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-primary">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {it.period}
                  </span>
                  <span className="text-white/10">•</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {it.location}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  {it.role}
                </h3>
                
                {/* Organization */}
                <p className="mt-1 text-sm font-semibold text-accent">{it.org}</p>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {it.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Chips */}
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                  {it.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors hover:border-primary/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Spacing spacer for desktop grid symmetry */}
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}