import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../../data/companyData';

export const SEO = ({
  title = `${COMPANY_INFO.name} — Building Products, Platforms & Digital Solutions`,
  description = COMPANY_INFO.description,
  canonical = "https://xenotrix.in/",
  schema = null
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }

    // 4. Open Graph Tags
    const setMeta = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) tag.setAttribute('content', content);
    };

    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:url', canonical);
    setMeta('og:image', "https://xenotrix.in/assets/logo.jpeg");

    // 5. Twitter Card Tags
    const setTwitter = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) tag.setAttribute('content', content);
    };

    setTwitter('twitter:title', title);
    setTwitter('twitter:description', description);
    setTwitter('twitter:image', "https://xenotrix.in/assets/logo.jpeg");

    // 6. Comprehensive LocalBusiness + Corporation + Founder Schemas
    const defaultSchemas = [
      {
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
          { "@type": "AdministrativeArea", "name": "Global Remote Operations" }
        ],
        "sameAs": [
          COMPANY_INFO.socials.linkedin,
          COMPANY_INFO.socials.github,
          COMPANY_INFO.socials.instagram,
          COMPANY_INFO.socials.twitter,
          COMPANY_INFO.socials.youtube
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
            }
          ]
        }
      }
    ];

    const schemasToInject = schema ? [...defaultSchemas, schema] : defaultSchemas;

    const existingSchema = document.getElementById('json-ld-schemas');
    if (existingSchema) existingSchema.remove();

    const script = document.createElement('script');
    script.id = 'json-ld-schemas';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemasToInject);
    document.head.appendChild(script);

  }, [title, description, canonical, schema]);

  return null;
};
