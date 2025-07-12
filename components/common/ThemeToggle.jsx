"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toggleCount, setToggleCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setToggleCount((c) => {
      const next = c + 1;
      if (next >= 7) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 3500);
        return 0;
      }
      return next;
    });
  };

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed bottom-24 left-6 z-50 p-3 rounded-xl bg-surface/80 border border-border shadow-lg backdrop-blur-md hover:bg-accent-faded transition-all group"
        aria-label="Toggle dark/light theme"
      >
        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
          {theme === "dark" ? "☀️" : "🌙"}
        </span>
      </button>
      {showEasterEgg && (
        <div className="fixed bottom-40 left-6 z-[999] bg-accent-a text-white px-6 py-4 rounded-2xl shadow-lg border-2 border-accent-b animate-fade-in flex items-center gap-3">
          <span className="text-3xl animate-robot-dance">🤖</span>
          <span className="font-bold text-lg">Robot says: You found the secret theme dance! 🎉</span>
        </div>
      )}
    </>
  );
} 