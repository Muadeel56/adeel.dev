'use client'
import { useEffect, useState } from "react";

const PALETTES = [
  {
    name: "Nebula Bloom",
    className: "",
    color: "bg-[hsl(300_100%_60%)] border-[hsl(160_84%_39%)]",
  },
  {
    name: "Galactic Aurora",
    className: "palette-galactic",
    color: "bg-[hsl(200_100%_60%)] border-[hsl(270_100%_70%)]",
  },
  {
    name: "Cyberpunk Night",
    className: "palette-cyberpunk",
    color: "bg-[hsl(320_100%_60%)] border-[hsl(180_100%_50%)]",
  },
];

export default function PaletteSwitcher() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  // On mount, read palette from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("palette");
    if (saved) {
      const idx = PALETTES.findIndex(p => p.className === saved);
      setActive(idx === -1 ? 0 : idx);
      document.documentElement.classList.remove(...PALETTES.map(p => p.className).filter(Boolean));
      if (saved) document.documentElement.classList.add(saved);
    }
  }, []);

  // When palette changes, update <html> class and localStorage
  const setPalette = idx => {
    setActive(idx);
    document.documentElement.classList.remove(...PALETTES.map(p => p.className).filter(Boolean));
    if (PALETTES[idx].className) document.documentElement.classList.add(PALETTES[idx].className);
    localStorage.setItem("palette", PALETTES[idx].className);
    setOpen(false);
  };

  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-2">
      {/* Palette options popover */}
      {open && (
        <div className="mb-2 flex flex-col gap-2 p-3 rounded-2xl shadow-lg bg-surface border border-border animate-fade-in">
          {PALETTES.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setPalette(i)}
              className={`flex items-center gap-2 px-2 py-1 rounded-lg transition-all border-2 ${p.color} ${active === i ? "ring-2 ring-accent-a" : "opacity-80 hover:opacity-100"}`}
              aria-label={p.name}
            >
              <span className={`inline-block w-6 h-6 rounded-full border-2 ${p.color}`}></span>
              <span className="text-xs text-text-primary font-medium min-w-[90px] text-left">{p.name}</span>
            </button>
          ))}
        </div>
      )}
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-12 h-12 rounded-full bg-surface border border-border shadow-lg flex items-center justify-center hover:bg-accent-faded transition-all group"
        aria-label="Switch color palette"
      >
        <span className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all"
          style={{ background: 'hsl(var(--accent-a))', borderColor: 'hsl(var(--accent-b))' }}
        />
        <span className="absolute -top-2 -right-2 text-xs bg-accent-b text-white px-1.5 py-0.5 rounded-full shadow-md group-hover:scale-110 transition-transform">🎨</span>
      </button>
    </div>
  );
} 