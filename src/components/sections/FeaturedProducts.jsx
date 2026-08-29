import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Check, 
  Activity, 
  ShieldCheck, 
  ExternalLink,
  Cpu,
  BarChart3,
  CreditCard,
  GraduationCap,
  Users,
  Music,
  Terminal,
  Smartphone
} from 'lucide-react';
import { PRODUCTS } from '../../data/companyData';

export const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

  const productIcons = {
    xenocrm: BarChart3,
    xenofin: CreditCard,
    xenobiz: Smartphone,
    xenoclass: GraduationCap,
    xenohr: Users,
    xenotune: Music
  };

  return (
    <section id="products" className="py-28 bg-[#070A10] border-t border-white/10 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>PROPRIETARY SOFTWARE ECOSYSTEM</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Our Products
            </h2>
            <p className="text-base sm:text-lg text-zinc-300">
              Technology products designed to simplify business, automate operations and create better digital experiences.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
          >
            <span>View Complete Product Index</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Selector Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {PRODUCTS.map((prod) => {
            const Icon = productIcons[prod.id] || Layers;
            const isSelected = selectedProduct.id === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-28 relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#111622] border-cyan-500 shadow-lg shadow-cyan-500/10'
                    : 'bg-[#0A0D14]/80 border-white/8 hover:bg-[#0F1422] hover:border-white/20'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl pointer-events-none" />
                )}
                <div className="flex items-center justify-between w-full">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-zinc-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                    prod.isUpcoming ? 'bg-amber-950/60 text-amber-300 border-amber-800/40' : 'bg-cyan-950/60 text-cyan-300 border-cyan-800/40'
                  }`}>
                    {prod.badge}
                  </span>
                </div>
                <div>
                  <div className={`text-sm font-bold tracking-tight ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                    {prod.name}
                  </div>
                  <div className="text-[10px] text-zinc-500 truncate">{prod.category}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Showcase Panel for Selected Product */}
        <div className="rounded-3xl bg-[#0B0F19] border border-white/12 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Product Information & Capabilities */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold tracking-wider uppercase">
                  {selectedProduct.category}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  STATUS: <strong className="text-zinc-200">{selectedProduct.statusLabel}</strong>
                </span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-cyan-300 font-medium text-base mb-3">
                  {selectedProduct.tagline}
                </p>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                  Core Product Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                {selectedProduct.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">{m.label}</div>
                    <div className="text-xs font-mono font-bold text-white truncate">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to={selectedProduct.ctaLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-cyan-300 hover:text-black transition-all shadow-lg shadow-white/10"
                >
                  <span>Explore {selectedProduct.name} →</span>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-white font-medium text-sm border border-white/10 transition-all"
                >
                  <span>Request Enterprise Demo</span>
                </Link>
              </div>

            </div>

            {/* Right Column: High-End SaaS Dashboard / Product UI Mockup */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#070A10] border border-white/12 shadow-2xl relative space-y-6">
                
                {/* Mockup Window Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-zinc-400 ml-2">
                      app.xenotrix.in/{selectedProduct.id}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>v2.4.0</span>
                  </div>
                </div>

                {/* Dashboard Mock Visuals */}
                <div className="space-y-4">
                  {/* Top Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#0F1422] border border-white/5 space-y-1">
                      <div className="text-[10px] text-zinc-400 font-mono">ACTIVE SESSIONS</div>
                      <div className="text-base font-bold text-white font-mono">1,420 / min</div>
                      <div className="text-[9px] text-emerald-400 font-mono">↑ 99.98% uptime</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0F1422] border border-white/5 space-y-1">
                      <div className="text-[10px] text-zinc-400 font-mono">RESPONSE LATENCY</div>
                      <div className="text-base font-bold text-cyan-400 font-mono">18.4 ms</div>
                      <div className="text-[9px] text-cyan-300 font-mono">⚡ Zero drop</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0F1422] border border-white/5 space-y-1">
                      <div className="text-[10px] text-zinc-400 font-mono">DATA VAULT</div>
                      <div className="text-base font-bold text-violet-400 font-mono">AES-256</div>
                      <div className="text-[9px] text-zinc-400 font-mono">Encrypted</div>
                    </div>
                  </div>

                  {/* Interactive Visual Graph / Mock Feed */}
                  <div className="p-4 rounded-xl bg-black/60 border border-white/8 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span>TELEMETRY & WORKFLOW ENGINE</span>
                      <span className="text-emerald-400">● REALTIME STREAM</span>
                    </div>

                    <div className="h-28 flex items-end gap-1.5 pt-4 pb-1 border-b border-white/5">
                      {[40, 65, 45, 80, 55, 90, 75, 95, 85, 100, 70, 85, 95, 110, 105, 120].map((val, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-cyan-500/20 to-cyan-400/80 rounded-t-sm transition-all hover:to-white"
                          style={{ height: `${(val / 120) * 100}%` }}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>00:00 UTC</span>
                      <span>PEAK RUNTIME THROUGHPUT</span>
                      <span>LIVE</span>
                    </div>
                  </div>

                  {/* Technology Architecture Tag Bar */}
                  <div className="p-3 rounded-xl bg-[#0F1422] border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-mono text-[11px]">STACK:</span>
                    <div className="flex items-center gap-2">
                      {selectedProduct.techStack.map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
