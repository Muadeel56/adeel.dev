'use client';
import { useState } from "react";
import RobotMascot from "../common/RobotMascot";
import { 
  FaReact, 
  FaJs, 
  FaPython, 
  FaGitAlt,
  FaExternalLinkAlt,
  FaCode,
  FaCalendarAlt,
  FaBuilding
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiDjango, 
  SiPostgresql, 
  SiFramer, 
  SiVite
} from 'react-icons/si';

const PROJECTS = [
  {
    name: "Attendance Portal",
    company: "QTO House",
    description: "Full-featured portal to replace Odoo. Tracks daily attendance and calculates salaries with one click.",
    link: "",
    tech: ["React", "Tailwind", "MUI", "Django", "PostgreSQL"],
    image: "/portalPresentation.jpeg",
    date: "Sep 2024 - Present",
    status: "In Development"
  },
  {
    name: "QTO House Website",
    company: "QTO House",
    description: "Company website for QTO House, built with React, Tailwind, Django, PostgreSQL, and S3.",
    link: "https://qtohouse.com/",
    tech: ["React", "Tailwind", "Django", "PostgreSQL", "S3"],
    image: "/qtohouse.png",
    date: "Sep 2024 - Present",
    status: "Live"
  },
  {
    name: "QTO House (PK) Website",
    company: "QTO House",
    description: "QTO House Pakistan website with smooth animations and modern UI.",
    link: "https://qtohouse.com.pk/",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/qtohousepk.png",
    date: "Sep 2024 - Present",
    status: "Live"
  },
  {
    name: "Career Portal",
    company: "QTO House",
    description: "Developed hiring platform with job listings, application forms, and admin filters.",
    link: "https://career.qtohouse.com.pk/login",
    tech: ["React", "Tailwind", "Framer Motion", "Django", "PostgreSQL"],
    image: "/career.png",
    date: "Sep 2024 - Present",
    status: "Live"
  },
  {
    name: "GeoGuard (FYP)",
    company: "Final Year Project",
    description: "Web & mobile geofencing system using React, React Native, Django, REST API, and PostgreSQL. Real-time tracking, alerts, map-based zone creation.",
    link: "",
    tech: ["React", "Tailwind", "MUI", "Django", "React Native", "PostgreSQL"],
    image: "/geoguard.png",
    date: "2023 - 2024",
    status: "Completed"
  },
  {
    name: "PSH Website",
    company: "Pukhtoon Solutions Hub",
    description: "Official company website for PSH, built with React and Tailwind.",
    link: "",
    tech: ["React", "Tailwind"],
    image: "/psh.png",
    date: "Aug 2024",
    status: "Live"
  }
];

const ALL_TECHS = Array.from(new Set(PROJECTS.flatMap(p => p.tech))).sort();

// Tech icon mapping
const getTechIcon = (tech) => {
  const iconMap = {
    "React": <FaReact className="text-blue-500" />,
    "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
    "JavaScript": <FaJs className="text-yellow-400" />,
    "Django": <SiDjango className="text-green-700" />,
    "Tailwind": <SiTailwindcss className="text-cyan-500" />,
    "MUI": <span className="text-blue-600">🎨</span>,
    "PostgreSQL": <SiPostgresql className="text-blue-600" />,
    "Framer Motion": <SiFramer className="text-blue-600" />,
    "React Native": <FaReact className="text-blue-500" />,
    "S3": <span className="text-orange-500">☁️</span>,
    "Git": <FaGitAlt className="text-orange-600" />,
    "Python": <FaPython className="text-blue-600" />
  };
  return iconMap[tech] || <span className="text-accent-a">⚡</span>;
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="relative py-16 px-6 bg-surface/30">
      {/* Robot mascot */}
      <div className="absolute right-8 top-8 opacity-60 animate-bounce-delay">
        <RobotMascot variant="presenting" size="sm" />
      </div>
      
      {/* Floating project icons */}
      <div className="absolute left-10 top-20 text-2xl animate-bounce opacity-30">
        <FaCode className="text-accent-a" />
      </div>
      <div className="absolute right-20 top-40 text-xl animate-bounce-delay opacity-30">
        <FaExternalLinkAlt className="text-accent-b" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent-a animate-fade-in">Featured Projects</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto animate-fade-in-delay">
            A collection of my recent work showcasing different technologies and solutions
          </p>
        </div>
        
        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-delay-2">
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-full font-semibold text-sm border-2 transition-all ${
              filter === 'All' 
                ? 'bg-accent-a text-white border-accent-a shadow-lg' 
                : 'bg-accent-faded text-accent-a border-accent-faded hover:bg-accent-a hover:text-white hover:border-accent-a'
            }`}
          >
            All Projects
          </button>
          {ALL_TECHS.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full font-semibold text-sm border-2 transition-all flex items-center gap-2 ${
                filter === tech 
                  ? 'bg-accent-a text-white border-accent-a shadow-lg' 
                  : 'bg-accent-faded text-accent-a border-accent-faded hover:bg-accent-a hover:text-white hover:border-accent-a'
              }`}
            >
              <span className="text-sm">{getTechIcon(tech)}</span>
              {tech}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {filtered.map((proj, i) => (
            <div 
              key={proj.name} 
              className="group bg-bg border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 animate-fade-in-delay"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Project status badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                  proj.status === 'Live' 
                    ? 'bg-green-500 text-white' 
                    : proj.status === 'Completed'
                    ? 'bg-blue-500 text-white'
                    : 'bg-yellow-500 text-white'
                }`}>
                  {proj.status}
                </span>
              </div>
              
              {/* Project image */}
              <div className="relative h-48 bg-accent-faded overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.name} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                />
                {proj.link && (
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-b text-white font-bold shadow-lg">
                      <FaExternalLinkAlt className="text-sm" />
                      View Live
                    </div>
                  </a>
                )}
              </div>
              
              <div className="p-6">
                {/* Project header */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-accent-a group-hover:text-accent-b transition-colors mb-1">
                    {proj.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
                    <FaBuilding className="text-accent-a" />
                    <span>{proj.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <FaCalendarAlt className="text-accent-b" />
                    <span>{proj.date}</span>
                  </div>
                </div>
                
                {/* Project description */}
                <p className="text-text-primary text-sm leading-relaxed mb-4 line-clamp-3">
                  {proj.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech, index) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 rounded-lg bg-accent-faded text-accent-a text-xs font-semibold hover:bg-accent-a hover:text-white transition-all cursor-pointer flex items-center gap-1"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-xs">{getTechIcon(tech)}</span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-12 animate-fade-in-delay-3">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-accent-a mb-2">No projects found</h3>
            <p className="text-text-secondary">Try selecting a different technology filter</p>
          </div>
        )}
      </div>
    </section>
  );
} 