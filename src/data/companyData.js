export const COMPANY_INFO = {
  name: "Xenotrix Technologies",
  tagline: "Building Products, Platforms & Digital Solutions for Modern Businesses",
  heroHeadline: "Building Technology That Moves Businesses Forward.",
  heroSubheadline: "Xenotrix Technologies builds software products, digital platforms and intelligent technology solutions that help businesses operate smarter, scale faster and grow with confidence.",
  founded: "2025",
  founders: [
    {
      name: "Sanjay S",
      role: "Co-Founder & Principal Full-Stack & Cloud Architect",
      focus: "Full-Stack Microservices, Database Engineering & Cloud Infrastructure, Frontend Architecture, and Data Analytics",
      bio: "Systems architect and lead engineer directing distributed cloud deployments, high-throughput microservices, database engineering (PostgreSQL, MySQL, ClickHouse, Redis), scalable frontend architectures (React/Next.js), and real-time business data analytics.",
      skills: ["Full-Stack Microservices", "Database Engineering", "Cloud Infrastructure", "Frontend Architecture", "Data Analytics & BI", "FastAPI / Django / Python"],
      initials: "SS",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Abi C R",
      role: "Co-Founder & AI / Machine Learning Lead",
      focus: "AI Integration & Machine Learning Systems",
      bio: "AI systems engineer specializing in enterprise artificial intelligence integration, autonomous LLM agent orchestrations, custom machine learning pipelines, and predictive intelligence models.",
      skills: ["AI Integration", "Machine Learning", "LLM Agents & RAG", "PyTorch / Python", "Vector DBs (Qdrant/Pinecone)", "Model Deployment"],
      initials: "AC",
      color: "from-violet-500 to-purple-600"
    },
    {
      name: "Hari Govind",
      role: "Co-Founder & Product Operations & Mobile Engineering Lead",
      focus: "Product Operations, Enterprise Scoping & Digital Growth, Mobile App Development",
      bio: "Product strategist and mobile engineer leading client technical scoping, end-to-end product operations, growth frameworks, technical SEO, and native/cross-platform mobile applications (Flutter).",
      skills: ["Product Operations", "Enterprise Scoping", "Digital Growth & SEO", "Mobile App Development (Flutter)", "Conversion Rate Optimization"],
      initials: "HG",
      color: "from-blue-500 to-indigo-600"
    }
  ],
  description: "Xenotrix Technologies develops software products and digital solutions that help businesses modernize operations, improve customer experiences and unlock new opportunities through technology.",
  email: "info@xenotrix.in",
  phone: "+91 9995544316",
  whatsapp: "+919995544316",
  address: "Thiruvilwamala, Thrissur, Kerala, India - 680594",
  location: "Thiruvilwamala, Thrissur, Kerala, India & Global Remote Operations",
  socials: {
    linkedin: "https://www.linkedin.com/company/xenotrixtech/",
    github: "https://github.com/Xenotrix-Technologies",
    instagram: "https://www.instagram.com/xenotrix_",
    twitter: "https://twitter.com/xenotrixtech"
  },
  systemStatus: "ALL SYSTEMS OPERATIONAL — 99.98% NODE RUNTIME",
  valueStrip: [
    "Products",
    "Platforms",
    "AI",
    "Software",
    "Automation",
    "Digital Transformation"
  ]
};

export const CORE_PILLARS = [
  {
    id: "products",
    badge: "PROPRIETARY PLATFORMS",
    title: "We Build Products",
    description: "Our own commercial software products, platforms, and intelligent tools designed to simplify business operations and create exceptional digital experiences.",
    link: "/products",
    ctaText: "Explore Product Ecosystem"
  },
  {
    id: "solutions",
    badge: "CUSTOM ENGINEERING",
    title: "We Build For Businesses",
    description: "Custom enterprise software, generative AI integrations, workflow automation engines, mobile applications, and high-performance digital platforms built around real business objectives.",
    link: "/services",
    ctaText: "Explore Engineering Services"
  }
];

export const PRODUCTS = [
  {
    id: "xenocrm",
    name: "XenoCRM",
    category: "CRM & Customer Operations",
    badge: "BUSINESS OS",
    statusLabel: "LIVE PLATFORM",
    tagline: "CRM and business relationship management platform.",
    description: "An all-in-one business relationship management platform unifying customer pipelines, automated multi-channel messaging, sales tracking, and operational intelligence in a single interface.",
    features: [
      "Unified Lead & Customer Pipeline Management",
      "Native WhatsApp & Multi-Channel Communication Engine",
      "Automated Invoicing & Recurring Billing Cycles",
      "Inventory & Order Fulfillment Tracking",
      "AI-Assisted Sales Pipeline Scoring & Forecasting",
      "Role-Based Access Control (RBAC) & Audit Logs"
    ],
    metrics: [
      { label: "Core Modules", value: "8 Integrated Suites" },
      { label: "Automation Latency", value: "< 50ms Realtime" },
      { label: "Architecture", value: "Multi-Tenant Cloud Native" }
    ],
    techStack: ["React", "FastAPI", "MySQL", "Redis", "Docker", "Tailwind CSS"],
    ctaLink: "/products/xenocrm",
    demoAvailable: true,
    highlightColor: "from-cyan-500 to-blue-600",
    overview: "XenoCRM eliminates SaaS fragmentation for scaling businesses by consolidating customer relationship management, sales funnels, team collaboration, and automated billing into one fast, intuitive workspace."
  },
  {
    id: "xenofin",
    name: "XenoFin",
    category: "Financial Technology",
    badge: "FINANCE OS",
    statusLabel: "ENTERPRISE SUITE",
    tagline: "Financial and business management platform.",
    description: "A comprehensive financial intelligence and accounting management platform designed for clear cash flow visibility, ledger automation, taxation compliance, and multi-entity financial reporting.",
    features: [
      "Real-Time Cash Flow & Liquidity Telemetry",
      "Automated Ledger Reconciliation & Bank Feeds",
      "Taxation Calculation & GST/VAT Compliance Engines",
      "Multi-Currency & Multi-Entity Ledger Management",
      "Automated Accounts Payable & Receivable Pipelines",
      "Predictive Expense & Runway Financial Modeling"
    ],
    metrics: [
      { label: "Ledger Processing", value: "High-Frequency Batching" },
      { label: "Security Standard", value: "Bank-Grade Encryption" },
      { label: "Reporting", value: "Instant P&L & Balance Sheet" }
    ],
    techStack: ["React", "FastAPI", "PostgreSQL", "Redis", "Docker", "ClickHouse"],
    ctaLink: "/products/xenofin",
    demoAvailable: true,
    highlightColor: "from-emerald-500 to-teal-600",
    overview: "XenoFin brings corporate financial clarity to growing organizations, automating tedious book-keeping, payment reconciliation, and financial projections through deterministic data pipelines."
  },
  {
    id: "xenobiz",
    name: "XenoBiz",
    category: "Small Business & Mobile Operations",
    badge: "MOBILE-FIRST",
    statusLabel: "IN ACTIVE DEVELOPMENT",
    tagline: "Mobile-based billing software designed for small businesses and shop owners.",
    description: "A mobile-first billing, customer management, and WhatsApp commerce platform built specifically for retail shops, distributors, and independent business owners.",
    features: [
      "Instant Mobile Billing & Digital Invoice Generation",
      "Customer Ledgers (Khata) & Credit Balance Reminders",
      "Inventory Tracking & Low-Stock Automated Alerts",
      "One-Click WhatsApp Bill & Payment Link Sharing",
      "Offline-First Operation with Automatic Cloud Sync",
      "Daily Sales, Profit, and Expense Summary Reports"
    ],
    metrics: [
      { label: "Target Platform", value: "Flutter Mobile (Android & iOS)" },
      { label: "Sync Engine", value: "Offline-First SQLite + Cloud" },
      { label: "Interface", value: "Ultra-Fast Touch Optimized" }
    ],
    techStack: ["Flutter", "Dart", "FastAPI", "PostgreSQL", "SQLite", "Riverpod"],
    ctaLink: "/products/xenobiz",
    demoAvailable: false,
    isUpcoming: true,
    highlightColor: "from-amber-500 to-orange-600",
    overview: "XenoBiz simplifies everyday store management for retail merchants, replacing paper ledgers with an intuitive mobile billing app with built-in customer follow-ups over WhatsApp."
  },
  {
    id: "xenoclass",
    name: "XenoClass",
    category: "Education Technology",
    badge: "EDTECH PLATFORM",
    statusLabel: "PLATFORM READY",
    tagline: "Learning Management System for education and training.",
    description: "An advanced Learning Management System (LMS) engineered for educational institutes, academies, and corporate training organizations with interactive classrooms and student tracking.",
    features: [
      "Structured Curriculum & Course Progression Builder",
      "Live Interactive Classrooms & Video Integration",
      "Automated Quizzes, Assignments & Proctoring Safeguards",
      "Student Performance Analytics & Gradebook Portals",
      "Parent/Student Notification System via WhatsApp & Email",
      "Digital Certificate Generation & Verification System"
    ],
    metrics: [
      { label: "Concurrent Learners", value: "Auto-Scaling Clusters" },
      { label: "Content Delivery", value: "Low-Latency Video Streaming" },
      { label: "Access Control", value: "Admin, Tutor & Student Portals" }
    ],
    techStack: ["React", "Next.js", "FastAPI", "PostgreSQL", "WebRTC", "Redis"],
    ctaLink: "/products/xenoclass",
    demoAvailable: true,
    highlightColor: "from-blue-500 to-indigo-600",
    overview: "XenoClass empowers educators and training enterprises to deliver immersive digital learning journeys with automated grading, real-time engagement telemetry, and seamless student management."
  },
  {
    id: "xenohr",
    name: "XenoHR",
    category: "Human Resource & Workforce",
    badge: "WORKFORCE OS",
    statusLabel: "ENTERPRISE PLATFORM",
    tagline: "Human Resource Management platform.",
    description: "A modern human resource and workforce operations platform orchestrating employee onboarding, attendance, automated payroll, leave workflows, and performance reviews.",
    features: [
      "Automated Payroll Calculation & Direct Payslip Distribution",
      "Biometric, Mobile & Geofenced Attendance Tracking",
      "Self-Service Employee Portal & Leave Management",
      "Applicant Tracking System (ATS) & Onboarding Workflows",
      "Performance Appraisals, Goals & 360 Feedback",
      "Compliance Management & Statutory Benefit Calculations"
    ],
    metrics: [
      { label: "Payroll Accuracy", value: "100% Rule-Engine Verified" },
      { label: "Employee Self-Serve", value: "Web & Mobile PWA" },
      { label: "Data Security", value: "Role-Based Data Isolation" }
    ],
    techStack: ["React", "FastAPI", "PostgreSQL", "Docker", "Tailwind CSS", "Redis"],
    ctaLink: "/products/xenohr",
    demoAvailable: true,
    highlightColor: "from-purple-500 to-pink-600",
    overview: "XenoHR modernizes human resource workflows from hiring to payroll, replacing disjointed spreadsheets with a compliant, automated employee management platform."
  },
  {
    id: "xenotune",
    name: "Xenotune",
    category: "AI & Neural Soundscapes",
    badge: "AI AUDIO ENGINE",
    statusLabel: "LIVE PRODUCT",
    tagline: "AI-powered ambient music platform for focus, relaxation and sleep.",
    description: "A generative ambient acoustic platform synthesizing personalized neural soundscapes engineered to enhance cognitive focus, facilitate deep sleep, and reduce mental fatigue.",
    features: [
      "Procedural Neural Soundscape Synthesis Engine",
      "Circadian Rhythm & Cognitive Focus State Synchronization",
      "Binaural Beats & Isochronic Frequency Entrainment",
      "Spatial Audio Filters & Psychoacoustic Tuning",
      "Offline Playback with Zero-Stutter WebAudio Streaming",
      "Session Analytics & Focus Duration Tracking"
    ],
    metrics: [
      { label: "Audio Processing", value: "< 5ms Native WebAudio" },
      { label: "Variations", value: "Non-Repeating Infinite Streams" },
      { label: "Platforms", value: "Web, iOS & Android" }
    ],
    techStack: ["Flutter", "WebAudio API", "Python", "FastAPI", "PyTorch"],
    ctaLink: "/products/xenotune",
    demoAvailable: true,
    highlightColor: "from-violet-500 to-cyan-500",
    overview: "Xenotune uses procedural neural sound synthesis to create infinite, scientifically calibrated acoustic environments that adapt to your work session demands in real time."
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "software-engineering",
    slug: "software-engineering",
    title: "Software Engineering",
    category: "SOFTWARE ENGINEERING",
    tagline: "Custom Software Development & Enterprise Architecture",
    description: "From greenfield SaaS products to mission-critical enterprise applications, we engineer high-performance software built on modern microservices and resilient architectures.",
    services: [
      {
        name: "Custom Software Development",
        desc: "Tailored enterprise solutions built from scratch around your specific business logic and operating requirements."
      },
      {
        name: "Enterprise Applications",
        desc: "Scalable, secure, and fault-tolerant software platforms designed for complex organizational workflows."
      },
      {
        name: "SaaS Development",
        desc: "Multi-tenant cloud architectures with recurring billing, tenant isolation, SSO, and customer onboarding."
      },
      {
        name: "Web Applications",
        desc: "Sub-second single page and progressive web applications engineered with React, Next.js, and FastAPI."
      },
      {
        name: "Mobile Applications",
        desc: "High-frame-rate native and cross-platform mobile apps for iOS and Android powered by Flutter."
      },
      {
        name: "API Development & Integration",
        desc: "High-throughput RESTful, GraphQL, and gRPC backend microservices with comprehensive documentation."
      }
    ],
    tech: ["React", "Next.js", "FastAPI", "Python", "Django", "Node.js", "Flutter", "PostgreSQL", "Docker"]
  },
  {
    id: "ai-intelligence",
    slug: "ai-intelligence",
    title: "AI & Intelligence",
    category: "AI & INTELLIGENCE",
    tagline: "Artificial Intelligence, Agents & Business Automation",
    description: "We bridge cutting-edge artificial intelligence and practical business execution, creating autonomous agents, data intelligence pipelines, and domain-specific AI integrations.",
    services: [
      {
        name: "Artificial Intelligence & ML",
        desc: "Domain-specific predictive modeling, computer vision, and machine learning pipelines integrated into core operations."
      },
      {
        name: "AI Agents & Autonomous Swarms",
        desc: "Goal-driven autonomous agents that handle multi-step reasoning, customer triage, and operations."
      },
      {
        name: "Generative AI & LLM Systems",
        desc: "Enterprise Retrieval-Augmented Generation (RAG), custom knowledge vaults, and fine-tuned domain models."
      },
      {
        name: "Business Automation",
        desc: "End-to-end automation of manual business tasks through intelligent event triggers and rule engines."
      },
      {
        name: "Workflow Automation",
        desc: "Multi-channel workflow routing connecting WhatsApp, email, internal ERPs, and database systems."
      },
      {
        name: "Data Analytics & Business Intelligence",
        desc: "Real-time telemetry dashboards, executive analytics, and columnar data warehousing for instant decision advantage."
      }
    ],
    tech: ["Python", "PyTorch", "OpenAI API", "LangChain", "Qdrant", "Pinecone", "n8n", "ClickHouse", "FastAPI"]
  },
  {
    id: "digital-experience",
    slug: "digital-experience",
    title: "Digital Experience",
    category: "DIGITAL EXPERIENCE",
    tagline: "Websites, eCommerce & Modern Digital Platforms",
    description: "We design and build immersive digital experiences that convert visitors into clients, combining high-contrast visual craft with technical performance engineering.",
    services: [
      {
        name: "Website Development",
        desc: "Ultra-fast, high-converting corporate and product websites built with modern frameworks and sub-second loading."
      },
      {
        name: "eCommerce Development",
        desc: "Custom headless storefronts, payment gateways, inventory synchronization, and frictionless checkout funnels."
      },
      {
        name: "UI/UX Design Systems",
        desc: "Futuristic, enterprise design systems, interactive prototypes, and design tokens built for clarity and speed."
      },
      {
        name: "Digital Platforms",
        desc: "Interactive web portals, partner hubs, and self-service dashboards built for intensive daily usage."
      },
      {
        name: "Customer Portals",
        desc: "Secure, authenticated client workspaces for document sharing, ticketing, billing, and progress tracking."
      }
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Three.js", "Cloudflare"]
  },
  {
    id: "growth-transformation",
    slug: "growth-transformation",
    title: "Growth & Transformation",
    category: "GROWTH & TRANSFORMATION",
    tagline: "Digital Transformation, SEO & Strategic Performance",
    description: "Modernize legacy operational processes and accelerate organic market expansion through technical SEO, conversion engineering, and strategic technology consulting.",
    services: [
      {
        name: "Digital Marketing & Performance",
        desc: "Data-driven customer acquisition campaigns, attribution modeling, and high-ROI multi-channel strategies."
      },
      {
        name: "Technical & Programmatic SEO",
        desc: "Structured schema architecture, Core Web Vitals optimization, and automated programmatic search visibility."
      },
      {
        name: "Performance Marketing & Funnels",
        desc: "Full-funnel optimization, landing page testing, and conversion rate optimization (CRO) grounded in user telemetry."
      },
      {
        name: "Lead Generation Infrastructure",
        desc: "Automated multi-stage lead capture, enrichment, qualification, and CRM routing pipelines."
      },
      {
        name: "Digital Transformation",
        desc: "Comprehensive modernization of legacy software, manual paperwork, and outdated IT infrastructure."
      },
      {
        name: "Business Process Optimization",
        desc: "Eliminating operational bottlenecks, reducing overhead, and streamlining cross-departmental handoffs."
      }
    ],
    tech: ["PostHog", "Cloudflare Edge", "Google Analytics 4", "Schema.org", "Lighthouse", "Grafana"]
  }
];

export const DEDICATED_SERVICES = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development Services",
    metaTitle: "Website Development Company in Kerala & Thrissur | Xenotrix Technologies",
    metaDescription: "Professional website development company in Thrissur, Kerala. We engineer ultra-fast, high-converting corporate websites, Webflow/React builds, and custom portals across India & UAE.",
    keywords: "website development company Kerala, website development Thrissur, custom website development India, web design Kochi, responsive web design Kerala, corporate website development",
    category: "DIGITAL EXPERIENCE",
    tagline: "High-Performance, Conversion-Engineered Business Websites",
    description: "We build ultra-fast, custom websites designed to convert visitors into paying clients. Powered by modern web architectures, instant sub-second page loads, and structured SEO.",
    problemStatement: "Most business websites are sluggish template themes burdened with heavy plugins, poor mobile UX, and zero technical SEO—costing companies valuable organic search rankings and enterprise leads.",
    solutionStatement: "Xenotrix engineers bespoke corporate websites with clean semantic HTML, modular React/Next.js architectures, sub-500ms Core Web Vitals, and conversion pathways tailored to your industry.",
    targetLocations: ["Kerala", "Thrissur", "Kochi", "Chennai", "Bangalore", "India", "UAE", "Global"],
    services: [
      {
        name: "Custom Corporate Websites",
        desc: "Bespoke digital brand homes engineered from scratch without bloated templates for maximum speed and authority."
      },
      {
        name: "High-Conversion Landing Pages",
        desc: "Targeted campaign pages optimized for paid ads and organic search with clear CTAs and minimal friction."
      },
      {
        name: "Interactive Web Portals",
        desc: "Dynamic, authenticated web applications for customer account management, quoting, and client interaction."
      },
      {
        name: "Technical SEO & Performance First",
        desc: "Built-in structured JSON-LD schemas, sub-second LCP, zero CLS, and responsive layout across all viewports."
      },
      {
        name: "CMS & Headless Integrations",
        desc: "Seamless content management workflows enabling your marketing team to publish content without developer bottlenecks."
      },
      {
        name: "Multi-Language & Regional Support",
        desc: "Localization and internationalization architecture ready for regional Kerala, Indian, and Middle Eastern markets."
      }
    ],
    benefits: [
      "Sub-second load times that drastically boost search engine ranking and user retention",
      "Direct conversion paths designed to capture inquiries via WhatsApp, email, and forms",
      "Zero dependency on fragile third-party plugin ecosystems",
      "Comprehensive OpenGraph, Twitter card, and Schema.org rich snippet compliance"
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "Cloudflare", "Framer Motion"],
    faqs: [
      {
        q: "How much does a custom business website cost in Kerala?",
        a: "Website development costs vary based on complexity, feature requirements, and custom design depth. Typical professional business websites range from ₹25,000 for focused corporate sites to larger custom web platforms. Contact us for a transparent technical scope and quote."
      },
      {
        q: "How long does it take to design and launch a website?",
        a: "A standard high-performance corporate website typically launches within 2 to 4 weeks, including discovery, UI/UX prototyping, full-stack engineering, SEO setup, and deployment."
      },
      {
        q: "Will our website be optimized for mobile devices and search engines?",
        a: "Yes. Every website we build is 100% responsive across mobile, tablet, and desktop, and comes standard with full technical SEO, structured data schemas, and Core Web Vitals optimization."
      }
    ]
  },
  {
    id: "web-application-development",
    slug: "web-application-development",
    title: "Web Application Development",
    metaTitle: "Web Application Development Company Kerala | Xenotrix Technologies",
    metaDescription: "Custom web application development services in Kerala and India. We build scalable SaaS platforms, client portals, and microservices backends with React, FastAPI, and PostgreSQL.",
    keywords: "web application development Kerala, custom web apps India, SaaS development Thrissur, React web application company, FastAPI backend development",
    category: "SOFTWARE ENGINEERING",
    tagline: "Scalable, Real-Time Cloud Web Applications & SaaS Systems",
    description: "From complex customer dashboards to multi-tenant SaaS products, we build secure, reactive web applications that streamline business operations and scale effortlessly.",
    problemStatement: "Off-the-shelf software often fails to adapt to specific enterprise workflows, resulting in fragmented spreadsheets, manual errors, and high operational overhead.",
    solutionStatement: "We engineer tailored web applications with role-based access control (RBAC), real-time data synchronization, robust REST/GraphQL APIs, and resilient cloud architectures.",
    targetLocations: ["Kerala", "Thrissur", "Kochi", "Chennai", "India", "UAE", "Global"],
    services: [
      {
        name: "Custom SaaS Product Engineering",
        desc: "Multi-tenant SaaS architectures featuring subscription billing, customer self-onboarding, and granular role management."
      },
      {
        name: "Enterprise Management Dashboards",
        desc: "Real-time administrative dashboards with data visualization, export pipelines, and operational telemetry."
      },
      {
        name: "Client & Vendor Self-Service Portals",
        desc: "Secure authenticated environments for invoicing, project approvals, ticket triage, and digital document distribution."
      },
      {
        name: "Progressive Web Apps (PWAs)",
        desc: "Offline-capable, installable web experiences delivering native-like app performance directly in modern browsers."
      },
      {
        name: "API & Microservice Architectures",
        desc: "High-throughput asynchronous backends built with Python, FastAPI, and PostgreSQL."
      },
      {
        name: "Real-Time Collaboration Engines",
        desc: "WebSockets and event-driven data streaming for instant messaging, status updates, and live updates."
      }
    ],
    benefits: [
      "Custom business workflows that automate manual work and eliminate recurring licensing costs",
      "Enterprise-grade security with encrypted authentication and audit logging",
      "Zero-lag user interfaces powered by lightweight reactive frontend architecture",
      "Seamless integration with WhatsApp, payment gateways, and internal ERP systems"
    ],
    tech: ["React", "Next.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    faqs: [
      {
        q: "What technologies do you use for web application development?",
        a: "We primarily utilize React/Next.js for reactive, high-speed frontends and FastAPI/Python or Node.js for backend microservices, backed by PostgreSQL, MySQL, and Redis for high-throughput data processing."
      },
      {
        q: "Can you modernize our existing legacy web application?",
        a: "Yes. We perform legacy code audits, database migrations, API modernization, and complete frontend redesigns with zero data loss or downtime."
      }
    ]
  },
  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    title: "E-Commerce Development Services",
    metaTitle: "E-Commerce Website Development in Kerala & India | Xenotrix Technologies",
    metaDescription: "Custom eCommerce website and store development in Kerala. Headless commerce, payment gateway integration, WhatsApp checkout, and high-conversion online stores.",
    keywords: "ecommerce development company Kerala, ecommerce website Thrissur, online store development Kochi, custom ecommerce India, headless commerce Kerala",
    category: "DIGITAL EXPERIENCE",
    tagline: "Headless, High-Conversion Online Stores & Commerce Platforms",
    description: "We build sub-second headless e-commerce storefronts and custom online commerce platforms engineered for maximum checkout conversion, inventory sync, and WhatsApp engagement.",
    problemStatement: "Traditional eCommerce storefronts suffer from high page latency, clunky checkout funnels, and high shopping cart abandonment rates.",
    solutionStatement: "Xenotrix builds lightning-fast headless e-commerce platforms with one-click payment gateways, real-time inventory management, automated WhatsApp order updates, and optimized checkout UX.",
    targetLocations: ["Kerala", "Thrissur", "Kochi", "Chennai", "India", "UAE", "Global"],
    services: [
      {
        name: "Custom Headless Storefronts",
        desc: "Blazing fast shopping experiences with instantaneous product filtering, zero-delay search, and sub-second checkout."
      },
      {
        name: "Payment Gateway Integration",
        desc: "Flawless integration with Razorpay, Cashfree, Stripe, UPI QR, and international multi-currency gateways."
      },
      {
        name: "WhatsApp Commerce & Notifications",
        desc: "Automated order confirmation, shipment tracking, and abandoned cart recovery sequences over WhatsApp."
      },
      {
        name: "Inventory & Multi-Store Sync",
        desc: "Centralized stock control synchronizing physical retail POS systems with online storefront inventories in real time."
      },
      {
        name: "B2B Wholesale & Distributor Portals",
        desc: "Tiered pricing, bulk order minimums, credit terms, and custom quotation pipelines for wholesale commerce."
      },
      {
        name: "E-Commerce SEO & Rich Snippets",
        desc: "Structured Product, Review, and Offer Schema.org metadata for enhanced Google Search Shopping rankings."
      }
    ],
    benefits: [
      "Sub-second catalog browsing and checkout speeds that increase conversion rates",
      "Automated WhatsApp alerts reducing customer support load and cart abandonment",
      "Direct integration with shipping aggregators (Shiprocket, Delhivery) and payment providers",
      "Mobile-first design optimized for Indian and international shoppers"
    ],
    tech: ["React", "Next.js", "FastAPI", "PostgreSQL", "Redis", "WhatsApp API", "Stripe / Razorpay"],
    faqs: [
      {
        q: "Do you integrate Indian payment gateways like UPI and Razorpay?",
        a: "Yes. We implement seamless multi-option checkouts including UPI, GPay, PhonePe, credit/debit cards, net banking, and international credit cards via Razorpay, Cashfree, and Stripe."
      },
      {
        q: "Can customers receive order updates on WhatsApp?",
        a: "Yes. We integrate official WhatsApp Business Cloud APIs to send instant automated order confirmations, payment receipts, tracking links, and delivery notifications."
      }
    ]
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development Services",
    metaTitle: "Mobile App Development Company in Kerala | Flutter Apps | Xenotrix",
    metaDescription: "Premier mobile app development company in Thrissur, Kerala. Native-performance Flutter mobile apps for iOS and Android with offline-first architecture and real-time cloud sync.",
    keywords: "mobile app development Kerala, Flutter app development Thrissur, iOS Android app development Kochi, mobile application development India",
    category: "SOFTWARE ENGINEERING",
    tagline: "High-Frame-Rate Native & Cross-Platform Mobile Applications",
    description: "We engineer native-performance mobile applications for iOS and Android using Flutter. Fast, fluid, and robust mobile products tailored for modern enterprises and consumer platforms.",
    problemStatement: "Building separate native apps for iOS and Android doubles development costs and timelines, while subpar cross-platform frameworks lead to laggy, clunky user experiences.",
    solutionStatement: "Using production Flutter engineering, we build a single, unified codebase that renders 60fps+ native performance on both iOS and Android, backed by secure cloud APIs and offline data caching.",
    targetLocations: ["Kerala", "Thrissur", "Kochi", "Chennai", "Bangalore", "India", "UAE", "Global"],
    services: [
      {
        name: "Cross-Platform Flutter Apps",
        desc: "One high-performance codebase delivering pixel-perfect, native-compiled mobile experiences for iOS and Android."
      },
      {
        name: "Offline-First Mobile Architecture",
        desc: "Seamless local SQLite data caching that functions flawlessly without internet and automatically syncs upon reconnection."
      },
      {
        name: "Enterprise Field & Billing Apps",
        desc: "Mobile POS, inventory scanning, field technician dispatch, and digital receipt generation tools."
      },
      {
        name: "Push Notifications & Deep Linking",
        desc: "Targeted segmentation notifications via Firebase Cloud Messaging and universal deep links for marketing campaigns."
      },
      {
        name: "Biometrics & Mobile Security",
        desc: "Fingerprint/FaceID authentication, end-to-end payload encryption, and secure local keychain token storage."
      },
      {
        name: "App Store & Play Store Deployment",
        desc: "End-to-end submission management, compliance approvals, signing certificates, and continuous CI/CD delivery."
      }
    ],
    benefits: [
      "Halve development cost and launch timeline with a unified Flutter codebase",
      "Butter-smooth 60fps animation and native platform gestures",
      "Offline-first resilience ensuring your team or customers can work anywhere",
      "Full API integration with your existing backend and database systems"
    ],
    tech: ["Flutter", "Dart", "Firebase", "FastAPI", "SQLite", "Riverpod", "PostgreSQL"],
    faqs: [
      {
        q: "Why do you recommend Flutter for mobile app development?",
        a: "Flutter compiles directly to native ARM machine code on both iOS and Android, delivering 60fps/120fps rendering speed while maintaining a single codebase—saving up to 50% in development and ongoing maintenance costs."
      },
      {
        q: "Do you publish our mobile app to the Apple App Store and Google Play Store?",
        a: "Yes. We manage the entire deployment process, including app signing, privacy policies, store listings, screenshot generation, and compliance reviews."
      }
    ]
  },
  {
    id: "custom-software-development",
    slug: "custom-software-development",
    title: "Custom Software Development",
    metaTitle: "Custom Software Development Company in Kerala | Xenotrix Technologies",
    metaDescription: "Enterprise custom software development services in Thrissur, Kerala. We build bespoke business software, microservices, databases, and automated workflows across India & UAE.",
    keywords: "custom software development Kerala, enterprise software development Thrissur, software company Kochi, business software India, bespoke software solutions",
    category: "SOFTWARE ENGINEERING",
    tagline: "Bespoke Enterprise Software Engineered Around Your Business Logic",
    description: "We architect and engineer mission-critical custom software systems that replace fragmented tools, eliminate manual bottlenecks, and give businesses a lasting technological advantage.",
    problemStatement: "Generic SaaS tools force businesses to adapt their workflows to rigid software limitations, resulting in high subscription costs, poor data ownership, and disjointed team communication.",
    solutionStatement: "Xenotrix builds 100% proprietary custom software engineered to mirror your exact operational logic, providing full intellectual property ownership, bank-grade security, and unlimited scalability.",
    targetLocations: ["Kerala", "Thrissur", "Kochi", "Chennai", "Bangalore", "India", "UAE", "Global"],
    services: [
      {
        name: "Bespoke Enterprise Solutions",
        desc: "Tailored business operating platforms engineered specifically for your company's proprietary workflows."
      },
      {
        name: "Distributed Microservices Architecture",
        desc: "Fault-tolerant, containerized backend systems that scale horizontally without performance degradation."
      },
      {
        name: "Database Engineering & Optimization",
        desc: "High-frequency relational and columnar database designs (PostgreSQL, MySQL, ClickHouse, Redis) for instant queries."
      },
      {
        name: "Legacy Modernization & Data Migration",
        desc: "Upgrading outdated desktop or spreadsheet databases into modern, cloud-native web and mobile platforms."
      },
      {
        name: "Third-Party API & Webhook Integrations",
        desc: "Connecting banking, accounting, payment, logistics, and communication APIs into one unified nerve center."
      },
      {
        name: "Cloud Hosting & DevOps Automation",
        desc: "Docker containerization, automated CI/CD deployment pipelines, and 99.98% monitored cloud uptime."
      }
    ],
    benefits: [
      "100% ownership of your intellectual property and data assets",
      "Eliminate recurring per-user monthly SaaS subscription fees",
      "Tailor every screen, permission level, and calculation to your company's rules",
      "Bank-grade security with granular role-based access control and audit logs"
    ],
    tech: ["Python", "FastAPI", "Django", "React", "PostgreSQL", "Docker", "Redis", "ClickHouse"],
    faqs: [
      {
        q: "What are the advantages of custom software vs off-the-shelf software?",
        a: "Custom software is designed 100% around your exact business processes, meaning no compromises, no recurring per-seat subscription fees, and complete ownership of your intellectual property and proprietary data."
      },
      {
        q: "Who owns the source code upon project completion?",
        a: "You do. Full ownership and intellectual property of the custom software source code, database architectures, and assets belong entirely to your company."
      }
    ]
  },
  {
    id: "crm-erp-development",
    slug: "crm-erp-development",
    title: "CRM & ERP Development Services",
    metaTitle: "Custom CRM & ERP Software Development in Kerala | Xenotrix Technologies",
    metaDescription: "Custom CRM and ERP software development in Kerala and Thrissur. Streamline sales pipelines, automated invoicing, inventory, HR payroll, and WhatsApp operations.",
    keywords: "CRM development company Kerala, ERP development Thrissur, custom CRM India, business ERP software Kochi, XenoCRM",
    category: "SOFTWARE ENGINEERING",
    tagline: "All-in-One Business Operating Systems & Resource Planning",
    description: "We build custom CRM and ERP software systems that unify customer pipelines, sales tracking, inventory management, automated payroll, and multi-channel messaging in one intuitive platform.",
    problemStatement: "Businesses waste dozens of hours each week manually syncing data between separate CRM, accounting, inventory, and messaging software—leading to lost leads and billing errors.",
    solutionStatement: "Xenotrix builds unified CRM & ERP platforms (including our proprietary XenoCRM and XenoHR technologies) that centralize every operational department into one real-time dashboard.",
    targetLocations: ["Kerala", "Thrissur", "Kochi", "Chennai", "India", "UAE", "Global"],
    services: [
      {
        name: "Custom Sales Pipeline CRM",
        desc: "Visual deal stages, lead assignment rules, automated WhatsApp follow-ups, and sales forecasting."
      },
      {
        name: "Enterprise ERP & Inventory Systems",
        desc: "Multi-warehouse inventory tracking, purchase order routing, supplier ledgers, and low-stock alerts."
      },
      {
        name: "Automated Billing & GST Invoicing",
        desc: "Generate professional digital invoices, track payment status, and send automated payment reminder links."
      },
      {
        name: "Human Resource & Payroll Modules",
        desc: "Biometric attendance, leave approvals, salary calculations, and direct payslip distribution."
      },
      {
        name: "WhatsApp Business CRM Integration",
        desc: "Manage customer chats, send catalog links, and trigger automated notifications directly from your CRM."
      },
      {
        name: "Executive Analytics & Reporting",
        desc: "Instant profit & loss summaries, employee productivity metrics, and cash flow telemetry."
      }
    ],
    benefits: [
      "Unify all business departments into a single pane of glass",
      "Automate lead capture and follow-ups to increase sales conversion",
      "Prevent stock-outs and inventory discrepancies with real-time tracking",
      "Save 15+ administrative hours per employee every month"
    ],
    tech: ["React", "FastAPI", "PostgreSQL", "MySQL", "Redis", "Docker", "WhatsApp Cloud API"],
    faqs: [
      {
        q: "Can our CRM integrate directly with WhatsApp for lead follow-ups?",
        a: "Yes. Our CRM platforms feature native WhatsApp integration, enabling your sales team to receive instant lead notifications, send template messages, and log conversations automatically."
      },
      {
        q: "Can the ERP system handle GST compliance and multi-branch operations?",
        a: "Yes. Our systems are engineered with full GST taxation rules, e-invoicing support, and multi-branch inventory synchronization."
      }
    ]
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI Solutions & Business Automation",
    metaTitle: "AI Solutions & Automation Company in Kerala | Xenotrix Technologies",
    metaDescription: "Enterprise AI solutions, autonomous AI agents, WhatsApp automation, and RAG knowledge systems in Kerala and India. Modernize business workflows with AI.",
    keywords: "AI automation company Kerala, AI solutions Thrissur, business automation Kochi, AI agents India, WhatsApp AI bot Kerala, RAG systems",
    category: "AI & INTELLIGENCE",
    tagline: "Autonomous AI Agents, LLM Integrations & Intelligent Workflow Automation",
    description: "We deploy practical, high-ROI artificial intelligence systems for modern businesses—including autonomous AI agents, custom document intelligence, RAG knowledge vaults, and multi-channel automation.",
    problemStatement: "Repetitive manual tasks, slow customer support responses, and unstructured document processing drain team productivity and delay critical business decisions.",
    solutionStatement: "Xenotrix bridges cutting-edge generative AI and practical operational execution, building intelligent AI agents, automated triage workflows, and custom neural systems that operate 24/7.",
    targetLocations: ["Kerala", "Thrissur", "Kochi", "Chennai", "India", "UAE", "Global"],
    services: [
      {
        name: "Autonomous AI Agents & Swarms",
        desc: "Goal-directed AI assistants that handle multi-step customer inquiries, lead qualification, and document parsing."
      },
      {
        name: "Enterprise RAG & Knowledge Vaults",
        desc: "Connect your company's manuals, policy documents, and databases to secure, conversational LLM assistants."
      },
      {
        name: "WhatsApp Business AI Automation",
        desc: "24/7 intelligent chatbots that answer customer questions, share product catalogs, and book appointments."
      },
      {
        name: "Document OCR & Extraction Pipelines",
        desc: "Automated extraction and classification of invoices, receipts, medical records, and legal contracts."
      },
      {
        name: "Predictive Analytics & Machine Learning",
        desc: "Custom ML models for customer churn prediction, demand forecasting, and behavioral pattern discovery."
      },
      {
        name: "Event-Driven Workflow Automation",
        desc: "End-to-end webhook pipelines (n8n, Python) connecting CRM, emails, payment gateways, and databases."
      }
    ],
    benefits: [
      "Provide 24/7 instantaneous customer responses over WhatsApp and web",
      "Eliminate manual data entry errors and document transcription backlogs",
      "Empower your staff with instant access to company knowledge vaults",
      "Achieve measurable operational ROI within the first 30 days of deployment"
    ],
    tech: ["Python", "PyTorch", "OpenAI / Claude APIs", "LangChain", "Qdrant", "Pinecone", "n8n", "FastAPI"],
    faqs: [
      {
        q: "Is our business data kept secure and private when using AI?",
        a: "Yes. We implement private enterprise RAG architectures and vector databases where your proprietary business data is never used to train public models, with strict access control and encryption."
      },
      {
        q: "How can WhatsApp AI automation help our business?",
        a: "A custom WhatsApp AI bot can instantly respond to customer product queries, qualify leads, send quotations, accept bookings, and route complex cases to your human team seamlessly."
      }
    ]
  },
  {
    id: "digital-marketing-seo",
    slug: "digital-marketing-seo",
    title: "Digital Marketing & Technical SEO",
    metaTitle: "SEO Company in Kerala & Thrissur | Technical SEO | Xenotrix",
    metaDescription: "Data-driven SEO services and digital marketing agency in Thrissur, Kerala. Technical SEO, programmatic search, local SEO, and conversion rate optimization (CRO) in India & UAE.",
    keywords: "SEO company Kerala, SEO services Thrissur, digital marketing agency Kochi, technical SEO India, local SEO Kerala, conversion rate optimization",
    category: "GROWTH & TRANSFORMATION",
    tagline: "Data-Driven Technical SEO, Conversion Engineering & Organic Growth",
    description: "We optimize your digital footprint with rigorous technical SEO, programmatic content architectures, Schema.org structured data, and high-converting acquisition funnels.",
    problemStatement: "Many businesses waste money on generic marketing agencies that deliver vanity traffic without generating actual commercial leads or high-intent search visibility.",
    solutionStatement: "Xenotrix approaches search visibility and marketing as an engineering discipline—optimizing Core Web Vitals, Schema graphs, local pack rankings, and conversion funnels to drive real revenue.",
    targetLocations: ["Kerala", "Thrissur", "Kochi", "Chennai", "India", "UAE", "Global"],
    services: [
      {
        name: "Technical SEO & Schema Engineering",
        desc: "Complete optimization of crawlability, Core Web Vitals, canonical architecture, and rich Schema.org structured data."
      },
      {
        name: "Local SEO & Google Business Profile",
        desc: "Dominate local map pack rankings for Thrissur, Kochi, Kerala, and target regional metropolitan hubs."
      },
      {
        name: "Programmatic SEO & Content Clusters",
        desc: "Architecting scalable topical authority clusters and intent-driven content that capture high-value commercial searches."
      },
      {
        name: "Conversion Rate Optimization (CRO)",
        desc: "Telemetry-driven UX enhancements, heatmap analysis, and CTA optimization that maximize visitor-to-lead conversions."
      },
      {
        name: "AI Search Optimization (AEO/GEO)",
        desc: "Formatting entity structures and factual manifests for Google AI Overviews, Perplexity, and ChatGPT search citations."
      },
      {
        name: "Performance Analytics & Attribution",
        desc: "Precision tracking of form submissions, WhatsApp clicks, phone calls, and revenue attribution in Google Analytics 4."
      }
    ],
    benefits: [
      "Sustainable organic search traffic that reduces dependency on paid advertising",
      "Topical authority in your industry that positions your brand as the market leader",
      "Measurable lead generation telemetry tracked directly in Google Analytics 4",
      "Future-proof visibility across traditional search engines and AI search platforms"
    ],
    tech: ["Google Analytics 4", "Google Search Console", "Schema.org", "Lighthouse", "PostHog", "Cloudflare"],
    faqs: [
      {
        q: "What makes technical SEO different from basic SEO?",
        a: "Technical SEO focuses on the structural and architectural foundation of your website—such as sub-second Core Web Vitals, JSON-LD structured data schemas, canonical URL hierarchies, crawl budget optimization, and semantic HTML—ensuring search engines can flawlessly index and rank your pages."
      },
      {
        q: "How long does it take to see results from SEO?",
        a: "Technical SEO fixes (crawling, indexing, schema) often show ranking improvements within 2 to 6 weeks, while comprehensive topical authority and competitive commercial rankings typically compound significantly over 3 to 6 months."
      }
    ]
  },
  {
    id: "cloud-deployment",
    slug: "cloud-deployment",
    title: "Cloud & Deployment Solutions",
    metaTitle: "Cloud Architecture & DevOps Deployment Services | Xenotrix Technologies",
    metaDescription: "Enterprise cloud architecture, Docker containerization, CI/CD pipelines, and high-availability server deployment in Kerala and India. 99.98% monitored runtime.",
    keywords: "cloud deployment services Kerala, DevOps company Thrissur, Docker containerization India, cloud architecture Kochi, microservices deployment",
    category: "SOFTWARE ENGINEERING",
    tagline: "Resilient Cloud Infrastructure, Containerization & CI/CD Pipelines",
    description: "We design, deploy, and monitor scalable cloud environments with Docker containerization, automated continuous deployment pipelines, edge caching, and 99.98% runtime SLAs.",
    problemStatement: "Unmonitored servers, manual deployment errors, and unoptimized database configurations lead to downtime, security vulnerabilities, and unexpected cloud hosting bills.",
    solutionStatement: "Xenotrix deploys deterministic cloud architectures with automated CI/CD workflows, Cloudflare edge security, automated database backups, and real-time telemetry monitoring.",
    targetLocations: ["Kerala", "Thrissur", "Kochi", "Chennai", "India", "UAE", "Global"],
    services: [
      {
        name: "Cloud Infrastructure Architecture",
        desc: "Design and deployment of auto-scaling, multi-region cloud setups on AWS, DigitalOcean, Hetzner, and GCP."
      },
      {
        name: "Docker & Container Orchestration",
        desc: "Containerizing microservices for isolated, reproducible, and zero-downtime deployment workflows."
      },
      {
        name: "Automated CI/CD Delivery Pipelines",
        desc: "GitHub Actions pipelines that test, build, and deploy software updates automatically with zero human friction."
      },
      {
        name: "Cloudflare Edge Caching & Security",
        desc: "DDoS mitigation, SSL/TLS certificate management, web application firewalls (WAF), and global CDN acceleration."
      },
      {
        name: "Database Backup & Disaster Recovery",
        desc: "Automated encrypted database snapshots, point-in-time recovery, and multi-node replication."
      },
      {
        name: "24/7 Telemetry & Health Monitoring",
        desc: "Real-time CPU/memory alerting, error tracking, and API uptime monitoring maintaining 99.98% availability."
      }
    ],
    benefits: [
      "99.98% monitored system runtime and rapid disaster recovery",
      "Instantaneous zero-downtime software deployments via CI/CD pipelines",
      "Dramatically reduced cloud hosting costs through optimized container resource utilization",
      "Enterprise security compliance with automated SSL and edge firewall protection"
    ],
    tech: ["Docker", "GitHub Actions", "Cloudflare", "AWS", "DigitalOcean", "Linux / Ubuntu", "Nginx", "PostgreSQL"],
    faqs: [
      {
        q: "What cloud platforms do you support?",
        a: "We deploy on all major modern cloud providers including AWS, Google Cloud, DigitalOcean, Hetzner, and Cloudflare Edge depending on performance and budget needs."
      },
      {
        q: "Do you provide ongoing server maintenance and monitoring?",
        a: "Yes. We provide 24/7 infrastructure monitoring, automated security patch updates, and backup verification to ensure uninterrupted business operations."
      }
    ]
  }
];

export const ALL_SERVICES = [...SERVICE_CATEGORIES, ...DEDICATED_SERVICES];

export const SERVICE_ALIASES = {
  'custom-software': 'custom-software-development',
  'web-mobile': 'web-application-development',
  'web-applications': 'web-application-development',
  'mobile-applications': 'mobile-app-development',
  'mobile-app': 'mobile-app-development',
  'cloud-platforms': 'cloud-deployment',
  'cloud-systems': 'cloud-deployment',
  'cloud': 'cloud-deployment',
  'ai-workflow-automation': 'ai-automation',
  'crm-erp': 'crm-erp-development',
  'ecommerce': 'ecommerce-development',
  'seo': 'digital-marketing-seo'
};

export const getServiceBySlug = (slug) => {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  const targetSlug = SERVICE_ALIASES[cleanSlug] || cleanSlug;
  return ALL_SERVICES.find(
    (s) => s.slug === targetSlug || s.id === targetSlug || s.slug === cleanSlug || s.id === cleanSlug
  ) || null;
};


export const SOLUTIONS = [
  {
    id: "sales-crm",
    title: "Sales & CRM",
    category: "Customer Operations",
    headline: "Unify Sales Pipelines, WhatsApp & Customer Communication",
    description: "End fragmentation in your sales team with automated lead qualification, WhatsApp notifications, scheduled follow-ups, and real-time deal pipeline visibility.",
    capabilities: [
      "Centralized Multi-Channel Lead Ingestion",
      "Automated WhatsApp & Email Follow-Up Sequences",
      "Visual Deal Pipelines & Revenue Forecasting",
      "Sales Representative Performance Telemetry"
    ],
    relatedProduct: "XenoCRM"
  },
  {
    id: "finance",
    title: "Finance & Accounting",
    category: "Financial Operations",
    headline: "Streamline Invoicing, Ledgers & Cash Flow Visibility",
    description: "Eliminate manual bookkeeping and reconciliation delays with automated invoice matching, digital billing pipelines, and real-time profit & loss analytics.",
    capabilities: [
      "Automated Invoicing & Recurring Subscription Billing",
      "Real-Time Cash Flow & Runway Analytics",
      "GST/VAT Taxation Calculation & Export",
      "Multi-Account Ledger Synchronization"
    ],
    relatedProduct: "XenoFin"
  },
  {
    id: "human-resources",
    title: "Human Resources",
    category: "Workforce Management",
    headline: "Modernize Onboarding, Attendance & Automated Payroll",
    description: "Consolidate your entire employee lifecycle from recruitment and biometric attendance to statutory compliance, leave tracking, and automated payroll runs.",
    capabilities: [
      "Rule-Based Automated Payroll Engine",
      "Biometric & Geofenced Mobile Attendance",
      "Self-Service Employee Portal & Leave Approvals",
      "Applicant Tracking & Digital Onboarding"
    ],
    relatedProduct: "XenoHR"
  },
  {
    id: "education",
    title: "Education & Learning",
    category: "EdTech Systems",
    headline: "Interactive LMS, Student Analytics & Virtual Classrooms",
    description: "Empower schools, universities, and private academies with customized digital learning portals, live video classrooms, and automated student progress telemetry.",
    capabilities: [
      "Modular Course & Video Curriculum Builder",
      "Automated Quiz Evaluation & Digital Certifications",
      "Live Interactive Classrooms with WebRTC",
      "Parent & Student Progress Dashboards"
    ],
    relatedProduct: "XenoClass"
  },
  {
    id: "retail-ecommerce",
    title: "Retail & eCommerce",
    category: "Commerce Systems",
    headline: "Headless Storefronts, Mobile Billing & Stock Synchronization",
    description: "Connect your physical retail store and online storefront with real-time inventory tracking, mobile checkout, WhatsApp receipts, and high-conversion e-commerce.",
    capabilities: [
      "Mobile POS & Digital Receipt Distribution",
      "Multi-Location Inventory Synchronization",
      "Headless Storefronts with Sub-Second Checkout",
      "WhatsApp Cart Recovery & Re-Engagement"
    ],
    relatedProduct: "XenoBiz"
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    category: "Intelligent Systems",
    headline: "Autonomous Agents & Workflow Automation Engines",
    description: "Replace repetitive human data entry and delayed handoffs with autonomous AI swarms, custom LLM knowledge engines, and cross-platform webhooks.",
    capabilities: [
      "Domain-Specific Retrieval-Augmented Generation (RAG)",
      "Automated Document Extraction & OCR Pipelines",
      "Multi-Agent Operational Automation Swarms",
      "Cross-System ERP & CRM Webhook Orchestration"
    ],
    relatedProduct: "Xenotune"
  }
];

export const INDUSTRIES = [
  {
    id: "retail",
    slug: "retail",
    name: "Retail",
    icon: "ShoppingBag",
    tagline: "Modernizing Physical & Digital Commerce",
    capabilities: [
      "Mobile Point-of-Sale (POS) & Billing Systems",
      "Real-Time Multi-Store Inventory Synchronization",
      "WhatsApp Customer Loyalty & Digital Invoices",
      "Automated Vendor Order Routing"
    ],
    services: ["Mobile Apps", "Custom Software", "Automation"]
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    name: "eCommerce",
    icon: "ShoppingCart",
    tagline: "High-Speed Headless Storefronts & Logistics",
    capabilities: [
      "Sub-Second Headless Commerce Architecture",
      "Integrated Payment Gateway & Multi-Currency Checkouts",
      "Automated WhatsApp Order Tracking & Abandonment Recovery",
      "Predictive Re-Stocking Telemetry"
    ],
    services: ["Web Platforms", "Data Analytics", "Digital Growth"]
  },
  {
    id: "education",
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    tagline: "Scalable Learning Management Systems",
    capabilities: [
      "Custom LMS Portals & Courseware Delivery",
      "Live Video Virtual Classrooms (WebRTC)",
      "Automated Student Attendance & Grading",
      "Parent Notification Portals via WhatsApp"
    ],
    services: ["Web Development", "Mobile Apps", "AI & ML"]
  },
  {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate",
    icon: "Building",
    tagline: "Intelligent Property Portals & Lead Funnels",
    capabilities: [
      "Automated Lead Capture & Instant Agent Assignment",
      "Interactive 3D Virtual Tour Dashboards",
      "Multi-Portal Property Listing Aggregators",
      "Automated Contract & Escrow Document Tracking"
    ],
    services: ["SaaS Development", "Automation", "Technical SEO"]
  },
  {
    id: "finance",
    slug: "finance",
    name: "Finance",
    icon: "DollarSign",
    tagline: "Fintech Platforms & High-Frequency Ledgers",
    capabilities: [
      "Bank-Grade Secure Multi-Tenant Financial Systems",
      "Automated Bank Statement OCR & Reconciliation",
      "Real-Time Ledger & Portfolio Telemetry Dashboards",
      "Statutory Tax Compliance Verification"
    ],
    services: ["Enterprise Software", "Data Analytics", "AI & ML"]
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare",
    icon: "Activity",
    tagline: "Secure Patient Portals & Clinical Automation",
    capabilities: [
      "HIPAA-Compliant Patient Telemetry & Records",
      "Automated Appointment Booking & WhatsApp Reminders",
      "Medical Document Classification via AI",
      "Diagnostic Lab Integration Middleware"
    ],
    services: ["Custom Software", "AI & ML", "Web Portals"]
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    tagline: "Industrial IoT & Supply Chain Telemetry",
    capabilities: [
      "Shop-Floor Telemetry & Equipment Uptime Tracking",
      "Digital Quality Inspection Mobile Apps",
      "Automated Raw Material Re-Order Triggers",
      "Supply Chain Vendor Collaboration Portals"
    ],
    services: ["Mobile Development", "Data Analytics", "Automation"]
  },
  {
    id: "professional-services",
    slug: "professional-services",
    name: "Professional Services",
    icon: "Briefcase",
    tagline: "Client Workspaces & Workflow Engines",
    capabilities: [
      "Branded Client Collaboration & Document Vaults",
      "Automated Time Tracking & Billable Hour Invoicing",
      "Contract Proposal Generation Pipelines",
      "Project Milestone Tracking Telemetry"
    ],
    services: ["SaaS Development", "Web Development", "Automation"]
  },
  {
    id: "startups",
    slug: "startups",
    name: "Startups",
    icon: "Rocket",
    tagline: "Rapid MVP Engineering to Scalable SaaS",
    capabilities: [
      "0-to-1 Greenfield SaaS Product Development",
      "Modern Microservices & Serverless Cloud Architecture",
      "Payment Gateway & Subscription Model Integration",
      "Product-Led Growth (PLG) & Behavioral Tracking"
    ],
    services: ["SaaS Development", "Mobile Apps", "Growth Engineering"]
  },
  {
    id: "smes",
    slug: "smes",
    name: "Small & Medium Businesses",
    icon: "Store",
    tagline: "Digital Modernization & Operational Efficiency",
    capabilities: [
      "All-in-One Operations & Billing Modernization",
      "WhatsApp Automated Customer Support",
      "Spreadsheet-to-Cloud Database Migrations",
      "Local & Regional Digital Visibility"
    ],
    services: ["Automation", "Web Platforms", "SEO & Growth"]
  },
  {
    id: "enterprise",
    slug: "enterprise",
    name: "Enterprise",
    icon: "Layers",
    tagline: "Distributed Architecture & Security Compliance",
    capabilities: [
      "High-Throughput Microservice Engineering",
      "Role-Based Access Control (RBAC) & SSO Integration",
      "Legacy System API Modernization & Middleware",
      "24/7 Monitored Cloud Infrastructure"
    ],
    services: ["Enterprise Applications", "AI Systems", "Cloud & DevOps"]
  }
];

export const WHY_XENOTRIX = [
  {
    number: "01",
    title: "Product Thinking",
    description: "We build technology with product thinking, not just features. We prioritize unit economics, user retention, and long-term maintainability.",
    icon: "Layers"
  },
  {
    number: "02",
    title: "Engineering Excellence",
    description: "Modern architecture designed for reliability, sub-second latency, modular scalability, and zero technical debt accumulation.",
    icon: "Cpu"
  },
  {
    number: "03",
    title: "Business Understanding",
    description: "Technology aligned with real business objectives. Every system we build is evaluated on whether it saves cost, increases velocity, or unlocks revenue.",
    icon: "TrendingUp"
  },
  {
    number: "04",
    title: "AI-First Innovation",
    description: "Intelligent automation and neural models integrated directly into modern business workflows rather than superficial novelty widgets.",
    icon: "Sparkles"
  },
  {
    number: "05",
    title: "Scalable Solutions",
    description: "Solutions designed to evolve as businesses grow, from early-stage product validation to multi-tenant enterprise traffic.",
    icon: "ShieldCheck"
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    description: "Technology support beyond initial deployment. We partner with clients to monitor, optimize, and scale software infrastructure continuously.",
    icon: "Users"
  }
];

export const DEVELOPMENT_PROCESS = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understand the business and requirements.",
    description: "We perform a thorough technical and operational discovery to audit existing bottlenecks, target user journeys, and core system goals."
  },
  {
    step: "02",
    title: "Strategize",
    subtitle: "Define product strategy and technical architecture.",
    description: "We formulate the complete system blueprint: database schemas, API contracts, microservice boundaries, and deployment milestones."
  },
  {
    step: "03",
    title: "Design",
    subtitle: "Create the experience and interface.",
    description: "We create high-fidelity design systems, intuitive user flows, and interaction tokens optimized for speed, clarity, and conversion."
  },
  {
    step: "04",
    title: "Engineer",
    subtitle: "Build the platform using modern technologies.",
    description: "We write clean, modular, typed code backed by automated testing, microservice integration, and secure continuous integration pipelines."
  },
  {
    step: "05",
    title: "Launch",
    subtitle: "Deploy, test and optimize.",
    description: "Zero-downtime deployment onto modern cloud infrastructure with automated monitoring, SSL security, CDN caching, and telemetry logs."
  },
  {
    step: "06",
    title: "Scale",
    subtitle: "Improve, automate and expand.",
    description: "Post-launch, we track performance metrics, optimize conversion paths, extend features, and ensure system capacity scales smoothly."
  }
];

export const TECH_ECOSYSTEM = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "JavaScript", "HTML5", "CSS3 / Tailwind CSS", "TypeScript", "Framer Motion", "Three.js"]
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "Django", "Node.js", "REST APIs", "GraphQL", "gRPC Microservices"]
  },
  {
    category: "Databases & Storage",
    items: ["PostgreSQL", "MySQL", "Supabase", "Firebase", "Redis Cache", "ClickHouse Columnar DB"]
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart", "React Native", "iOS / Swift", "Android / Kotlin"]
  },
  {
    category: "AI & Intelligence",
    items: ["Generative AI", "AI APIs (OpenAI / Claude)", "Intelligent AI Agents", "PyTorch", "Qdrant / Pinecone Vector DBs", "LangChain"]
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Cloud Hosting", "Docker Containers", "APIs & Webhooks", "CI/CD Deployment", "Cloudflare Edge", "DevOps & Monitoring"]
  }
];

export const CASE_STUDIES = [
  {
    id: "xenocrm-platform",
    slug: "xenocrm",
    title: "XenoCRM: Unified Business OS Architecture",
    category: "SaaS Platform Engineering",
    client: "Commercial SaaS Initiative",
    industry: "Enterprise Software",
    image: "/assets/CRM.jpg",
    summary: "Architecting a multi-tenant business operating system uniting customer relationships, automated billing, and WhatsApp messaging.",
    challenge: "Modern SMBs suffer from fragmented SaaS stacks: separate tools for CRM, WhatsApp messaging, invoicing, and inventory lead to data silos, delayed customer responses, and high software overhead.",
    solution: "Designed a unified single-pane-of-glass architecture powered by FastAPI microservices, MySQL with Redis caching, and a reactive frontend with instant real-time synchronization.",
    technology: ["React", "FastAPI", "MySQL", "Redis", "Docker", "Tailwind CSS"],
    result: "Unified 5 disparate operational functions into a zero-latency interface, reducing customer response time and streamlining operational overhead."
  },
  {
    id: "xenotune-audio",
    slug: "xenotune",
    title: "Xenotune: Neural Generative Soundscapes",
    category: "AI & Neural Audio Engineering",
    client: "Proprietary AI Product",
    industry: "Digital Health & Focus Technology",
    image: "/assets/Xenotune.jpg",
    summary: "Engineering a low-latency WebAudio and mobile generative acoustic engine for deep focus and cognitive recovery.",
    challenge: "Standard pre-recorded ambient audio tracks are repetitive, static, and fail to adapt to continuous deep-work sessions or natural circadian transitions.",
    solution: "Engineered an algorithmic audio synthesizer that composes non-repeating acoustic soundscapes in real-time directly on the user's hardware utilizing native WebAudio oscillators and neural parameter synthesis.",
    technology: ["Flutter", "WebAudio API", "Python", "FastAPI", "PyTorch"],
    result: "Delivered infinite, non-repeating ambient soundscapes with 0ms buffering stutter and smooth cross-channel frequency modulation across Web and Mobile."
  },
  {
    id: "enterprise-automation",
    slug: "enterprise-automation",
    title: "Multi-Channel Business Automation Engine",
    category: "Workflow Automation & AI",
    client: "Regional Commercial Enterprise",
    industry: "Retail & Distribution",
    image: "/assets/Multi-Channel Business Automation Engine.png",
    summary: "Automating customer ordering, invoice delivery, and customer support triage through WhatsApp Business API and event webhooks.",
    challenge: "High customer order volumes resulted in manual data entry backlogs in accounting software and delayed order dispatch notifications.",
    solution: "Deployed an event-driven webhook pipeline connecting WhatsApp Business APIs directly to inventory and invoicing databases, with automated PDF receipt generation.",
    technology: ["n8n", "Node.js", "Python", "WhatsApp Cloud API", "PostgreSQL", "Docker"],
    result: "Automated end-to-end receipt distribution and customer order status checks, eliminating manual data entry delays."
  }
];

export const FAQS = [
  {
    q: "What does Xenotrix Technologies do?",
    a: "Xenotrix Technologies builds both proprietary technology products (like XenoCRM, XenoFin, XenoBiz, XenoClass, XenoHR, and Xenotune) and develops custom software, AI integrations, workflow automation, and digital platforms for modern businesses."
  },
  {
    q: "Who are the founders of Xenotrix Technologies and what are their domains?",
    a: "Xenotrix Technologies was co-founded in 2025 by Sanjay S (Principal Full-Stack & Cloud Architect: Microservices, Databases, Cloud Infrastructure, Frontend & Data Analytics), Abi C R (AI & Machine Learning Lead: AI Integration & Neural Models), and Hari Govind (Product Operations & Mobile Engineering Lead: Product Operations, Enterprise Scoping, Digital Growth & Flutter Mobile Apps)."
  },
  {
    q: "What proprietary products does Xenotrix offer?",
    a: "Our product ecosystem includes XenoCRM (Business OS & CRM), XenoFin (Financial Management Platform), XenoBiz (Mobile Billing & Operations for SMBs), XenoClass (Learning Management System), XenoHR (Human Resource & Payroll OS), and Xenotune (AI Ambient Soundscapes)."
  },
  {
    q: "What custom engineering services do you provide for businesses?",
    a: "We provide comprehensive services across four pillars: Software Engineering (Custom apps, SaaS, Web & Mobile), AI & Intelligence (AI agents, LLM integrations, predictive models), Digital Experience (Websites, eCommerce, UI/UX design systems), and Growth & Transformation (SEO, performance marketing, digital transformation)."
  },
  {
    q: "Where is Xenotrix Technologies located?",
    a: "Xenotrix Technologies is headquartered in Thiruvilwamala, Thrissur, Kerala, India (680594), and operates global remote engineering workflows supporting clients worldwide."
  },
  {
    q: "How does an engagement with Xenotrix begin?",
    a: "You can submit an inquiry through our Contact page, email info@xenotrix.in, or message us directly on WhatsApp (+91 9995544316). Our engineering and product leads review your requirements and schedule a technical discovery call."
  }
];
