"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

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
    tech: "Python • AI • Computer Vision",
    description:
      "AI-powered attendance system using real-time facial recognition and voice notifications.",
    image: "/works/travel.png",
    link: "https://github.com/Chamindu24",
  },
  {
    title: "Restaurant Website",
    tech: "Python • AI • Computer Vision",
    description:
      "AI-powered attendance system using real-time facial recognition and voice notifications.",
    image: "/works/res.png",
    link: "https://github.com/Chamindu24",
  },
  {
    title: "Real State Management System",
    tech: "Python • AI • Computer Vision",
    description:
      "AI-powered attendance system using real-time facial recognition and voice notifications.",
    image: "/works/real.png",
    link: "https://github.com/Chamindu24",
  },
  {
    title: "HealthCare Management System",
    tech: "Python • AI • Computer Vision",
    description:
      "AI-powered attendance system using real-time facial recognition and voice notifications.",
    image: "/works/medi.png",
    link: "https://github.com/Chamindu24",
  },
];

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

  // Columns moving at distinctly different paces to reveal the background
  const y1 = useTransform(smoothProgress, [0, 1], ["0%", "-120%"]);
  const y2 = useTransform(smoothProgress, [0, 1], ["60%", "-160%"]);
  const y3 = useTransform(smoothProgress, [0, 1], ["-30%", "-100%"]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative min-h-[300vh] bg-black"
    >
      {/* 1. THE STICKY STAGE */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/mycover.png"
            alt="Cover"
            fill
            className="object-cover "
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
          {/* Subtle Red Pulse */}
        </div>

        {/* Minimalist Header */}
        <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-14 pointer-events-none">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-[10rem] font-black  tracking-tighter text-white leading-[0.7] opacity-20"
            >
              PROJECTS
            </motion.h3>
          </div>
        </div>

        {/* 2. THE FLOATING MASONRY GRID */}
        <div className="absolute inset-0 z-20 grid grid-cols-1 md:grid-cols-3 gap-4 px-10 md:px-20 pointer-events-auto">
          {/* Column 1: Slow & Heavy */}
          <motion.div
            style={{ y: y1 }}
            className="flex flex-col gap-[40vh] mt-[60vh]"
          >
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </motion.div>

          {/* Column 2: The "Gap" Column (Fast) */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-[60vh]">
            <div className="h-[90vh] hidden md:block" />
            {projects.slice(3, 6).map((project, i) => (
              <ProjectCard key={i} project={project} index={i + 3} />
            ))}
          </motion.div>

          {/* Column 3: The End Anchor */}
          <motion.div
            style={{ y: y3 }}
            className="flex flex-col gap-[50vh] mt-[80vh]"
          >
            {projects.slice(6, 11).map((project, i) => (
              <ProjectCard key={i} project={project} index={i + 6} />
            ))}

            {/* CTA anchor that flows with the column */}
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
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col w-full max-w-[1400px] mx-auto overflow-hidden rounded-[4px]"
    >
      {/* Floating Meta Tag */}
      <div className="flex justify-between items-end mb-4 px-2">
        <span className="text-[10px] text-red-600 font-mono tracking-widest uppercase">
          0{index + 1}
        </span>
        <span className="h-[1px] flex-grow mx-4 bg-white/10" />
      </div>

      {/* Cinematic Frame */}
      <div className="relative aspect-[3/2] w-full bg-zinc-950 overflow-hidden rounded-sm border border-white/5 ring-1 ring-white/10 group-hover:ring-red-600/50 transition-all duration-700">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover   transition-all duration-1000 ease-out"
        />

        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

        {/* Hover Content Reveal */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold text-white uppercase tracking-tighter leading-none">
              {project.title}
            </h4>

            <a
              href={project.link}
              className="p-3 bg-red-600 text-white rounded-full hover:scale-110 transition-transform"
            >
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Static Label (Visible always) */}
      <div className="mt-4 flex items-center justify-between">
        <h5 className="text-sm font-bold text-zinc-200 group-hover:text-white uppercase transition-colors">
          {project.title}
        </h5>
        <div className="w-2 h-2 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default Projects;
