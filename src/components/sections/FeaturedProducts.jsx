import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageSquare, DollarSign, Users, Sparkles, Play, Pause, Volume2, ShieldCheck, Zap, Smartphone } from 'lucide-react';
import { PRODUCTS } from '../../data/companyData';

export const FeaturedProducts = () => {
  // XenoCRM Interactive Mockup State
  const [crmActiveTab, setCrmActiveTab] = useState('crm');
  // Xenotune Interactive Mockup State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioMode, setAudioMode] = useState('Deep Focus');

  return (
    <section className="py-28 bg-[#0A0A0D] border-y border-white/10 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            FLAGSHIP SOFTWARE PLATFORMS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            BUILT BY XENOTRIX
          </h2>
          <p className="text-base text-zinc-400">
            We don't just engineer for clients; we build and operate commercial SaaS and mobile platforms designed for high real-world utility.
          </p>
        </div>

        {/* 3 Product Cards Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className={`p-6 rounded-2xl bg-[#111116] border transition-all duration-300 space-y-5 flex flex-col justify-between group ${
                prod.isUpcoming
                  ? 'border-amber-500/40 hover:border-amber-400 shadow-xl shadow-amber-500/5'
                  : 'border-white/10 hover:border-cyan-500/40'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {prod.name}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      prod.isUpcoming
                        ? 'bg-amber-950/80 text-amber-300 border-amber-800/40 animate-pulse'
                        : 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40'
                    }`}
                  >
                    {prod.statusLabel || prod.badge}
                  </span>
                </div>

                <p className="text-xs font-semibold text-cyan-200">
                  {prod.tagline}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {prod.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to={prod.ctaLink}
                  className={`inline-flex items-center gap-2 text-xs font-semibold transition-colors ${
                    prod.isUpcoming ? 'text-amber-300 group-hover:text-amber-200' : 'text-white group-hover:text-cyan-400'
                  }`}
                >
                  <span>{prod.isUpcoming ? 'Discover XenoBiz →' : `Explore ${prod.name} →`}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Product 1 Showcase: XenoCRM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>BUSINESS OPERATING SYSTEM</span>
            </div>

            <h3 className="font-display font-extrabold text-4xl text-white tracking-tight">
              XenoCRM
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              The all-in-one business operating system for modern SMBs. Unify customer management, sales pipelines, WhatsApp automation, automated invoicing, inventory, and AI revenue scoring.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                "CRM & Sales Pipelines",
                "WhatsApp API Inbox",
                "Automated Billing Engine",
                "Inventory & Fulfilment",
                "AI Revenue Forecasting",
                "Real-Time Audit Logs"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/products/xenocrm"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/10"
              >
                <span>Explore XenoCRM</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#111116] border border-white/10 p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-zinc-400 ml-2">xenocrm-app.internal // OS_V4.2</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px]">LIVE DEMO</span>
                </div>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 text-xs">
                {[
                  { id: 'crm', label: 'Sales Pipeline', icon: Users },
                  { id: 'whatsapp', label: 'WhatsApp Inbox', icon: MessageSquare },
                  { id: 'billing', label: 'Automated Billing', icon: DollarSign }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setCrmActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                        crmActiveTab === tab.id
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-white/[0.03] text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/5 min-h-[220px]">
                {crmActiveTab === 'crm' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-zinc-400 pb-2 border-b border-white/5">
                      <span>LEAD / CLIENT</span>
                      <span>PIPELINE STAGE</span>
                      <span>ESTIMATED VALUE</span>
                    </div>
                    {[
                      { client: "AeroDynamics Inc", stage: "Proposal Sent", val: "$45,000", status: "bg-cyan-500/20 text-cyan-300" },
                      { client: "Nexus Health Systems", stage: "Discovery Call", val: "$28,000", status: "bg-violet-500/20 text-violet-300" },
                      { client: "Vanguard Logistics", stage: "Closed Won", val: "$82,000", status: "bg-emerald-500/20 text-emerald-300" }
                    ].map((row, rIdx) => (
                      <div key={rIdx} className="flex items-center justify-between py-1.5 text-zinc-300 border-b border-white/[0.03]">
                        <span className="font-semibold">{row.client}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] ${row.status}`}>{row.stage}</span>
                        <span className="text-white">{row.val}</span>
                      </div>
                    ))}
                  </div>
                )}

                {crmActiveTab === 'whatsapp' && (
                  <div className="space-y-2.5 font-sans text-xs">
                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                        WA
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">Client Inquiry #9402</span>
                          <span className="text-[10px] text-zinc-500">14:22 PM</span>
                        </div>
                        <p className="text-zinc-300 text-xs">"Can we schedule an automated dispatch webhook for order #9812?"</p>
                        <div className="text-[10px] text-cyan-400 font-mono pt-1">
                          [AI Agent Auto-Responded: Booking Confirmed]
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {crmActiveTab === 'billing' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded bg-zinc-900 border border-white/5">
                        <div className="text-[10px] text-zinc-500">MONTHLY RECURRING</div>
                        <div className="text-sm font-bold text-emerald-400">$34,800</div>
                      </div>
                      <div className="p-2 rounded bg-zinc-900 border border-white/5">
                        <div className="text-[10px] text-zinc-500">AUTO-INVOICED</div>
                        <div className="text-sm font-bold text-cyan-400">142 Invoices</div>
                      </div>
                      <div className="p-2 rounded bg-zinc-900 border border-white/5">
                        <div className="text-[10px] text-zinc-500">LATENCY</div>
                        <div className="text-sm font-bold text-violet-400">0.42s</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product 2 Showcase: Xenotune */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-12 border-t border-white/10">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-2xl bg-[#111116] border border-white/10 p-5 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-violet-400">
                  <Zap className="w-4 h-4" />
                  <span>XENOTUNE // NEURAL ACOUSTIC ENGINE</span>
                </div>
                <span className="text-[10px] text-zinc-400">DSP LATENCY: 3ms</span>
              </div>

              <div className="flex items-center justify-between gap-2">
                {['Deep Focus', 'Circadian Shift', 'Sleep Stream'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setAudioMode(mode)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono text-center transition-colors ${
                      audioMode === mode
                        ? 'bg-violet-600/30 text-violet-200 border border-violet-500/50'
                        : 'bg-white/[0.03] text-zinc-400 hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              <div className="h-28 rounded-xl bg-black/60 border border-white/5 p-4 flex items-center justify-center relative overflow-hidden">
                <div className="flex items-end justify-center gap-1.5 w-full h-full">
                  {[40, 65, 30, 85, 95, 50, 75, 90, 45, 60, 80, 100, 70, 55, 35, 80, 90, 45].map((height, i) => (
                    <div
                      key={i}
                      style={{ height: isPlayingAudio ? `${height}%` : '20%' }}
                      className="w-2 rounded-full bg-gradient-to-t from-violet-600 to-cyan-400 transition-all duration-300"
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 font-mono text-xs">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
                >
                  {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlayingAudio ? 'PAUSE SOUNDSCAPE' : 'GENERATE AUDIO'}</span>
                </button>

                <div className="flex items-center gap-2 text-zinc-400">
                  <Volume2 className="w-4 h-4 text-cyan-400" />
                  <span>Spatial Acoustics 3D</span>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-950/80 border border-violet-800/40 text-xs font-mono text-violet-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI ACOUSTIC PLATFORM</span>
            </div>

            <h3 className="font-display font-extrabold text-4xl text-white tracking-tight">
              Xenotune
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              AI-powered ambient soundscape platform engineered for deep focus, sleep, and circadian rhythm synchronization. Uses procedural audio acoustic synthesis to generate infinite non-repeating streams.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                "Neural Sound Engine",
                "Circadian Sync",
                "Infinite Audio Stream",
                "Binaural Frequencies",
                "WebAudio WASM",
                "Zero Buffer Latency"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/products/xenotune"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-violet-300 transition-colors shadow-lg shadow-violet-500/10"
              >
                <span>Explore Xenotune</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Product 3 Dedicated Preview: XenoBiz (COMING SOON FROM XENOTRIX) */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#111116] border border-amber-500/40 space-y-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-950 text-amber-300 text-xs font-mono border border-amber-800/40">
                <Smartphone className="w-3.5 h-3.5" />
                <span>COMING SOON FROM XENOTRIX // IN DEVELOPMENT</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
                XenoBiz — Business Management + CRM + WhatsApp
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                A mobile-first business operating system for small businesses, shops, wholesalers, and local service teams to manage billing, inventory, payments, customer CRM, and WhatsApp communication from one place.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/products/xenobiz"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/20"
              >
                <span>Discover XenoBiz</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>01 RUN: Billing, Stock & Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>02 MANAGE: Customer CRM & Follow-ups</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>03 GROW: WhatsApp Automation</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
