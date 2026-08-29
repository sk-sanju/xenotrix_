import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { INDUSTRIES } from '../../data/companyData';
import { Building, CheckCircle2, ArrowRight, Check, Sparkles } from 'lucide-react';
import { NotFoundPage } from '../NotFoundPage';

export const IndustryPageTemplate = () => {
  const { slug } = useParams();
  const industry = INDUSTRIES.find((i) => i.slug === slug || i.id === slug);

  if (!industry) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEO
        title={`${industry.name} Technology Solutions — Xenotrix Technologies`}
        description={`Custom software, AI automation, and cloud platforms for the ${industry.name} sector.`}
      />
      <div className="pt-32 pb-28 bg-[#05070D] relative overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-3">
              <Link to="/industries" className="text-xs font-mono text-cyan-400 hover:text-cyan-300">
                ← ALL INDUSTRIES
              </Link>
              <span className="text-zinc-600">/</span>
              <span className="text-xs font-mono text-zinc-400 uppercase">{industry.name}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INDUSTRY DOMAIN // {industry.name.toUpperCase()}</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.02]">
              Technology Solutions for {industry.name}
            </h1>

            <p className="text-lg sm:text-2xl text-cyan-300 font-medium leading-relaxed">
              {industry.tagline}
            </p>

            <p className="text-base text-zinc-300 leading-relaxed font-normal">
              We engineer specialized software architectures, high-performance data pipelines, and automated multi-channel communication engines tailored specifically for {industry.name} organizations.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-6 pt-12 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                DOMAINS & CAPABILITIES
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Engineered Capabilities for {industry.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.capabilities.map((cap, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#090D18] border border-white/8 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                    <Check className="w-4 h-4" />
                    <span>CAPABILITY 0{idx + 1}</span>
                  </div>
                  <p className="text-sm text-white font-semibold">{cap}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Services Utilized */}
          <div className="space-y-4 pt-10 border-t border-white/10">
            <h3 className="font-display font-bold text-xl text-white">
              Applicable Engineering Services
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {industry.services.map((s, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-[#0D121F] border border-white/10 text-xs font-mono text-cyan-300">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#090D18] border border-white/12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-white">Modernize Your {industry.name} Operations</h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1">Schedule an architectural consultation with our industry solution leads.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-cyan-300 hover:text-black transition-all shrink-0"
            >
              <span>Book Technical Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
