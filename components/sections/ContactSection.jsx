'use client';
import { useState } from "react";
import RobotMascot from "../common/RobotMascot";

const SOCIALS = [
  { name: "Email", icon: "✉️", link: "mailto:muadeel69@gmail.com" },
  { name: "LinkedIn", icon: "🔗", link: "https://www.linkedin.com/in/muhammad-adeel-b7224a319/" },
  { name: "GitHub", icon: "🐙", link: "https://github.com/Muadeel56" },
  { name: "Portfolio", icon: "🌐", link: "https://adeel-portfolio.pages.dev/" },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  // Placeholder for EmailJS integration
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  return (
    <section id="contact" className="relative py-20 px-6 bg-bg flex flex-col items-center justify-center">
      {/* Robot mascot */}
      <div className="absolute left-8 top-8 opacity-60 animate-bounce-delay">
        <RobotMascot variant="waving" size="sm" />
      </div>
      
      {/* Floating contact icons */}
      <div className="absolute right-10 top-20 text-2xl animate-bounce opacity-30">✉️</div>
      <div className="absolute left-20 top-40 text-xl animate-bounce-delay opacity-30">📱</div>
      <div className="absolute right-20 bottom-20 text-lg animate-bounce opacity-30">💬</div>
      <div className="absolute left-10 bottom-40 text-xl animate-bounce-delay opacity-30">📧</div>
      <div className="absolute right-15 top-60 text-lg animate-bounce opacity-30">🤝</div>
      
      <div className="max-w-2xl mx-auto w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-accent-a animate-fade-in">Contact</h2>
        <p className="text-lg text-text-secondary mb-8 animate-fade-in-delay">
          Let's build something amazing together! Reach out via the form or connect on social platforms below.
        </p>
        <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl shadow-lg p-6 flex flex-col gap-4 items-center animate-fade-in-delay-2 relative group">
          {/* Robot footprint decoration */}
          <div className="absolute -top-2 -left-2 text-sm opacity-20 animate-pulse">🤖</div>
          
          <input required name="name" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg border border-border bg-bg text-text-primary focus:ring-2 focus:ring-accent-a outline-none group-hover:border-accent-a transition-all" />
          <input required name="email" type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg border border-border bg-bg text-text-primary focus:ring-2 focus:ring-accent-a outline-none group-hover:border-accent-a transition-all" />
          <textarea required name="message" placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-lg border border-border bg-bg text-text-primary focus:ring-2 focus:ring-accent-a outline-none group-hover:border-accent-a transition-all" />
          <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-a to-accent-b text-white font-semibold shadow hover:scale-105 transition-all relative overflow-hidden group">
            <span className="relative z-10">{sent ? "Message Sent!" : "Send Message"}</span>
            {sent && (
              <div className="absolute inset-0 bg-accent-b animate-pulse" />
            )}
          </button>
          
          {/* Animated form status indicator */}
          <div className="absolute top-2 right-2 flex gap-1">
            <div className="w-2 h-2 rounded-full bg-accent-a animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-accent-b animate-pulse" style={{ animationDelay: "200ms" }} />
            <div className="w-2 h-2 rounded-full bg-accent-a animate-pulse" style={{ animationDelay: "400ms" }} />
          </div>
        </form>
        {/* Download vCard button */}
        <a
          href="/Muhammad_Adeel.vcf"
          download
          className="mt-6 inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-accent-b to-accent-a text-white font-semibold shadow hover:scale-105 transition-all"
        >
          Download vCard
        </a>
        <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-delay-3">
          {SOCIALS.map((s, index) => (
            <a 
              key={s.name} 
              href={s.link} 
              target="_blank" 
              rel="noopener" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-faded text-accent-a font-semibold hover:bg-accent-a hover:text-white transition-all group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="group-hover:scale-110 transition-transform">{s.icon}</span> 
              <span>{s.name}</span>
              {/* Robot footprint decoration */}
              <div className="absolute -top-1 -right-1 text-xs opacity-20 animate-pulse">🤖</div>
            </a>
          ))}
        </div>
        <div className="mt-6 text-sm text-text-secondary animate-fade-in-delay-3">Based in Jaffarabad, Chakwal, Pakistan</div>
        
        {/* Animated contact status */}
        <div className="mt-4 flex justify-center items-center gap-2 animate-fade-in-delay-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-text-secondary">Available for new opportunities</span>
        </div>
      </div>
    </section>
  );
} 