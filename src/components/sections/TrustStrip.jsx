import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { Sparkles, Layers, Cpu, Code2, Workflow, TrendingUp, ShieldCheck } from 'lucide-react';

export const TrustStrip = () => {
  const values = [
    { title: "Products", icon: Layers },
    { title: "Platforms", icon: ShieldCheck },
    { title: "AI", icon: Sparkles },
    { title: "Software", icon: Code2 },
    { title: "Automation", icon: Workflow },
    { title: "Digital Transformation", icon: TrendingUp }
  ];

  return (
    <section className="py-6 bg-[#080B12] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8">
          
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold shrink-0">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>XENOTRIX CAPABILITIES</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm text-zinc-300 font-medium">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-cyan-400/80" />
                  <span className="text-zinc-200 tracking-wide">{v.title}</span>
                  {idx < values.length - 1 && (
                    <span className="text-zinc-600 ml-4 sm:ml-6 hidden sm:inline">•</span>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
