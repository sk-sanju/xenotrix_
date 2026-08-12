import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { PRODUCTS } from '../../data/companyData';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Terminal, Play, Pause, Volume2 } from 'lucide-react';
import { NotFoundPage } from '../NotFoundPage';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return <NotFoundPage />;
  }

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SEO
        title={`${product.name} — ${product.badge}`}
        description={product.description}
      />
      <div className="pt-32 pb-28 bg-[#050505] relative overflow-hidden">
        
        {/* Product Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>COMMERCIAL SAAS PLATFORM // {product.name.toUpperCase()}</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-[0.95]">
              {product.name}
            </h1>

            <p className="text-base sm:text-2xl text-cyan-300 font-medium leading-relaxed">
              {product.tagline}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {product.description}
            </p>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            {product.metrics.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0A0A0D] border border-white/10 space-y-1">
                <div className="text-xs font-mono text-zinc-500 uppercase">{m.label}</div>
                <div className="text-2xl font-display font-bold text-white">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Features Detail */}
          <div className="pt-12 border-t border-white/10 space-y-8">
            <h2 className="font-display font-extrabold text-3xl text-white uppercase">
              PLATFORM CAPABILITIES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feat, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#111116] border border-white/5 space-y-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <h4 className="font-display font-semibold text-base text-white">{feat}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-12 border-t border-white/10 space-y-6">
            <h2 className="font-display font-extrabold text-2xl text-white uppercase">
              UNDERLYING ARCHITECTURE
            </h2>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-[#111116] border border-white/10 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </>
  );
};
