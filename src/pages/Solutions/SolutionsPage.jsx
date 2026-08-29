import React from 'react';
import { SEO } from '../../components/common/SEO';
import { SOLUTIONS } from '../../data/companyData';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  BarChart3, 
  CreditCard, 
  Users, 
  GraduationCap, 
  ShoppingBag, 
  Workflow, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

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
      />
      <div className="pt-32 pb-28 bg-[#05070D] relative overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/40 text-xs font-mono text-blue-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMERCIAL PROBLEM SOLVING</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
              Solutions Built Around <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-400">
                Your Business Challenges.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-normal">
              We design modular, high-impact systems that address real operational friction, eliminate manual overhead, and accelerate commercial growth.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            {SOLUTIONS.map((sol) => {
              const Icon = solutionIcons[sol.id] || Sparkles;
              return (
                <div
                  key={sol.id}
                  className="p-8 rounded-3xl bg-[#090D18] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 uppercase">
                        {sol.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {sol.title}
                      </h3>
                      <p className="text-xs font-semibold text-cyan-400/90 mt-1 mb-2">
                        {sol.headline}
                      </p>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/5">
                      {sol.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-mono">
                      Product: <strong className="text-zinc-200">{sol.relatedProduct}</strong>
                    </span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Deploy Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
};
