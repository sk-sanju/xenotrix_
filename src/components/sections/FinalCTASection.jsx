import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MessageSquare, Phone, Mail, Terminal } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const FinalCTASection = () => {
  return (
    <section className="py-28 bg-[#05070D] border-t border-white/10 relative overflow-hidden">
      {/* Radiant Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300 uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>START YOUR TECHNICAL ENGAGEMENT</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05]">
          Let's Build What <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400">
            Comes Next.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Have an idea, business challenge or digital transformation goal? Let's turn it into technology that works.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-cyan-300 hover:text-black transition-all duration-300 shadow-[0_0_35px_rgba(255,255,255,0.2)] hover:scale-105"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hello Xenotrix Technologies team, I'd like to discuss a project.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-sm border border-white/12 backdrop-blur-md transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Talk to Xenotrix</span>
          </a>
        </div>

        {/* Quick Contact Line */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>{COMPANY_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>{COMPANY_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Response within 24 Hours</span>
          </div>
        </div>

      </div>
    </section>
  );
};
