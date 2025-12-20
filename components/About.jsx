"use client";

import { motion } from "framer-motion";
import { Milestone, BookOpen, Code, Github, Mail, Briefcase, Phone, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Structural Identity */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-3 py-1 bg-zinc-800 border border-zinc-700 rounded text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-400">
                Structure_01 // whoami
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Chamindu <br /> 
                <span className="text-white/20">Sathsara</span>
              </h2>
              <div className="h-[2px] w-24 bg-indigo-600" />
              <p className="text-zinc-500 font-mono text-sm leading-relaxed">
                Full Stack Developer & CSE Undergrad @ University of Moratuwa. 
                Focusing on distributed logic and high-performance system architecture.
              </p>
              
              <div className="flex flex-col gap-3 pt-4 text-zinc-500 font-mono text-xs">
                <a href="mailto:chamindus.22@cse.mrt.ac.lk" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={18} /> chamindus.22@cse.mrt.ac.lk
                </a>
                <a href="tel:+94719278827" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={18} /> +94 71 927 8827
                </a>
                <a href="https://github.com/Chamindu24" target="_blank" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Github size={18} /> github.com/Chamindu24
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Flowing Details */}
          <div className="lg:w-2/3 space-y-24">
            
            {/* Block 1: Professional Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l border-zinc-800"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-[#0a0a0a]" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-4">
                <Briefcase size={14} /> Experience
              </h3>
              <div className="group">
                <h4 className="text-2xl font-light text-zinc-300 group-hover:text-white transition-colors">
                  Intern Software Engineer @ <span className="italic font-medium text-indigo-500">Keen Mind Mobile Solutions</span>
                </h4>
                <p className="mt-4 text-zinc-500 leading-relaxed max-w-xl">
                  Contributing to mobile-centric solutions and backend scalability. 
                  Bridging the gap between conceptual architecture and production-ready code.
                </p>
              </div>
            </motion.div>

            {/* Block 2: Technical Core */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l border-zinc-800"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-800 border-4 border-[#0a0a0a]" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-4">
                <Code size={14} /> skills --tech
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800">
                  <h4 className="font-bold text-sm mb-4 italic text-zinc-300">Languages & Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                        "Python",
                        "Java",
                        "TypeScript",
                        "Node.js",
                        "NestJS",
                        "ASP.NET Core",
                        "Spring Boot",
                        "MySQL",
                        "PostgreSQL",
                        "MongoDB",
                        "Firebase",
                        "SQL Server"
                      ].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-zinc-800/50 text-zinc-400 text-[10px] font-mono rounded border border-zinc-700/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800">
                  <h4 className="font-bold text-sm mb-4 italic text-zinc-300">Frontend & Design</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Tailwind CSS", "Flutter","Angular","React Native", "UI/UX"].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-zinc-800/50 text-zinc-400 text-[10px] font-mono rounded border border-zinc-700/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Block 3: Education */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l border-zinc-800"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-800 border-4 border-[#0a0a0a]" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-4">
                <BookOpen size={14} /> Academic Base
              </h3>
              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-900/50 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold italic text-indigo-500">University of Moratuwa</h4>
                    <span className="text-[10px] font-mono text-zinc-600 uppercase">2022 — Present</span>
                  </div>
                  <p className="text-sm font-mono text-zinc-400">BSc (Hons) Computer Science & Engineering</p>
                  <div className="mt-6 flex items-center gap-2 text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Current Year: 03
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-transparent border border-zinc-900 hover:border-zinc-800 transition-all flex items-center gap-6">
                  <div className="p-3 bg-zinc-900 rounded-lg">
                    <GraduationCap className="text-zinc-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold italic text-zinc-400">Beliatta Central College</h4>
                    <p className="text-xs font-mono text-zinc-600">
                      Secondary Education (School)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Block 4: Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l border-zinc-800"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-800 border-4 border-[#0a0a0a]" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-4">
                <Milestone size={14} /> Mission
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed italic max-w-2xl">
                &quot;Designing and building reliable, scalable software that solves real-world problems and creates meaningful user experiences.&quot;
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;