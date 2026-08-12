import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Check, Terminal } from 'lucide-react';

export const BeliefsSection = () => {
  return (
    <section className="py-28 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            VERIFIED PROOF & ETHICS // WHAT WE BELIEVE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            TRANSPARENT ENGINEERING INTEGRITY
          </h2>
          <p className="text-base text-zinc-400">
            We adhere to strict transparency standards. We publish zero fabricated statistics, zero fake testimonials, and zero artificial logos.
          </p>
        </div>

        {/* Belief Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Code Integrity Over Buzzwords",
              desc: "We measure success by system uptime, API response times, user retention, and business revenue impact—not superficial industry hype."
            },
            {
              title: "Zero Artificial Proof",
              desc: "Client confidentiality and security are non-negotiable. We share case studies only when authorized, with transparent verified markers."
            },
            {
              title: "Long-Term Systems Maintenance",
              desc: "Software is an evolving business asset. We engineer systems with modularity and clean documentation so they scale seamlessly for years."
            }
          ].map((belief, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-sm font-bold">
                0{idx + 1}
              </div>

              <h3 className="font-display font-bold text-xl text-white">
                {belief.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {belief.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
