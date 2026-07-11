import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { FileText, Download, X, Eye } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Track active element to restore focus on close
    const previousFocusedElement = document.activeElement as HTMLElement;

    // Calculate scrollbar width to prevent layout shifts
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Prevent background body scrolling & layout shift
    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      // Also apply padding to fixed header (navbar) to prevent shifting or resize reflows
      const header = document.querySelector("header");
      if (header) {
        header.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    // Set initial focus inside the modal
    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, a[href]'
    );
    if (focusableElements && focusableElements.length > 0) {
      // Focus the first button (View Resume)
      focusableElements[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const focusables = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href]'
        );
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
      document.body.style.paddingRight = "";
      
      const header = document.querySelector("header");
      if (header) {
        header.style.paddingRight = "";
      }

      window.removeEventListener("keydown", handleKeyDown);
      if (previousFocusedElement) {
        previousFocusedElement.focus();
      }
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
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

          {/* Modal Card */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-primary/20 p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.30),0_4px_12px_rgba(0,0,0,0.15),0_0_40px_rgba(104,117,245,0.15)] md:p-8"
            style={{
              background: "rgba(10, 10, 15, 0.88)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
            }}
          >
            {/* Top Right Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-all hover:bg-white/10 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Title */}
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
              Resume
            </h3>

            {/* Premium PDF Preview Card */}
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                <FileText className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-mono text-sm font-semibold text-foreground">
                  Vedant_Modi_Resume.pdf
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  PDF Document • ~80 KB • 1 Page
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              View the resume online or download a copy for later.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="/resume/Vedant_Modi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-102 hover:shadow-[0_0_30px_oklch(0.65_0.21_258/0.6)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
              >
                <Eye className="h-4 w-4" />
                View Resume
              </a>

              <a
                href="/resume/Vedant_Modi_Resume.pdf"
                download="Vedant_Modi_Resume.pdf"
                onClick={onClose}
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:bg-primary/10 hover:scale-102 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>

              <button
                onClick={onClose}
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground transition-all hover:bg-white/5 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
              >
                ✕ Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
