import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/portfolio/Section";
import Footer from "@/components/portfolio/Footer";
import { FileText, Download, ExternalLink, Printer, Sparkles } from "lucide-react";

export const Route = createLazyFileRoute("/resume")({
  component: ResumePage,
});

function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-20 print:pt-0">
      <Section id="resume-detailed" className="print:p-0">
        <SectionHeader
          eyebrow="Curriculum Vitae"
          title={
            <>
              Professional <span className="text-gradient">resume</span>
            </>
          }
          description="View my detailed resume online or download a high-resolution PDF copy for your records."
          className="print:hidden"
        />

        {/* Action Strip */}
        <div className="mx-auto max-w-4xl mt-8 mb-6 flex flex-wrap gap-3 justify-end print:hidden">
          <button
            onClick={handlePrint}
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all hover:bg-white/10"
          >
            <Printer className="h-4 w-4" /> Print Resume
          </button>
          <a
            href="/resume/Vedant_Modi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all hover:bg-white/10"
          >
            <ExternalLink className="h-4 w-4" /> Open In New Tab
          </a>
          <a
            href="/resume/Vedant_Modi_Resume.pdf"
            download="Vedant_Modi_Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-105 hover:shadow-[0_0_30px_oklch(0.65_0.21_258/0.6)]"
          >
            <Download className="h-4 w-4" /> Download PDF
          </a>
        </div>

        {/* Resume Content Box */}
        <div className="mx-auto max-w-4xl">
          {/* Iframe PDF Viewer (Hidden on Mobile) */}
          <div className="hidden md:block h-[840px] rounded-3xl border border-white/10 overflow-hidden glass print:border-none print:h-auto print:rounded-none">
            <iframe
              src="/resume/Vedant_Modi_Resume.pdf"
              title="Vedant Modi Resume"
              width="100%"
              height="100%"
              className="border-none w-full h-full print:hidden"
            />
          </div>

          {/* Interactive Mobile / Fallback view */}
          <div className="md:hidden glass rounded-3xl p-6 space-y-8 print:block print:glass-none print:p-0 print:border-none">
            {/* Header branding */}
            <div className="border-b border-white/10 pb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">Vedant Modi</h2>
                <p className="font-mono text-xs text-primary font-bold uppercase tracking-wider mt-1">
                  Full-Stack Web Developer & AI Enthusiast
                </p>
                <p className="text-xs text-muted-foreground mt-1">Mumbai, Maharashtra, India</p>
              </div>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground shrink-0 select-none">
                VM
              </div>
            </div>

            {/* Profile summary */}
            <div>
              <h3 className="font-display font-bold text-sm text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" /> Profile Summary
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                B.Sc. Information Technology student focused on full-stack web applications, clean API layouts, and responsive designs. Experienced in React, Node.js, databases, and AI tooling workflows. Highly proactive problem solver with hackathon winner credentials.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-display font-bold text-sm text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                🎓 Education
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-xs font-semibold text-foreground">B.Sc. Information Technology</h4>
                    <span className="font-mono text-[10px] text-muted-foreground">2024 — 2027</span>
                  </div>
                  <p className="text-xs text-primary font-semibold mt-0.5">
                    SVKM's Usha Pravin Gandhi College of Arts, Science & Commerce, Mumbai
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1">Current CGPA: 8.57 / 10</p>
                </div>
                <div className="border-t border-white/5 pt-2">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-xs font-semibold text-foreground">HSC (Higher Secondary)</h4>
                    <span className="font-mono text-[10px] text-muted-foreground">Completed 2024</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">Scored 86.16% (Thakur Ramnarayan College)</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-display font-bold text-sm text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                💼 Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-xs font-semibold text-foreground">Web Development Intern</h4>
                    <span className="font-mono text-[10px] text-muted-foreground">Mar 2025 — Apr 2025</span>
                  </div>
                  <p className="text-xs text-accent font-semibold mt-0.5">CodSoft · Remote</p>
                  <ul className="list-disc list-inside mt-2 text-[11px] text-muted-foreground space-y-1">
                    <li>Developed responsive websites using HTML, CSS, JavaScript, and Bootstrap</li>
                    <li>Strengthened frontend development, debugging, and problem-solving skills</li>
                  </ul>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-xs font-semibold text-foreground">Community Service Volunteer</h4>
                    <span className="font-mono text-[10px] text-muted-foreground">Jan 2026 — Feb 2026</span>
                  </div>
                  <p className="text-xs text-accent font-semibold mt-0.5">Raichel Joseph Foundation (RJF), Mumbai</p>
                  <ul className="list-disc list-inside mt-2 text-[11px] text-muted-foreground space-y-1">
                    <li>Completed 60 hours of community service at Saksham Vocational Centre</li>
                    <li>Assisted students in learning Microsoft Word, Excel, formatting and essential computer skills</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="font-display font-bold text-sm text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                🛠 Technical Skills
              </h3>
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-3 gap-1">
                  <span className="font-semibold text-foreground">Frontend:</span>
                  <span className="col-span-2 text-muted-foreground">React, Next.js, HTML5, CSS3, Tailwind</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <span className="font-semibold text-foreground">Backend:</span>
                  <span className="col-span-2 text-muted-foreground">Node.js, Express, REST APIs, JWT Auth</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <span className="font-semibold text-foreground">Languages:</span>
                  <span className="col-span-2 text-muted-foreground">JavaScript, Python, Core Java, C++, SQL</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <span className="font-semibold text-foreground">Databases:</span>
                  <span className="col-span-2 text-muted-foreground">MongoDB, PostgreSQL, MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer simple />
    </div>
  );
}
