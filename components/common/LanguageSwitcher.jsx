'use client';
import { useState } from 'react';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);

  const handleLanguageChange = (language) => {
    setSelectedLang(language);
    setIsOpen(false);
    // Here you would implement actual language switching logic
    // For now, we'll just show a console message
    console.log(`Language changed to: ${language.name}`);
  };

  return (
    <div className="fixed z-50 bottom-6 left-6">
      {/* Language options popover */}
      {isOpen && (
        <div className="mb-2 flex flex-col gap-2 p-3 rounded-2xl shadow-lg bg-surface border border-border animate-fade-in">
          {LANGUAGES.map((lang, i) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all border-2 ${
                selectedLang.code === lang.code 
                  ? 'bg-accent-a text-white border-accent-a' 
                  : 'bg-transparent border-transparent hover:bg-accent-faded hover:border-accent-faded'
              }`}
              aria-label={`Switch to ${lang.name}`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium min-w-[80px] text-left">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
      
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="w-12 h-12 rounded-full bg-surface border border-border shadow-lg flex items-center justify-center hover:bg-accent-faded transition-all group"
        aria-label="Switch language"
      >
        <span className="text-lg group-hover:scale-110 transition-transform">{selectedLang.flag}</span>
        <span className="absolute -top-2 -right-2 text-xs bg-accent-b text-white px-1.5 py-0.5 rounded-full shadow-md group-hover:scale-110 transition-transform">🌐</span>
      </button>
    </div>
  );
} 