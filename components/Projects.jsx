"use client";


import { useEffect, useState } from "react";

import Particles from "@/components/ui/particles";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from "next/image";
import { FaGithub } from 'react-icons/fa'; // For GitHub icon


export function ParticlesDemo() {
  
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, []);

  return (
    <Particles
      className="absolute inset-0 z-0"
      quantity={200}
      ease={100}
      color={color}
      refresh
    />
  );
}

export function GradualSpacingDemo() {
  return (
    <GradualSpacing
      className="font-display text-center text-2xl font-extrabold tracking-widest text-white md:text-6xl"
      text="Projects"
    />
  );
}

// Define your projects manually (including private ones)
const projects = [
  {
    title: "Creator Boost",
    description: `Developed a microservices-based platform connecting social media creators. Designed RESTful APIs with Java Spring Boot using OOP, SOLID principles, and TDD with JUnit. Leveraged Apache Kafka for asynchronous communication, implemented role-based access, service listings, booking management, real-time messaging, and secure payments. Integrated PostgreSQL and MongoDB, deployed services with Docker, and optimized performance for real-time chat and multi-platform social media management.
`,
    image: "/creatorboost.png", // Store image in 'public/projects/'
    link: "https://github.com/GamiXChanuka/E_commerce_29.git", // Your GitHub repo
  },
  {
    title: "Real-time Chat App",
    description: "Created a cross-platform chat application with Firebase authentication, image sharing, and real-time message synchronization. Built with a clean mobile-first UI using Expo.",
    image: "/chat.jpg",
    link: "https://github.com/hasithasandunlakshan/leo_candle_night.git",
  },
  {
    title: "AI-Powered Notepad ",
    description: `Created a smart note-taking app integrated with Gemini API to summarize and enhance text inputs using
natural language processing`,
    image: "/calc.jpg", // Store image in 'public/projects/'
    link: "https://github.com/GamiXChanuka/E_commerce_29.git", // Your GitHub repo
  },
  {
    title: "E-Commerce Website",
    description: "A Next.js e-commerce platform with Stripe integration. Shopzy is a local chain retailer in Texas aiming to enhance its online presence to compete with major players like Amazon. The project involves designing and developing a robust e-commerce platform that will initially focus on consumer electronics and toys.",
    image: "/ecommerce.png", // Store image in 'public/projects/'
    link: "https://github.com/GamiXChanuka/E_commerce_29.git", // Your GitHub repo
  },
  {
    title: "E_commerce_29_admin_web",
    description: "This tool allows administrators to efficiently manage products, orders, customer data, and offers deep insights through a robust analytics module. Built to transition Shopzy—a Texas-based retailer—into the digital marketplace, this dashboard offers intuitive management for the storefront and data-driven decision-making.",
    image: "/ecommerceadmin.png",
    link: "https://github.com/code-GDC/E_commerce_29_admin_web.git",
  },
  {
    title: "Celestia25",
    description: "A seat booking system for a candle night dinner party. This project allows users to book seats for a special candle night dinner event, ensuring a smooth and organized experience.",
    image: "/Screenshot (370).png",
    link: "https://github.com/hasithasandunlakshan/leo_candle_night.git",
  },
  
  {
    title: "Face Recognition Attendance System",
    description: "Developed an AI-powered attendance system using real-time facial recognition, integrated with a voice notification system and CSV-based record management.",
    image: "/face.png", // Store image in 'public/projects/'
    link: "https://github.com/GamiXChanuka/E_commerce_29.git", // Your GitHub repo
  },
];

const Projects = () => (
  <section
    id="projects"
    className="relative py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900"
  >
    {/* Particles Background */}
    <ParticlesDemo />

    {/* Content Section */}
    <div className="relative z-10 container mx-auto text-center px-6 lg:px-20 ">
      
      <GradualSpacingDemo />

      <p className="mt-4 text-gray-200 font-mono text-xl opacity-90">
        Check out some of the projects I&apos;ve worked on.
      </p>

      {/* Project Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-xl bg-gray-800 p-5 shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-indigo-200"
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />

            {/* Project Title */}
            <h3 className="text-xl font-semibold text-white mt-5">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-100 mt-3">{project.description}</p>

            {/* GitHub Link with Emoji and Icon */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-blue-500 font-medium group-hover:text-indigo-400 hover:underline transition-all duration-300"
            >
              <FaGithub className="mr-2 text-lg" />
              View on GitHub
            </a>

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-400 to-transparent opacity-5 group-hover:opacity-20 transition-all duration-500 rounded-lg blur-2xl"></div>
          </div>
        ))}

      </div>
    </div>
  </section>
);

export default Projects;
