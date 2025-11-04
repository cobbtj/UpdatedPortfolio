"use client";

import { motion } from "framer-motion";

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

const services = [
  {
    title: "Custom Dashboards & Data Visualization",
    emoji: "📊",
    description:
      "Real-time analytics dashboards using React, Next.js, and modern CI/CD workflows. Clean UI + API-connected insights.",
  },
  {
    title: "AI Automation & GPT Integration",
    emoji: "🤖",
    description:
      "Smart assistants, content generators, workflow automation, and OpenAI-powered tools for business efficiency.",
  },
  {
    title: "Full-Stack Web App Development",
    emoji: "⚡",
    description:
      "From UX to deployment — scalable web apps using Next.js, FastAPI, Node.js, and cloud platforms like Vercel & AWS.",
  },
  {
    title: "API Development & Backend Systems",
    emoji: "🔌",
    description:
      "Secure REST/GraphQL APIs, authentication systems, and server-side logic with FastAPI, Node.js, and Supabase.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <Particles />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* ✅ Glowing Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-4xl font-bold mb-12 text-white text-center drop-shadow-[0_0_12px_#7ce2ff]"
        >
          Services I Offer
        </motion.h2>

        {/* ✅ Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl backdrop-blur-lg shadow-lg transition-all duration-300 hover:border-[#7ce2ff]/40 group"
            >
              {/* ✅ Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#7ce2ff]/10 blur-xl opacity-0 group-hover:opacity-40 transition duration-500 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white">
                  {service.emoji} {service.title}
                </h3>
                <p className="text-neutral-400 mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
