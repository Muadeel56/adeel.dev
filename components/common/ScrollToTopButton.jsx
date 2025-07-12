'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      aria-label="Scroll to top"
      tabIndex={show ? 0 : -1}
      onClick={handleScroll}
      className={`fixed bottom-6 left-6 z-50 p-3 rounded-full bg-surface/90 border border-border shadow-lg backdrop-blur-md hover:bg-accent-faded transition-all group focus:outline-none focus:ring-2 focus:ring-accent-a hover:scale-105
        ${show ? 'opacity-100 pointer-events-auto scale-100 animate-fade-in' : 'opacity-0 pointer-events-none scale-90'}
      `}
      style={{ transition: 'opacity 0.3s, transform 0.3s' }}
    >
      <FaArrowUp className="text-lg text-accent-a group-hover:text-accent-b transition-colors" />
    </button>
  );
} 