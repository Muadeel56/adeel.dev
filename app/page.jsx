'use client';
import { useEffect, useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import EducationSection from "../components/sections/EducationSection";
import ContactSection from "../components/sections/ContactSection";
import RobotMascot from "../components/common/RobotMascot";

// Lazy load TestimonialsSection
const TestimonialsSection = dynamic(() => import("../components/sections/TestimonialsSection"), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-a"></div></div>,
  ssr: false
});

function FunFactPopup() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fun-fact-popup animate-fade-in" role="alert" aria-live="polite">
      <button 
        className="absolute top-2 right-3 text-xl text-accent-a hover:text-accent-b" 
        onClick={() => setShow(false)} 
        aria-label="Close fun fact popup"
      >
        ✕
      </button>
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
      {/* Animated polygons and tech icons */}
      <svg className="absolute left-[10vw] top-[8vh] w-20 h-20 animate-spin-slow opacity-20 hidden md:block" viewBox="0 0 100 100" aria-hidden="true">
        <polygon points="50,10 90,40 70,90 30,90 10,40" fill="hsl(var(--accent-b))" />
      </svg>
      <svg className="absolute right-[10vw] top-[20vh] w-16 h-16 animate-bounce-x opacity-20 hidden md:block" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="20" y="20" width="60" height="60" rx="15" fill="hsl(var(--accent-a))" />
      </svg>
      <svg className="absolute left-[5vw] bottom-[15vh] w-14 h-14 animate-spin-slow opacity-20 hidden md:block" viewBox="0 0 100 100" aria-hidden="true">
        <polygon points="50,10 90,40 70,90 30,90 10,40" fill="hsl(var(--accent-faded))" />
      </svg>
      <svg className="absolute right-[5vw] bottom-[10vh] w-12 h-12 animate-bounce opacity-20 hidden md:block" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="20" y="20" width="60" height="60" rx="15" fill="hsl(var(--accent-b))" />
      </svg>
      {/* Animated code brackets */}
      <svg className="absolute left-[2vw] top-[40vh] w-10 h-16 animate-bounce opacity-30" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4L4 12L8 20" stroke="hsl(var(--accent-b))" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
      <svg className="absolute right-[2vw] top-[60vh] w-10 h-16 animate-bounce opacity-30" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 4L20 12L16 20" stroke="hsl(var(--accent-a))" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
      {/* Animated gear */}
      <svg className="absolute left-[40vw] top-[60vh] w-12 h-12 animate-spin-slow opacity-10" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="30" stroke="hsl(var(--accent-b))" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="10" fill="hsl(var(--accent-a))" />
      </svg>
      {/* Floating tech icons */}
      <div className="absolute left-[8vw] top-[70vh] text-3xl animate-bounce-delay opacity-30 hidden md:block" aria-hidden="true">⚛️</div>
      <div className="absolute right-[12vw] top-[25vh] text-2xl animate-bounce opacity-20 hidden md:block" aria-hidden="true">⚡</div>
      <div className="absolute left-[80vw] top-[55vh] text-xl animate-bounce-x opacity-30 hidden md:block" aria-hidden="true">🎨</div>
      <div className="absolute right-[8vw] bottom-[30vh] text-2xl animate-bounce-delay opacity-20 hidden md:block" aria-hidden="true">🚀</div>
      {/* Robot footprints trail */}
      <div className="absolute left-[5vw] top-[15vh] text-sm opacity-10 animate-pulse" aria-hidden="true">🤖</div>
      <div className="absolute left-[15vw] top-[25vh] text-sm opacity-10 animate-pulse delay-1000" aria-hidden="true">🤖</div>
      <div className="absolute left-[25vw] top-[35vh] text-sm opacity-10 animate-pulse delay-2000" aria-hidden="true">🤖</div>
      <div className="absolute left-[35vw] top-[45vh] text-sm opacity-10 animate-pulse delay-3000" aria-hidden="true">🤖</div>
      <div className="absolute left-[45vw] top-[55vh] text-sm opacity-10 animate-pulse delay-4000" aria-hidden="true">🤖</div>
      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
        <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-gradient-to-br from-accent-a/10 to-transparent" />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent-b/10 to-transparent" />
      </div>
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

  const handleClick = useCallback(() => {
    setTipIndex((prev) => (prev + 1) % tips.length);
    setShowTip(true);
    setTimeout(() => setShowTip(false), 3000);
  }, [tips.length]);

  return (
    <>
      <RobotMascot 
        variant="helper" 
        size="sm" 
        className="fixed bottom-32 right-6 z-50 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Robot helper - click for tips"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
      />
      {showTip && (
        <div 
          className="fixed bottom-40 right-20 z-50 bg-surface border border-border rounded-xl shadow-lg p-3 max-w-xs animate-fade-in"
          role="tooltip"
          aria-live="polite"
        >
          <div className="text-sm text-text-primary">{tips[tipIndex]}</div>
        </div>
      )}
    </>
  );
}

// Intersection Observer for performance
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [options]);

  return [elementRef, isIntersecting];
}

export default function Home() {
  const [sectionsVisible, setSectionsVisible] = useState({
    about: false,
    experience: false,
    projects: false,
    skills: false,
    testimonials: false,
    education: false,
    contact: false
  });

  const [aboutRef, aboutVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [experienceRef, experienceVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [projectsRef, projectsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [skillsRef, skillsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [testimonialsRef, testimonialsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [educationRef, educationVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [contactRef, contactVisible] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    setSectionsVisible(prev => ({
      ...prev,
      about: aboutVisible,
      experience: experienceVisible,
      projects: projectsVisible,
      skills: skillsVisible,
      testimonials: testimonialsVisible,
      education: educationVisible,
      contact: contactVisible
    }));
  }, [aboutVisible, experienceVisible, projectsVisible, skillsVisible, testimonialsVisible, educationVisible, contactVisible]);

  return (
    <main className="min-h-screen bg-bg text-text-primary overflow-hidden relative">
      <AnimatedShapes />
      <FunFactPopup />
      <GlobalRobotHelper />
      <div className="relative max-w-5xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto w-full px-2 md:px-8">
        {/* Sidekick robot for desktop */}
        <div className="hidden xl:block absolute left-[-120px] top-32 z-20">
          <RobotMascot variant="helper" size="lg" />
        </div>
        <RobotMascot 
          variant="default" 
          size="md" 
          className="absolute left-1/2 top-36 md:top-28 -translate-x-1/2 z-10 animate-bounce hidden xs:block"
        />
        <HeroSection />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={experienceRef}>
        <ExperienceSection />
      </div>
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
      {sectionsVisible.testimonials && (
        <div ref={testimonialsRef}>
          <TestimonialsSection />
        </div>
      )}
      <div ref={educationRef}>
        <EducationSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </main>
  );
} 