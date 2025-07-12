'use client';
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-surface/80 border border-border shadow-lg backdrop-blur-md hover:bg-accent-faded transition-all group animate-fade-in"
      aria-label="Scroll to top"
    >
      <span className="text-2xl text-accent-a group-hover:text-accent-b transition-colors">↑</span>
    </button>
  );
} 