import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Cpu, 
  Cloud, 
  Terminal,
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { TECH_ECOSYSTEM } from '../../data/companyData';

export const TechEcosystem = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categoryIcons = [
    Code2,
    Terminal,
    Database,
    Smartphone,
    Cpu,
    Cloud
  ];

  return (
    <section id="technology" className="py-28 bg-[#070A10] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>MODERN STACK ARCHITECTURE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Engineering With Modern Technology
          </h2>
          <p className="text-base sm:text-lg text-zinc-300">
            We build with battle-tested frameworks, distributed microservice patterns, and AI toolchains designed for sub-second performance and modular maintainability.
          </p>
        </div>

        {/* Interactive Architecture Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {TECH_ECOSYSTEM.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Layers;
            const isSelected = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-24 ${
                  isSelected
                    ? 'bg-[#111726] border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'bg-[#0A0D14]/80 border-white/8 hover:bg-[#0F1422] hover:border-white/20'
                }`}
              >
                <div className={`p-2 rounded-lg w-fit ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-zinc-400'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className={`text-xs sm:text-sm font-bold tracking-tight ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                  {cat.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Tech Stack Details Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090D18] border border-white/12 shadow-2xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-8">
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                CATEGORY 0{activeTab + 1}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {TECH_ECOSYSTEM[activeTab].category} Infrastructure
              </h3>
            </div>
            <div className="text-xs font-mono text-zinc-400">
              STRICT TYPE SAFETY • MODULAR PATTERNS
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {TECH_ECOSYSTEM[activeTab].items.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-[#0E1322] border border-white/8 hover:border-cyan-500/30 transition-all flex items-center gap-3 group"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <span>ARCHITECTURE: MICROSERVICES & SERVERLESS</span>
            <span>DEPLOYMENT: CONTINUOUS DELIVERY PIPELINES</span>
          </div>
        </div>

      </div>
    </section>
  );
};
