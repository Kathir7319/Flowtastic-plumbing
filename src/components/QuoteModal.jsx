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
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top color bar */}
        <div className="h-1.5 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Success Screen */
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Estimate Request Received
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
              You're in Good Hands, {formData.fullName.split(' ')[0] || 'Neighbor'}!
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto mb-6">
              Our Morrisville dispatch coordinator has received your plumbing request for <strong className="text-cyan-700">{formData.serviceRequested}</strong>. A licensed technician will contact you shortly at <strong className="text-slate-900">{formData.phone}</strong> with transparent pricing.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-left text-slate-600 space-y-2 mb-8">
              <div className="flex justify-between">
                <span>Dispatch Base:</span>
                <span className="text-slate-900 font-medium">Morrisville, NC Service Hub</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Callback:</span>
                <span className="text-emerald-700 font-bold">Within 15 Minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Emergency Direct Line:</span>
                <a href="tel:+19142557684" className="text-cyan-700 font-bold hover:underline">+1 914-255-7684</a>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-md shadow-cyan-600/25 transition-all"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          /* Main Interactive Quote Form */
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                <span>Zero Obligation • 100% Upfront Pricing</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Get a Free Estimate
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tell us what you're experiencing and we'll calculate transparent diagnostic and repair pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Miller"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(914) 255-7684"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Email & Zip Code */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    maxLength={5}
                    placeholder="27560"
                    value={formData.addressZip}
                    onChange={(e) => setFormData({ ...formData, addressZip: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Service Requested Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Service Requested *
                </label>
                <select
                  value={formData.serviceRequested}
                  onChange={(e) => setFormData({ ...formData, serviceRequested: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-500 focus:bg-white transition-colors"
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
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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
                          ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Issue Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message / Issue Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe what's happening (e.g. water heater is leaking from bottom, toilet won't stop running, drain is backing up)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 focus:bg-white transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-sm shadow-md shadow-cyan-600/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
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

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> No Hidden Fees
                </span>
                <span>•</span>
                <span>Morrisville, NC Dispatch Hub</span>
                <span>•</span>
                <a href="tel:+19142557684" className="text-cyan-700 hover:underline">Or Call (914) 255-7684</a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
