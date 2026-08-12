import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const VisionSection = () => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* 3D Kinetic Light Rings & Mesh Gradient */}
      <div className="absolute inset-0 bg-hero-glow opacity-80 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-violet-600/20 via-cyan-500/10 to-transparent blur-[160px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>XENOTRIX VISION 2060</span>
        </motion.div>

        {/* Major Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95]"
        >
          THE FUTURE ISN'T <br />
          SOMETHING WE WAIT FOR.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-2xl sm:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-300 to-white"
        >
          It's something we build.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-6"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_35px_rgba(6,182,212,0.3)]"
          >
            <span>Partner With Xenotrix</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
