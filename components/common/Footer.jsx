'use client';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaGlobe,
  FaHeart,
  FaCode,
  FaMapMarkerAlt,
  FaCalendarAlt
} from 'react-icons/fa';

const SOCIALS = [
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" />, link: "https://github.com/Muadeel56" },
  { name: "LinkedIn", icon: <FaLinkedin className="text-blue-600" />, link: "https://www.linkedin.com/in/muhammad-adeel-b7224a319/" },
  { name: "Email", icon: <FaEnvelope className="text-red-500" />, link: "mailto:muadeel69@gmail.com" },
  { name: "Portfolio", icon: <FaGlobe className="text-green-600" />, link: "https://adeel-portfolio.pages.dev/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaCode className="text-2xl text-accent-a" />
              <span className="text-xl font-bold text-accent-a">Adeel.dev</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Experienced Frontend & Full Stack Developer with expertise in React, Next.js, 
              and modern web technologies. Passionate about creating scalable, user-centric applications.
            </p>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span>Built with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>Next.js, React & Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent-a">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#home" 
                  className="text-text-secondary hover:text-accent-a transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('home').scrollIntoView({behavior:'smooth'});
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-text-secondary hover:text-accent-a transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about').scrollIntoView({behavior:'smooth'});
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-text-secondary hover:text-accent-a transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('experience').scrollIntoView({behavior:'smooth'});
                  }}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-text-secondary hover:text-accent-a transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects').scrollIntoView({behavior:'smooth'});
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-text-secondary hover:text-accent-a transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('skills').scrollIntoView({behavior:'smooth'});
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-text-secondary hover:text-accent-a transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent-a">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-text-secondary">
                <FaEnvelope className="text-red-500 flex-shrink-0" />
                <a 
                  href="mailto:muadeel69@gmail.com" 
                  className="hover:text-accent-a transition-colors break-all"
                >
                  muadeel69@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <FaMapMarkerAlt className="text-green-600 flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <FaCalendarAlt className="text-blue-600 flex-shrink-0" />
                <span>Available for opportunities</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold text-accent-a mb-3">Connect</h4>
              <div className="flex gap-3">
                {SOCIALS.map(social => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent-faded text-accent-a hover:bg-accent-a hover:text-white transition-all hover:scale-110"
                    aria-label={`Connect on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-text-secondary">
            © {currentYear} Muhammad Adeel. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <a 
              href="https://github.com/Muadeel56/adeel.dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-a transition-colors flex items-center gap-1"
            >
              <FaCode className="text-xs" />
              View Source
            </a>
            <span>•</span>
            <a 
              href="mailto:muadeel69@gmail.com" 
              className="hover:text-accent-a transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 