import React, { useState } from 'react';
import { 
  Wrench, Sparkles, Flame, ShowerHead, SearchCheck, 
  ShieldAlert, CheckCircle2, Clock, ShieldCheck, ChevronRight, 
  Phone, ArrowRight, AlertTriangle 
} from 'lucide-react';
import { SERVICES } from '../data/services';

export default function ServicesPage({ onOpenQuote }) {
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.id === activeTab);

  const activeServiceData = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

  return (
    <div className="pt-28 pb-16">
      {/* HEADER SECTION */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/70 px-4 py-1.5 rounded-full border border-cyan-800/40">
            Expert Craftsmanship • Modern Technology
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mt-4">
            Comprehensive Plumbing Solutions <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Tailored to Your Needs
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From emergency repairs and high-pressure drain hydro-jetting to tankless water heaters and non-invasive acoustic leak detection, our Morrisville mobile trucks are ready to solve any plumbing challenge.
          </p>

          {/* Quick Service Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All Services
            </button>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === s.id
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {s.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID & DEEP DIVE SECTION */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredServices.map((srv, idx) => (
            <div
              key={srv.id}
              id={srv.slug}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/40">
                      {srv.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {srv.turnaround}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {srv.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {srv.longDesc}
                  </p>

                  {/* Benefits Checklist */}
                  <div className="pt-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Scope of Work & Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {srv.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Action & Diagnostic Box */}
                <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5">
                  {/* Common Symptoms / Signs */}
                  <div>
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Common Signs You Need This:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {srv.symptoms.map((sym, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Warranty Bar */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Pricing Guidance:</span>
                      <span className="text-white font-bold">{srv.pricingEstimate}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Warranty Protection:</span>
                      <span className="text-cyan-400 font-semibold">{srv.warranty}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-2 space-y-2.5">
                    <button
                      onClick={onOpenQuote}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Get a Free Estimate for This Service</span>
                    </button>

                    <a
                      href="tel:+19142557684"
                      className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Call (914) 255-7684 for Quick Dispatch</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM SERVICE GUARANTEE */}
      <section className="py-12 bg-slate-900/60 border-t border-slate-800 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ShieldCheck className="w-10 h-10 text-cyan-400 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            100% Upfront Pricing Before Any Wrench Turns
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            We provide clear, written estimates upfront. You will never encounter unexpected fees, travel surcharges, or hidden hourly rate hikes.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="px-7 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
