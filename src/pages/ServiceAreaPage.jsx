import React from 'react';
import { 
  MapPin, Clock, Truck, ShieldCheck, CheckCircle2, 
  Phone, Sparkles, Navigation, ArrowRight 
} from 'lucide-react';
import ZipCodeChecker from '../components/ZipCodeChecker';
import { SERVICE_AREAS } from '../data/serviceAreas';

export default function ServiceAreaPage({ onOpenQuote }) {
  return (
    <div className="pt-28 pb-16 bg-slate-50">
      {/* HEADER SECTION */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest bg-cyan-50 px-4 py-1.5 rounded-full border border-cyan-200 shadow-xs">
            Dedicated Mobile Fleet • Direct to Driveway
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mt-4">
            Proudly Serving Morrisville and <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700">
              Surrounding Communities
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Because we operate as a mobile service-area business, we do not require you to visit a retail storefront. Instead, our fully-equipped service trucks bring the solutions straight to your driveway.
          </p>
        </div>
      </section>

      {/* INTERACTIVE ZIP CODE CHECKER WIDGET */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ZipCodeChecker onOpenQuote={onOpenQuote} />
        </div>
      </section>

      {/* CORE HUBS BREAKDOWN */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Primary Regional Service Hubs
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our mobile plumbers patrol these key corridors daily, ensuring immediate response when plumbing troubles arise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.id}
                className={`p-7 rounded-3xl bg-slate-50 border transition-all duration-300 flex flex-col justify-between h-full shadow-xs hover:shadow-xl hover:-translate-y-1.5 ${
                  area.id === 'morrisville'
                    ? 'border-cyan-500 bg-white ring-2 ring-cyan-500/20 shadow-md'
                    : 'border-slate-200 hover:border-cyan-400 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      area.id === 'morrisville'
                        ? 'bg-cyan-50 text-cyan-800 border-cyan-200'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}>
                      {area.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {area.avgResponse}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                    {area.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Neighborhoods list */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Key Neighborhoods Served:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {area.neighborhoods.map((n, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-200">
                    {area.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-cyan-600 hover:text-white border border-slate-300 hover:border-cyan-600 text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>Request Service in {area.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Additional Info Card */}
            <div className="p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between h-full shadow-xl">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-3">
                  Have a Property Nearby?
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Custom Travel Coverage
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  If your community or neighborhood is situated just outside these core zones in Wake or Durham counties, we frequently service nearby areas upon request!
                </p>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Apex & Holly Springs (Select Calls)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>RDU Airport Tech Center</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Carpenter & Green Level Subdivisions</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="tel:+19142557684"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/25"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Check: (914) 255-7684</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MOBILE SERVICE IS BETTER */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                The Service-Area Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                No Retail Storefront. <br />
                Just Rapid Trucks Direct to Your Driveway.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                When you have water gushing from a pipe or a main sewer backup, driving to a showroom does you no good. Flowtastic invests in heavy-duty commercial service vehicles equipped with advanced hydro-jetters, acoustic listening gear, pipe threading machines, and factory replacement parts.
              </p>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero travel surcharges:</strong> Within our core zones, you pay for diagnostics and repairs—not our gas.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fully licensed in North Carolina:</strong> Compliance with all Wake and Durham county municipal building codes.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Available 24/7 for urgent calls:</strong> Dedicated on-call technicians ready for after-hours bursts and leaks.</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-6 text-center shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100 mx-auto flex items-center justify-center">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Book Mobile Service Now
              </h3>
              <p className="text-sm text-slate-600">
                Our Morrisville dispatch truck is already in your area. Contact us now to reserve your arrival window.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+19142557684"
                  className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (914) 255-7684</span>
                </a>
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold text-xs"
                >
                  Get Free Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
