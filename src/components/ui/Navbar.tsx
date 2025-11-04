"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about"},
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0d12]/70 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          Tyler<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                pathname === item.href
                  ? "text-primary"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="mailto:contact@tylercobb.dev"
          className="hidden md:block px-4 py-2 rounded-lg bg-primary text-black font-semibold hover:bg-primary/80 transition"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
