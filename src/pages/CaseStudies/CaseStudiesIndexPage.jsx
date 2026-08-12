import React from 'react';
import { SEO } from '../../components/common/SEO';
import { CASE_STUDIES } from '../../data/companyData';
import { Link } from 'react-router-dom';
import { Terminal, ArrowRight } from 'lucide-react';

export const CaseStudiesIndexPage = () => {
  return (
    <>
      <SEO
        title="Case Studies & Technical Outcomes — Xenotrix"
        description="Detailed technical breakdown of software engineering, AI, and SaaS platforms built by Xenotrix Technologies."
      />
      <div className="pt-32 pb-28 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <Terminal className="w-3.5 h-3.5" />
              <span>TECHNICAL CASE STUDIES</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              CASE STUDIES & ARCHITECTURE OUTCOMES
            </h1>

            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed font-normal">
              In-depth technical breakdowns detailing the problem, strategy, engineering stack, execution, and verified outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 space-y-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>{cs.category}</span>
                    <span className="text-cyan-400">{cs.client}</span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors"
                  >
                    <span>Read Full Editorial Blueprint</span>
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
