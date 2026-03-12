"use client";

import { MotionConfig } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import TopBar from "@/components/layout/TopBar";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

function PasswordGate({ onAuth }: { onAuth: () => void }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === "SVGA") {
      localStorage.setItem("svga_auth", "1");
      onAuth();
    } else {
      setError(true);
      setInput("");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ background: "var(--deep-navy)" }}>
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Image src="/logo.jpg" alt="SVG Association of Montreal" width={80} height={80} className="rounded-full" />
        </div>
        <div className="rounded-2xl p-8 shadow-2xl" style={{ background: "var(--navy)" }}>
          <h1 className="text-2xl font-bold text-center mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}>
            SVG Association of Montreal
          </h1>
          <p className="text-center text-sm mb-8" style={{ color: "var(--muted)" }}>
            Enter the password to access the site
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(false); }}
              placeholder="Password"
              autoFocus
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 border outline-none focus:ring-2 transition"
              style={{ background: "var(--deep-navy)", borderColor: error ? "#f87171" : "rgba(252,209,22,0.3)" }}
            />
            {error && <p className="text-sm text-red-400 text-center">Incorrect password. Please try again.</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-sm transition hover:opacity-90 active:scale-95"
              style={{ background: "var(--gold)", color: "var(--deep-navy)" }}
            >
              Enter Site
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    setAuthed(localStorage.getItem("svga_auth") === "1");
  }, []);

  // Avoid flash — render nothing until localStorage is checked
  if (authed === null) return null;

  return (
    <MotionConfig reducedMotion="user">
      {!authed && <PasswordGate onAuth={() => setAuthed(true)} />}
      <div className="bg-cream min-h-screen overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-gold focus:text-deep-navy focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>
        <header>
          <TopBar />
          <Navigation />
        </header>
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
