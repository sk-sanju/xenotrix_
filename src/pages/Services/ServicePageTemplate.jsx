import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  MapPin, 
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { getServiceBySlug, SERVICE_CATEGORIES, CASE_STUDIES } from '../../data/companyData';
import { NotFoundPage } from '../NotFoundPage';

export const ServicePageTemplate = () => {
  const { slug } = useParams();
  
  // Find matching service (pillar or dedicated service)
  const service = getServiceBySlug(slug) || SERVICE_CATEGORIES.find(c => c.slug === slug);
  
  if (!service) {
    return <NotFoundPage />;
  }

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
      
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#5d6b72]">
            <Link to="/" className="hover:text-[#0d7480] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#0d7480] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#1f3038] font-medium">{service.title}</span>
          </nav>

          {/* Service Hero */}
          <div className="space-y-6 max-w-3xl">
            <div className="text-xs font-semibold text-[#0d7480]">
              {service.category || 'Specialized Engineering'}
            </div>

            <h1 className="font-normal text-4xl sm:text-5xl lg:text-6xl text-[#1f3038] tracking-tight leading-[1.06]">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#1f3038] font-medium leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
              {service.description}
            </p>

            {/* Target Location Badges */}
            {service.targetLocations && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs text-[#5d6b72] flex items-center gap-1 mr-1">
                  <MapPin className="w-3.5 h-3.5 text-[#0d7480]" /> Serving:
                </span>
                {service.targetLocations.map((loc, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#ecf0f2] text-xs font-medium text-[#1f3038]"
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors"
              >
                <span>Request Scoping & Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919995544316?text=Hi%20Xenotrix%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#ecf0f2] hover:bg-[#e2e8eb] text-[#1f3038] font-medium text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#0d7480]" />
                <span>WhatsApp Directly</span>
              </a>
            </div>
          </div>

          {/* Problem vs Solution Matrix */}
          {(service.problemStatement || service.solutionStatement) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-xl bg-[#ecf0f2] space-y-4">
                <div className="text-xs font-semibold text-[#5d6b72]">
                  The Operational Challenge
                </div>
                <h2 className="font-semibold text-xl text-[#1f3038]">Why Standard Approaches Fail</h2>
                <p className="text-sm sm:text-base text-[#5d6b72] leading-relaxed">{service.problemStatement}</p>
              </div>

              <div className="p-8 rounded-xl bg-[#ecf0f2] space-y-4">
                <div className="text-xs font-semibold text-[#0d7480]">
                  The Xenotrix Architecture
                </div>
                <h2 className="font-semibold text-xl text-[#1f3038]">How We Engineer Results</h2>
                <p className="text-sm sm:text-base text-[#5d6b72] leading-relaxed">{service.solutionStatement}</p>
              </div>
            </div>
          )}

          {/* Capabilities Grid */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                Engineered Deliverables & Scope
              </h2>
              <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                Specific architectural modules and technical implementations included in this practice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(service.services || []).map((sub, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-[#ecf0f2] space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded bg-[#1f3038] text-white flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </span>
                    </div>

                    <h3 className="font-semibold text-lg text-[#1f3038]">
                      {sub.name}
                    </h3>

                    <p className="text-sm text-[#5d6b72] leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Concrete Business Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                  Business Value Delivered
                </h2>
                <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                  Measurable commercial and technical improvements realized upon deployment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-[#ecf0f2] flex items-start gap-4">
                    <div className="w-6 h-6 rounded bg-[#1f3038] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base text-[#1f3038] font-medium leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack Tags */}
          <div className="space-y-6">
            <h3 className="font-normal text-2xl sm:text-3xl text-[#1f3038] tracking-tight">
              Architectural Stack & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {(service.tech || []).map((t, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-[#ecf0f2] text-sm font-medium text-[#1f3038]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* FAQs Section */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                  Answers to common technical, timeline, and scoping questions regarding {service.title}.
                </p>
              </div>

              <div className="space-y-4 max-w-4xl">
                {service.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 rounded-xl bg-[#ecf0f2] space-y-2"
                  >
                    <h3 className="font-semibold text-base sm:text-lg text-[#1f3038]">{faq.q}</h3>
                    <p className="text-sm text-[#5d6b72] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Case Study Card */}
          <div className="space-y-6">
            <div className="text-xs font-semibold text-[#0d7480]">
              Verified Proof
            </div>
            <div className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-2">
                <span className="text-xs text-[#5d6b72]">{relatedCaseStudy.category}</span>
                <h3 className="font-semibold text-2xl text-[#1f3038]">{relatedCaseStudy.title}</h3>
                <p className="text-sm sm:text-base text-[#5d6b72] leading-relaxed">{relatedCaseStudy.summary}</p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  to={`/case-studies/${relatedCaseStudy.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Final Bottom Conversion CTA */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-normal text-2xl sm:text-3xl text-[#1f3038]">
                Ready to engineer your {service.title}?
              </h2>
              <p className="text-sm sm:text-base text-[#5d6b72]">
                Schedule a discovery session with our founding architects. We evaluate your requirements, map system architectures, and deliver clear execution timelines.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServicePageTemplate;
