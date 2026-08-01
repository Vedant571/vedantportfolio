import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/portfolio/Section";
import Footer from "@/components/portfolio/Footer";
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Star, 
  Eye, 
  Download, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  X 
} from "lucide-react";

export const Route = createLazyFileRoute("/awards")({
  component: AwardsPage,
});

// Dynamic Client-Side PDF Preview Component using pdf.js from CDN
function PDFPreview({ pdfUrl, scale = 1.5, className = "" }: { pdfUrl: string; scale?: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(false);

    const loadPdf = async () => {
      try {
        if (!(window as any).pdfjsLib) {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js";
          script.async = true;
          document.body.appendChild(script);
          await new Promise((resolve) => {
            script.onload = resolve;
          });
        }

        const pdfjsLib = (window as any).pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        if (!active) return;

        const page = await pdf.getPage(1);
        if (!active) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        // Render at high resolution scale
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
        if (active) {
          setLoading(false);
        }
      } catch (err) {
        console.error("Error rendering PDF preview:", err);
        if (active) {
          setError(true);
          setLoading(false);
        }
      }
    };

    loadPdf();
    return () => {
      active = false;
    };
  }, [pdfUrl, scale]);

  if (error) {
    return (
      <div className="flex items-center justify-center bg-white/5 border border-white/10 rounded-xl aspect-[4/3] text-xs text-muted-foreground">
        Failed to load PDF preview
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02] backdrop-blur-[2px]">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-auto object-contain" />
    </div>
  );
}

function AwardsPage() {
  const [activeCert, setActiveCert] = useState<boolean>(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

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

  const floatAnimation = {
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="pt-20">
      <Section id="awards-recognition">
        <SectionHeader 
          eyebrow="Awards & Recognition" 
          title={<>Honors & <span className="text-gradient">Achievements</span></>} 
          description="Recognition, hackathon victories, and academic awards."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            {...floatAnimation}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="group relative flex flex-col md:flex-row w-full glass rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.18)]"
          >
            {/* LEFT SIDE (40% desktop & tablet) - Main Event photo */}
            <div className="relative w-full md:w-[40%] h-[350px] md:h-auto min-h-[350px] overflow-hidden rounded-2xl md:rounded-l-2xl md:rounded-r-none flex-shrink-0 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <img
                src="/images/hackathon_group.jpg"
                alt="INNOVEX Hackathon Group Winner"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none z-10" />

              {/* Overlaid details on bottom left of image */}
              <div className="absolute bottom-8 left-8 right-8 z-20 text-left pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-[10px] font-bold uppercase tracking-wider text-white mb-3 backdrop-blur-md">
                  September 2025
                </span>
                
                <h4 className="font-display text-2xl font-bold text-white leading-tight tracking-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
                  1st Place Winner
                  <span className="block text-white/95 text-lg font-medium mt-0.5">INNOVEX Hackathon</span>
                </h4>
                
                <p className="text-xs text-white/80 mt-2 font-medium tracking-wide leading-relaxed [text-shadow:0_1px_5px_rgba(0,0,0,0.6)]">
                  SVKM's Usha Pravin Gandhi College of Arts, Science & Commerce
                </p>
                
                <div className="flex items-center gap-1 text-[11px] text-white/70 mt-2 font-mono tracking-wide [text-shadow:0_1px_5px_rgba(0,0,0,0.5)]">
                  <MapPin className="h-3 w-3 shrink-0" />
                  Mumbai, Maharashtra
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (60% desktop & tablet) - Hackathon Details */}
            <div className="w-full md:w-[60%] p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-semibold tracking-wider text-muted-foreground uppercase glass">
                    🏆 Hackathon Victory
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Accomplishment
                  </span>
                </div>

                {/* Overview */}
                <div className="border-t border-white/5 pt-4">
                  <h5 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-2">
                    Overview
                  </h5>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Secured 1st Place in the INNOVEX Hackathon hosted by SVKM's Usha Pravin Gandhi College of Arts, Science & Commerce by developing an innovative solution for institutional scheduling challenges while collaborating effectively in a team environment.
                  </p>
                </div>

                {/* Key Contributions */}
                <div>
                  <h5 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-2.5">
                    Key Contributions
                  </h5>
                  <ul className="grid gap-2.5 sm:grid-cols-1 text-xs text-muted-foreground leading-relaxed">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent" />
                      <span>Contributed to the development of the institutional scheduling solution</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent" />
                      <span>Collaborated effectively with teammates</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent" />
                      <span>Presented the solution before the judging panel</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent" />
                      <span>Demonstrated problem-solving and teamwork skills</span>
                    </li>
                  </ul>
                </div>

                {/* Certificate Section */}
                <div className="border-t border-white/5 pt-4">
                  <h5 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-3">
                    Certificate Verification
                  </h5>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6 glass rounded-2xl p-4 border border-white/5 bg-white/[0.01]">
                    {/* Dynamic High-Quality PDF Preview */}
                    <div 
                      onClick={() => setActiveCert(true)}
                      className="relative w-[140px] rounded-xl overflow-hidden border border-white/10 flex-shrink-0 cursor-pointer group/cert shadow-lg hover:border-primary/30 transition duration-300 bg-white/[0.01] flex items-center justify-center"
                    >
                      <PDFPreview 
                        pdfUrl="/certificates/innovex_cert.pdf" 
                        scale={1.2}
                        className="w-full h-auto object-contain transition duration-500 group-hover/cert:scale-105" 
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/cert:opacity-100 transition duration-300 backdrop-blur-[1px]">
                        <Eye className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    
                    {/* Verification Details */}
                    <div className="flex-1 w-full space-y-3.5">
                      <div className="text-left">
                        <h6 className="text-xs font-semibold text-foreground">
                          INNOVEX Hackathon Certificate of Achievement
                        </h6>
                        <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">
                          Document type: PDF / Vector
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setActiveCert(true)}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-semibold text-foreground hover:bg-white/10 hover:border-white/20 transition duration-300 cursor-pointer"
                        >
                          <Eye className="h-3.5 w-3.5" /> View Fullscreen
                        </button>
                        <a
                          href="/certificates/innovex_cert.pdf"
                          download="innovex_certificate.pdf"
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
        </motion.div>
      </Section>

      {/* Fullscreen Zoomable Certificate Viewer Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            {/* Modal Closer Backdrop */}
            <div 
              className="absolute inset-0 cursor-zoom-out" 
              onClick={() => {
                setActiveCert(false);
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
                href="/certificates/innovex_cert.pdf"
                download="innovex_certificate.pdf"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition border-none outline-none"
                title="Download Certificate"
              >
                <Download className="h-4.5 w-4.5" />
              </a>
              <button
                onClick={() => {
                  setActiveCert(false);
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
            <div className="relative w-full max-w-4xl h-[75vh] md:h-[80vh] overflow-hidden rounded-2xl flex items-center justify-center select-none z-40">
              <motion.div
                animate={{ scale: zoom, rotate: rotation }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full h-full flex items-center justify-center origin-center"
              >
                {/* PDF dynamic preview rendered at higher scale in modal viewer */}
                <PDFPreview 
                  pdfUrl="/certificates/innovex_cert.pdf" 
                  scale={2.2}
                  className="w-full max-h-full max-w-4xl shadow-2xl rounded-lg" 
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer simple />
    </div>
  );
}
