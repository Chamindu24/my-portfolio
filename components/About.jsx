"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex md:flex-row items-start gap-20">
        {/* Parallax Image Section */}
        <motion.div 
          className="md:w-1/2 h-fit md:h-auto relative max-w-sm md:max-w-md mx-auto"
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
            solutions to real-world challenges. My expertise includes modern web technologies, responsive
            design, and backend systems.
          </motion.p>

          <motion.p
            className="text-gray-300 leading-relaxed text-lg"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            I’m passionate about learning new skills, tackling complex challenges, and collaborating with teams
            to deliver exceptional user experiences. Outside of coding, I enjoy exploring tech trends, 
            contributing to open-source projects, photography, and music.
          </motion.p>

          <motion.a
            href="#contact"
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