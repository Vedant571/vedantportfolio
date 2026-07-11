import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { 
  Layout, Server, Database, Bot, Wrench, Terminal 
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Layout,
    description: "Building interactive, responsive user interfaces",
    items: ["React.js", "Next.js", "Bootstrap", "jQuery", "DOM Manipulation", "HTML5", "CSS3", "Responsive Design"],
    color: "from-blue-500/20 to-indigo-500/10",
  },
  {
    title: "Backend",
    icon: Server,
    description: "Developing scalable server environments and APIs",
    items: ["Node.js", "Express.js", "REST APIs", "EJS", "JWT Auth", "Middleware"],
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Database",
    icon: Database,
    description: "Designing relational and document schemas",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQL Queries", "Schema Design"],
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    title: "AI",
    icon: Bot,
    description: "Integrating prompt engineering & automation loops",
    items: ["ChatGPT", "Gemini", "Claude", "Cursor AI", "Copilot", "Prompt Engineering"],
    color: "from-purple-500/20 to-fuchsia-500/10",
  },
  {
    title: "Tools",
    icon: Wrench,
    description: "Using modern developer toolkits & platforms",
    items: ["Git", "GitHub", "VS Code", "npm", "Bun", "Vite", "Word", "Excel"],
    color: "from-cyan-500/20 to-sky-500/10",
  },
  {
    title: "Languages",
    icon: Terminal,
    description: "Writing clean, algorithmic solutions",
    items: ["JavaScript", "Python", "Core Java", "C++", "C", "HTML/CSS", "SQL"],
    color: "from-rose-500/20 to-pink-500/10",
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title={<>Tools & <span className="text-gradient">technologies</span></>}
        description="A modern tech stack spanning full-stack engineering, database systems, AI tools, and languages."
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={itemVariants}
            className="glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_15px_40px_rgba(104,117,245,0.08)]"
          >
            {/* Ambient Background Gradient Glow */}
            <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${cat.color} opacity-40 blur-3xl transition-opacity group-hover:opacity-75`} />

            <div className="relative">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-[0_0_15px_rgba(104,117,245,0.15)] transition-transform group-hover:scale-110">
                  <cat.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {cat.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                    Category
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                {cat.description}
              </p>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-foreground/80 transition-all hover:scale-102 hover:border-primary/30 hover:bg-primary/10 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}