"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { scrollToSection } from "../utils/smoothScroll";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-8 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Top Border with a slight glow */}
        <div className="flex flex-col lg:flex-row border-t border-white/60 pt-16 gap-16">
          
          {/* Left Side: The "Big Impact" Section */}
          <div className="lg:w-3/5 space-y-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-indigo-500 mb-6">Let&apos;s talk</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                START A <br /> 
                <span className="text-white/30 hover:text-white transition-colors duration-700 cursor-default">NEW CHAPTER</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                href="mailto:chamindus.22@cse.mrt.ac.lk"
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 text-xl md:text-2xl font-bold border-b border-white/20 pb-2 w-fit hover:border-indigo-500 transition-colors"
              >
                chamindus.22@cse.mrt.ac.lk
                <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform text-indigo-500" />
              </motion.a>
              <span className="hidden sm:block text-white/10 self-center text-2xl font-light">/</span>
              <a href="tel:+94719278827" className="text-xl md:text-2xl font-bold text-white/60 hover:text-white transition-colors self-center">
                +94 71 927 8827
              </a>
            </div>
          </div>

          {/* Right Side: The "Structured" Section */}
          <div className="lg:w-2/5 flex flex-col justify-between gap-16">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30">Elsewhere</h4>
                <ul className="space-y-2 font-bold uppercase text-sm">
                  <li><a href="https://www.linkedin.com/in/chamindu-sathsara-95a2402a3/" className="text-white/60 hover:text-white hover:line-through decoration-indigo-500 transition-all">LinkedIn</a></li>
                  <li><a href="https://github.com/Chamindu24" className="text-white/60 hover:text-white hover:line-through decoration-indigo-500 transition-all">GitHub</a></li>
                  <li><a href="https://www.facebook.com/chamindusathsara.hewamaddawaththa/" className="text-white/60 hover:text-white hover:line-through decoration-indigo-500 transition-all">Twitter</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30">Site Map</h4>
                <ul className="space-y-2 font-bold uppercase text-sm text-white/60">
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection("home")}
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection("projects")}
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Work
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection("contact")}
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Location Card with Dark Surface */}
            <div className="p-6 bg-[#111111] rounded-3xl border border-white/5 shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <FaMapMarkerAlt className="text-indigo-500 animate-pulse" />
                <span className="font-bold text-sm uppercase tracking-tighter">Current Base</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Available for local opportunities in <span className="text-white font-semibold">Colombo</span> or remote collaborations globally.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
            © {new Date().getFullYear()} Chamindu — All Rights Reserved
          </p>
          
          <div className="flex items-center gap-8">
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 hidden md:block">
               Designed with precision
             </span>
             <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all group"
             >
               <span className="group-hover:-translate-y-1 transition-transform">↑</span>
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;