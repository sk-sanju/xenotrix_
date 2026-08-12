import React from 'react';
import { SEO } from '../../components/common/SEO';
import { Hero } from '../../components/sections/Hero';
import { TrustStrip } from '../../components/sections/TrustStrip';
import { IntroStatement } from '../../components/sections/IntroStatement';
import { WhatWeBuild } from '../../components/sections/WhatWeBuild';
import { FeaturedProducts } from '../../components/sections/FeaturedProducts';
import { WhyXenotrix } from '../../components/sections/WhyXenotrix';
import { TechEcosystem } from '../../components/sections/TechEcosystem';
import { IndustriesGrid } from '../../components/sections/IndustriesGrid';
import { ProcessTimeline } from '../../components/sections/ProcessTimeline';
import { BeliefsSection } from '../../components/sections/BeliefsSection';
import { VisionSection } from '../../components/sections/VisionSection';
import { FAQAccordion } from '../../components/sections/FAQAccordion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HomePage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Xenotrix Technologies",
    "url": "https://xenotrix.in",
    "logo": "https://xenotrix.in/logo.png",
    "description": "Building the digital infrastructure of tomorrow with intelligent software, AI systems, and SaaS platforms."
  };

  return (
    <>
      <SEO
        title="Xenotrix Technologies — Building the Digital Infrastructure of Tomorrow"
        description="Xenotrix Technologies builds intelligent software, AI systems, automation platforms and digital products for ambitious businesses."
        schema={schema}
      />
      <main>
        <Hero />
        <TrustStrip />
        <IntroStatement />
        <WhatWeBuild />
        <FeaturedProducts />
        <WhyXenotrix />
        <TechEcosystem />
        <IndustriesGrid />
        <ProcessTimeline />
        <BeliefsSection />
        <VisionSection />
        <FAQAccordion />

        {/* Bottom CTA Banner */}
        <section className="py-24 bg-[#050505] border-t border-white/10 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 text-center space-y-8 relative z-10">
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              READY TO BUILD WHAT'S NEXT?
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto">
              Schedule a technical scoping assessment with our engineering architecture team.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/20 hover:scale-105 transition-transform"
              >
                <span>Start a Project Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
