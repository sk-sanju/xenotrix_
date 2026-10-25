import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { INDUSTRIES } from '../../data/companyData';
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
        canonical={`https://xenotrix.in/industries/${industry.slug}`}
      />
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#5d6b72]">
            <Link to="/" className="hover:text-[#0d7480] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/industries" className="hover:text-[#0d7480] transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#1f3038] font-medium">{industry.name}</span>
          </nav>

          {/* Header */}
          <div className="space-y-6 max-w-3xl">
            <div className="text-xs font-semibold text-[#0d7480]">
              Sector Practice
            </div>

            <h1 className="font-normal text-4xl sm:text-5xl lg:text-6xl text-[#1f3038] tracking-tight leading-[1.06]">
              Technology solutions for <br />{industry.name}.
            </h1>

            <p className="text-lg sm:text-xl text-[#1f3038] font-medium leading-relaxed">
              {industry.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
              We engineer specialized software architectures, high-performance data pipelines, and automated multi-channel communication engines tailored specifically for {industry.name} organizations.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors"
              >
                <span>Book Technical Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                Engineered Capabilities for {industry.name}
              </h2>
              <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                Domain-specific software modules and technical workflows designed for this vertical.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.capabilities.map((cap, idx) => (
                <div key={idx} className="p-8 rounded-xl bg-[#ecf0f2] space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded bg-[#1f3038] text-white flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#0d7480]">Core Capability</span>
                  </div>
                  <p className="text-base sm:text-lg text-[#1f3038] font-medium leading-relaxed">{cap}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Services Utilized */}
          <div className="space-y-6">
            <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038] tracking-tight">
              Applicable Engineering Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {industry.services.map((s, idx) => (
                <span key={idx} className="px-4 py-2 rounded-lg bg-[#ecf0f2] text-sm font-medium text-[#1f3038]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038]">
                Modernize your {industry.name} operations.
              </h3>
              <p className="text-sm sm:text-base text-[#5d6b72]">
                Schedule an architectural consultation with our industry solution leads to map requirements and evaluate timelines.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors shrink-0"
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

export default IndustryPageTemplate;
