import React from 'react';
import { SEO } from '../../components/common/SEO';
import { PRODUCTS } from '../../data/companyData';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProductsIndexPage = () => {
  return (
    <>
      <SEO
        title="Commercial SaaS Products — Xenotrix Technologies"
        description="Explore commercial SaaS platforms built by Xenotrix: XenoCRM and Xenotune."
      />
      <div className="pt-32 pb-28 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PROPRIETARY SAAS SUITE</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              BUILT BY XENOTRIX
            </h1>

            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed font-normal">
              Commercial software platforms engineered by Xenotrix to solve core business operating and cognitive performance challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 space-y-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase">{product.badge}</span>
                  <h3 className="font-display font-extrabold text-3xl text-white group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-zinc-300 font-medium">
                    {product.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    to={product.ctaLink}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors"
                  >
                    <span>View Product Blueprint</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
