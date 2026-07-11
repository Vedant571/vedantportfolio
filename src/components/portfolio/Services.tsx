import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import {
  Code, Palette, Smartphone, Globe, Building2, Link as LinkIcon,
  Database, Bot, Zap, Rocket, Wrench, TrendingUp, Share2, Film,
} from "lucide-react";

const services = [
  { icon: Code, title: "Full-Stack Development", desc: "End-to-end web apps with React, Node & MongoDB." },
  { icon: Palette, title: "Frontend Development", desc: "Beautiful, interactive UIs with pixel precision." },
  { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first sites that scale flawlessly." },
  { icon: Globe, title: "Portfolio Websites", desc: "Premium personal brand experiences." },
  { icon: Building2, title: "Business Websites", desc: "Conversion-focused sites for businesses." },
  { icon: LinkIcon, title: "REST API Development", desc: "Secure, scalable APIs with Express." },
  { icon: Database, title: "Database Design", desc: "SQL & NoSQL schemas that perform." },
  { icon: Bot, title: "AI-Powered Apps", desc: "LLM-driven features and integrations." },
  { icon: Zap, title: "Website Optimization", desc: "Speed, SEO & Lighthouse-grade polish." },
  { icon: Rocket, title: "GitHub Deployment", desc: "CI/CD, GitHub Pages & modern hosting." },
  { icon: Wrench, title: "Maintenance", desc: "Reliable updates and long-term support." },
  { icon: TrendingUp, title: "Digital Marketing", desc: "SEO fundamentals & growth support." },
  { icon: Share2, title: "Social Content", desc: "Content creation for social platforms." },
  { icon: Film, title: "Video Editing", desc: "Clean edits with DaVinci Resolve." },
];

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title={<>What I <span className="text-gradient">deliver</span></>}
        description="Premium services blending design, development, and AI."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
            className="glass group relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold">{s.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}