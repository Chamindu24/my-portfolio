"use client";

import confetti from "canvas-confetti";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleConfetti = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    (function frame() {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    })();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfetti();

    // Create the mailto link dynamically
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:chamindus.22@cse.mrt.ac.lk?subject=${subject}&body=${body}`;

    // Open the email client
    window.location.href = mailtoLink;

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="container mx-auto text-center px-6 lg:px-10">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Contact Me
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Feel free to reach out for collaborations, questions, or just a chat!
        </p>

        {/* Form Section */}
        <form className="mt-12 space-y-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg p-4 bg-gray-700 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg p-4 bg-gray-700 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg p-4 bg-gray-700 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-6 rounded-full bg-indigo-600 px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition duration-300 inline-block text-center"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
