import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/portfolio/Section";
import Footer from "@/components/portfolio/Footer";
import { 
  Calendar, 
  MapPin, 
  Award,
  Clock
} from "lucide-react";

export const Route = createLazyFileRoute("/achievements")({
  component: Accomplishments,
});

// Global loading state for PDF.js to avoid duplicate script tags and race conditions
let pdfjsLoadingPromise: Promise<any> | null = null;

function getPDFJS() {
  if (typeof window === "undefined") return Promise.reject(new Error("window is undefined"));
  const pdfjsLib = (window as any).pdfjsLib;
  if (pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";
    return Promise.resolve(pdfjsLib);
  }
  if (!pdfjsLoadingPromise) {
    pdfjsLoadingPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js";
      script.async = true;
      script.onload = () => {
        const lib = (window as any).pdfjsLib;
        if (lib) {
          lib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";
          resolve(lib);
        } else {
          reject(new Error("pdfjsLib not found on window"));
        }
      };
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }
  return pdfjsLoadingPromise;
}

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
        const pdfjsLib = await getPDFJS();
        if (!active) return;

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        if (!active) return;

        const page = await pdf.getPage(1);
        if (!active) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

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

// Unified Certificate Preview Component handles PDF/Image dynamically
function AutoCertificatePreview({ url, scale = 1.2, className = "" }: { url: string; scale?: number; className?: string }) {
  if (url.toLowerCase().endsWith(".pdf")) {
    return <PDFPreview pdfUrl={url} scale={scale} className={className} />;
  }
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={url} alt="Certificate preview" className="w-full h-auto object-contain" />
    </div>
  );
}

interface AchievementItem {
  id: string;
  title: string;
  description: string;
  period: string;
  location: string;
  image: string;
  certificatePdf: string;
  certificatePreview: string;
  organization?: string;
  highlights?: string[];
  statistics?: { label: string; value: string }[];
  galleryImages?: string[];
  useImageForModal?: boolean;
  documents?: {
    title: string;
    pdf: string;
    preview: string;
    useImageForModal?: boolean;
    icon?: string;
  }[];
  certificateLabel?: string;
  certificateIcon?: string;
  certificateIssuedBy?: string;
}

interface CertificateItem {
  id: string;
  title: string;
  issuedBy: string;
  issueDate: string;
  credentialId?: string;
  certificatePdf: string;
  certificatePreview: string;
  useImageForModal?: boolean;
  category: string;
  description?: string;
  details?: { label: string; value: string }[];
  hideDownloadButton?: boolean;
  skills?: string[];
}

interface CourseItem {
  id: string;
  title: string;
  instructor?: string;
  platform: string;
  completionDate: string;
  skills: string[];
  image: string;
  certificatePdf: string;
  certificatePreview: string;
  description?: string;
  duration?: string;
  courseType?: string;
  certificateCode?: string;
}


interface ViewerCert {
  title: string;
  certificatePdf: string;
  certificatePreview: string;
  useImageForModal?: boolean;
}

const achievementsData: AchievementItem[] = [
  {
    id: "award-innovex",
    title: "1st Place Winner",
    description: "Secured 1st Place in the INNOVEX Hackathon hosted by SVKM's Usha Pravin Gandhi College of Arts, Science & Commerce by developing an innovative solution for institutional scheduling challenges.",
    period: "September 2025",
    location: "SVKM's Usha Pravin Gandhi College of Arts, Science & Commerce, Mumbai",
    image: "/images/hackathon_group.jpg",
    certificatePdf: "/certificates/innovex_cert.pdf",
    certificatePreview: "/certificates/innovex_cert.pdf",
    organization: "SVKM's Usha Pravin Gandhi College",
    highlights: [
      "🏆 1st Place Winner",
      "💻 UPG College",
      "📅 Sept 2025"
    ],
    statistics: [
      { label: "Rank", value: "1st / Winner" },
      { label: "Event", value: "Hackathon" },
      { label: "Year", value: "2025" }
    ],
    galleryImages: [
      "/images/hackathon_group.jpg"
    ]
  },
  {
    id: "award-hsc-academic",
    title: "HSC Academic Excellence Award",
    description: "Scored 86.17% in the Higher Secondary Certificate (HSC) Examination and received a Certificate of Appreciation and Medal for outstanding academic performance during the academic year 2023–2024. Also recognized among the top-performing Commerce students by the college.",
    period: "June 2024",
    location: "Thakur Ramnarayan College of Arts & Commerce, Mumbai",
    image: "/images/hsc_award_ceremony.jpg",
    certificatePdf: "/certificates/hsc_appreciation_cert.pdf",
    certificatePreview: "/certificates/hsc_appreciation_preview.jpg",
    organization: "Thakur Ramnarayan College of Arts & Commerce",
    highlights: [
      "🏅 Certificate of Appreciation",
      "🥇 Academic Excellence",
      "🎖 Commerce Top Performer",
      "📚 Higher Secondary Certificate",
      "📈 86.17%"
    ],
    statistics: [
      { label: "Percentage", value: "86.17%" },
      { label: "Stream", value: "Commerce" },
      { label: "Academic Year", value: "2023–2024" }
    ],
    galleryImages: [
      "/images/hsc_award_ceremony.jpg",
      "/images/hsc_toppers_banner.jpg",
      "/images/hsc_trophy.jpg",
      "/images/hsc_toppers_banner_closeup.jpg"
    ],
    useImageForModal: true
  },
  {
    id: "award-android-car",
    title: "Android Controlled Car Project",
    description: "Developed and presented a Bluetooth-enabled robotic vehicle prototype controlled via an Android smartphone app using Arduino Uno microcontrollers and serial communication modules during Technovation'26.",
    period: "February 2026",
    location: "SVKM's Usha Pravin Gandhi College, Mumbai",
    image: "/images/android_car.jpg",
    certificatePdf: "/certificates/technovation_cert.pdf",
    certificatePreview: "/certificates/technovation_cert.pdf",
    organization: "SVKM's Usha Pravin Gandhi College",
    highlights: [
      "🤖 Android Controlled Car",
      "⚡ Arduino & Bluetooth",
      "🏅 Participation Award",
      "📅 Feb 2026"
    ],
    statistics: [
      { label: "Project", value: "Robotics / IoT" },
      { label: "Event", value: "Technovation'26" },
      { label: "Year", value: "2026" }
    ],
    galleryImages: [
      "/images/android_car.jpg"
    ],
    certificateLabel: "TECHNOVATION'26 Certificate of Participation",
    certificateIcon: "📜",
    certificateIssuedBy: "SVKM's Usha Pravin Gandhi College of Arts, Science & Commerce"
  }
];

const certificatesData: CertificateItem[] = [
  {
    id: "cert-innovex-hackathon-participation",
    title: "INNOVEX Hackathon – Participation Certificate",
    issuedBy: "Institution's Innovation Council (IIC) & SVKM's Usha Pravin Gandhi College of Arts, Science and Commerce",
    issueDate: "15 September 2025",
    certificatePdf: "/certificates/innovex_hackathon_participation_cert.pdf",
    certificatePreview: "/certificates/innovex_hackathon_participation_cert.pdf",
    category: "Certificate of Participation",
    description: "Participated in the INNOVEX Hackathon organized by the Institution's Innovation Council (IIC), collaborating on innovative problem-solving and presenting project ideas in a competitive hackathon environment.",
    hideDownloadButton: true,
    skills: [
      "Hackathon",
      "Innovation",
      "Problem Solving",
      "Team Collaboration",
      "Project Presentation",
      "Critical Thinking",
      "Design Thinking"
    ],
    details: [
      { label: "Organizer", value: "IIC & UPG" },
      { label: "Type", value: "Participation" },
      { label: "Date", value: "Sept 15, 2025" }
    ]
  },
  {
    id: "cert-google-pitch-night",
    title: "Google Pitch Night Edition",
    issuedBy: "Google Student Ambassador Program",
    issueDate: "21 May 2026",
    certificatePdf: "/certificates/google_pitch_night_cert.pdf",
    certificatePreview: "/certificates/google_pitch_night_cert.pdf",
    category: "Certificate of Participation",
    description: "Actively participated in the Google Student Ambassador Program – Pitch Night Edition, where innovative ideas were presented and creativity, communication, and pitching skills were showcased in a collaborative environment.",
    hideDownloadButton: true,
    skills: [
      "Public Speaking",
      "Pitch Presentation",
      "Innovation",
      "Creativity",
      "Communication",
      "Problem Solving",
      "Team Collaboration"
    ],
    details: [
      { label: "Issued By", value: "GSAP" },
      { label: "Type", value: "Participation" },
      { label: "Date", value: "May 21, 2026" }
    ]
  },
  {
    id: "cert-iide-digital-marketing",
    title: "Digital Marketing 101",
    issuedBy: "IIDE – Indian Institute of Digital Education",
    issueDate: "29 July 2024",
    certificatePdf: "/certificates/iide_digital_marketing_cert.pdf",
    certificatePreview: "/certificates/iide_digital_marketing_cert.pdf",
    category: "Seminar Participation Certificate",
    description: "Participated in the Digital Marketing 101 seminar organized by IIDE, gaining an introduction to digital marketing fundamentals, online branding, social media marketing, content strategy, and emerging digital marketing trends.",
    hideDownloadButton: true,
    skills: [
      "Digital Marketing",
      "Social Media Marketing",
      "Content Marketing",
      "Branding",
      "Marketing Fundamentals"
    ],
    details: [
      { label: "Issued By", value: "IIDE" },
      { label: "Type", value: "Seminar" },
      { label: "Date", value: "July 29, 2024" }
    ]
  },
  {
    id: "cert-codsoft-internship",
    title: "Web Development Internship Certificate",
    issuedBy: "CodSoft",
    issueDate: "April 2025",
    credentialId: "4936dd0",
    certificatePdf: "/certificates/codsoft_cert.pdf",
    certificatePreview: "/certificates/codsoft_cert.pdf",
    category: "Internship",
    description: "Successfully completed 4 weeks of a virtual internship program in Web Development from 20/03/2025 to 20/04/2025.",
    details: [
      { label: "Issued By", value: "CodSoft" },
      { label: "Credential", value: "4936dd0" },
      { label: "Status", value: "Completed" }
    ]
  },
  {
    id: "cert-hackerrank-python",
    title: "Python (Basic) Certificate",
    issuedBy: "HackerRank",
    issueDate: "July 2024",
    credentialId: "HR-PY-88392AB",
    certificatePdf: "/certificates/innovex_cert.pdf",
    certificatePreview: "/certificates/innovex_cert.pdf",
    category: "Technical",
    description: "Successfully earned the Python (Basic) certification from HackerRank by demonstrating foundational programming skills through practical assessments. The certification validates proficiency in Python syntax, functions, object-oriented programming, problem-solving, and core programming concepts used in software development.",
    skills: [
      "Python",
      "Problem Solving",
      "Object-Oriented Programming (OOP)",
      "Functions",
      "Data Structures",
      "Algorithms",
      "Programming Fundamentals"
    ],
    details: [
      { label: "Issued By", value: "HackerRank" },
      { label: "Credential", value: "HR-PY-88392AB" },
      { label: "Status", value: "Verified" }
    ]
  },
  {
    id: "cert-volunteer-rjf",
    title: "Community Service Volunteer",
    issuedBy: "Raichel Joseph Foundation (Saksham Vocational Centre)",
    issueDate: "February 2026",
    credentialId: "60 Hours Completed",
    certificatePdf: "/certificates/rjf_cert.pdf",
    certificatePreview: "/certificates/rjf_preview.jpg",
    category: "Volunteer",
    description: "Dedicated 60 hours assisting operations and training children in basic digital literacy and general computer skills at Saksham Centre.",
    details: [
      { label: "Issued", value: "RJF" },
      { label: "Hours", value: "60 Completed" },
      { label: "Status", value: "Verified" }
    ]
  },
  {
    id: "cert-hsc-appreciation",
    title: "Certificate of Appreciation",
    issuedBy: "Thakur Ramnarayan College of Arts & Commerce",
    issueDate: "June 2024",
    credentialId: "Academic Achievement",
    certificatePdf: "/certificates/hsc_appreciation_cert.pdf",
    certificatePreview: "/certificates/hsc_appreciation_preview.jpg",
    useImageForModal: true,
    category: "Academic",
    description: "Awarded for scoring 86.17% in Higher Secondary Certificate examination, recognizing placement among the top Commerce performers.",
    details: [
      { label: "Issued", value: "TRC" },
      { label: "Percent", value: "86.17%" },
      { label: "Status", value: "Academic Award" }
    ]
  },
  {
    id: "cert-technovation-26",
    title: "TECHNOVATION'26 Certificate of Participation",
    issuedBy: "SVKM's Usha Pravin Gandhi College of Arts, Science & Commerce",
    issueDate: "February 2026",
    credentialId: "Android Controlled Car Development",
    certificatePdf: "/certificates/technovation_cert.pdf",
    certificatePreview: "/certificates/technovation_cert.pdf",
    category: "Technical",
    description: "Successfully developed and presented the Android Controlled Car project during TECHNOVATION'26, demonstrating practical implementation of Arduino Uno, Bluetooth communication, and Android-based robotic vehicle control.",
    details: [
      { label: "Event", value: "TECHNOVATION'26" },
      { label: "Project", value: "Android Controlled Car" },
      { label: "Year", value: "2026" }
    ]
  }
];

const coursesData: CourseItem[] = [
  {
    id: "course-outskill-genai-mastermind",
    title: "Generative AI Mastermind",
    platform: "Outskill",
    courseType: "Certificate of Completion",
    completionDate: "",
    description: "Successfully completed the Generative AI Mastermind program by Outskill, gaining practical knowledge of modern AI tools, Large Language Models (LLMs), prompt engineering, AI-assisted workflows, and real-world applications of generative AI.",
    skills: [
      "Generative AI",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "AI Productivity",
      "AI Automation",
      "AI-Assisted Development",
      "Modern AI Tools"
    ],
    image: "/certificates/outskill_genai_mastermind_cert.pdf",
    certificatePdf: "/certificates/outskill_genai_mastermind_cert.pdf",
    certificatePreview: "/certificates/outskill_genai_mastermind_cert.pdf"
  },
  {
    id: "course-simplilearn-data-analytics",
    title: "Introduction to Data Analytics",
    platform: "Simplilearn SkillUp",
    courseType: "Online Course",
    completionDate: "12 July 2026",
    certificateCode: "10460369",
    description: "Successfully completed the Introduction to Data Analytics online course offered by Simplilearn SkillUp. The course introduced the fundamentals of data analytics, including data interpretation, visualization concepts, analytical thinking, and the role of data in business decision-making.",
    skills: [
      "Data Analytics",
      "Data Interpretation",
      "Data Visualization",
      "Business Analytics",
      "Analytical Thinking",
      "Data-Driven Decision Making"
    ],
    image: "/certificates/simplilearn_data_analytics_cert.pdf",
    certificatePdf: "/certificates/simplilearn_data_analytics_cert.pdf",
    certificatePreview: "/certificates/simplilearn_data_analytics_cert.pdf"
  },
  {
    id: "course-udemy-fullstack-new",
    title: "The Complete Full-Stack Web Development Bootcamp",
    platform: "Udemy",
    instructor: "Dr. Angela Yu",
    completionDate: "July 9, 2026",
    duration: "62 Hours",
    description: "Successfully completed a comprehensive full-stack web development bootcamp covering modern frontend and backend technologies through practical, project-based learning. The course focused on building responsive web applications, RESTful APIs, databases, authentication systems, and deploying real-world projects.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Bootstrap 5",
      "jQuery",
      "Node.js",
      "Express.js",
      "EJS",
      "PostgreSQL",
      "SQL",
      "REST APIs",
      "Authentication",
      "OAuth",
      "React.js",
      "Git",
      "GitHub",
      "Web Deployment"
    ],
    image: "/certificates/udemy_fullstack_bootcamp_cert.pdf",
    certificatePdf: "/certificates/udemy_fullstack_bootcamp_cert.pdf",
    certificatePreview: "/certificates/udemy_fullstack_bootcamp_cert.pdf"
  },
  {
    id: "course-aws-ai-apps",
    title: "Building an App Using Modern AI Tools",
    platform: "AWS Training & Certification",
    completionDate: "July 09, 2026",
    description: "Completed an AWS Training & Certification course focused on building modern AI-powered applications using contemporary AI development tools and workflows. The course introduces practical approaches to integrating AI capabilities into real-world applications and modern software development.",
    skills: [],
    image: "/certificates/aws_ai_tools_cert.pdf",
    certificatePdf: "/certificates/aws_ai_tools_cert.pdf",
    certificatePreview: "/certificates/aws_ai_tools_cert.pdf"
  }
];



const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

function AchievementCard({ item }: { item: AchievementItem }) {
  const [expanded, setExpanded] = useState(false);
  const visualUrl = item.certificatePreview || item.certificatePdf || item.image;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative flex flex-col glass rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] w-full"
    >
      {/* 1. Image / Certificate Preview */}
      <div className="relative w-full bg-black/25 flex items-center justify-center border-b border-white/5 p-2">
        <AutoCertificatePreview 
          url={visualUrl} 
          scale={1.5}
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col space-y-4">
        <div className="space-y-4 text-left">
          {/* 2. Title */}
          <h4 className="font-display text-lg font-bold text-foreground leading-tight">
            {item.title}
          </h4>

          {/* 3. Organization */}
          {item.organization && (
            <p className="text-xs font-semibold text-primary font-mono uppercase tracking-wide">
              {item.organization}
            </p>
          )}

          {/* 4. Date & Location */}
          <div className="flex flex-col gap-1.5 font-mono text-[11px] text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{item.location}</span>
            </div>
          </div>

          {/* 5. Description with Read More */}
          <div className="relative">
            <p className={`text-xs leading-relaxed text-muted-foreground transition-all duration-300 ${!expanded ? "line-clamp-3" : ""}`}>
              {item.description}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1 text-[11px] font-semibold text-primary hover:text-primary/80 transition focus:outline-none cursor-pointer"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* 6. Tags / Skills */}
          <div className="space-y-3">
            {/* Stats Row */}
            {item.statistics && item.statistics.length > 0 && (
              <div className="flex items-center justify-start flex-wrap gap-x-2 gap-y-1 py-2 px-3 bg-white/[0.02] border border-white/5 rounded-xl text-[11px] text-muted-foreground font-mono">
                {item.statistics.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    {idx > 0 && <span className="text-white/20">|</span>}
                    <span>
                      <strong className="text-foreground font-semibold">{stat.value}</strong> <span className="text-[10px] text-muted-foreground/60">({stat.label})</span>
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Highlights badges */}
            {item.highlights && item.highlights.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {item.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-white/5 bg-white/[0.02] px-2.5 py-1 text-[10px] text-muted-foreground transition duration-300 hover:border-primary/20 font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>


      </div>
    </motion.div>
  );
}

function CertificateCard({ item }: { item: CertificateItem }) {
  const visualUrl = item.certificatePreview || item.certificatePdf;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative flex flex-col glass rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] w-full"
    >
      {/* 1. Image / Certificate Preview */}
      <div className="relative w-full bg-black/25 flex items-center justify-center border-b border-white/5 p-2">
        <AutoCertificatePreview 
          url={visualUrl} 
          scale={1.5}
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col space-y-4">
        <div className="space-y-4 text-left">
          {/* 2. Title */}
          <h4 className="font-display text-lg font-bold text-foreground leading-tight">
            {item.title}
          </h4>

          {/* 3. Organization */}
          <p className="text-xs font-semibold text-primary font-mono uppercase tracking-wide">
            Issued By: {item.issuedBy}
          </p>

          {/* 4. Date */}
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>{item.issueDate}</span>
          </div>

          {/* 5. Description */}
          {item.description && (
            <p className="text-xs leading-relaxed text-muted-foreground font-mono">
              {item.description}
            </p>
          )}

          {/* 6. Tags / Skills */}
          <div className="space-y-3">
            {item.details && item.details.length > 0 && (
              <div className="flex items-center justify-start flex-wrap gap-x-2 gap-y-1 py-1.5 px-3 bg-white/[0.01] border border-white/5 rounded-xl text-[10px] text-muted-foreground font-mono">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    {idx > 0 && <span className="text-white/20">|</span>}
                    <span>
                      <span className="text-muted-foreground/60">{detail.label}:</span> <strong className="text-foreground font-medium">{detail.value}</strong>
                    </span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex flex-wrap gap-1">
              <span className="rounded-full border border-white/5 bg-white/[0.02] px-2.5 py-1 text-[10px] text-muted-foreground font-medium uppercase tracking-wider font-mono">
                {item.category}
              </span>
            </div>

            {item.skills && item.skills.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-1">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded bg-white/[0.02] border border-white/5 px-2 py-0.5 font-mono text-[9px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>


      </div>
    </motion.div>
  );
}

function CourseCard({ item }: { item: CourseItem }) {
  const visualUrl = item.certificatePreview || item.certificatePdf || item.image;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative flex flex-col glass rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] w-full"
    >
      {/* 1. Image / Certificate Preview */}
      <div className="relative w-full bg-black/25 flex items-center justify-center border-b border-white/5 p-2">
        <AutoCertificatePreview 
          url={visualUrl} 
          scale={1.5}
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col space-y-4">
        <div className="space-y-4 text-left">
          {/* 2. Title */}
          <h4 className="font-display text-lg font-bold text-foreground leading-tight">
            {item.title}
          </h4>

          {/* 3. Platform & Details */}
          <div className="space-y-1">
            <p className="text-xs font-semibold text-primary font-mono uppercase tracking-wide">
              {item.platform} {item.courseType && <span className="text-white/40">| {item.courseType}</span>}
            </p>
            {item.instructor && (
              <p className="text-xs text-muted-foreground">
                Instructor: <span className="text-foreground font-semibold">{item.instructor}</span>
              </p>
            )}
            {item.certificateCode && (
              <p className="text-[10px] font-mono text-muted-foreground">
                Certificate Code: <span className="text-foreground font-mono">{item.certificateCode}</span>
              </p>
            )}
          </div>

          {/* 4. Date & Duration */}
          {(item.completionDate || item.duration) && (
            <div className="flex flex-col gap-1.5 font-mono text-[11px] text-muted-foreground">
              {item.completionDate && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>{item.completionDate}</span>
                </div>
              )}
              {item.duration && (
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>Duration: {item.duration}</span>
                </div>
              )}
            </div>
          )}

          {/* 5. Description */}
          {item.description && (
            <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
              {item.description}
            </p>
          )}

          {/* 6. Tags / Skills */}
          {item.skills && item.skills.length > 0 && (
            <div className="space-y-2 pt-2">
              <span className="block text-[9px] font-mono uppercase tracking-widest text-muted-foreground/60">Skills Learned</span>
              <div className="flex flex-wrap gap-1">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded bg-white/[0.02] border border-white/5 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}



export default function Accomplishments() {
  function MasonryLayout<T>({ items, renderItem }: { items: T[]; renderItem: (item: T) => React.ReactNode }) {
    const cols1 = [items];

    const cols2 = [[], []] as T[][];
    items.forEach((item, idx) => {
      cols2[idx % 2].push(item);
    });

    const cols3 = [[], [], []] as T[][];
    items.forEach((item, idx) => {
      cols3[idx % 3].push(item);
    });

    return (
      <div className="w-full">
        {/* Desktop Layout: 3 Columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-start">
          {cols3.map((colItems, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-6">
              {colItems.map((item) => renderItem(item))}
            </div>
          ))}
        </div>

        {/* Tablet Layout: 2 Columns */}
        <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-6 items-start">
          {cols2.map((colItems, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-6">
              {colItems.map((item) => renderItem(item))}
            </div>
          ))}
        </div>

        {/* Mobile Layout: 1 Column */}
        <div className="grid sm:hidden grid-cols-1 gap-6 items-start">
          {cols1.map((colItems, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-6">
              {colItems.map((item) => renderItem(item))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function SectionHeading({ title, description }: { title: string; description: string }) {
    return (
      <div className="mb-8 text-left">
        <h3 className="font-display text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{description}</p>
        <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/30 via-white/5 to-transparent" />
      </div>
    );
  }

  function EmptyState({ message }: { message: string }) {
    return (
      <div className="glass flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-white/[0.01] p-10 text-center transition duration-300 hover:border-primary/20 min-h-[200px]">
        <Award className="h-10 w-10 text-muted-foreground/30 animate-pulse mb-3" />
        <p className="text-sm font-medium text-muted-foreground">{message}</p>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <Section id="accomplishments">
        <SectionHeader 
          eyebrow="Accomplishments" 
          title={<>Accomplishments</>} 
          description="A showcase of my achievements, certifications, completed courses, workshops, and continuous learning journey."
        />

        <div className="mt-16 space-y-32 max-w-6xl mx-auto">
          
          {/* 🏆 SECTION 1: Achievements */}
          <section className="space-y-6">
            <SectionHeading 
              title="🏆 Achievements" 
              description="Major achievements, awards, hackathons, competitions, recognitions, and important milestones."
            />
            {achievementsData.length > 0 ? (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                <MasonryLayout
                  items={achievementsData}
                  renderItem={(item) => (
                    <AchievementCard 
                      key={item.id} 
                      item={item} 
                    />
                  )}
                />
              </motion.div>
            ) : (
              <EmptyState message="No achievements added yet." />
            )}
          </section>

          {/* 📜 SECTION 2: Certificates */}
          <section className="space-y-6">
            <SectionHeading 
              title="📜 Certificates" 
              description="A collection of certificates issued by organizations, colleges, companies, workshops, internships, volunteer programs, and competitions."
            />
            {certificatesData.length > 0 ? (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                <MasonryLayout
                  items={certificatesData}
                  renderItem={(item) => (
                    <CertificateCard 
                      key={item.id}
                      item={item}
                    />
                  )}
                />
              </motion.div>
            ) : (
              <EmptyState message="No certificates added yet." />
            )}
          </section>

          {/* 🎓 SECTION 3: Completed Courses */}
          <section className="space-y-6">
            <SectionHeading 
              title="🎓 Completed Courses" 
              description="Courses and training programs I have successfully completed throughout my learning journey."
            />
            {coursesData.length > 0 ? (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                <MasonryLayout
                  items={coursesData}
                  renderItem={(item) => (
                    <CourseCard 
                      key={item.id} 
                      item={item} 
                    />
                  )}
                />
              </motion.div>
            ) : (
              <EmptyState message="No completed courses added yet." />
            )}
          </section>

        </div>
      </Section>

      <Footer simple />
    </div>
  );
}
