"use client";

import React, { useRef, useState } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  AnimatePresence,  MotionValue
} from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Link from "next/link";

// --- Types ---
interface DockIconProps {
  children: React.ReactNode;
  label: string;
  href?: string;
  mouseY: MotionValue<number>
}

// --- Component ---

export default function PremiumVerticalDock() {
  const mouseY = useMotionValue(Infinity);
  // SpotLight effect for the dock background
  const mouseX = useMotionValue(0); 

  return (
    <nav 
      onMouseMove={(e) => {
        mouseY.set(e.pageY);
        mouseX.set(e.pageX);
      }}
      onMouseLeave={() => mouseY.set(Infinity)}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 p-2 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-2xl"
    >
      <DockIcon mouseY={mouseY} label="Instagram" href="https://instagram.com/chamindu_zathsara"><FaInstagram /></DockIcon>
      <DockIcon mouseY={mouseY} label="LinkedIn" href="https://www.linkedin.com/in/chamindu-sathsara-95a2402a3/"><FaLinkedin /></DockIcon>
      <DockIcon mouseY={mouseY} label="GitHub" href="https://github.com/Chamindu24"><FaGithub /></DockIcon>
      <DockIcon mouseY={mouseY} label="Facebook" href="https://www.facebook.com/chamindusathsara.hewamaddawaththa/" ><FaFacebook /></DockIcon>
      
      {/* Visual Separator */}
      <div className="h-[1px] w-8 bg-white/10 mx-auto my-1" />
      
      <DockIcon mouseY={mouseY} label="YouTube" href="https://www.youtube.com/@chamindusathsara"><FaYoutube /></DockIcon>
    </nav>
  );
}

function DockIcon({ children, label, href = "#", mouseY }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 1. Magnification Logic
  const distance = useTransform(mouseY, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [45, 70, 45]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  // 2. Magnetic Pull (The icon "leans" toward the mouse)
  const leanSync = useTransform(distance, [-150, 0, 150], [8, 0, -8]);
  const lean = useSpring(leanSync, { stiffness: 200, damping: 20 });

  return (
    <Link href={href} className="relative">
      <motion.div
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          width, 
          height: width,
          y: lean // This creates the "magnetic" vertical leaning effect
        }}
        className={cn(
          "relative flex items-center justify-center rounded-2xl",
          "bg-gradient-to-b from-white/10 to-white/[0.02]",
          "border border-white/10 shadow-inner",
          "transition-colors duration-300 hover:border-white/40 group"
        )}
      >
        {/* Inner Glow */}
        <div className="absolute inset-0 rounded-2xl bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <motion.div 
          className="text-white/60 group-hover:text-white transition-colors"
          style={{ fontSize: "1.5rem" }}
        >
          {children}
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, x: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 25, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
              className="absolute left-full ml-4 px-3 py-1 rounded-md bg-white text-black text-[10px] font-bold uppercase tracking-widest pointer-events-none"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}