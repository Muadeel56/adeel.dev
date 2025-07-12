'use client';
import { useState } from "react";
import RobotMascot from "../common/RobotMascot";
import emailjs from "emailjs-com";
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaGlobe,
  FaUser,
  FaDownload
} from 'react-icons/fa';
import { BiMessageRoundedDetail } from 'react-icons/bi';

const SOCIALS = [
  { name: "Email", icon: <FaEnvelope className="text-red-500" />, link: "mailto:muadeel69@gmail.com" },
  { name: "LinkedIn", icon: <FaLinkedin className="text-blue-600" />, link: "https://www.linkedin.com/in/muhammad-adeel-b7224a319/" },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" />, link: "https://github.com/Muadeel56" },
  { name: "Portfolio", icon: <FaGlobe className="text-green-600" />, link: "https://adeel-portfolio.pages.dev/" },
];

const CONTACT_METHODS = [
  {
    name: "Email",
    value: "muadeel69@gmail.com",
    icon: <FaEnvelope className="text-red-500" />,
    description: "Send me an email",
    action: "mailto:muadeel69@gmail.com"
  },
  {
    name: "LinkedIn",
    value: "muhammad-adeel-b7224a319",
    icon: <FaLinkedin className="text-blue-600" />,
    description: "Connect on LinkedIn",
    action: "https://www.linkedin.com/in/muhammad-adeel-b7224a319/"
  },
  {
    name: "GitHub",
    value: "Muadeel56",
    icon: <FaGithub className="text-gray-800 dark:text-white" />,
    description: "Check out my code",
    action: "https://github.com/Muadeel56"
  }
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_69ixmcm", // Service ID
        "template_inx8gr7", // Template ID
        e.target,
        "t2pAyxEVGNczCdhyS" // Public Key
      );
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      alert("Failed to send message: " + error.text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 bg-surface/30 flex flex-col items-center justify-center">
      {/* Robot mascot */}
      <div className="absolute right-8 top-8 opacity-60 animate-bounce-delay">
        <RobotMascot variant="waving" size="sm" />
      </div>
      
      {/* Floating contact icons */}
      <div className="absolute left-10 top-20 text-2xl animate-bounce opacity-30">
        <FaEnvelope className="text-accent-a" />
      </div>
      <div className="absolute right-20 top-40 text-xl animate-bounce-delay opacity-30">
        <BiMessageRoundedDetail className="text-accent-b" />
      </div>
      <div className="absolute left-20 bottom-20 text-lg animate-bounce opacity-30">
        <FaUser className="text-accent-a" />
      </div>
      
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-accent-a text-center animate-fade-in">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-delay">
            <div>
              <h3 className="text-xl font-bold text-accent-a mb-4">Let's Connect</h3>
              <p className="text-text-secondary mb-6">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              {CONTACT_METHODS.map((method, index) => (
                <a
                  key={method.name}
                  href={method.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg border border-border hover:border-accent-a transition-all group hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{method.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-text-primary">{method.name}</div>
                    <div className="text-sm text-text-secondary">{method.value}</div>
                    <div className="text-xs text-accent-a">{method.description}</div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Download vCard */}
            <div className="mt-6">
              <a
                href="/Muhammad_Adeel.vcf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-b to-accent-a text-white font-semibold shadow hover:scale-105 transition-all"
              >
                <FaDownload className="text-lg" />
                Download vCard
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in-delay-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-accent-a ${
                    errors.name ? 'border-red-500' : 'border-border focus:border-accent-a'
                  } bg-bg text-text-primary`}
                  placeholder="Your name"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-accent-a ${
                    errors.email ? 'border-red-500' : 'border-border focus:border-accent-a'
                  } bg-bg text-text-primary`}
                  placeholder="your.email@example.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-accent-a ${
                    errors.message ? 'border-red-500' : 'border-border focus:border-accent-a'
                  } bg-bg text-text-primary resize-none`}
                  placeholder="Your message..."
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-accent-a to-accent-b text-white hover:scale-105 hover:shadow-lg'
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <BiMessageRoundedDetail className="text-lg" />
                    Send Message
                  </>
                )}
              </button>
              
              {sent && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in-delay-3">
          {SOCIALS.map((s, index) => (
            <a 
              key={s.name} 
              href={s.link} 
              target="_blank" 
              rel="noopener" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-faded text-accent-a font-semibold hover:bg-accent-a hover:text-white transition-all group relative"
              style={{ animationDelay: `${index * 100}ms` }}
              aria-label={`Visit ${s.name}`}
            >
              <span className="group-hover:scale-110 transition-transform">{s.icon}</span> 
              <span>{s.name}</span>
              {/* Robot footprint decoration */}
              <div className="absolute -top-1 -right-1 text-xs opacity-20 animate-pulse">🤖</div>
            </a>
          ))}
        </div>
        
        <div className="mt-6 text-sm text-text-secondary text-center animate-fade-in-delay-3">
          Based in Jaffarabad, Chakwal, Pakistan
        </div>
        
        {/* Animated contact status */}
        <div className="absolute bottom-2 left-2 flex gap-1">
          <div className="w-2 h-2 rounded-full bg-accent-a animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-accent-b animate-pulse" style={{ animationDelay: "200ms" }} />
          <div className="w-2 h-2 rounded-full bg-accent-a animate-pulse" style={{ animationDelay: "400ms" }} />
        </div>
      </div>
    </section>
  );
} 