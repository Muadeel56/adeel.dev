"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-24 left-6 z-50 p-3 rounded-xl bg-surface/80 border border-border shadow-lg backdrop-blur-md hover:bg-accent-faded transition-all group"
      aria-label="Toggle dark/light theme"
    >
      <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
    </button>
  );
} 