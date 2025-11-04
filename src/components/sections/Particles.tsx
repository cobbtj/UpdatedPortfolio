"use client";

import React from "react";
import { motion } from "framer-motion";

type Particle = {
  top: string;
  left: string;
  duration: number;
};

// ✅ Helper to safely generate random particles only on client side
function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: 4 + Math.random() * 3,
  }));
}

export default function Particles() {
  // ✅ Only generate particles on client — not during SSR
  const particles = React.useMemo(() => {
    if (typeof window === "undefined") return null;
    return generateParticles(20);
  }, []);

  // ✅ Avoid hydration mismatch — render nothing on server
  if (!particles) return null;

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#7ce2ff] rounded-full"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [-10, 10], opacity: [0, 1, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
