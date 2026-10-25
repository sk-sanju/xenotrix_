import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SOLUTIONS } from '../../data/companyData';

export const SolutionsSection = () => {
  const [activeSolution, setActiveSolution] = useState(0);
  const sol = SOLUTIONS[activeSolution];

  return (
    <section id="solutions" className="py-24 bg-[#f7f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="font-normal text-3xl sm:text-5xl text-[#1f3038] tracking-tight">
            Solutions built around your business.
          </h2>
          <p className="text-base sm:text-lg text-[#1f3038] leading-relaxed">
            We engineer targeted technological platforms that directly improve operating velocity, reduce overhead, and scale revenue.
          </p>
        </div>

        {/* Solution Selector Tab Rail */}
        <div className="flex flex-wrap gap-2.5 mb-10" role="tablist">
          {SOLUTIONS.map((item, idx) => {
            const isSelected = activeSolution === idx;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveSolution(idx)}
                className={`px-5 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1f3038] text-white'
                    : 'bg-[#ecf0f2] text-[#1f3038] hover:bg-[#e2e8eb]'
                }`}
              >
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Solution Detail View */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] space-y-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-2">
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-normal text-[#1f3038] tracking-tight">
                {sol.title}
              </h3>
              <p className="text-base text-[#1f3038] leading-relaxed">
                {sol.headline}
              </p>
              <div className="text-sm font-medium text-[#0d7480]">
                Powered by {sol.relatedProduct}
              </div>
            </div>

            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white text-sm font-medium transition-colors shrink-0"
            >
              <span>Deploy Solution</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3 pt-2">
            <div className="text-sm font-semibold text-[#1f3038]">
              Engineered capabilities:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sol.capabilities?.map((cap, cIdx) => (
                <div key={cIdx} className="p-4 rounded-lg bg-white text-sm font-medium text-[#1f3038]">
                  • {cap}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
