import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  ShieldCheck, AlertTriangle, Sparkles, MessageSquare 
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequested: 'Repair',
    urgency: 'Standard',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="pt-28 pb-16">
      {/* HEADER SECTION */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/70 px-4 py-1.5 rounded-full border border-cyan-800/40">
            Rapid Response • Morrisville Service Base
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mt-4">
            Get in Touch with <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Flowtastic Plumbing Today
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Don't let a minor leak turn into a costly flood. Reach out to our professional team right away for rapid response and reliable plumbing advice.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT CONTENT: CONTACT DETAILS + FORM */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              {/* Emergency Hotline Box */}
              <div className="p-7 rounded-3xl bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-500/50 shadow-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/60 text-cyan-300 text-xs font-bold border border-cyan-700/50">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  <span>Direct Dispatch Hotline</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">Need Immediate Service?</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Call our master plumber on call for instant advice or dispatch.
                  </p>
                </div>

                <a
                  href="tel:+19142557684"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-950 border border-cyan-500/40 hover:border-cyan-400 text-white transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-cyan-300 group-hover:text-cyan-200">
                      +1 914-255-7684
                    </div>
                    <div className="text-[11px] text-slate-400">Tap to call directly from phone</div>
                  </div>
                </a>
              </div>

              {/* Service Base & Hours of Operation */}
              <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Direct Contact Information
                </h3>

                <div className="space-y-4 text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5 text-slate-300">
                    <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Phone Number</div>
                      <a href="tel:+19142557684" className="font-bold text-white hover:text-cyan-400 transition-colors">
                        +1 914-255-7684
                      </a>
                    </div>
                  </div>

                  {/* Service Base */}
                  <div className="flex items-start gap-3.5 text-slate-300">
                    <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Service Base</div>
                      <div className="font-bold text-white">Morrisville, NC</div>
                      <div className="text-xs text-slate-400">Dedicated Mobile Service-Area Business (No Storefront Visit Required)</div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5 text-slate-300">
                    <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Hours of Operation</div>
                      <div className="font-bold text-white">Monday – Friday: 8:00 AM – 6:00 PM</div>
                      <div className="text-xs font-semibold text-emerald-400 mt-0.5">
                        🚨 Emergency Services Available 24/7
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>North Carolina Licensed & Insured Contractor</span>
                </div>
              </div>
            </div>

            {/* Right Column: Suggested Online Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Message Received!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. A Flowtastic plumbing specialist will contact you shortly at <strong className="text-cyan-400">{formData.phone}</strong>.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: '',
                            phone: '',
                            email: '',
                            serviceRequested: 'Repair',
                            urgency: 'Standard',
                            message: '',
                          });
                        }}
                        className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                        Online Contact & Quote Form
                      </span>
                      <h3 className="text-2xl font-black text-white mt-1">
                        Send Us a Message
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Fill out the details below and we will get back to you promptly with answers and honest pricing.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      {/* Phone & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Service Requested Dropdown (From requirements: Repair, Drain Cleaning, Water Heater, Other) */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Service Requested *
                        </label>
                        <select
                          value={formData.serviceRequested}
                          onChange={(e) => setFormData({ ...formData, serviceRequested: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          <option value="Repair">Repair (Toilet, Faucet, Pipe Leak, Sump Pump)</option>
                          <option value="Drain Cleaning">Drain Cleaning & Hydro-Jetting</option>
                          <option value="Water Heater">Water Heater Repair or Replacement</option>
                          <option value="Leak Detection">Leak Detection & Diagnostic</option>
                          <option value="Fixture Upgrades">Fixture Upgrades & Modernization</option>
                          <option value="Other">Other / Commercial Plumbing Inquiry</option>
                        </select>
                      </div>

                      {/* Message / Issue Description */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Message / Issue Description *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Please describe the plumbing issue, where it's located in the house, or questions you have..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                        ></textarea>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                      >
                        {submitting ? (
                          <span>Sending Request...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message & Get Quote</span>
                          </>
                        )}
                      </button>

                      <div className="text-center text-[11px] text-slate-500 pt-1">
                        We respect your privacy. Your information is never sold or shared.
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
