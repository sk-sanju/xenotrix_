import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, ChevronRight, Layers } from 'lucide-react';
import { HeroBackground } from '../animations/HeroBackground';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#050505]">
      {/* Canvas Interactive Particle / Node Network Background */}
      <HeroBackground />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline & Content Left Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase">
                2060 DIGITAL INFRASTRUCTURE ARCHITECTURE
              </span>
            </motion.div>

            {/* Immersive Non-Centered Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-[44px] sm:text-[68px] md:text-[88px] lg:text-[102px] leading-[0.92] tracking-tighter text-white uppercase"
            >
              BUILD WHAT'S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-500">
                NEXT.
              </span>
            </motion.h1>

            {/* Supporting Context Text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl"
            >
              Xenotrix Technologies builds intelligent software, AI systems, automation platforms and digital products for ambitious businesses.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white text-black font-semibold text-sm tracking-wide hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300"
              >
                <span>Explore Our Work</span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column Node Network Diagram Visual */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative p-6 rounded-2xl bg-[#0A0A0D]/70 border border-white/10 backdrop-blur-xl shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>XENOTRIX_NODE_MAP</span>
                </div>
                <span className="text-[10px] text-emerald-400">ACTIVE</span>
              </div>

              {/* Node Sequence Diagram */}
              <div className="space-y-3 font-mono text-xs">
                {[
                  { label: "Data Pipeline", code: "01 // INGESTION", color: "border-cyan-500/40 text-cyan-300" },
                  { label: "AI Engine", code: "02 // NEURAL REASONING", color: "border-violet-500/40 text-violet-300" },
                  { label: "Software Core", code: "03 // MICROSERVICES", color: "border-blue-500/40 text-blue-300" },
                  { label: "Automation", code: "04 // EVENT WEBHOOKS", color: "border-emerald-500/40 text-emerald-300" },
                  { label: "Business Impact", code: "05 // VALUE OUTPUT", color: "border-white/30 text-white" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg bg-black/40 border ${item.color} flex items-center justify-between transition-transform hover:translate-x-1`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] text-zinc-500">{item.code}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                <span>LATENCY: 4.2ms</span>
                <span>EFFICIENCY: OPTIMAL</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
