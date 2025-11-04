"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  top: string;
  left: string;
  duration: number;
};

export default function Particles() {
  const particlesRef = useRef<Particle[]>([]); // ✅ Not `any[] | null`
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (particlesRef.current.length === 0) {
      particlesRef.current = Array.from({ length: 20 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 3,
      }));
    }
    setMounted(true); // ✅ Only this triggers re-render once
  }, []);

  if (!mounted) return null; // ✅ No ref access during initial render

  return (
    <>
      {particlesRef.current.map((p, i) => (
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
