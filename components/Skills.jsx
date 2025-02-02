"use client";
import { useEffect, useState } from "react";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb, SiReact } from "react-icons/si";
import IconCloudDemo from "./ui/IconCloudDemo";

const Skills = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="skills" className="py-16 bg-black flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white">
          My Skills
        </h2>
        <p className="mt-4 text-center text-gray-400 text-lg">
          The tools and technologies I work with to build amazing things.
        </p>

        {/* Animated Skill Cards */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
        {[
          { icon: <SiNextdotjs className="text-white text-4xl sm:text-5xl" />, label: "Next.js" },
          { icon: <FaReact className="text-blue-400 text-4xl sm:text-5xl" />, label: "React.js" },
          { icon: <FaNodeJs className="text-green-500 text-4xl sm:text-5xl" />, label: "Node.js" },
          { icon: <SiReact className="text-blue-400 text-4xl sm:text-5xl" />, label: "React Native" },
          { icon: <SiMysql className="text-yellow-500 text-4xl sm:text-5xl" />, label: "MySQL" },
          { icon: <SiMongodb className="text-green-400 text-4xl sm:text-5xl" />, label: "MongoDB" },
        ].map((skill, index) => (
            <div key={index}
            className="relative flex flex-col items-center justify-center text-white space-y-1 p-4 bg-gray-800 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:rotate-3 hover:bg-indigo-700 hover:shadow-indigo-500/50 duration-300"
          >
              {skill.icon}
              <span className="text-lg font-semibold">{skill.label}</span>
            </div>
          ))}
        </div>

        {/* Right Side - IconCloudDemo */}
<div className="mt-2 flex justify-center">
  <div className="relative bg-black p-1 text-center w-full max-w-xl sm:max-w-full h-[250px] sm:h-[400px] md:h-[450px] lg:h-[600px] flex items-center justify-center">
    {isClient && <IconCloudDemo />}
  </div>
</div>
      </div>
    </section>
  );
};

export default Skills;
