"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mldoykbo", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Glowing title */}
      <motion.h2
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_0_12px_#7ce2ff]"
      >
        Get In Touch
      </motion.h2>

      <div className="max-w-3xl mx-auto relative z-10">
        <form
          onSubmit={handleSubmit}
          className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 shadow-xl space-y-6"
        >
          <div>
            <label className="text-neutral-300 block mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-[#7ce2ff]"
            />
          </div>

          <div>
            <label className="text-neutral-300 block mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-[#7ce2ff]"
            />
          </div>

          <div>
            <label className="text-neutral-300 block mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-[#7ce2ff]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#7ce2ff] text-black font-semibold hover:shadow-[0_0_15px_#7ce2ff] transition"
          >
            Send Message
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center mt-4">
              ✅ Message sent! I’ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-4">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
