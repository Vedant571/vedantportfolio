import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { 
  GraduationCap, Trophy, Briefcase, HeartHandshake, 
  MapPin, User, Code2, Sparkles, BookOpen, Quote
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About Me"
        title={<>Building intelligent <span className="text-gradient">digital experiences</span></>}
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
          {/* Who I Am */}
          <motion.div 
            variants={itemVariants}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 text-primary mb-4">
              <User className="h-5 w-5" />
              <h3 className="font-display text-lg font-bold tracking-tight text-foreground uppercase">Who I Am</h3>
            </div>
            <p className="text-base leading-relaxed text-foreground/90">
              Hi, I'm <span className="text-gradient font-bold">Vedant Modi</span> — a B.Sc. Information Technology student who views software engineering not just as code, but as a medium for solving real-world challenges. Passionate about modern web applications, I leverage developer toolkits and AI assistance to design responsive, scalable, and highly performant user interfaces.
            </p>
          </motion.div>

          {/* My Journey */}
          <motion.div 
            variants={itemVariants}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 text-accent mb-4">
              <BookOpen className="h-5 w-5" />
              <h3 className="font-display text-lg font-bold tracking-tight text-foreground uppercase">My Journey</h3>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              My technical path is built on practical learning. I've consolidated my skills through software developer internships, hackathons, and community volunteering. Working on full-stack codebases allowed me to translate academic theory into robust applications, learning the value of collaboration, fast debugging cycles, and clean architectures early in my career.
            </p>
          </motion.div>

          {/* What I Build */}
          <motion.div 
            variants={itemVariants}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 text-primary mb-4">
              <Code2 className="h-5 w-5" />
              <h3 className="font-display text-lg font-bold tracking-tight text-foreground uppercase">What I Build</h3>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              I specialize in frontend and backend environments using JavaScript, React, Node.js, and SQL databases. I enjoy engineering pixel-perfect responsive layouts that scale gracefully, integrating structured REST API systems, and incorporating smart automation loops or AI features to build high-performance products.
            </p>
          </motion.div>

          {/* Current Focus */}
          <motion.div 
            variants={itemVariants}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 text-accent mb-4">
              <Sparkles className="h-5 w-5" />
              <h3 className="font-display text-lg font-bold tracking-tight text-foreground uppercase">Current Focus</h3>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              I am actively polishing my data structures, testing out modern frameworks like Next.js, and exploring how prompts, agents, and artificial intelligence can optimize coding productivity and create premium user experiences.
            </p>
          </motion.div>
        </motion.div>

        {/* Fact Sheets & Personal Philosophy Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 lg:col-span-5"
        >
          {/* Quick Facts Card */}
          <motion.div 
            variants={itemVariants}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <h3 className="font-display text-lg font-bold tracking-tight text-foreground uppercase mb-6">Quick Facts</h3>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Mira Road, Mumbai, IN", label: "Location", color: "text-primary" },
                { icon: GraduationCap, text: "B.Sc. IT · CGPA 8.57", label: "Education", color: "text-accent" },
                { icon: Trophy, text: "1st Place · INNOVEX Hackathon", label: "Recognition", color: "text-primary" },
                { icon: Briefcase, text: "2 Software Internships Done", label: "Experience", color: "text-accent" },
                { icon: HeartHandshake, text: "60+ Community Volunteering Hours", label: "Volunteering", color: "text-primary" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-primary/20">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 ${f.color}`}>
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{f.label}</p>
                    <p className="text-sm font-semibold text-foreground">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Developer Philosophy Card */}
          <motion.div 
            variants={itemVariants}
            className="glass relative overflow-hidden rounded-3xl p-6 md:p-8 shadow-[var(--shadow-elegant)]"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
            <div className="relative">
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="font-display text-lg italic leading-relaxed text-foreground/90">
                "Clean code is not just written; it's designed. The best digital experiences are simple, intuitive, and built with extreme care for the end-user."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-primary to-accent" />
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">Personal Philosophy</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}