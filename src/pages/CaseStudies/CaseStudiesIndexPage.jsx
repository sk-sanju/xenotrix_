import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { CASE_STUDIES } from '../../data/companyData';

export const CaseStudiesIndexPage = () => {
  return (
    <>
      <SEO
        title="Selected Work & Engineering Case Studies — Xenotrix Technologies"
        description="Authentic technical case studies covering SaaS architecture, neural audio engines, and business automation platforms."
        canonical="https://xenotrix.in/case-studies"
      />
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Header */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="font-normal text-4xl sm:text-5xl lg:text-6xl text-[#1f3038] tracking-tight leading-[1.06]">
              Selected work and <br />architectural proof.
            </h1>

            <p className="text-lg sm:text-xl text-[#5d6b72] leading-relaxed">
              Transparent breakdowns of real technology initiatives: the core operational challenge, architectural strategy, technology stack, and verified production outcomes.
            </p>
          </div>

          <div className="space-y-8">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2] space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#d8e0e4] pb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold text-[#0d7480] bg-[#f7f9fa] px-2.5 py-1 rounded">
                        {cs.category}
                      </span>
                      <span className="text-[#5d6b72]">
                        Industry: {cs.industry}
                      </span>
                    </div>
                    <h2 className="font-semibold text-2xl sm:text-3xl text-[#1f3038]">
                      {cs.title}
                    </h2>
                  </div>

                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-xs transition-colors shrink-0"
                  >
                    <span>Read Technical Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Case Study Feature Image */}
                {cs.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={cs.image}
                      alt={`${cs.title} architecture`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-56 sm:h-72 md:h-80 object-cover object-center"
                    />
                  </div>
                )}

                {/* 4-Step Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 rounded-lg bg-[#f7f9fa] space-y-2">
                    <div className="text-xs font-semibold text-[#5d6b72]">
                      01 Challenge
                    </div>
                    <p className="text-xs text-[#1f3038] leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-[#f7f9fa] space-y-2">
                    <div className="text-xs font-semibold text-[#0d7480]">
                      02 Architecture
                    </div>
                    <p className="text-xs text-[#1f3038] leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-[#f7f9fa] space-y-2">
                    <div className="text-xs font-semibold text-[#1f3038]">
                      03 Technology Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cs.technology.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-[#ecf0f2] text-[#1f3038] text-[11px] font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-lg bg-[#f7f9fa] space-y-2">
                    <div className="text-xs font-semibold text-[#0d7480]">
                      04 Verified Outcome
                    </div>
                    <p className="text-xs text-[#1f3038] font-medium leading-relaxed">
                      {cs.result}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038]">
                Ready to engineer your system?
              </h3>
              <p className="text-sm sm:text-base text-[#5d6b72]">
                We partner with engineering leads and business executives to deliver custom software, data pipelines, and automation architectures.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors shrink-0"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default CaseStudiesIndexPage;
