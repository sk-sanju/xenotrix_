import React, { useState } from 'react';
import { Code2, Database, Smartphone, Cpu, Cloud, Terminal } from 'lucide-react';
import { TECH_ECOSYSTEM } from '../../data/companyData';

export const TechEcosystem = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categoryIcons = [
    Code2,
    Terminal,
    Database,
    Smartphone,
    Cpu,
    Cloud
  ];

  return (
    <section id="technology" className="py-24 bg-[#f7f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="font-normal text-3xl sm:text-5xl text-[#1f3038] tracking-tight">
            Engineering with modern technology.
          </h2>
          <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
            We build with battle-tested frameworks, distributed microservice patterns, and AI toolchains designed for sub-second performance.
          </p>
        </div>

        {/* Category Tab Rail */}
        <div className="flex flex-wrap gap-2.5 mb-10" role="tablist">
          {TECH_ECOSYSTEM.map((cat, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={idx}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1f3038] text-white'
                    : 'bg-[#ecf0f2] text-[#1f3038] hover:bg-[#e2e8eb]'
                }`}
              >
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Tech Detail */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] space-y-6">
          <div className="pb-2">
            <h3 className="text-2xl font-normal text-[#1f3038] tracking-tight">
              {TECH_ECOSYSTEM[activeTab].category} Stack
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {TECH_ECOSYSTEM[activeTab].items?.map((item, idx) => (
              <span key={idx} className="px-4 py-2 rounded bg-white text-sm font-medium text-[#1f3038]">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechEcosystem;
