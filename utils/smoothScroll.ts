// utils/smoothScroll.ts
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

type LenisLike = {
  scrollTo: (
    target: number | string | HTMLElement,
    options?: {
      duration?: number;
      offset?: number;
      easing?: (t: number) => number;
      immediate?: boolean;
    }
  ) => void;
};

const getLenisInstance = () =>
  (window as Window & { __lenis?: LenisLike }).__lenis;

const animateWindowScroll = ({
  targetY,
  duration = 1100,
}: {
  targetY: number;
  duration?: number;
}) => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    window.scrollTo(0, targetY);
    return;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;

  if (Math.abs(distance) < 1) return;

  const startTime = performance.now();

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (!section) return;

  const lenis = getLenisInstance();
  if (lenis) {
    lenis.scrollTo(section, {
      duration: 1.6,
      easing: (t) => 1 - Math.pow(1 - t, 5),
    });
    history.replaceState(null, "", " "); // Remove hash from URL
    return;
  }

  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  animateWindowScroll({ targetY: sectionTop, duration: 1500 });
  history.replaceState(null, "", " "); // Remove hash from URL
};

export const scrollToTop = () => {
  const lenis = getLenisInstance();
  if (lenis) {
    lenis.scrollTo(0, {
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 5),
    });
    return;
  }

  animateWindowScroll({ targetY: 0, duration: 1300 });
};
  