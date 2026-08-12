import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../../data/companyData';
import { ArrowRight, Terminal } from 'lucide-react';

export const ProcessTimeline = () => {
  return (
    <section className="py-28 bg-[#0A0A0D] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              METHODOLOGY // ENGINEERING PROCESS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2 uppercase">
              HOW WE SHIP SOFTWARE
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            A structured 6-stage lifecycle designed for speed, architectural clarity, and zero-downtime execution.
          </p>
        </div>

        {/* Timeline Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#111116] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 relative group space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  {step.number}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                  PHASE {idx + 1}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                {step.title}
              </h3>

              <div className="text-xs font-mono text-cyan-400">
                {step.subtitle}
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-white/5">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
