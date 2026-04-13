"use client";

import React, { useEffect, useRef, useState } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  AnimatePresence, 
  MotionValue
} from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Link from "next/link";

// --- Types ---
interface DockIconProps {
  children: React.ReactNode;
  label: string;
  href?: string;
  mouseX: MotionValue<number>;
}

export default function PremiumBottomDock() {
  const mouseX = useMotionValue(Infinity);
  const [isDockVisible, setIsDockVisible] = useState(false);
  const [isDockHovered, setIsDockHovered] = useState(false);

  useEffect(() => {
    const BOTTOM_TRIGGER_HEIGHT = 24;

    const handleMouseMove = (event: MouseEvent) => {
      const isNearBottom = event.clientY >= window.innerHeight - BOTTOM_TRIGGER_HEIGHT;

      if (isNearBottom) {
        setIsDockVisible(true);
        return;
      }

      if (!isDockHovered) {
        setIsDockVisible(false);
        mouseX.set(Infinity);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDockHovered, mouseX]);

  return (
    <div 
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pb-4"
      onMouseEnter={() => {
        setIsDockHovered(true);
        setIsDockVisible(true);
      }}
      onMouseLeave={(event) => {
        setIsDockHovered(false);
        const isNearBottom = event.clientY >= window.innerHeight - 24;
        if (!isNearBottom) {
          setIsDockVisible(false);
          mouseX.set(Infinity);
        }
      }}
    >
      {/* The Dock Menu */}
      <AnimatePresence>
        {isDockVisible && (
          <motion.nav
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onMouseMove={(e) => mouseX.set(e.pageX)}
            className="flex items-end gap-3 p-3 rounded-3xl border border-white/5 bg-black/20 backdrop-blur-2xl mb-2"
          >
            <DockIcon mouseX={mouseX} label="Instagram" href="https://instagram.com/chamindu_zathsara"><FaInstagram /></DockIcon>
            <DockIcon mouseX={mouseX} label="LinkedIn" href="https://www.linkedin.com/in/chamindu-sathsara-95a2402a3/"><FaLinkedin /></DockIcon>
            <DockIcon mouseX={mouseX} label="GitHub" href="https://github.com/Chamindu24"><FaGithub /></DockIcon>
            
            {/* Visual Separator */}
            <div className="w-[1px] h-8 bg-white/10 mx-1 self-center" />
            
            <DockIcon mouseX={mouseX} label="Facebook" href="https://www.facebook.com/chamindusathsara.hewamaddawaththa/"><FaFacebook /></DockIcon>
            <DockIcon mouseX={mouseX} label="YouTube" href="https://www.youtube.com/@chamindusathsara"><FaYoutube /></DockIcon>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* The "Small Thing" / Trigger Handle */}
      <motion.div 
        animate={{ 
          width: isDockVisible ? 100 : 40,
          opacity: isDockVisible ? 0.5 : 1 
        }}
        className="h-1.5 bg-white/30 rounded-full cursor-pointer hover:bg-white/60 transition-colors"
      />
    </div>
  );
}

function DockIcon({ children, label, href = "#", mouseX }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  // 1. Magnification Logic (Horizontal)
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeSync = useTransform(distance, [-150, 0, 150], [50, 80, 50]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link
      href={href}
      className="relative"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <motion.div
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          width: size, 
          height: size,
        }}
        className={cn(
          "relative flex items-center justify-center rounded-2xl",
          "bg-gradient-to-b from-white/10 to-white/[0.02]",
          "border border-white/10 shadow-xl",
          "transition-colors duration-300 hover:border-white/40 group"
        )}
      >
        <div className="absolute inset-0 rounded-2xl bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <motion.div 
          className="text-white/60 group-hover:text-white transition-colors"
          style={{ fontSize: "1.5rem" }}
        >
          {children}
        </motion.div>

        {/* Tooltip (Positioned Above) */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: -50, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              className="absolute whitespace-nowrap px-3 py-1 rounded-md bg-white text-black text-[10px] font-bold uppercase tracking-widest pointer-events-none"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}