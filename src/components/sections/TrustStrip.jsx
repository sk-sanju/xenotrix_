import React from 'react';
import { Layers, ShieldCheck, Sparkles, Code2, Workflow, TrendingUp } from 'lucide-react';

export const TrustStrip = () => {
  const values = [
    { title: "Proprietary Products", icon: Layers },
    { title: "High-Volume Platforms", icon: ShieldCheck },
    { title: "Intelligent AI", icon: Sparkles },
    { title: "Custom Engineering", icon: Code2 },
    { title: "Workflow Automation", icon: Workflow },
    { title: "Digital Modernization", icon: TrendingUp }
  ];

  return (
    <section className="py-6 bg-[#ecf0f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          
          <div className="text-sm font-semibold text-[#1f3038] shrink-0">
            Core capabilities
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-[#1f3038] font-medium">
            {values.map((v, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-6">
                <span>{v.title}</span>
                {idx < values.length - 1 && (
                  <span className="text-[#aab8bf]">•</span>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
