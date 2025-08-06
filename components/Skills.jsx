"use client";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaSass } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiMysql, 
  SiMongodb, 
  SiTypescript, 
  SiJavascript,
  SiTailwindcss,

  SiRedux,
  SiExpress,
  SiDocker,
  SiPostgresql,
  SiFirebase,

} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import dynamic from "next/dynamic";

// Dynamically import client-side only components
const VelocityScroll = dynamic(
  () => import("./magicui/scroll-based-velocity"),
  { ssr: false }
);

const IconCloudDemo = dynamic(
  () => import("./ui/IconCloudDemo"),
  { ssr: false }
);

const Skills = () => {
  const [ setVisibleCards] = useState([]);
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            if (index) {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: <SiNextdotjs className="text-white text-4xl" />, label: "Next.js", color: "bg-black", proficiency: 90 },
    { icon: <FaReact className="text-[#61DAFB] text-4xl" />, label: "React", color: "bg-[#61DAFB]", proficiency: 95 },
    { icon: <SiTypescript className="text-[#3178C6] text-4xl" />, label: "TypeScript", color: "bg-[#3178C6]", proficiency: 85 },
    { icon: <SiJavascript className="text-[#F7DF1E] text-4xl" />, label: "JavaScript", color: "bg-[#F7DF1E]", proficiency: 95 },
    { icon: <FaNodeJs className="text-[#68A063] text-4xl" />, label: "Node.js", color: "bg-[#68A063]", proficiency: 85 },
    { icon: <TbBrandReactNative className="text-[#61DAFB] text-4xl" />, label: "React Native", color: "bg-[#61DAFB]", proficiency: 80 },
    { icon: <SiTailwindcss className="text-[#06B6D4] text-4xl" />, label: "Tailwind CSS", color: "bg-[#06B6D4]", proficiency: 90 },
    { icon: <SiRedux className="text-[#764ABC] text-4xl" />, label: "Redux", color: "bg-[#764ABC]", proficiency: 80 },
    { icon: <SiExpress className="text-[#f8f6f6] text-4xl" />, label: "Express", color: "bg-[#000000]", proficiency: 80 },
    { icon: <SiMongodb className="text-[#47A248] text-4xl" />, label: "MongoDB", color: "bg-[#47A248]", proficiency: 85 },
    { icon: <SiPostgresql className="text-[#4169E1] text-4xl" />, label: "PostgreSQL", color: "bg-[#4169E1]", proficiency: 75 },
    { icon: <SiMysql className="text-[#4479A1] text-4xl" />, label: "MySQL", color: "bg-[#4479A1]", proficiency: 70 },
    { icon: <SiDocker className="text-[#2496ED] text-4xl" />, label: "Docker", color: "bg-[#2496ED]", proficiency: 65 },
    { icon: <FaGitAlt className="text-[#F05032] text-4xl" />, label: "Git", color: "bg-[#F05032]", proficiency: 90 },
    { icon: <SiFirebase className="text-[#FFCA28] text-4xl" />, label: "Firebase", color: "bg-[#FFCA28]", proficiency: 70 },
    { icon: <FaSass className="text-[#CC6699] text-4xl" />, label: "Sass", color: "bg-[#CC6699]", proficiency: 85 },
   
  ];

  return (
    <section id="skills" className="py-16 bg-black flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl tracking-wide font-extrabold text-center text-white">
          My Skills
        </h2>
        <p className="mt-6 font-mono tracking-wide text-center text-gray-200 text-lg">
          The tools and technologies I work with to build amazing things.
        </p>
        
        {/* VelocityScroll with icons */}
        {isMounted && (
          <div className="relative flex w-full mt-4 flex-col items-center justify-center overflow-hidden py-12">
            <VelocityScroll defaultVelocity={1} className="text-white">
              <div className="flex items-center space-x-12">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="text-8xl">
                      {skill.icon}
                    </div>
                    <span className="text-2xl font-light">{skill.label}</span>
                  </div>
                ))}
              </div>
            </VelocityScroll>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-20"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-20"></div>
          </div>
        )}

        

        {/* IconCloudDemo */}
        {isMounted && (
          <div className="mt-4 flex justify-center">
            <div className="relative bg-black p-1 text-center w-full max-w-xl sm:max-w-full h-[250px] sm:h-[400px] md:h-[450px] lg:h-[600px] flex items-center justify-center">
              <IconCloudDemo />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;