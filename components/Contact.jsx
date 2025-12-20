"use client";

import confetti from "canvas-confetti";
import { useState } from "react";
import { motion } from "framer-motion";
import Magnet from "@/components/ui/Magnet";
import ContactExperience from "../components/models/ContactExperience";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleConfetti = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#6366f1", "#ffffff", "#312e81"]; // Indigo & Carbon colors

    (function frame() {
      if (Date.now() > end) return;
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors,
      });
      requestAnimationFrame(frame);
    })();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfetti();
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:chamindus.22@cse.mrt.ac.lk?subject=${subject}&body=${body}`;
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#050505] text-white min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Text & Form */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter"
              >
                LET&apos;S <span className="text-white/20">CONNECT.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg font-light max-w-md leading-relaxed"
              >
                Whether you have a question or just want to say hi, my inbox is always open.
              </motion.p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="NAME"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#111111] border border-white/5 rounded-2xl p-4 outline-none focus:border-indigo-500/50 transition-all text-sm tracking-widest uppercase font-bold"
                  required
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#111111] border border-white/5 rounded-2xl p-4 outline-none focus:border-indigo-500/50 transition-all text-sm tracking-widest uppercase font-bold"
                  required
                />
              </div>
              <textarea
                placeholder="YOUR MESSAGE"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#111111] border border-white/5 rounded-3xl p-6 outline-none focus:border-indigo-500/50 transition-all min-h-[180px] text-sm tracking-widest uppercase font-bold resize-none"
                required
              />
              
              <div className="pt-4">
                <Magnet padding={20} magnetStrength={3}>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="group relative flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-indigo-600 hover:text-white transition-all duration-500 w-full md:w-auto"
                  >
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </motion.button>
                </Magnet>
              </div>
            </motion.form>
          </div>

          {/* Right Column: 3D Experience Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 h-[500px] md:h-[650px] relative group"
          >
            <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
            <div className="w-full h-full bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              {/* Overlay Glass Tag */}
              <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/50">Developer Space</span>
              </div>
              
            <div className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 hover:opacity-100">
              <ContactExperience />
            </div>
              
              {/* Bottom Instructions */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[9px] uppercase tracking-[0.3em] text-white/40 whitespace-nowrap">
                Drag to rotate • Scroll to zoom
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;