import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ShoppingCart, 
  GraduationCap, 
  Building, 
  DollarSign, 
  Activity, 
  Factory, 
  Briefcase, 
  Rocket, 
  Store, 
  Layers, 
  ArrowRight, 
  Check, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { INDUSTRIES } from '../../data/companyData';

export const IndustriesGrid = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0]);

  const industryIcons = {
    retail: ShoppingBag,
    ecommerce: ShoppingCart,
    education: GraduationCap,
    'real-estate': Building,
    finance: DollarSign,
    healthcare: Activity,
    manufacturing: Factory,
    'professional-services': Briefcase,
    startups: Rocket,
    smes: Store,
    enterprise: Layers
  };

  return (
    <section id="industries" className="py-28 bg-[#05070D] border-t border-white/10 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INDUSTRY DOMAIN EXPERTISE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Technology Across Industries
            </h2>
            <p className="text-base sm:text-lg text-zinc-300">
              Tailored software engineering, AI pipelines, and platform architectures built to match regulatory, commercial, and operational realities.
            </p>
          </div>

          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
          >
            <span>Explore All Sectors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Industry Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {INDUSTRIES.map((ind) => {
            const Icon = industryIcons[ind.id] || Layers;
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-28 ${
                  isSelected
                    ? 'bg-[#111624] border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'bg-[#0A0D14]/80 border-white/8 hover:bg-[#0F1422] hover:border-white/20'
                }`}
              >
                <div className={`p-2 rounded-lg w-fit ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-zinc-400'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-xs sm:text-sm font-bold tracking-tight ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                    {ind.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Highlight */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#090D18] border border-white/12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 uppercase font-semibold">
                  {selectedIndustry.name} SECTOR
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {selectedIndustry.tagline}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Engineered Capabilities for {selectedIndustry.name}
              </h3>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                  Domain Solutions:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedIndustry.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 p-3 rounded-xl bg-black/40 border border-white/5">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/50 border border-white/8 space-y-5">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                ENGAGEMENT ARCHITECTURE
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-zinc-400">Primary Services:</span>
                  <div className="flex gap-1.5">
                    {selectedIndustry.services.map((s, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 text-[10px] font-mono border border-cyan-800/30">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-zinc-400">Deployment SLA:</span>
                  <span className="text-zinc-200 font-mono">99.98% High Availability</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Security Standard:</span>
                  <span className="text-emerald-400 font-mono">ISO & Data Encryption</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs tracking-wide hover:opacity-90 transition-opacity"
              >
                <span>Consult On {selectedIndustry.name} Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
