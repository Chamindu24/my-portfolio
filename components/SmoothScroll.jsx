"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.9,
      lerp: 0.025,
      easing: (t) => 1 - Math.pow(1 - t, 5),
      wheelMultiplier: 0.5,
      touchMultiplier: 0.75,
      smoothWheel: true,
      smoothTouch: true,
    });

    window["__lenis"] = lenis;

    let rafId = 0;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window["__lenis"];
    };
  }, []);

  return null;
};

export default SmoothScroll;
