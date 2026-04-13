"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Crown,
  BookOpen,
  Cpu,
  Github,
  Mail,
  Briefcase,
  Phone,
  GraduationCap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const About = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, 240]);
  const [currentFrame, setCurrentFrame] = useState(1);
  const smoothFrame = useSpring(frameIndex, { stiffness: 80, damping: 20 });

  useEffect(() => {
    return smoothFrame.on("change", (latest) => {
      setCurrentFrame(Math.max(1, Math.min(240, Math.floor(latest))));
    });
  }, [smoothFrame]);

  const paddedFrame = String(currentFrame).padStart(3, "0");
  const imagePath = `/about/ezgif-frame-${paddedFrame}.png`;

  return (
    <section
      id="about"
      className="relative overflow-x-clip bg-[#050505] text-[#E5E5E5] py-48 font-sans"
    >
      {/* Subtle Royal Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-900/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto max-w-[1500px] relative z-10">
        {/* HEADER */}
        <div className="mb-36 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-4 text-yellow-600 mb-4">
              <div className="h-px w-12 bg-yellow-700/50" />
              <Crown size={20} className="stroke-[1.5px]" />
              <div className="h-px w-12 bg-yellow-700/50" />
            </div>
            <h2 className="text-[clamp(3rem,12vw,10rem)] font-black  tracking-tight leading-[1.05] text-white px-2 md:px-0">
              Who{" "}
              <span className="inline-block pr-[0.08em] font-sans font-black not-italic text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300">
                Am I?
              </span>
            </h2>
          </motion.div>
        </div>

        {/* MAIN GRID — ref here for scroll tracking */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start"
        >
          {/* LEFT — STICKY */}
          <div className="lg:col-span-6 sticky top-32 self-start">
            <div className="relative">
              <div className="absolute -inset-2  pointer-events-none" />

              <div className="relative aspect-[5/4]  overflow-hidden ">
                <img
                  src={imagePath}
                  alt="Frame Sequence"
                  className="w-full h-full object-cover  brightness-90 grayscale-[50%] transition-all duration-1000"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — SCROLLABLE CONTENT */}
          <div className="lg:col-span-6 lg:pr-8 space-y-32 pt-12">
            {/* Bio */}
            <div className="max-w-2xl px-4 md:px-0">
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-yellow-700/30 text-[9px] font-mono text-yellow-600 uppercase tracking-[0.3em] mb-12">
                <span className="w-1 h-1 bg-yellow-600 rounded-full animate-pulse" />
                Overview
              </div>
              <h3 className="text-6xl md:text-6xl text-white font-bold leading-[0.95] mb-12 tracking-tighter">
                Blending <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-600  lowercase">
                  Logic
                </span>{" "}
                with <br />
                Modern Design.
              </h3>
              <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed border-l border-zinc-800 pl-10 ml-2">
                A Full-Stack Developer & CSE Undergrad at the{" "}
                <span className="text-white">University of Moratuwa</span>.
                Building fast, scalable systems and clean digital experiences
                where engineering meets thoughtful design.
              </p>
            </div>

            {/* Experience - Already has the center-split hover */}
            <div className="space-y-12">
              <div className="flex items-center gap-6 mb-8">
                <Briefcase size={18} className="text-yellow-600" />
                <span className="h-[1px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-500">
                  Work Experience
                </span>
              </div>
              <div className="divide-y divide-white/5">
                {[
                  {
                    company: "Keen Mind Mobile Solutions",
                    role: "Software Engineer Intern",
                    active: true,
                    desc: "Delivered mobile-centric infrastructure and optimized backend response times.",
                  },
                  {
                    company: "LushWare Organization",
                    role: "Full Stack Developer",
                    active: true,
                  },
                  {
                    company: "Construx Solutions",
                    role: "Full Stack Developer",
                    active: true,
                  },
                ].map((job, i) => (
                  <motion.div
                    key={i}
                    className="relative py-10 px-4 md:px-8 group overflow-hidden transition-all duration-700"
                  >
                    {/* Horizontal Split Reveal */}
                    <span className="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-0 bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-full -z-0" />

                    <div className="relative z-10 group-hover:text-black transition-colors duration-500">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-3">
                        <h4 className="text-4xl md:text-4xl font-bold tracking-tighter uppercase">
                          {job.company}
                        </h4>
                        <span className="text-yellow-600 text-[10px] uppercase font-mono tracking-widest">
                          {job.active ? "Active" : "// 2023"}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-sm uppercase tracking-[0.3em] group-hover:text-zinc-800">
                        {job.role}
                      </p>
                      {job.desc && (
                        <p className="mt-3 text-zinc-400 text-lg leading-relaxed max-w-xl group-hover:text-black">
                          {job.desc}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education - Ultra-Minimalist Registry */}
            <div className="mt-20 space-y-0 ">
              <div className="flex items-center gap-6 mb-12">
                <BookOpen size={18} className="text-yellow-600" />
                <span className="h-[1px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-500">
                  Education
                </span>
              </div>
              {/* Row 1: University */}
              <div className="group relative py-8 grid grid-cols-1 md:grid-cols-12 items-center px-4 md:px-8 border-b border-white/5 overflow-hidden transition-all duration-700">
                <span className="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-0 bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-full -z-0" />

                {/* Identity & Faculty */}
                <div className="md:col-span-9 space-y-1 relative z-10">
                  <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none transition-colors duration-500 group-hover:text-black">
                    University of Moratuwa
                  </h4>
                  <p className="text-lg text-zinc-400 font-serif transition-colors duration-500 group-hover:text-zinc-800">
                    BSc (Hons) Computer Science & Engineering
                  </p>
                </div>

                {/* Metadata */}
                <div className="md:col-span-3 text-left md:text-right mt-6 md:mt-0 relative z-10">
                  <p className="text-[12px] font-mono text-yellow-600 uppercase tracking-widest mb-1 transition-colors duration-500 group-hover:text-zinc-700">
                    Level 04 // Undergraduate
                  </p>
                  <p className="text-sm text-zinc-500 font-semibold uppercase tracking-tighter transition-colors duration-500 group-hover:text-zinc-700">
                    Faculty of Engineering
                  </p>
                </div>
              </div>

              {/* Row 2: Secondary School */}
              <div className="group relative py-10 grid grid-cols-1 md:grid-cols-12 items-center px-4 md:px-8 border-b border-white/5 overflow-hidden transition-all duration-700">
                <span className="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-0 bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-full -z-0" />

                {/* Identity */}
                <div className="md:col-span-9 relative z-10">
                  <h4 className="text-2xl md:text-3xl font-bold text-white transition-colors tracking-tighter uppercase leading-none duration-500 group-hover:text-black">
                    Beliatta Central College
                  </h4>
                  <p className="text-md text-zinc-400 font-serif mt-1 transition-colors duration-500 group-hover:text-zinc-800">
                    Secondary Foundation // Physical Science
                  </p>
                </div>

                {/* Meta */}
                <div className="md:col-span-3 text-left md:text-right mt-4 md:mt-0 relative z-10">
                  <span className="text-[12px] font-mono px-3 py-1 border border-zinc-500 text-zinc-400 uppercase tracking-widest transition-colors duration-500 group-hover:border-zinc-700 group-hover:text-zinc-700">
                    Distinction
                  </span>
                </div>
              </div>
            </div>

            {/* Toolset - Grid Upgrade */}
            <div className="space-y-12">
              <div className="flex items-center gap-6 mb-12">
                <Cpu size={18} className="text-yellow-600" />
                <span className="h-[1px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-500">
                  Technologies
                </span>
              </div>
              {/* Toolset - High-Density Technical Manifest */}
              <div className="mt-12 ">
                {[
                  {
                    group: "Languages & Core",
                    skills: [
                      "Python",
                      "Java",
                      "TypeScript",
                      "JavaScript",
                      "C#",
                      "C++",

                      "SQL",
                    ],
                  },
                  {
                    group: "Backend Engineering",
                    skills: [
                      "Node.js",
                      "Express.js",
                      "Spring Boot",
                      "ASP.NET Core",
                      "FastAPI",
                      "REST APIs",
                      "GraphQL",
                      "Authentication (JWT, OAuth)",
                      "Microservices",
                    ],
                  },
                  {
                    group: "Frontend Engineering",
                    skills: [
                      "React",
                      "Next.js",
                      "Angular",
                      "HTML5",
                      "CSS3",
                      "Tailwind CSS",
                      "Framer Motion",
                    ],
                  },
                  {
                    group: "Mobile Development",
                    skills: [
                      "Flutter",
                      "React Native",
                      "Dart",
                      "Responsive Design",
                    ],
                  },
                  {
                    group: "Databases & Storage",
                    skills: [
                      "PostgreSQL",
                      "MongoDB",
                      "MySQL",
                      "Firebase",
                      "Redis",
                    ],
                  },
                  {
                    group: "AI & Machine Learning",
                    skills: [
                      "Python (AI/ML)",
                      "NumPy",
                      "Pandas",
                      "Scikit-learn",
                      "TensorFlow",
                      "PyTorch",
                      "OpenAI API",
                      "Prompt Engineering",
                      "Model Fine-tuning",
                      "Data Preprocessing",
                    ],
                  },
                  {
                    group: "DevOps & Tools",
                    skills: [
                      "Git",
                      "GitHub",
                      "Docker",
                      "CI/CD",
                      "Linux",
                      "Vercel",
                      "Netlify",
                    ],
                  },
                  {
                    group: "Design & Architecture",
                    skills: [
                      "UI/UX Design",
                      "System Design",
                      "Scalable Architecture",
                      "Performance Optimization",
                      "Clean Code",
                    ],
                  },
                ].map((cat, idx) => (
                  <div
                    key={idx}
                    className="group relative flex flex-col md:flex-row items-baseline py-4 border-b border-white/[0.03] transition-all duration-700 px-2 overflow-hidden"
                  >
                    <span className="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-0 bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-full -z-0" />

                    {/* Short Category Code */}
                    <div className="shrink-0 relative z-10 md:min-w-[180px]">
                      <span className="text-[12px] text-red-600 font-semibold uppercase transition-colors duration-500 group-hover:text-zinc-700">
                        {cat.group}
                      </span>
                    </div>

                    {/* Inline Skills - Bulleted Style */}
                    <div className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-1">
                      {cat.skills.map((skill, sIdx) => (
                        <div key={skill} className="flex items-center gap-3">
                          <span className="text-sm font-bold text-zinc-500 transition-colors duration-500 cursor-crosshair uppercase tracking-tighter group-hover:text-black">
                            {skill}
                          </span>
                          {/* Minimal Dot Separator */}
                          {sIdx !== cat.skills.length - 1 && (
                            <span className="w-[2px] h-[2px] bg-zinc-800 rounded-full transition-colors duration-500 group-hover:bg-zinc-700" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Contact Panel */}
            <div className="mt-12 space-y-3">
              <div className="flex items-center gap-6 mb-12">
                <Mail size={18} className="text-yellow-600" />
                <span className="h-[1px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-500">
                  Contact
                </span>
              </div>

              {[
                {
                  icon: Mail,
                  label: "chamindus.22@cse.mrt.ac.lk",
                  href: "mailto:chamindus.22@cse.mrt.ac.lk",
                },
                {
                  icon: Phone,
                  label: "+94 71 927 8827",
                  href: "tel:+94719278827",
                },
                {
                  icon: Github,
                  label: "github.com/Chamindu24",
                  href: "https://github.com/Chamindu24",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group relative flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 hover:border-yellow-900/50 transition-all duration-500 rounded-sm overflow-hidden"
                >
                  {/* Background animation */}
                  <span className="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-0 bg-white transition-all duration-700 ease-in-out group-hover:h-full -z-0" />

                  {/* Content */}
                  <div className="flex items-center gap-5 relative z-10 pointer-events-none">
                    <item.icon
                      size={16}
                      className="text-zinc-500 transition-colors duration-500 group-hover:text-black"
                    />
                    <span className="text-xs font-semibold uppercase tracking-widest transition-colors duration-500 group-hover:text-black">
                      {item.label}
                    </span>
                  </div>

                  {/* Arrow */}
                  <ExternalLink
                    size={14}
                    className="opacity-0 transition-all duration-500 relative z-10 group-hover:opacity-100 group-hover:text-black"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="pt-32 max-w-6xl mx-auto border-t border-zinc-900">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9] text-white">
            Designing and building{" "}
            <span className="text-red-600">reliable</span>, scalable software
            that solves real-world problems.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
