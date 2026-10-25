import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Cpu, Sparkles, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/companyData';

export const WhatWeBuild = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons = [
    Code2,
    Cpu,
    Sparkles,
    TrendingUp
  ];

  return (
    <section id="services" className="py-24 bg-[#f7f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-normal text-3xl sm:text-5xl text-[#1f3038] tracking-tight">
              Technology Services
            </h2>
            <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
              From product engineering to autonomous AI automation, we build dependable technology around operational bottlenecks.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d7480] hover:text-[#1f3038] transition-colors shrink-0"
          >
            <span>Explore All 4 Pillars</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Selector Tab Rail */}
        <div className="flex flex-wrap gap-2.5 mb-10" role="tablist">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const isSelected = activeCategory === idx;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(idx)}
                className={`px-5 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1f3038] text-white'
                    : 'bg-[#ecf0f2] text-[#1f3038] hover:bg-[#e2e8eb]'
                }`}
              >
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Detailed View */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-normal text-[#1f3038] tracking-tight">
                {SERVICE_CATEGORIES[activeCategory].title}
              </h3>
              <p className="text-base text-[#1f3038] max-w-2xl">
                {SERVICE_CATEGORIES[activeCategory].tagline}
              </p>
            </div>

            <Link
              to={`/services/${SERVICE_CATEGORIES[activeCategory].slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0d7480] hover:bg-[#1f3038] text-white text-sm font-medium transition-colors shrink-0"
            >
              <span>Explore Capability</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES[activeCategory].services.map((srv, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-white space-y-3">
                <div className="text-base font-semibold text-[#1f3038]">
                  {srv.name}
                </div>
                <p className="text-base text-[#1f3038] leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeBuild;
