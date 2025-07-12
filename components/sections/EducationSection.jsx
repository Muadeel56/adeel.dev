'use client';
import RobotMascot from "../common/RobotMascot";

const EDUCATION = [
  {
    school: "University of Chakwal",
    degree: "BS Computer Science",
    year: "2024",
    logo: "🎓",
  },
  {
    school: "Royal College of Sciences Chakwal",
    degree: "FSc Pre-Engineering",
    year: "2020",
    logo: "🏫",
  },
  {
    school: "Hira Secondary School Chakwal",
    degree: "Matric",
    year: "2018",
    logo: "🏫",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-20 px-6 bg-surface/30 flex flex-col items-center justify-center">
      {/* Robot mascot */}
      <div className="absolute right-8 top-8 opacity-60 animate-bounce-delay">
        <RobotMascot variant="graduation" size="sm" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-accent-a text-center animate-fade-in">Education</h2>
      <div className="relative max-w-3xl mx-auto w-full animate-fade-in-delay-2">
        <div className="border-l-4 border-accent-faded pl-6">
          {EDUCATION.map((edu, i) => (
            <div key={edu.school} className="relative mb-12 group">
              {/* Timeline dot */}
              <div className="absolute -left-8 top-2 w-6 h-6 rounded-full bg-accent-b border-4 border-surface flex items-center justify-center text-xl shadow animate-bounce-delay">
                {edu.logo}
              </div>
              {/* Timeline line */}
              {i < EDUCATION.length - 1 && (
                <div className="absolute -left-5 top-8 w-2 h-full bg-accent-faded z-0" style={{ minHeight: '40px' }} />
              )}
              {/* Education card */}
              <div className="bg-bg border border-border rounded-2xl shadow p-6 flex flex-col gap-2 group-hover:shadow-2xl transition-all relative animate-fade-in-delay">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-accent-a">{edu.school}</span>
                  <span className="text-base text-text-primary">{edu.degree}</span>
                  <span className="text-sm text-text-secondary font-semibold">{edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* SVG Wave Divider */}
      <div className="absolute left-0 right-0 -bottom-1 pointer-events-none select-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path fill="currentColor" className="text-bg dark:text-bg" d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
} 