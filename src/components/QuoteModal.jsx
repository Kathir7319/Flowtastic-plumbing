import React, { useState } from 'react';
import { X, Phone, Mail, Calendar, Clock, CheckCircle2, AlertCircle, Sparkles, Send, ShieldCheck } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequested: initialService || 'Residential Plumbing Repair',
    urgency: 'Standard (Next 24-48 Hours)',
    message: '',
    addressZip: '27560',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate swift dispatch / quote processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Success Screen */
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
              Estimate Request Received
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
              You're in Good Hands, {formData.fullName.split(' ')[0] || 'Neighbor'}!
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto mb-6">
              Our Morrisville dispatch coordinator has received your plumbing request for <strong className="text-cyan-400">{formData.serviceRequested}</strong>. A licensed technician will contact you shortly at <strong className="text-white">{formData.phone}</strong> with transparent pricing.
            </p>

            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 text-xs text-left text-slate-400 space-y-2 mb-8">
              <div className="flex justify-between">
                <span>Dispatch Base:</span>
                <span className="text-white font-medium">Morrisville, NC Service Hub</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Callback:</span>
                <span className="text-emerald-400 font-bold">Within 15 Minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Emergency Direct Line:</span>
                <a href="tel:+19142557684" className="text-cyan-400 font-bold hover:underline">+1 914-255-7684</a>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-sky-500 transition-all"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          /* Main Interactive Quote Form */
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Obligation • 100% Upfront Pricing</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Get a Free Estimate
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Tell us what you're experiencing and we'll calculate transparent diagnostic and repair pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Miller"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(914) 255-7684"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Email & Zip Code */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    maxLength={5}
                    placeholder="27560"
                    value={formData.addressZip}
                    onChange={(e) => setFormData({ ...formData, addressZip: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Service Requested Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Service Requested *
                </label>
                <select
                  value={formData.serviceRequested}
                  onChange={(e) => setFormData({ ...formData, serviceRequested: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="Residential Plumbing Repair">Residential Plumbing Repair (Toilets, Faucets, Lines)</option>
                  <option value="Drain Cleaning & Hydro-Jetting">Drain Cleaning & Hydro-Jetting</option>
                  <option value="Water Heater Repair & Installation">Water Heater Repair & Installation</option>
                  <option value="Leak Detection & Pipe Repair">Leak Detection & Pipe Repair</option>
                  <option value="Fixture Upgrades & Installations">Fixture Upgrades & Installations</option>
                  <option value="Emergency Plumbing Disaster">Emergency Plumbing Disaster (Immediate)</option>
                  <option value="Commercial Plumbing / Other">Commercial Plumbing / Other</option>
                </select>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Urgency Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Standard (1-2 Days)', val: 'Standard (Next 24-48 Hours)' },
                    { label: 'Today (Same Day)', val: 'Same-Day Service' },
                    { label: '🚨 Emergency (ASAP)', val: 'Urgent Emergency Dispatch' },
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setFormData({ ...formData, urgency: item.val })}
                      className={`px-2 py-2 rounded-xl text-xs font-bold transition-all border ${
                        formData.urgency === item.val
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Issue Description */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Message / Issue Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe what's happening (e.g. water heater is leaking from bottom, toilet won't stop running, drain is backing up)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {submitting ? (
                  <span>Processing Estimate...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit for Immediate Free Estimate</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> No Hidden Fees
                </span>
                <span>•</span>
                <span>Morrisville, NC Dispatch Hub</span>
                <span>•</span>
                <a href="tel:+19142557684" className="text-cyan-400 hover:underline">Or Call (914) 255-7684</a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
