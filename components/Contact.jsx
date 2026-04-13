"use client";

import confetti from "canvas-confetti";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnet from "@/components/ui/Magnet";
import ContactExperience from "../components/models/ContactExperience";

const Contact = () => {
  const containerRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.9 },
      colors: ["#ffffff", "#dc2626", "#444444"],
      shapes: ["square"],
      disableForReducedMotion: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfetti();
    const subject = encodeURIComponent(`Project Brief: ${name}`);
    const body = encodeURIComponent(
      `Inquiry from: ${name}\nContact: ${email}\n\nVision:\n${message}`,
    );
    window.location.href = `mailto:hello@blackpepper.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] bg-[#080808] text-[#e5e5e5] py-36 mt-24 px-6 lg:px-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* AMBIENT RADIAL LIGHTING */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        style={{ opacity }}
        className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10"
      >
        {/* LEFT SIDE: FIXED NARRATIVE */}
        <div className="lg:col-span-5 lg:sticky lg:top-40 flex flex-col gap-24">
          {/* TOP CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.75] tracking-tighter uppercase mb-8">
              Let’s build <br />
              <span className="">something</span> <br />
              iconic<span className="text-red-600">.</span>
            </h1>
          </motion.div>

          {/* 🔥 NEW BLOCK (YOUR DESIGN WAR SECTION) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="pointer-events-none"
          >
            <h2 className="text-[12vw] lg:text-[10rem] font-black leading-[0.75] tracking-tighter uppercase">
              DE <br /> SIGN <br /> <span className="text-red-600">WAR.</span>
            </h2>
          </motion.div>
        </div>

        {/* RIGHT SIDE: THE GLASS TERMINAL */}
        <motion.div
          style={{ y: y1 }}
          className="lg:col-span-7 bg-white/[0.02] border border-white/10 backdrop-blur-xl p-8 md:p-16 rounded-2xl shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="relative">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="peer w-full bg-transparent border-b border-white/30 py-4 outline-none focus:border-white transition-all text-xl font-light placeholder-transparent"
                id="name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-4 text-white/60 text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-red-600 peer-valid:-top-4 peer-valid:text-[10px]"
              >
                Who are you?
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full bg-transparent border-b border-white/30 py-4 outline-none focus:border-white transition-all text-xl font-light placeholder-transparent"
                id="email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-4 text-white/60   text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-red-600 peer-valid:-top-4 peer-valid:text-[10px]"
              >
                How can we reach you?
              </label>
            </div>

            <div className="relative">
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="peer w-full bg-transparent border-b border-white/30 py-4 outline-none focus:border-white transition-all text-xl font-light placeholder-transparent resize-none"
                id="message"
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-4 text-white/60   text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-red-600 peer-valid:-top-4 peer-valid:text-[10px]"
              >
                What are we building?
              </label>
            </div>

            <div className="flex justify-start">
              <Magnet padding={20} magnetStrength={4}>
                <button
                  type="submit"
                  className="relative px-12 py-5 bg-white text-black font-bold uppercase text-[12px] tracking-[0.4em] overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                >
                  <span className="relative z-10">Send Message</span>
                </button>
              </Magnet>
            </div>
          </form>
        </motion.div>
      </motion.div>

      {/* BACKGROUND EXPERIENCE - SUBTLE SHADOW PLAY */}
      <div className="absolute  bottom-[-40%] right-[-10%] w-[100%] h-[100%] opacity-50  cursor-pointer brightness-50 contrast-125">
        <ContactExperience />
      </div>

      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: white;
          -webkit-box-shadow: 0 0 0px 1000px #080808 inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </section>
  );
};

export default Contact;
