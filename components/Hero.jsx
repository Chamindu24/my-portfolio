"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollToSection } from "../utils/smoothScroll";
import Magnet from '@/components/ui/Magnet';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects for that "Famous" feel
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-[#080808] overflow-hidden py-20 px-8">
      
      {/* 1. Large Background Typography (Watermark) */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 flex items-end pb-6 justify-center select-none pointer-events-none opacity-[0.04]"
      >
        <h2 className="text-[15vw] font-black text-white leading-none">CREATIVE</h2>
      </motion.div>

      <div className="relative z-10 grid grid-cols-12 w-full max-w-7xl gap-4 items-center">
        
        {/* LEFT SIDE: Identity */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-indigo-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
              Software Engineer / CSE Undergrad
            </span>
            <h1 className="flex flex-col items-start font-black text-white leading-none">
              {/* Line 1: The "Power" Line */}
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "100%", transition: { duration: 0 } }} 
                  animate={{ y: 0 }} 
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.33, 1, 0.68, 1] // "Cubic Out" for a smooth, airy arrival
                  }}
                  className="block text-7xl md:text-8xl tracking-[-0.04em]"
                >
                  CHAMINDU
                </motion.span>
              </div>

              {/* Line 2: The "Wide" Accent */}
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "100%", letterSpacing: "-0.5em", opacity: 0 }} 
                  animate={{ y: 0, letterSpacing: "0.1em", opacity: 1 }} 
                  transition={{ 
                    delay: 0.4, 
                    duration: 1.5, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="block text-4xl md:text-6xl text-indigo-500 font-light"
                >
                  SATHSARA
                </motion.span>
              </div>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 flex flex-col md:flex-row md:items-center gap-8"
          >
            <p className="text-gray-400 text-lg max-w-xs leading-relaxed border-l border-white/10 pl-6">
              Building <span className="text-white">intuitive</span>, high-performance applications with <span className="text-white">precision</span> and care.
            </p>
            
            <div className="flex gap-4">
              <Magnet padding={20}>
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group hover:bg-indigo-500 hover:border-indigo-500 transition-all duration-500 cursor-pointer"
                >
                  <svg className="w-6 h-6 text-white group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </Magnet>
              <div className="flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll to</span>
                <span className="text-sm font-bold text-white uppercase italic">Explore Work</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Visual Centerpiece */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="relative group"
        >
          {/* Layered Glass Effect */}
          <div className="relative w-72 h-96 md:w-96 md:h-[500px] z-20">
            <div className="absolute inset-0 border border-white/20 rounded-3xl z-30 pointer-events-none group-hover:border-white/40 transition-colors duration-500" />
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#0a0a0a] shadow-2xl">
              <Image
                src="/bg6.png"
                alt="Chamindu"
                fill
                className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                priority
              />
              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Info Tag */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-40 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl"
            >
              <p className="text-[10px] text-indigo-400 font-bold tracking-widest uppercase mb-1">Status</p>
              <h4 className="text-xs font-mono text-white">AVAILABLE_FOR_HIRE</h4>
            </motion.div>
          </div>

          {/* Decorative Back Glow */}
          <div className="absolute -inset-10 bg-indigo-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
        </motion.div>


      </div>
            {/* Floating Scroll Indicator */}
            <div className="absolute bottom-10 flex flex-col items-center gap-4 opacity-30">
              <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
              <span className="text-[10px] tracking-[0.5em] text-white uppercase vertical-text">Scroll</span>
            </div>

      {/* Aesthetic Footer Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;