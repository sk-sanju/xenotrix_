import React from 'react';
import { SEO } from '../../components/common/SEO';
import { SERVICES_DETAIL } from '../../data/companyData';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, CheckCircle2 } from 'lucide-react';

export const ServicesIndexPage = () => {
  return (
    <>
      <SEO
        title="Solutions & Engineering Capabilities — Xenotrix Technologies"
        description="Explore Xenotrix Technologies solutions spanning Web Platforms, AI & ML, Automation, SaaS, Data Analytics, and Digital Growth."
      />
      <div className="pt-32 pb-28 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <Code2 className="w-3.5 h-3.5" />
              <span>ENTERPRISE SOLUTIONS INDEX</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              ENGINEERING & SOFTWARE CAPABILITIES
            </h1>

            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed font-normal">
              We design and deploy modern software platforms, AI systems, and automation infrastructure tailored to high-growth organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            {SERVICES_DETAIL.map((service) => (
              <div
                key={service.slug}
                className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 space-y-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase">SOLUTION</span>
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {service.subtitle}
                  </p>

                  <div className="space-y-2 pt-2">
                    {service.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors"
                  >
                    <span>View Service Blueprint</span>
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
