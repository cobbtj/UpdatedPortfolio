"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

//  This runs on client only — no SSR mismatch.
export default function Particles() {
  const particlesRef = useRef<any[] | null>(null);
  const [mounted, setMounted] = useState(false);

  //  Run only once on client, after mount
  useEffect(() => {
    if (!particlesRef.current) {
      particlesRef.current = Array.from({ length: 20 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 3,
      }));
    }
    setMounted(true); // Only triggers re-render once
  }, []);

  //  Avoid reading ref before hydration is complete
  if (!mounted || !particlesRef.current) return null;

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
