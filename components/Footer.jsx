"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { scrollToSection } from "../utils/smoothScroll";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-16 sm:pt-20 lg:pt-32 pb-12 overflow-hidden border-t-4 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">

        {/* 3-Column Grid — stacks on mobile, 2-col on tablet, 3-col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-stretch">

          {/* COLUMN 1: Image — full width on mobile/tablet, 1/3 on desktop */}
          <div className="relative group overflow-hidden w-full
            h-72 sm:h-80 md:h-96
            md:col-span-2 lg:col-span-1
            lg:aspect-auto lg:h-auto lg:min-h-[450px]">
            <Image
              src="/footer (2).png"
              alt="Design Statement"
              fill
              className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 opacity-90"
            />
          </div>

          {/* COLUMN 2: Impact */}
          <div className="flex flex-col justify-between py-2 gap-8 lg:gap-0">
            <div>
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest mb-6 lg:mb-8">
                Available 2026
              </span>
              <h2 className="text-5xl sm:text-6xl xl:text-6xl font-bold tracking-tighter leading-[0.85] uppercase">
                Building <br />
                <span className="text-red-600">Scalable</span> <br />
                Systems.
              </h2>
            </div>

            <div className="space-y-5 mt-4 lg:mt-10">
              <p className="text-sm sm:text-md font-medium leading-relaxed max-w-xs text-slate-500">
                I design and develop reliable, high-performance applications
                with clean architecture, focusing on real-world impact and
                long-term maintainability.
              </p>
              <motion.a
                href="mailto:chamindus.22@cse.mrt.ac.lk"
                className="group flex items-center gap-4 text-base lg:text-lg font-black uppercase border-b-2 border-black pb-1 w-fit hover:text-red-600 hover:border-red-600 transition-all"
              >
                Get in touch
                <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" />
              </motion.a>
            </div>
          </div>

          {/* COLUMN 3: Navigation & Socials */}
          <div className="flex flex-col justify-between py-2 gap-8 lg:gap-0
            md:col-span-2 lg:col-span-1
            lg:border-l lg:border-slate-100 lg:pl-16">

            <div className="flex flex-col h-full justify-between gap-10 lg:gap-16">

              {/* Navigation */}
              <div className="space-y-6 lg:space-y-8">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400">
                  System Index
                </h4>
                {/* Horizontal on mobile/tablet, vertical on desktop */}
                <ul className="flex flex-row flex-wrap gap-x-6 gap-y-4 lg:flex-col lg:gap-5">
                  {[
                    { label: "About", target: "about" },
                    { label: "Skills", target: "skills" },
                    { label: "Projects", target: "projects" },
                    { label: "Contact", target: "contact" },
                  ].map(({ label, target }) => (
                    <li key={target} className="group w-fit">
                      <button
                        onClick={() => scrollToSection(target)}
                        className="relative text-xl sm:text-2xl font-bold tracking-tighter uppercase transition-all duration-500 group-hover:text-red-600 lg:group-hover:pl-10 flex items-center"
                      >
                        <span className="absolute left-0 w-0 h-[2px] bg-red-600 transition-all duration-500 hidden lg:block lg:group-hover:w-8" />
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials & Status */}
              <div className="space-y-6">
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-center gap-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap">
                      Digital Index
                    </h4>
                    <div className="h-[1px] flex-grow bg-slate-100" />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {[
                      { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/chamindu-sathsara-95a2402a3/", label: "LinkedIn" },
                      { Icon: FaGithub, href: "https://github.com/Chamindu24", label: "GitHub" },
                      { Icon: FaInstagram, href: "https://instagram.com/chamindu_zathsara", label: "Instagram" },
                    ].map((soc, idx) => (
                      <a
                        key={idx}
                        href={soc.href}
                        aria-label={soc.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center w-12 h-12 border border-slate-200 rounded-sm overflow-hidden transition-all duration-500 hover:border-red-600"
                      >
                        <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        <soc.Icon
                          size={16}
                          className="relative z-10 text-slate-600 group-hover:text-white transition-colors duration-500"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Status & Time */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex flex-row items-end justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-600">
                          Remote Ready
                        </span>
                      </div>
                      <h5 className="text-lg sm:text-xl font-bold tracking-tighter uppercase leading-none">
                        Colombo, <span className="text-slate-300">LK</span>
                      </h5>
                    </div>

                    <div className="text-right border-r-2 border-red-600 pr-4">
                      <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                        Local Time
                      </div>
                      <div className="text-base sm:text-lg font-light tracking-tight tabular-nums">
                        {new Date().toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                          timeZone: "Asia/Colombo",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 lg:mt-20 pt-8 border-t border-black">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <p className="text-[10px] font-bold tracking-[0.5em] uppercase">
                © {new Date().getFullYear()} CHAMINDU SATHSARA
              </p>
              <span className="w-8 h-[1px] bg-red-600" />
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.5em] hover:text-red-600 transition-colors"
            >
              <span>Back to Top</span>
              <span className="text-lg group-hover:-translate-y-1 transition-transform duration-300">↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;