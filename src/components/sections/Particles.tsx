"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Particles() {
  const particles = React.useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 3,
    }));
  }, []);

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
