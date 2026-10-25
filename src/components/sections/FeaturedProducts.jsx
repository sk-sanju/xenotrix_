import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, BarChart3, CreditCard, Smartphone, GraduationCap, Users, Music } from 'lucide-react';
import { PRODUCTS } from '../../data/companyData';

export const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

  const productIcons = {
    xenocrm: BarChart3,
    xenofin: CreditCard,
    xenobiz: Smartphone,
    xenoclass: GraduationCap,
    xenohr: Users,
    xenotune: Music
  };

  return (
    <section id="products" className="py-24 bg-[#f7f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-normal text-3xl sm:text-5xl text-[#1f3038] tracking-tight">
              Our Products
            </h2>
            <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
              Software platforms designed to simplify business, automate operations, and create dependable digital infrastructure.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d7480] hover:text-[#1f3038] transition-colors shrink-0"
          >
            <span>View Complete Product Index</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Selector: Clean Tab Rail (eliminates identical icon cards) */}
        <div className="flex flex-wrap gap-2.5 mb-10" role="tablist">
          {PRODUCTS.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <button
                key={prod.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedProduct(prod)}
                className={`px-5 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1f3038] text-white'
                    : 'bg-[#ecf0f2] text-[#1f3038] hover:bg-[#e2e8eb]'
                }`}
              >
                <span>{prod.name}</span>
                <span className={`text-sm ${isSelected ? 'text-white/70' : 'text-[#5d6b72]'}`}>
                  · {prod.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Showcase Panel for Selected Product */}
        <div className="rounded-xl bg-[#ecf0f2] p-8 sm:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Product Information */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight mb-2">
                  {selectedProduct.name}
                </h3>
                <div className="flex items-center gap-3 text-sm text-[#5d6b72] mb-3">
                  <span className="font-medium text-[#0d7480]">
                    {selectedProduct.category}
                  </span>
                  <span>•</span>
                  <span>Status: <strong className="text-[#1f3038] font-medium">{selectedProduct.statusLabel}</strong></span>
                </div>
                <p className="text-[#0d7480] font-medium text-base mb-3">
                  {selectedProduct.tagline}
                </p>
                <p className="text-[#1f3038] text-base leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="space-y-3 pt-2">
                <div className="text-sm font-medium text-[#1f3038]">
                  Core capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-[#1f3038]">
                      <Check className="w-4 h-4 text-[#0d7480] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {selectedProduct.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded bg-white space-y-1">
                    <div className="text-sm text-[#5d6b72]">{m.label}</div>
                    <div className="text-sm font-semibold text-[#1f3038] tabular-nums truncate">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to={selectedProduct.ctaLink}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#1f3038] text-white font-medium text-sm hover:bg-[#0d7480] transition-colors"
                >
                  <span>Explore {selectedProduct.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-[#1f3038] font-medium text-sm hover:bg-[#e2e8eb] transition-colors"
                >
                  <span>Request Enterprise Demo</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Clean Telemetry Interface Fragment */}
            <div className="lg:col-span-6">
              <div
                data-ui="product-telemetry"
                className="p-6 sm:p-8 rounded-lg bg-[#1f3038] text-white space-y-6"
              >
                
                <div className="flex items-center justify-between pb-3 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>app.xenotrix.in/{selectedProduct.id}</span>
                  </div>
                  <span>Production Stack</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded bg-white/5 space-y-1">
                    <div className="text-sm text-white/70">Active sessions</div>
                    <div className="text-base font-semibold tabular-nums text-white">1,420 / min</div>
                    <div className="text-sm text-emerald-300">99.98% uptime</div>
                  </div>
                  <div className="p-3 rounded bg-white/5 space-y-1">
                    <div className="text-sm text-white/70">Latency</div>
                    <div className="text-base font-semibold text-sky-300 tabular-nums">18.4 ms</div>
                    <div className="text-sm text-white/70">Zero packet drop</div>
                  </div>
                  <div className="p-3 rounded bg-white/5 space-y-1">
                    <div className="text-sm text-white/70">Security</div>
                    <div className="text-base font-semibold text-white tabular-nums">TLS 1.3</div>
                    <div className="text-sm text-white/70">Encrypted</div>
                  </div>
                </div>

                <div className="p-4 rounded bg-white/5 space-y-3">
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span>Engineered Stack</span>
                    <span className="text-sky-300 font-medium">Ready for Enterprise</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {selectedProduct.techStack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-white/10 text-white font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
