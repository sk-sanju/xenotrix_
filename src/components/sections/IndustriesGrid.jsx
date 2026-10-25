import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ShoppingCart, 
  GraduationCap, 
  Building, 
  DollarSign, 
  Activity, 
  Factory, 
  Briefcase, 
  Rocket, 
  Store, 
  Layers, 
  ArrowRight, 
  Check
} from 'lucide-react';
import { INDUSTRIES } from '../../data/companyData';

export const IndustriesGrid = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0]);

  const industryIcons = {
    retail: ShoppingBag,
    ecommerce: ShoppingCart,
    education: GraduationCap,
    'real-estate': Building,
    finance: DollarSign,
    healthcare: Activity,
    manufacturing: Factory,
    'professional-services': Briefcase,
    startups: Rocket,
    smes: Store,
    enterprise: Layers
  };

  return (
    <section id="industries" className="py-24 bg-[#f7f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-normal text-3xl sm:text-5xl text-[#1f3038] tracking-tight">
              Technology Across Industries
            </h2>
            <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
              Tailored software engineering, AI pipelines, and platform architectures built to match regulatory and commercial realities.
            </p>
          </div>

          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d7480] hover:text-[#1f3038] transition-colors shrink-0"
          >
            <span>Explore All Sectors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Industry Chips */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {INDUSTRIES.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#1f3038] text-white'
                    : 'bg-[#ecf0f2] text-[#1f3038] hover:bg-[#e2e8eb]'
                }`}
              >
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] space-y-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-2">
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-normal text-[#1f3038] tracking-tight">
                Engineered capabilities for {selectedIndustry.name}
              </h3>
              <p className="text-base text-[#1f3038] leading-relaxed">
                {selectedIndustry.tagline}
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0d7480] hover:bg-[#1f3038] text-white text-sm font-medium transition-colors shrink-0"
            >
              <span>Consult on {selectedIndustry.name}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedIndustry.capabilities?.map((cap, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-white flex items-center gap-3">
                <Check className="w-4 h-4 text-[#0d7480] shrink-0" />
                <span className="text-sm font-medium text-[#1f3038]">{cap}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesGrid;
