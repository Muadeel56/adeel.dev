'use client';
export default function ResumeModal({ open, setOpen }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="relative bg-surface border border-border rounded-2xl shadow-2xl p-6 max-w-2xl w-full mx-4 animate-fade-in" onClick={e => e.stopPropagation()}>
        <button className="absolute top-3 right-3 text-xl text-accent-a hover:text-accent-b" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        <h3 className="text-2xl font-bold text-accent-a mb-4 text-center">Select Resume</h3>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Frontend Resume */}
          <div className="flex-1 flex flex-col items-center">
            <span className="font-semibold mb-2">Frontend Developer</span>
            <object data="/Muhammad_Adeel_Frontend_Developer_Resume.pdf" type="application/pdf" className="w-full h-48 rounded border border-border mb-2" aria-label="Frontend Resume" />
            <a href="/Muhammad_Adeel_Frontend_Developer_Resume.pdf" download className="px-4 py-2 rounded-lg bg-accent-a text-white font-semibold hover:bg-accent-b transition-all">Download</a>
          </div>
          {/* Full Stack Resume */}
          <div className="flex-1 flex flex-col items-center">
            <span className="font-semibold mb-2">Full Stack Developer</span>
            <object data="/Adeel Full Stack Developer Resume.pdf" type="application/pdf" className="w-full h-48 rounded border border-border mb-2" aria-label="Full Stack Resume" />
            <a href="/Adeel Full Stack Developer Resume.pdf" download className="px-4 py-2 rounded-lg bg-accent-b text-white font-semibold hover:bg-accent-a transition-all">Download</a>
          </div>
        </div>
      </div>
    </div>
  );
} 