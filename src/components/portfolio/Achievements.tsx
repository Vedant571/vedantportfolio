import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Section, SectionHeader } from "./Section";

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
    <span ref={ref} className="text-gradient font-display text-5xl font-bold md:text-6xl">
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 8.57, suffix: "", label: "Current CGPA" },
  { value: 1, suffix: "st", label: "INNOVEX Hackathon" },
  { value: 2, suffix: "+", label: "Software Internships" },
  { value: 60, suffix: "+", label: "Community Hours" },
];

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader eyebrow="Achievements" title={<>By the <span className="text-gradient">numbers</span></>} />
      <div className="glass rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}