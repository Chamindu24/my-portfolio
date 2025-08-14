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
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    (function frame() {
      if (Date.now() > end) return;
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors,
      });

      requestAnimationFrame(frame);
    })();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfetti();

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:chamindus.22@cse.mrt.ac.lk?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="mt-3 sm:mt-4 text-gray-200 font-mono text-base sm:text-lg text-center px-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to reach out for collaborations, questions, or just a chat!
        </motion.p>

        {/* Responsive Layout - Mobile: Column, Desktop: Row */}
        <div className="mt-8 sm:mt-10 lg:mt-14 flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
          
          {/* 3D Model Section - Shows first on mobile */}
          <motion.div
            className="w-full lg:flex-[1.2] min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-[#4e2c5e] hover:cursor-grab rounded-2xl lg:rounded-3xl">
              <ContactExperience />
            </div>
          </motion.div>

          {/* Form Section - Shows second on mobile */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full lg:flex-[0.7] space-y-4 sm:space-y-6 order-2 lg:order-1 px-2 sm:px-4 lg:pl-12"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg p-3 sm:p-4 bg-gray-700 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm sm:text-base"
              required
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg p-3 sm:p-4 bg-gray-700 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm sm:text-base"
              required
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            />
            <motion.textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg p-3 sm:p-4 bg-gray-700 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all min-h-[120px] sm:min-h-[150px] text-sm sm:text-base resize-none"
              required
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            />
            <div className="flex justify-center pt-2 sm:pt-4">
              <Magnet padding={30} disabled={false} magnetStrength={6}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="rounded-full bg-indigo-600 px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:bg-indigo-700 transition duration-300 inline-block text-center min-w-[140px] sm:min-w-[160px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Send Message
                </motion.button>
              </Magnet>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;