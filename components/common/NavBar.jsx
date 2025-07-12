'use client'
import { useState, useEffect } from "react";
import { FaCode } from 'react-icons/fa';

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
  const [scrolled, setScrolled] = useState(false);

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setScrolled(window.scrollY > 20);
      
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

  // Keyboard navigation
  const handleKeyDown = (e, href) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNav(href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-surface/80 backdrop-blur-md border-b border-border/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="flex items-center gap-2 text-xl font-bold text-accent-a hover:text-accent-b transition-colors group"
              onClick={() => handleNav("#home")}
              onKeyDown={(e) => handleKeyDown(e, "#home")}
              tabIndex={0}
              aria-label="Go to home page"
            >
              <FaCode className="text-accent-b group-hover:text-accent-a transition-colors" />
              <span>Adeel.dev</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative group ${
                    active === link.href
                      ? 'text-accent-a bg-accent-faded shadow-sm'
                      : 'text-text-primary hover:text-accent-a hover:bg-accent-faded'
                  }`}
                  tabIndex={0}
                  aria-current={active === link.href ? 'page' : undefined}
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                  {/* Active indicator */}
                  {active === link.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-a rounded-full" />
                  )}
                  {/* Hover effect */}
                  <span className="absolute inset-0 rounded-lg bg-accent-a/0 group-hover:bg-accent-a/5 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-text-primary hover:text-accent-a hover:bg-accent-faded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-a transition-all"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${open ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${open ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${open ? 'block' : 'hidden'} md:hidden bg-surface border-t border-border shadow-lg`}
        id="mobile-menu"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="mobile-menu-button"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              onKeyDown={(e) => handleKeyDown(e, link.href)}
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-all ${
                active === link.href
                  ? 'text-accent-a bg-accent-faded shadow-sm'
                  : 'text-text-primary hover:text-accent-a hover:bg-accent-faded'
              }`}
              role="menuitem"
              tabIndex={0}
              aria-current={active === link.href ? 'page' : undefined}
              aria-label={`Navigate to ${link.label} section`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
} 