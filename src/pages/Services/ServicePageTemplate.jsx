import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { getServiceBySlug, SERVICE_CATEGORIES, CASE_STUDIES } from '../../data/companyData';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Check, 
  Layers,
  HelpCircle,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { NotFoundPage } from '../NotFoundPage';

export const ServicePageTemplate = () => {
  const { slug } = useParams();
  
  // Find matching service (pillar or dedicated service)
  const service = getServiceBySlug(slug) || SERVICE_CATEGORIES[0];
  const relatedCaseStudy = CASE_STUDIES[0];

  const canonicalUrl = `https://xenotrix.in/services/${service.slug}`;

  // Breadcrumbs definition
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: service.title, item: `/services/${service.slug}` }
  ];

  // Service Schema.org JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    "name": service.title,
    "description": service.metaDescription || service.description,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://xenotrix.in/#organization",
      "name": "Xenotrix Technologies"
    },
    "serviceType": service.category,
    "areaServed": (service.targetLocations || ["Kerala", "Thrissur", "Kochi", "Chennai", "India", "UAE", "Global"]).map(loc => ({
      "@type": "AdministrativeArea",
      "name": loc
    })),
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  // FAQ Schema if FAQs exist
  const customSchemas = [serviceSchema];
  if (service.faqs && service.faqs.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };
    customSchemas.push(faqSchema);
  }

  return (
    <>
      <SEO
        title={service.metaTitle || `${service.title} — Xenotrix Technologies`}
        description={service.metaDescription || service.description}
        canonical={canonicalUrl}
        keywords={service.keywords || "Xenotrix Technologies, Software Development Kerala, AI Solutions"}
        breadcrumbs={breadcrumbs}
        schema={customSchemas}
      />
      
      <div className="pt-32 pb-28 bg-[#05070D] relative overflow-hidden min-h-screen">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
          
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Link to="/" className="hover:text-cyan-400 transition-colors">HOME</Link>
            <span className="text-zinc-600">/</span>
            <Link to="/services" className="hover:text-cyan-400 transition-colors">SERVICES</Link>
            <span className="text-zinc-600">/</span>
            <span className="text-cyan-300 font-semibold uppercase">{service.slug}</span>
          </nav>

          {/* Service Hero */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/80 border border-violet-800/40 text-xs font-mono text-violet-300 font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>CORE SERVICE // {service.category}</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.02]">
              {service.title}
            </h1>

            <p className="text-lg sm:text-2xl text-violet-300 font-medium leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              {service.description}
            </p>

            {/* Target Location Badges */}
            {service.targetLocations && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1 mr-1">
                  <MapPin className="w-3 h-3 text-cyan-400" /> SERVING:
                </span>
                {service.targetLocations.map((loc, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-cyan-300 hover:text-black transition-all shadow-xl shadow-cyan-500/10"
              >
                <span>Request {service.title} Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919995544316?text=Hi%20Xenotrix%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#0D121F] border border-white/12 text-zinc-200 text-sm font-semibold hover:border-emerald-500/40 hover:text-emerald-300 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us Direct</span>
              </a>
            </div>
          </div>

          {/* Problem vs Solution Matrix */}
          {(service.problemStatement || service.solutionStatement) && (
            <div className="pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#090D18]/80 border border-red-500/20 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest font-semibold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Industry Challenge</span>
                </div>
                <h2 className="font-display font-bold text-xl text-white">Why Standard Approaches Fail</h2>
                <p className="text-sm text-zinc-300 leading-relaxed">{service.problemStatement}</p>
              </div>

              <div className="p-8 rounded-3xl bg-[#090D18]/80 border border-emerald-500/20 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Xenotrix Advantage</span>
                </div>
                <h2 className="font-display font-bold text-xl text-white">How We Engineer Results</h2>
                <p className="text-sm text-zinc-300 leading-relaxed">{service.solutionStatement}</p>
              </div>
            </div>
          )}

          {/* Capabilities Grid */}
          <div className="pt-12 border-t border-white/10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                CORE CAPABILITIES
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Detailed Engineering & Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.services.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#090D18] border border-white/8 hover:border-violet-500/30 transition-all space-y-4 shadow-xl group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400">0{idx + 1}</span>
                  </div>

                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {sub.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {sub.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Concrete Business Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="pt-12 border-t border-white/10 space-y-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                BUSINESS IMPACT
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Tangible Value Delivered To Your Organization
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#090D18] border border-white/8 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-zinc-200 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack Tags */}
          <div className="pt-12 border-t border-white/10 space-y-6">
            <h3 className="font-display font-bold text-2xl text-white">
              Architectural Stack & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {service.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-[#0D121F] border border-white/10 text-xs font-mono text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* FAQs Section */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="pt-12 border-t border-white/10 space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" /> FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  Common Questions About {service.title}
                </h2>
              </div>
              <div className="space-y-4 max-w-4xl">
                {service.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 rounded-2xl bg-[#090D18] border border-white/8 space-y-2"
                  >
                    <h3 className="font-bold text-base text-white">{faq.q}</h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Case Study Card */}
          <div className="pt-12 border-t border-white/10 space-y-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              RELATED CASE STUDY
            </span>
            <div className="p-8 sm:p-10 rounded-3xl bg-[#090D18] border border-white/12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-mono text-zinc-400 uppercase">{relatedCaseStudy.category}</span>
                <h3 className="font-display font-bold text-2xl text-white">{relatedCaseStudy.title}</h3>
                <p className="text-sm text-zinc-300">{relatedCaseStudy.summary}</p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  to={`/case-studies/${relatedCaseStudy.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-cyan-300 hover:text-black transition-all"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Final Bottom Conversion CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-violet-950/40 via-cyan-950/40 to-blue-950/40 border border-white/10 text-center space-y-6">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
              Ready to Accelerate Your Project with Xenotrix?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
              Schedule a discovery session with our founding architects. We evaluate your requirements, map system architectures, and deliver clear execution timelines.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-cyan-300 hover:text-black transition-all shadow-xl shadow-cyan-500/10"
              >
                Start Your Project Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-xl bg-[#0D121F] border border-white/12 text-zinc-200 text-sm font-semibold hover:border-white/20 transition-all"
              >
                Browse All Services
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
