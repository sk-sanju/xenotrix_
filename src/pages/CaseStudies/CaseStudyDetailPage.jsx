import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { CASE_STUDIES } from '../../data/companyData';
import { Terminal, ArrowRight, CheckCircle2, AlertTriangle, Layers, TrendingUp } from 'lucide-react';
import { NotFoundPage } from '../NotFoundPage';

export const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEO
        title={`Case Study: ${caseStudy.title} — Xenotrix`}
        description={caseStudy.summary}
      />
      <div className="pt-32 pb-28 bg-[#050505] relative overflow-hidden">
        
        {/* Case Study Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <Terminal className="w-3.5 h-3.5" />
              <span>EDITORIAL CASE STUDY // {caseStudy.category.toUpperCase()}</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
              {caseStudy.title}
            </h1>

            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed font-normal">
              {caseStudy.summary}
            </p>
          </div>

          {/* Meta Info Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0A0A0D] border border-white/10 text-xs font-mono">
            <div>
              <span className="text-zinc-500 block">CLIENT / PRODUCT</span>
              <span className="text-white font-bold">{caseStudy.client}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">INDUSTRY</span>
              <span className="text-white font-bold">{caseStudy.industry}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">CATEGORY</span>
              <span className="text-cyan-400 font-bold">{caseStudy.category}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">VERIFIED METRIC</span>
              <span className="text-emerald-400 font-bold">{caseStudy.metrics[0].val}</span>
            </div>
          </div>

          {/* Editorial Sequence breakdown */}
          <div className="space-y-12 pt-8 border-t border-white/10">
            
            {/* 1. Problem */}
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>01 // THE PROBLEM</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-white">System Bottleneck</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">{caseStudy.problem}</p>
            </div>

            {/* 2. Strategy */}
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase">
                <Layers className="w-4 h-4" />
                <span>02 // THE STRATEGY</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-white">Architectural Approach</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">{caseStudy.strategy}</p>
            </div>

            {/* 3. Technology */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-400 uppercase">
                <Terminal className="w-4 h-4" />
                <span>03 // TECHNOLOGY STACK</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technology.map((t, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-[#111116] border border-white/10 text-xs font-mono text-white">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Execution */}
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>04 // EXECUTION</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-white">Engineering Sprint Delivery</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">{caseStudy.execution}</p>
            </div>

            {/* 5. Outcome */}
            <div className="p-8 rounded-2xl bg-[#0A0A0D] border border-cyan-500/30 space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase">
                <TrendingUp className="w-4 h-4" />
                <span>05 // OUTCOME & IMPACT</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-white">Verified Business Outcome</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">{caseStudy.outcome}</p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};
