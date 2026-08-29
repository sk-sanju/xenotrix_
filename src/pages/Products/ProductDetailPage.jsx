import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { PRODUCTS } from '../../data/companyData';
import { 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Radio, 
  Cpu, 
  Layers,
  CheckCircle2,
  Lock,
  Zap,
  Globe2
} from 'lucide-react';
import { NotFoundPage } from '../NotFoundPage';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return <NotFoundPage />;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "applicationCategory": product.category,
    "operatingSystem": "Web, Cloud, Cross-Platform",
    "description": product.description,
    "publisher": {
      "@type": "Organization",
      "name": "Xenotrix Technologies"
    }
  };

  return (
    <>
      <SEO
        title={`${product.name} — ${product.tagline} | Xenotrix Technologies`}
        description={product.description}
        schema={schema}
      />
      <div className="pt-32 pb-28 bg-[#05070D] relative overflow-hidden min-h-screen">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          {/* Breadcrumb & Badges */}
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/products" className="text-xs font-mono text-cyan-400 hover:text-cyan-300">
                ← PRODUCTS ECOSYSTEM
              </Link>
              <span className="text-zinc-600">/</span>
              <span className="text-xs font-mono text-zinc-400 uppercase">{product.category}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PROPRIETARY PLATFORM // {product.statusLabel}</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.02]">
              {product.name}
            </h1>

            <p className="text-lg sm:text-2xl text-cyan-300 font-medium leading-relaxed">
              {product.tagline}
            </p>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              {product.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-cyan-300 hover:text-black transition-all shadow-xl shadow-cyan-500/10"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/+919995544316?text=${encodeURIComponent(`Hello Xenotrix team, I'd like more information about ${product.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/10 transition-all"
              >
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
            {product.metrics.map((m, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-[#090D18] border border-white/10 space-y-2 shadow-xl">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{m.label}</div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">{m.value}</div>
              </div>
            ))}
          </div>

          {/* SaaS UI Mockup View */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#080B14] border border-white/12 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-zinc-400 ml-2">
                  app.xenotrix.in/{product.id}/console
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>OPERATIONAL NODE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Enterprise System Architecture
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {product.overview}
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <Lock className="w-4 h-4 text-cyan-400" />
                    <span>Role-Based Access Control (RBAC) & AES-256 Encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>Sub-Second Realtime Synchronization over WebSockets</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <Globe2 className="w-4 h-4 text-cyan-400" />
                    <span>Multi-Region Cloud Hosting with 99.98% High Availability</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded-2xl bg-black/60 border border-white/8 space-y-4 font-mono text-xs">
                <div className="text-zinc-400 border-b border-white/5 pb-2 flex justify-between">
                  <span>RUNTIME TELEMETRY</span>
                  <span className="text-cyan-400">LIVE FEED</span>
                </div>
                <div className="space-y-2 text-zinc-300">
                  <div className="flex justify-between p-2 rounded bg-white/5">
                    <span>DATABASE CLUSTER:</span>
                    <span className="text-emerald-400">HEALTHY (100%)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-white/5">
                    <span>API GATEWAY LATENCY:</span>
                    <span className="text-cyan-300">&lt; 35ms</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-white/5">
                    <span>MULTI-TENANCY ISOLATION:</span>
                    <span className="text-violet-300">ENFORCED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="pt-10 border-t border-white/10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                SYSTEM CAPABILITIES
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Engineered Capabilities of {product.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#090D18] border border-white/8 hover:border-cyan-500/30 transition-all space-y-3 shadow-lg"
                >
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-base text-white">{feat}</h4>
                  <p className="text-xs text-zinc-400">
                    Built for enterprise workflows with automated edge case handling and data validation.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Underlying Architecture Tech Stack */}
          <div className="pt-10 border-t border-white/10 space-y-6">
            <h3 className="font-display font-bold text-2xl text-white">
              Underlying Technology Architecture
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {product.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-[#0D121F] border border-white/10 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-violet-950/40 border border-cyan-500/30 text-center space-y-6">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Ready to Deploy {product.name} for Your Business?
            </h3>
            <p className="text-base text-zinc-300 max-w-xl mx-auto">
              Schedule a direct consultation with our engineering team to assess integration blueprints and pricing models.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-cyan-300 hover:text-black transition-all"
              >
                <span>Start Deployment Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};
