'use client';
import { useState, useEffect } from "react";
import RobotMascot from "../common/RobotMascot";

const EXPERIENCES = [
  {
    company: "QTO House",
    role: "Frontend Developer",
    period: "Sep 2024 - Present",
    logo: "🏢",
    description: "Leading frontend development for multiple projects including attendance portal, company websites, and career platforms. Specializing in React, Next.js, and modern web technologies.",
    achievements: [
      "Built full-featured attendance portal replacing Odoo system",
      "Developed responsive company websites with modern UI/UX",
      "Implemented career portal with job listings and admin filters",
      "Optimized performance and user experience across all projects"
    ],
    tech: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Django", "PostgreSQL"],
    duration: "3+ months"
  },
  {
    company: "Pukhtoon Solutions Hub",
    role: "Full Stack Developer",
    period: "Aug 2024",
    logo: "🚀",
    description: "Developed company website and worked on web applications. Gained experience with React, Django, and modern web technologies.",
    achievements: [
      "Developed official company website for PSH",
      "Worked with React and Tailwind CSS",
      "Gained experience in full-stack development",
      "Collaborated with development team"
    ],
    tech: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
    duration: "1 month"
  }
];

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateTimeline, setAnimateTimeline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateTimeline(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" className="relative py-20 px-6 bg-bg flex flex-col items-center justify-center">
      {/* Robot mascot */}
      <div className="absolute left-8 top-8 opacity-60 animate-bounce-delay">
        <RobotMascot variant="working" size="sm" />
      </div>
      
      {/* Floating work icons */}
      <div className="absolute right-10 top-20 text-2xl animate-bounce opacity-30">💼</div>
      <div className="absolute left-20 top-40 text-xl animate-bounce-delay opacity-30">⚡</div>
      <div className="absolute right-20 bottom-20 text-lg animate-bounce opacity-30">🎯</div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-accent-a text-center animate-fade-in">Experience</h2>
      <div className="relative max-w-4xl mx-auto w-full animate-fade-in-delay-2">
        <div className="border-l-4 border-accent-faded pl-6">
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.company} className="relative mb-16 group">
              {/* Timeline dot */}
              <div className="absolute -left-8 top-2 w-6 h-6 rounded-full bg-accent-a border-4 border-bg flex items-center justify-center text-xl shadow animate-bounce-delay z-10">
                {exp.logo}
              </div>
              
              {/* Timeline line with animation */}
              {i < EXPERIENCES.length - 1 && (
                <div className="absolute -left-5 top-8 w-2 h-full bg-accent-faded z-0">
                  <div 
                    className={`h-full bg-gradient-to-b from-accent-a to-accent-b transition-all duration-1000 ${
                      animateTimeline ? 'w-full' : 'w-0'
                    }`}
                    style={{ animationDelay: `${i * 500}ms` }}
                  />
                </div>
              )}
              
              {/* Experience card */}
              <div 
                className={`bg-bg border border-border rounded-2xl shadow p-6 flex flex-col gap-4 group-hover:shadow-2xl transition-all relative animate-fade-in-delay ${
                  activeIndex === i ? 'border-accent-a shadow-lg' : ''
                }`}
                onClick={() => setActiveIndex(i)}
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <span className="text-xl font-bold text-accent-a">{exp.company}</span>
                  <span className="text-lg text-text-primary">{exp.role}</span>
                  <span className="text-sm text-text-secondary font-semibold">{exp.period}</span>
                  <span className="text-xs text-accent-b bg-accent-faded px-2 py-1 rounded-full">{exp.duration}</span>
                </div>
                
                {/* Description */}
                <p className="text-base text-text-secondary leading-relaxed">{exp.description}</p>
                
                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-accent-a">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm text-text-primary flex items-start gap-2">
                        <span className="text-accent-b mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, index) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 rounded bg-accent-faded text-accent-a text-xs font-semibold hover:bg-accent-a hover:text-white transition-all"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Progress indicator */}
                <div className="absolute bottom-2 right-2 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-accent-a animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-accent-b animate-pulse" style={{ animationDelay: "200ms" }} />
                  <div className="w-2 h-2 rounded-full bg-accent-a animate-pulse" style={{ animationDelay: "400ms" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Experience summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-delay-3">
          {[
            { label: "Years Experience", value: "1+", icon: "📅" },
            { label: "Companies Worked", value: "2", icon: "🏢" },
            { label: "Projects Delivered", value: "6", icon: "🚀" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-surface border border-border hover:border-accent-a transition-all">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-accent-a">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 