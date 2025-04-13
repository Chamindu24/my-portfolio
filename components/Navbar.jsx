"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "react-feather";
import ScrollProgress from "../components/ui/scroll-progress";
import { scrollToSection } from "../utils/smoothScroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Enables client-only behavior
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  if (!isClient) return null;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
        <div className="container mx-auto flex items-center justify-between px-6 md:px-28 py-6">
          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold tracking-wide cursor-pointer" onClick={() => scrollToSection("home")}>
            Chamindu Sathsara
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12 text-lg">
            <button onClick={() => handleNavClick("about")} className="relative group transition duration-300">
              <span className="hover:text-indigo-400 transition duration-300">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => handleNavClick("projects")} className="relative group transition duration-300">
              <span className="hover:text-indigo-400 transition duration-300">Projects</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => handleNavClick("contact")} className="relative group transition duration-300">
              <span className="hover:text-indigo-400 transition duration-300">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-t border-gray-700">
            <div className="flex flex-col items-center space-y-4 py-5">
              <button onClick={() => handleNavClick("about")} className="hover:text-indigo-400 transition duration-300">
                About
              </button>
              <button onClick={() => handleNavClick("skills")} className="hover:text-indigo-400 transition duration-300">
                Skills
              </button>
              <button onClick={() => handleNavClick("projects")} className="hover:text-indigo-400 transition duration-300">
                Projects
              </button>
              <button onClick={() => handleNavClick("contact")} className="hover:text-indigo-400 transition duration-300">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll Progress below the Navbar */}
      <ScrollProgress className="mt-20" />
    </>
  );
};

export default Navbar;
