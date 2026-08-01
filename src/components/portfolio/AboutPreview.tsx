import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "./Section";
import { User, MapPin, GraduationCap, Trophy, Briefcase, ArrowRight } from "lucide-react";

export default function AboutPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section id="about-preview">
      <SectionHeader
        eyebrow="Quick Introduction"
        title={
          <>
            Who I am & <span className="text-gradient">what I build</span>
          </>
        }
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Storytelling Narrative Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 lg:col-span-7"
        >
          <motion.div variants={itemVariants} className="glass rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3 text-primary mb-4">
              <User className="h-5 w-5" />
              <h3 className="font-display text-lg font-bold tracking-tight text-foreground uppercase">
                Who I Am
              </h3>
            </div>
            <p className="text-base leading-relaxed text-foreground/90">
              Hi, I'm <span className="text-gradient font-bold">Vedant Modi</span> — a B.Sc.
              Information Technology student who views software engineering not just as code, but as
              a medium for solving real-world challenges. Passionate about modern web
              applications, I leverage developer toolkits and AI assistance to design responsive,
              scalable, and highly performant user interfaces.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-start pt-2">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-105 hover:shadow-[0_0_30px_oklch(0.65_0.21_258/0.6)]"
            >
              Read Full Biography & Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Fact Sheets Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 lg:col-span-5"
        >
          <motion.div variants={itemVariants} className="glass rounded-3xl p-6 md:p-8">
            <h3 className="font-display text-lg font-bold tracking-tight text-foreground uppercase mb-6">
              Quick Facts
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "Mira Road, Mumbai, IN",
                  label: "Location",
                  color: "text-primary",
                },
                {
                  icon: GraduationCap,
                  text: "B.Sc. IT · CGPA 8.57",
                  label: "Education",
                  color: "text-accent",
                },
                {
                  icon: Trophy,
                  text: "1st Place · INNOVEX Hackathon",
                  label: "Recognition",
                  color: "text-primary",
                },
                {
                  icon: Briefcase,
                  text: "2 Software Internships Done",
                  label: "Experience",
                  color: "text-accent",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-primary/20"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 ${f.color}`}
                  >
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {f.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
