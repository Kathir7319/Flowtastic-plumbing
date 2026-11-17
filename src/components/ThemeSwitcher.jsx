import React, { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

const THEMES = [
  { id: 'emerald', name: 'Emerald Mint', color: '#10b981', ring: 'ring-emerald-500' },
  { id: 'amber', name: 'Amber Copper', color: '#f59e0b', ring: 'ring-amber-500' },
  { id: 'indigo', name: 'Royal Indigo', color: '#6366f1', ring: 'ring-indigo-500' },
  { id: 'coral', name: 'Sunset Coral', color: '#f43f5e', ring: 'ring-rose-500' },
  { id: 'cyan', name: 'Electric Cyan', color: '#06b6d4', ring: 'ring-cyan-500' },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('emerald');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('flowtastic-theme') || 'emerald';
    setTheme(savedTheme);
  }, []);

  const setTheme = (themeId) => {
    setCurrentTheme(themeId);
    if (themeId === 'emerald') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', themeId);
    }
    localStorage.setItem('flowtastic-theme', themeId);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-semibold transition-all shadow-sm"
        title="Change Website Color Palette"
        aria-label="Color Palette Selector"
      >
        <span 
          className="w-2.5 h-2.5 rounded-full shadow-sm" 
          style={{ backgroundColor: THEMES.find(t => t.id === currentTheme)?.color || '#10b981' }}
        ></span>
        <Palette className="w-3.5 h-3.5 text-slate-400" />
        <span className="hidden sm:inline">Theme</span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 mb-1">
              Select Color Theme
            </div>
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  currentTheme === t.id
                    ? 'bg-slate-800 text-white font-bold'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span 
                    className="w-3.5 h-3.5 rounded-full shadow-inner border border-white/20"
                    style={{ backgroundColor: t.color }}
                  ></span>
                  <span>{t.name}</span>
                </div>
                {currentTheme === t.id && (
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
