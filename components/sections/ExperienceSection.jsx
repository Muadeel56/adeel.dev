'use client';
import RobotMascot from "../common/RobotMascot";

const EXPERIENCES = [
  {
    company: "QTO House",
    location: "Lahore",
    role: "Frontend Developer",
    period: "Sep 2024 – Present",
    logo: "🧑‍💻",
    achievements: [
      "Built internal portals that replaced legacy tools.",
      "Worked closely with backend to integrate APIs.",
      "Focused on performance, UI polish, and business needs."
    ]
  },
  {
    company: "Pukhtoon Solutions Hub",
    location: "Lahore",
    role: "Full Stack Developer",
    period: "Aug 2024",
    logo: "💼",
    achievements: [
      "Led the development of the company's official website and an attendance management system.",
      "Created user-friendly interfaces and optimized system performance.",
      "Engaged in full-stack development, both frontend and backend."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 px-6 bg-bg flex flex-col items-center justify-center">
      {/* Robot mascot */}
      <div className="absolute left-8 top-8 opacity-60 animate-bounce-delay">
        <RobotMascot variant="working" size="sm" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-accent-a text-center animate-fade-in">Experience</h2>
      <div className="relative max-w-3xl mx-auto w-full animate-fade-in-delay-2">
        <div className="border-l-4 border-accent-faded pl-6">
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.company} className="relative mb-12 group">
              {/* Timeline dot */}
              <div className="absolute -left-8 top-2 w-6 h-6 rounded-full bg-accent-a border-4 border-bg flex items-center justify-center text-xl shadow animate-bounce-delay">
                {exp.logo}
              </div>
              {/* Timeline line */}
              {i < EXPERIENCES.length - 1 && (
                <div className="absolute -left-5 top-8 w-2 h-full bg-accent-faded z-0" style={{ minHeight: '40px' }} />
              )}
              {/* Experience card */}
              <div className="bg-surface border border-border rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-2 group-hover:shadow-2xl transition-all relative animate-fade-in-delay">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-accent-a">{exp.company}</span>
                  <span className="text-xs text-text-secondary">{exp.location}</span>
                  <span className="text-xs text-text-secondary">{exp.period}</span>
                </div>
                <div className="text-base text-text-primary font-semibold mb-1">{exp.role}</div>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="group-hover:text-accent-a transition-colors">{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* SVG Wave Divider */}
      <div className="absolute left-0 right-0 -bottom-1 pointer-events-none select-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path fill="currentColor" className="text-surface dark:text-surface" d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
} 