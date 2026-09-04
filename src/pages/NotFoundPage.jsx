import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { HeroBackground } from '../components/animations/HeroBackground';
import { 
  ArrowLeft, 
  Home, 
  Compass, 
  Terminal, 
  Cpu, 
  Layers, 
  Mail,
  Sparkles
} from 'lucide-react';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Solutions & Services', path: '/services', icon: Layers, desc: 'Enterprise AI & Custom Systems' },
    { name: 'SaaS Products', path: '/products', icon: Cpu, desc: 'XenoCRM, Xenotune & XenoBiz' },
    { name: 'Industries Served', path: '/industries', icon: Compass, desc: 'Tailored sector-specific tech' },
    { name: 'Contact Support', path: '/contact', icon: Mail, desc: 'Get in touch with our engineers' },
  ];

  return (
    <>
      <SEO 
        title="404 — Node Not Found | Xenotrix Technologies" 
        description="The page or route node you requested could not be located in the Xenotrix network."
        noindex={true}
      />

      <div className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white overflow-hidden select-none">
        {/* Dynamic Interactive Particle Grid Background */}
        <HeroBackground />

        {/* Ambient Radial Spotlight Glare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Center Container */}
        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center my-auto">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase backdrop-blur-md shadow-lg shadow-cyan-500/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>ERROR_CODE // 404_NODE_NOT_FOUND</span>
          </motion.div>

          {/* Glowing Hero 404 Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-2"
          >
            <h1 className="text-8xl sm:text-9xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]">
              404
            </h1>
            <div className="absolute inset-0 text-8xl sm:text-9xl font-display font-black tracking-tighter text-cyan-500/10 blur-xl pointer-events-none">
              404
            </div>
          </motion.div>

          {/* Heading Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide uppercase mb-3"
          >
            Destination Node Not Found
          </motion.h2>

          {/* Subtext Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed mb-8"
          >
            The requested URL path does not exist, has been re-indexed, or was disconnected from the Xenotrix matrix architecture.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold text-xs tracking-wider uppercase hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-xl shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>

            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-surface-hover/80 border border-white/10 hover:border-cyan-500/40 text-zinc-200 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Quick Nav Card Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="w-full bg-[#0A0A0D]/70 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-2 tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Suggested Network Destinations
              </span>
              <span className="text-[10px] font-mono text-cyan-400/70">AUTOROUTE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-200"
                  >
                    <div className="p-2 rounded-lg bg-cyan-950/50 border border-cyan-800/30 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {link.name}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">
                        {link.desc}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

