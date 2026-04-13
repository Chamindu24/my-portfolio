"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const reviews = [
  {
    name: "James Anderson",
    role: "Technical Director // London",
    review: "The quality of the code is exceptional, and the attention to detail in the user interface is something you rarely see. Truly professional work.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Olivia Bennett",
    role: "Product Manager // New York",
    review: "He took our complex requirements and turned them into a seamless digital experience. The execution was flawless from start to finish.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    role: "Startup Founder // Singapore",
    review: "Highly skilled and easy to work with. He delivered a high-performance platform that helped us scale our business significantly.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

const ReviewCard = ({ item }) => {
  const myProfilePic = "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-1/591454363_2651477598539332_372402965136632244_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=XSudbys9cgkQ7kNvwETpRb4&_nc_oc=AdozUePc8auVsNnA9lYOx4xUOToPW7T3igj0SSVbJhIhgMm7deVrLh62Vw3eKJN5b4kP1VP6YO3-HfKV_M9VuE7C&_nc_zt=24&_nc_ht=scontent.fcmb10-1.fna&_nc_gid=R1XPZjJJTTphUqy6bCWvDg&_nc_ss=7a389&oh=00_Af0SlfMIFMnJsLgOGW6gWIWX1-NF43cYfGpyrPTqFBF1Lg&oe=69E2D6F7";

  return (
    <motion.div 
      className="group relative h-[420px] w-full bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* THE FRONT: CLIENT TESTIMONIAL */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 group-hover:-translate-y-12">
        <div className="space-y-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-red-600 text-red-600" />
            ))}
          </div>
          <p className="text-xl font-light leading-relaxed tracking-wide text-zinc-300">
            "{item.review}"
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <img 
            src={item.avatar} 
            alt={item.name} 
            className="w-12 h-12 rounded-full grayscale border border-white/10 object-cover"
          />
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">{item.name}</h4>
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{item.role}</p>
          </div>
        </div>
      </div>

      {/* THE BACK: PERSONAL CALL TO ACTION */}
      <div className="absolute inset-0 bg-white p-8 flex flex-col justify-between translate-y-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0">
        <div className="flex flex-col items-center justify-center flex-grow space-y-4">
          <h3 className="text-3xl font-black text-black leading-none uppercase tracking-tighter text-center">
            Your Project <br /> <span className="text-red-600">Could Be Next.</span>
          </h3>
          <p className="text-zinc-600 text-[13px] font-medium text-center leading-relaxed max-w-[240px]">
            These are sample reviews. Let's work together to create a real success story for your business.
          </p>
          <button className="mt-4 px-8 py-3 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-red-600 transition-colors flex items-center gap-2">
            Contact Me <ArrowUpRight size={14} />
          </button>
        </div>

        {/* This mirrors the positioning of the front card footer */}
        <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
          <img 
            src={myProfilePic} 
            alt="Chamindu Sathsara" 
            className="w-12 h-12 rounded-full object-cover border border-zinc-200"
          />
          <div className="space-y-0.5 text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-black">Chamindu Sathsara</h4>
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest text-left">Full Stack Developer</p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-black/10 transition-colors" />
    </motion.div>
  );
};

const Testimonial = () => {
  return (
    <section className="py-32 mt-12 bg-[#050505] px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-20 text-center space-y-6">

          <h2 className="text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter leading-none">
            What People Say <br /> 
            <span className="text-zinc-500 font-light ">About My Work.</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <ReviewCard key={index} item={item} />
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Testimonial;