"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';

const About = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.3); // Adjust speed of parallax effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex md:flex-row items-start gap-20">

        {/* Parallax Image Section */}
        <div className="md:w-1/2 h-fit md:h-auto">
          <div 
            className="relative max-w-sm md:max-w-md mx-auto"
            style={{
              position: 'sticky',
              top: '0px', // Sticky effect to keep image fixed when scrolling
              // Parallax effect
              
            }}
          >
            <Image
              src="/about5.png"
              alt="About Me"
              className="rounded-lg shadow-2xl transition-transform duration-500 w-full object-cover"
              width={300}
              height={200}
              priority
            />
          </div>
        </div>

        {/* Scrollable Content Section */}
        <div className="md:w-1/2 space-y-6 z-1">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white">About Me</h2>
          <p className="text-gray-200 text-xl">
            Discover my journey, passion, and the skills I bring to the table.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            With a solid foundation in software development, I specialize in creating scalable and innovative
            solutions to real-world challenges. My expertise includes modern web technologies, responsive
            design, and backend systems.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            I’m passionate about learning new skills, tackling complex challenges, and collaborating with teams
            to deliver exceptional user experiences. Outside of coding, I enjoy exploring tech trends, 
            contributing to open-source projects, photography, and music.
          </p>
          <a
            href="#contact"
            className="mt-6 rounded-full bg-indigo-600 px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition duration-300 inline-block text-center"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
