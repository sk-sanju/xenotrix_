import React from 'react';
import { SEO } from '../../components/common/SEO';
import { SERVICE_CATEGORIES, DEDICATED_SERVICES } from '../../data/companyData';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Cpu, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Layers,
  Terminal,
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Bot,
  Cloud
} from 'lucide-react';

export const ServicesIndexPage = () => {
  const categoryIcons = [
    Code2,
    Cpu,
    Sparkles,
    TrendingUp
  ];

  const dedicatedIcons = {
    'website-development': Globe,
    'web-application-development': Code2,
    'ecommerce-development': ShoppingCart,
    'mobile-app-development': Smartphone,
    'custom-software-development': Database,
    'crm-erp-development': Layers,
    'ai-automation': Bot,
    'digital-marketing-seo': TrendingUp,
    'cloud-deployment': Cloud
  };

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' }
  ];

  return (
    <>
      <SEO
        title="Technology Services & Custom Software Engineering | Xenotrix Technologies"
        description="Comprehensive technology services: Custom Software, Web & Mobile App Development (Flutter), E-commerce, AI Solutions & WhatsApp Automation, and Technical SEO in Kerala, India & UAE."
        canonical="https://xenotrix.in/services"
        breadcrumbs={breadcrumbs}
      />
      <div className="pt-32 pb-28 bg-[#05070D] relative overflow-hidden min-h-screen">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
          
          {/* Header */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/80 border border-violet-800/40 text-xs font-mono text-violet-300">
              <Cpu className="w-3.5 h-3.5" />
              <span>ENTERPRISE ENGINEERING & SOLUTIONS</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
              Technology Services Built Around <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-violet-400">
                Real Business Needs.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-normal">
              From full-stack custom software development to domain-specific AI automation and high-converting websites, we architect, engineer, and deploy scalable solutions for ambitious modern enterprises in Kerala, India, UAE, and worldwide.
            </p>
          </div>

          {/* Dedicated High-Intent Core Services Grid */}
          <div className="space-y-8 pt-8 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                SPECIALIZED SOLUTIONS & DIRECT PRACTICES
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Core Commercial Engineering Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEDICATED_SERVICES.map((srv) => {
                const Icon = dedicatedIcons[srv.id] || Code2;
                return (
                  <Link
                    key={srv.id}
                    to={`/services/${srv.slug}`}
                    className="p-8 rounded-3xl bg-[#090D18] border border-white/8 hover:border-cyan-500/40 transition-all duration-300 space-y-5 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-zinc-400 uppercase">{srv.category}</span>
                      </div>

                      <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                        {srv.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                        {srv.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
                      <span>Explore Capabilities</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 4 Pillars Matrix */}
          <div className="space-y-12 pt-8 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-violet-400 uppercase tracking-widest font-semibold">
                MACRO ARCHITECTURE
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Four Pillars of Technical Excellence
              </h2>
            </div>

            {SERVICE_CATEGORIES.map((cat, idx) => {
              const Icon = categoryIcons[idx] || Code2;
              return (
                <div
                  key={cat.id}
                  className="p-8 sm:p-12 rounded-3xl bg-[#090D18] border border-white/12 shadow-2xl space-y-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                          PILLAR 0{idx + 1} // {cat.category}
                        </span>
                        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                          {cat.title}
                        </h3>
                      </div>
                    </div>

                    <Link
                      to={`/services/${cat.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-cyan-300 hover:text-black transition-all shrink-0"
                    >
                      <span>Explore Pillar</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 max-w-3xl">
                    {cat.description}
                  </p>

                  {/* Sub-services */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.services.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-5 rounded-2xl bg-[#0D121F] border border-white/6 hover:border-violet-500/30 transition-all space-y-2"
                      >
                        <h4 className="font-bold text-sm text-white">
                          {sub.name}
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {sub.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Badges */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="text-zinc-400">TECH STACK:</span>
                    {cat.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5 text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
};
