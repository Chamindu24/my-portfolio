"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollToSection } from "../utils/smoothScroll";
import RotatingText from "@/components/ui/RotatingText";

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-start gap-16 md:gap-20">
        {/* Parallax Image Section */}
        <motion.div 
          className="hidden md:block md:w-1/2 h-fit md:h-auto relative max-w-sm md:max-w-md mx-auto"
          style={{ y }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-lg shadow-2xl overflow-hidden"
          >
            <Image
              src="/about5.png"
              alt="About Me"
              className="w-full h-full object-cover"
              width={300}
              height={200}
              priority
            />
          </motion.div>
        </motion.div>

        {/* Scrollable Content Section with Animation */}
        <motion.div 
          className="md:w-1/2 space-y-6 z-1"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold tracking-wide text-white"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-200 text-xl"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover my journey, passion, and the skills I bring to the table.
          </motion.p>

          <motion.p
            className="text-gray-300 leading-relaxed text-lg"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            With a solid foundation in software development, I specialize in creating scalable and innovative
            solutions to real-world challenges. My expertise includes{" "}
            <RotatingText
              texts={[
                "modern web technologies", 
                "responsive design", 
                "backend systems",
                "cloud architecture"
              ]}
              mainClassName="inline-flex"
              splitBy="words"
              staggerFrom="random"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              staggerDuration={0.05}
              splitLevelClassName="mx-1"
              elementLevelClassName="text-cyan-400 text-2xl font-bold"
              transition={{ 
                type: "spring", 
                damping: 15, 
                stiffness: 300,
                mass: 0.5
              }}
              rotationInterval={3000}
            />
          </motion.p>

          <motion.p
            className="text-gray-300 leading-relaxed text-lg"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            I'm passionate about{" "}
            <RotatingText
              texts={[
                "learning new skills", 
                "solving complex problems", 
                "building intuitive UIs",
                "optimizing performance"
              ]}
              mainClassName="inline-flex"
              splitBy="words"
              staggerFrom="center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              staggerDuration={0.04}
              splitLevelClassName="mx-1"
              elementLevelClassName="text-purple-400 text-2xl font-bold"
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 250,
                mass: 0.8
              }}
              rotationInterval={3500}
            />{" "}
            and collaborating with teams to deliver exceptional user experiences.
          </motion.p>

          <motion.p
            className="text-gray-300 leading-relaxed text-lg"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
          >
            Outside of coding, I enjoy{" "}
            <RotatingText
              texts={[
                "photography", 
                "open-source contributions", 
                "playing guitar",
                "hiking"
              ]}
              mainClassName="inline-flex"
              splitBy="words"
              staggerFrom="last"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              staggerDuration={0.03}
              splitLevelClassName="mx-1"
              elementLevelClassName="text-amber-400 text-xl font-bold"
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                mass: 1
              }}
              rotationInterval={4000}
            />
          </motion.p>

          <motion.a
            onClick={() => scrollToSection("projects")}
            className="mt-6 rounded-full bg-indigo-600 px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition duration-300 inline-block text-center"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            viewport={{ once: true }}
          >
            Let’s Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;