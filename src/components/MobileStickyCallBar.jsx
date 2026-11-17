import React from 'react';
import { Phone, Sparkles } from 'lucide-react';

export default function MobileStickyCallBar({ onOpenQuote }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 p-2.5 px-4 shadow-2xl flex items-center gap-3">
      {/* Tap to Call */}
      <a
        href="tel:+19142557684"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 font-extrabold text-xs shadow-md active:scale-95 transition-transform"
      >
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
        <Phone className="w-4 h-4 text-cyan-400" />
        <span className="truncate">Call (914) 255-7684</span>
      </a>

      {/* Free Estimate */}
      <button
        onClick={onOpenQuote}
        className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/30 active:scale-95 transition-transform"
      >
        <Sparkles className="w-4 h-4" />
        <span className="truncate">Free Estimate</span>
      </button>
    </div>
  );
}
