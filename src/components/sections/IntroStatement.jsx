import React from 'react';
import { motion } from 'framer-motion';

export const IntroStatement = () => {
  return (
    <section className="py-24 md:py-36 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-cyan-400"
        >
          <span>OUR OPERATIONAL PHILOSOPHY</span>
        </motion.div>

        {/* Large Statement Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-white"
        >
          Technology shouldn't just support your business. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-300 to-white">
            It should move it forward.
          </span>
        </motion.h2>

        {/* Supporting Philosophy Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          We design and engineer digital systems that help businesses operate faster, make better decisions, automate repetitive work and create new digital experiences.
        </motion.p>

      </div>
    </section>
  );
};
