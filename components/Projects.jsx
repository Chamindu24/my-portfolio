"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Creator Boost",
    tech: "Spring Boot • Kafka • WebSocket",
    description:
      "Microservices-based platform for social media creators with real-time messaging, bookings, and secure payments.",
    image: "/works/creatorboost.png",
    link: "https://github.com/Creator-Boost",
  },
  {
    title: "Real-time Chat App",
    tech: "Firebase • Expo • React Native",
    description:
      "Cross-platform chat application with authentication, image sharing, and real-time synchronization.",
    image: "/works/chat.jpg",
    link: "https://github.com/Chamindu24/chat-app",
  },
  {
    title: "AI-Powered Notepad",
    tech: "Gemini API • Next.js • AI",
    description:
      "Smart note-taking app that summarizes and enhances text using natural language processing.",
    image: "/works/calc.jpg",
    link: "https://github.com/Chamindu24/calculator_ai",
  },
  {
    title: "Shopzy E-Commerce",
    tech: "Next.js  • MySQL",
    description:
      "Full-stack e-commerce platform for a retail chain focusing on electronics and toys.",
    image: "/works/ecommerce.png",
    link: "https://github.com/Chamindu24/E_commerce_29",
  },
  {
    title: "Shopzy Admin Dashboard",
    tech: "Next.js • Analytics • MySQL",
    description:
      "Admin panel for managing products, orders, customers, and analytics-driven insights.",
    image: "/works/ecommerceadmin.png",
    link: "https://github.com/Chamindu24/E_commerce_29_admin_web",
  },
  {
    title: "Celestia25",
    tech: "Next.js • MongoDB • Cloudinary",
    description:
      "Seat reservation system designed for a candle night dinner event.",
    image: "/works/Screenshot (370).png",
    link: "https://github.com/Chamindu24/admin-page",
  },
  {
    title: "Face Recognition Attendance",
    tech: "Python • AI • Computer Vision",
    description:
      "AI-powered attendance system using real-time facial recognition and voice notifications.",
    image: "/works/face.png",
    link: "https://github.com/Chamindu24/face_recognition",
  },
  {
    title: "Travel Management System",
    tech: "Next.js • Node.js • MongoDB",
    description:
      "Full-featured travel management system with booking, itinerary planning, and user management.",
    image: "/works/travel.png",
    link: "https://github.com/Chamindu24",
  },
  {
    title: "Restaurant Website",
    tech: "React • Tailwind • Firebase",
    description:
      "Modern restaurant website with online menu, reservations, and dynamic content management.",
    image: "/works/res.png",
    link: "https://github.com/Chamindu24",
  },
  {
    title: "Real State Management System",
    tech: "Next.js • PostgreSQL • Prisma",
    description:
      "Comprehensive real estate platform with property listings, agent management, and analytics.",
    image: "/works/real.png",
    link: "https://github.com/Chamindu24",
  },
  {
    title: "HealthCare Management System",
    tech: "Spring Boot • React • MySQL",
    description:
      "Healthcare platform with patient records, appointment scheduling, and doctor dashboards.",
    image: "/works/medi.png",
    link: "https://github.com/Chamindu24",
  },
];

/* ─────────────────────────────────────────────
   DESKTOP  (md+): original 3-column parallax
   TABLET   (sm–md): 2-column simplified parallax
   MOBILE   (<sm): single-column stacked cards
   ───────────────────────────────────────────── */

/* ── Desktop 3-column layout (unchanged) ── */
const DesktopGrid = ({ smoothProgress }) => {
  const y1 = useTransform(smoothProgress, [0, 1], ["0%", "-120%"]);
  const y2 = useTransform(smoothProgress, [0, 1], ["60%", "-160%"]);
  const y3 = useTransform(smoothProgress, [0, 1], ["-30%", "-100%"]);

  return (
    <div className="absolute inset-0 z-20 grid grid-cols-3 gap-4 px-20 pointer-events-auto">
      {/* Column 1 */}
      <motion.div style={{ y: y1 }} className="flex flex-col gap-[40vh] mt-[60vh]">
        {projects.slice(0, 3).map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </motion.div>

      {/* Column 2 */}
      <motion.div style={{ y: y2 }} className="flex flex-col gap-[60vh]">
        <div className="h-[90vh]" />
        {projects.slice(3, 6).map((project, i) => (
          <ProjectCard key={i} project={project} index={i + 3} />
        ))}
      </motion.div>

      {/* Column 3 */}
      <motion.div style={{ y: y3 }} className="flex flex-col gap-[50vh] mt-[80vh]">
        {projects.slice(6, 11).map((project, i) => (
          <ProjectCard key={i} project={project} index={i + 6} />
        ))}
        <div className="h-[50vh] flex items-center justify-center">
          <motion.div
            whileHover={{ x: 10 }}
            className="flex items-center gap-6 group cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            <span className="text-white text-4xl font-black uppercase tracking-tighter group-hover:text-red-600 transition-colors">
              Let's Talk
            </span>
            <div className="w-12 h-12 rounded-full border border-red-600 flex items-center justify-center">
              <FaArrowRight className="text-red-600" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

/* ── Tablet 2-column layout ── */
const TabletGrid = ({ smoothProgress }) => {
  const yA = useTransform(smoothProgress, [0, 1], ["0%", "-110%"]);
  const yB = useTransform(smoothProgress, [0, 1], ["40%", "-140%"]);

  const colA = projects.filter((_, i) => i % 2 === 0); // 0,2,4,6,8,10
  const colB = projects.filter((_, i) => i % 2 !== 0); // 1,3,5,7,9

  return (
    <div className="absolute inset-0 z-20 grid grid-cols-2 gap-3 px-6 pointer-events-auto">
      {/* Column A */}
      <motion.div style={{ y: yA }} className="flex flex-col gap-[28vh] mt-[50vh]">
        {colA.map((project, i) => (
          <ProjectCard key={i} project={project} index={projects.indexOf(project)} cardSize="tablet" />
        ))}
      </motion.div>

      {/* Column B */}
      <motion.div style={{ y: yB }} className="flex flex-col gap-[28vh] mt-[80vh]">
        {colB.map((project, i) => (
          <ProjectCard key={i} project={project} index={projects.indexOf(project)} cardSize="tablet" />
        ))}
        {/* CTA */}
        <div className="h-[30vh] flex items-center justify-center">
          <motion.div
            whileHover={{ x: 8 }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            <span className="text-white text-2xl font-black uppercase tracking-tighter group-hover:text-red-600 transition-colors">
              Let's Talk
            </span>
            <div className="w-9 h-9 rounded-full border border-red-600 flex items-center justify-center flex-shrink-0">
              <FaArrowRight className="text-red-600" size={10} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

/* ── Mobile single-column layout ── */
const MobileGrid = ({ smoothProgress }) => {
  const y = useTransform(smoothProgress, [0, 1], ["10%", "-90%"]);

  return (
    <div className="absolute inset-0 z-20 px-4 pointer-events-auto">
      <motion.div style={{ y }} className="flex flex-col gap-[20vh] mt-[45vh]">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} cardSize="mobile" />
        ))}
        {/* CTA */}
        <div className="h-[25vh] flex items-center justify-center">
          <motion.div
            whileHover={{ x: 6 }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            <span className="text-white text-xl font-black uppercase tracking-tighter group-hover:text-red-600 transition-colors">
              Let's Talk
            </span>
            <div className="w-8 h-8 rounded-full border border-red-600 flex items-center justify-center flex-shrink-0">
              <FaArrowRight className="text-red-600" size={9} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Main section
   ───────────────────────────────────────────── */
const Projects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      /* 
        Scroll height adapts per breakpoint:
          mobile  → 500vh  (1 col, 11 cards)
          tablet  → 400vh  (2 cols)
          desktop → 300vh  (3 cols, original)
      */
      className="relative bg-black
        min-h-[500vh]
        sm:min-h-[420vh]
        md:min-h-[360vh]
        lg:min-h-[300vh]"
    >
      {/* ── Sticky stage ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Cinematic background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/mycover.png"
            alt="Cover"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
        </div>

        {/* Watermark headline */}
        <div className="relative z-10 h-full flex flex-col justify-end pointer-events-none
          p-6 sm:p-8 md:p-10 lg:p-14">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-black tracking-tighter text-white opacity-20 leading-[0.7]
                text-5xl
                sm:text-7xl
                md:text-8xl
                lg:text-[10rem]"
            >
              PROJECTS
            </motion.h3>
          </div>
        </div>

        {/* ── Responsive grid layers (CSS show/hide) ── */}

        {/* Mobile: visible below sm */}
        <div className="block sm:hidden w-full h-full absolute inset-0">
          <MobileGrid smoothProgress={smoothProgress} />
        </div>

        {/* Tablet: sm → lg */}
        <div className="hidden sm:block lg:hidden w-full h-full absolute inset-0">
          <TabletGrid smoothProgress={smoothProgress} />
        </div>

        {/* Desktop: lg+ (original unchanged) */}
        <div className="hidden lg:block w-full h-full absolute inset-0">
          <DesktopGrid smoothProgress={smoothProgress} />
        </div>

      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Project Card  (size-aware)
   ───────────────────────────────────────────── */
const ProjectCard = ({ project, index, cardSize = "desktop" }) => {
  const isMobile = cardSize === "mobile";
  const isTablet = cardSize === "tablet";

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col w-full max-w-[1400px] mx-auto overflow-hidden rounded-[4px]"
    >
      {/* Meta tag row */}
      <div className="flex justify-between items-end mb-3 sm:mb-4 px-2">
        <span
          className={`text-red-600 font-mono tracking-widest uppercase
            ${isMobile ? "text-[9px]" : isTablet ? "text-[9px]" : "text-[10px]"}`}
        >
          0{index + 1}
        </span>
        <span className="h-[1px] flex-grow mx-3 sm:mx-4 bg-white/10" />
      </div>

      {/* Cinematic frame */}
      <div
        className="relative w-full bg-zinc-950 overflow-hidden rounded-sm
          border border-white/5 ring-1 ring-white/10
          group-hover:ring-red-600/50 transition-all duration-700
          aspect-[4/3] sm:aspect-[3/2]"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-1000 ease-out"
        />

        {/* Inner gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

        {/* Hover reveal */}
        <div
          className="absolute inset-0 flex flex-col justify-end
            translate-y-8 group-hover:translate-y-0
            opacity-0 group-hover:opacity-100
            transition-all duration-500
            p-4 sm:p-6 md:p-8"
        >
          <div className="flex items-center justify-between gap-2">
            <h4
              className="font-bold text-white uppercase tracking-tighter leading-none
                text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              {project.title}
            </h4>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-red-600 text-white rounded-full
                hover:scale-110 transition-transform flex-shrink-0"
            >
              <FaExternalLinkAlt size={isMobile ? 9 : isTablet ? 10 : 12} />
            </a>
          </div>

          {/* Show description on mobile/tablet hover too */}
          {(isMobile || isTablet) && (
            <p className="mt-2 text-[10px] text-white/70 leading-snug line-clamp-2">
              {project.description}
            </p>
          )}
        </div>
      </div>

      {/* Static label */}
      <div className="mt-3 sm:mt-4 flex items-center justify-between">
        <h5
          className="font-bold text-zinc-200 group-hover:text-white uppercase transition-colors
            text-[11px] sm:text-xs md:text-sm"
        >
          {project.title}
        </h5>
        <div className="w-2 h-2 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default Projects;