'use client';
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
  SiFramer, 
  SiVite 
} from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';

// Tech icon mapping
const getTechIcon = (tech) => {
  const iconMap = {
    "React": <FaReact className="text-blue-500" />,
    "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
    "JavaScript": <FaJs className="text-yellow-400" />,
    "Django": <SiDjango className="text-green-700" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
    "REST APIs": <BiCodeAlt className="text-purple-500" />,
    "Git": <FaGitAlt className="text-orange-600" />,
    "Figma": <FaFigma className="text-pink-500" />,
    "Framer Motion": <SiFramer className="text-blue-600" />,
    "MUI": <span className="text-blue-600">🎨</span>,
    "Vite": <SiVite className="text-purple-500" />
  };
  return iconMap[tech] || <span className="text-accent-a">⚡</span>;
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-6 bg-surface/30 flex flex-col items-center justify-center">
      {/* Robot mascot */}
      <div className="absolute right-8 top-8 opacity-60 animate-bounce-delay">
        <RobotMascot variant="reading" size="sm" />
      </div>
      
      {/* Floating lightbulbs */}
      <div className="absolute left-10 top-20 text-2xl animate-bounce opacity-30">💡</div>
      <div className="absolute right-20 top-40 text-xl animate-bounce-delay opacity-30">💡</div>
      <div className="absolute left-20 bottom-20 text-lg animate-bounce opacity-30">💡</div>
      
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent-a animate-fade-in">About Me</h2>
        <p className="text-lg md:text-xl text-text-secondary mb-8 animate-fade-in-delay">
          I'm a passionate developer with a strong foundation in both frontend and backend development. I love learning new technologies and building solutions that are both elegant and effective. I'm always pushing for clean code, pixel-perfect design, and great user experiences.
        </p>
        {/* Animated skill tags with robot footprints */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-delay-2">
          {[
            "React", "Next.js", "JavaScript", "Django", "Tailwind CSS", "REST APIs", "Git", "Figma", "Framer Motion", "MUI", "Vite"
          ].map((skill, index) => (
            <div key={skill} className="relative group">
              <span
                className="px-4 py-2 rounded-full bg-accent-faded text-accent-a font-semibold text-sm shadow hover:scale-105 hover:bg-accent-a hover:text-white transition-all cursor-pointer select-none flex items-center gap-2"
              >
                <span className="text-sm">{getTechIcon(skill)}</span>
                {skill}
                {index % 3 === 0 && <span className="text-xs animate-pulse">🤖</span>}
              </span>
            </div>
          ))}
        </div>
        <div className="text-base md:text-lg text-text-primary font-medium italic animate-fade-in-delay-3">
          "I love building things that are beautiful, fast, and genuinely useful. I'm always learning, always shipping, and always pushing the frontend experience further."
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