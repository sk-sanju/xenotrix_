import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const CorporateAboutSection = () => {
  return (
    <section className="py-24 bg-[#f7f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Corporate Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-normal text-3xl sm:text-5xl text-[#1f3038] tracking-tight">
              Engineering for modern enterprises.
            </h2>

            {/* Corporate Narrative */}
            <p className="text-base sm:text-lg text-[#1f3038] leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            <p className="text-base text-[#1f3038] leading-relaxed">
              Founded by engineers and product builders in Thiruvilwamala, Thrissur, Kerala with distributed global remote operations, our team merges full-stack microservices, autonomous AI models, mobile engineering, and commercial product operations to solve real business bottlenecks at scale.
            </p>

            {/* Real Architectural Engineering Campus Photograph */}
            <div className="pt-2">
              <img
                src="/assets/faculty-of-civil-engineering-and-architecture-in.jpg"
                width="1920"
                height="1080"
                alt="Modern engineering architecture facility"
                loading="lazy"
                decoding="async"
                className="w-full h-56 sm:h-72 object-cover rounded-xl"
              />
            </div>

            {/* Verification Items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-[#ecf0f2] space-y-1">
                <div className="text-sm font-semibold text-[#1f3038]">Headquarters</div>
                <div className="text-sm font-semibold text-[#1f3038]">Thrissur, Kerala</div>
                <div className="text-sm text-[#5d6b72]">India (680594)</div>
              </div>

              <div className="p-4 rounded-lg bg-[#ecf0f2] space-y-1">
                <div className="text-sm font-semibold text-[#1f3038]">Operations</div>
                <div className="text-sm font-semibold text-[#1f3038]">Global Remote</div>
                <div className="text-sm text-[#5d6b72]">Distributed Team</div>
              </div>

              <div className="p-4 rounded-lg bg-[#ecf0f2] space-y-1">
                <div className="text-sm font-semibold text-[#1f3038]">Core Focus</div>
                <div className="text-sm font-semibold text-[#1f3038]">Products & AI</div>
                <div className="text-sm text-[#5d6b72]">Enterprise Systems</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white text-sm font-medium transition-colors"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Leadership / Founders */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-sm font-medium text-[#1f3038] mb-3">
              Founding leadership
            </div>

            {COMPANY_INFO.founders.map((founder, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-[#ecf0f2] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-base text-[#1f3038]">
                    {founder.name}
                  </span>
                  <span className="text-sm text-[#0d7480] font-medium">
                    Co-Founder
                  </span>
                </div>
                <div className="text-sm font-medium text-[#1f3038]">
                  {founder.role}
                </div>
                <p className="text-sm text-[#5d6b72] leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CorporateAboutSection;
