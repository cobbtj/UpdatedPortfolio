// src/app/layout.tsx
import "./globals.css";
import  Navbar  from "@/components/ui/Navbar";
import  Footer  from "@/components/ui/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tyler Cobb — Web & AI Developer",
  description: "I build high-performance dashboards, AI tools, and stylish web apps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0a0f14] text-white antialiased overflow-x-hidden">
        {/* 🌐 Full-page background gradient */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0f14] via-[#0a0f14] to-black" />

        {/* ✅ Optional: Global glowing aura */}
        <div className="fixed inset-0 -z-20 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#7ce2ff15] blur-[200px] rounded-full" />
        </div>

        <Navbar />

        <main className="pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
