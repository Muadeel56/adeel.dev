'use client';
import { useState } from "react";
import Button from "../common/Button";
import ResumeModal from "./ResumeModal";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaGlobe,
  FaTools
} from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

// Social links for the hero section with real icons
const SOCIALS = [
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" />, link: "https://github.com/Muadeel56" },
  { name: "LinkedIn", icon: <FaLinkedin className="text-blue-600" />, link: "https://www.linkedin.com/in/muhammad-adeel-b7224a319/" },
  { name: "Email", icon: <FaEnvelope className="text-red-500" />, link: "mailto:muadeel69@gmail.com" },
  { name: "Portfolio", icon: <FaGlobe className="text-green-600" />, link: "https://adeel-portfolio.pages.dev/" },
];

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-12 md:pt-32 md:pb-24">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-a/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-b/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        {/* Profile image/avatar */}
        <img 
          src="/profile.jpg" 
          alt="Muhammad Adeel profile" 
          className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-accent-a shadow-lg mb-4 object-cover bg-surface/80 hover:scale-105 transition-transform duration-300" 
          style={{ objectPosition: 'center' }}
        />
        {/* Gradient headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          <span className="block bg-gradient-to-r from-accent-a via-accent-b to-accent-a bg-clip-text text-transparent">
            Muhammad Adeel
          </span>
          <span className="block text-2xl md:text-3xl font-medium mt-2 text-text-secondary tracking-widest">
            Frontend & Full Stack Developer
          </span>
        </h1>
        {/* Short intro */}
        <p className="text-lg md:text-xl text-text-secondary mb-6 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
          I'm a passionate developer specializing in React, Next.js, and modern web technologies. I love crafting clean, responsive, and user-focused apps that make a difference.
        </p>
        {/* Social icons row */}
        <div className="flex justify-center gap-4 mb-6 animate-fade-in-delay-2">
          {SOCIALS.map(s => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl p-3 rounded-full bg-accent-faded text-accent-a hover:bg-accent-a hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-110 robot-hover"
              aria-label={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>
        {/* Current work widget */}
        <div className="mb-8 animate-fade-in-delay-2">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-faded text-accent-b font-semibold text-base shadow-lg">
            <FaTools className="mr-2 text-accent-a" />
            Currently working on: <b className="ml-1">Attendance Portal (QTO House)</b>
          </span>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <Button variant="primary" size="lg" onClick={() => document.getElementById('projects').scrollIntoView({behavior:'smooth'})}>
            <span className="flex items-center gap-2">
              <BiCodeAlt className="text-lg" />
              View My Work
              <span className="animate-bounce-x">→</span>
            </span>
          </Button>
          <Button variant="secondary" size="lg" onClick={() => setModalOpen(true)}>
            Download Resume
          </Button>
          <Button variant="ghost" size="lg" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>
            Contact Me
          </Button>
        </div>
        <ResumeModal open={modalOpen} setOpen={setModalOpen} />
        {/* Live GitHub Stats */}
        <div className="mt-10 flex flex-col items-center w-full animate-fade-in-delay-3">
          <h3 className="text-xl font-bold text-accent-a mb-2 flex items-center gap-2">
            <FaGithub className="text-lg" />
            GitHub Stats
          </h3>
          <img
            src="https://github-readme-stats.vercel.app/api?username=Muadeel56&show_icons=true&theme=transparent&hide_border=true&title_color=8B5CF6&icon_color=10B981&text_color=64748B"
            alt="GitHub Stats"
            className="w-full max-w-xl rounded-xl shadow-lg border border-border bg-surface/80"
            loading="lazy"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Muadeel56&layout=compact&theme=transparent&hide_border=true&title_color=8B5CF6&text_color=64748B"
            alt="Top Languages"
            className="w-full max-w-md mt-4 rounded-xl shadow border border-border bg-surface/80"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
} 