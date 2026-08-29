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
