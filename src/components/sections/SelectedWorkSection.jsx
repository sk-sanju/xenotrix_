import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  AlertCircle, 
  Cpu,
  Sparkles
} from 'lucide-react';
import { CASE_STUDIES } from '../../data/companyData';

export const SelectedWorkSection = () => {
  return (
    <section id="work" className="py-28 bg-[#070A10] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AUTHENTIC ENGINEERING CASE STUDIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-zinc-300">
              A transparent breakdown of how we analyze complex technical challenges, engineer modular solutions, and deploy resilient platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 hover:bg-cyan-900/80 transition-colors"
            >
              <span>Client Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              <span>Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Case Study Cards Matrix */}
        <div className="space-y-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="p-8 sm:p-12 rounded-3xl bg-[#090D18] border border-white/12 shadow-2xl relative space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 uppercase">
                      {study.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      INDUSTRY: {study.industry}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {study.title}
                  </h3>
                </div>

                <Link
                  to={`/case-studies/${study.slug}`}
                  aria-label={`Read full technical architecture case study for ${study.title}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-all shrink-0"
                >
                  <span>Read Technical Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 4-Step Architecture Flow: Challenge -> Solution -> Tech -> Result */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* 01 Challenge */}
                <div className="p-5 rounded-2xl bg-black/40 border border-rose-500/20 space-y-2.5">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                    <AlertCircle className="w-4 h-4" />
                    <span>01 // CHALLENGE</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* 02 Solution */}
                <div className="p-5 rounded-2xl bg-black/40 border border-cyan-500/20 space-y-2.5">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
                    <Cpu className="w-4 h-4" />
                    <span>02 // ARCHITECTURE</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* 03 Technology */}
                <div className="p-5 rounded-2xl bg-black/40 border border-violet-500/20 space-y-2.5">
                  <div className="flex items-center gap-2 text-violet-400 text-xs font-mono font-bold uppercase">
                    <Terminal className="w-4 h-4" />
                    <span>03 // TECHNOLOGY</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {study.technology.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-zinc-300 text-[10px] font-mono border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 04 Result */}
                <div className="p-5 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2.5">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>04 // OUTCOME</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {study.result}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
