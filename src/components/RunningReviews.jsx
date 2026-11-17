import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquarePlus, Sparkles, MapPin } from 'lucide-react';
import { REVIEWS, GOOGLE_REVIEWS_META } from '../data/reviews';

export default function RunningReviews({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Emergency', 'Water Heater', 'Drain', 'Leak Detection'];

  const filteredReviews = activeCategory === 'All' 
    ? REVIEWS 
    : REVIEWS.filter(r => r.service.toLowerCase().includes(activeCategory.toLowerCase()));

  // Double the list for infinite seamless marquee loop
  const marqueeReviews = [...filteredReviews, ...filteredReviews];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 overflow-hidden border-y border-slate-800/80">
      {/* Background hydro ambient light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            {/* Google Trust Header */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-4">
              {/* Google G Icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span className="text-xs font-semibold text-slate-200">Google Customer Reviews</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-400">100% 5-Star Rated</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real Morrisville & Triangle Neighbors, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Unfiltered 5-Star Experiences
              </span>
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-2xl">
              Don't just take our word for it. Here is what your local Triangle homeowners in Morrisville, Cary, Raleigh, and Durham say about our fast dispatch and transparent pricing.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex-shrink-0 flex items-center gap-4 bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-4 shadow-lg shadow-cyan-950/40">
            <div className="text-center">
              <div className="text-4xl font-black text-white">5.0</div>
              <div className="flex items-center justify-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-slate-800"></div>
            <div className="text-xs text-slate-300">
              <div className="font-bold text-white text-sm">148+ Verified Reviews</div>
              <div className="text-slate-400">Google Business Profile</div>
              <div className="text-cyan-400 flex items-center gap-1 font-medium mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Morrisville, NC Service Hub
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          <span className="text-xs font-medium text-slate-400 mr-2">Filter reviews:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/50'
              }`}
            >
              {cat === 'All' ? '🌟 All Stories' : cat}
            </button>
          ))}
          <span className="text-[11px] text-slate-500 ml-auto hidden md:inline-flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400"></span>
            Hover any card to pause stream
          </span>
        </div>
      </div>

      {/* Marquee Track Container with Fade Edges */}
      <div className="relative w-full overflow-hidden marquee-container py-3">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        {/* Running Row 1 */}
        <div className="flex w-max marquee-track animate-marquee gap-5 will-change-transform">
          {marqueeReviews.map((rev, idx) => (
            <div
              key={`row1-${rev.id}-${idx}`}
              className="w-[340px] sm:w-[410px] flex-shrink-0 bg-slate-900/80 hover:bg-slate-900 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-cyan-950/50 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Header: User, Location & Stars */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src={rev.avatar} 
                      alt={rev.author} 
                      className="w-11 h-11 rounded-full object-cover border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-white text-sm flex items-center gap-1.5">
                        {rev.author}
                        <ShieldCheck className="w-4 h-4 text-emerald-400" title="Verified Customer" />
                      </div>
                      <div className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span className="truncate">{rev.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Google Brand G */}
                  <div className="p-1 rounded-full bg-slate-800/80 border border-slate-700/60" title="Google Review">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                  </div>
                </div>

                {/* Stars and Service Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                    {rev.service}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-4 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Timestamp & Verified Tag */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                <span>{rev.date}</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Local Homeowner
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Callout Underneath */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900 to-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Experience the Flowtastic standard yourself</div>
              <div className="text-xs text-slate-400">No dispatch fees until we inspect and provide an upfront quote before any wrench turns.</div>
            </div>
          </div>
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all"
          >
            Get a Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
