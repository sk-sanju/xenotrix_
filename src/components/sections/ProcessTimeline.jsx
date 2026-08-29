import React from 'react';
import { 
  Sparkles, 
  Search, 
  Compass, 
  Palette, 
  Code2, 
  Rocket, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import { DEVELOPMENT_PROCESS } from '../../data/companyData';

export const ProcessTimeline = () => {
  const stepIcons = [
    Search,
    Compass,
    Palette,
    Code2,
    Rocket,
    TrendingUp
  ];

  return (
    <section className="py-28 bg-[#05070D] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RIGOROUS METHODOLOGY</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            From Idea to Impact
          </h2>
          <p className="text-base sm:text-lg text-zinc-300">
            A battle-tested 6-phase engineering lifecycle taking your initiative from initial concept to high-scale production reliability.
          </p>
        </div>

        {/* 6-Step Process Cards Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DEVELOPMENT_PROCESS.map((item, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
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
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 text-cyan-400 border border-cyan-500/20 font-bold">
                      PHASE {item.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.step} — {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-zinc-400 mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Milestone Verification</span>
                  <span className="text-emerald-400">✓ Audited</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
