import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Github, Linkedin, Mail, Download, ArrowRight, Sparkles,
  Code2, Cpu, Database, Rocket,
  GraduationCap, Trophy, Briefcase, HeartHandshake,
  BadgeCheck,
} from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.jpg";
import ResumeModal from "./ResumeModal";
import { sharedStats as stats } from "@/lib/statsData";

const roles = [
  "Full-Stack Web Developer",
  "AI Enthusiast",
  "React & Node.js Developer",
  "B.Sc. IT Student",
  "Problem Solver",
];

function StatsCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const display = Number.isInteger(value) ? Math.round(n).toString() : n.toFixed(2);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const marquee = [
  "Full-Stack Development",
  "React.js",
  "Node.js",
  "Express.js",
  "JavaScript (ES6)",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Authentication & OAuth",
  "Prompt Engineering",
];

function TypedRoles() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient font-mono">
      {text}
      <span className="animate-blink ml-0.5 text-primary">|</span>
    </span>
  );
}

function CodeEditor() {
  return (
    <div className="glass overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">developer.tsx</span>
        <Sparkles className="h-3.5 w-3.5 text-accent" />
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-muted-foreground">// building the future, one line at a time</span>
          {"\n"}
          <span className="text-[oklch(0.75_0.18_300)]">const</span>{" "}
          <span className="text-[oklch(0.85_0.16_90)]">developer</span>{" "}
          <span className="text-muted-foreground">=</span> {"{"}
          {"\n  "}
          <span className="text-accent">name</span>: <span className="text-[oklch(0.75_0.15_140)]">"Vedant Modi"</span>,
          {"\n  "}
          <span className="text-accent">role</span>: <span className="text-[oklch(0.75_0.15_140)]">"Full-Stack Developer"</span>,
          {"\n  "}
          <span className="text-accent">stack</span>: [<span className="text-[oklch(0.75_0.15_140)]">"React"</span>, <span className="text-[oklch(0.75_0.15_140)]">"Node"</span>, <span className="text-[oklch(0.75_0.15_140)]">"AI"</span>],
          {"\n  "}
          <span className="text-accent">passion</span>: <span className="text-primary">true</span>,
          {"\n  "}
          <span className="text-accent">learning</span>: <span className="text-primary">"always"</span>,
          {"\n"}
          {"};"}
          {"\n\n"}
          <span className="text-[oklch(0.75_0.18_300)]">export default</span>{" "}
          <span className="text-[oklch(0.85_0.16_90)]">developer</span>;
          <span className="animate-blink ml-1 inline-block h-4 w-2 -mb-0.5 bg-primary" />
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  console.log("[Hero] render");

  useEffect(() => {
    console.log("[Hero] MOUNTED");
    return () => console.log("[Hero] UNMOUNTED");
  }, []);

  return (
    <section id="top" className="relative min-h-[calc(100vh-var(--navbar-top)-var(--navbar-height,70px))] flex items-center justify-center pb-16 md:pb-24">
      {/* Corner glows */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, oklch(0.65 0.21 258 / 0.4), transparent 70%)" }} />
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="text-muted-foreground">Available for opportunities</span>
              <span className="mx-1 h-3 w-px bg-white/10" />
              <span className="text-primary">Mumbai, IN</span>
            </div>
            <p className="mb-3 font-mono text-sm text-primary">// hello, world — I'm</p>
            <h1 className="text-6xl font-bold leading-[1.02] tracking-tight md:text-8xl">
              Vedant <span className="text-gradient">Modi</span>
            </h1>
            <div className="mt-5 flex h-9 items-center gap-2 text-xl md:text-2xl">
              <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                role
              </span>
              <TypedRoles />
            </div>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Building modern web experiences with AI, innovation & clean code. Passionate about
              full-stack development and turning ideas into elegant, high-performance products.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-105 hover:shadow-[0_0_40px_oklch(0.65_0.21_258/0.6)]"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:bg-primary/10"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
              <button
                onClick={() => setIsResumeOpen(true)}
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:bg-primary/10 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                Resume
              </button>
            </div>

            <div className="mt-8 flex items-center gap-3">
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
                  className="glass flex h-11 w-11 items-center justify-center rounded-full transition-all hover:scale-110 hover:bg-primary/20 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <span className="ml-2 h-px w-8 bg-gradient-to-r from-primary/60 to-transparent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Let's connect
              </span>
            </div>

            {/* Stats strip */}
            <div className="glass mt-10 grid grid-cols-4 divide-x divide-white/10 rounded-2xl p-1">
              {stats.map((s) => (
                <div key={s.label} className="px-3 py-3 text-center flex flex-col items-center justify-center">
                  <s.icon className="h-5 w-5 mb-1.5 text-primary shrink-0" aria-hidden="true" />
                  <p className="text-gradient font-display text-2xl font-bold md:text-3xl">
                    <StatsCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <PhotoFrame />
            <div className="mt-6 hidden lg:block">
              <CodeEditor />
            </div>
          </motion.div>
        </div>

        {/* Tech marquee */}
        <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-8 whitespace-nowrap animate-[marquee_28s_linear_infinite]">
            {[...marquee, ...marquee, ...marquee].map((t, i) => (
              <span
                key={i}
                className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground/70"
              >
                {t} <span className="text-primary/50">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:hidden">
          <CodeEditor />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(var(--r)) rotate(0deg); }
          to { transform: rotate(360deg) translateX(var(--r)) rotate(-360deg); }
        }
      `}</style>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}

function PhotoFrame() {
  const orbitIcons = [
    { Icon: Code2, color: "text-primary" },
    { Icon: Cpu, color: "text-accent" },
    { Icon: Database, color: "text-primary" },
    { Icon: Rocket, color: "text-accent" },
  ];

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px]">
      {/* Ambient glow */}
      <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-primary/40 via-accent/20 to-transparent opacity-70 blur-3xl" />
      <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-primary via-accent to-primary/40 opacity-60 blur-md" />

      {/* Gradient border frame */}
      <div className="relative h-full w-full rounded-[2rem] bg-gradient-to-br from-primary via-accent to-primary/40 p-[1.5px]">
        <div className="glass animate-float relative h-full w-full overflow-hidden rounded-[calc(2rem-1.5px)] p-2">
          <img
            src={heroAvatar}
            alt="Vedant Modi — Full-Stack Developer & AI Enthusiast"
            width={1024}
            height={1280}
            className="h-full w-full rounded-[1.7rem] object-cover"
          />
          {/* Corner brackets */}
          {[
            "top-3 left-3 border-t-2 border-l-2 rounded-tl-lg",
            "top-3 right-3 border-t-2 border-r-2 rounded-tr-lg",
            "bottom-3 left-3 border-b-2 border-l-2 rounded-bl-lg",
            "bottom-3 right-3 border-b-2 border-r-2 rounded-br-lg",
          ].map((c, i) => (
            <span key={i} className={`pointer-events-none absolute h-5 w-5 border-primary/70 ${c}`} />
          ))}
          {/* Scan line accent */}
          <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl bg-black/40 px-3 py-2 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
                online · coding
              </span>
            </div>
            <Sparkles className="h-3.5 w-3.5 text-accent" />
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -left-4 top-10 rounded-2xl px-4 py-3 shadow-lg md:-left-8"
      >
        <p className="font-mono text-[10px] text-muted-foreground">CGPA</p>
        <p className="text-gradient text-xl font-bold">8.57</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -right-3 top-1/2 rounded-2xl px-4 py-3 shadow-lg md:-right-8"
      >
        <p className="font-mono text-[10px] text-muted-foreground">Hackathon</p>
        <p className="text-gradient text-xl font-bold">1st 🏆</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 shadow-lg"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-[10px] font-bold text-primary-foreground">
          VM
        </span>
        <span className="font-mono text-[11px] text-foreground/90">@Vedant571</span>
      </motion.div>

      {/* Orbiting tech icons */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {orbitIcons.map(({ Icon, color }, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-10 w-10"
            style={{
              // @ts-ignore
              "--r": "260px",
              animation: `orbit 22s linear infinite`,
              animationDelay: `${-(i * 5.5)}s`,
              marginLeft: "-20px",
              marginTop: "-20px",
            } as React.CSSProperties}
          >
            <div className="glass flex h-10 w-10 items-center justify-center rounded-xl shadow-lg">
              <Icon className={`h-4 w-4 ${color}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}