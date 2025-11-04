"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("./Particles"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative ...">
      {/* Background & glow */}
      {/* ✅ Particles now safe for production & hydration */}
      <Particles />
      {/* Hero content... */}
    </section>
  );
}


/*  Mouse-based tilt wrapper */
const MagneticText = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
  const x = (e.clientX - innerWidth / 2) / 40;
  const y = (e.clientY - innerHeight / 2) / -40;
  setTilt({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
    transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
    willChange: "transform", // ✅ GPU accelerated
  }}
     transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="inline-block transition-transform duration-300 will-change-transform"
    >
      {children}
    </motion.div>
  );
};

/*  Hero Section */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f14] via-[#0a0f14] to-black" />

      {/*  Holographic orb behind content, slightly off-center
  <div className="absolute -top-10 right-1/4 opacity-70">
    <HoloOrb />
  </div> */}
      {/* Glowing backdrop (soft pulse) */}
      {/* Background glow (optimized, no blur animation) */}
<motion.div
  initial={{ opacity: 0.05 }}
  animate={{ opacity: [0.05, 0.15, 0.05] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  className="absolute w-[350px] h-[350px] bg-[#7ce2ff]/20 blur-[80px] rounded-full"
/>


      {/* Floating particles */}
      <Particles />
      

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Building the Future of <br />

          {/*  Glowing + 3D Tilt Text */}
          <MagneticText>
            <span className="relative inline-block text-[#7ce2ff] drop-shadow-[0_0_12px_#7ce2ff]">
              Dashboards & AI Automation

              {/* Layered glowing pulse softly behind text */}
              <motion.span
                initial={{ opacity: 0.1 }}
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 bg-[#7ce2ff] blur-xl rounded-full"
              />
              <motion.span
                initial={{ opacity: 0.05 }}
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 bg-[#5abbe0] blur-[60px] rounded-full"
              />
            </span>
          </MagneticText>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-neutral-400 leading-relaxed">
          I design modern web apps, intelligent systems, and fast interfaces.
          <br /> Helping businesses level up with AI, automation, and elegant design.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-4 justify-center">
          <a className="px-6 py-3 rounded-lg font-medium bg-[#7ce2ff] text-black hover:scale-[1.03] transition-transform">
            View Projects
          </a>
          <a className="px-6 py-3 rounded-lg font-medium bg-[#7ce2ff] text-black hover:scale-[1.03] transition-transform">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}










