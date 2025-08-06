"use client";

import { motion } from "framer-motion";
import Terminal from "@/components/Terminal";

const About = () => {
  const terminalCommands = [
    { 
      cmd: 'whoami', 
      output: 'Chamindu Sathsara\n\nSoftware Engineer | Full Stack Developer\nUniversity of Moratuwa CSE Undergrad',
      delay: 800
    },
    { 
      cmd: 'skills --tech', 
      output: '▸ Languages: Python, Java, TypeScript\n▸ Frontend: React, Next.js, Tailwind\n▸ Backend: Node.js, Spring Boot\n▸ Databases: MongoDB, MySQL',
      delay: 600
    },
    { 
      cmd: 'contact --info', 
      output: 'Email: chamindus.22@cse.mrt.ac.lk\nPhone: +94 71 927 8827\nGitHub: github.com/Chamindu24',
      delay: 1000
    }
  ];

  return (
    <section id="about" className="relative  bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-screen flex items-center justify-center">
        <div className="w-full max-w-5xl">
          {/* Centered About Me header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold bg-clip-text tracking-wide text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-xl text-gray-200 max-w-2xl tracking-wide font-mono mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Exploring the intersection of code and creativity
            </motion.p>
          </motion.div>

          {/* Enhanced Terminal Component */}
          <motion.div
            className="w-4/5 mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Terminal 
              commands={terminalCommands}
              typingSpeed={25}
              blinkSpeed={500}
              prompt="$"
              className="shadow-2xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-cyan-400/10"
            />
          </motion.div>

          {/* Interactive floating elements */}
          <motion.div
            className="absolute -bottom-10 left-1/3 w-4 h-4 rounded-full bg-purple-500 blur-md"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -top-20 right-1/3 w-6 h-6 rounded-full bg-cyan-500 blur-md"
            initial={{ y: 0 }}
            animate={{ y: [0, 30, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;