import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Cpu, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  Layers, 
  Check, 
  ShieldCheck,
  ChevronRight,
  Terminal
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/companyData';

export const WhatWeBuild = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons = [
    Code2,
    Cpu,
    Sparkles,
    TrendingUp
  ];

  return (
    <section id="services" className="py-28 bg-[#05070D] border-t border-white/10 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-[11px] font-mono text-violet-300 uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5" />
              <span>CUSTOM ENGINEERING CAPABILITIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Technology Services
            </h2>
            <p className="text-base sm:text-lg text-zinc-300">
              From product engineering to AI-powered automation, we build technology around real business needs.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors shrink-0"
          >
            <span>Explore All 4 Pillars</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Category Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Code2;
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className={`p-6 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 ${
                  isActive
                    ? 'bg-[#121829] border-violet-500 shadow-xl shadow-violet-500/10'
                    : 'bg-[#0A0D14]/90 border-white/8 hover:bg-[#0F1422] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className={`p-3 rounded-xl ${isActive ? 'bg-violet-500/20 text-violet-300' : 'bg-white/5 text-zinc-400'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400">0{idx + 1}</span>
                </div>
                <div>
                  <h3 className={`text-base font-bold tracking-tight ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {cat.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Deep Dive Matrix */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#080C16] border border-white/12 shadow-2xl space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                {SERVICE_CATEGORIES[activeCategory].category}
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {SERVICE_CATEGORIES[activeCategory].tagline}
              </h3>
              <p className="text-sm text-zinc-300">
                {SERVICE_CATEGORIES[activeCategory].description}
              </p>
            </div>

            <Link
              to={`/services/${SERVICE_CATEGORIES[activeCategory].slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs tracking-wide transition-all shrink-0"
            >
              <span>Explore {SERVICE_CATEGORIES[activeCategory].title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sub-Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES[activeCategory].services.map((sub, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0D121F] border border-white/8 hover:border-violet-500/30 transition-all duration-200 space-y-3 group"
              >
                <div className="flex items-center gap-2 text-violet-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 group-hover:scale-150 transition-transform" />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">CAPABILITY 0{i + 1}</span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                  {sub.name}
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack Bar */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>CORE ARCHITECTURAL TOOLS:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {SERVICE_CATEGORIES[activeCategory].tech.map((t, idx) => (
                <span key={idx} className="text-xs font-mono text-zinc-300 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
