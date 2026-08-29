import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  Activity, 
  Database,
  CheckCircle2,
  Workflow,
  Radio,
  ChevronRight
} from 'lucide-react';
import { HeroBackground } from '../animations/HeroBackground';
import { PRODUCTS } from '../../data/companyData';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const heroProducts = PRODUCTS.slice(0, 4); // XenoCRM, XenoFin, XenoBiz, XenoClass

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#05070D]">
      {/* Dynamic Animated Node Background */}
      <HeroBackground />

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Headline & Positioning Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Enterprise Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider text-zinc-300 font-medium uppercase">
                ENTERPRISE PRODUCTS • PLATFORMS • AI ENGINEERING
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px] leading-[1.02] tracking-tight text-white"
            >
              Building Technology That <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                Moves Businesses Forward.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl"
            >
              Xenotrix Technologies builds software products, digital platforms and intelligent technology solutions that help businesses operate smarter, scale faster and grow with confidence.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#products"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white text-zinc-950 font-semibold text-sm tracking-wide hover:bg-cyan-300 hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-white font-medium text-sm border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300"
              >
                <span>Build With Xenotrix</span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-300 transition-colors" />
              </Link>
            </motion.div>

            {/* Quick Feature Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Proprietary SaaS Suites</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Custom Enterprise Code</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>AI & Automation Native</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive SaaS Product & Ecosystem Dashboard Visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative p-5 sm:p-6 rounded-2xl bg-[#0A0D14]/90 border border-white/12 backdrop-blur-2xl shadow-2xl space-y-5"
            >
              {/* Terminal / Live Architecture Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-zinc-400 ml-2">xenotrix-ecosystem // live</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                  <Radio className="w-2.5 h-2.5 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Product Switcher Tabs */}
              <div className="grid grid-cols-4 gap-1.5 bg-black/40 p-1 rounded-xl border border-white/5">
                {heroProducts.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveTab(idx)}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-mono transition-all text-center cursor-pointer ${
                      activeTab === idx
                        ? 'bg-white/15 text-cyan-300 font-semibold border border-white/10'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              {/* Active Product Preview Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroProducts[activeTab].id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/8 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white tracking-wide">
                        {heroProducts[activeTab].name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                        {heroProducts[activeTab].badge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {heroProducts[activeTab].tagline}
                    </p>
                  </div>

                  {/* Telemetry / Capability Highlights */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {heroProducts[activeTab].metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-lg bg-black/50 border border-white/5 space-y-1">
                        <div className="text-[10px] font-mono text-zinc-500 uppercase">{m.label}</div>
                        <div className="text-xs font-mono font-bold text-white">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {heroProducts[activeTab].techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-zinc-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      to={heroProducts[activeTab].ctaLink}
                      className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide transition-all group"
                    >
                      <span>Explore {heroProducts[activeTab].name} Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Status Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>API LATENCY: 24ms</span>
                <span>SECURITY: ENCRYPTED (TLS 1.3)</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
