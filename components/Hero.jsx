"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/smoothScroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden" // Changed to bg-black
    >
      {/* 4. FRONT UI OVERLAY (Text & CTA) */}
      <div className="absolute inset-0 z-40 flex flex-col justify-center p-8 md:p-16 pointer-events-none"> {/* Increased z-index to stay above the foreground clipped text */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-8 pointer-events-auto">
          {/* Left Side: Tagline */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col justify-end"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-white leading-[1.1] max-w-sm">
              Engineering Digital <br /> Products With Intent.
            </h2>
          </motion.div>

          {/* Right Side: Description & Button */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col justify-end items-start md:items-end text-left md:text-right"
          >
            <p className="text-white/80 text-sm md:text-base max-w-xs mb-6">
              From architecture to deployment. I build software that blends
              performance, clean code, and seamless user experiences.
            </p>

            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-4 bg-red-600 text-white px-8 py-4 rounded-full group hover:scale-105 transition-transform duration-300" // Changed bg to red-600
            >
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <svg
                  className="w-3 h-3 text-red-600 group-hover:translate-x-1 transition-transform" // Changed text to red-600
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">
                See My Work
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* 2. THE BACKGROUND TEXT (Solid White) */}
      <div className="absolute inset-0 mb-16 flex items-end justify-center select-none z-10">
        <h1 className="flex flex-col md:flex-row items-center justify-center font-black text-white leading-none tracking-tighter text-[22vw] md:text-[16vw]">
          CHAMINDU
        </h1>
      </div>

      {/* 3. YOUR IMAGE (The Subject) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full h-full flex items-end justify-center pointer-events-none"
      >
        <div className="relative w-[100%] h-[70vh] md:w-[60%] md:h-[100vh]">
          <Image
            src="/mecover-Photoroom.png" // Ensure this is your transparent PNG
            alt="Chamindu"
            fill
            className="object-cover object-bottom grayscale brightness-110 "
            priority
          />
        </div>
      </motion.div>

       {/* 2b. THE FOREGROUND TEXT (Outline/Transparent) */}
       {/* This occupies the exact same space, has higher z-index, and uses the outline style */}
      <div className="absolute inset-0 mb-16  flex items-end justify-center select-none z-30">
        <h1 
            className="flex flex-col md:flex-row items-center  justify-center font-black leading-none tracking-tighter text-[22vw] md:text-[16vw]"
            style={{
                WebkitTextStroke: "2px rgba(255,255,255,0.6)", // White outline
                color: "transparent", // Transparent fill to show image
              }}
        >
          CHAMINDU
        </h1>
      </div>

    </section>
  );
};

export default Hero;