import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Shield, Sparkles, Clock, AlertTriangle, Phone } from 'lucide-react';

const ESTIMATOR_DATA = {
  issues: [
    {
      id: 'toilet-faucet',
      label: 'Toilet or Faucet Leak',
      category: 'Residential Plumbing Repair',
      baseRange: '$95 - $220',
      time: '1 - 2 Hours',
      includes: 'Complete diagnostic, cartridge/flapper replacement, seal testing, 1-yr warranty',
      urgencyBump: 0
    },
    {
      id: 'drain-clog',
      label: 'Clogged Drain or Slow Sink',
      category: 'Drain Cleaning & Hydro-Jetting',
      baseRange: '$149 - $290',
      time: '1 - 2 Hours',
      includes: 'Commercial electric snake clearing, hair/grease removal, flow verification',
      urgencyBump: 0
    },
    {
      id: 'water-heater',
      label: 'Water Heater Repair / No Hot Water',
      category: 'Water Heater Repair & Installation',
      baseRange: '$180 - $450',
      time: '2 - 3 Hours',
      includes: 'Diagnostic testing of elements/thermostats, burner cleaning, pressure relief check',
      urgencyBump: 0
    },
    {
      id: 'sewer-jetting',
      label: 'Main Sewer Backup / Root Intrusion',
      category: 'Drain Cleaning & Hydro-Jetting',
      baseRange: '$350 - $650',
      time: '2 - 4 Hours',
      includes: 'HD video optical camera inspection, 4,000 PSI hydro-jetting, root eradication',
      urgencyBump: 0
    },
    {
      id: 'slab-leak',
      label: 'Hidden Leak / High Water Bill',
      category: 'Leak Detection & Pipe Repair',
      baseRange: '$190 - $380',
      time: '2 - 3 Hours',
      includes: 'Acoustic microphone detection, thermal imaging scan, exact pinpoint location',
      urgencyBump: 0
    },
    {
      id: 'emergency-flood',
      label: '🚨 Burst Pipe / Active Flooding',
      category: 'Emergency Plumbing Disaster',
      baseRange: '$220 - $480',
      time: 'Immediate (~45 Min Arrival)',
      includes: 'Priority 24/7 truck dispatch, emergency supply shutoff, rapid stabilization',
      urgencyBump: 40
    }
  ],
  propertyTypes: [
    { id: 'single-family', label: 'Single Family Home', multiplier: 1.0 },
    { id: 'townhome', label: 'Townhouse / Condo', multiplier: 1.0 },
    { id: 'commercial', label: 'Commercial / RTP Office', multiplier: 1.25 }
  ],
  urgencyLevels: [
    { id: 'standard', label: 'Flexible / This Week', note: 'Best rates', extra: '$0' },
    { id: 'same-day', label: 'Same-Day Service', note: 'Priority scheduling', extra: '$0' },
    { id: 'emergency', label: 'Urgent 24/7 Emergency', note: 'Dispatched immediately', extra: 'Priority' }
  ]
};

export default function CostEstimator({ onBookService }) {
  const [selectedIssue, setSelectedIssue] = useState(ESTIMATOR_DATA.issues[0]);
  const [selectedProperty, setSelectedProperty] = useState(ESTIMATOR_DATA.propertyTypes[0]);
  const [selectedUrgency, setSelectedUrgency] = useState(ESTIMATOR_DATA.urgencyLevels[0]);

  return (
    <div className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Interactive Selectors */}
        <div className="w-full lg:w-7/12 space-y-6 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold mb-3">
              <Calculator className="w-3.5 h-3.5 text-cyan-600" />
              <span>Interactive Pricing Transparency</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Instant Diagnostic & Estimate Calculator
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Select your issue and property type to calculate upfront estimate ranges before any technician arrives.
            </p>
          </div>

          {/* Issue Selector Grid */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              1. What plumbing issue are you facing?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ESTIMATOR_DATA.issues.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedIssue(item)}
                  className={`text-left p-3.5 rounded-2xl border transition-all text-sm font-semibold flex items-center justify-between min-h-[56px] ${
                    selectedIssue.id === item.id
                      ? 'bg-cyan-50 border-cyan-500 text-cyan-900 shadow-sm'
                      : 'bg-slate-50/80 border-slate-200 text-slate-700 hover:border-cyan-300 hover:bg-white'
                  }`}
                >
                  <span className="truncate pr-2">{item.label}</span>
                  {selectedIssue.id === item.id && (
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              2. Property Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {ESTIMATOR_DATA.propertyTypes.map((prop) => (
                <button
                  key={prop.id}
                  onClick={() => setSelectedProperty(prop)}
                  className={`py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all ${
                    selectedProperty.id === prop.id
                      ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {prop.label}
                </button>
              ))}
            </div>
          </div>

          {/* Urgency Level */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              3. Service Speed / Urgency
            </label>
            <div className="grid grid-cols-3 gap-2">
              {ESTIMATOR_DATA.urgencyLevels.map((urg) => (
                <button
                  key={urg.id}
                  onClick={() => setSelectedUrgency(urg)}
                  className={`py-2.5 px-3 rounded-xl border text-center transition-all ${
                    selectedUrgency.id === urg.id
                      ? 'bg-cyan-50 border-cyan-500 text-cyan-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="text-xs font-bold">{urg.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{urg.note}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Calculated Transparent Breakdown Card */}
        <div className="w-full lg:w-5/12 bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Calculated Estimate
            </span>
            <span className="text-xs font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
              Upfront Pricing Guaranteed
            </span>
          </div>

          <div className="py-6 text-center">
            <div className="text-xs text-slate-400 mb-1">Estimated Diagnostic & Repair Range:</div>
            <div className="text-4xl sm:text-5xl font-black text-white">
              {selectedIssue.baseRange}
            </div>
            <div className="text-xs text-emerald-400 font-semibold mt-2 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> No unexpected charges without your approval
            </div>
          </div>

          {/* Summary Details */}
          <div className="space-y-3 py-4 border-y border-slate-800 text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">Selected Service:</span>
              <span className="font-semibold text-white">{selectedIssue.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Estimated Duration:</span>
              <span className="font-semibold text-white">{selectedIssue.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Selected Urgency:</span>
              <span className="font-semibold text-cyan-400">{selectedUrgency.label}</span>
            </div>
            <div className="pt-2">
              <span className="text-slate-400 block mb-1">What's Included:</span>
              <p className="text-slate-300 italic text-[11px] leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                {selectedIssue.includes}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 space-y-3">
            <button
              onClick={() => onBookService(selectedIssue.category)}
              className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
            >
              <span>Book with This Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+19142557684"
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Or Call for Immediate Dispatch: (914) 255-7684</span>
            </a>
          </div>

          <div className="mt-4 text-center text-[10px] text-slate-400">
            Final exact quote provided upon in-person inspection before any work starts.
          </div>
        </div>
      </div>
    </div>
  );
}
