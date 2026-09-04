import React from 'react';
import { SEO } from '../../components/common/SEO';
import { PRODUCTS } from '../../data/companyData';
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
  Music,
  Terminal,
  Sparkles
} from 'lucide-react';

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
      />
      <div className="pt-32 pb-28 bg-[#05070D] relative overflow-hidden min-h-screen">
        {/* Glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <Layers className="w-3.5 h-3.5" />
              <span>PROPRIETARY SOFTWARE ECOSYSTEM</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
              Products Engineered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                For Modern Operations.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-normal">
              Commercial software platforms designed by Xenotrix Technologies to simplify operations, automate complex workflows, and unlock digital performance.
            </p>
          </div>

          {/* 6 Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            {PRODUCTS.map((product) => {
              const Icon = productIcons[product.id] || Layers;
              return (
                <div
                  key={product.id}
                  className="p-8 rounded-3xl bg-[#090D18] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 space-y-6 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                        product.isUpcoming ? 'bg-amber-950/80 text-amber-300 border-amber-800/40' : 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40'
                      }`}>
                        {product.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400/90">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/5">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-zinc-400">
                      STATUS: {product.statusLabel}
                    </span>
                    <Link
                      to={product.ctaLink}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore {product.name}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
};
