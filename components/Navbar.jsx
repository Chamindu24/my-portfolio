"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if client-side rendering is active

  useEffect(() => {
    setIsClient(true);  // Ensures client-side rendering after mount
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!isClient) {
    return null;  // Prevent rendering on the server
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-28 py-6">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          <Link href="/">Chamindu Sathsara</Link>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 text-lg">
          <Link href="#about" className="relative group transition duration-300">
            <span className="hover:text-indigo-400 transition duration-300">About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#projects" className="relative group transition duration-300">
            <span className="hover:text-indigo-400 transition duration-300">Projects</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#contact" className="relative group transition duration-300">
            <span className="hover:text-indigo-400 transition duration-300">Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden  text-white focus:outline-none" onClick={toggleMenu}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-700">
          <div className="flex flex-col items-center space-y-4 py-5">
            <Link href="#about" className="hover:text-indigo-400 transition duration-300" onClick={toggleMenu}>About</Link>
            <Link href="#skills" className="hover:text-indigo-400 transition duration-300" onClick={toggleMenu}>Skills</Link>
            <Link href="#projects" className="hover:text-indigo-400 transition duration-300" onClick={toggleMenu}>Projects</Link>
            <Link href="#contact" className="hover:text-indigo-400 transition duration-300" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
