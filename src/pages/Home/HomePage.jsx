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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Xenotrix Technologies",
    "url": "https://xenotrix.in",
    "logo": "https://xenotrix.in/assets/logo.jpeg",
    "description": "Xenotrix Technologies builds software products, digital platforms and intelligent technology solutions that help businesses operate smarter, scale faster and grow with confidence.",
    "founder": [
      { "@type": "Person", "name": "Sanjay S" },
      { "@type": "Person", "name": "Abi C R" },
      { "@type": "Person", "name": "Hari Govind" }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thrissur",
      "addressRegion": "Kerala",
      "postalCode": "680001",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <SEO
        title="Xenotrix Technologies — Building Products, Platforms & Digital Solutions"
        description="Xenotrix Technologies builds proprietary software products (XenoCRM, XenoFin, XenoBiz, XenoClass, XenoHR, Xenotune) and custom AI, automation, and enterprise engineering solutions."
        schema={schema}
      />
      <main className="overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Company Value Strip */}
        <TrustStrip />

        {/* 3. Two Pillars: We Build Products / We Build For Businesses */}
        <IntroStatement />

        {/* 4. Products Ecosystem Showcase (All 6 Products) */}
        <FeaturedProducts />

        {/* 5. Technology Services (4 Major Pillars) */}
        <WhatWeBuild />

        {/* 6. Solutions Built Around Your Business */}
        <SolutionsSection />

        {/* 7. Technology Across Industries */}
        <IndustriesGrid />

        {/* 8. Engineering With Modern Technology */}
        <TechEcosystem />

        {/* 9. Why Xenotrix (6 Differentiators) */}
        <WhyXenotrix />

        {/* 10. Selected Work / Case Studies */}
        <SelectedWorkSection />

        {/* 11. From Idea to Impact (Development Process) */}
        <ProcessTimeline />

        {/* 12. Corporate About Xenotrix */}
        <CorporateAboutSection />

        {/* 13. Frequently Asked Questions */}
        <FAQAccordion />

        {/* 14. Final CTA Section */}
        <FinalCTASection />
      </main>
    </>
  );
};
