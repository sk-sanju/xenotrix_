export const COMPANY_INFO = {
  name: "Xenotrix Technologies",
  tagline: "Building the Digital Infrastructure of Tomorrow",
  founded: "2025",
  founders: ["Sanjay S", "Abi C R", "Hari Govind"],
  description: "Xenotrix Technologies is an AI-first software, automation, and digital transformation company founded by Sanjay S, Abi C R, and Hari Govind, headquartered in Thrissur, Kerala, India.",
  email: "info@xenotrix.in",
  phone: "+91 9995544316",
  whatsapp: "+919995544316",
  address: "Thrissur, Kerala, India - 680001",
  location: "Thrissur, Kerala, India & Global Remote Operations",
  socials: {
    linkedin: "https://www.linkedin.com/company/xenotrixtech/",
    github: "https://github.com/Xenotrix-Technologies",
    instagram: "https://www.instagram.com/xenotrix_",
    twitter: "https://twitter.com/xenotrixtech",
    youtube: "https://youtube.com/@xenotrixtech",
  },
  systemStatus: "ALL SYSTEMS OPERATIONAL — 99.98% NODE RUNTIME",
};

export const FOUNDERS = [
  {
    name: "Sanjay S",
    role: "Co-Founder & Lead Software Engineer",
    focus: "AI Integration, Machine Learning & Core Frontend Architecture",
    bio: "Systems engineer specializing in artificial intelligence integration, LLM agent orchestrations, and high-performance Web / Mobile UI architectures.",
    skills: ["AI / ML", "React / Next.js", "Python", "FastAPI", "LLM Agents"],
    initials: "SS",
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Abi C R",
    role: "Co-Founder & Systems Architect",
    focus: "Full-Stack Microservices, Database Engineering & Cloud Infrastructure",
    bio: "Full-stack architect leading high-frequency backend engineering, distributed cloud deployments, microservices, and database security.",
    skills: ["FastAPI / Django", "PostgreSQL", "Flutter", "Docker / DevOps", "Microservices"],
    initials: "AC",
    color: "from-violet-500 to-purple-600"
  },
  {
    name: "Hari Govind",
    role: "Co-Founder & Product & Strategy Lead",
    focus: "Product Operations, Enterprise Scoping & Digital Growth",
    bio: "Product strategist driving enterprise client discovery, digital growth frameworks, technical SEO infrastructure, and client success operations.",
    skills: ["Product Strategy", "Technical SEO", "Workflow Automation", "Enterprise Solutions", "CRO"],
    initials: "HG",
    color: "from-blue-500 to-indigo-600"
  }
];

export const WHAT_WE_BUILD = [
  {
    id: "build",
    pillar: "BUILD",
    title: "Software & Web Platforms",
    subtitle: "High-performance enterprise applications built for scale.",
    icon: "Code2",
    description: "We build ultra-fast, resilient web applications, mobile platforms, and SaaS products using modern microservices and modular UI architectures.",
    capabilities: [
      "Enterprise Web & App Development",
      "Native & Cross-Platform Mobile Apps (Flutter)",
      "Multi-Tenant SaaS Architecture",
      "High-Frequency Distributed Backend APIs"
    ],
    tech: ["React", "Next.js", "FastAPI", "Django", "Flutter", "PostgreSQL"],
    link: "/services/web-development"
  },
  {
    id: "intelligence",
    pillar: "INTELLIGENCE",
    title: "Artificial Intelligence & ML",
    subtitle: "AI systems integrated directly into operational workflows.",
    icon: "Cpu",
    description: "From custom LLM orchestrations to document intelligence and predictive models, we embed domain-specific AI directly into business processes.",
    capabilities: [
      "LLM & Agentic AI Workflow Systems",
      "Custom Machine Learning Pipelines",
      "Predictive Analytics & BI Engines",
      "Document Intelligence & Vision AI"
    ],
    tech: ["Python", "PyTorch", "FastAPI", "OpenAI API", "Qdrant", "Vector DBs"],
    link: "/services/ai-development"
  },
  {
    id: "automate",
    pillar: "AUTOMATE",
    title: "Workflow & Business Automation",
    subtitle: "Autonomous process systems removing manual friction.",
    icon: "Workflow",
    description: "Eliminate repetitive tasks through custom integration engines, automated communication channels, and intelligent webhook routing.",
    capabilities: [
      "WhatsApp & Multi-Channel API Bots",
      "Autonomous AI Agent Swarms",
      "Enterprise ERP/CRM Integrations",
      "Automated Financial & Invoicing Pipelines"
    ],
    tech: ["n8n", "Node.js", "Redis", "WhatsApp Business API", "Docker"],
    link: "/services/automation"
  },
  {
    id: "grow",
    pillar: "GROW",
    title: "Digital Growth & Marketing",
    subtitle: "Data-driven architecture designed for high conversion.",
    icon: "TrendingUp",
    description: "Engineered web performance, technical SEO infrastructure, and conversion rate optimization based on real user behavior analysis.",
    capabilities: [
      "Real-Time Data Intelligence Dashboards",
      "Technical & Programmatic SEO",
      "Conversion Rate Optimization (CRO)",
      "Digital Product Growth Architecture"
    ],
    tech: ["Cloudflare", "ClickHouse", "PostHog", "Next.js", "Vite"],
    link: "/services/digital-growth"
  }
];

export const PRODUCTS = [
  {
    id: "xenocrm",
    name: "XenoCRM",
    badge: "Enterprise Business OS",
    tagline: "The all-in-one business operating system for modern scaling SMBs.",
    description: "Unify customer relationships, automated billing, team workflows, WhatsApp messaging, and predictive revenue forecasting in a single unified interface.",
    features: [
      "Unified Lead & Customer Management",
      "Native WhatsApp & Multi-Channel Communication",
      "Automated Invoicing & Recurring Billing Engine",
      "Inventory & Fulfillment Tracking",
      "AI Sales Pipeline Forecasting & Scoring",
      "Role-Based Access & Audit Logging"
    ],
    metrics: [
      { label: "Core Modules", value: "8 Connected Tools" },
      { label: "Automation Triggering", value: "< 12ms Latency" },
      { label: "Architecture", value: "Cloud Native SaaS" }
    ],
    techStack: ["React", "FastAPI", "MySQL", "Redis", "Docker", "Tailwind CSS"],
    ctaLink: "/products/xenocrm",
    demoAvailable: true,
    statusLabel: "PRODUCT"
  },
  {
    id: "xenotune",
    name: "Xenotune",
    badge: "AI Soundscape Platform",
    tagline: "Generative ambient audio engineered for deep focus, sleep, and performance.",
    description: "An AI-powered neural acoustic engine that dynamic-synthesizes generative soundscapes tailored to circadian rhythms and cognitive focus states.",
    features: [
      "Neural Soundscape Generation Engine",
      "Bio-Rhythm & Circadian Synchronization",
      "Custom Spatial Audio Filters",
      "Offline & Low-Bandwidth Adaptive Streaming",
      "Binaural Entrainment Frequencies",
      "Focus Analytics & Session Tracking"
    ],
    metrics: [
      { label: "Audio Latency", value: "< 5ms WebAudio" },
      { label: "Generative Patterns", value: "Infinite Variations" },
      { label: "Supported Platforms", value: "Web, iOS, Android" }
    ],
    techStack: ["Flutter", "WebAudio API", "Python", "FastAPI", "PyTorch"],
    ctaLink: "/products/xenotune",
    demoAvailable: true,
    statusLabel: "LIVE PRODUCT"
  },
  {
    id: "xenobiz",
    name: "XenoBiz",
    badge: "COMING SOON",
    tagline: "Run your business. Manage your customers. Grow with WhatsApp.",
    description: "A mobile-first business operating system for small businesses, shops, and wholesalers combining smart billing, customer CRM, inventory, payments, and WhatsApp messaging.",
    features: [
      "Smart Billing & Fast Invoicing",
      "Customer CRM & Ledgers",
      "Inventory & Stock Alerts",
      "Payment History & Receivables",
      "Leads & Scheduled Follow-ups",
      "Direct WhatsApp Messaging & Reminders",
      "Offline-First Operation & Auto Sync"
    ],
    metrics: [
      { label: "Target Platform", value: "Flutter Mobile (Android & iOS)" },
      { label: "Data Architecture", value: "Offline-First Engine" },
      { label: "Status", value: "In Active Development" }
    ],
    techStack: ["Flutter", "Dart", "REST API", "PostgreSQL", "Riverpod", "Offline Sync Engine"],
    ctaLink: "/products/xenobiz",
    demoAvailable: false,
    statusLabel: "COMING SOON",
    isUpcoming: true
  }
];

export const CASE_STUDIES = [
  {
    id: "xenocrm-case-study",
    slug: "xenocrm",
    title: "XenoCRM: Unified Business OS Architecture",
    category: "SaaS Platform",
    client: "Commercial Enterprise",
    industry: "Business Software",
    summary: "Architecting a multi-tenant business operating system serving high-velocity sales and operational workflows.",
    problem: "Modern SMBs suffer from fragmented SaaS stacks: separate tools for CRM, WhatsApp messaging, invoicing, and inventory lead to data silos, delayed responses, and high software overhead.",
    strategy: "Design a unified single-pane-of-glass architecture powered by microservices and a high-performance reactive frontend UI with instant real-time synchronization.",
    technology: ["React", "FastAPI", "MySQL", "Redis", "Docker", "Tailwind CSS"],
    execution: "Developed modular microservices, an isolated customer data vault, native WhatsApp Webhooks engine, and dynamic reporting dashboards in 14 weeks.",
    outcome: "Successfully unified 5 disparate operational functions into a zero-latency interface, reducing customer response time and operational overhead.",
    metrics: [
      { key: "Platform Latency", val: "< 100ms API Response" },
      { key: "Data Sync", val: "Real-time Event Streaming" },
      { key: "Modules Unified", val: "8 Core Operations" }
    ]
  },
  {
    id: "xenotune-case-study",
    slug: "xenotune",
    title: "Xenotune: Neural Generative Soundscapes",
    category: "AI & Audio Engineering",
    client: "Commercial Product",
    industry: "Digital Health & Focus Tech",
    summary: "Engineering a low-latency WebAudio and mobile generative acoustic engine for cognitive enhancement.",
    problem: "Standard pre-recorded ambient audio tracks are repetitive, static, and fail to adapt to long continuous focus sessions or natural circadian transitions.",
    strategy: "Build an algorithmic audio synthesizer that composes non-repeating acoustic soundscapes in real-time directly on the user's client hardware.",
    technology: ["Flutter", "WebAudio API", "FastAPI", "Python", "PyTorch"],
    execution: "Engineered procedural audio oscillators, binaural beats generators, and lightweight server-side neural parameter models delivered over WebSockets.",
    outcome: "Delivered infinite, non-repeating ambient soundscapes with 0ms buffering stutter and smooth cross-channel frequency modulation.",
    metrics: [
      { key: "Client Audio Processing", val: "Native WebAudio WebAssembly" },
      { key: "Soundscape Variety", val: "Infinite Dynamic Streams" },
      { key: "Cross-Platform", val: "Web, Desktop & Mobile" }
    ]
  }
];

export const PRINCIPLES = [
  {
    number: "01",
    title: "Business First",
    description: "We evaluate technology through commercial utility. If a system doesn't increase speed, save cost, or expand revenue capability, it shouldn't be built."
  },
  {
    number: "02",
    title: "AI Native",
    description: "Artificial intelligence isn't an afterthought or a superficial chatbot widget. We design systems from the ground up to utilize autonomous models and data loops."
  },
  {
    number: "03",
    title: "Built to Scale",
    description: "Clean architecture, modular design patterns, strict type definitions, and bulletproof deployment pipelines ensure systems grow without technical debt explosions."
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description: "We don't ship code and vanish. We partner with clients to continuously monitor, optimize, maintain, and iterate software infrastructure over years."
  }
];

export const TECH_ECOSYSTEM = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    category: "Backend",
    items: ["FastAPI", "Python", "Django", "Node.js", "Go", "GraphQL", "REST APIs", "gRPC"]
  },
  {
    category: "AI & ML",
    items: ["PyTorch", "OpenAI API", "LangChain", "LlamaIndex", "Vector DBs (Qdrant/Pinecone)", "HuggingFace"]
  },
  {
    category: "Mobile",
    items: ["Flutter", "React Native", "iOS / Swift", "Android / Kotlin"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Cloudflare", "Docker", "AWS", "DigitalOcean", "GitHub Actions", "Terraform", "Nginx"]
  },
  {
    category: "Databases & Cache",
    items: ["PostgreSQL", "MySQL", "Redis", "ClickHouse", "MongoDB", "Firebase"]
  },
  {
    category: "Automation & Integration",
    items: ["n8n", "WhatsApp Business API", "Zapier", "Webhooks", "Stripe API"]
  },
  {
    category: "Analytics & Marketing",
    items: ["PostHog", "Grafana", "Prometheus", "Sentry", "Google Analytics 4", "SEO Tools"]
  }
];

export const INDUSTRIES = [
  {
    id: "retail",
    slug: "retail",
    name: "Retail & E-Commerce",
    icon: "ShoppingBag",
    problems: ["Legacy inventory syncing latency", "Fragmented customer data across channels", "Cart abandonment"],
    solutions: ["Real-time multi-warehouse inventory engine", "WhatsApp automated re-engagement", "Headless commerce storefronts"],
    services: ["Web Development", "Automation", "SaaS Development"]
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: "Activity",
    problems: ["Manual patient scheduling friction", "Isolated EHR records", "Repetitive administrative triage"],
    solutions: ["Automated patient portal & intake forms", "AI document classification", "HIPAA-compliant API middleware"],
    services: ["AI Development", "Web Development", "Automation"]
  },
  {
    id: "finance",
    slug: "finance",
    name: "Finance & Fintech",
    icon: "DollarSign",
    problems: ["Slow loan/credit verification workflows", "Manual invoice matching", "Legacy database bottlenecks"],
    solutions: ["Automated document extraction pipeline", "High-frequency transaction dashboard", "Fraud anomaly alerting"],
    services: ["Data Analytics", "SaaS Development", "AI Development"]
  },
  {
    id: "logistics",
    slug: "logistics",
    name: "Logistics & Supply Chain",
    icon: "Truck",
    problems: ["Lack of real-time shipment visibility", "Manual dispatch communication", "Route inefficiency"],
    solutions: ["Fleet tracking & telemetry portal", "Automated WhatsApp driver notifications", "Predictive delivery estimation"],
    services: ["Mobile Development", "Automation", "Data Analytics"]
  },
  {
    id: "education",
    slug: "education",
    name: "Education & EdTech",
    icon: "GraduationCap",
    problems: ["Low student course completion", "Manual assignment grading", "Disjointed LMS portals"],
    solutions: ["Interactive learning platforms", "AI-assisted feedback tools", "Automated parent & student notifications"],
    services: ["Web Development", "Mobile Development", "AI Development"]
  },
  {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate & PropTech",
    icon: "Building",
    problems: ["Unqualified lead overload", "Manual property listing sync", "Slow client follow-up"],
    solutions: ["Automated AI lead qualification agent", "Multi-portal listing distribution", "Virtual property tour platforms"],
    services: ["Automation", "Web Development", "Digital Growth"]
  },
  {
    id: "professional-services",
    slug: "professional-services",
    name: "Professional Services",
    icon: "Briefcase",
    problems: ["Unbillable time tracking leakages", "Manual client proposal generation", "Clunky document sharing"],
    solutions: ["Custom client portal & billing engine", "Automated proposal generation", "Centralized CRM"],
    services: ["SaaS Development", "Automation", "Web Development"]
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    icon: "Factory",
    problems: ["Unplanned equipment downtime", "Paper-based quality check logs", "Disjointed vendor portals"],
    solutions: ["IoT sensor telemetry dashboard", "Mobile digital inspection app", "Automated procurement webhooks"],
    services: ["Data Analytics", "Mobile Development", "Automation"]
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Deep Technical Audit & Business Alignment",
    description: "We analyze your existing workflows, architecture bottlenecks, target users, and core unit economics before writing a single line of code."
  },
  {
    number: "02",
    title: "DEFINE",
    subtitle: "Product Blueprint & System Architecture",
    description: "We craft detailed technical specifications, database schemas, UX wireframes, API contracts, and milestone execution roadmaps."
  },
  {
    number: "03",
    title: "DESIGN",
    subtitle: "User Interface & Experience Systems",
    description: "Our design team creates sleek, futuristic, high-contrast visual layouts with design tokens optimized for speed, clarity, and conversion."
  },
  {
    number: "04",
    title: "ENGINEER",
    subtitle: "Agile Development & Code Rigor",
    description: "We write clean, modular, typed code backed by automated testing, microservice integration, and continuous integration pipelines."
  },
  {
    number: "05",
    title: "LAUNCH",
    subtitle: "Zero-Downtime Deployment & Validation",
    description: "Systems are deployed onto resilient cloud infrastructure with automated monitoring, SSL security, CDN caching, and telemetry logs."
  },
  {
    number: "06",
    title: "SCALE",
    subtitle: "Continuous Optimization & Iteration",
    description: "Post-launch, we track performance metrics, optimize conversion paths, extend features, and ensure system capacity scales seamlessly."
  }
];

export const FAQS = [
  {
    q: "Who are the founders of Xenotrix Technologies?",
    a: "Xenotrix Technologies was co-founded in 2025 by Sanjay S (Lead Software Engineer & AI Specialist), Abi C R (Systems Architect & Full-Stack Lead), and Hari Govind (Product Strategy & Operations Lead)."
  },
  {
    q: "What is XenoBiz and when will it be released?",
    a: "XenoBiz is an upcoming mobile-first business management, CRM, and WhatsApp application currently in active development. It is designed for small businesses, shops, and wholesalers to manage billing, inventory, payments, leads, and customer follow-ups from a single mobile app. You can join the Early Access waitlist to receive launch updates."
  },
  {
    q: "What core services does Xenotrix Technologies provide?",
    a: "Xenotrix Technologies builds custom enterprise software, AI/ML integrations, workflow automation platforms, high-performance web and mobile applications (Flutter), SaaS products, and digital marketing/SEO."
  },
  {
    q: "Do you work with international clients as well as regional businesses?",
    a: "Yes. Headquartered in Thrissur, Kerala, we serve both regional enterprises across Kerala, Chennai, and India as well as global international clients across North America, Europe, and Asia-Pacific."
  },
  {
    q: "Can Xenotrix build fully custom software from scratch?",
    a: "Absolutely. We specialize in greenfield software development, building clean modular architectures tailored precisely to your business requirements without reliance on restrictive off-the-shelf templates."
  },
  {
    q: "How do you integrate AI into existing business platforms?",
    a: "We assess your current operational data sources, define target automated outcomes, and build secure API bridges to LLMs, custom vector search databases, or machine learning models directly integrated into your existing CRM, ERP, or internal tools."
  },
  {
    q: "Can you automate WhatsApp, email, and internal team workflows?",
    a: "Yes. We build custom multi-channel automation systems using official WhatsApp Business APIs, webhook runners (like n8n and Node.js), and CRM webhooks to automate lead routing, customer support responses, payment collection, and notification triggers."
  },
  {
    q: "How does a project engagement begin?",
    a: "You can submit an inquiry through our Contact page, email info@xenotrix.in, message us on WhatsApp (+91 9995544316), or schedule a direct Discovery Call. We perform an initial scoping assessment within 24 hours."
  }
];

export const SERVICES_DETAIL = [
  {
    slug: "web-development",
    title: "Enterprise Web Development",
    heroHeadline: "HIGH-PERFORMANCE WEB SYSTEMS BUILT FOR SCALE.",
    subtitle: "Ultra-fast, responsive, secure web platforms engineered with modern frontend frameworks and resilient backend architectures.",
    problem: "Outdated web applications are slow, prone to security vulnerabilities, difficult to maintain, and fail to convert visitors into enterprise clients.",
    solution: "We build custom web platforms using modern stack patterns (React, Next.js, FastAPI, Node.js, Django) with modular component systems, sub-second page loads, and bulletproof security.",
    capabilities: [
      "Custom Single Page & Multi-Page Web Applications",
      "Headless CMS & High-Volume E-Commerce Engines",
      "Progressive Web Apps (PWA) with Offline Capability",
      "Real-Time Data Telemetry & WebSockets Dashboards",
      "RESTful & GraphQL API Infrastructure",
      "Technical SEO & Web Performance Engineering"
    ],
    tech: ["React", "Next.js", "Vite", "TypeScript", "FastAPI", "Django", "Tailwind CSS", "PostgreSQL", "Cloudflare"],
    caseStudyId: "xenocrm-case-study"
  },
  {
    slug: "mobile-development",
    title: "Mobile Application Engineering",
    heroHeadline: "FLUID NATIVE & CROSS-PLATFORM MOBILE EXPERIENCES.",
    subtitle: "High-performance iOS and Android applications designed with fluid micro-interactions and offline-first data sync.",
    problem: "Generic hybrid mobile apps feel sluggish, crash under heavy load, and suffer from poor device-hardware integration.",
    solution: "We build mobile apps using Flutter and React Native, delivering 60 FPS native performance, biometric security, push notifications, and resilient local data persistence.",
    capabilities: [
      "Cross-Platform iOS & Android Mobile Apps (Flutter)",
      "Native Hardware Integration (Camera, GPS, Bluetooth, NFC)",
      "Offline-First Architecture with Background Sync",
      "Push Notification & Engagement Engine",
      "App Store & Google Play Publishing Management",
      "In-App Purchases & Payment Gateway Integration"
    ],
    tech: ["Flutter", "React Native", "iOS / Swift", "Android / Kotlin", "Firebase", "SQLite", "FastAPI"],
    caseStudyId: "xenotune-case-study"
  },
  {
    slug: "ai-development",
    title: "Artificial Intelligence & ML Integration",
    heroHeadline: "AI THAT WORKS INSIDE YOUR BUSINESS.",
    subtitle: "Embed autonomous LLM agents, document intelligence pipelines, and predictive ML models directly into enterprise operations.",
    problem: "Most AI implementations are gimmicky chatbots that lack domain context, hallucinate answers, and remain disconnected from operational databases.",
    solution: "We architect enterprise AI systems using Retrieval-Augmented Generation (RAG), vector search databases, fine-tuned models, and deterministic workflow fallback safeguards.",
    capabilities: [
      "Custom LLM & RAG Knowledge Systems",
      "Autonomous Multi-Agent Workflow Swarms",
      "Document OCR, Classification & Extraction",
      "Predictive Revenue & Inventory Forecasting Models",
      "Natural Language Data Query Interfaces",
      "Voice & Audio Processing Pipelines"
    ],
    tech: ["Python", "PyTorch", "FastAPI", "OpenAI API", "Qdrant", "Pinecone", "LangChain", "Docker"],
    caseStudyId: "xenotune-case-study"
  },
  {
    slug: "automation",
    title: "Workflow & Business Automation",
    heroHeadline: "AUTONOMOUS SYSTEMS REMOVING OPERATIONAL FRICTION.",
    subtitle: "Eliminate repetitive manual tasks through multi-channel webhook runners, automated communication bots, and ERP integrations.",
    problem: "Teams waste thousands of hours manually copying data between systems, updating spreadsheets, sending follow-ups, and processing invoices.",
    solution: "We map your entire operational lifecycle and deploy resilient event-driven webhooks, WhatsApp Business bots, and database synchronization pipelines.",
    capabilities: [
      "WhatsApp Business API Multi-Agent Bots",
      "Automated Invoice & Billing Workflows",
      "Cross-Platform Webhook & API Middleware",
      "ERP & CRM Data Synchronization Engine",
      "Custom Email & SMS Alerting Systems",
      "Autonomous Scheduled Task Execution"
    ],
    tech: ["n8n", "Node.js", "Python", "WhatsApp API", "Redis", "Docker", "Stripe API"],
    caseStudyId: "xenocrm-case-study"
  },
  {
    slug: "saas-development",
    title: "SaaS Platform Development",
    heroHeadline: "FROM CONCEPT TO MULTI-TENANT SAAS REALITY.",
    subtitle: "End-to-end SaaS engineering: scalable database multi-tenancy, subscription billing, onboarding flows, and telemetry.",
    problem: "Building a SaaS application requires complex architecture decisions around tenant isolation, billing edge cases, team permissions, and API scalability.",
    solution: "We provide complete SaaS blueprints and codebases with multi-tenant data structures, Stripe billing integration, role-based access control (RBAC), and analytics.",
    capabilities: [
      "Multi-Tenant Database Architecture",
      "Stripe & International Subscription Billing Integration",
      "User Authentication, SSO & Role-Based Permissions",
      "Usage-Based Tier & Metered Billing Systems",
      "Customer Self-Service Onboarding Dashboards",
      "Developer API Keys & Webhook Distribution System"
    ],
    tech: ["React", "FastAPI", "PostgreSQL", "Redis", "Stripe", "Docker", "Cloudflare"],
    caseStudyId: "xenocrm-case-study"
  },
  {
    slug: "data-analytics",
    title: "Data Intelligence & Analytics",
    heroHeadline: "TURN RAW DATA INTO DECISION ADVANTAGE.",
    subtitle: "Real-time telemetry dashboards, data warehousing, and business intelligence systems engineered for fast insight.",
    problem: "Business data is scattered across legacy systems, leading to delayed decision-making and blind spots in operational metrics.",
    solution: "We aggregate disparate data streams into high-speed columnar databases and construct real-time executive dashboards.",
    capabilities: [
      "Real-Time Telemetry & Metric Dashboards",
      "Data Warehouse Architecture (ClickHouse / PostgreSQL)",
      "Automated ETL & Pipeline Transformation",
      "Executive KPI & Revenue Analytics",
      "User Analytics & Behavioral Tracking",
      "Custom Data Export & Scheduled Reporting"
    ],
    tech: ["ClickHouse", "PostgreSQL", "Python", "React", "Recharts", "PostHog", "Grafana"],
    caseStudyId: "xenocrm-case-study"
  },
  {
    slug: "digital-growth",
    title: "Digital Growth & SEO Optimization",
    heroHeadline: "ENGINEERED PRODUCT GROWTH & HIGH CONVERSION.",
    subtitle: "Optimize digital funnel performance through speed engineering, programmatic SEO, and user interaction design.",
    problem: "Even great digital products fail if user acquisition funnels suffer from slow page load speeds, poor SEO rankings, or high bounce rates.",
    solution: "We apply rigorous technical SEO audit patterns, edge caching optimization, and micro-conversion tracking to maximize organic reach and trial signups.",
    capabilities: [
      "Technical & Programmatic SEO Infrastructure",
      "Sub-Second Edge Caching & Asset Optimization",
      "Conversion Rate Optimization (CRO) Audits",
      "A/B Testing Framework Integration",
      "Product-Led Growth (PLG) Funnel Design",
      "Schema.org Structured Data Engineering"
    ],
    tech: ["Next.js", "Vite", "Cloudflare Edge Workers", "PostHog", "Lighthouse", "Schema.org"],
    caseStudyId: "xenocrm-case-study"
  }
];
