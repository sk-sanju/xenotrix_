import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { CASE_STUDIES } from '../../data/companyData';
import { NotFoundPage } from '../NotFoundPage';

export const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug || cs.id === slug) || CASE_STUDIES[0];

  const canonicalUrl = `https://xenotrix.in/case-studies/${caseStudy.slug}`;
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Case Studies', item: '/case-studies' },
    { name: caseStudy.title, item: `/case-studies/${caseStudy.slug}` }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    "headline": caseStudy.title,
    "description": caseStudy.summary,
    "author": {
      "@type": "Organization",
      "@id": "https://xenotrix.in/#organization",
      "name": "Xenotrix Technologies"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://xenotrix.in/#organization",
      "name": "Xenotrix Technologies",
      "logo": "https://xenotrix.in/assets/logo.jpeg"
    },
    "mainEntityOfPage": canonicalUrl
  };

  return (
    <>
      <SEO
        title={`Case Study: ${caseStudy.title} — Xenotrix Technologies`}
        description={caseStudy.summary}
        canonical={canonicalUrl}
        ogType="article"
        breadcrumbs={breadcrumbs}
        schema={articleSchema}
      />
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#5d6b72]">
            <Link to="/" className="hover:text-[#0d7480] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/case-studies" className="hover:text-[#0d7480] transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-[#1f3038] font-medium">{caseStudy.category}</span>
          </nav>

          {/* Header */}
          <div className="space-y-6 max-w-3xl">
            <div className="text-xs font-semibold text-[#0d7480]">
              Technical Blueprint // {caseStudy.category}
            </div>

            <h1 className="font-normal text-4xl sm:text-5xl lg:text-6xl text-[#1f3038] tracking-tight leading-[1.06]">
              {caseStudy.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#5d6b72] leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>

          {/* Meta Info Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl bg-[#ecf0f2] space-y-1">
              <span className="text-xs text-[#5d6b72] block">Client Initiative</span>
              <span className="text-base font-semibold text-[#1f3038]">{caseStudy.client}</span>
            </div>
            <div className="p-6 rounded-xl bg-[#ecf0f2] space-y-1">
              <span className="text-xs text-[#5d6b72] block">Industry Domain</span>
              <span className="text-base font-semibold text-[#1f3038]">{caseStudy.industry}</span>
            </div>
            <div className="p-6 rounded-xl bg-[#ecf0f2] space-y-1">
              <span className="text-xs text-[#5d6b72] block">Engineering Focus</span>
              <span className="text-base font-semibold text-[#0d7480]">{caseStudy.category}</span>
            </div>
            <div className="p-6 rounded-xl bg-[#ecf0f2] space-y-1">
              <span className="text-xs text-[#5d6b72] block">Core Deliverable</span>
              <span className="text-base font-semibold text-[#1f3038]">Production System</span>
            </div>
          </div>

          {/* Breakdown Sequence */}
          <div className="space-y-8">
            
            {/* 1. Challenge */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2] space-y-3">
              <div className="text-xs font-semibold text-[#5d6b72]">
                01 The Business Challenge
              </div>
              <h2 className="font-semibold text-2xl text-[#1f3038]">Operational Bottleneck</h2>
              <p className="text-sm sm:text-base text-[#5d6b72] leading-relaxed">{caseStudy.challenge}</p>
            </div>

            {/* 2. Architecture & Solution */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2] space-y-3">
              <div className="text-xs font-semibold text-[#0d7480]">
                02 Architectural Solution
              </div>
              <h2 className="font-semibold text-2xl text-[#1f3038]">System Design & Engineering</h2>
              <p className="text-sm sm:text-base text-[#5d6b72] leading-relaxed">{caseStudy.solution}</p>
            </div>

            {/* 3. Technology */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2] space-y-4">
              <div className="text-xs font-semibold text-[#1f3038]">
                03 Technology Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technology.map((t, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-lg bg-[#f7f9fa] text-xs font-medium text-[#1f3038]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Outcome */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2] space-y-3">
              <div className="text-xs font-semibold text-[#0d7480]">
                04 Outcome & Impact
              </div>
              <h2 className="font-semibold text-2xl text-[#1f3038]">Verified Result</h2>
              <p className="text-sm sm:text-base text-[#1f3038] font-medium leading-relaxed">{caseStudy.result}</p>
            </div>

          </div>

          {/* Bottom CTA Box */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038]">
                Have a similar engineering challenge?
              </h3>
              <p className="text-sm sm:text-base text-[#5d6b72]">
                Let's evaluate your existing architecture and design a custom software roadmap for your organization.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors shrink-0"
            >
              <span>Schedule Scoping Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default CaseStudyDetailPage;
