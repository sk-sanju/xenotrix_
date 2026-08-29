import React from 'react';
import { 
  Layers, 
  Cpu, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Users,
  CheckCircle2
} from 'lucide-react';
import { WHY_XENOTRIX } from '../../data/companyData';

export const WhyXenotrix = () => {
  const icons = [
    Layers,
    Cpu,
    TrendingUp,
    Sparkles,
    ShieldCheck,
    Users
  ];

  return (
    <section className="py-28 bg-[#05070D] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE XENOTRIX ADVANTAGE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Why Xenotrix
          </h2>
          <p className="text-base sm:text-lg text-zinc-300">
            We don't build disposable code. We architect scalable platforms and resilient business technology built for high velocity and sustained commercial impact.
          </p>
        </div>

        {/* 6 Core Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_XENOTRIX.map((item, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#090D18] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 font-bold">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Verified Engineering Rigor</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
