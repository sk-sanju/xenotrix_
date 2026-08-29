import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Users, 
  Cpu, 
  ArrowRight, 
  Sparkles,
  Layers,
  Terminal,
  Globe2
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const CorporateAboutSection = () => {
  return (
    <section className="py-28 bg-[#070A10] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Corporate Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT XENOTRIX TECHNOLOGIES</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Engineering Products & Systems for Modern Enterprises
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              {COMPANY_INFO.description}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Founded by engineers and product builders in Thiruvilwamala, Thrissur, Kerala with global remote operations, our team merges full-stack microservices, autonomous AI models, mobile engineering, and commercial product operations to solve real business bottlenecks at scale.
            </p>

            {/* Core Verification Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">HEADQUARTERS</div>
                <div className="text-sm font-bold text-white">Thiruvilwamala, Thrissur</div>
                <div className="text-[10px] text-cyan-400 font-mono">Kerala, India (680594)</div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">OPERATIONS</div>
                <div className="text-sm font-bold text-white">Global Remote</div>
                <div className="text-[10px] text-cyan-400 font-mono">Distributed Network</div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">CORE FOCUS</div>
                <div className="text-sm font-bold text-white">Products & AI</div>
                <div className="text-[10px] text-cyan-400 font-mono">Enterprise Software</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-cyan-300 hover:text-black transition-all shadow-lg"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Column: Leadership & Engineering Principles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090D18] border border-white/12 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Terminal className="w-4 h-4" />
                  <span>FOUNDING LEADERSHIP</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">EST. {COMPANY_INFO.founded}</span>
              </div>

              <div className="space-y-3">
                {COMPANY_INFO.founders.map((founder, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-cyan-500/20 transition-all"
                  >
                    <div>
                      <div className="text-sm font-bold text-white">{founder.name}</div>
                      <div className="text-xs text-zinc-400">{founder.role}</div>
                    </div>
                    <div className="text-[10px] font-mono text-cyan-400 sm:text-right shrink-0">
                      {founder.skills[0]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                  <Globe2 className="w-4 h-4" />
                  <span>Global Quality Standard</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Enterprise-grade code architecture designed for international scaling, high security compliance, and zero downtime.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
