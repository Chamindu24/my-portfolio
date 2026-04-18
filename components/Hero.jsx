"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { scrollToSection } from "../utils/smoothScroll";

const Hero = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll parallax — each layer moves at a different rate
  const bgTextY        = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageY         = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayY       = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse parallax springs (desktop only)
  const springCfg = { damping: 30, stiffness: 120 };
  const mouseXSpring = useSpring(0, springCfg);
  const mouseYSpring = useSpring(0, springCfg);

  const imageParallaxX  = useTransform(mouseXSpring, [-0.5, 0.5], ["-12px", "12px"]);
  const imageParallaxY  = useTransform(mouseYSpring, [-0.5, 0.5], ["-8px", "8px"]);
  const bgTextParallaxX = useTransform(mouseXSpring, [-0.5, 0.5], ["8px", "-8px"]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const onMove = (e) => {
      mouseXSpring.set(e.clientX / window.innerWidth - 0.5);
      mouseYSpring.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile, mouseXSpring, mouseYSpring]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden"
    >
      {/* ─── LAYER 1 · BG SOLID TEXT — slowest ─── */}
      <motion.div
        style={{ y: bgTextY, x: bgTextParallaxX }}
        className="absolute inset-0 mb-8 sm:mb-12 md:mb-16 flex items-end justify-center select-none z-10 cursor-pointer"
        onMouseEnter={() => setIsHoveringText(true)}
        onMouseLeave={() => setIsHoveringText(false)}
      >
        <motion.h1 
          className="font-black text-white leading-none tracking-tighter whitespace-nowrap text-[22vw] sm:text-[20vw] md:text-[16vw]"
          transition={{ duration: 0.3 }}
        >
          CHAMINDU
        </motion.h1>
      </motion.div>

      {/* ─── LAYER 2 · IMAGE — mid speed + mouse drift ─── */}
      <motion.div
        style={{ y: imageY, x: imageParallaxX }}
        className="relative z-20 w-full h-full flex items-end justify-center pointer-events-none"
      >
        {/*
          Responsive image container:
          – xs phones   : 95% wide, 58 vh tall
          – small phones: 88% wide, 63 vh tall
          – tablets     : 75% wide, 72 vh tall
          – desktop     : 60% wide, 100 vh tall  (unchanged from original)
        */}
        <div className="relative w-[100%] h-[65vh] xs:w-[88%] xs:h-[63vh] sm:w-[75%] sm:h-[72vh] md:w-[60%] md:h-[100vh]">
          <Image
            src="/mecover-Photoroom.png"
            alt="Chamindu"
            fill
            className="object-cover object-bottom grayscale brightness-110"
            priority
          />
        </div>
      </motion.div>

      {/* ─── LAYER 3 · FG OUTLINE TEXT — faster for depth ─── */}
      <motion.div
        style={{ y: bgTextY, x: bgTextParallaxX }}
        className="absolute inset-0 mb-8 sm:mb-12 md:mb-16 flex items-end justify-center select-none z-30 cursor-pointer"
        onMouseEnter={() => setIsHoveringText(true)}
        onMouseLeave={() => setIsHoveringText(false)}
      >
        <motion.h1
          className="font-black leading-none tracking-tighter whitespace-nowrap text-[22vw] sm:text-[20vw] md:text-[16vw]"
          style={{
            WebkitTextStroke: "clamp(2px, 0.18vw, 3px) rgba(255,255,255,1)",
            color: "transparent",
          }}
          transition={{ duration: 0.3 }}
        >
          CHAMINDU
        </motion.h1>
      </motion.div>

      {/* ─── LAYER 4 · UI OVERLAY — floats fastest ─── */}
      <motion.div
        style={{ y: overlayY }}
        className="absolute inset-0 z-50 flex flex-col justify-end sm:justify-center pointer-events-none"
      >
        {/*
          Padding + bottom offset:
          – mobile  : sits above bottom gradient, left-aligned
          – tablet  : centred vertically with bottom push
          – desktop : original mb-40 left/right split layout
        */}
        <div className="w-full max-w-8xl mx-auto px-5 sm:px-8 md:px-14 lg:px-20 pb-28 sm:pb-36 md:pb-0 md:mb-40">
          <div className="flex flex-col gap-7 sm:gap-9 md:flex-row md:items-end md:justify-between md:gap-12">

            {/* Left · Tagline */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto max-w-xl"
            >
              <h2 className="font-semibold text-white leading-[1.05] tracking-tight text-[clamp(1.4rem,5vw,3.2rem)]">
                Building Digital <br />
                <span className="text-white/80 font-light">
                  Products That Actually Work.
                </span>
              </h2>
            </motion.div>

            {/* Right · Description + CTA */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start md:items-end md:text-right pointer-events-auto"
            >
              <p className="text-white/90 leading-relaxed font-light mb-6 sm:mb-8 text-[clamp(0.75rem,2vw,1.125rem)] max-w-[270px] sm:max-w-[300px]">
                From planning to launch. I create software that is fast,
                reliable, and easy for people to use.
              </p>

              {/* CTA button — scales via clamp so it never looks huge on small screens */}
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative flex items-center overflow-hidden rounded-full border-2 border-white/60 bg-[#050505] transition-all duration-500 hover:border-white/40 hover:scale-[1.02]"
                style={{
                  height: "clamp(2.6rem, 4vw, 3.5rem)",
                  paddingLeft: "clamp(0.3rem, 0.8vw, 0.5rem)",
                  paddingRight: "clamp(1.2rem, 2.5vw, 2rem)",
                }}
              >
                {/* Liquid fill */}
                <div className="absolute inset-0 z-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />

                {/* Icon */}
                <div
                  className="relative z-10 rounded-full bg-red-600 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-90 group-hover:rotate-[-10deg]"
                  style={{ width: "clamp(2rem, 3vw, 2.5rem)", height: "clamp(2rem, 3vw, 2.5rem)" }}
                >
                  <div className="flex items-center transition-transform duration-500 group-hover:translate-x-10">
                    <svg className="w-3.5 h-3.5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <svg className="absolute w-3.5 h-3.5 text-white shrink-0 -translate-x-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Text masking */}
                <div className="relative z-20 ml-3 md:ml-6 h-4 overflow-hidden">
                  <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2">
                    <span className="h-4 flex items-center font-black uppercase text-white" style={{ fontSize: "clamp(7px, 1vw, 10px)", letterSpacing: "0.4em" }}>
                      Explore Work
                    </span>
                    <span className="h-4 flex items-center font-black uppercase text-black" style={{ fontSize: "clamp(7px, 1vw, 10px)", letterSpacing: "0.4em" }}>
                      Explore Work
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white/20 blur-xl pointer-events-none" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ─── Soft vignette on small screens to help text readability ─── */}
      <div
        className="absolute inset-0 z-25 pointer-events-none md:hidden"
        style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.5) 100%)" }}
      />

      {/* ─── Bottom gradient fade ─── */}
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="absolute bottom-0 left-0 w-full h-28 sm:h-32 md:h-40 bg-gradient-to-t from-black to-transparent z-40 pointer-events-none"
      />
    </section>
  );
};

export default Hero;