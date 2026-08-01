import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  Trophy, 
  Eye, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  X 
} from "lucide-react";

interface ExperienceItem {
  type: string;
  icon: any;
  role: string;
  org: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  responsibilities: string[];
  images: string[];
  certificatePdf: string;
  certificatePreview: string;
}

const experiences: ExperienceItem[] = [
  {
    type: "volunteering",
    icon: Award,
    role: "Community Service Volunteer",
    org: "Raichel Joseph Foundation (RJF)",
    period: "January 2026 – February 2026",
    location: "Mumbai, IN",
    description: "Completed 60 hours of community service at Saksham Vocational Centre (Raichel Joseph Foundation), teaching students basic computer skills including Microsoft Word, Microsoft Excel, document formatting, spreadsheets, and digital literacy while mentoring young learners.",
    skills: ["Communication", "Leadership", "Teaching", "Microsoft Excel", "Microsoft Word", "Community Engagement", "Public Speaking", "Mentoring"],
    responsibilities: [
      "Conducted computer learning sessions",
      "Assisted students with practical exercises",
      "Prepared educational material",
      "Helped organize classroom activities",
      "Supported digital literacy initiatives"
    ],
    images: ["/images/volunteering_classroom.jpg"],
    certificatePdf: "/certificates/rjf_cert.pdf",
    certificatePreview: "/certificates/rjf_preview.jpg"
  },
  {
    type: "internship",
    icon: Briefcase,
    role: "Web Development Intern",
    org: "CodSoft",
    period: "March 2025 – April 2025",
    location: "Remote",
    description: "Completed a 4-week virtual Web Development Internship where I built responsive websites using HTML, CSS, JavaScript and Bootstrap while improving frontend development, debugging, and problem-solving skills through practical projects.",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Web Design", "Problem Solving", "Git", "Frontend Development"],
    responsibilities: [
      "Developed responsive web pages",
      "Implemented modern UI layouts",
      "Debugged frontend issues",
      "Improved code quality",
      "Strengthened practical web development skills"
    ],
    images: ["/certificates/codsoft_preview.jpg"],
    certificatePdf: "/certificates/codsoft_cert.pdf",
    certificatePreview: "/certificates/codsoft_preview.jpg"
  }
];

export default function Experience() {
  const [activeCert, setActiveCert] = useState<ExperienceItem | null>(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [carouselIndices, setCarouselIndices] = useState<Record<string, number>>({
    volunteering: 0,
    internship: 0
  });

  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  const handlePrevImage = (type: string, maxImages: number) => {
    setCarouselIndices(prev => ({
      ...prev,
      [type]: (prev[type] - 1 + maxImages) % maxImages
    }));
  };

  const handleNextImage = (type: string, maxImages: number) => {
    setCarouselIndices(prev => ({
      ...prev,
      [type]: (prev[type] + 1) % maxImages
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const floatAnimation = (delay: number) => ({
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title={<>Real-world <span className="text-gradient">impact</span></>} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16 mt-16 max-w-5xl mx-auto"
      >
        {experiences.map((exp, index) => {
          const currentImgIndex = carouselIndices[exp.type] || 0;
          const totalImages = exp.images.length;

          return (
            <motion.div
              key={exp.role}
              variants={cardVariants}
              {...floatAnimation(index * 0.5)}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative flex flex-col md:flex-row w-full glass rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.18)]"
            >
              {/* LEFT SIDE (40% desktop & tablet) - Image / Carousel Container */}
              <div className="relative w-full md:w-[40%] h-[350px] md:h-auto min-h-[350px] overflow-hidden rounded-2xl md:rounded-l-2xl md:rounded-r-none flex-shrink-0 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                {/* Images Rendering (with animation) */}
                <div className="relative w-full h-full">
                  <img
                    src={exp.images[currentImgIndex]}
                    alt={`${exp.role} view`}
                    onClick={() => setActiveLightboxImage(exp.images[currentImgIndex])}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                  />
                </div>

                {/* Strong dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none z-10" />

                {/* Carousel Controls (Show if multiple photos exist) */}
                {totalImages > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevImage(exp.type, totalImages);
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 transition"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage(exp.type, totalImages);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 transition"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    
                    {/* Image Counter Badge */}
                    <span className="absolute right-4 top-4 z-20 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-white/90">
                      {currentImgIndex + 1} / {totalImages}
                    </span>
                  </>
                )}

                {/* Overlaid Title Content on left side bottom */}
                <div className="absolute bottom-8 left-8 right-8 z-20 text-left pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-[10px] font-bold uppercase tracking-wider text-white mb-3 backdrop-blur-md">
                    {exp.period}
                  </span>
                  <h4 className="font-display text-2xl font-bold text-white leading-tight tracking-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
                    {exp.role}
                  </h4>
                  <p className="text-xs text-white/80 mt-2 font-medium tracking-wide leading-relaxed [text-shadow:0_1px_5px_rgba(0,0,0,0.6)]">
                    {exp.org}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-white/70 mt-2 font-mono tracking-wide [text-shadow:0_1px_5px_rgba(0,0,0,0.5)]">
                    <MapPin className="h-3 w-3 shrink-0" />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE (60% desktop & tablet) - Complete Experience Details */}
              <div className="w-full md:w-[60%] p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  {/* Job Title & Organization Header */}
                  <div className="flex justify-between items-start">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-semibold tracking-wider text-muted-foreground uppercase glass">
                      {exp.type === "internship" ? "💼 Internship" : "🤝 Volunteer Work"}
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Case Study
                    </span>
                  </div>

                  {/* Description */}
                  <div className="border-t border-white/5 pt-4">
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-2">
                      Overview
                    </h5>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>

                  {/* Skills Gained */}
                  <div>
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-2.5">
                      Skills Gained
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition-all duration-300 hover:border-primary/45 hover:bg-primary/5 hover:text-primary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-2">
                      Key Responsibilities
                    </h5>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground leading-relaxed">
                      {exp.responsibilities.map((r, rIdx) => (
                        <li key={rIdx} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Certificate Section */}
                  <div className="border-t border-white/5 pt-4">
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-3">
                      Certificate Verification
                    </h5>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-6 glass rounded-2xl p-4 border border-white/5 bg-white/[0.01]">
                      {/* Certificate Preview Image */}
                      <div 
                        onClick={() => setActiveCert(exp)}
                        className="relative w-[140px] rounded-xl overflow-hidden border border-white/10 flex-shrink-0 cursor-pointer group/cert shadow-lg hover:border-primary/30 transition duration-300 bg-white/[0.01] flex items-center justify-center"
                      >
                        <img
                          src={exp.certificatePreview}
                          alt="Certificate thumbnail"
                          className="w-full h-auto object-contain transition duration-500 group-hover/cert:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/cert:opacity-100 transition duration-300 backdrop-blur-[1px]">
                          <Eye className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      
                      {/* Verification Detail & Action Buttons */}
                      <div className="flex-1 w-full space-y-3.5">
                        <div className="text-left">
                          <h6 className="text-xs font-semibold text-foreground">
                            {exp.type === "internship" ? "Internship Certificate of Completion" : "Volunteering Service Completion Certificate"}
                          </h6>
                          <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">
                            Document type: PDF / Image
                          </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => setActiveCert(exp)}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-semibold text-foreground hover:bg-white/10 hover:border-white/20 transition duration-300 cursor-pointer"
                          >
                            <Eye className="h-3.5 w-3.5" /> View Fullscreen
                          </button>
                          <a
                            href={exp.certificatePdf}
                            download={exp.certificatePdf.split('/').pop()}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-primary/10 border border-primary/20 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition duration-300"
                          >
                            <Download className="h-3.5 w-3.5" /> Download PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Fullscreen Zoomable Certificate Viewer Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            {/* Modal Closer Area */}
            <div 
              className="absolute inset-0 cursor-zoom-out" 
              onClick={() => {
                setActiveCert(null);
                setZoom(1);
                setRotation(0);
              }}
            />

            {/* Modal Controls Bar */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 p-2 backdrop-blur-md">
              <button
                onClick={() => setZoom(z => Math.max(0.5, z - 0.25))}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition border-none outline-none cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="h-4.5 w-4.5" />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition border-none outline-none cursor-pointer"
                title="Reset Zoom"
              >
                <RotateCcw className="h-4.5 w-4.5" />
              </button>
              <button
                onClick={() => setZoom(z => Math.min(3, z + 0.25))}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition border-none outline-none cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="h-4.5 w-4.5" />
              </button>
              <span className="text-white/40 px-1">|</span>
              <button
                onClick={() => setRotation(r => (r + 90) % 360)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition border-none outline-none cursor-pointer"
                title="Rotate 90°"
              >
                Rotate
              </button>
              <span className="text-white/40 px-1">|</span>
              <a
                href={activeCert.certificatePdf}
                download={activeCert.certificatePdf.split('/').pop()}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition border-none outline-none"
                title="Download Certificate"
              >
                <Download className="h-4.5 w-4.5" />
              </a>
              <button
                onClick={() => {
                  setActiveCert(null);
                  setZoom(1);
                  setRotation(0);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition border-none outline-none cursor-pointer"
                title="Close"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* High-Res View Container */}
            <div className="relative max-w-4xl max-h-[85vh] overflow-auto p-8 rounded-2xl flex items-center justify-center select-none z-40">
              <motion.img
                src={activeCert.certificatePreview}
                alt="Fullscreen Certificate Preview"
                animate={{ scale: zoom, rotate: rotation }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/10 shadow-2xl origin-center"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for Experience Photos Carousel */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxImage(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition border-none outline-none cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>
            
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-xl"
            >
              <img
                src={activeLightboxImage}
                alt="Enlarged gallery view"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}