'use client';
import { useEffect, useState } from "react";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import EducationSection from "../components/sections/EducationSection";
import ContactSection from "../components/sections/ContactSection";
import RobotMascot from "../components/common/RobotMascot";
import TestimonialsSection from "../components/sections/TestimonialsSection";

function FunFactPopup() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fun-fact-popup animate-fade-in">
      <button className="absolute top-2 right-3 text-xl text-accent-a hover:text-accent-b" onClick={() => setShow(false)} aria-label="Close">✕</button>
      <span>💡 <b>Fun fact:</b> I love building beautiful, fast, and genuinely useful web apps—and I'm always learning new tech!</span>
    </div>
  );
}

function AnimatedShapes() {
  return (
    <>
      <div className="floating-orb orb-1" />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />
      {/* Animated polygons */}
      <svg className="absolute left-[20vw] top-[10vh] w-16 h-16 animate-spin-slow opacity-30" viewBox="0 0 100 100"><polygon points="50,10 90,40 70,90 30,90 10,40" fill="hsl(var(--accent-b))" /></svg>
      <svg className="absolute right-[15vw] top-[40vh] w-12 h-12 animate-bounce-x opacity-30" viewBox="0 0 100 100"><rect x="20" y="20" width="60" height="60" rx="15" fill="hsl(var(--accent-a))" /></svg>
      {/* Animated code bracket */}
      <svg className="absolute left-[5vw] bottom-[20vh] w-10 h-16 animate-bounce opacity-40" viewBox="0 0 24 24"><path d="M8 4L4 12L8 20" stroke="hsl(var(--accent-b))" strokeWidth="3" fill="none" strokeLinecap="round"/></svg>
      <svg className="absolute right-[5vw] bottom-[25vh] w-10 h-16 animate-bounce opacity-40" viewBox="0 0 24 24"><path d="M16 4L20 12L16 20" stroke="hsl(var(--accent-a))" strokeWidth="3" fill="none" strokeLinecap="round"/></svg>
      {/* Animated gear */}
      <svg className="absolute left-[40vw] top-[60vh] w-12 h-12 animate-spin-slow opacity-20" viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" stroke="hsl(var(--accent-b))" strokeWidth="8" fill="none" /><circle cx="50" cy="50" r="10" fill="hsl(var(--accent-a))" /></svg>
      {/* Floating tech icons */}
      <div className="absolute left-[10vw] top-[70vh] text-2xl animate-bounce-delay opacity-40">⚛️</div>
      <div className="absolute right-[12vw] top-[20vh] text-xl animate-bounce opacity-30">⚡</div>
      <div className="absolute left-[80vw] top-[50vh] text-lg animate-bounce-x opacity-40">🎨</div>
      <div className="absolute right-[8vw] bottom-[30vh] text-xl animate-bounce-delay opacity-30">🚀</div>
      {/* Robot footprints trail */}
      <div className="absolute left-[5vw] top-[15vh] text-sm opacity-20 animate-pulse">🤖</div>
      <div className="absolute left-[15vw] top-[25vh] text-sm opacity-20 animate-pulse delay-1000">🤖</div>
      <div className="absolute left-[25vw] top-[35vh] text-sm opacity-20 animate-pulse delay-2000">🤖</div>
      <div className="absolute left-[35vw] top-[45vh] text-sm opacity-20 animate-pulse delay-3000">🤖</div>
      <div className="absolute left-[45vw] top-[55vh] text-sm opacity-20 animate-pulse delay-4000">🤖</div>
    </>
  );
}

function GlobalRobotHelper() {
  const [showTip, setShowTip] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  
  const tips = [
    "💡 Try switching themes with the moon/sun button!",
    "🎨 Check out different color palettes!",
    "🤖 I'm your friendly robot helper!",
    "✨ Hover over project cards for surprises!",
    "🚀 Click me for a fun animation!"
  ];

  const handleClick = () => {
    setTipIndex((prev) => (prev + 1) % tips.length);
    setShowTip(true);
    setTimeout(() => setShowTip(false), 3000);
  };

  return (
    <>
      <RobotMascot 
        variant="helper" 
        size="sm" 
        className="fixed bottom-32 right-6 z-50 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        onClick={handleClick}
      />
      {showTip && (
        <div className="fixed bottom-40 right-20 z-50 bg-surface border border-border rounded-xl shadow-lg p-3 max-w-xs animate-fade-in">
          <div className="text-sm text-text-primary">{tips[tipIndex]}</div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text-primary overflow-hidden relative">
      <AnimatedShapes />
      <FunFactPopup />
      <GlobalRobotHelper />
      <div className="relative">
        <RobotMascot 
          variant="default"
          size="md"
          className="absolute left-1/2 top-36 md:top-28 -translate-x-1/2 z-10 animate-bounce hidden xs:block"
        />
        <HeroSection />
      </div>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
} 