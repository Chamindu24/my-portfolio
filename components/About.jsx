"use client"
import { useEffect, useState } from "react";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex md:flex-row items-start gap-20">

        {/* Fixed Image Section - Create a new stacking context */}
        <div className="relative md:w-1/2 h-fit md:h-auto sticky top-20 z--1"> {/* z-0 to establish new context */}
          <div className="relative max-w-sm md:max-w-md mx-auto">
            <img
              src="/about.jpg"
              alt="About Me"
              className="rounded-lg shadow-2xl transition-transform duration-500 w-full object-cover"
            />
            {isClient && (
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500 to-pink-500 blur-2xl opacity-50"></div>
            )}
          </div>
        </div>

        {/* Scrollable Content Section */}
        <div className="md:w-1/2 space-y-6 z-1"> {/* z-1 to be on top of the image*/}
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
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium rounded-md shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;