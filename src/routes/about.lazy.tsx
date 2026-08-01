import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/portfolio/Section";
import Footer from "@/components/portfolio/Footer";
import {
  User,
  GraduationCap,
  Trophy,
  Briefcase,
  BookOpen,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  Target,
  Compass,
  Heart,
  MessageSquare,
  FileText,
  Download,
} from "lucide-react";

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-20">
      <Section id="about-detailed">
        <SectionHeader
          eyebrow="Biography & Path"
          title={
            <>
              About <span className="text-gradient">Vedant Modi</span>
            </>
          }
          description="A complete look into my background, journey, mission, career goals, and personal interests."
        />

        <div className="grid gap-8 lg:grid-cols-12 mt-12">
          {/* Main Story & Journey Columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8 lg:col-span-8"
          >
            {/* Biography */}
            <motion.div variants={itemVariants} className="glass rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 text-primary mb-4">
                <User className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold tracking-tight text-foreground uppercase">
                  Biography
                </h3>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I am a passionate <span className="text-foreground font-semibold">Bachelor of Science in Information Technology (B.Sc. IT)</span> student at <span className="text-foreground font-semibold">SVKM's Usha Pravin Gandhi College of Arts, Science & Commerce, Mumbai</span>.
                </p>
                <p>
                  My journey into technology began with curiosity about how websites and software are built, and it has grown into a passion for developing modern, user-focused digital experiences.
                </p>
                <p>
                  I enjoy building full-stack web applications using technologies such as HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, PostgreSQL, and modern development tools. Alongside web development, I actively explore Artificial Intelligence, prompt engineering, and AI-powered developer tools to build efficient, scalable, and innovative software solutions.
                </p>
                <p>
                  I believe in continuous learning, writing clean and maintainable code, and creating software that solves real-world problems while delivering excellent user experiences.
                </p>
              </div>
            </motion.div>

            {/* Mission & Career Goals */}
            <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2">
              <div className="glass rounded-3xl p-6">
                <div className="flex items-center gap-3 text-accent mb-3">
                  <Compass className="h-5 w-5" />
                  <h3 className="font-display text-base font-bold tracking-tight text-foreground uppercase">
                    My Mission
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  To build software that creates meaningful impact by combining clean design, scalable architecture, and modern technologies. I strive to develop secure, accessible, and high-performance applications that solve real-world challenges while continuously improving as a software engineer.
                </p>
              </div>

              <div className="glass rounded-3xl p-6">
                <div className="flex items-center gap-3 text-primary mb-3">
                  <Target className="h-5 w-5" />
                  <h3 className="font-display text-base font-bold tracking-tight text-foreground uppercase">
                    Career Goals
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  My goal is to become a Full-Stack Software Engineer and eventually grow into a Software Architect, specializing in cloud computing, distributed systems, Artificial Intelligence, and scalable web technologies. I aspire to work with innovative engineering teams where I can contribute, learn, and build products used by people around the world.
                </p>
              </div>
            </motion.div>


          </motion.div>

          {/* Quick Facts & Sidebar Block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6 lg:col-span-4"
          >
            {/* Personal Details */}
            <motion.div variants={itemVariants} className="glass rounded-3xl p-6">
              <h3 className="font-display text-base font-bold tracking-tight text-foreground uppercase mb-4">
                Personal Information
              </h3>
              <div className="space-y-3 font-mono text-xs">
                {[
                  { label: "Name", val: "Vedant Modi" },
                  { label: "Location", val: "Mumbai, Maharashtra, India" },
                  { label: "Languages", val: "English, Hindi, Gujarati" },
                  { label: "Availability", val: "Available for Internships" },
                  { label: "Email", val: "vdntmd@gmail.com" },
                ].map((d) => (
                  <div key={d.label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">{d.label}</span>
                    <span className="text-foreground font-semibold">{d.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants} className="glass rounded-3xl p-6">
              <div className="flex items-center gap-2 text-primary mb-4">
                <MessageSquare className="h-4.5 w-4.5" />
                <h3 className="font-display text-base font-bold tracking-tight text-foreground uppercase">
                  Soft Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Critical Thinking",
                  "Communication",
                  "Team Collaboration",
                  "Leadership",
                  "Fast Debugging",
                  "Mentoring",
                  "Adaptability",
                  "Continuous Learning",
                ].map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-muted-foreground font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Interests & Hobbies */}
            <motion.div variants={itemVariants} className="glass rounded-3xl p-6">
              <div className="flex items-center gap-2 text-accent mb-4">
                <Heart className="h-4.5 w-4.5" />
                <h3 className="font-display text-base font-bold tracking-tight text-foreground uppercase">
                  Interests
                </h3>
              </div>
              <div className="space-y-2.5 text-xs text-muted-foreground">
                {[
                  "Full-Stack Web Development",
                  "Artificial Intelligence",
                  "Prompt Engineering",
                  "Modern Web Technologies",
                  "Video Editing using DaVinci Resolve",
                  "Learning Emerging Technologies",
                  "Building Innovative Software Projects",
                ].map((interest, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </motion.div>


          </motion.div>
        </div>
      </Section>
      <Footer simple />
    </div>
  );
}
