"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, HTMLMotionProps } from "framer-motion";
import React from "react";



export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-0.5 origin-left bg-gradient-to-r from-red-600 via-red-600 to-red-600",
        className
      )}
      style={{
        scaleX,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
export default ScrollProgress;
