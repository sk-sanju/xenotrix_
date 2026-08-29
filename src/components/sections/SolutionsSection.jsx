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
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SOLUTIONS } from '../../data/companyData';

export const SolutionsSection = () => {
  const solutionIcons = {
    'sales-crm': BarChart3,
    'finance': CreditCard,
    'human-resources': Users,
    'education': GraduationCap,
    'retail-ecommerce': ShoppingBag,
    'ai-automation': Workflow
  };

  return (
    <section id="solutions" className="py-28 bg-[#070A12] border-t border-white/10 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-[11px] font-mono text-blue-300 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUSINESS IMPACT ARCHITECTURE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Solutions Built Around Your Business
          </h2>
          <p className="text-base sm:text-lg text-zinc-300">
            We understand business challenges deeply, engineering targeted technological solutions that directly improve operating velocity, reduce overhead, and scale revenue.
          </p>
        </div>

        {/* 6 Solution Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTIONS.map((sol) => {
            const Icon = solutionIcons[sol.id] || Sparkles;
            return (
              <div
                key={sol.id}
                className="p-8 rounded-3xl bg-[#0B0F19] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5 uppercase">
                      {sol.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400/90 mt-1 mb-2">
                      {sol.headline}
                    </p>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {sol.description}
                    </p>
                  </div>

                  {/* Capabilities */}
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
                    Powered by: <strong className="text-zinc-200">{sol.relatedProduct}</strong>
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Deploy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
