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

const TOTAL_FRAMES = 240;
const INITIAL_PRELOAD_COUNT = 24;

const clampFrame = (frame) => Math.max(1, Math.min(TOTAL_FRAMES, frame));
const getFramePath = (frame) => {
  const paddedFrame = String(clampFrame(frame)).padStart(3, "0");
  return `/about/ezgif-frame-${paddedFrame}.png`;
};

const findNearestLoadedFrame = (targetFrame, loadedFrames) => {
  if (loadedFrames.has(targetFrame)) return targetFrame;
  for (let offset = 1; offset < TOTAL_FRAMES; offset += 1) {
    const prev = targetFrame - offset;
    const next = targetFrame + offset;
    if (prev >= 1 && loadedFrames.has(prev)) return prev;
    if (next <= TOTAL_FRAMES && loadedFrames.has(next)) return next;
  }
  return 1;
};

const About = () => {
  const containerRef = useRef(null);
  const loadedFramesRef = useRef(new Set());

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [displayFrame, setDisplayFrame] = useState(1);
  const [loadedTick, setLoadedTick] = useState(0);
  const smoothFrame = useSpring(frameIndex, { stiffness: 80, damping: 20 });

  const markFrameLoaded = (frame) => {
    if (loadedFramesRef.current.has(frame)) return;
    loadedFramesRef.current.add(frame);
    setLoadedTick((v) => v + 1);
  };

  const preloadFrame = (frame) => {
    const normalized = clampFrame(frame);
    if (loadedFramesRef.current.has(normalized)) return;
    const img = new Image();
    img.decoding = "async";
    img.src = getFramePath(normalized);
    img.onload = () => markFrameLoaded(normalized);
  };

  useEffect(() => {
    return smoothFrame.on("change", (latest) => {
      setCurrentFrame(clampFrame(Math.floor(latest)));
    });
  }, [smoothFrame]);

  useEffect(() => {
    markFrameLoaded(1);
    preloadFrame(1);
    for (let frame = 2; frame <= INITIAL_PRELOAD_COUNT; frame += 1) {
      preloadFrame(frame);
    }
    let cursor = INITIAL_PRELOAD_COUNT + 1;
    let idleId;
    let timeoutId;
    const loadBatch = () => {
      const batchEnd = Math.min(cursor + 15, TOTAL_FRAMES + 1);
      for (; cursor < batchEnd; cursor += 1) preloadFrame(cursor);
      if (cursor <= TOTAL_FRAMES) timeoutId = window.setTimeout(loadBatch, 30);
    };
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(loadBatch);
    } else {
      timeoutId = window.setTimeout(loadBatch, 30);
    }
    return () => {
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    for (let offset = -8; offset <= 8; offset += 1)
      preloadFrame(currentFrame + offset);
  }, [currentFrame]);

  useEffect(() => {
    setDisplayFrame(
      findNearestLoadedFrame(currentFrame, loadedFramesRef.current),
    );
  }, [currentFrame, loadedTick]);

  const imagePath = getFramePath(displayFrame);

  return (
    <section
      id="about"
      className="relative overflow-x-clip bg-[#050505] text-[#E5E5E5] py-24 md:py-48 font-sans"
    >
      {/* Subtle Royal Accent */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-yellow-900/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── HEADER ── */}
        <div className="mb-20 md:mb-32 flex flex-col items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* The Crown "Stamp" */}
            <div className="relative mb-10 flex justify-center">
              <div className="absolute inset-0 blur-2xl opacity-20" />

              <div className="relative flex items-center justify-center w-16 h-16 border border-red-600/30 rounded-full">
                <Crown size={24} className="text-red-600 stroke-[1.2px]" />
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="relative z-10 font-serif italic text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] text-white tracking-tighter">
              Who{" "}
              <span className="not-italic font-sans font-black uppercase tracking-normal bg-gradient-to-r from-white via-zinc-200 to-zinc-200 bg-clip-text text-transparent">
                Am I<span className="text-red-600 ml-1">?</span>
              </span>
            </h2>

            {/* Ghost/Background Text for Depth */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 -z-10 opacity-[0.1] select-none">
              <span className="text-[15vw] font-black text-white whitespace-nowrap">
                ESTABLISHED
              </span>
            </div>
          </motion.div>

          {/* Sub-decorative element */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            className="h-1 bg-red-600 mt-8"
          />
        </div>
        {/* ── MAIN GRID ── */}
        {/*
          On mobile:  single column — sticky image on top, content scrolls below.
          On desktop: 12-col grid as before.

          The trick for mobile sticky:
          We wrap everything in `containerRef` so scrollYProgress tracks the
          ENTIRE content. The image col uses `sticky top-4` which works in a
          single-column flow too.
        */}
        <div
          ref={containerRef}
          className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-24 lg:items-start"
        >
          {/* ── LEFT — STICKY IMAGE ── */}
          <div className="lg:col-span-6 sticky top-4 lg:top-32 self-start z-20 mb-0">
            {/* On mobile we make the image a bit shorter so content is visible */}
            <div className="relative">
              <div className="relative  sm:aspect-[6/3] lg:aspect-[5/4] overflow-hidden">
                <img
                  src={imagePath}
                  alt="Frame Sequence"
                  className="w-full h-full object-cover brightness-90 grayscale-[50%] transition-all duration-1000"
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT — SCROLLABLE CONTENT ── */}
          {/*
            On mobile: we need enough height so the sticky image actually
            animates. We use min-h + padding to push the scroll distance.
            On desktop it's natural from grid height.
          */}
          <div className="lg:col-span-6 lg:pr-8 space-y-20 md:space-y-32 pt-8 lg:pt-12">
            {/* ── Bio ── */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-yellow-700/30 text-[9px] font-mono text-yellow-600 uppercase tracking-[0.3em] mb-8 md:mb-12">
                <span className="w-1 h-1 bg-yellow-600 rounded-full animate-pulse" />
                Overview
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-[0.95] mb-8 md:mb-12 tracking-tighter">
                Blending <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-600 lowercase">
                  Logic
                </span>{" "}
                with <br />
                Modern Design.
              </h3>
              <p className="text-zinc-400 text-lg sm:text-xl md:text-2xl font-light leading-relaxed border-l border-zinc-800 pl-6 md:pl-10 ml-1 md:ml-2">
                A Full-Stack Developer & CSE Undergrad at the{" "}
                <span className="text-white">University of Moratuwa</span>.
                Building fast, scalable systems and clean digital experiences
                where engineering meets thoughtful design.
              </p>
            </div>

            {/* ── Work Experience ── */}
            <div className="space-y-8 md:space-y-12">
              <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                <Briefcase size={16} className="text-yellow-600 shrink-0" />
                <span className="h-[1px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-500 whitespace-nowrap">
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
                    className="relative py-7 md:py-10 px-3 md:px-8 group overflow-hidden transition-all duration-700"
                  >
                    <span className="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-0 bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-full -z-0" />
                    <div className="relative z-10 group-hover:text-black transition-colors duration-500">
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-6 mb-2 md:mb-3">
                        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-tight">
                          {job.company}
                        </h4>
                        <span className="text-yellow-600 text-[10px] uppercase font-mono tracking-widest shrink-0">
                          {job.active ? "Active" : "// 2023"}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-xs sm:text-sm uppercase tracking-[0.3em] group-hover:text-zinc-800">
                        {job.role}
                      </p>
                      {job.desc && (
                        <p className="mt-2 md:mt-3 text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl group-hover:text-black">
                          {job.desc}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Education ── */}
            <div className="space-y-0">
              <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                <BookOpen size={16} className="text-yellow-600 shrink-0" />
                <span className="h-[1px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-500 whitespace-nowrap">
                  Education
                </span>
              </div>

              {/* University */}
              <div className="group relative py-7 md:py-8 grid grid-cols-1 sm:grid-cols-12 items-center px-3 md:px-8 border-b border-white/5 overflow-hidden transition-all duration-700">
                <span className="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-0 bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-full -z-0" />
                <div className="sm:col-span-8 space-y-1 relative z-10">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none transition-colors duration-500 group-hover:text-black">
                    University of Moratuwa
                  </h4>
                  <p className="text-base md:text-lg text-zinc-400 font-serif transition-colors duration-500 group-hover:text-zinc-800">
                    BSc (Hons) Computer Science & Engineering
                  </p>
                </div>
                <div className="sm:col-span-4 text-left sm:text-right mt-4 sm:mt-0 relative z-10">
                  <p className="text-[11px] md:text-[12px] font-mono text-yellow-600 uppercase tracking-widest mb-1 transition-colors duration-500 group-hover:text-zinc-700">
                    Level 04 // Undergraduate
                  </p>
                  <p className="text-xs md:text-sm text-zinc-500 font-semibold uppercase tracking-tighter transition-colors duration-500 group-hover:text-zinc-700">
                    Faculty of Engineering
                  </p>
                </div>
              </div>

              {/* Secondary School */}
              <div className="group relative py-7 md:py-10 grid grid-cols-1 sm:grid-cols-12 items-center px-3 md:px-8 border-b border-white/5 overflow-hidden transition-all duration-700">
                <span className="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-0 bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-full -z-0" />
                <div className="sm:col-span-8 relative z-10">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white transition-colors tracking-tighter uppercase leading-none duration-500 group-hover:text-black">
                    Beliatta Central College
                  </h4>
                  <p className="text-sm md:text-md text-zinc-400 font-serif mt-1 transition-colors duration-500 group-hover:text-zinc-800">
                    Secondary Foundation // Physical Science
                  </p>
                </div>
                <div className="sm:col-span-4 text-left sm:text-right mt-4 sm:mt-0 relative z-10">
                  <span className="text-[11px] md:text-[12px] font-mono px-3 py-1 border border-zinc-500 text-zinc-400 uppercase tracking-widest transition-colors duration-500 group-hover:border-zinc-700 group-hover:text-zinc-700">
                    Distinction
                  </span>
                </div>
              </div>
            </div>

            {/* ── Technologies ── */}
            <div className="space-y-8 md:space-y-12">
              <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                <Cpu size={16} className="text-yellow-600 shrink-0" />
                <span className="h-[1px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-500 whitespace-nowrap">
                  Technologies
                </span>
              </div>

              <div>
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
                    className="group relative flex flex-col sm:flex-row items-baseline py-4 border-b border-white/[0.03] transition-all duration-700 px-2 overflow-hidden gap-2 sm:gap-0"
                  >
                    <span className="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-0 bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-full -z-0" />

                    <div className="shrink-0 relative z-10 sm:min-w-[160px] md:min-w-[180px]">
                      <span className="text-[11px] md:text-[12px] text-red-600 font-semibold uppercase transition-colors duration-500 group-hover:text-zinc-700">
                        {cat.group}
                      </span>
                    </div>

                    <div className="relative z-10 flex flex-wrap items-center gap-x-3 md:gap-x-4 gap-y-1">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 md:gap-3"
                        >
                          <span className="text-xs md:text-sm font-bold text-zinc-500 transition-colors duration-500 cursor-crosshair uppercase tracking-tighter group-hover:text-black">
                            {skill}
                          </span>
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

            {/* ── Contact ── */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                <Mail size={16} className="text-yellow-600 shrink-0" />
                <span className="h-[1px] flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-500 whitespace-nowrap">
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
                  className="group relative flex items-center justify-between p-4 md:p-5 bg-white/[0.02] border border-white/5 hover:border-yellow-900/50 transition-all duration-500 rounded-sm overflow-hidden"
                >
                  <span className="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-0 bg-white transition-all duration-700 ease-in-out group-hover:h-full -z-0" />
                  <div className="flex items-center gap-3 md:gap-5 relative z-10 pointer-events-none min-w-0">
                    <item.icon
                      size={14}
                      className="text-zinc-500 transition-colors duration-500 group-hover:text-black shrink-0"
                    />
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest transition-colors duration-500 group-hover:text-black truncate">
                      {item.label}
                    </span>
                  </div>
                  <ExternalLink
                    size={13}
                    className="opacity-0 transition-all duration-500 relative z-10 group-hover:opacity-100 group-hover:text-black shrink-0 ml-2"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mission Statement ── */}
        <div className="pt-16 md:pt-32 max-w-6xl mx-auto border-t border-zinc-900">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase leading-[0.9] text-white">
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
