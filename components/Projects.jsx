"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaArrowRight } from "react-icons/fa6";

const projects = [
  {
    title: "Creator Boost",
    tech: "Spring Boot • Kafka • WebSocket",
    description: "Microservices-based platform for social media creators with real-time messaging, bookings, and secure payments.",
    image: "/creatorboost.png",
    link: "https://github.com/Creator-Boost",
  },
  {
    title: "Real-time Chat App",
    tech: "Firebase • Expo • React Native",
    description: "Cross-platform chat application with authentication, image sharing, and real-time synchronization.",
    image: "/chat.jpg",
    link: "https://github.com/Chamindu24/chat-app",
  },
  {
    title: "AI-Powered Notepad",
    tech: "Gemini API • Next.js • AI",
    description: "Smart note-taking app that summarizes and enhances text using natural language processing.",
    image: "/calc.jpg",
    link: "https://github.com/Chamindu24/calculator_ai",
  },
  {
    title: "Shopzy E-Commerce",
    tech: "Next.js  • MySQL",
    description: "Full-stack e-commerce platform for a retail chain focusing on electronics and toys.",
    image: "/ecommerce.png",
    link: "https://github.com/Chamindu24/E_commerce_29",
  },
  {
    title: "Shopzy Admin Dashboard",
    tech: "Next.js • Analytics • MySQL",
    description: "Admin panel for managing products, orders, customers, and analytics-driven insights.",
    image: "/ecommerceadmin.png",
    link: "https://github.com/Chamindu24/E_commerce_29_admin_web",
  },
  {
    title: "Celestia25",
    tech: "Next.js • MongoDB • Cloudinary",
    description: "Seat reservation system designed for a candle night dinner event.",
    image: "/Screenshot (370).png",
    link: "https://github.com/Chamindu24/admin-page",
  },
  {
    title: "Face Recognition Attendance",
    tech: "Python • AI • Computer Vision",
    description: "AI-powered attendance system using real-time facial recognition and voice notifications.",
    image: "/face.png",
    link: "https://github.com/Chamindu24/face_recognition",
  },
];


const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Use a spring for "smooth as silk" horizontal movement
  const xRaw = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const x = useSpring(xRaw, { stiffness: 50, damping: 20, restDelta: 0.001 });
  
  // Background number parallax (shared across all cards)
  const bgNumberX = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Subtle Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-white/10 z-50">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-full bg-indigo-500 origin-left"
          />
        </div>

        <motion.div style={{ x }} className="flex gap-24 px-[10vw] ">
          {/* 1. THE INTRO CARD: Editorial Style */}
          <div className="flex flex-col justify-center mr-12 shrink-0 w-[400px]">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-indigo-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-6"
            >
              Portfolio &copy; 
            </motion.span>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.85]">
              SELECTED <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/5">
                WORKS.
              </span>
            </h3>
            <p className="mt-10 text-gray-400 text-lg leading-relaxed max-w-sm border-l border-white/10 pl-6">
              Crafting resilient, fast experiences with obsessive care for detail and user delight.
            </p>
          </div>

          {/* 2. PROJECT CARDS: Depth & Polish */}
          {projects.map((project, i) => (
            <div key={i} className="group relative h-[500px] w-[350px] md:w-[850px] shrink-0 flex items-center">
              
              {/* 1. BACKGROUND NUMBER (SUBTLE PARALLAX) */}
              <motion.span 
                style={{ x: bgNumberX }}
                className="absolute -top-10 left-0 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none"
              >
                0{String(i + 1)}
              </motion.span>

              <div className="relative w-full h-[400px] flex flex-col md:flex-row items-center gap-12">
                
                {/* 2. IMAGE WITH SCALE HOVER */}
                <div className="relative w-full md:w-1/2 h-full shrink-0 overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5 shadow-2xl">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  </motion.div>
                </div>

                {/* 3. CONTENT AREA WITH BOTTOM REVEAL TEXT */}
                <div className="flex flex-col justify-center flex-grow space-y-6">
                  <div className="space-y-3">
                    {/* TECH REVEAL */}
                    <div className="overflow-hidden">
                      <motion.div 
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-8 h-[1px] bg-indigo-500" />
                        <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.3em]">
                          {project.tech}
                        </span>
                      </motion.div>
                    </div>
                    
                    {/* TITLE REVEAL (Coming from bottom) */}
                    <div className="overflow-hidden">
                      <motion.h4 
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none"
                      >
                        {project.title}
                      </motion.h4>
                    </div>
                  </div>

                  {/* DESCRIPTION REVEAL */}
                  <div className="overflow-hidden">
                    <motion.p 
                      initial={{ y: "100%", opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="text-gray-400 text-base md:text-lg max-w-sm font-light leading-relaxed"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* 4. BUTTON WITH COLOR REVEAL (Rising from bottom) */}
                  <div className="pt-4 overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <a 
                        href={project.link}
                        target="_blank"
                        className="group/btn relative inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/50 overflow-hidden transition-all duration-300"
                      >
                        {/* THIS IS THE COLOR COMING FROM BELOW */}
                        <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                        
                        <FaGithub className="relative z-10 text-white group-hover/btn:text-white transition-colors" size={20} />
                        <span className="relative z-10 text-[10px] font-black uppercase tracking-widest text-white">
                          View Project
                        </span>
                        <span className="relative z-10 text-white group-hover/btn:translate-x-1 transition-transform">→</span>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 3. CLOSING CARD: Minimalist CTA */}
          <div className="w-[500px] shrink-0 flex flex-col justify-center items-center">
            <a href="#contact" className="group flex flex-col items-center">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 border border-white/10 rounded-full group-hover:scale-125 group-hover:border-indigo-500/50 transition-all duration-700" />
                <FaArrowRight className="text-3xl text-white group-hover:translate-x-2 transition-transform" />
              </div>
              <p className="mt-8 text-[10px] font-black tracking-[0.5em] uppercase text-white/40 group-hover:text-white transition-colors">
                Start a Conversation
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;