import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../../data/companyData';

export const SEO = ({
  title = `${COMPANY_INFO.name} — Building Products, Platforms & Digital Solutions`,
  description = COMPANY_INFO.description,
  canonical = "https://xenotrix.in/",
  keywords = "Xenotrix Technologies, Web Development Kerala, Software Development Thrissur, Mobile App Development Kerala, Flutter Apps India, AI Solutions Kerala, WhatsApp Automation, CRM Development, E-commerce Kerala",
  noindex = false,
  ogType = "website",
  image = "https://xenotrix.in/assets/logo.jpeg",
  breadcrumbs = null,
  schema = null
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper for setting or creating meta tags
    const setMetaTag = (attrName, attrVal, content) => {
      let tag = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Meta Description & Keywords
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 3. Robots Directive
    const robotsContent = noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    setMetaTag('name', 'robots', robotsContent);

    // 4. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // 5. Open Graph Protocol
    setMetaTag('property', 'og:site_name', 'Xenotrix Technologies');
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:locale', 'en_US');

    // 6. Twitter Card Protocol
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@xenotrixtech');
    setMetaTag('name', 'twitter:creator', '@xenotrixtech');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // 7. Base Organization + LocalBusiness + Founder Schemas
    const baseOrganizationSchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
      "@id": "https://xenotrix.in/#organization",
      "name": COMPANY_INFO.name,
      "alternateName": "Xenotrix",
      "url": "https://xenotrix.in",
      "logo": "https://xenotrix.in/assets/logo.jpeg",
      "image": "https://xenotrix.in/assets/logo.jpeg",
      "description": COMPANY_INFO.description,
      "telephone": COMPANY_INFO.phone,
      "email": COMPANY_INFO.email,
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Thiruvilwamala",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "postalCode": "680594",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.5276,
        "longitude": 76.2144
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Thrissur" },
        { "@type": "City", "name": "Palakkad" },
        { "@type": "City", "name": "Ottapalam" },
        { "@type": "City", "name": "Kochi" },
        { "@type": "AdministrativeArea", "name": "Kerala" },
        { "@type": "City", "name": "Chennai" },
        { "@type": "City", "name": "Bangalore" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "AdministrativeArea", "name": "Global Remote Operations" }
      ],
      "sameAs": [
        COMPANY_INFO.socials.linkedin,
        COMPANY_INFO.socials.github,
        COMPANY_INFO.socials.instagram,
        COMPANY_INFO.socials.twitter
      ],
      "founder": [
        {
          "@type": "Person",
          "@id": "https://xenotrix.in/#founder-sanjay",
          "name": "Sanjay S",
          "jobTitle": "Co-Founder & Principal Full-Stack & Cloud Architect",
          "knowsAbout": ["Full-Stack Microservices", "Database Engineering", "Cloud Infrastructure", "Frontend Architecture", "Data Analytics & BI", "FastAPI", "React", "Next.js"]
        },
        {
          "@type": "Person",
          "@id": "https://xenotrix.in/#founder-abi",
          "name": "Abi C R",
          "jobTitle": "Co-Founder & AI / Machine Learning Lead",
          "knowsAbout": ["AI Integration", "Machine Learning", "LLM Agents", "Retrieval-Augmented Generation", "PyTorch", "Python"]
        },
        {
          "@type": "Person",
          "@id": "https://xenotrix.in/#founder-hari",
          "name": "Hari Govind",
          "jobTitle": "Co-Founder & Product Operations & Mobile Engineering Lead",
          "knowsAbout": ["Product Operations", "Enterprise Scoping", "Digital Growth", "Mobile App Development", "Flutter", "Technical SEO"]
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Xenotrix Software Products & Engineering Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "SoftwareApplication",
              "name": "XenoCRM",
              "applicationCategory": "BusinessApplication",
              "description": "CRM and business relationship management platform."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "SoftwareApplication",
              "name": "XenoFin",
              "applicationCategory": "FinanceApplication",
              "description": "Financial and business management platform."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "SoftwareApplication",
              "name": "XenoBiz",
              "applicationCategory": "BusinessApplication",
              "description": "Mobile-based billing software designed for small businesses and shop owners."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "SoftwareApplication",
              "name": "XenoClass",
              "applicationCategory": "EducationalApplication",
              "description": "Learning Management System for education and training."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "SoftwareApplication",
              "name": "XenoHR",
              "applicationCategory": "BusinessApplication",
              "description": "Human Resource Management & Automated Payroll platform."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "SoftwareApplication",
              "name": "Xenotune",
              "applicationCategory": "AudioApplication",
              "description": "AI-powered ambient music platform for focus, relaxation and sleep."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software Development & Enterprise Architecture",
              "description": "Enterprise web, SaaS, API and full-stack software development in Kerala & Global."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Application Engineering (Flutter)",
              "description": "Native and cross-platform mobile apps for iOS and Android."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Solutions & Workflow Automation",
              "description": "Autonomous AI agents, generative AI, RAG knowledge systems, and WhatsApp automation."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development & Headless eCommerce",
              "description": "Sub-second responsive websites, corporate portals, and headless eCommerce platforms."
            }
          }
        ]
      }
    };

    const baseWebSiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://xenotrix.in/#website",
      "url": "https://xenotrix.in",
      "name": "Xenotrix Technologies",
      "description": COMPANY_INFO.description,
      "publisher": {
        "@id": "https://xenotrix.in/#organization"
      }
    };

    const schemasToInject = [baseOrganizationSchema, baseWebSiteSchema];

    // 8. BreadcrumbList Schema
    if (breadcrumbs && Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((b, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": b.name,
          "item": b.item.startsWith('http') ? b.item : `https://xenotrix.in${b.item}`
        }))
      };
      schemasToInject.push(breadcrumbSchema);
    }

    // 9. Page-Specific Custom Schemas
    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    // Inject JSON-LD Script tag into DOM
    const existingSchema = document.getElementById('json-ld-schemas');
    if (existingSchema) existingSchema.remove();

    const script = document.createElement('script');
    script.id = 'json-ld-schemas';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemasToInject);
    document.head.appendChild(script);

  }, [title, description, canonical, keywords, noindex, ogType, image, breadcrumbs, schema]);

  return null;
};
