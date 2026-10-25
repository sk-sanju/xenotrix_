import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../../data/companyData';

export const SelectedWorkSection = () => {
  return (
    <section id="work" className="py-24 bg-[#f7f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-normal text-3xl sm:text-5xl text-[#1f3038] tracking-tight">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
              A transparent breakdown of how we analyze complex technical challenges, engineer modular solutions, and deploy resilient platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d7480] hover:text-[#1f3038] transition-colors"
            >
              <span>Client Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5d6b72] hover:text-[#1f3038] transition-colors"
            >
              <span>Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Case Studies Matrix */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study, idx) => {
            const studyImage = idx % 2 === 0
              ? '/assets/bryansk-state-engineering-and-technical-university.jpg'
              : '/assets/faculty-of-civil-engineering-and-architecture-in-2.jpg';

            return (
              <div
                key={study.id}
                className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-[#0d7480] mb-1">
                      {study.industry} · {study.client}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-normal text-[#1f3038] tracking-tight">
                      {study.title}
                    </h3>
                  </div>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white text-sm font-medium transition-colors shrink-0"
                  >
                    <span>Read Case Study →</span>
                  </Link>
                </div>

                {/* Case Study Architectural Photo */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={studyImage}
                    width="1920"
                    height="1080"
                    alt={`${study.title} engineering deployment`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#1f3038]">Challenge</div>
                    <p className="text-base text-[#1f3038] leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#1f3038]">Engineered solution</div>
                    <p className="text-base text-[#1f3038] leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#1f3038]">Measurable impact</div>
                    <p className="text-base text-[#1f3038] leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SelectedWorkSection;
