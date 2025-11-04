"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  top: string;
  left: string;
  duration: number;
};

export default function Particles() {
  const [particles, setParticles] = useState<Particle[] | null>(null);

  useEffect(() => {
    // Run only on client — safe from SSR mismatches and hydration errors
    const generated = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  // ✅ No particles on first render = no SSR mismatch
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
