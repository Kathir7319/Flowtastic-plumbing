import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, CheckCircle, ChevronRight, Star } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800/80 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="default" lightMode={true} />
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Flowtastic Plumbing is a premier mobile service-area business based in Morrisville, NC. We provide top-flight residential and commercial plumbing repairs with unmatched integrity, upfront pricing, and prompt response times.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-400">
                <Award className="w-3.5 h-3.5" />
                <span>Upfront Flat-Rate Pricing</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>NC Licensed & Insured</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold transition-all"
              >
                <span>Request Free Online Quote</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/service-area" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Plumbing Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Residential Plumbing Repair
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Drain Cleaning & Jetting
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Water Heater Installation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Leak Detection & Pipe Repair
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Fixture Upgrades
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors text-amber-400 font-medium">
                  24/7 Emergency Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a 
                  href="tel:+19142557684" 
                  className="group flex items-start gap-2.5 text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-white">+1 914-255-7684</div>
                    <div className="text-xs text-slate-400">Call or Text 24/7</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Morrisville, NC</div>
                  <div className="text-xs text-slate-400">Mobile Service-Area Fleet</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Mon – Fri: 8:00 AM – 6:00 PM</div>
                  <div className="text-xs text-emerald-400 font-semibold">24/7 Emergency Service Available</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Guaranteed Service Locations Bar */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold uppercase tracking-wider">Service Hubs:</span>
            <span className="text-slate-300">Morrisville (Hub) • Cary • Raleigh • Durham • Research Triangle Park (RTP)</span>
          </div>
          <Link to="/service-area" className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4">
            Check Your Zip Code →
          </Link>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Flowtastic Plumbing LLC. All rights reserved. North Carolina Licensed & Insured.
          </div>
          <div className="flex items-center gap-6">
            <span>Honest Upfront Pricing</span>
            <span>•</span>
            <span>100% Satisfaction Guarantee</span>
            <span>•</span>
            <span>Local Triangle Experts</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
