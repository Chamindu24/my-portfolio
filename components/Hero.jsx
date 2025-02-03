"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import Image from 'next/image';
import { motion } from "framer-motion";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row h-screen items-center justify-center md:justify-between bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-16 sm:px-10 md:px-20 lg:px-40 overflow-hidden">
      {/* Animated Grid Pattern Background */}
      {isClient && (
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.3}
          duration={3}
          className={cn(
            "absolute inset-0",
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "skew-y-12"
          )}
        />
      )}

      {/* Content Section: Text Animation */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut",delay: 0.4 }}
        className="relative z-10 text-center md:text-left max-w-xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          I&apos;m <span className="text-indigo-500">Chamindu Sathsara</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          A passionate <span className="text-purple-400">Software Engineer</span> dedicated to crafting high-quality solutions and delightful user experiences.
          <br />
          Undergraduate of the
          <br />
          Department of Computer Science and Engineering,
          <br />
          University of Moratuwa
        </p>
        <a href="#projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 rounded-full bg-indigo-600 px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            View My Work
          </motion.button>
        </a>
      </motion.div>

      {/* Right Section: Photo Animation */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="relative z-10 mt-6 md:mt-0 md:ml-10"
      >
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-lg">
          {/* Rotating Border */}
          <div className="absolute inset-0 rounded-full border-4 border-dotted border-indigo-100 animate-rotate-border shadow-[0_0_20px_5px_rgba(99,102,241,0.8)]"></div>
          {/* Image */}
          <Image
            src="/bg.png"
            alt="Chamindu Sathsara"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority={true} // Ensure it loads properly
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;