import React from 'react';
import { WHY_XENOTRIX } from '../../data/companyData';

export const WhyXenotrix = () => {
  return (
    <section className="py-24 bg-[#f7f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="font-normal text-3xl sm:text-5xl text-[#1f3038] tracking-tight">
            Why Xenotrix
          </h2>
          <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
            We don't build disposable code. We architect scalable platforms and resilient business technology built for sustained operational impact.
          </p>
        </div>

        {/* Differentiators Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Feature Image */}
          <div className="lg:col-span-5 rounded-xl overflow-hidden bg-[#ecf0f2] flex flex-col justify-between">
            <img
              src="/assets/choose1.jpg"
              alt="Why Choose Xenotrix — Customer satisfaction, engineering quality, operational efficiency, dedicated service, and system reliability"
              loading="lazy"
              decoding="async"
              className="w-full h-80 lg:h-full object-cover object-center"
            />
          </div>

          {/* Differentiators Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_XENOTRIX.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#ecf0f2] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-normal text-[#1f3038] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#1f3038] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 text-sm font-medium text-[#0d7480]">
                  {item.highlight}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyXenotrix;
