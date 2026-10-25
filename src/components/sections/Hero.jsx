import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../../data/companyData';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const heroProducts = PRODUCTS.slice(0, 4); // XenoCRM, XenoFin, XenoBiz, XenoClass
  const activeProduct = heroProducts[activeTab];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#f7f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Headline & Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-8 text-left"
          >
            <h1 className="font-normal text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.04] tracking-tight text-[#1f3038] max-w-xl">
              Software systems <br />built for scale.
            </h1>

            <p className="text-lg sm:text-xl text-[#1f3038] font-normal leading-relaxed max-w-lg">
              Xenotrix Technologies architects proprietary business suites and custom engineering systems for forward-thinking enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-[#0d7480] hover:bg-[#1f3038] text-white font-medium text-sm transition-colors"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#ecf0f2] hover:bg-[#e2e8eb] text-[#1f3038] font-medium text-sm transition-colors"
              >
                <span>Talk to Xenotrix</span>
                <ChevronRight className="w-4 h-4 text-[#5d6b72]" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 pt-6 text-sm text-[#1f3038] font-medium">
              <span>Proprietary business OS</span>
              <span>Custom enterprise code</span>
              <span>Autonomous automation</span>
            </div>
          </motion.div>

          {/* Working Product Console Fragment */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <div
              data-ui="hero-product-fragment"
              className="p-6 sm:p-8 rounded-xl bg-[#ecf0f2] text-[#1f3038] space-y-6"
            >
              {/* Product Header & Live Switcher */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-[#5d6b72] font-medium">Ecosystem console</span>
                  <div className="text-lg font-semibold text-[#1f3038]">
                    {activeProduct.name}
                  </div>
                </div>
                <div className="text-sm text-[#0d7480] font-medium">
                  {activeProduct.badge}
                </div>
              </div>

              {/* Product Selector Buttons */}
              <div className="grid grid-cols-4 gap-2 bg-[#f7f9fa] p-1.5 rounded-lg">
                {heroProducts.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveTab(idx)}
                    className={`py-2 px-3 rounded text-sm font-medium transition-colors text-center cursor-pointer ${
                      activeTab === idx
                        ? 'bg-[#1f3038] text-white'
                        : 'text-[#5d6b72] hover:text-[#1f3038]'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              {/* Active Product Preview */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-lg bg-[#f7f9fa] space-y-2">
                    <div className="text-sm font-medium text-[#1f3038]">
                      {activeProduct.tagline}
                    </div>
                    <p className="text-sm text-[#5d6b72] leading-relaxed">
                      {activeProduct.description}
                    </p>
                  </div>

                  {/* Architecture Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {activeProduct.metrics.map((m, i) => (
                      <div key={i} className="p-3.5 rounded-lg bg-[#f7f9fa] space-y-1">
                        <div className="text-sm text-[#5d6b72]">{m.label}</div>
                        <div className="text-sm font-semibold text-[#1f3038] tabular-nums">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-sm text-[#5d6b72]">
                    <span className="font-medium text-[#1f3038]">Architecture:</span>
                    {activeProduct.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#f7f9fa] text-[#1f3038]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      to={activeProduct.ctaLink}
                      className="flex items-center justify-between w-full px-4 py-3 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white text-sm font-medium transition-colors group"
                    >
                      <span>Explore {activeProduct.name} architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Live Status */}
              <div className="flex items-center justify-between text-sm text-[#5d6b72] pt-2">
                <span>Multi-tenant architecture</span>
                <span className="text-[#0d7480] font-medium">99.98% high availability</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
