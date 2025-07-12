'use client';
import { useState } from "react";
import RobotMascot from "../common/RobotMascot";

const PROJECTS = [
  {
    name: "Attendance Portal",
    company: "QTO House",
    description: "Full-featured portal to replace Odoo. Tracks daily attendance and calculates salaries with one click.",
    link: "",
    tech: ["React", "Tailwind", "MUI", "Django", "PostgreSQL"],
    image: "/portalPresentation.jpeg",
    date: "2024",
    popularity: 95,
    status: "Live"
  },
  {
    name: "QTO House",
    company: "QTO House",
    description: "Company website for QTO House, built with React, Tailwind, Django, PostgreSQL, and S3.",
    link: "https://qtohouse.com/",
    tech: ["React", "Tailwind", "Django", "PostgreSQL", "S3"],
    image: "/qtohouse.png",
    date: "2024",
    popularity: 90,
    status: "Live"
  },
  {
    name: "QTO House (PK)",
    company: "QTO House",
    description: "QTO House Pakistan website with smooth animations and modern UI.",
    link: "https://qtohouse.com.pk/",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/qtohousepk.png",
    date: "2024",
    popularity: 85,
    status: "Live"
  },
  {
    name: "Career Portal",
    company: "QTO House",
    description: "Developed hiring platform with job listings, application forms, and admin filters.",
    link: "https://career.qtohouse.com.pk/login",
    tech: ["React", "Tailwind", "Framer Motion", "Django", "PostgreSQL"],
    image: "/career.png",
    date: "2023",
    popularity: 88,
    status: "Live"
  },
  {
    name: "GeoGuard (FYP)",
    company: "Pukhtoon Solutions Hub",
    description: "Web & mobile geofencing system using React, React Native, Django, REST API, and PostgreSQL. Real-time tracking, alerts, map-based zone creation.",
    link: "",
    tech: ["React", "Tailwind", "MUI", "Django", "React Native", "PostgreSQL"],
    image: "/geoguard.png",
    date: "2023",
    popularity: 92,
    status: "Completed"
  },
  {
    name: "PSH Website",
    company: "Pukhtoon Solutions Hub",
    description: "Official company website for PSH, built with React and Tailwind.",
    link: "",
    tech: ["React", "Tailwind"],
    image: "/psh.png",
    date: "2023",
    popularity: 80,
    status: "Live"
  }
];

const ALL_TECHS = Array.from(new Set(PROJECTS.flatMap(p => p.tech))).sort();

const SORT_OPTIONS = [
  { value: 'date', label: 'Date' },
  { value: 'popularity', label: 'Popularity' },
  { value: 'name', label: 'Name' },
  { value: 'status', label: 'Status' }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  // Filter and sort projects
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tech.includes(filter));
  
  const sorted = [...filtered].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];
    
    if (sortBy === 'date') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(order => order === 'asc' ? 'desc' : 'asc');
  };

  return (
    <section id="projects" className="relative py-20 px-6 bg-surface/30 flex flex-col items-center justify-center">
      {/* Robot mascot */}
      <div className="absolute right-8 top-8 opacity-60 animate-bounce-delay">
        <RobotMascot variant="presenting" size="sm" />
      </div>
      {/* Floating project icons */}
      <div className="absolute left-10 top-20 text-2xl animate-bounce opacity-30">🌐</div>
      <div className="absolute right-20 top-40 text-xl animate-bounce-delay opacity-30">📱</div>
      <div className="absolute left-20 bottom-20 text-lg animate-bounce opacity-30">💻</div>
      <div className="absolute right-10 bottom-40 text-xl animate-bounce-delay opacity-30">🚀</div>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-accent-a text-center animate-fade-in">Projects</h2>
        
        {/* Filter and Sort Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-delay-2">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter('All')}
              className={`px-4 py-2 rounded-full font-semibold text-sm border-2 transition-all ${filter === 'All' ? 'bg-accent-a text-white border-accent-a' : 'bg-accent-faded text-accent-a border-accent-faded hover:bg-accent-a hover:text-white hover:border-accent-a'}`}
            >
              All
            </button>
            {ALL_TECHS.map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full font-semibold text-sm border-2 transition-all ${filter === tech ? 'bg-accent-a text-white border-accent-a' : 'bg-accent-faded text-accent-a border-accent-faded hover:bg-accent-a hover:text-white hover:border-accent-a'}`}
              >
                {tech}
              </button>
            ))}
          </div>
          
          {/* Sort controls */}
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-lg bg-surface border border-border text-text-primary text-sm focus:outline-none focus:border-accent-a"
            >
              {SORT_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  Sort by {option.label}
                </option>
              ))}
            </select>
            <button
              onClick={toggleSortOrder}
              className="px-3 py-2 rounded-lg bg-surface border border-border text-text-primary hover:bg-accent-faded transition-all"
              aria-label={`Sort ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
            >
              {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 xl:gap-10 2xl:gap-12 w-full">
          {sorted.map((proj, i) => (
            <div key={proj.name} className="relative group bg-bg border border-border rounded-2xl shadow-lg p-0 flex flex-col overflow-hidden hover:shadow-2xl transition-all animate-fade-in-delay w-full min-h-[420px] xl:min-h-[440px] 2xl:min-h-[480px]">
              {/* Robot footprint decoration */}
              <div className="absolute top-2 right-2 text-sm opacity-20 animate-pulse z-10">🤖</div>
              
              {/* Project status badge */}
              <div className="absolute top-2 left-2 z-10">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  proj.status === 'Live' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-blue-500 text-white'
                }`}>
                  {proj.status}
                </span>
              </div>
              
              {/* Project image */}
              <div className="w-full h-48 bg-accent-faded flex items-center justify-center overflow-hidden relative">
                <img src={proj.image} alt={proj.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener" className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-6 py-2 rounded-xl bg-accent-b text-white font-bold shadow-lg text-lg hover:bg-accent-a transition-all">View Live</span>
                  </a>
                )}
              </div>
              
              <div className="flex flex-col gap-1 p-6">
                <div className="text-xl font-bold text-accent-a group-hover:text-accent-b transition-colors">{proj.name}</div>
                {proj.company && <div className="text-xs text-text-secondary font-medium">{proj.company}</div>}
                <div className="text-base text-text-primary mb-2">{proj.description}</div>
                
                {/* Project metadata */}
                <div className="flex justify-between items-center mb-2 text-xs text-text-secondary">
                  <span>📅 {proj.date}</span>
                  <span>⭐ {proj.popularity}%</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-2">
                  {proj.tech.map((t, index) => (
                    <span 
                      key={t} 
                      className="px-2 py-1 rounded bg-accent-faded text-accent-a text-xs font-semibold hover:bg-accent-a hover:text-white transition-all cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Animated project status indicator */}
                <div className="absolute bottom-2 left-2 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-accent-a animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-accent-b animate-pulse" style={{ animationDelay: "200ms" }} />
                  <div className="w-2 h-2 rounded-full bg-accent-a animate-pulse" style={{ animationDelay: "400ms" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {sorted.length === 0 && (
          <div className="text-center text-text-secondary mt-8 animate-fade-in-delay-3">No projects found for this tech stack.</div>
        )}
      </div>
    </section>
  );
} 