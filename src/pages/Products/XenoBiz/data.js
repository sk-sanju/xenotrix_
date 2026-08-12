export const XENOBIZ_DATA = {
  name: "XenoBiz",
  badge: "COMING SOON",
  status: "IN ACTIVE DEVELOPMENT",
  tagline: "Run your business. Manage your customers. Grow with WhatsApp.",
  description: "A simple mobile business operating system designed for small businesses to manage billing, customers, inventory, payments, expenses, follow-ups and WhatsApp communication from one place.",
  heroEyebrow: "XENOTRIX PRODUCT · COMING SOON",
  heroHeadline: "RUN YOUR BUSINESS. FROM ONE PLACE.",
  heroSubheadline: "Billing. Customers. Inventory. Payments. WhatsApp. One simple business app.",
  
  pillars: [
    {
      num: "01",
      title: "RUN",
      subtitle: "Daily Business Operations",
      items: ["Billing & Invoicing", "Inventory & Stock", "Payment Tracking", "Purchases", "Expense Logs"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      num: "02",
      title: "MANAGE",
      subtitle: "Customer Relationships",
      items: ["Customer Profiles", "Lead Management", "Follow-up Reminders", "Customer Timeline", "Notes & History"],
      color: "from-violet-500 to-purple-600"
    },
    {
      num: "03",
      title: "GROW",
      subtitle: "Communication & Retain",
      items: ["WhatsApp Share", "Automated Reminders", "Repeat Sale Alerts", "Customer Retention", "Sales Analytics"],
      color: "from-emerald-500 to-teal-600"
    }
  ],

  features: [
    {
      id: "smart-billing",
      title: "Smart Billing",
      desc: "Create GST/standard invoices quickly, record partial or full payments, and share instantly via WhatsApp.",
      icon: "FileText"
    },
    {
      id: "customer-crm",
      title: "Customer CRM",
      desc: "Manage customer profiles, purchase history, outstanding balance ledgers, notes, and activity logs.",
      icon: "Users"
    },
    {
      id: "inventory",
      title: "Inventory Management",
      desc: "Track stock counts, purchases, sales deductions, manual adjustments, and receive low-stock alerts.",
      icon: "Package"
    },
    {
      id: "payments",
      title: "Payment Tracking",
      desc: "Record full and partial cash/online payments, view transaction histories, and track pending dues.",
      icon: "CreditCard"
    },
    {
      id: "leads-followups",
      title: "Leads & Follow-ups",
      desc: "Capture business leads, set follow-up tasks, schedule call reminders, and track conversion stages.",
      icon: "Calendar"
    },
    {
      id: "whatsapp-integration",
      title: "WhatsApp Communication",
      desc: "Share invoices, quotations, receipts, payment reminders, and follow-up messages directly on WhatsApp.",
      icon: "MessageSquare"
    },
    {
      id: "reports-analytics",
      title: "Business Reports",
      desc: "Real-time visibility into sales, revenue, expenses, net profit, receivables, payables, and top inventory items.",
      icon: "BarChart3"
    },
    {
      id: "offline-mode",
      title: "Offline-First Mode",
      desc: "Continue essential billing and customer logging without internet connectivity. Auto-syncs when online.",
      icon: "WifiOff"
    }
  ],

  quickActions: [
    { name: "New Invoice", icon: "PlusCircle", highlight: true },
    { name: "Add Customer", icon: "UserPlus" },
    { name: "Add Product", icon: "PackagePlus" },
    { name: "Record Payment", icon: "DollarSign" },
    { name: "Add Expense", icon: "TrendingDown" },
    { name: "Add Purchase", icon: "ShoppingBag" },
    { name: "Add Follow-up", icon: "Bell" }
  ],

  techStack: [
    "Flutter / Dart",
    "REST API (FastAPI / Django)",
    "PostgreSQL Database",
    "Riverpod State Management",
    "Local Offline Persistence (Drift / SQLite)",
    "Secure Encrypted Vault",
    "Auto-Sync Queue Engine"
  ],

  roadmap: [
    {
      phase: "PHASE 01",
      title: "Foundation Core",
      items: ["Authentication & Security", "Business Setup & Profiles", "Main Dashboard & Navigation"],
      status: "COMPLETED / IN TEST"
    },
    {
      phase: "PHASE 02",
      title: "Business Operations",
      items: ["Customer Directory", "Product Inventory & Stock", "Invoice Generator & Payments"],
      status: "ACTIVE DEVELOPMENT"
    },
    {
      phase: "PHASE 03",
      title: "CRM & Lead Pipeline",
      items: ["Leads Management", "Task & Follow-up Reminders", "Interactive Customer Activity Timeline"],
      status: "UPCOMING"
    },
    {
      phase: "PHASE 04",
      title: "WhatsApp & Communication",
      items: ["WhatsApp Invoice Sharing", "Message Templates", "Automated Payment Reminder Triggers"],
      status: "UPCOMING"
    },
    {
      phase: "PHASE 05",
      title: "Offline Sync Engine & Launch",
      items: ["Local Persistence Queue", "Background Sync Engine", "Play Store & App Store Deployment"],
      status: "PLANNED"
    }
  ]
};
