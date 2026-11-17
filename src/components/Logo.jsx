import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'default', showTagline = true, lightMode = false, className = '' }) {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  return (
    <Link 
      to="/" 
      className={`group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] focus:outline-none ${className}`}
      aria-label="Flowtastic Plumbing Home"
    >
      {/* Dynamic Modern Plumbing SVG Emblem */}
      <div className="relative flex-shrink-0">
        {/* Ambient Hydro Glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500/40 via-sky-500/20 to-blue-600/30 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

        <svg 
          className={`relative ${isSmall ? 'w-9 h-9' : isLarge ? 'w-14 h-14' : 'w-11 h-11'} transition-transform duration-300 group-hover:rotate-[-3deg]`}
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>
            <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--logo-primary)" />
              <stop offset="50%" stopColor="var(--logo-secondary)" />
              <stop offset="100%" stopColor="#034694" />
            </linearGradient>
            <linearGradient id="cyanDrop" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--logo-secondary)" />
              <stop offset="60%" stopColor="var(--logo-primary)" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
          </defs>

          {/* Base Shield / Curved Badge */}
          <rect x="6" y="6" width="88" height="88" rx="24" fill="url(#shieldGrad)" stroke="var(--logo-primary)" strokeWidth="2.5" />
          
          {/* Interlocking Pipe Arc */}
          <path 
            d="M 30,72 C 18,58 20,38 34,26 C 44,18 56,18 66,26" 
            stroke="url(#pipeGrad)" 
            strokeWidth="7" 
            strokeLinecap="round" 
          />

          {/* Core Dynamic Water Droplet */}
          <path 
            d="M 50,22 C 50,22 32,44 32,60 C 32,70 40,78 50,78 C 60,78 68,70 68,60 C 68,44 50,22 50,22 Z" 
            fill="url(#cyanDrop)" 
          />

          {/* Inner Swirl Wave Detail */}
          <path 
            d="M 42,62 C 45,54 50,53 54,57 C 57,60 62,58 63,52 C 63,64 57,71 50,71 C 45,71 42,67 42,62 Z" 
            fill="#0284c7" 
            opacity="0.9" 
          />

          {/* Droplet Highlight */}
          <ellipse cx="44" cy="46" rx="2.5" ry="5" transform="rotate(-20 44 46)" fill="#ffffff" opacity="0.85" />
          <circle cx="50" cy="34" r="1.5" fill="#ffffff" opacity="0.9" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight">
          <span className={`font-extrabold ${isSmall ? 'text-lg' : isLarge ? 'text-2xl' : 'text-xl'} ${lightMode ? 'text-white' : 'text-slate-900'}`}>
            FLOW
          </span>
          <span className={`font-extrabold ${isSmall ? 'text-lg' : isLarge ? 'text-2xl' : 'text-xl'} ${lightMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
            TASTIC
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 -mt-0.5">
          <span className={`text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase ${lightMode ? 'text-slate-400' : 'text-slate-500'}`}>
            PLUMBING
          </span>
          {showTagline && (
            <span className={`hidden sm:inline-block text-[9px] font-semibold tracking-wider ${lightMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
              • MORRISVILLE, NC
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
