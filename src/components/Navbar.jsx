import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Clock, Menu, X, ShieldAlert, Sparkles, MapPin } from 'lucide-react';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Service Area', path: '/service-area' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Urgent Emergency & Service Status Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-1.5 px-4 sm:px-6 lg:px-8 text-slate-300 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-400 hidden xs:inline">Live Dispatch:</span>
              <span className="text-slate-200">On-Call Techs Active in Morrisville & Triangle</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400 border-l border-slate-800 pl-4">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Mobile Fleet Servicing Morrisville • Cary • Raleigh • Durham • RTP</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 font-semibold text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>NC Licensed Plumbers</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-medium">Upfront Flat Rates</span>
            </div>

            <a
              href="tel:+19142557684"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>(914) 255-7684</span>
            </a>

            <ThemeSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Clean, Bright & Modern) */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md py-3' 
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-600 bg-cyan-50 border border-cyan-200/80 shadow-xs'
                        : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Actions & Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Call Now CTA Button */}
              <a
                href="tel:+19142557684"
                className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-300 hover:border-cyan-600 text-slate-800 hover:text-cyan-700 text-sm font-bold shadow-xs transition-all duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-600 group-hover:animate-ping"></div>
                <Phone className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span>Call: (914) 255-7684</span>
              </a>

              {/* Get a Free Estimate Secondary CTA */}
              <button
                onClick={onOpenQuote}
                className="relative inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-sm shadow-md shadow-cyan-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get a Free Estimate</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+19142557684"
                className="p-2.5 rounded-xl bg-cyan-600 text-white font-bold shadow-md shadow-cyan-600/25 sm:hidden"
                aria-label="Call Flowtastic"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-cyan-600" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-Out Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[96px] bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl p-6 transition-all duration-300 max-h-[calc(100vh-96px)] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive
                      ? 'text-cyan-600 bg-cyan-50 border border-cyan-200'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="my-3 border-t border-slate-200 pt-4 flex flex-col gap-3">
              <a
                href="tel:+19142557684"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 font-bold text-center"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                Call Now: (914) 255-7684
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-cyan-600 text-white font-extrabold text-center shadow-lg shadow-cyan-600/30"
              >
                <Sparkles className="w-4 h-4" />
                Get a Free Estimate
              </button>
            </div>

            <div className="text-center pt-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-800">Morrisville, NC Service Hub</span> • 24/7 Emergency Dispatch
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
