"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const reviews = [
  {
    name: "James Anderson",
    role: "Technical Director // London",
    review:
      "The quality of the code is exceptional, and the attention to detail in the user interface is something you rarely see. Truly professional work.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Olivia Bennett",
    role: "Product Manager // New York",
    review:
      "He took our complex requirements and turned them into a seamless digital experience. The execution was flawless from start to finish.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    role: "Startup Founder // Singapore",
    review:
      "Highly skilled and easy to work with. He delivered a high-performance platform that helped us scale our business significantly.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

const ReviewCard = ({ item }) => {
  const myProfilePic =
    "https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-1/591454363_2651477598539332_372402965136632244_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=o_qf0l7mtnoQ7kNvwE1m2ba&_nc_oc=AdpPJeu5-ok47lxE3Cm8vtSKk9kTDAw1a1JkSExn5NRVOO48tI1sjabJ5HCwK7mZxcbYHpFcrDa7xzoLuhdtCmER&_nc_zt=24&_nc_ht=scontent.fcmb10-1.fna&_nc_gid=q38vU9a88O3U8NNTECBctg&_nc_ss=7a389&oh=00_Af293v8gywhhK1FzcJVZ9AgR-CUQkuqnfQUv5C4eZcbJ-Q&oe=69E7AC77";

  return (
    <motion.div
      className="group relative h-[420px] w-full bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* FRONT */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 group-hover:-translate-y-12">
        <div className="space-y-6">
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
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              {item.name}
            </h4>
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              {item.role}
            </p>
          </div>
        </div>
      </div>

      {/* BACK */}
      <div className="absolute inset-0 bg-white p-8 flex flex-col justify-between translate-y-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0">
        <div className="flex flex-col items-center justify-center flex-grow space-y-4">
          <h3 className="text-3xl font-black text-black leading-none uppercase tracking-tighter text-center">
            Your Project <br />
            <span className="text-red-600">Could Be Next.</span>
          </h3>
          <p className="text-zinc-600 text-lg text-center leading-relaxed">
            These are sample reviews. Let's work together to create a real
            success story for your business.
          </p>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
          <img
            src={myProfilePic}
            alt="Chamindu Sathsara"
            className="w-12 h-12 rounded-full object-cover border border-zinc-200"
          />
          <div className="space-y-0.5 text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-black">
              Chamindu Sathsara
            </h4>
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Full Stack Developer
            </p>
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
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
              Proven <br />
              <span
                className="text-transparent border-t-2 border-red-600 pt-2"
                style={{ WebkitTextStroke: "1px white" }}
              >
                Impact.
              </span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden md:block pb-2"
          >
            <p className="text-zinc-200 text-xl text-right max-w-[200px] leading-tight">
              Collaborating with global leaders to build digital excellence.
            </p>
          </motion.div>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <ReviewCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="md:col-span-2 lg:col-span-3 p-12 bg-white flex mt-20 flex-col md:flex-row items-center justify-between group cursor-pointer overflow-hidden relative"
      >
        <span className="absolute -bottom-8 -left-4 text-9xl font-black text-black/10 select-none pointer-events-none">
          NEXT?
        </span>

        <div className="relative z-10 space-y-2 mb-8 md:mb-0">
          <h3 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none">
            Have a project <br /> in <span className="text-red-600">mind?</span>
          </h3>
          <p className="text-black font-light max-w-sm">
            I am currently accepting new projects for 2026. Let's build something
            world-class together.
          </p>
        </div>

        <button className="relative z-10 group bg-black text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-3 hover:gap-6 transition-all duration-500">
          Contact Me <ArrowUpRight size={18} />
        </button>
      </motion.div>
    </section>
  );
};

export default Testimonial;