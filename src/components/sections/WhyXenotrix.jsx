import React from 'react';
import { motion } from 'framer-motion';
import { PRINCIPLES } from '../../data/companyData';
import { ShieldCheck } from 'lucide-react';

export const WhyXenotrix = () => {
  return (
    <section className="py-28 bg-[#050505] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              DISTINCTIVE PRINCIPLES // WHY XENOTRIX
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2 uppercase">
              ENGINEERED FOR REAL-WORLD IMPACT
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            We avoid agency superficialities. Every decision is grounded in engineering rigor, commercial utility, and long-term partnership.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRINCIPLES.map((principle, idx) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  {principle.number}
                </span>
                <ShieldCheck className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
              </div>

              <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                {principle.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
