import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Trophy, GraduationCap, HeartHandshake, Briefcase, BookOpen } from "lucide-react";

const highlights = [
  { icon: Trophy, text: "1st Rank — INNOVEX Hackathon (SIH Internal Qualifier)" },
  { icon: GraduationCap, text: "86.17% in Higher Secondary Certificate (HSC)" },
  { icon: HeartHandshake, text: "Completed 60 hours community engagement" },
  { icon: Briefcase, text: "Web Development internship at CodSoft" },
];

const courses = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Core Java",
  "Web Technologies",
  "Networking Technology",
  "Embedded Systems",
  "Software Engineering",
  "Python Programming",
  "Multimedia & Animation",
];

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader eyebrow="Education" title={<>Academic <span className="text-gradient">journey</span></>} />
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-3xl p-8 lg:col-span-3"
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> 2024 — 2027
            </div>
            <h3 className="text-2xl font-bold md:text-3xl">
              B.Sc. Information Technology
            </h3>
            <p className="mt-2 text-muted-foreground">
              SVKM's Usha Pravin Gandhi College of Arts, Science & Commerce · Mumbai
            </p>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Current CGPA
              </span>
              <span className="text-gradient text-4xl font-bold">8.57</span>
              <span className="text-sm text-muted-foreground">/ 10</span>
            </div>

            <div className="mt-8 space-y-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <h.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm">{h.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-8 lg:col-span-2"
        >
          <div className="mb-4 flex items-center gap-2 text-primary">
            <BookOpen className="h-5 w-5" />
            <h3 className="text-lg font-semibold text-foreground">Relevant Coursework</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {courses.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}