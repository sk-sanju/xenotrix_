import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  Lock, 
  Zap, 
  Globe2, 
  MessageSquare,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { PRODUCTS } from '../../data/companyData';
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

  const canonicalUrl = `https://xenotrix.in/products/${product.id}`;
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Products', item: '/products' },
    { name: product.name, item: `/products/${product.id}` }
  ];

  return (
    <>
      <SEO
        title={`${product.name} — ${product.tagline} | Xenotrix Technologies`}
        description={product.description}
        canonical={canonicalUrl}
        breadcrumbs={breadcrumbs}
        schema={schema}
      />
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#5d6b72]">
            <Link to="/" className="hover:text-[#0d7480] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#0d7480] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#1f3038] font-medium">{product.name}</span>
          </nav>

          {/* Product Header */}
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-[#0d7480]">
                {product.category}
              </span>
              <span className="text-xs text-[#5d6b72]">•</span>
              <span className="text-xs font-medium text-[#1f3038] bg-[#ecf0f2] px-2.5 py-0.5 rounded">
                {product.statusLabel}
              </span>
            </div>

            <h1 className="font-normal text-4xl sm:text-5xl lg:text-6xl text-[#1f3038] tracking-tight leading-[1.06]">
              {product.name}
            </h1>

            <p className="text-lg sm:text-xl text-[#1f3038] font-medium leading-relaxed">
              {product.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
              {product.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/+919995544316?text=${encodeURIComponent(`Hello Xenotrix team, I'd like more information about ${product.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#ecf0f2] hover:bg-[#e2e8eb] text-[#1f3038] font-medium text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#0d7480]" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.metrics.map((m, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-xl bg-[#ecf0f2] space-y-2">
                <div className="text-xs text-[#5d6b72] font-medium">{m.label}</div>
                <div className="text-2xl sm:text-3xl font-semibold text-[#1f3038]">{m.value}</div>
              </div>
            ))}
          </div>

          {/* System Console Fragment */}
          <div data-ui="product-console" className="p-6 sm:p-10 rounded-xl bg-[#ecf0f2] space-y-6">
            <div className="flex items-center justify-between border-b border-[#d8e0e4] pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#d8e0e4]" />
                <div className="w-3 h-3 rounded-full bg-[#d8e0e4]" />
                <div className="w-3 h-3 rounded-full bg-[#d8e0e4]" />
                <span className="text-xs text-[#5d6b72] font-medium ml-2">
                  app.xenotrix.in/{product.id}/console
                </span>
              </div>
              <div className="text-xs font-semibold text-[#0d7480]">
                Active Production Runtime
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-semibold text-[#1f3038]">
                  Enterprise System Architecture
                </h3>
                <p className="text-sm sm:text-base text-[#5d6b72] leading-relaxed">
                  {product.overview}
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-sm text-[#1f3038]">
                    <Lock className="w-4 h-4 text-[#0d7480]" />
                    <span>Role-Based Access Control (RBAC) & AES-256 Encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#1f3038]">
                    <Zap className="w-4 h-4 text-[#0d7480]" />
                    <span>Sub-Second Realtime Synchronization over WebSockets</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#1f3038]">
                    <Globe2 className="w-4 h-4 text-[#0d7480]" />
                    <span>Multi-Region Cloud Hosting with 99.98% High Availability</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-lg bg-[#f7f9fa] space-y-3 text-xs">
                <div className="text-[#5d6b72] border-b border-[#ecf0f2] pb-2 flex justify-between font-medium">
                  <span>Runtime Telemetry</span>
                  <span className="text-[#0d7480]">Live Node</span>
                </div>
                <div className="space-y-2 text-[#1f3038]">
                  <div className="flex justify-between p-2 rounded bg-[#ecf0f2]">
                    <span className="font-medium">Database Cluster:</span>
                    <span className="font-semibold text-[#0d7480]">Healthy (100%)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-[#ecf0f2]">
                    <span className="font-medium">API Gateway Latency:</span>
                    <span className="font-semibold text-[#1f3038]">&lt; 35ms</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-[#ecf0f2]">
                    <span className="font-medium">Multi-Tenancy Isolation:</span>
                    <span className="font-semibold text-[#1f3038]">Enforced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                System Capabilities
              </h2>
              <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                Core operational features built into {product.name} to maximize automation and team output.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#ecf0f2] space-y-3"
                >
                  <div className="w-8 h-8 rounded bg-[#1f3038] text-white flex items-center justify-center font-bold text-xs">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-base text-[#1f3038]">{feat}</h4>
                  <p className="text-sm text-[#5d6b72] leading-relaxed">
                    Built for enterprise workflows with automated edge case handling and data validation.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Underlying Architecture Tech Stack */}
          <div className="space-y-6">
            <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038] tracking-tight">
              Underlying Technology Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-[#ecf0f2] text-sm font-medium text-[#1f3038]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA Box */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038]">
                Ready to deploy {product.name}?
              </h3>
              <p className="text-sm sm:text-base text-[#5d6b72]">
                Schedule a direct consultation with our engineering team to assess integration blueprints, customization scopes, and deployment timelines.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors shrink-0"
            >
              <span>Start Deployment Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
