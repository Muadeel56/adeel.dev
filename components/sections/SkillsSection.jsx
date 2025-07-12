'use client';
import RobotMascot from "../common/RobotMascot";

const SKILLS = [
  { name: "React", type: "Framework" },
  { name: "Next.js", type: "Framework" },
  { name: "TypeScript", type: "Language" },
  { name: "JavaScript", type: "Language" },
  { name: "Django", type: "Framework" },
  { name: "Tailwind CSS", type: "CSS" },
  { name: "REST APIs", type: "API" },
  { name: "Git", type: "Tool" },
  { name: "Figma", type: "Tool" },
  { name: "Framer Motion", type: "Animation" },
  { name: "MUI", type: "UI" },
  { name: "Vite", type: "Tool" },
  { name: "PostgreSQL", type: "Database" },
  { name: "Python", type: "Language" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-6 bg-bg flex flex-col items-center justify-center">
      {/* Robot mascot */}
      <div className="absolute left-8 top-8 opacity-60 animate-bounce-delay">
        <RobotMascot variant="juggling" size="sm" />
      </div>
      
      {/* Floating tech icons */}
      <div className="absolute right-10 top-20 text-2xl animate-bounce opacity-30">⚛️</div>
      <div className="absolute left-20 top-40 text-xl animate-bounce-delay opacity-30">⚡</div>
      <div className="absolute right-20 bottom-20 text-lg animate-bounce opacity-30">🎨</div>
      <div className="absolute left-10 bottom-40 text-xl animate-bounce-delay opacity-30">🔧</div>
      <div className="absolute right-15 top-60 text-lg animate-bounce opacity-30">🐍</div>
      
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-accent-a text-center animate-fade-in">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-fade-in-delay">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-surface border border-border shadow hover:scale-105 hover:border-accent-a transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Robot footprint decoration */}
              <div className="absolute -top-1 -right-1 text-xs opacity-20 animate-pulse">🤖</div>
              
              <span className="text-lg font-bold text-accent-a group-hover:text-accent-b transition-colors">{skill.name}</span>
              <span className="text-xs text-text-secondary mt-1 group-hover:text-accent-a transition-colors">{skill.type}</span>
              
              {/* Animated skill level indicator */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 h-1 rounded-full bg-accent-a opacity-60 animate-pulse" 
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Animated skill categories */}
        <div className="mt-8 flex justify-center gap-4 animate-fade-in-delay-2">
          {["Frontend", "Backend", "Tools", "Design"].map((category, index) => (
            <span 
              key={category}
              className="px-3 py-1 rounded-full bg-accent-faded text-accent-a text-sm font-semibold hover:bg-accent-a hover:text-white transition-all cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
} 