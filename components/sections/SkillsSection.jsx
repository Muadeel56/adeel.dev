'use client';
import { useState, useEffect } from "react";
import RobotMascot from "../common/RobotMascot";
import { 
  FaReact, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaFigma 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiDjango, 
  SiPostgresql, 
  SiFramer, 
  SiVite 
} from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';

const SKILLS = [
  { name: "React", type: "Framework", level: 85, icon: <FaReact className="text-blue-500" /> },
  { name: "Next.js", type: "Framework", level: 80, icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "JavaScript", type: "Language", level: 90, icon: <FaJs className="text-yellow-400" /> },
  { name: "Django", type: "Framework", level: 70, icon: <SiDjango className="text-green-700" /> },
  { name: "Tailwind CSS", type: "CSS", level: 85, icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "REST APIs", type: "API", level: 75, icon: <BiCodeAlt className="text-purple-500" /> },
  { name: "Git", type: "Tool", level: 80, icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Figma", type: "Tool", level: 65, icon: <FaFigma className="text-pink-500" /> },
  { name: "Framer Motion", type: "Animation", level: 70, icon: <SiFramer className="text-blue-600" /> },
  { name: "MUI", type: "UI", level: 75, icon: <span className="text-blue-600">🎨</span> },
  { name: "Vite", type: "Tool", level: 80, icon: <SiVite className="text-purple-500" /> },
  { name: "PostgreSQL", type: "Database", level: 70, icon: <SiPostgresql className="text-blue-600" /> },
  { name: "Python", type: "Language", level: 75, icon: <FaPython className="text-blue-600" /> },
];

const SKILL_CATEGORIES = [
  { name: "Frontend", skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Framer Motion", "MUI"] },
  { name: "Backend", skills: ["Django", "Python", "PostgreSQL", "REST APIs"] },
  { name: "Tools", skills: ["Git", "Vite", "Figma"] },
];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animateChart, setAnimateChart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateChart(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredSkills = selectedCategory === "All" 
    ? SKILLS 
    : SKILLS.filter(skill => {
        const category = SKILL_CATEGORIES.find(cat => cat.name === selectedCategory);
        return category?.skills.includes(skill.name);
      });

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
      
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-accent-a text-center animate-fade-in">Skills & Tools</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-delay">
          {["All", ...SKILL_CATEGORIES.map(cat => cat.name)].map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold text-sm border-2 transition-all ${
                selectedCategory === category 
                  ? 'bg-accent-a text-white border-accent-a' 
                  : 'bg-accent-faded text-accent-a border-accent-faded hover:bg-accent-a hover:text-white hover:border-accent-a'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Skills Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-fade-in-delay">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-surface border border-border shadow hover:scale-105 hover:border-accent-a transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group relative"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Robot footprint decoration */}
                <div className="absolute -top-1 -right-1 text-xs opacity-20 animate-pulse">🤖</div>
                
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-lg font-bold text-accent-a group-hover:text-accent-b transition-colors text-center">{skill.name}</span>
                <span className="text-xs text-text-secondary mt-1 group-hover:text-accent-a transition-colors">{skill.type}</span>
                
                {/* Animated skill level indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1 h-1 rounded-full transition-all duration-300 ${
                        i < Math.floor(skill.level / 20) 
                          ? 'bg-accent-a opacity-100' 
                          : 'bg-accent-faded opacity-30'
                      }`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Animated Skills Chart */}
          <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg animate-fade-in-delay-2">
            <h3 className="text-xl font-bold text-accent-a mb-6 text-center">Skill Proficiency</h3>
            <div className="space-y-4">
              {filteredSkills.slice(0, 8).map((skill, index) => (
                <div key={skill.name} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm font-semibold text-text-primary">{skill.name}</span>
                    </div>
                    <span className="text-xs text-text-secondary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-accent-faded rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                        animateChart ? 'bg-gradient-to-r from-accent-a to-accent-b' : 'bg-transparent'
                      }`}
                      style={{ 
                        width: animateChart ? `${skill.level}%` : '0%',
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Skill Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 animate-fade-in-delay-3">
          {[
            { label: "Years Experience", value: "1+", icon: "📅" },
            { label: "Companies Worked", value: "2", icon: "🏢" },
            { label: "Projects Delivered", value: "6", icon: "🚀" },
            { label: "Technologies", value: "13", icon: "⚡" }
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