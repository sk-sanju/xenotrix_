import React from 'react';
import { SEO } from '../../components/common/SEO';
import { COMPANY_INFO, WHY_XENOTRIX } from '../../data/companyData';
import { Terminal, ShieldCheck, Cpu, Code2, Users, ArrowRight, Sparkles, CheckCircle2, Globe2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Xenotrix Technologies — Company Profile, Leadership & Engineering Culture"
        description="Learn about Xenotrix Technologies, a technology company founded in 2025 by Sanjay S, Abi C R, and Hari Govind in Thrissur, Kerala. Building proprietary SaaS products, AI automation, and enterprise software."
        canonical="https://xenotrix.in/about"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'About', item: '/about' }
        ]}
      />
      <div className="pt-32 pb-28 bg-[#05070D] relative overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          {/* Header Hero */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORPORATE PROFILE // EST. 2025</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.02]">
              Building Technology That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                Moves Businesses Forward.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-normal">
              {COMPANY_INFO.description}
            </p>
          </div>

          {/* Corporate Stats / Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-6 rounded-2xl bg-[#090D18] border border-white/10 space-y-1">
              <div className="text-xs font-mono text-zinc-400 uppercase">HEADQUARTERS</div>
              <div className="text-xl font-bold text-white">Thiruvilwamala, Thrissur</div>
              <div className="text-xs text-cyan-400 font-mono">Kerala, India (680594)</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#090D18] border border-white/10 space-y-1">
              <div className="text-xs font-mono text-zinc-400 uppercase">OPERATING MODEL</div>
              <div className="text-xl font-bold text-white">Global Remote</div>
              <div className="text-xs text-cyan-400 font-mono">Distributed Teams</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#090D18] border border-white/10 space-y-1">
              <div className="text-xs font-mono text-zinc-400 uppercase">PROPRIETARY SAAS</div>
              <div className="text-xl font-bold text-white">6 Platforms</div>
              <div className="text-xs text-cyan-400 font-mono">Active Ecosystem</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#090D18] border border-white/10 space-y-1">
              <div className="text-xs font-mono text-zinc-400 uppercase">SYSTEM RUNTIME</div>
              <div className="text-xl font-bold text-emerald-400">99.98%</div>
              <div className="text-xs text-zinc-500 font-mono">Monitored SLA</div>
            </div>
          </div>

          {/* Founders & Leadership Section */}
          <div className="pt-8 border-t border-white/10 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  FOUNDING LEADERSHIP & ARCHITECTS
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
                  Meet the Co-Founders
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
                Led by systems engineers and product strategists committed to software rigor, clean architecture, and commercial impact.
              </p>
            </div>

            {/* 3 Co-Founders Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {COMPANY_INFO.founders.map((founder, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#090D18] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 space-y-6 flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-5">
                    {/* Avatar Initials Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${founder.color} p-[1px]`}>
                        <div className="w-full h-full bg-[#05070D] rounded-[15px] flex items-center justify-center font-display font-extrabold text-lg text-white">
                          {founder.initials}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 uppercase">
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

                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <div className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">Technical Domain</div>
                      <p className="text-xs text-zinc-200 font-medium leading-relaxed">
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
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Differentiators Grid */}
          <div className="pt-12 border-t border-white/10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                OUR ENGINEERING DNA
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Core Principles Behind Every Line of Code
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_XENOTRIX.map((p, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#090D18] border border-white/8 space-y-3">
                  <div className="text-xs font-mono text-cyan-400 font-bold">{p.number} // PRINCIPLE</div>
                  <h3 className="font-bold text-lg text-white">{p.title}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#090D18] border border-white/12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Partner Directly With Our Founding Leads
              </h3>
              <p className="text-sm text-zinc-300">
                Discuss system architecture, platform blueprints, or custom AI development with our team.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-cyan-300 hover:text-black transition-all shrink-0"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
