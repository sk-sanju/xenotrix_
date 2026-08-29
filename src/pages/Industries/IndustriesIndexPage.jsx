import React from 'react';
import { SEO } from '../../components/common/SEO';
import { INDUSTRIES } from '../../data/companyData';
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
  Sparkles 
} from 'lucide-react';

export const IndustriesIndexPage = () => {
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
    <>
      <SEO
        title="Technology Across Industries — Xenotrix Technologies"
        description="Explore tailored technology solutions across Retail, eCommerce, Education, Real Estate, Finance, Healthcare, Manufacturing, Professional Services, Startups, SMEs, and Enterprise."
      />
      <div className="pt-32 pb-28 bg-[#05070D] relative overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INDUSTRY DOMAIN EXPERTISE</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
              Technology Across <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                Diverse Industries.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-normal">
              From early-stage startups and retail stores to multi-entity enterprises, we build custom software, AI automations, and modern platforms engineered for industry-specific realities.
            </p>
          </div>

          {/* Grid of all industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            {INDUSTRIES.map((ind) => {
              const Icon = industryIcons[ind.id] || Layers;
              return (
                <div
                  key={ind.id}
                  className="p-8 rounded-3xl bg-[#090D18] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 space-y-6 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 uppercase">
                        SECTOR
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                      {ind.name}
                    </h3>

                    <p className="text-xs font-semibold text-cyan-400">
                      {ind.tagline}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/5">
                      {ind.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {ind.services.slice(0, 2).map((s, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                          {s}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
};
