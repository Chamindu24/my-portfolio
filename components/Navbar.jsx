"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "../utils/smoothScroll";
import Image from "next/image";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const MENU_CLOSE_SCROLL_DELAY_MS = 220;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const lenis = window["__lenis"];

    if (!menuOpen) {
      lenis?.start?.();
      return;
    }

    const scrollY = window.scrollY;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyWidth = document.body.style.width;
    const originalBodyTouchAction = document.body.style.touchAction;
    const originalBodyOverscroll = document.body.style.overscrollBehavior;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.touchAction = "none";
    document.body.style.overscrollBehavior = "none";
    lenis?.stop?.();

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.width = originalBodyWidth;
      document.body.style.touchAction = originalBodyTouchAction;
      document.body.style.overscrollBehavior = originalBodyOverscroll;
      lenis?.start?.();
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Studio", id: "about" },
    { name: "Portfolio", id: "projects" },
    { name: "Expertise", id: "skills" },

    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[999] ">
        <div className="flex justify-between  items-center px-6 py-2 md:px-12">
          {/* Logo - White/Silver look in mix-blend */}
          <div
            className="w-36  h-24 md:w-48 md:h-36  relative cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <Image
              src="/mylogo1.png"
              alt="Logo"
              fill
              className="object-contain  "
            />
          </div>

          {/* Magnetic Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-4 group focus:outline-none"
          >
            <div className="text-right hidden md:block">
              <p className="text-[12px] uppercase tracking-[0.4em] text-white">
                Navigation
              </p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center relative border-2 border-white/40 rounded-full group-hover:border-red-600 transition-colors">
              <div className="relative flex flex-col gap-1.5">
                <motion.span
                  animate={
                    menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }
                  }
                  className="w-6 h-[1.5px] bg-white group-hover:bg-red-600"
                />
                <motion.span
                  animate={
                    menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }
                  }
                  className="w-6 h-[1.5px] bg-white group-hover:bg-red-600"
                />
              </div>
            </div>
          </button>
        </div>
      </header>

      {/* OVERLAY: THE RED STRIP REVEAL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex overflow-hidden"
          >
            {/* Left Decorative Section */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
              className="hidden lg:flex w-1/4 bg-red-600 relative overflow-hidden"
            >
              {/* background logo image (lushware text placeholder replacement) */}
              <div className="absolute inset-0 z-0 p-12 mb-20">
                <Image
                  src="/navme.png" // Pointing to public/navme.png
                  alt="Decorative Logo"
                  fill
                  className="object-contain  object-bottom  scale-125 " // Reduced opacity for professional look
                />
              </div>
            </motion.div>

            {/* Main Links Section */}
            <div className="flex-1 flex flex-col justify-center px-10 md:px-24">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2 + i * 0.1,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  >
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        window.setTimeout(() => {
                          scrollToSection(link.id);
                        }, MENU_CLOSE_SCROLL_DELAY_MS);
                      }}
                      className="relative group text-left py-2"
                    >
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-red-600 group-hover:w-12 transition-all duration-500" />
                      <span className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white group-hover:pl-16 transition-all duration-500">
                        {link.name}
                      </span>
                    </button>
                  </motion.div>
                ))}
              </nav>

              {/* Sub-Info Footer inside Menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-t border-white/10 pt-10 text-[11px] uppercase tracking-[0.3em] text-zinc-500"
              >
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="space-y-1">
                    <p className="text-red-600 font-bold">Let's Talk</p>

                    <a
                      href="mailto:chamindus.22@cse.mrt.ac.lk"
                      className="text-zinc-300 normal-case tracking-normal text-sm transition-colors cursor-pointer hover:text-white"
                    >
                      chamindus.22@cse.mrt.ac.lk
                    </a>
                  </div>
                </div>

                {/* Social Icons Section */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {[
                      { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/chamindu-sathsara-95a2402a3/", label: "LinkedIn" },
                      { Icon: FaGithub, href: "https://github.com/Chamindu24", label: "GitHub" },
                      { Icon: FaInstagram, href: "https://instagram.com/chamindu_zathsara", label: "Instagram" },
                      { Icon: FaWhatsapp, href: "#", label: "WhatsApp" },
                      { Icon: FaFacebookF, href: "https://www.facebook.com/chamindusathsara.hewamaddawaththa/", label: "Facebook" },
                    ].map((soc, idx) => (
                      <a
                        key={idx}
                        href={soc.href}
                        aria-label={soc.label}
                        target={soc.href.startsWith("http") ? "_blank" : undefined}
                        rel={soc.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group relative flex items-center justify-center w-11 h-11 border-2 border-white/50 rounded-lg overflow-hidden transition-all duration-500 hover:border-red-600"
                      >
                        {/* Sliding Background Fill */}
                        <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                        <soc.Icon
                          size={18}
                          className="relative z-10 text-zinc-400 group-hover:text-white transition-colors duration-500"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Geometric Accents */}
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-30" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
