"use client";

import { motion } from "framer-motion";

const Particles = () => {
  const positions = [
    { top: "12%", left: "20%" },
    { top: "35%", left: "75%" },
    { top: "60%", left: "10%" },
    { top: "80%", left: "50%" },
    { top: "50%", left: "90%" },
    { top: "25%", left: "40%" },
    { top: "70%", left: "80%" },
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#7ce2ff] rounded-full"
          style={{ top: pos.top, left: pos.left }}
          animate={{ y: [-12, 12], opacity: [0, 1, 0] }}
          transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
};

export default function About() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background particles */}
      <Particles />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Glow on title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-4xl font-bold text-white text-center mb-12 drop-shadow-[0_0_12px_#7ce2ff]"
        >
          About Me
        </motion.h2>

        {/* Bio Section */}
        <div className="text-neutral-300 text-lg leading-relaxed space-y-6">
          <p>
            Hi — I’m <span className="text-[#7ce2ff] font-semibold">Tyler Cobb</span>,
            a developer who builds interactive dashboards, AI-powered tools, and automation
            systems that make businesses faster, smarter, and more efficient.
          </p>

          <p>
            I specialize in creating seamless user experiences using{" "}
            <span className="text-white font-medium">Next.js, React, FastAPI, and OpenAI APIs</span>.
            My work blends <span className="text-[#7ce2ff] font-semibold">functionality + design</span>, with a strong focus on clarity, speed,
            and visual polish.
          </p>

          <p>
            Whether it&apos;s AI content generation, workflow automation, analytics dashboards,
            or custom software — I love turning ideas into real, usable products.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-6">
            🛠 Technologies I Use
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Next.js", "React", "TailwindCSS", "TypeScript",
              "FastAPI", "Node.js", "Supabase", "Vercel",
              "OpenAI / GPT", "Python", "PostgreSQL", "REST APIs", "Java", "Selenium", "Playwright", "Docker"
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 text-center text-neutral-300 text-sm hover:border-[#7ce2ff]/40 transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
