import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Sparkles, Clock, ShieldCheck, DollarSign, MapPin, 
  ChevronRight, Wrench, Flame, ShowerHead, SearchCheck, 
  CheckCircle2, ArrowRight, Star, ThumbsUp, HelpCircle, Truck
} from 'lucide-react';
import RunningReviews from '../components/RunningReviews';
import CostEstimator from '../components/CostEstimator';
import ZipCodeChecker from '../components/ZipCodeChecker';
import { SERVICES } from '../data/services';
import { SERVICE_AREAS } from '../data/serviceAreas';

export default function HomePage({ onOpenQuote }) {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How fast can Flowtastic dispatch a plumber to my home in Morrisville or Cary?",
      a: "Because we operate as a dedicated mobile service-area business stationed in Morrisville, our average emergency response time is between 25 to 45 minutes across Morrisville, Cary, RTP, West Raleigh, and South Durham. For standard appointments, same-day and scheduled slots are readily available."
    },
    {
      q: "What does 'Honest, Upfront Pricing' mean for me?",
      a: "It means no hidden trip surcharges, no surprise hourly padding, and no mystery fees. Our licensed plumber inspects your issue in-person, explains the diagnostic findings clearly, and provides a flat-rate written quote for your approval before a single tool is lifted."
    },
    {
      q: "Do I need to visit an office or retail storefront?",
      a: "No! As a mobile service-area business, our fully equipped 'workshops on wheels' come straight to your driveway. Each truck carries commercial pipe fitting inventory, hydro-jetters, leak detection cameras, and replacement parts so most jobs are resolved in one single visit."
    },
    {
      q: "Do you offer warranties on plumbing repairs and installations?",
      a: "Yes! All Flowtastic workmanship is backed by our 100% Satisfaction Guarantee. Standard repairs carry a 1-year labor and parts warranty, and new tankless/tank water heater installations include up to 10-year manufacturer tank warranties plus our 3-year labor protection."
    },
    {
      q: "Are your plumbers licensed and insured in North Carolina?",
      a: "Absolutely. Flowtastic Plumbing operates with active North Carolina plumbing licenses and comprehensive multi-million-dollar general liability insurance. We adhere strictly to NC Uniform Plumbing Codes and OSHA safety regulations."
    }
  ];

  return (
    <div className="pt-24 pb-12">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        {/* Ambient Hydro Light Background */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-sky-500/10 to-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/4 -right-24 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Subtle Water Pipe / Grid Vector Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-lg shadow-cyan-950/50">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Morrisville & Triangle NC's Premier Plumbers</span>
                <span className="text-slate-500">•</span>
                <span className="text-amber-400 font-bold">★ 5.0 Rated</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Fast, Reliable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                  Plumbing Solutions
                </span> <br />
                in Morrisville & Beyond
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                From leaky pipes to emergency repairs, Flowtastic Plumbing delivers top-tier service right to your doorstep. Professional, licensed, and locally trusted throughout Morrisville, Cary, Raleigh, Durham, and RTP.
              </p>

              {/* Primary & Secondary CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                {/* Primary CTA: Call Now */}
                <a
                  href="tel:+19142557684"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-base shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group"
                >
                  <Phone className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
                  <span>Call Now: (914) 255-7684</span>
                </a>

                {/* Secondary CTA: Get a Free Estimate */}
                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 hover:border-cyan-400 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>Get a Free Estimate</span>
                </button>
              </div>

              {/* Guarantees List */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Upfront Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>24/7 Emergencies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Zero Hidden Fees</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card Column: Modern Interactive Dispatch Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                {/* Glow Backdrop */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-xl opacity-75"></div>

                <div className="relative rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-6 sm:p-7 shadow-2xl space-y-5">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-extrabold text-white text-sm">Mobile Service Hub</div>
                        <div className="text-[11px] text-slate-400">Stationed in Morrisville, NC</div>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      On-Call Now
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Emergency Dispatch Time</span>
                      <span className="text-xs font-bold text-cyan-300">~25 - 45 Minutes</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Service Perimeter</span>
                      <span className="text-xs font-bold text-white">Morrisville, Cary, RTP, Raleigh</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Diagnostic Fee Policy</span>
                      <span className="text-xs font-bold text-emerald-400">Credited Toward Repair</span>
                    </div>
                  </div>

                  {/* Direct Phone Highlight */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-950/80 to-slate-950 border border-cyan-500/40 text-center space-y-1">
                    <div className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                      Plumbing Emergency or Free Quote?
                    </div>
                    <a
                      href="tel:+19142557684"
                      className="block text-2xl font-black text-white hover:text-cyan-300 transition-colors"
                    >
                      +1 914-255-7684
                    </a>
                    <div className="text-[11px] text-slate-400">
                      Tap above for immediate dispatch priority
                    </div>
                  </div>

                  {/* Quick button */}
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Or Request Online Callback</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUE PROPOSITIONS SECTION (from document copy) */}
      <section className="py-20 relative bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-3.5 py-1 rounded-full border border-cyan-800/40">
              Why Flowtastic Stands Apart
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              The Flowtastic Difference
            </h2>
            <p className="mt-3 text-base text-slate-400">
              We engineered our plumbing service from the ground up to eliminate the friction, uncertainty, and delays common with traditional contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value Prop 1 */}
            <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Prompt Emergency Response
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Available for emergencies when plumbing disasters strike. Stationed mobile trucks mean we arrive fast to stop water damage before it ruins your home.
              </p>
            </div>

            {/* Value Prop 2 */}
            <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Expert & Licensed Technicians
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Highly experienced plumbers ensuring jobs are done right the first time. We adhere to strict NC Uniform Plumbing Codes and modern trade standards.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Honest, Upfront Pricing
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                No hidden fees—just upfront, transparent pricing before work begins. You approve the exact line item estimate before any wrench is turned.
              </p>
            </div>

            {/* Value Prop 4 */}
            <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Locally Owned & Operated
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Proudly serving homeowners and businesses throughout the Morrisville community. We live, shop, and raise our families right here in the Triangle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SERVICES HIGHLIGHT */}
      <section className="py-20 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
                Precision Craftsmanship
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
                Comprehensive Plumbing Solutions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
                Tailored solutions for residential properties, townhomes, and commercial offices across Morrisville and the Triangle.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 group"
            >
              <span>Explore All 6 Service Specializations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 5).map((srv) => (
              <div
                key={srv.id}
                className="p-7 rounded-3xl bg-slate-950/70 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                      {srv.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{srv.turnaround}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {srv.shortDesc}
                  </p>

                  {/* Top Benefits snippet */}
                  <div className="space-y-2 mb-6">
                    {srv.benefits.slice(0, 3).map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">
                    {srv.pricingEstimate.split('|')[0]}
                  </span>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:underline"
                  >
                    <span>Book Service</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* 6th Card: 24/7 Emergency Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-cyan-950/70 via-slate-900 to-slate-950 border border-cyan-500/50 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <span className="text-[11px] font-bold text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-800/40 inline-block mb-4">
                  🚨 24/7 Priority Emergency
                </span>

                <h3 className="text-xl font-bold text-white mb-2">
                  Plumbing Disaster? We're On Call Right Now.
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Burst pipes, water heater leaks, or sewer backups don't wait. Call our Morrisville dispatch line for immediate priority dispatch under 45 minutes.
                </p>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center space-y-1 mb-6">
                  <div className="text-[11px] text-slate-400 font-medium">Emergency Line</div>
                  <a
                    href="tel:+19142557684"
                    className="text-xl font-black text-cyan-400 hover:text-cyan-300 transition-colors block"
                  >
                    (914) 255-7684
                  </a>
                </div>
              </div>

              <a
                href="tel:+19142557684"
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs text-center shadow-lg shadow-cyan-500/25 transition-all"
              >
                Call Emergency Line Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RUNNING GOOGLE REVIEWS SECTION (Required by user prompt) */}
      <RunningReviews onOpenQuote={onOpenQuote} />

      {/* INTERACTIVE INSTANT COST ESTIMATOR CALCULATOR */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostEstimator onBookService={(srv) => onOpenQuote()} />
        </div>
      </section>

      {/* INTERACTIVE ZIP CODE SERVICE AREA CHECKER */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ZipCodeChecker onOpenQuote={onOpenQuote} />
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
              Common Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Clear answers regarding our mobile services, pricing integrity, and warranties.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-950/80 border border-slate-800/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-base hover:text-cyan-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`text-cyan-400 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-slate-400">
              Have a question not listed here? Call our friendly team at{' '}
              <a href="tel:+19142557684" className="text-cyan-400 font-bold hover:underline">
                (914) 255-7684
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FINAL BOTTOM CALL TO ACTION BANNER */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 border border-cyan-500/40 p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-800/50">
              Ready for Flowtastic Service?
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              Don't Let a Minor Leak Turn Into a Costly Flood
            </h2>

            <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Reach out to our professional team right away for rapid response, reliable plumbing advice, and honest upfront pricing.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19142557684"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-extrabold text-base shadow-xl shadow-cyan-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: (914) 255-7684</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-950/80 hover:bg-slate-900 border border-slate-700 text-white font-bold text-base transition-all"
              >
                Get a Free Estimate
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
