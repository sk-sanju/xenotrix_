import React from 'react';
import { Search, Compass, Palette, Code2, Rocket, TrendingUp } from 'lucide-react';
import { DEVELOPMENT_PROCESS } from '../../data/companyData';

export const ProcessTimeline = () => {
  const stepIcons = [
    Search,
    Compass,
    Palette,
    Code2,
    Rocket,
    TrendingUp
  ];

  return (
    <section className="py-24 bg-[#f7f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="font-normal text-3xl sm:text-5xl text-[#1f3038] tracking-tight">
            From idea to impact.
          </h2>
          <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
            A battle-tested 6-phase engineering lifecycle taking your initiative from initial concept to high-scale production reliability.
          </p>
        </div>

        {/* 6-Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DEVELOPMENT_PROCESS.map((item, idx) => {
            const Icon = stepIcons[idx] || Search;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#ecf0f2] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-[#0d7480]">
                    {item.subtitle}
                  </div>

                  <h3 className="text-xl font-normal text-[#1f3038] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-base text-[#1f3038] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;
