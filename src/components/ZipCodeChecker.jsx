import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Clock, Truck, AlertCircle, ArrowRight } from 'lucide-react';
import { VALID_ZIP_CODES } from '../data/serviceAreas';

export default function ZipCodeChecker({ onOpenQuote }) {
  const [zipInput, setZipInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (VALID_ZIP_CODES[cleanZip]) {
      setResult({
        covered: true,
        data: VALID_ZIP_CODES[cleanZip],
        zip: cleanZip
      });
    } else if (cleanZip.length === 5) {
      setResult({
        covered: false,
        zip: cleanZip
      });
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 text-xs font-bold mb-3">
          <Truck className="w-3.5 h-3.5" />
          <span>Mobile Workshop Direct to Your Driveway</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Check Service Availability in Your Area
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-6">
          Enter your 5-digit zip code to verify rapid dispatch coverage across Morrisville, Cary, Raleigh, Durham, and RTP.
        </p>

        {/* Input Form */}
        <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mb-6">
          <div className="relative flex-grow">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <input
              type="text"
              maxLength={5}
              placeholder="Enter Zip Code (e.g. 27560)"
              value={zipInput}
              onChange={(e) => {
                setZipInput(e.target.value);
                if (result) setResult(null);
              }}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Check Coverage</span>
          </button>
        </form>

        {/* Live Result State */}
        {result && (
          <div className="animate-in fade-in duration-200">
            {result.covered ? (
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Zip Code {result.zip}: Covered! ({result.data.city})</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full">
                        {result.data.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Average Dispatch Window: <strong className="text-cyan-400">{result.data.time}</strong></span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs shadow-md transition-all whitespace-nowrap"
                >
                  Schedule Dispatch
                </button>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-600/40 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Zip Code {result.zip}: Custom Service Perimeter
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      You are near our border. Call us directly to see if our mobile truck can accommodate your area today!
                    </div>
                  </div>
                </div>
                <a
                  href="tel:+19142557684"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all whitespace-nowrap"
                >
                  Call (914) 255-7684
                </a>
              </div>
            )}
          </div>
        )}

        {/* Quick popular zip tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-slate-400">
          <span className="text-slate-500">Popular hubs:</span>
          {['27560 (Morrisville)', '27519 (Cary)', '27617 (Raleigh)', '27709 (RTP)'].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                const code = tag.split(' ')[0];
                setZipInput(code);
                setResult({
                  covered: true,
                  data: VALID_ZIP_CODES[code],
                  zip: code
                });
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
