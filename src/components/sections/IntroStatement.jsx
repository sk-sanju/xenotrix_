import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Code2 } from 'lucide-react';

export const IntroStatement = () => {
  return (
    <section className="py-24 bg-[#f7f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="font-normal text-3xl sm:text-5xl text-[#1f3038] tracking-tight">
            How Xenotrix powers digital growth.
          </h2>
          <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
            We develop proprietary software platforms while simultaneously engineering high-performance custom technology for forward-thinking enterprises.
          </p>
        </div>

        {/* Dual Capability Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Pillar 1: We Build Products */}
          <div className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038] tracking-tight mb-3">
                  We Build Products
                </h3>
                <p className="text-[#1f3038] text-base leading-relaxed">
                  Our own commercial software platforms and intelligent business tools — including XenoCRM, XenoFin, XenoBiz, XenoClass, XenoHR, and Xenotune — engineered to simplify complex operations.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-sm font-semibold text-[#1f3038]">
                  Featured proprietary platforms:
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-[#1f3038]">
                  <div className="font-medium">• XenoCRM (Business OS)</div>
                  <div className="font-medium">• XenoFin (Finance OS)</div>
                  <div className="font-medium">• XenoBiz (Mobile Billing)</div>
                  <div className="font-medium">• Xenotune (AI Audio)</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d7480] hover:text-[#1f3038] transition-colors"
              >
                <span>Explore All 6 Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Pillar 2: We Build For Businesses */}
          <div className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038] tracking-tight mb-3">
                  We Build For Businesses
                </h3>
                <p className="text-[#1f3038] text-base leading-relaxed">
                  Full-lifecycle technology engineering: custom software, enterprise platforms, autonomous AI agents, multi-channel WhatsApp automation, and high-conversion web & mobile applications.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-sm font-semibold text-[#1f3038]">
                  Core engineering services:
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-[#1f3038]">
                  <div className="font-medium">• Custom Software & SaaS</div>
                  <div className="font-medium">• AI Agents & Automation</div>
                  <div className="font-medium">• Web & Flutter Mobile</div>
                  <div className="font-medium">• Digital Modernization</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d7480] hover:text-[#1f3038] transition-colors"
              >
                <span>Explore Engineering Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroStatement;
