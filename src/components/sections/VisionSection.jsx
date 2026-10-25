import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const VisionSection = () => {
  return (
    <section className="py-32 bg-slate-50/60 relative overflow-hidden border-b border-slate-200/80">
      {/* Light Kinetic Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-violet-400/10 via-cyan-400/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-800 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          <span>XENOTRIX VISION 2060</span>
        </motion.div>

        {/* Major Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 uppercase leading-[0.95]"
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
          className="font-display text-2xl sm:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-violet-600 to-slate-900"
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-sm tracking-wide hover:bg-cyan-600 transition-all duration-300 shadow-xl shadow-slate-900/10"
          >
            <span>Partner With Xenotrix</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
