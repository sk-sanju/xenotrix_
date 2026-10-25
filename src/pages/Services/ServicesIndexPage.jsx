import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Cpu, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Bot, 
  Cloud,
  Layers
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SERVICE_CATEGORIES, DEDICATED_SERVICES } from '../../data/companyData';

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
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Header */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="font-normal text-4xl sm:text-5xl lg:text-6xl text-[#1f3038] tracking-tight leading-[1.06]">
              Technology services built for <br />business impact.
            </h1>
            <p className="text-lg sm:text-xl text-[#5d6b72] leading-relaxed">
              From full-stack custom software development to domain-specific AI automation and high-converting applications, we architect, engineer, and deploy scalable solutions for ambitious modern enterprises in Kerala, India, UAE, and worldwide.
            </p>
          </div>

          {/* Dedicated High-Intent Core Services Grid */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                Specialized Engineering Practices
              </h2>
              <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                Direct commercial services scoped and delivered by senior engineering leads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEDICATED_SERVICES.map((srv) => {
                const Icon = dedicatedIcons[srv.id] || Code2;
                return (
                  <Link
                    key={srv.id}
                    to={`/services/${srv.slug}`}
                    className="p-8 rounded-xl bg-[#ecf0f2] hover:bg-[#e2e8eb] transition-colors space-y-5 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded bg-[#1f3038] text-white flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-medium text-[#0d7480] bg-[#f7f9fa] px-2.5 py-1 rounded">
                          {srv.category}
                        </span>
                      </div>

                      <h3 className="font-semibold text-xl text-[#1f3038]">
                        {srv.title}
                      </h3>

                      <p className="text-sm text-[#5d6b72] leading-relaxed line-clamp-3">
                        {srv.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#d8e0e4] flex items-center justify-between text-sm font-semibold text-[#0d7480]">
                      <span>View Specifications</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 4 Pillars Matrix */}
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                Four Pillars of Technical Excellence
              </h2>
              <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                Comprehensive macro capabilities designed for scalable organizational transformation.
              </p>
            </div>

            <div className="space-y-8">
              {SERVICE_CATEGORIES.map((cat, idx) => {
                const Icon = categoryIcons[idx] || Code2;
                return (
                  <div
                    key={cat.id}
                    className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2] space-y-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#d8e0e4] pb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded bg-[#1f3038] text-white flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#0d7480] mb-0.5">
                            Pillar 0{idx + 1}
                          </div>
                          <h3 className="font-semibold text-2xl text-[#1f3038]">
                            {cat.title}
                          </h3>
                        </div>
                      </div>

                      <Link
                        to={`/services/${cat.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors shrink-0"
                      >
                        <span>Explore Pillar</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <p className="text-base text-[#1f3038] leading-relaxed max-w-3xl">
                      {cat.description}
                    </p>

                    {/* Sub-services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cat.services.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-5 rounded-lg bg-[#f7f9fa] space-y-2"
                        >
                          <h4 className="font-semibold text-sm text-[#1f3038]">
                            {sub.name}
                          </h4>
                          <p className="text-xs text-[#5d6b72] leading-relaxed">
                            {sub.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Architecture Badges */}
                    <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-semibold text-[#1f3038]">Technologies:</span>
                      {cat.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded bg-[#f7f9fa] text-[#1f3038] font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Banner */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038]">
                Need a tailored engineering team?
              </h3>
              <p className="text-sm sm:text-base text-[#5d6b72]">
                Our architects review your existing stack, requirements, and deployment goals to provide a detailed technical proposal within 24 hours.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors shrink-0"
            >
              <span>Request Scoping Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServicesIndexPage;
