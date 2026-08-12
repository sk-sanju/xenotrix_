import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Activity, DollarSign, Truck, GraduationCap, Building, Briefcase, Factory, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { INDUSTRIES } from '../../data/companyData';

export const IndustriesGrid = () => {
  const iconMap = {
    ShoppingBag: ShoppingBag,
    Activity: Activity,
    DollarSign: DollarSign,
    Truck: Truck,
    GraduationCap: GraduationCap,
    Building: Building,
    Briefcase: Briefcase,
    Factory: Factory
  };

  return (
    <section className="py-28 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              DOMAIN EXPERTISE // INDUSTRIES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2 uppercase">
              TECHNOLOGY FOR EVERY AMBITION
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            We adapt high-performance architectures to solve operational pain points across critical global industries.
          </p>
        </div>

        {/* 8 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const IconComp = iconMap[ind.icon] || Building;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group p-6 rounded-2xl bg-[#0A0A0D] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] group-hover:bg-cyan-500/10 border border-white/10 group-hover:border-cyan-500/30 flex items-center justify-center text-zinc-300 group-hover:text-cyan-300 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                    {ind.name}
                  </h3>

                  {/* Problems Reveal */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-amber-400" />
                      <span>Industry Challenge</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {ind.problems[0]}
                    </p>
                  </div>

                  {/* Solutions Reveal */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] font-mono text-cyan-400 uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      <span>Xenotrix Solution</span>
                    </div>
                    <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                      {ind.solutions[0]}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-4">
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 group-hover:text-cyan-400 transition-colors"
                  >
                    <span>View Industry Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
