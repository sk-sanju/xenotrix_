import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { INDUSTRIES } from '../../data/companyData';
import { Building, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { NotFoundPage } from '../NotFoundPage';

export const IndustryPageTemplate = () => {
  const { slug } = useParams();
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEO
        title={`${industry.name} Technology Solutions — Xenotrix`}
        description={`Custom software, AI automation, and cloud platforms for ${industry.name}.`}
      />
      <div className="pt-32 pb-28 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <Building className="w-3.5 h-3.5" />
              <span>INDUSTRY SOLUTION // {industry.name.toUpperCase()}</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              TECHNOLOGY SOLUTIONS FOR {industry.name.toUpperCase()}
            </h1>

            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed font-normal">
              We engineer specialized data architectures, compliance-aware workflows, and automated communication engines tailored specifically for {industry.name}.
            </p>
          </div>

          {/* Common Problems */}
          <div className="space-y-6 pt-12 border-t border-white/10">
            <h2 className="font-display font-extrabold text-2xl text-white uppercase flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>COMMON INDUSTRY CHALLENGES</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industry.problems.map((prob, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#0A0A0D] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-amber-400">CHALLENGE 0{idx + 1}</div>
                  <p className="text-sm text-zinc-300 font-medium">{prob}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Solutions */}
          <div className="space-y-6 pt-12 border-t border-white/10">
            <h2 className="font-display font-extrabold text-2xl text-white uppercase flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>XENOTRIX ARCHITECTURAL SOLUTIONS</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industry.solutions.map((sol, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#111116] border border-cyan-500/20 space-y-2">
                  <div className="text-xs font-mono text-cyan-400">SOLUTION 0{idx + 1}</div>
                  <p className="text-sm text-white font-semibold">{sol}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-12 border-t border-white/10">
            <div className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-white">Modernize Your {industry.name} Operations</h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">Schedule an architectural consultation with our industry solution leads.</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-cyan-300 transition-colors shrink-0"
              >
                <span>Book Scoping Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
