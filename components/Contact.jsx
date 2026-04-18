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
  const [whatsapp, setWhatsapp] = useState("");
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
      `Inquiry from: ${name}\nContact: ${email}\nWhatsApp: ${whatsapp || "Not provided"}\n\nVision:\n${message}`,
    );
    window.location.href = `mailto:hello@blackpepper.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#080808] text-[#e5e5e5] py-20 sm:py-28 lg:py-36 mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-8 lg:px-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* AMBIENT RADIAL LIGHTING */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        style={{ opacity }}
        className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start relative z-10"
      >
        {/* LEFT SIDE: FIXED NARRATIVE */}
        <div className="lg:col-span-5 lg:sticky lg:top-40 flex flex-col gap-10 sm:gap-14 lg:gap-24">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.8] tracking-tighter uppercase mb-6 sm:mb-8">
              Let's build <br />
              <span>something</span> <br />
              iconic<span className="text-red-600">.</span>
            </h1>
          </motion.div>

          {/* DESIGN WAR — hidden on small screens to avoid layout overflow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="pointer-events-none hidden sm:block"
          >
            <h2 className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[10rem] font-black leading-[0.75] tracking-tighter uppercase">
              DE <br /> SIGN <br /> <span className="text-red-600">WAR.</span>
            </h2>
          </motion.div>

          {/* DESIGN WAR — compact version for xs screens */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="pointer-events-none block sm:hidden"
          >
            <h2 className="text-[22vw] font-black leading-[0.75] tracking-tighter uppercase">
              DE <br /> SIGN <br /> <span className="text-red-600">WAR.</span>
            </h2>
          </motion.div>
        </div>

        {/* RIGHT SIDE: THE GLASS TERMINAL */}
        <motion.div
          style={{ y: y1 }}
          className="lg:col-span-7 bg-white/[0.02] border border-white/10 backdrop-blur-xl p-6 sm:p-10 md:p-12 lg:p-16 rounded-2xl shadow-2xl w-full"
        >
          <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 lg:space-y-12">

            {/* NAME */}
            <div className="relative">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="peer w-full bg-transparent border-b border-white/30 py-3 sm:py-4 outline-none focus:border-white transition-all text-lg sm:text-xl font-light placeholder-transparent"
                id="name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-3 sm:top-4 text-white/60 text-[10px] sm:text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-red-600 peer-valid:-top-4 peer-valid:text-[10px]"
              >
                Who are you?
              </label>
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full bg-transparent border-b border-white/30 py-3 sm:py-4 outline-none focus:border-white transition-all text-lg sm:text-xl font-light placeholder-transparent"
                id="email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-3 sm:top-4 text-white/60 text-[10px] sm:text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-red-600 peer-valid:-top-4 peer-valid:text-[10px]"
              >
                How can we reach you?
              </label>
            </div>

            {/* WHATSAPP */}
            <div className="relative">
              <input
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="peer w-full bg-transparent border-b border-white/30 py-3 sm:py-4 outline-none focus:border-white transition-all text-lg sm:text-xl font-light placeholder-transparent"
                id="whatsapp"
              />
              <label
                htmlFor="whatsapp"
                className="absolute left-0 top-3 sm:top-4 text-white/60 text-[10px] sm:text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-red-600 peer-valid:-top-4 peer-valid:text-[10px]"
              >
                WhatsApp number
              </label>
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="peer w-full bg-transparent border-b border-white/30 py-3 sm:py-4 outline-none focus:border-white transition-all text-lg sm:text-xl font-light placeholder-transparent resize-none"
                id="message"
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-3 sm:top-4 text-white/60 text-[10px] sm:text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-red-600 peer-valid:-top-4 peer-valid:text-[10px]"
              >
                What are we building?
              </label>
            </div>

            {/* SUBMIT */}
            <div className="flex justify-start">
              {/* On touch/small devices, Magnet can feel awkward — render button directly */}
              <div className="block sm:hidden">
                <button
                  type="submit"
                  className="relative px-10 py-4 bg-white text-black font-bold uppercase text-[11px] tracking-[0.3em] transition-all active:scale-95"
                >
                  Send Message
                </button>
              </div>

              <div className="hidden sm:block">
                <Magnet padding={20} magnetStrength={4}>
                  <button
                    type="submit"
                    className="relative px-12 py-5 bg-white text-black font-bold uppercase text-[12px] tracking-[0.4em] overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                  >
                    <span className="relative z-10">Send Message</span>
                  </button>
                </Magnet>
              </div>
            </div>

          </form>
        </motion.div>
      </motion.div>

      {/* BACKGROUND EXPERIENCE — clipped and toned down on small screens */}
      <div className="absolute bottom-[-20%] sm:bottom-[-30%] lg:bottom-[-40%] right-[-20%] sm:right-[-15%] lg:right-[-10%] w-[100%] sm:w-[90%] lg:w-[100%] h-[50%] sm:h-[60%] lg:h-[100%] opacity-60 cursor-pointer brightness-50 contrast-125">
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