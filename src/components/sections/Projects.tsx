"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ✅ Floating particles reused from the Hero section, but made deterministic
const Particles = () => {
  const positions = [
    { top: "10%", left: "20%" },
    { top: "30%", left: "70%" },
    { top: "60%", left: "15%" },
    { top: "80%", left: "50%" },
    { top: "50%", left: "90%" },
    { top: "20%", left: "40%" },
    { top: "70%", left: "80%" },
    { top: "40%", left: "10%" },
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#7ce2ff] rounded-full"
          style={{ top: pos.top, left: pos.left }}
          animate={{ y: [-10, 10], opacity: [0, 1, 0] }}
          transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
};

type Project = {
  title: string;
  description: string;
  url: string;
  emoji: string;
};

const projects: Project[] = [
  {
    title: "NYC Property Analytics Dashboard",
    emoji: "🏙️",
    description:
      "Interactive real estate dashboard using NYC Open Data, FastAPI backend, and React frontend. Includes KPIs, borough analytics, and neighborhood drilldowns.",
    url: "https://portfolio-demo-flax-gamma.vercel.app/",
  },
  {
    title: "AI Copywriting Generator",
    emoji: "🤖",
    description:
      "Enter a product/topic + tone, and generate AI-powered marketing copy, blog intros, and Instagram captions using GPT models.",
    url: "https://ai-copywright.netlify.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* ✅ Reuse subtle particles */}
      <Particles />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* ✅ Glowing Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-4xl font-bold mb-12 text-white text-center drop-shadow-[0_0_12px_#7ce2ff]"
        >
          Featured Projects
        </motion.h2>

        {/* ✅ Project Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl backdrop-blur-lg shadow-lg transition-all duration-300 hover:border-[#7ce2ff]/40"
            >
              {/* ✅ Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#7ce2ff]/10 blur-xl opacity-0 group-hover:opacity-40 transition duration-500 pointer-events-none" />

              <div className="relative">
                <h3 className="text-2xl font-semibold text-white">
                  {project.emoji} {project.title}
                </h3>
                <p className="text-neutral-400 mt-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7ce2ff] hover:text-white hover:underline transition"
                  >
                    Live Demo →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
