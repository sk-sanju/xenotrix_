import React from 'react';
import { SEO } from '../../components/common/SEO';
import { INDUSTRIES } from '../../data/companyData';
import { Link } from 'react-router-dom';
import { Building, ArrowRight, CheckCircle2 } from 'lucide-react';

export const IndustriesIndexPage = () => {
  return (
    <>
      <SEO
        title="Industries Served — Xenotrix Technologies"
        description="Discover custom software and AI automation engineered for Retail, Healthcare, Finance, Logistics, Education, Real Estate, and Manufacturing."
      />
      <div className="pt-32 pb-28 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <Building className="w-3.5 h-3.5" />
              <span>DOMAINS & SECTORS</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              TECHNOLOGY FOR EVERY AMBITION
            </h1>

            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed font-normal">
              Explore how Xenotrix Technologies designs resilient software systems to solve domain-specific operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 space-y-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {ind.name}
                  </h3>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">Target Solution</span>
                    <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                      {ind.solutions[0]}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors"
                  >
                    <span>Explore Industry Solutions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
