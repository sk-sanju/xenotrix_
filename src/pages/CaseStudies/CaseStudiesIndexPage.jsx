import React from 'react';
import { SEO } from '../../components/common/SEO';
import { CASE_STUDIES } from '../../data/companyData';
import { Link } from 'react-router-dom';
import { Terminal, ArrowRight, Sparkles, AlertCircle, Cpu, CheckCircle2 } from 'lucide-react';

export const CaseStudiesIndexPage = () => {
  return (
    <>
      <SEO
        title="Selected Work & Engineering Case Studies — Xenotrix Technologies"
        description="Authentic technical case studies covering SaaS architecture, neural audio engines, and business automation platforms."
      />
      <div className="pt-32 pb-28 bg-[#05070D] relative overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AUTHENTIC CASE STUDIES</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
              Selected Work & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                Architectural Proof.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-normal">
              Transparent breakdowns of real technology initiatives: the core business challenge, architectural strategy, technology stack, and verified outcomes.
            </p>
          </div>

          <div className="space-y-8 pt-8 border-t border-white/10">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="p-8 sm:p-12 rounded-3xl bg-[#090D18] border border-white/12 shadow-2xl space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 uppercase">
                        {cs.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        INDUSTRY: {cs.industry}
                      </span>
                    </div>
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                      {cs.title}
                    </h2>
                  </div>

                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-cyan-300 hover:text-black transition-all shrink-0"
                  >
                    <span>Read Full Technical Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* 4-Step Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-5 rounded-2xl bg-black/40 border border-rose-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                      <AlertCircle className="w-4 h-4" />
                      <span>01 // CHALLENGE</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-cyan-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
                      <Cpu className="w-4 h-4" />
                      <span>02 // ARCHITECTURE</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-violet-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-violet-400 text-xs font-mono font-bold uppercase">
                      <Terminal className="w-4 h-4" />
                      <span>03 // TECHNOLOGY</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cs.technology.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-zinc-300 text-[10px] font-mono border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>04 // OUTCOME</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {cs.result}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
