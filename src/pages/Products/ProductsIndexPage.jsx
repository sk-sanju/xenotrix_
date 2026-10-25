import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  ArrowRight, 
  Check, 
  BarChart3, 
  CreditCard, 
  Smartphone, 
  GraduationCap, 
  Users, 
  Music
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { PRODUCTS } from '../../data/companyData';

export const ProductsIndexPage = () => {
  const productIcons = {
    xenocrm: BarChart3,
    xenofin: CreditCard,
    xenobiz: Smartphone,
    xenoclass: GraduationCap,
    xenohr: Users,
    xenotune: Music
  };

  return (
    <>
      <SEO
        title="Proprietary Technology Products — Xenotrix Technologies"
        description="Explore the Xenotrix product ecosystem: XenoCRM, XenoFin, XenoBiz, XenoClass, XenoHR, and Xenotune."
        canonical="https://xenotrix.in/products"
      />
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Header */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="font-normal text-4xl sm:text-5xl lg:text-6xl text-[#1f3038] tracking-tight leading-[1.06]">
              Commercial software suites built for <br />modern operations.
            </h1>
            <p className="text-lg sm:text-xl text-[#5d6b72] leading-relaxed">
              Proprietary platforms engineered by Xenotrix Technologies to eliminate administrative drag, automate complex operational workflows, and accelerate commercial growth.
            </p>
          </div>

          {/* 6 Products Grid */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                Proprietary Software Ecosystem
              </h2>
              <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                Integrated commercial systems available for rapid enterprise deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => {
                const Icon = productIcons[product.id] || Layers;
                return (
                  <div
                    key={product.id}
                    className="p-8 rounded-xl bg-[#ecf0f2] hover:bg-[#e2e8eb] transition-colors space-y-6 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded bg-[#1f3038] text-white flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-[#0d7480] bg-[#f7f9fa] px-3 py-1 rounded">
                          {product.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-semibold text-2xl text-[#1f3038]">
                          {product.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#0d7480] mt-1">
                          {product.tagline}
                        </p>
                      </div>

                      <p className="text-sm text-[#5d6b72] leading-relaxed">
                        {product.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#d8e0e4]">
                        {product.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#1f3038] font-medium">
                            <Check className="w-4 h-4 text-[#0d7480] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#d8e0e4] flex items-center justify-between">
                      <span className="text-xs text-[#5d6b72]">
                        {product.statusLabel}
                      </span>
                      <Link
                        to={product.ctaLink}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d7480] group-hover:text-[#1f3038] transition-colors"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Banner */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038]">
                Need a customized platform license?
              </h3>
              <p className="text-sm sm:text-base text-[#5d6b72]">
                We deploy our proprietary platforms as managed dedicated instances with tailored integrations into your existing ERP, payment gateways, and databases.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors shrink-0"
            >
              <span>Schedule Architecture Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductsIndexPage;
