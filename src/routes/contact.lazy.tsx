import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "@/components/portfolio/Contact";
import { Section, SectionHeader } from "@/components/portfolio/Section";
import Footer from "@/components/portfolio/Footer";
import {
  HelpCircle,
  ChevronDown,
  Clock,
  MapPin,
  Mail,
  Phone,
  FileText,
  Download,
} from "lucide-react";

export const Route = createLazyFileRoute("/contact")({
  component: ContactPage,
});

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: "Are you available for remote work or internships?",
    a: "Yes, I am actively looking for software developer internships and remote opportunities. I am comfortable working across different timezones.",
  },
  {
    q: "What is your primary development stack?",
    a: "My primary stack includes React, Node.js, Express, MongoDB, PostgreSQL, and TypeScript. I also build embedded software with C++ and Arduino.",
  },
  {
    q: "Can you start immediately?",
    a: "Yes! Depending on the opportunity size and requirements, I am ready to start immediately.",
  },
  {
    q: "Do you take on freelance projects?",
    a: "Absolutely. I design and build premium personal portfolios, landing pages, and business applications for clients.",
  },
];

function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="glass rounded-2xl border border-white/5 bg-white/[0.01] overflow-hidden transition-all hover:border-primary/20"
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left border-none outline-none cursor-pointer"
            >
              <span className="font-display text-sm font-bold text-foreground flex items-center gap-3">
                <HelpCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                {faq.q}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-1 text-xs leading-relaxed text-muted-foreground border-t border-white/5 bg-white/[0.01]">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function ContactPage() {
  return (
    <div className="pt-20">
      {/* Renders core contact form & info card */}
      <Contact />

      <Section id="faq-availability">
        <SectionHeader
          eyebrow="Availability & FAQ"
          title={
            <>
              Answers & <span className="text-gradient">availability</span>
            </>
          }
          description="Common questions about my work model, core stack, and scheduling details."
        />

        <div className="grid gap-8 lg:grid-cols-12 mt-12 max-w-5xl mx-auto">
          {/* FAQ Accordion Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-lg font-bold uppercase text-foreground ml-2">
              Frequently Asked Questions
            </h3>
            <FAQAccordion />
          </div>

          {/* Availability & Map Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability details card */}
            <div className="glass rounded-3xl p-6 relative overflow-hidden transition-all hover:border-primary/20">
              <div className="flex items-center gap-3 text-primary mb-4">
                <Clock className="h-5 w-5" />
                <h3 className="font-display text-base font-bold tracking-tight text-foreground uppercase">
                  Availability Status
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I am currently open to part-time or full-time developer internships and contract freelance projects.
              </p>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-500/10 border border-green-500/20 p-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                <span className="text-xs font-semibold text-green-300">
                  Ready to start immediately
                </span>
              </div>
            </div>

            {/* Styled Map Card placeholder */}
            <div className="glass rounded-3xl p-6 relative overflow-hidden h-[240px] flex flex-col justify-between group transition-all hover:border-accent/20">
              {/* Map background grid visualization */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.18),rgba(255,255,255,0))] opacity-40" />
              <div className="absolute inset-0 grid grid-cols-12 gap-1 p-2 pointer-events-none opacity-20 [mask-image:radial-gradient(circle,black,transparent)]">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="h-full border border-white/10 rounded" />
                ))}
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 text-accent">
                  <MapPin className="h-4.5 w-4.5" />
                  <h4 className="font-display text-sm font-bold uppercase tracking-wide">
                    Location
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Mira Road, Mumbai, Maharashtra, India
                </p>
              </div>

              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary animate-pulse-glow mx-auto my-auto shadow-[0_0_20px_oklch(0.65_0.21_258/0.4)]">
                <span className="text-[10px] font-bold font-mono tracking-widest">MUMBAI</span>
              </div>

              <div className="relative text-[10px] font-mono text-muted-foreground flex justify-between border-t border-white/5 pt-3 mt-2">
                <span>LAT: 19.2813° N</span>
                <span>LNG: 72.8554° E</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer simple />
    </div>
  );
}
