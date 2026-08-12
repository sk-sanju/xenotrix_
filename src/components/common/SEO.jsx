import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../../data/companyData';

export const SEO = ({
  title = `${COMPANY_INFO.name} | Web & App Development, AI & Digital Marketing`,
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
    setMeta('og:image', "https://xenotrix.in/assets/img/logo.jpeg");

    // 5. Twitter Card Tags
    const setTwitter = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) tag.setAttribute('content', content);
    };

    setTwitter('twitter:title', title);
    setTwitter('twitter:description', description);
    setTwitter('twitter:image', "https://xenotrix.in/assets/img/logo.jpeg");

    // 6. Inject Default + Custom Schemas including Co-Founders and Official Logo
    const defaultSchemas = [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://xenotrix.in/#organization",
        "name": COMPANY_INFO.name,
        "url": "https://xenotrix.in",
        "logo": "https://xenotrix.in/assets/img/logo.jpeg",
        "image": "https://xenotrix.in/assets/img/logo.jpeg",
        "description": COMPANY_INFO.description,
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.email,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Thrissur",
          "addressRegion": "Kerala",
          "postalCode": "680001",
          "addressCountry": "IN"
        },
        "areaServed": ["Thrissur", "Kerala", "India", "Global Remote"],
        "sameAs": [
          COMPANY_INFO.socials.linkedin,
          COMPANY_INFO.socials.github,
          COMPANY_INFO.socials.instagram
        ],
        "founder": [
          {
            "@type": "Person",
            "name": "Sanjay S",
            "jobTitle": "Co-Founder & Lead Software Engineer"
          },
          {
            "@type": "Person",
            "name": "Abi C R",
            "jobTitle": "Co-Founder & Systems Architect"
          },
          {
            "@type": "Person",
            "name": "Hari Govind",
            "jobTitle": "Co-Founder & Product & Strategy Lead"
          }
        ],
        "serviceType": [
          "Website Development",
          "Mobile App Development",
          "AI Solutions",
          "Data Analytics",
          "WhatsApp Automation",
          "SaaS Development",
          "Digital Marketing & SEO"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://xenotrix.in/#founder-sanjay",
        "name": "Sanjay S",
        "jobTitle": "Co-Founder & Lead Software Engineer",
        "worksFor": { "@type": "Organization", "name": COMPANY_INFO.name }
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://xenotrix.in/#founder-abi",
        "name": "Abi C R",
        "jobTitle": "Co-Founder & Systems Architect",
        "worksFor": { "@type": "Organization", "name": COMPANY_INFO.name }
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://xenotrix.in/#founder-hari",
        "name": "Hari Govind",
        "jobTitle": "Co-Founder & Product Lead",
        "worksFor": { "@type": "Organization", "name": COMPANY_INFO.name }
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
