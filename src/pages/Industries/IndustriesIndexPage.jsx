import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ShoppingCart, 
  GraduationCap, 
  Building, 
  DollarSign, 
  Activity, 
  Factory, 
  Briefcase, 
  Rocket, 
  Store, 
  Layers, 
  ArrowRight, 
  Check 
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { INDUSTRIES } from '../../data/companyData';

export const IndustriesIndexPage = () => {
  const industryIcons = {
    retail: ShoppingBag,
    ecommerce: ShoppingCart,
    education: GraduationCap,
    'real-estate': Building,
    finance: DollarSign,
    healthcare: Activity,
    manufacturing: Factory,
    'professional-services': Briefcase,
    startups: Rocket,
    smes: Store,
    enterprise: Layers
  };

  return (
    <>
      <SEO
        title="Technology Across Industries — Xenotrix Technologies"
        description="Explore tailored technology solutions across Retail, eCommerce, Education, Real Estate, Finance, Healthcare, Manufacturing, Professional Services, Startups, SMEs, and Enterprise."
        canonical="https://xenotrix.in/industries"
      />
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Header */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="font-normal text-4xl sm:text-5xl lg:text-6xl text-[#1f3038] tracking-tight leading-[1.06]">
              Technology across diverse <br />industry domains.
            </h1>
            <p className="text-lg sm:text-xl text-[#5d6b72] leading-relaxed">
              From early-stage startups and retail stores to multi-entity enterprises, we build custom software, AI automations, and modern platforms engineered for industry-specific operational realities.
            </p>
          </div>

          {/* Grid of all industries */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                Sector Domain Practices
              </h2>
              <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                Tailored architectural blueprints addressing the regulatory and commercial demands of each vertical.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIES.map((ind) => {
                const Icon = industryIcons[ind.id] || Layers;
                return (
                  <div
                    key={ind.id}
                    className="p-8 rounded-xl bg-[#ecf0f2] hover:bg-[#e2e8eb] transition-colors space-y-6 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded bg-[#1f3038] text-white flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-[#0d7480] bg-[#f7f9fa] px-3 py-1 rounded">
                          Sector
                        </span>
                      </div>

                      <div>
                        <h3 className="font-semibold text-2xl text-[#1f3038]">
                          {ind.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#0d7480] mt-1">
                          {ind.tagline}
                        </p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-[#d8e0e4]">
                        {ind.capabilities.slice(0, 3).map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#1f3038] font-medium">
                            <Check className="w-4 h-4 text-[#0d7480] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#d8e0e4] flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {ind.services.slice(0, 2).map((s, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 rounded bg-[#f7f9fa] text-[#1f3038] font-medium">
                            {s}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/industries/${ind.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d7480] group-hover:text-[#1f3038] transition-colors shrink-0"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038]">
                Don't see your vertical listed?
              </h3>
              <p className="text-sm sm:text-base text-[#5d6b72]">
                Our core software principles, microservices architectures, and AI automation engines adapt quickly to novel domain constraints.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors shrink-0"
            >
              <span>Schedule Sector Scoping</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default IndustriesIndexPage;
