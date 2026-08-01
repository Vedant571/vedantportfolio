import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Footer({ simple = false }: { simple?: boolean }) {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            VM
          </Link>
          <div>
            <p className="font-display text-sm font-semibold">Vedant Modi</p>
            <p className="text-xs text-muted-foreground">
              Designed & developed by Vedant Modi · © {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {!simple && (
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/Vedant571", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vedantmodi2006", label: "LinkedIn" },
              { icon: Mail, href: "mailto:vdntmd@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="glass flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:bg-primary/20 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="glass ml-2 flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:bg-primary/20 hover:text-primary cursor-pointer border-none outline-none"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}