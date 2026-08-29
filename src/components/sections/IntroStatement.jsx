import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Code2, Sparkles, Shield, ChevronRight } from 'lucide-react';
import { CORE_PILLARS } from '../../data/companyData';

export const IntroStatement = () => {
  return (
    <section className="py-24 bg-[#05070D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TWO CORE CAPABILITIES</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            How Xenotrix Powers Digital Growth
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            We develop proprietary software platforms while simultaneously engineering high-performance custom technology for forward-thinking enterprises.
          </p>
        </div>

        {/* Dual Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Pillar 1: We Build Products */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0F1422] to-[#0A0D14] border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col justify-between shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 font-semibold tracking-wider uppercase">
                  PROPRIETARY ECOSYSTEM
                </span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-3">
                  We Build Products
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Our own commercial software platforms and intelligent business tools — including XenoCRM, XenoFin, XenoBiz, XenoClass, XenoHR, and Xenotune — engineered to simplify complex operations.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                  Featured Proprietary Platforms:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
                  <span className="p-2 rounded-lg bg-black/40 border border-white/5">• XenoCRM (Business OS)</span>
                  <span className="p-2 rounded-lg bg-black/40 border border-white/5">• XenoFin (Finance OS)</span>
                  <span className="p-2 rounded-lg bg-black/40 border border-white/5">• XenoBiz (Mobile Billing)</span>
                  <span className="p-2 rounded-lg bg-black/40 border border-white/5">• Xenotune (AI Audio)</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <a
                href="#products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
              >
                <span>Explore All 6 Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Pillar 2: We Build For Businesses */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#140F22] to-[#0A0D14] border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 relative group flex flex-col justify-between shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-violet-950/80 text-violet-300 border border-violet-800/40 font-semibold tracking-wider uppercase">
                  CUSTOM ENGINEERING
                </span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-3">
                  We Build For Businesses
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Full-lifecycle technology engineering: custom software, enterprise platforms, autonomous AI agents, multi-channel WhatsApp automation, and high-conversion web & mobile applications.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                  Core Engineering Services:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
                  <span className="p-2 rounded-lg bg-black/40 border border-white/5">• Custom Software & SaaS</span>
                  <span className="p-2 rounded-lg bg-black/40 border border-white/5">• AI Agents & Workflows</span>
                  <span className="p-2 rounded-lg bg-black/40 border border-white/5">• Web & Flutter Mobile</span>
                  <span className="p-2 rounded-lg bg-black/40 border border-white/5">• Digital Transformation</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 group-hover:text-violet-300 transition-colors"
              >
                <span>Explore Engineering Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
