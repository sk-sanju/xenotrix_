import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Globe, Cpu, ShieldCheck } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { COMPANY_INFO, WHY_XENOTRIX } from '../../data/companyData';

export const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Xenotrix Technologies — Company Profile, Leadership & Engineering Culture"
        description="Learn about Xenotrix Technologies, a technology company founded in 2025 by Sanjay S, Abi C R, and Hari Govind in Thrissur, Kerala. Building proprietary SaaS products, AI automation, and enterprise software."
        canonical="https://xenotrix.in/about"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'About', item: '/about' }
        ]}
      />
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Header Hero */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="font-normal text-4xl sm:text-5xl lg:text-6xl text-[#1f3038] tracking-tight leading-[1.06]">
              Technology built for <br />business scale.
            </h1>
            <p className="text-lg sm:text-xl text-[#5d6b72] leading-relaxed">
              {COMPANY_INFO.description}
            </p>
          </div>

          {/* Corporate Stats / Facts Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl bg-[#ecf0f2] space-y-2">
              <div className="text-xs text-[#5d6b72] font-medium">Headquarters</div>
              <div className="text-lg font-semibold text-[#1f3038]">Thrissur, Kerala</div>
              <div className="text-xs text-[#0d7480]">Thiruvilwamala (680594)</div>
            </div>
            <div className="p-6 rounded-xl bg-[#ecf0f2] space-y-2">
              <div className="text-xs text-[#5d6b72] font-medium">Operating Model</div>
              <div className="text-lg font-semibold text-[#1f3038]">Global Remote</div>
              <div className="text-xs text-[#0d7480]">Distributed Teams</div>
            </div>
            <div className="p-6 rounded-xl bg-[#ecf0f2] space-y-2">
              <div className="text-xs text-[#5d6b72] font-medium">Proprietary Software</div>
              <div className="text-lg font-semibold text-[#1f3038]">6 Active Suites</div>
              <div className="text-xs text-[#0d7480]">Continuous Releases</div>
            </div>
            <div className="p-6 rounded-xl bg-[#ecf0f2] space-y-2">
              <div className="text-xs text-[#5d6b72] font-medium">System Reliability</div>
              <div className="text-lg font-semibold text-[#1f3038]">99.98% Monitored</div>
              <div className="text-xs text-[#0d7480]">Production SLA</div>
            </div>
          </div>

          {/* Founders & Leadership Section */}
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                  Founding Leadership
                </h2>
                <p className="text-sm sm:text-base text-[#5d6b72] mt-2 max-w-xl">
                  Led by systems architects and product engineers committed to software rigor, clean architecture, and commercial outcomes.
                </p>
              </div>
            </div>

            {/* 3 Co-Founders Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPANY_INFO.founders.map((founder, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-[#ecf0f2] space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded bg-[#1f3038] text-white flex items-center justify-center font-bold text-base">
                        {founder.initials}
                      </div>
                      <span className="text-xs font-medium text-[#0d7480] bg-[#f7f9fa] px-3 py-1 rounded">
                        Co-Founder
                      </span>
                    </div>

                    <div>
                      <h3 className="font-semibold text-xl text-[#1f3038]">
                        {founder.name}
                      </h3>
                      <div className="text-xs text-[#5d6b72] mt-0.5">
                        {founder.role}
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="text-xs font-semibold text-[#0d7480] mb-1">
                        Domain Focus
                      </div>
                      <p className="text-xs text-[#1f3038] font-medium leading-relaxed">
                        {founder.focus}
                      </p>
                    </div>

                    <p className="text-xs text-[#5d6b72] leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>

                  {/* Skills Pills */}
                  <div className="pt-4 border-t border-[#d8e0e4] flex flex-wrap gap-1.5">
                    {founder.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded bg-[#f7f9fa] text-[#1f3038] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Differentiators Grid */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                Engineering Principles
              </h2>
              <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                The standards and practices that guide every software architecture we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_XENOTRIX.map((p, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#ecf0f2] space-y-3">
                  <div className="text-xs font-semibold text-[#0d7480]">Principle {p.number}</div>
                  <h3 className="font-semibold text-lg text-[#1f3038]">{p.title}</h3>
                  <p className="text-sm text-[#5d6b72] leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Banner */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038]">
                Partner directly with our engineering leads.
              </h3>
              <p className="text-sm sm:text-base text-[#5d6b72]">
                Discuss system architecture, platform blueprints, or custom software development for your business.
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

export default AboutPage;
