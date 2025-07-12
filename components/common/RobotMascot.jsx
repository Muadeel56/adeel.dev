'use client';

export default function RobotMascot({ 
  variant = "default", 
  size = "md", 
  className = "",
  onClick = null 
}) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24 md:w-32 md:h-32", 
    lg: "w-32 h-32 md:w-40 md:h-40",
    xl: "w-40 h-40 md:w-48 md:h-48"
  };

  const animationClasses = {
    default: "animate-robot-dance",
    reading: "animate-robot-wave",
    working: "animate-robot-juggle",
    presenting: "animate-robot-wave",
    juggling: "animate-robot-juggle",
    graduation: "animate-robot-dance",
    waving: "animate-robot-wave",
    helper: "animate-robot-dance"
  };

  const variants = {
    default: (
      <svg className={`${sizeClasses[size]} ${className} ${animationClasses.default}`} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="60" fill="hsl(var(--accent-faded))" stroke="hsl(var(--accent-a))" strokeWidth="6" />
        <rect x="44" y="54" width="40" height="30" rx="12" fill="#fff" stroke="hsl(var(--accent-b))" strokeWidth="4" />
        <circle cx="56" cy="68" r="5" fill="hsl(var(--accent-a))" />
        <circle cx="72" cy="68" r="5" fill="hsl(var(--accent-b))" />
        <rect x="58" y="80" width="12" height="4" rx="2" fill="hsl(var(--accent-b))" />
        <rect x="60" y="40" width="8" height="16" rx="4" fill="hsl(var(--accent-a))" />
      </svg>
    ),
    reading: (
      <svg className={`${sizeClasses[size]} ${className} ${animationClasses.reading}`} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="60" fill="hsl(var(--accent-faded))" stroke="hsl(var(--accent-a))" strokeWidth="6" />
        <rect x="44" y="54" width="40" height="30" rx="12" fill="#fff" stroke="hsl(var(--accent-b))" strokeWidth="4" />
        <circle cx="56" cy="68" r="5" fill="hsl(var(--accent-a))" />
        <circle cx="72" cy="68" r="5" fill="hsl(var(--accent-b))" />
        <rect x="58" y="80" width="12" height="4" rx="2" fill="hsl(var(--accent-b))" />
        {/* Book */}
        <rect x="20" y="45" width="12" height="16" rx="2" fill="hsl(var(--accent-a))" />
        <rect x="22" y="47" width="8" height="12" fill="#fff" />
        <line x1="26" y1="47" x2="26" y2="59" stroke="hsl(var(--accent-b))" strokeWidth="1" />
      </svg>
    ),
    working: (
      <svg className={`${sizeClasses[size]} ${className} ${animationClasses.working}`} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="60" fill="hsl(var(--accent-faded))" stroke="hsl(var(--accent-a))" strokeWidth="6" />
        <rect x="44" y="54" width="40" height="30" rx="12" fill="#fff" stroke="hsl(var(--accent-b))" strokeWidth="4" />
        <circle cx="56" cy="68" r="5" fill="hsl(var(--accent-a))" />
        <circle cx="72" cy="68" r="5" fill="hsl(var(--accent-b))" />
        <rect x="58" y="80" width="12" height="4" rx="2" fill="hsl(var(--accent-b))" />
        {/* Laptop */}
        <rect x="25" y="70" width="20" height="12" rx="2" fill="hsl(var(--accent-a))" />
        <rect x="27" y="72" width="16" height="8" fill="#fff" />
        <rect x="29" y="74" width="12" height="4" fill="hsl(var(--accent-b))" />
      </svg>
    ),
    presenting: (
      <svg className={`${sizeClasses[size]} ${className} ${animationClasses.presenting}`} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="60" fill="hsl(var(--accent-faded))" stroke="hsl(var(--accent-a))" strokeWidth="6" />
        <rect x="44" y="54" width="40" height="30" rx="12" fill="#fff" stroke="hsl(var(--accent-b))" strokeWidth="4" />
        <circle cx="56" cy="68" r="5" fill="hsl(var(--accent-a))" />
        <circle cx="72" cy="68" r="5" fill="hsl(var(--accent-b))" />
        <rect x="58" y="80" width="12" height="4" rx="2" fill="hsl(var(--accent-b))" />
        {/* Pointer arm */}
        <rect x="85" y="60" width="8" height="4" rx="2" fill="hsl(var(--accent-a))" />
        <rect x="90" y="58" width="4" height="8" rx="2" fill="hsl(var(--accent-a))" />
      </svg>
    ),
    juggling: (
      <svg className={`${sizeClasses[size]} ${className} ${animationClasses.juggling}`} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="60" fill="hsl(var(--accent-faded))" stroke="hsl(var(--accent-a))" strokeWidth="6" />
        <rect x="44" y="54" width="40" height="30" rx="12" fill="#fff" stroke="hsl(var(--accent-b))" strokeWidth="4" />
        <circle cx="56" cy="68" r="5" fill="hsl(var(--accent-a))" />
        <circle cx="72" cy="68" r="5" fill="hsl(var(--accent-b))" />
        <rect x="58" y="80" width="12" height="4" rx="2" fill="hsl(var(--accent-b))" />
        {/* Juggling balls */}
        <circle cx="45" cy="35" r="4" fill="hsl(var(--accent-a))" />
        <circle cx="64" cy="30" r="4" fill="hsl(var(--accent-b))" />
        <circle cx="83" cy="35" r="4" fill="hsl(var(--accent-a))" />
      </svg>
    ),
    graduation: (
      <svg className={`${sizeClasses[size]} ${className} ${animationClasses.graduation}`} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="60" fill="hsl(var(--accent-faded))" stroke="hsl(var(--accent-a))" strokeWidth="6" />
        <rect x="44" y="54" width="40" height="30" rx="12" fill="#fff" stroke="hsl(var(--accent-b))" strokeWidth="4" />
        <circle cx="56" cy="68" r="5" fill="hsl(var(--accent-a))" />
        <circle cx="72" cy="68" r="5" fill="hsl(var(--accent-b))" />
        <rect x="58" y="80" width="12" height="4" rx="2" fill="hsl(var(--accent-b))" />
        {/* Graduation cap */}
        <rect x="50" y="35" width="28" height="8" rx="4" fill="hsl(var(--accent-a))" />
        <rect x="52" y="33" width="24" height="4" rx="2" fill="hsl(var(--accent-b))" />
        <rect x="60" y="43" width="8" height="12" fill="hsl(var(--accent-a))" />
      </svg>
    ),
    waving: (
      <svg className={`${sizeClasses[size]} ${className} ${animationClasses.waving}`} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="60" fill="hsl(var(--accent-faded))" stroke="hsl(var(--accent-a))" strokeWidth="6" />
        <rect x="44" y="54" width="40" height="30" rx="12" fill="#fff" stroke="hsl(var(--accent-b))" strokeWidth="4" />
        <circle cx="56" cy="68" r="5" fill="hsl(var(--accent-a))" />
        <circle cx="72" cy="68" r="5" fill="hsl(var(--accent-b))" />
        <rect x="58" y="80" width="12" height="4" rx="2" fill="hsl(var(--accent-b))" />
        {/* Waving arm */}
        <rect x="85" y="55" width="6" height="20" rx="3" fill="hsl(var(--accent-a))" />
        <rect x="87" y="50" width="2" height="8" rx="1" fill="hsl(var(--accent-a))" />
      </svg>
    ),
    helper: (
      <svg className={`${sizeClasses[size]} ${className} ${animationClasses.helper}`} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="60" fill="hsl(var(--accent-faded))" stroke="hsl(var(--accent-a))" strokeWidth="6" />
        <rect x="44" y="54" width="40" height="30" rx="12" fill="#fff" stroke="hsl(var(--accent-b))" strokeWidth="4" />
        <circle cx="56" cy="68" r="5" fill="hsl(var(--accent-a))" />
        <circle cx="72" cy="68" r="5" fill="hsl(var(--accent-b))" />
        <rect x="58" y="80" width="12" height="4" rx="2" fill="hsl(var(--accent-b))" />
        {/* Lightbulb */}
        <circle cx="64" cy="35" r="8" fill="hsl(var(--accent-a))" />
        <rect x="60" y="43" width="8" height="6" rx="4" fill="hsl(var(--accent-a))" />
      </svg>
    )
  };

  const Component = variants[variant] || variants.default;
  
  return onClick ? (
    <button onClick={onClick} className="cursor-pointer hover:scale-110 transition-transform robot-interactive">
      {Component}
    </button>
  ) : Component;
} 