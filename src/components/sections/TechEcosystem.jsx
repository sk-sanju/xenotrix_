import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TECH_ECOSYSTEM } from '../../data/companyData';
import { Layers, Terminal, Sparkles } from 'lucide-react';

export const TechEcosystem = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', ...TECH_ECOSYSTEM.map(c => c.category)];

  const displayedTech = selectedCategory === 'ALL'
    ? TECH_ECOSYSTEM.flatMap(c => c.items.map(item => ({ item, category: c.category })))
    : TECH_ECOSYSTEM.find(c => c.category === selectedCategory)?.items.map(item => ({ item, category: selectedCategory })) || [];

  return (
    <section className="py-28 bg-[#0A0A0D] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              TECHNOLOGY CONSTELLATION // MODERN STACK
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2 uppercase">
              ENGINEERING ECOSYSTEM
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            We use battle-tested, ultra-fast frameworks and cloud infrastructure designed for high throughput, low latency, and long-term maintainability.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/20'
                  : 'bg-white/[0.04] text-zinc-400 border border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Constellation Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence>
            {displayedTech.map(({ item, category }, idx) => (
              <motion.div
                key={`${item}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-[#111116] border border-white/10 hover:border-cyan-500/40 hover:bg-[#181820] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors">
                  <span>{category}</span>
                  <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="font-display font-bold text-sm text-white mt-3 group-hover:text-cyan-200 transition-colors">
                  {item}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
