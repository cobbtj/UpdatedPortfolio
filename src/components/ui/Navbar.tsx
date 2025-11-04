"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-lg border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-white tracking-wide">
          Tyler Cobb
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-neutral-300">
          <Link href="/" className="hover:text-[#7ce2ff] transition">Home</Link>
          <Link href="/about" className="hover:text-[#7ce2ff] transition">About</Link>
          <Link href="/projects" className="hover:text-[#7ce2ff] transition">Projects</Link>
          <Link href="/services" className="hover:text-[#7ce2ff] transition">Services</Link>
          <Link href="/contact" className="hover:text-[#7ce2ff] transition">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <span className="text-3xl">&times;</span> // X icon
          ) : (
            <span className="text-3xl">&#9776;</span> // ☰ icon
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/90 text-white text-center py-6 space-y-4 border-t border-neutral-800"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-[#7ce2ff] transition">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-[#7ce2ff] transition">About</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="block hover:text-[#7ce2ff] transition">Projects</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block hover:text-[#7ce2ff] transition">Services</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-[#7ce2ff] transition">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
