import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { SERVICES_DETAIL, CASE_STUDIES } from '../../data/companyData';
import { ArrowRight, CheckCircle2, AlertTriangle, Code2, Cpu, ShieldCheck, HelpCircle } from 'lucide-react';
import { NotFoundPage } from '../NotFoundPage';

export const ServicePageTemplate = () => {
  const { slug } = useParams();
  const service = SERVICES_DETAIL.find((s) => s.slug === slug);

  if (!service) {
    return <NotFoundPage />;
  }

  const relatedCaseStudy = CASE_STUDIES.find((cs) => cs.id === service.caseStudyId) || CASE_STUDIES[0];

  return (
    <>
      <SEO
        title={`${service.title} — Xenotrix Technologies`}
        description={service.subtitle}
      />
      <div className="pt-32 pb-28 bg-[#050505] relative overflow-hidden">
        
        {/* Service Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <Code2 className="w-3.5 h-3.5" />
              <span>CAPABILITY // {service.title.toUpperCase()}</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95]">
              {service.heroHeadline}
            </h1>

            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed font-normal">
              {service.subtitle}
            </p>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <span>Request {service.title} Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 border-t border-white/10">
            <div className="p-8 rounded-2xl bg-[#0A0A0D] border border-red-500/20 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>The Industry Problem</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">Operational Bottleneck</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{service.problem}</p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0A0A0D] border border-cyan-500/20 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Xenotrix Solution</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">Engineered Infrastructure</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{service.solution}</p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="pt-16 space-y-8">
            <h2 className="font-display font-extrabold text-3xl text-white uppercase border-b border-white/10 pb-4">
              TECHNICAL CAPABILITIES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.capabilities.map((cap, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#111116] border border-white/5 space-y-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <h4 className="font-display font-semibold text-base text-white">{cap}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div className="pt-12 border-t border-white/10 space-y-6">
            <h2 className="font-display font-extrabold text-2xl text-white uppercase">
              TECHNOLOGIES UTILIZED
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-[#111116] border border-white/10 text-xs font-mono text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Related Case Study Card */}
          <div className="pt-16 border-t border-white/10 space-y-6">
            <span className="text-xs font-mono text-cyan-400 uppercase">PROVEN OUTCOME</span>
            <div className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-mono text-zinc-500 uppercase">{relatedCaseStudy.category}</span>
                <h3 className="font-display font-bold text-2xl text-white">{relatedCaseStudy.title}</h3>
                <p className="text-sm text-zinc-400">{relatedCaseStudy.summary}</p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  to={`/case-studies/${relatedCaseStudy.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-cyan-300 transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};
