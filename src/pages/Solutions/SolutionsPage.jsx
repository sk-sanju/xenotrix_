import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  CreditCard, 
  Users, 
  GraduationCap, 
  ShoppingBag, 
  Workflow, 
  ArrowRight, 
  Check 
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SOLUTIONS } from '../../data/companyData';

export const SolutionsPage = () => {
  const solutionIcons = {
    'sales-crm': BarChart3,
    'finance': CreditCard,
    'human-resources': Users,
    'education': GraduationCap,
    'retail-ecommerce': ShoppingBag,
    'ai-automation': Workflow
  };

  return (
    <>
      <SEO
        title="Business Solutions — Xenotrix Technologies"
        description="Targeted technology and platform solutions for Sales & CRM, Finance, Human Resources, Education, Retail & eCommerce, and AI Automation."
        canonical="https://xenotrix.in/solutions"
      />
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Header */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="font-normal text-4xl sm:text-5xl lg:text-6xl text-[#1f3038] tracking-tight leading-[1.06]">
              Commercial solutions built around <br />operational friction.
            </h1>
            <p className="text-lg sm:text-xl text-[#5d6b72] leading-relaxed">
              We design modular, high-impact systems that address real operational bottlenecks, eliminate manual administrative overhead, and accelerate commercial growth.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                Targeted Problem Solving
              </h2>
              <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                Functional technology architectures mapped to specific business departments and workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SOLUTIONS.map((sol) => {
                const Icon = solutionIcons[sol.id] || Workflow;
                return (
                  <div
                    key={sol.id}
                    className="p-8 rounded-xl bg-[#ecf0f2] hover:bg-[#e2e8eb] transition-colors flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded bg-[#1f3038] text-white flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-[#0d7480] bg-[#f7f9fa] px-3 py-1 rounded">
                          {sol.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-[#1f3038]">
                          {sol.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#0d7480] mt-1 mb-2">
                          {sol.headline}
                        </p>
                        <p className="text-sm text-[#5d6b72] leading-relaxed">
                          {sol.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-[#d8e0e4]">
                        {sol.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#1f3038] font-medium">
                            <Check className="w-4 h-4 text-[#0d7480] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#d8e0e4] flex items-center justify-between text-xs">
                      <span className="text-[#5d6b72]">
                        Proprietary Suite: <strong className="text-[#1f3038] font-semibold">{sol.relatedProduct}</strong>
                      </span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 font-semibold text-[#0d7480] group-hover:text-[#1f3038] transition-colors text-sm"
                      >
                        <span>Deploy Solution</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA Box */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038]">
                Need a multi-department solution?
              </h3>
              <p className="text-sm sm:text-base text-[#5d6b72]">
                We architect unified systems connecting sales, finance, operations, and mobile field teams into one streamlined digital backbone.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors shrink-0"
            >
              <span>Schedule Architecture Scoping</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default SolutionsPage;
