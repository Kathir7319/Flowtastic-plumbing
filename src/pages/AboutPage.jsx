import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, HeartHandshake, Award, Clock, Truck, 
  CheckCircle2, Sparkles, Phone, ArrowRight, MapPin 
} from 'lucide-react';

export default function AboutPage({ onOpenQuote }) {
  const standards = [
    {
      title: "Clean Worksite Guarantee",
      desc: "Our technicians wear fresh disposable shoe covers before stepping inside your home and protect your floors with heavy neoprene drop cloths. We leave your bathroom, kitchen, or crawlspace spotless.",
      icon: Sparkles
    },
    {
      title: "No-Surprise Upfront Pricing",
      desc: "We diagnose the issue thoroughly, explain every viable solution with its flat-rate cost, and obtain your written approval before beginning any work. No hourly padding, ever.",
      icon: ShieldCheck
    },
    {
      title: "Fully Stocked Mobile Fleet",
      desc: "Rather than running back and forth to supply houses on your dime, our mobile service trucks are stocked with over 1,500 premium valves, fittings, and replacement components for instant completion.",
      icon: Truck
    },
    {
      title: "Licensed Master Craftsmanship",
      desc: "All technicians are licensed, vetted, background-checked, and regularly trained on the latest NC Uniform Plumbing Codes and high-efficiency water heater systems.",
      icon: Award
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-slate-50">
      {/* HEADER SECTION */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-200 text-cyan-800 text-xs font-bold mb-4 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-cyan-600" />
            <span>Morrisville, NC • Service-Area Business</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Your Trusted Neighborhood <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700">
              Plumbing Experts
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Delivering high-integrity plumbing repairs, rapid emergency dispatch, and precision craftsmanship directly to your doorstep across Morrisville, Cary, Raleigh, Durham, and RTP.
          </p>
        </div>
      </section>

      {/* CORE MISSION STORY SECTION (Document Content Copy) */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                Our Story & Mission
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Plumbing Done With Integrity, Respect, and Transparency
              </h2>

              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  At <strong className="text-slate-900">Flowtastic Plumbing</strong>, we believe that clean water, working drains, and functional plumbing form the backbone of a comfortable home. Based out of <strong className="text-cyan-700">Morrisville, NC</strong>, we operate as a dedicated service-area business, bringing top-flight plumbing solutions directly to your residential or commercial property.
                </p>

                <p>
                  Our mission is simple: to provide high-quality plumbing repairs with unmatched integrity and professionalism. We understand how disruptive a plumbing breakdown can be, which is why we focus on prompt response times, accurate diagnostics, and long-lasting fixes.
                </p>

                <p>
                  When you call Flowtastic Plumbing, you aren't just hiring a contractor—you're partnering with local professionals who treat your property with the utmost respect.
                </p>
              </div>

              {/* Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Licensed NC Plumbing Contractor</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero Retail Markups</span>
                </div>
              </div>
            </div>

            {/* Right Feature Card: The Mobile Service Advantage */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl space-y-6 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  The Mobile Fleet Advantage
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Traditional plumbing shops maintain expensive retail showrooms and pass those commercial overhead costs to you. We do things differently.
                </p>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>No storefront visit needed:</strong> Our fully equipped mobile workshops roll directly to your driveway.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Faster diagnosis:</strong> Advanced acoustic listening gear and optical sewer cameras on every truck.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Single-visit resolution:</strong> We stock standard valves, fittings, elements, and pipes on board.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all"
                  >
                    Schedule Service Today
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR 4 SERVICE PILLARS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Our Core Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              How We Protect You & Your Home
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Every Flowtastic technician follows a rigorous 4-pillar quality standard on every single residential and commercial service call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {standards.map((s, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 group shadow-xs hover:shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CONTACT BANNER */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Need Expert Plumbing Help in Morrisville or the Triangle?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Give us a call today or request an estimate online. Our local team is ready to serve you with honesty and speed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+19142557684"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-sm shadow-md shadow-cyan-600/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call (914) 255-7684</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold text-sm transition-all"
            >
              Get a Free Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
