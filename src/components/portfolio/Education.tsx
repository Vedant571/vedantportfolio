import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const courseworkData = [
  { name: "Data Structures & Algorithms", icon: "🧠" },
  { name: "Database Management Systems", icon: "🗄" },
  { name: "Core Java", icon: "☕" },
  { name: "Web Technologies", icon: "💻" },
  { name: "Networking Technology", icon: "🌐" },
  { name: "Embedded Systems", icon: "⚙" },
  { name: "Software Engineering", icon: "📚" },
  { name: "Python Programming", icon: "🐍" },
];

const educationData = [
  {
    type: "college",
    badge: "🎓 College",
    image: "/images/upg_college.jpg",
    degree: "Bachelor of Science",
    qualification: "Information Technology",
    institution: "SVKM's Usha Pravin Gandhi College of Arts, Science & Commerce",
    location: "📍 Mumbai, Maharashtra",
    years: "2024 – 2027",
    cgpa: "8.57",
    cgpaMax: "10",
    semesters: [
      { sem: "Semester I", gpa: "8.55" },
      { sem: "Semester II", gpa: "8.64" },
      { sem: "Semester III", gpa: "8.73" },
      { sem: "Semester IV", gpa: "8.36" },
    ],
  },
  {
    type: "hsc",
    badge: "📘 Higher Secondary",
    image: "/images/tr_college.jpg",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Thakur Ramnarayan College of Arts & Commerce",
    location: "📍 Mumbai, Maharashtra",
    years: "Graduated • 2024",
    percentage: "86.16%",
    marks: "517 / 600",
    description: "Successfully completed Higher Secondary education with 86.16%, building a strong academic foundation for pursuing Information Technology.",
  },
  {
    type: "ssc",
    badge: "🏫 Secondary School",
    image: "/images/st_xaviers.jpg",
    degree: "Secondary School Certificate (SSC)",
    institution: "St. Xavier's High School",
    location: "📍 Mumbai, Maharashtra",
    years: "Graduated • 2022",
    percentage: "73.80%",
    marks: "369 / 500",
    description: "Successfully completed Secondary School education with 73.80%, developing a strong foundation in mathematics, science, and analytical thinking.",
  },
];

export default function Education() {
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
    <Section id="education">
      <SectionHeader eyebrow="Education" title={<>Academic <span className="text-gradient">journey</span></>} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 mt-16 max-w-5xl mx-auto"
      >
        {educationData.map((item, index) => (
          <motion.div
            key={item.institution}
            variants={cardVariants}
            {...floatAnimation(index * 0.5)}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="group relative flex flex-col md:flex-row w-full glass rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.18)]"
          >
            {/* LEFT SIDE (40% desktop & tablet) - Large featured image */}
            <div className="relative w-full md:w-[40%] h-[320px] md:h-auto min-h-[320px] overflow-hidden rounded-2xl md:rounded-l-2xl md:rounded-r-none flex-shrink-0 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <img
                src={item.image}
                alt={item.institution}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Stronger dark gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />
              
              {/* Overlaid Text */}
              <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-[10px] font-bold uppercase tracking-wider text-white mb-3 backdrop-blur-md">
                  {item.years}
                </span>
                
                <h4 className="font-display text-2xl font-bold text-white leading-tight tracking-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
                  {item.degree}
                  {item.qualification && (
                    <span className="block text-white/95 text-lg font-medium mt-0.5">{item.qualification}</span>
                  )}
                </h4>
                
                <p className="text-xs text-white/80 mt-2 font-medium tracking-wide leading-relaxed [text-shadow:0_1px_5px_rgba(0,0,0,0.6)]">
                  {item.institution}
                </p>
                
                <div className="flex items-center gap-1 text-[11px] text-white/70 mt-2 font-mono tracking-wide [text-shadow:0_1px_5px_rgba(0,0,0,0.5)]">
                  {item.location}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (60% desktop & tablet) - Educational Information */}
            <div className="w-full md:w-[60%] p-8 md:p-10 flex flex-col justify-between">
              {item.type === "college" ? (
                <div className="space-y-6">
                  {/* Academic Overview Header */}
                  <div className="flex justify-between items-start">
                    {/* Academic Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-semibold tracking-wider text-muted-foreground uppercase glass">
                      {item.badge}
                    </div>
                    
                    {/* Highlighted CGPA with subtle glow */}
                    <div className="flex flex-col items-end">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Current CGPA
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-gradient text-4xl font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(104,117,245,0.45)]">
                          {item.cgpa}
                        </span>
                        <span className="text-xs text-muted-foreground">/ {item.cgpaMax}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                      Academic Overview
                    </h4>
                    
                    {/* Semester Performance Grid */}
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-2">
                      Semester Performance
                    </h5>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {item.semesters?.map((s, idx) => (
                        <div
                          key={idx}
                          className="glass rounded-2xl p-3 border border-white/5 bg-white/[0.01] text-center transition-all duration-300 hover:bg-white/[0.03] hover:border-primary/20"
                        >
                          <span className="text-[10px] text-muted-foreground font-mono block uppercase">
                            {s.sem}
                          </span>
                          <span className="text-base font-bold text-foreground mt-1 block">
                            {s.gpa}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Relevant Coursework BADGES */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {courseworkData.map((c) => (
                        <span
                          key={c.name}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:border-primary/45 hover:bg-primary/5 hover:text-primary hover:-translate-y-0.5"
                        >
                          {c.icon} {c.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col justify-between space-y-6">
                  <div className="flex justify-between items-start">
                    {/* Academic Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-semibold tracking-wider text-muted-foreground uppercase glass">
                      {item.badge}
                    </div>
                    
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Academic Performance
                    </span>
                  </div>

                  {/* Percentage & Marks Stats */}
                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                    <div className="glass rounded-2xl p-4 border border-white/5 bg-white/[0.01]">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block">
                        Percentage
                      </span>
                      <span className="text-gradient font-display text-3xl font-extrabold mt-1.5 block">
                        {item.percentage}
                      </span>
                    </div>
                    
                    <div className="glass rounded-2xl p-4 border border-white/5 bg-white/[0.01]">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block">
                        Marks Obtained
                      </span>
                      <span className="text-foreground font-display text-3xl font-extrabold mt-1.5 block">
                        {item.marks}
                      </span>
                    </div>
                  </div>

                  {/* Refined Description Text */}
                  <div className="text-xs text-muted-foreground/80 leading-relaxed border-t border-white/5 pt-4">
                    {item.description}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}