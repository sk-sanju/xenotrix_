import React from 'react';
import { SEO } from '../../components/common/SEO';
import { motion } from 'framer-motion';
import { COMPANY_INFO, PRINCIPLES, FOUNDERS } from '../../data/companyData';
import { Terminal, ShieldCheck, Cpu, Code2, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Xenotrix Technologies — Founders & Leadership"
        description="Xenotrix Technologies was co-founded in 2025 by Sanjay S, Abi C R, and Hari Govind in Thrissur, Kerala, India to build intelligent digital infrastructure."
      />
      <div className="pt-32 pb-28 bg-[#050505] relative overflow-hidden">
        
        {/* Header Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>ABOUT XENOTRIX TECHNOLOGIES</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95]">
              WE'RE BUILDING THE TECHNOLOGY COMPANY WE WANTED TO WORK WITH.
            </h1>

            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed font-normal">
              Co-founded in 2025 by Sanjay S, Abi C R, and Hari Govind in Thrissur, Kerala, Xenotrix Technologies was established to deliver enterprise engineering rigor, AI-first architecture, and commercial growth for businesses worldwide.
            </p>
          </div>

          {/* Founders & Leadership Section */}
          <div className="pt-8 border-t border-white/10 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase">FOUNDING TEAM & LEADERSHIP</span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase mt-1">
                  MEET THE CO-FOUNDERS
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
                Led by software engineers and product strategists committed to technical excellence and real business outcomes.
              </p>
            </div>

            {/* 3 Co-Founders Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FOUNDERS.map((founder, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 space-y-6 flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    {/* Initials / Avatar Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${founder.color} p-[1px]`}>
                        <div className="w-full h-full bg-[#050505] rounded-[15px] flex items-center justify-center font-display font-extrabold text-lg text-white">
                          {founder.initials}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-cyan-400">
                        CO-FOUNDER
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                        {founder.name}
                      </h3>
                      <div className="text-xs font-mono text-zinc-400 mt-1">
                        {founder.role}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">Focus & Domain</div>
                      <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                        {founder.focus}
                      </p>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>

                  {/* Skills Pills */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {founder.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Philosophy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/10">
            <div className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">Who We Are</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Headquartered in Thrissur, Kerala, Xenotrix Technologies is an AI-first digital agency and software engineering firm building scalable web applications, mobile platforms (Flutter), AI workflow agents, and commercial SaaS products.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">How We Work</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We operate with an agile-first, asynchronous engineering practice—rigorous code reviews, automated CI/CD pipelines, clear milestone roadmaps, and direct developer collaboration.
              </p>
            </div>
          </div>

          {/* Principles Section */}
          <div className="pt-12 space-y-8">
            <h2 className="font-display font-extrabold text-3xl text-white uppercase border-b border-white/10 pb-4">
              OUR GUIDING PRINCIPLES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRINCIPLES.map((p) => (
                <div key={p.number} className="p-6 rounded-xl bg-[#111116] border border-white/5 space-y-2">
                  <div className="text-xs font-mono text-cyan-400">{p.number} // PRINCIPLE</div>
                  <h4 className="font-display font-bold text-lg text-white">{p.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Banner */}
          <div className="pt-16 border-t border-white/10">
            <div className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-white">Partner With Xenotrix Founders</h3>
                <p className="text-xs sm:text-sm text-zinc-400">Speak directly with our co-founders and senior solution leads about your project goals.</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-cyan-300 transition-colors shrink-0"
              >
                <span>Schedule a Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};
