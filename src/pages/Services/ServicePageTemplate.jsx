import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { SERVICE_CATEGORIES, CASE_STUDIES } from '../../data/companyData';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  Terminal,
  Check
} from 'lucide-react';
import { NotFoundPage } from '../NotFoundPage';

export const ServicePageTemplate = () => {
  const { slug } = useParams();
  
  // Find matching service category
  const category = SERVICE_CATEGORIES.find((s) => s.slug === slug || s.id === slug) || SERVICE_CATEGORIES[0];
  const relatedCaseStudy = CASE_STUDIES[0];

  return (
    <>
      <SEO
        title={`${category.title} — Xenotrix Technologies`}
        description={category.description}
      />
      <div className="pt-32 pb-28 bg-[#05070D] relative overflow-hidden min-h-screen">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          {/* Service Hero */}
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-3">
              <Link to="/services" className="text-xs font-mono text-cyan-400 hover:text-cyan-300">
                ← ALL SERVICES
              </Link>
              <span className="text-zinc-600">/</span>
              <span className="text-xs font-mono text-zinc-400 uppercase">{category.category}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/80 border border-violet-800/40 text-xs font-mono text-violet-300 font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>ENTERPRISE PILLAR // {category.category}</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.02]">
              {category.title}
            </h1>

            <p className="text-lg sm:text-2xl text-violet-300 font-medium leading-relaxed">
              {category.tagline}
            </p>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              {category.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-cyan-300 hover:text-black transition-all shadow-xl shadow-cyan-500/10"
              >
                <span>Request {category.title} Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="pt-12 border-t border-white/10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                CORE CAPABILITIES
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Detailed Engineering Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#090D18] border border-white/8 hover:border-violet-500/30 transition-all space-y-4 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                  </div>

                  <h3 className="font-bold text-lg text-white">
                    {sub.name}
                  </h3>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {sub.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div className="pt-12 border-t border-white/10 space-y-6">
            <h3 className="font-display font-bold text-2xl text-white">
              Architectural Stack & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-[#0D121F] border border-white/10 text-xs font-mono text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Related Case Study Card */}
          <div className="pt-12 border-t border-white/10 space-y-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              RELATED CASE STUDY
            </span>
            <div className="p-8 sm:p-10 rounded-3xl bg-[#090D18] border border-white/12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-mono text-zinc-400 uppercase">{relatedCaseStudy.category}</span>
                <h3 className="font-display font-bold text-2xl text-white">{relatedCaseStudy.title}</h3>
                <p className="text-sm text-zinc-300">{relatedCaseStudy.summary}</p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  to={`/case-studies/${relatedCaseStudy.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-cyan-300 hover:text-black transition-all"
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
