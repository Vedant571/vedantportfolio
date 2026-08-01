import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { sharedStats } from "@/lib/statsData";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
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
    <span ref={ref} className="text-gradient font-display text-4xl font-bold md:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader eyebrow="Accomplishments" title={<>By the <span className="text-gradient">numbers</span></>} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
        {sharedStats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="glass group relative flex flex-col items-center justify-center p-8 rounded-3xl text-center border border-white/10 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              
              {/* Value */}
              <Counter value={s.value} suffix={s.suffix} />
              
              {/* Title */}
              <h4 className="mt-3 font-display text-base font-bold text-foreground tracking-tight">
                {s.title}
              </h4>
              
              {/* Subtitle */}
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {s.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}