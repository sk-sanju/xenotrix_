import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Cpu, Workflow, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHAT_WE_BUILD } from '../../data/companyData';

export const WhatWeBuild = () => {
  const iconMap = {
    Code2: Code2,
    Cpu: Cpu,
    Workflow: Workflow,
    TrendingUp: TrendingUp
  };

  return (
    <section className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              CAPABILITY MATRIX // WHAT WE BUILD
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2 uppercase">
              INTELLIGENT SYSTEM ARCHITECTURE
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Four interconnected engineering pillars designed to modernize legacy workflows and build scalable software products.
          </p>
        </div>

        {/* 4 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_WE_BUILD.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Code2;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-[#0A0A0D]/80 border border-white/10 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-6">
                  {/* Pillar Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-widest text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase">
                      PILLAR {idx + 1} // {pillar.pillar}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] group-hover:bg-cyan-500/10 border border-white/10 group-hover:border-cyan-500/30 flex items-center justify-center text-zinc-300 group-hover:text-cyan-300 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Capability List */}
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    {pillar.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & CTA Link */}
                <div className="pt-6 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={pillar.link}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors pt-1"
                  >
                    <span>Explore Pillar</span>
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
