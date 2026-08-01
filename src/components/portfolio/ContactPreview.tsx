import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "./Section";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export default function ContactPreview() {
  return (
    <Section id="contact-preview">
      <SectionHeader
        eyebrow="Get In Touch"
        title={
          <>
            Let's build <span className="text-gradient">something great</span>
          </>
        }
        description="Open to internships, freelance work, and collaborations. Let's work together!"
      />

      <div className="mx-auto max-w-3xl mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold tracking-tight">Have a project in mind?</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Whether you need a full-stack developer, want to collaborate on AI projects, or just
              want to say hi — feel free to drop a line!
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:vdntmd@gmail.com",
                  val: "vdntmd@gmail.com",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/vedantmodi2006",
                  val: "Vedant Modi",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <c.icon className="h-4 w-4 text-primary" />
                  <span>{c.val}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-105 hover:shadow-[0_0_30px_oklch(0.65_0.21_258/0.6)]"
            >
              Contact Dashboard
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
