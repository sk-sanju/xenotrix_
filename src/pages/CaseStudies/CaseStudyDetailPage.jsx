import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { CASE_STUDIES } from '../../data/companyData';
import { Terminal, ArrowRight, CheckCircle2, AlertCircle, Layers, Cpu, Sparkles } from 'lucide-react';
import { NotFoundPage } from '../NotFoundPage';

export const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug || cs.id === slug) || CASE_STUDIES[0];

  return (
    <>
      <SEO
        title={`Case Study: ${caseStudy.title} — Xenotrix Technologies`}
        description={caseStudy.summary}
      />
      <div className="pt-32 pb-28 bg-[#05070D] relative overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-3">
              <Link to="/case-studies" className="text-xs font-mono text-cyan-400 hover:text-cyan-300">
                ← ALL CASE STUDIES
              </Link>
              <span className="text-zinc-600">/</span>
              <span className="text-xs font-mono text-zinc-400 uppercase">{caseStudy.category}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300 font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>TECHNICAL BLUEPRINT // {caseStudy.category.toUpperCase()}</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.02]">
              {caseStudy.title}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
              {caseStudy.summary}
            </p>
          </div>

          {/* Meta Info Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#090D18] border border-white/10 text-xs font-mono">
            <div>
              <span className="text-zinc-500 block mb-1">CLIENT INITIATIVE</span>
              <span className="text-white font-bold">{caseStudy.client}</span>
            </div>
            <div>
              <span className="text-zinc-500 block mb-1">INDUSTRY DOMAIN</span>
              <span className="text-white font-bold">{caseStudy.industry}</span>
            </div>
            <div>
              <span className="text-zinc-500 block mb-1">ENGINEERING TYPE</span>
              <span className="text-cyan-400 font-bold">{caseStudy.category}</span>
            </div>
            <div>
              <span className="text-zinc-500 block mb-1">CORE DELIVERABLE</span>
              <span className="text-emerald-400 font-bold">Production Ready Architecture</span>
            </div>
          </div>

          {/* Breakdown Sequence */}
          <div className="space-y-10 pt-8 border-t border-white/10">
            
            {/* 1. Challenge */}
            <div className="p-8 rounded-3xl bg-[#090D18] border border-rose-500/20 space-y-4 max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase font-bold">
                <AlertCircle className="w-4 h-4" />
                <span>01 // THE BUSINESS CHALLENGE</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-white">Operational Problem</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">{caseStudy.challenge}</p>
            </div>

            {/* 2. Architecture & Solution */}
            <div className="p-8 rounded-3xl bg-[#090D18] border border-cyan-500/20 space-y-4 max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase font-bold">
                <Cpu className="w-4 h-4" />
                <span>02 // ARCHITECTURAL SOLUTION</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-white">System Design & Engineering</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">{caseStudy.solution}</p>
            </div>

            {/* 3. Technology */}
            <div className="p-8 rounded-3xl bg-[#090D18] border border-white/8 space-y-4 max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-400 uppercase font-bold">
                <Terminal className="w-4 h-4" />
                <span>03 // TECHNOLOGY STACK</span>
              </div>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {caseStudy.technology.map((t, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-[#0E1424] border border-white/10 text-xs font-mono text-white">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Outcome */}
            <div className="p-8 rounded-3xl bg-[#090D18] border border-emerald-500/30 space-y-4 max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>04 // OUTCOME & IMPACT</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-white">Verified Result</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">{caseStudy.result}</p>
            </div>

          </div>

          {/* CTA Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-violet-950/40 border border-cyan-500/30 text-center space-y-6">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Have a Similar Engineering Challenge?
            </h3>
            <p className="text-base text-zinc-300 max-w-xl mx-auto">
              Let's evaluate your existing architecture and design a custom roadmap for your business.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-cyan-300 hover:text-black transition-all"
              >
                <span>Schedule a Technical Scoping Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
