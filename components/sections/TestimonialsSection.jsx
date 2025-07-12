'use client';
import { useState } from 'react';
import RobotMascot from '../common/RobotMascot';

const TESTIMONIALS = [
  {
    name: 'Ali Raza',
    role: 'Senior Developer, QTO House',
    text: 'Adeel is a fantastic developer! His attention to detail and passion for clean code is unmatched. Highly recommended for any frontend or full stack project.',
    avatar: '/avatar1.png',
  },
  {
    name: 'Sara Khan',
    role: 'Project Manager, Pukhtoon Solutions Hub',
    text: 'Working with Adeel was a pleasure. He delivers on time, communicates clearly, and always brings creative solutions to the table.',
    avatar: '/avatar2.png',
  },
  {
    name: 'John Doe',
    role: 'Freelance Client',
    text: 'Adeel built my web app with amazing quality and speed. I would definitely hire him again!',
    avatar: '/avatar3.png',
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative py-20 px-6 bg-bg flex flex-col items-center justify-center overflow-hidden">
      {/* Robot mascot for fun */}
      <div className="absolute left-8 top-8 opacity-60 animate-bounce-delay">
        <RobotMascot variant="helper" size="sm" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-accent-a text-center animate-fade-in">Testimonials</h2>
      <div className="relative max-w-xl w-full flex flex-col items-center animate-fade-in-delay-2">
        <div className="bg-surface border border-border rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-500">
          <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full border-4 border-accent-b mb-4 object-cover bg-surface/80" />
          <div className="text-lg text-text-primary font-medium mb-2">"{t.text}"</div>
          <div className="text-accent-a font-bold mt-2">{t.name}</div>
          <div className="text-sm text-text-secondary">{t.role}</div>
        </div>
        <div className="flex gap-4 mt-6">
          <button onClick={prev} className="px-4 py-2 rounded-full bg-accent-faded text-accent-a hover:bg-accent-a hover:text-white transition-all shadow">←</button>
          <button onClick={next} className="px-4 py-2 rounded-full bg-accent-faded text-accent-a hover:bg-accent-a hover:text-white transition-all shadow">→</button>
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          {TESTIMONIALS.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-accent-a' : 'bg-accent-faded'} transition-all`} />
          ))}
        </div>
      </div>
    </section>
  );
} 