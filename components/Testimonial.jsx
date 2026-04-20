"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { MoveRight } from "lucide-react";

const reviews = [
  {
    name: "Daniel Perera",
    role: "Product Manager",
    review:
      "Working with Chamindu was smooth from start to finish. He understands both the technical side and the user experience, which made a big difference in our product.",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=600&auto=format&fit=crop",
    align: "start",
  },
  {
    name: "Sarah Williams",
    role: "UI/UX Designer",
    review:
      "What impressed me most was the attention to detail. The animations feel natural and the interface is extremely clean. It's rare to see this level of polish.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&auto=format&fit=crop",
    align: "end",
  },
  {
    name: "Kevin Liu",
    role: "Startup Founder",
    review:
      "Chamindu went beyond what we initially planned. He helped refine ideas, improved performance, and delivered something we're genuinely proud of.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&auto=format&fit=crop",
    align: "start",
  },
];

const ReviewExhibit = ({ item, index }) => {
  const isRight = item.align === "end";
  const [isHovered, setIsHovered] = useState(false);
  const myProfilePic = "/bg6.png";

  const myReview =
    "These reviews are currently on standby… just like your next big idea. Let's work together and replace this with something real.";
  const myName = "Chamindu Sathsara";
  const myRole = "Software Engineer";

  const activeAvatar = isHovered ? myProfilePic : item.avatar;
  const activeReview = isHovered ? myReview : item.review;
  const activeName = isHovered ? myName : item.name;
  const activeRole = isHovered ? myRole : item.role;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-5%" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative w-full flex flex-col ${
        isRight ? "items-end" : "items-start"
      } mb-20 sm:mb-32 md:mb-40 lg:mb-64`}
    >
      <div
        className={`group relative w-full flex flex-col ${
          isRight ? "sm:flex-row-reverse" : "sm:flex-row"
        } items-center gap-6 sm:gap-10 md:gap-16 lg:gap-24 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 overflow-hidden transition-all duration-700`}
      >
        <span className="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-0 bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-full -z-0" />

        {/* Floating Portrait */}
        <div className="relative z-10 w-full sm:w-48 md:w-60 lg:w-72 h-56 sm:h-72 md:h-96 lg:h-[450px] overflow-hidden flex-shrink-0">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5 }}
            key={activeAvatar}
            src={activeAvatar}
            alt={activeName}
            className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100"
          />
        </div>

        {/* Text Content */}
        <div
          className={`relative z-10 flex-1 min-w-0 ${
            isRight ? "text-right sm:text-right" : "text-left sm:text-left"
          } space-y-4 sm:space-y-6 md:space-y-8`}
        >
          <motion.h3
            key={activeReview}
            initial={{ opacity: 0.6, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tighter text-white uppercase transition-colors duration-500 group-hover:text-black"
          >
            {activeReview}
          </motion.h3>
          <div
            className={`flex flex-col ${
              isRight ? "items-end" : "items-start"
            }`}
          >
            <motion.h4
              key={activeName}
              initial={{ opacity: 0.6, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl font-bold tracking-widest text-white transition-colors duration-500 group-hover:text-black"
            >
              {activeName}
            </motion.h4>
            <motion.p
              key={activeRole}
              initial={{ opacity: 0.6, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xs sm:text-sm text-zinc-200 uppercase mt-1 transition-colors duration-500 group-hover:text-zinc-700"
            >
              {activeRole}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Background Numbering */}
      <span
        className={`absolute -bottom-10 sm:-bottom-16 md:-bottom-20 ${
          isRight ? "left-0" : "right-0"
        } text-[22vw] sm:text-[20vw] font-black text-white/[0.02] select-none pointer-events-none leading-none`}
      >
        0{index + 1}
      </span>
    </motion.div>
  );
};

const Testimonial = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 md:py-40 bg-[#000] px-4 sm:px-8 lg:px-20 relative overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <header className="mb-24 sm:mb-40 md:mb-64 flex flex-col items-center text-center relative px-2 sm:px-4">
          <div className="absolute top-0 w-full sm:w-[600px] h-[300px] sm:h-[400px] bg-red-900/10 blur-[150px] rounded-full -z-10" />

          <div className="relative">
            <h2 className="flex flex-col items-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none"
              >
                What
              </motion.span>

              <div className="relative mt-[-8px] sm:mt-[-10px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="px-4 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm shadow-2xl"
                >
                  <span className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-serif uppercase font-light text-red-600 leading-none">
                    Clients{" "}
                    <span className="text-white not-italic font-extralight">
                      Say.
                    </span>
                  </span>
                </motion.div>

                <div className="absolute -top-2 -left-2 w-3 sm:w-4 h-3 sm:h-4 border-t border-l border-red-600" />
                <div className="absolute -bottom-2 -right-2 w-3 sm:w-4 h-3 sm:h-4 border-b border-r border-red-600" />
              </div>
            </h2>
          </div>
        </header>

        {/* Reviews */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {reviews.map((item, index) => (
            <ReviewExhibit key={index} item={item} index={index} />
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 sm:mt-40 md:mt-64 border border-white/10 p-8 sm:p-12 md:p-20 flex flex-col items-center justify-center text-center group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.19,1,0.22,1]" />

          <h3 className="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white group-hover:text-black uppercase tracking-tighter transition-colors duration-500 leading-tight">
            Let&apos;s Make <br /> History.
          </h3>

          <button className="relative z-10 mt-8 sm:mt-12 flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-red-600 group-hover:text-black transition-colors">
            Inquire Project <MoveRight size={24} strokeWidth={1} className="sm:hidden" />
            <MoveRight size={32} strokeWidth={1} className="hidden sm:block" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;