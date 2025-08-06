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
      className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-200 font-mono  text-lg text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to reach out for collaborations, questions, or just a chat!
        </motion.p>

        {/* Responsive Flex Layout */}
        <div className="mt-14 flex flex-col lg:flex-row gap-6 lg:gap-16 w-full p-4">
          {/* Form Section */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex-[0.7] space-y-6 m-auto pl-12"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg p-4  bg-gray-700 text-white  border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all "
              required
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
              }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg p-4 bg-gray-700 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
              }}
            />
            <motion.textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg p-4 bg-gray-700 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all min-h-[150px]"
              required
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
              }}
            />
            <div className="flex justify-center">
            <Magnet padding={50} disabled={false} magnetStrength={8}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="mt-6 rounded-full bg-indigo-600 px-8 py-4 text-white text-base md:text-lg font-semibold shadow-lg hover:bg-indigo-700 transition duration-300 inline-block text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Send Message
              </motion.button>
            </Magnet>
            </div>
          </motion.form>

          {/* 3D Model Section */}
          <motion.div
            className="flex-[1.2] min-h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-[#4e2c5e] hover:cursor-grab rounded-3xl">
              <ContactExperience />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
