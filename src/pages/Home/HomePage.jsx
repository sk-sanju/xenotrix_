import React from 'react';
import { SEO } from '../../components/common/SEO';
import { Hero } from '../../components/sections/Hero';
import { TrustStrip } from '../../components/sections/TrustStrip';
import { IntroStatement } from '../../components/sections/IntroStatement';
import { FeaturedProducts } from '../../components/sections/FeaturedProducts';
import { WhatWeBuild } from '../../components/sections/WhatWeBuild';
import { SolutionsSection } from '../../components/sections/SolutionsSection';
import { IndustriesGrid } from '../../components/sections/IndustriesGrid';
import { TechEcosystem } from '../../components/sections/TechEcosystem';
import { WhyXenotrix } from '../../components/sections/WhyXenotrix';
import { SelectedWorkSection } from '../../components/sections/SelectedWorkSection';
import { ProcessTimeline } from '../../components/sections/ProcessTimeline';
import { CorporateAboutSection } from '../../components/sections/CorporateAboutSection';
import { FAQAccordion } from '../../components/sections/FAQAccordion';
import { FinalCTASection } from '../../components/sections/FinalCTASection';

export const HomePage = () => {
  return (
    <>
      <SEO
        title="Xenotrix Technologies — Building Products, Platforms & Digital Solutions | Kerala & Global"
        description="Xenotrix Technologies builds proprietary software products (XenoCRM, XenoFin, XenoBiz, XenoClass, XenoHR, Xenotune) and custom AI, automation, and enterprise engineering solutions. Co-founded in Thrissur, Kerala by Sanjay S, Abi C R, and Hari Govind."
      />
      <main className="overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Company Value Strip */}
        <TrustStrip />

        {/* 3. Two Pillars: We Build Products / We Build For Businesses */}
        <div className="optimize-render">
          <IntroStatement />
        </div>

        {/* 4. Products Ecosystem Showcase (All 6 Products) */}
        <div className="optimize-render">
          <FeaturedProducts />
        </div>

        {/* 5. Technology Services (4 Major Pillars) */}
        <div className="optimize-render">
          <WhatWeBuild />
        </div>

        {/* 6. Solutions Built Around Your Business */}
        <div className="optimize-render">
          <SolutionsSection />
        </div>

        {/* 7. Technology Across Industries */}
        <div className="optimize-render">
          <IndustriesGrid />
        </div>

        {/* 8. Engineering With Modern Technology */}
        <div className="optimize-render">
          <TechEcosystem />
        </div>

        {/* 9. Why Xenotrix (6 Differentiators) */}
        <div className="optimize-render">
          <WhyXenotrix />
        </div>

        {/* 10. Selected Work / Case Studies */}
        <div className="optimize-render">
          <SelectedWorkSection />
        </div>

        {/* 11. From Idea to Impact (Development Process) */}
        <div className="optimize-render">
          <ProcessTimeline />
        </div>

        {/* 12. Corporate About Xenotrix */}
        <div className="optimize-render">
          <CorporateAboutSection />
        </div>

        {/* 13. Frequently Asked Questions */}
        <div className="optimize-render">
          <FAQAccordion />
        </div>

        {/* 14. Final CTA Section */}
        <div className="optimize-render">
          <FinalCTASection />
        </div>
      </main>
    </>
  );
};
