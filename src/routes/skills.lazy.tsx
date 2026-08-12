import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section } from "@/components/portfolio/Section";
import Footer from "@/components/portfolio/Footer";
import {
  Layout,
  Server,
  Database,
  Bot,
  Wrench,
  Terminal,
  Cloud,
  MessageSquare,
  Cpu,
  Trophy,
  Users,
  Compass,
  Clock,
  Award,
  BookOpen,
  GitBranch,
  Settings2,
  RefreshCw,
  Globe,
  ArrowLeftRight,
  TrendingUp,
  Search,
  Lock,
  KeyRound,
  Cookie,
  Upload,
  Link2,
  Anchor,
  Milestone,
  Presentation,
  Target,
  FileCode,
  Shuffle,
} from "lucide-react";

export const Route = createLazyFileRoute("/skills")({
  component: SkillsDashboard,
});

type SkillItem = {
  name: string;
};

type SkillCategory = {
  title: string;
  icon: any;
  color: string;
  skills: SkillItem[];
};

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Layout,
    color: "from-blue-500/20 to-indigo-500/10",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "DOM Manipulation" },
      { name: "Bootstrap 5" },
      { name: "Tailwind CSS" },
      { name: "jQuery" },
      { name: "React.js" },
      { name: "React Hooks" },
      { name: "React Router" },
      { name: "EJS" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500/20 to-teal-500/10",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST API" },
      { name: "Passport.js" },
      { name: "JWT" },
      { name: "OAuth 2.0" },
      { name: "Authentication" },
      { name: "Authorization" },
      { name: "Session Management" },
      { name: "Multer" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Terminal,
    color: "from-rose-500/20 to-pink-500/10",
    skills: [
      { name: "JavaScript" },
      { name: "Python" },
      { name: "Core Java" },
      { name: "C++" },
      { name: "C" },
      { name: "SQL" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-amber-500/20 to-orange-500/10",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MySQL" },
    ],
  },
  {
    title: "Cloud, DevOps & Development Tools",
    icon: Cloud,
    color: "from-cyan-500/20 to-sky-500/10",
    skills: [
      { name: "AWS" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitHub Actions" },
      { name: "GitHub Pages" },
      { name: "Visual Studio Code" },
      { name: "Postman" },
      { name: "npm" },
      { name: "Bun" },
      { name: "Vite" },
      { name: "Netlify" },
      { name: "Vercel" },
      { name: "Render" },
    ],
  },
  {
    title: "AI Developer Tools",
    icon: Bot,
    color: "from-purple-500/20 to-fuchsia-500/10",
    skills: [
      { name: "ChatGPT" },
      { name: "Claude" },
      { name: "Gemini" },
      { name: "Antigravity" },
      { name: "Cursor AI" },
      { name: "GitHub Copilot" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    title: "Design & Creative Tools",
    icon: Layout,
    color: "from-indigo-500/20 to-blue-500/10",
    skills: [
      { name: "Figma" },
      { name: "Canva" },
      { name: "CapCut" },
      { name: "DaVinci Resolve" },
    ],
  },
  {
    title: "Productivity Tools",
    icon: Wrench,
    color: "from-teal-500/20 to-emerald-500/10",
    skills: [
      { name: "Microsoft Excel" },
      { name: "Microsoft Word" },
      { name: "Microsoft PowerPoint" },
      { name: "Microsoft Outlook" },
      { name: "Google Sheets" },
      { name: "Google Docs" },
      { name: "Google Slides" },
      { name: "Google Drive" },
      { name: "Google Forms" },
    ],
  },
  {
    title: "Soft Skills",
    icon: MessageSquare,
    color: "from-indigo-500/20 to-purple-500/10",
    skills: [
      { name: "Problem Solving" },
      { name: "Communication" },
      { name: "Team Collaboration" },
      { name: "Leadership" },
      { name: "Critical Thinking" },
      { name: "Time Management" },
      { name: "Adaptability" },
      { name: "Analytical Thinking" },
      { name: "Attention to Detail" },
      { name: "Quick Learning" },
    ],
  },
];

const learningSkills: SkillItem[] = [
  { name: "Docker" },
  { name: "TypeScript" },
  { name: "Kubernetes" },
  { name: "Advanced AWS" },
];

// Reusable SVG Mapping component for tech logos with official brand colors
function SkillLogo({ name, className = "w-14 h-14 text-primary" }: { name: string; className?: string }) {
  const norm = name.toLowerCase();

  // Tech SVGs with official colors
  if (norm.includes("react.js")) {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1.2" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }
  if (norm.includes("react hooks") || norm.includes("react router")) {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none" opacity="0.8">
        <circle cx="0" cy="0" r="2.05" fill="#38bdf8"/>
        <g stroke="#38bdf8" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }
  if (norm.includes("next")) {
    return (
      <svg viewBox="0 0 180 180" className={className} fill="none">
        <mask id="next-mask">
          <circle cx="90" cy="90" r="90" fill="white" />
        </mask>
        <circle cx="90" cy="90" r="90" fill="black" />
        <g mask="url(#next-mask)">
          <path d="M149.508 157.52L69.142 54H54v72h14.4V72.16l68.8 88.64a90 90 0 0012.308-3.28z" fill="white" />
          <path d="M115.2 54h14.4v72h-14.4z" fill="white" />
        </g>
      </svg>
    );
  }
  if (norm.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.59 15.006 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.21 14.996 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.79 9.006 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.41 8.996 12 6.001 12z" fill="#38bdf8" />
      </svg>
    );
  }
  if (norm.includes("bootstrap")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#7952b3]`}>
        <path d="M4 0h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4.07 6.046v11.908h4.593c2.25 0 3.738-1.077 3.738-2.908 0-1.238-.855-2.292-2.122-2.583v-.092c1.026-.292 1.77-1.26 1.77-2.384 0-1.688-1.373-2.941-3.486-2.941H8.07zm2.463 2.193h1.838c1.026 0 1.587.49 1.587 1.206 0 .764-.627 1.258-1.748 1.258h-1.677V8.239zm0 4.673h2.083c1.196 0 1.849.52 1.849 1.343 0 .878-.718 1.408-2.022 1.408h-1.91v-2.751z" />
      </svg>
    );
  }
  if (norm.includes("jquery")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#0769ad]`}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 13.9l-2.7-2.7 1-1 1.7 1.7 4.1-4.1 1 1-5.1 5.1z" />
      </svg>
    );
  }
  if (norm.includes("ejs")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#a91e50" rx="4" />
        <text x="12" y="15" fontSize="8" fontWeight="bold" fontFamily="monospace" fill="white" textAnchor="middle">&lt;%&gt;</text>
      </svg>
    );
  }
  if (norm.includes("html5") || norm === "html") {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2 1.5 0zm16.7 6.1H7.8l.2 2.6h8.2l-.3 3.4-3.9 1.1-3.9-1.1-.3-2.8H5.3l.5 5.8 6.2 1.7 6.2-1.7.8-8.9-.1-1.2z" fill="#e34f26" />
      </svg>
    );
  }
  if (norm.includes("css3") || norm === "css") {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2 1.5 0zm16.7 6.1H7.8l.2 2.6h8.2l-.3 3.4-3.9 1.1-3.9-1.1-.3-2.8H5.3l.5 5.8 6.2 1.7 6.2-1.7.8-8.9-.1-1.2z" fill="#1572b6" />
      </svg>
    );
  }
  if (norm.includes("javascript") || norm === "js") {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <rect width="24" height="24" fill="#f7df1e" rx="4" />
        <path d="M20 18.2c0 1.2-.8 1.8-2 1.8-1 0-1.8-.4-2-.9l1.1-.7c.2.4.5.6.9.6.4 0 .6-.2.6-.5v-4.9h1.4v4.6zm-5.7-1.1c-.2.5-.7.8-1.3.8-.7 0-1.2-.5-1.2-1.3 0-.9.6-1.3 1.2-1.3.6 0 1 .3 1.2.8l1.1-.7c-.4-.7-1.2-1.2-2.3-1.2-1.6 0-2.6 1.1-2.6 2.5s1 2.5 2.6 2.5c1.1 0 2-.6 2.3-1.4l-1-.7z" fill="black" />
      </svg>
    );
  }
  if (norm.includes("typescript") || norm === "ts") {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <rect width="24" height="24" fill="#3178c6" rx="4" />
        <text x="5" y="16" fontSize="12" fontWeight="bold" fontFamily="sans-serif" fill="white">TS</text>
      </svg>
    );
  }
  if (norm.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.7 13.9l-6.7 3.9V12l6.7-3.9v7.8zM12 10.3L5.3 6.4 12 2.5l6.7 3.9-6.7 3.9zm-6.7 5.5V8.1l6.7 3.9v7.8l-6.7-3.9z" fill="#339933" />
      </svg>
    );
  }
  if (norm.includes("express.js") || norm === "express") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#353535" rx="4" />
        <text x="12" y="15" fontSize="8" fontWeight="bold" fontFamily="monospace" fill="white" textAnchor="middle">ex</text>
      </svg>
    );
  }
  if (norm.includes("passport")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#34e79a]`}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
      </svg>
    );
  }
  if (norm === "jwt") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z" fill="#fb7185" />
        <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (norm.includes("python")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M11.93 2c-2.73 0-2.56 1.18-2.56 1.18v1.65h2.6v.38H7.07S5 5.38 5 8.1c0 2.73 1.83 2.57 1.83 2.57h1.09V9.58c0-1.48 1.25-2.77 2.73-2.77h3.83s1.18-.08 1.18-2.6c0-2.52-1.65-2.21-1.65-2.21H11.93z" fill="#3776ab" />
        <path d="M12.07 22c2.73 0 2.56-1.18 2.56-1.18v-1.65h-2.6v-.38h4.9s2.07-.17 2.07-2.89c0-2.73-1.83-2.57-1.83-2.57h-1.09v1.09c0 1.48-1.25 2.77-2.73 2.77h-3.83s-1.18.08-1.18 2.6c0 2.52 1.65 2.21 1.65 2.21h2.07z" fill="#ffd343" />
      </svg>
    );
  }
  if (norm.includes("java")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#007396" opacity="0.1" />
        <path d="M9 18s1-1.5 2-1.5c1.5 0 2 .5 3 .5s2-1.5 2-1.5M6 14s2 1 4 0 3-2.5 5-2.5 3 1 3 1" stroke="#f89820" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 9C10 5 12 4 12 4s1 2 0 5M13 8C13 5 14.5 4 14.5 4s.5 2-.5 4" stroke="#5382a1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (norm === "c") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#659ad2" rx="4" />
        <text x="12" y="16" fontSize="12" fontWeight="bold" fontFamily="sans-serif" fill="white" textAnchor="middle">C</text>
      </svg>
    );
  }
  if (norm.includes("c++")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#00599c" rx="4" />
        <text x="12" y="16" fontSize="11" fontWeight="bold" fontFamily="sans-serif" fill="white" textAnchor="middle">C++</text>
      </svg>
    );
  }
  if (norm.includes("mongodb")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2C10 6 8 10 8 13c0 2.2 1.8 4 4 4s4-1.8 4-4c0-3-2-7-4-11z" fill="#47a248" />
        <path d="M12 2v19" stroke="#13aa52" strokeWidth="1.5" />
      </svg>
    );
  }
  if (norm.includes("postgres")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#336791" opacity="0.1" />
        <path d="M18 10c0-3-2.5-4-5.5-4S7 7 7 10c0 2 1 3 3 3.5.5.1.7.3.7.5s-.2.4-.7.5C8 15 7.5 16 7.5 17.5c0 2 1.5 3 4.5 3s4.5-1 4.5-3c0-1.5-.5-2.5-2.5-3-.5-.1-.7-.3-.7-.5s.2-.4.7-.5c2-.5 3-1.5 3-3.5z" stroke="#336791" strokeWidth="2" />
      </svg>
    );
  }
  if (norm.includes("mysql")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M4 10c0-4 4-6 8-6s8 2 8 6-4 6-8 6-8-2-8-6z" fill="#00758f" opacity="0.2" />
        <path d="M12 4c4 0 7.5 2.5 7.5 5.5S16 15 12 15s-7.5-2.5-7.5-5.5S8 4 12 4z" stroke="#f29111" strokeWidth="2" />
        <path d="M12 12c2.5 0 4.5 1.5 4.5 3.5S14.5 19 12 19s-4.5-1.5-4.5-3.5S9.5 12 12 12z" stroke="#00758f" strokeWidth="1.5" />
      </svg>
    );
  }
  if (norm === "aws" || norm.includes("advanced aws")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#ff9900" opacity="0.1" />
        <path d="M6 14c1.5-1 3.5-1.5 5.5-1.5s4 .5 5.5 1.5" stroke="#ff9900" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 11.5c-1-1.5-2.5-2-4.5-2s-3.5.5-4.5 2" stroke="#232f3e" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (norm.includes("vercel")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-white`}>
        <path d="M24 22.525H0L12 1.475l12 21.05z" />
      </svg>
    );
  }
  if (norm.includes("netlify")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`${className} text-[#00c7b7]`}>
        <path d="M12 2L2 12h5v8h10v-8h5L12 2z" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (norm.includes("actions") || norm.includes("github actions")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#2088ff" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M7 12h10M12 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (norm.includes("vite")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2L3 5l2 12 7 5 7-5 2-12-9-3z" fill="#bd34fe" opacity="0.1" />
        <path d="M12 3L4 6l1.5 10L12 20.5l6.5-4.5L20 6l-8-3z" fill="url(#vite-grad)" />
        <path d="M19 5l-7 14-3-8h5l-2-4z" fill="#ffdf00" />
        <defs>
          <linearGradient id="vite-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#41d1ff" />
            <stop offset="100%" stopColor="#bd34fe" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (norm.includes("vscode") || norm.includes("visual studio code")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`${className} text-[#007acc]`}>
        <path d="M23.9 6.5l-3.3-3.3c-.3-.3-.8-.3-1.1 0l-9.8 9.8L3 6.2c-.3-.3-.8-.3-1.1 0L.3 7.8c-.3.3-.3.8 0 1.1l5.5 5.5L.3 19.9c-.3.3-.3.8 0 1.1l1.6 1.6c.3.3.8.3 1.1 0l6.8-6.8 9.8 9.8c.3.3.8.3 1.1 0l3.3-3.3c.3-.3.3-.8 0-1.1l-8.2-8.2 8.2-8.2c.3-.3.3-.8 0-1.1z" fill="currentColor" />
      </svg>
    );
  }
  if (norm.includes("postman")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`${className} text-[#ff6c37]`}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor" />
      </svg>
    );
  }
  if (norm.includes("gemini")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#1a73e8" opacity="0.1" />
        <path d="M12 6l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" fill="#1a73e8" />
      </svg>
    );
  }
  if (norm.includes("claude")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#d97706" opacity="0.1" />
        <path d="M12 5v14M5 12h14" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (norm.includes("gpt") || norm.includes("chatgpt")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#10a37f" opacity="0.1" />
        <path d="M16 10a4 4 0 00-8 0v4a4 4 0 008 0v-4z" stroke="#10a37f" strokeWidth="2" />
      </svg>
    );
  }
  if (norm.includes("cursor")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#22d3ee" strokeWidth="2.5">
        <path d="M6 3l12 9-5.5 1.5L16 19l-3 1-3.5-6.5L6 15V3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (norm.includes("copilot")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#6366f1" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" opacity="0.2" />
        <path d="M12 6a3 3 0 100 6 3 3 0 000-6zM8 15a4 4 0 018 0" strokeLinecap="round" />
      </svg>
    );
  }
  if (norm.includes("github") && !norm.includes("actions") && !norm.includes("pages")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }
  if (norm.includes("git")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z" fill="#f05032" opacity="0.1" />
        <path d="M18.5 11.5l-6-6a1.5 1.5 0 00-2 0l-6 6a1.5 1.5 0 000 2l6 6a1.5 1.5 0 002 0l6-6a1.5 1.5 0 000-2z" stroke="#f05032" strokeWidth="2" />
        <circle cx="12" cy="12" r="2.5" fill="#f05032" />
      </svg>
    );
  }
  if (norm.includes("npm")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#cb3837" rx="4" />
        <path d="M4 8h16v8H4V8zm3 2v4h3v-4H7zm5 0v4h2v-4h-2zm3 0v4h2v-4h-2zm3 0v4h1v-4h-1z" fill="white" />
      </svg>
    );
  }
  if (norm.includes("bun")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#fbf0e9" rx="4" />
        <circle cx="12" cy="12" r="7" fill="#f472b6" opacity="0.4" />
        <path d="M12 7c-2 0-3 1.5-3 3s1 3.5 3 3.5 3-2 3-3.5-1-3-3-3z" fill="#f59e0b" />
      </svg>
    );
  }
  if (norm.includes("resolve") || norm.includes("davinci")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="10" stroke="url(#davinci-grad)" strokeWidth="3" />
        <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" fill="url(#davinci-grad)" />
        <defs>
          <linearGradient id="davinci-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (norm.includes("figma")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#f24e1e]`}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
      </svg>
    );
  }
  if (norm.includes("capcut")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="10" fill="#000000" />
        <path d="M7.5 9.5a1.5 1.5 0 113 0c0 .6-.4 1.1-.9 1.3L12 12l2.4-1.2c-.5-.2-.9-.7-.9-1.3a1.5 1.5 0 113 0c0 .8-.6 1.4-1.4 1.5L12 12l-3.1-1c-.8-.1-1.4-.7-1.4-1.5zm9 5a1.5 1.5 0 11-3 0c0-.6.4-1.1.9-1.3L12 12l-2.4 1.2c.5.2.9.7.9 1.3a1.5 1.5 0 11-3 0c0-.8.6-1.4 1.4-1.5L12 12l3.1 1c.8.1 1.4.7 1.4 1.5z" fill="white" />
      </svg>
    );
  }
  if (norm.includes("excel")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#107c41" rx="4" />
        <text x="12" y="16" fontSize="12" fontWeight="bold" fontFamily="sans-serif" fill="white" textAnchor="middle">X</text>
      </svg>
    );
  }
  if (norm.includes("word") || norm.includes("ms word")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#185abd" rx="4" />
        <text x="12" y="16" fontSize="12" fontWeight="bold" fontFamily="sans-serif" fill="white" textAnchor="middle">W</text>
      </svg>
    );
  }
  if (norm.includes("powerpoint")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#c43e1c" rx="4" />
        <text x="12" y="16" fontSize="12" fontWeight="bold" fontFamily="sans-serif" fill="white" textAnchor="middle">P</text>
      </svg>
    );
  }
  if (norm.includes("outlook")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#0078d4" rx="4" />
        <text x="12" y="16" fontSize="12" fontWeight="bold" fontFamily="sans-serif" fill="white" textAnchor="middle">O</text>
      </svg>
    );
  }
  if (norm.includes("canva")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`${className} text-[#00c4cc]`}>
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
        <text x="12" y="15" fontSize="8" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" textAnchor="middle">Canva</text>
      </svg>
    );
  }
  if (norm.includes("antigravity")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#6366f1" strokeWidth="2">
        <polygon points="12 2 2 22 22 22" fill="#6366f1" opacity="0.1" />
        <path d="M12 2L2 22h20L12 2zm0 4l7 12H5l7-12z" />
      </svg>
    );
  }
  if (norm.includes("google docs")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#2684fc" rx="4" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (norm.includes("google sheets")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#0f9d58" rx="4" />
        <path d="M8 8h8v8H8V8zm4 0v8M8 12h8" stroke="white" strokeWidth="1.5" />
      </svg>
    );
  }
  if (norm.includes("google slides")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#f4b400" rx="4" />
        <path d="M6 6h12v12H6V6z" stroke="white" strokeWidth="1.5" />
      </svg>
    );
  }
  if (norm.includes("google drive")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <polygon points="8 4 16 4 21 12 16 20 8 20 3 12" stroke="#4285f4" strokeWidth="2" />
      </svg>
    );
  }
  if (norm.includes("google forms")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#7248b9" rx="4" />
        <circle cx="9" cy="9" r="1.5" fill="white" />
        <circle cx="9" cy="15" r="1.5" fill="white" />
        <path d="M12 9h4M12 15h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (norm.includes("google calendar")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect width="24" height="24" fill="#4285f4" rx="4" />
        <text x="12" y="16" fontSize="11" fontWeight="bold" fill="white" textAnchor="middle">31</text>
      </svg>
    );
  }
  if (norm.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#2496ed">
        <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.188V8.77c0-.103-.084-.186-.186-.186h-2.119c-.103 0-.186.083-.186.186v2.12c0 .105.083.188.186.188zm-2.917-2.493h2.117c.102 0 .187-.083.187-.186V6.279c0-.102-.085-.186-.187-.186h-2.117c-.103 0-.186.084-.186.186v2.12c0 .103.083.186.186.186zm-2.918 0h2.119c.102 0 .185-.083.185-.186V6.279c0-.102-.083-.186-.185-.186H8.148c-.102 0-.186.084-.186.186v2.12c0 .103.084.186.186.186zm-2.918 0h2.119c.102 0 .185-.083.185-.186V6.279c0-.102-.083-.186-.185-.186H5.23c-.102 0-.185.084-.185.186v2.12c0 .103.083.186.185.186zm-2.918 0h2.119c.102 0 .185-.083.185-.186V6.279c0-.102-.083-.186-.185-.186H2.312c-.102 0-.185.084-.185.186v2.12c0 .103.083.186.185.186zm2.918-2.493h2.119c.102 0 .185-.083.185-.188V3.782c0-.102-.083-.186-.185-.186H5.23c-.102 0-.185.084-.185.186v2.12c0 .105.083.188.185.188zm2.918 0h2.119c.102 0 .185-.083.185-.188V3.782c0-.102-.083-.186-.185-.186H8.148c-.102 0-.186.084-.186.186v2.12c0 .105.084.188.186.188zm2.918 0h2.117c.102 0 .187-.083.187-.188V3.782c0-.102-.085-.186-.187-.186h-2.117c-.103 0-.186.084-.186.186v2.12c0 .105.083.188.186.188zm2.918 0h2.119c.102 0 .185-.083.185-.188V3.782c0-.102-.083-.186-.185-.186h-2.119c-.103 0-.185.084-.185.186v2.12c0 .105.082.188.185.188zM23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.687.032-1.03.096-.283.053-.55.144-.8.273-.102.052-.15.166-.116.275.14.444.437.79.832 1.033.456.28.988.423 1.545.423.112 0 .22-.007.327-.019.387-.044.75-.175 1.085-.386.096-.06.14-.176.104-.285-.133-.399-.441-.715-.758-.946zM22.38 12.5c-.83 0-1.638-.25-2.337-.73-.55-.38-.973-.91-1.252-1.52-.086-.185-.27-.306-.474-.306h-5.719v2.119c0 .105-.084.188-.186.188h-2.119c-.103 0-.186-.083-.186-.188v-2.119H5.163c-.102 0-.25.067-.343.149C3.766 11.233 3 12.8 3 14.5c0 3.86 3.14 7 7 7h5c4.97 0 9-4.03 9-9h-1.62zm-.88 0h-.5c-.15 0-.29-.05-.4-.14-.24-.2-.55-.31-.87-.31-.38 0-.74.15-1 .44-.1.1-.24.16-.39.16H17.3c-.39 0-.7-.31-.7-.7v-.8c0-.39.31-.7.7-.7h1.08c.15 0 .29.06.39.16.26.29.62.44 1 .44.32 0 .63-.11.87-.31.11-.09.25-.14.4-.14h.5v2.45z" />
      </svg>
    );
  }
  if (norm.includes("kubernetes")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#326ce5">
        <path d="M12 1.6L2.3 5.8v10.4L12 22.4l9.7-6.2V5.8L12 1.6zm0 3.2l7.1 3v6.4l-7.1 4.5-7.1-4.5V7.8l7.1-3z" />
        <circle cx="12" cy="12" r="2.5" fill="#326ce5" />
      </svg>
    );
  }

  // Fallback concepts and custom vectors mapped to Lucide icons
  if (norm.includes("hooks")) {
    return <Anchor className={className} stroke="#61dafb" strokeWidth="2" />;
  }
  if (norm.includes("router")) {
    return <Milestone className={className} stroke="#f44250" strokeWidth="2" />;
  }
  if (norm === "rest api") {
    return <Link2 className={className} stroke="#10b981" strokeWidth="2" />;
  }
  if (norm === "authentication") {
    return <Lock className={className} stroke="#fb7185" strokeWidth="2" />;
  }
  if (norm === "authorization") {
    return <KeyRound className={className} stroke="#fb7185" strokeWidth="2" />;
  }
  if (norm.includes("session")) {
    return <Cookie className={className} stroke="#f59e0b" strokeWidth="2" />;
  }
  if (norm.includes("multer")) {
    return <Upload className={className} stroke="#a855f7" strokeWidth="2" />;
  }
  if (norm.includes("dom") || norm.includes("debugging") || norm.includes("troubleshooting")) {
    return <FileCode className={className} stroke="#38bdf8" strokeWidth="2" />;
  }

  // Fallback Soft Skills Lucide Icons mapping:
  if (norm.includes("problem solving")) {
    return <Cpu className={className} />;
  }
  if (norm.includes("communication")) {
    return <MessageSquare className={className} />;
  }
  if (norm.includes("leadership")) {
    return <Trophy className={className} />;
  }
  if (norm.includes("teamwork") || norm.includes("collaboration")) {
    return <Users className={className} />;
  }
  if (norm.includes("critical thinking") || norm.includes("analytical")) {
    return <Compass className={className} />;
  }
  if (norm.includes("time management")) {
    return <Clock className={className} />;
  }
  if (norm.includes("adaptability")) {
    return <Shuffle className={className} />;
  }
  if (norm.includes("attention")) {
    return <Search className={className} />;
  }
  if (norm.includes("learning")) {
    return <TrendingUp className={className} />;
  }

  return <Award className={className} />;
}

export default function SkillsDashboard() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        staggerChildren: 0.02
      } 
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  const cardMotionVariants = {
    hover: {
      y: -5,
      boxShadow: "0 0 25px rgba(59, 130, 246, 0.25)",
      borderColor: "rgba(59, 130, 246, 0.5)",
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const logoMotionVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-20">
      <Section id="skills-detailed">
        {/* Premium Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center relative"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Expertise
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl font-display text-foreground">
            Technology Stack
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Technologies, frameworks, databases, cloud platforms, AI tools, and software I use to build modern web applications and AI-powered solutions.
          </p>
          {/* Animated gradient divider line */}
          <div className="mt-8 flex justify-center">
            <motion.div 
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% auto" }}
              className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_12px_rgba(59,130,246,0.5)]"
            />
          </div>
        </motion.div>

        {/* Categories grid with stagger entry */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 mt-12 max-w-6xl mx-auto"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={categoryVariants}
              className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all hover:border-primary/30"
            >
              {/* Background ambient glow */}
              <div
                className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${cat.color} opacity-30 blur-3xl`}
              />

              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 border-none">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-[0_0_15px_rgba(104,117,245,0.15)] shrink-0">
                  <cat.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {cat.title}
                  </h3>
                  {/* Category small divider line */}
                  <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-primary to-transparent" />
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillCardVariants}
                    className="h-full"
                  >
                    <motion.div
                      variants={cardMotionVariants}
                      whileHover="hover"
                      className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.01] p-6 transition-colors duration-300 cursor-pointer aspect-square h-full"
                    >
                      <motion.div 
                        variants={logoMotionVariants}
                        className="flex items-center justify-center mb-3 h-14 w-14"
                      >
                        <SkillLogo name={skill.name} className="w-full h-full object-contain text-primary" />
                      </motion.div>
                      <span className="font-display text-[10px] font-medium tracking-wide text-foreground/80 text-center group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      <Footer simple />
    </div>
  );
}
