"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "react-feather";
import ScrollProgress from "../components/ui/scroll-progress";
import { scrollToSection } from "../utils/smoothScroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  if (!isClient) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[60] pointer-events-none">
        <ScrollProgress />
      </div>

      <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
        <nav
          className={`transition-all duration-500 ease-in-out mt-4 mx-4 w-full max-w-7xl 
          ${
            scrolled
              ? "bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl py-3 px-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]"
              : "bg-transparent py-6 px-6 border-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer flex items-center gap-3 group"
              onClick={() => scrollToSection("home")}
            >
              <div className="relative w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center overflow-hidden">
                <span className="font-black text-white z-10">C</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h1 className="text-lg font-bold tracking-[0.2em] text-white uppercase">
                Chamindu<span className="text-indigo-500">.</span>
              </h1>
            </motion.div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gray-400 hover:text-white transition-all relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                    </button>
                  </li>
                ))}
              </ul>

              {/* High-End CTA */}
              <button
                onClick={() => handleNavClick("contact")}
                className="ml-4 px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 transform active:scale-95"
              >
                Let&apos;s Talk
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-4 right-4 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 z-40 md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-8 items-center">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="text-2xl font-medium text-gray-300 hover:text-indigo-400"
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold uppercase tracking-widest"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;