'use client'
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let found = "#home";
      for (const link of NAV_LINKS) {
        const el = document.querySelector(link.href);
        if (el && window.scrollY + 80 >= el.offsetTop) {
          found = link.href;
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleNav = href => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95vw] max-w-3xl rounded-2xl bg-surface/80 border border-border shadow-lg backdrop-blur-md px-4 py-2 flex items-center justify-between">
      <div className="font-bold text-lg tracking-widest text-accent-a cursor-pointer select-none" onClick={() => handleNav("#home")}>Adeel.dev</div>
      {/* Desktop nav */}
      <ul className="hidden md:flex gap-2">
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <button
              onClick={() => handleNav(link.href)}
              className={`px-3 py-1 rounded-lg font-medium transition-all text-sm hover:bg-accent-faded hover:text-accent-a focus:outline-none focus:ring-2 focus:ring-accent-a ${active === link.href ? "bg-accent-faded text-accent-a" : "text-text-primary"}`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
      {/* Mobile hamburger */}
      <button className="md:hidden p-2 rounded-lg hover:bg-accent-faded" onClick={() => setOpen(o => !o)} aria-label="Open menu">
        <span className="block w-6 h-0.5 bg-text-primary mb-1 rounded-full"></span>
        <span className="block w-6 h-0.5 bg-text-primary mb-1 rounded-full"></span>
        <span className="block w-6 h-0.5 bg-text-primary rounded-full"></span>
      </button>
      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-14 right-4 bg-surface border border-border rounded-xl shadow-lg flex flex-col gap-2 p-4 animate-fade-in min-w-[150px]">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-all text-sm hover:bg-accent-faded hover:text-accent-a focus:outline-none focus:ring-2 focus:ring-accent-a ${active === link.href ? "bg-accent-faded text-accent-a" : "text-text-primary"}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
} 