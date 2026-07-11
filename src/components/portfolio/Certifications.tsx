import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Award, Eye, X, CheckCircle, ExternalLink, Calendar, ShieldCheck } from "lucide-react";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
};

const certs: Certificate[] = [
  { 
    title: "Full-Stack Web Development Bootcamp", 
    issuer: "Angela Yu · Udemy", 
    date: "Aug 2024",
    credentialId: "UC-5d8c3683-11a5-4eb8-b997-758bb5c1103f",
    verifyUrl: "https://www.udemy.com/certificate/UC-5d8c3683-11a5-4eb8-b997-758bb5c1103f/"
  },
  { 
    title: "AWS Summit Mumbai 2026 Participation", 
    issuer: "Amazon Web Services", 
    date: "Feb 2026",
    credentialId: "AWS-MUM-2026-9283",
    verifyUrl: "https://aws.amazon.com/summits/mumbai/"
  },
  { 
    title: "Young Industry Enthusiast — Retail", 
    issuer: "Industry Program", 
    date: "Mar 2025",
    credentialId: "YIE-RET-2025-019",
  },
  { 
    title: "Technovation — Android Controlled Car", 
    issuer: "Technovation Challenge", 
    date: "Oct 2024",
    credentialId: "TECH-CAR-2024-88",
  },
];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <Section id="certifications">
      <SectionHeader eyebrow="Credentials" title={<>Certifications & <span className="text-gradient">recognitions</span></>} />
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            onClick={() => setActiveCert(c)}
            className="glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_15px_40px_rgba(104,117,245,0.08)] cursor-pointer"
          >
            {/* Background Glow */}
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
            
            <div className="relative flex flex-col h-full justify-between">
              <div>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-[0_0_15px_rgba(104,117,245,0.15)] group-hover:scale-110 transition-transform">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{c.issuer}</p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="font-mono text-[10px] text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-primary" />
                  {c.date}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary/80 group-hover:text-primary">
                  <Eye className="h-3.5 w-3.5" />
                  View details
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Modal */}
      <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </Section>
  );
}

function CertificateModal({ cert, onClose }: { cert: Certificate | null; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cert) return;

    // Lock body scrolling
    document.body.style.overflow = "hidden";

    // Track active element
    const previousFocusedElement = document.activeElement as HTMLElement;

    // Focus first element in modal
    const focusable = modalRef.current?.querySelectorAll<HTMLElement>('button, a[href]');
    if (focusable && focusable.length > 0) {
      focusable[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const focusables = modalRef.current?.querySelectorAll<HTMLElement>('button, a[href]');
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      if (previousFocusedElement) {
        previousFocusedElement.focus();
      }
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container Card */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-primary/20 p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.30),0_4_12px_rgba(0,0,0,0.15),0_0_40px_rgba(104,117,245,0.15)]"
            style={{
              background: "rgba(10, 10, 15, 0.92)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
            }}
          >
            {/* Top Close Icon */}
            <button
              onClick={onClose}
              aria-label="Close details"
              className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-all hover:bg-white/10 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary shadow-[0_0_10px_rgba(104,117,245,0.15)]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-primary font-bold">Credential Details</p>
                <h4 className="font-display text-lg font-bold text-foreground leading-tight">{cert.issuer}</h4>
              </div>
            </div>

            {/* Digital Certificate Verification Mockup Card */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-left space-y-4">
              <div className="flex justify-between items-start border-b border-white/5 pb-3">
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">Recipient</p>
                  <p className="text-sm font-bold text-foreground mt-0.5">Vedant Modi</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">Status</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full mt-0.5">
                    <CheckCircle className="h-3 w-3 shrink-0" /> Verified
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">Certification Name</p>
                <p className="text-sm font-semibold text-foreground mt-0.5 leading-snug">{cert.title}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">Issue Date</p>
                  <p className="text-xs font-semibold text-foreground mt-0.5">{cert.date}</p>
                </div>
                {cert.credentialId && (
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">Credential ID</p>
                    <p className="font-mono text-[10px] text-foreground mt-0.5 truncate select-all" title={cert.credentialId}>
                      {cert.credentialId}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {cert.verifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-102"
                >
                  <ExternalLink className="h-4 w-4" />
                  Verify Credential
                </a>
              ) : (
                <div className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.01] text-muted-foreground px-6 py-3.5 text-xs font-semibold select-none">
                  Verification Link Unavailable
                </div>
              )}
              <button
                onClick={onClose}
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-muted-foreground transition-all hover:bg-white/5 hover:text-foreground"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}