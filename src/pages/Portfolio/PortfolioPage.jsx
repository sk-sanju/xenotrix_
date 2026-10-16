import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../../components/common/SEO';
import { 
  CLIENT_STATS, 
  CLIENT_LOGOS, 
  PORTFOLIO_PROJECTS, 
  CLIENT_TESTIMONIALS, 
  ENGAGEMENT_WORKFLOW 
} from '../../data/portfolioData';
import { COMPANY_INFO } from '../../data/companyData';
import { 
  Sparkles, 
  Terminal, 
  Cpu, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Building2, 
  Globe2, 
  Quote, 
  Search, 
  Filter, 
  X, 
  ArrowUpRight, 
  Zap, 
  Smartphone, 
  Database, 
  Check, 
  Clock, 
  Phone, 
  Mail,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = useMemo(() => {
    const list = ['All'];
    PORTFOLIO_PROJECTS.forEach((p) => {
      if (p.category && !list.includes(p.category)) {
        list.push(p.category);
      }
    });
    return list;
  }, []);

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        proj.title?.toLowerCase().includes(query) ||
        proj.client?.toLowerCase().includes(query) ||
        proj.industry?.toLowerCase().includes(query) ||
        proj.tagline?.toLowerCase().includes(query) ||
        proj.techStack?.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter(p => p.featured);
  }, []);

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Portfolio', item: '/portfolio' }
  ];

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://xenotrix.in/portfolio#page",
    "name": "Client Portfolio & Engineering Case Studies — Xenotrix Technologies",
    "description": "Showcase of verified enterprise and startup software engineering client projects delivered by Xenotrix Technologies across Healthcare, Logistics, FinTech, EdTech, and E-Commerce.",
    "publisher": {
      "@type": "Organization",
      "@id": "https://xenotrix.in/#organization",
      "name": "Xenotrix Technologies"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": PORTFOLIO_PROJECTS.map((p, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": p.title,
        "description": p.tagline
      }))
    }
  };

  return (
    <>
      <SEO
        title="Client Portfolio & Engineering Showcases — Xenotrix Technologies"
        description="Explore Xenotrix Technologies' client portfolio: mission-critical SaaS architectures, AI-powered automation pipelines, mobile apps (Flutter), and cloud microservices built for market leaders."
        canonical="https://xenotrix.in/portfolio"
        keywords="Xenotrix portfolio, client projects, software case studies, web development clients Kerala, Flutter apps portfolio, AI automation clients, custom CRM portfolio, enterprise software showcase"
        breadcrumbs={breadcrumbs}
        schema={portfolioSchema}
      />

      <div className="pt-32 pb-28 bg-[#05070D] relative overflow-hidden min-h-screen">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-violet-600/10 to-transparent blur-3xl pointer-events-none -z-0" />
        <div className="absolute top-[800px] -right-40 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none -z-0" />
        <div className="absolute top-[1800px] -left-40 w-[600px] h-[400px] bg-violet-600/5 blur-[120px] pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">
          
          {/* 1. Header Hero Section */}
          <div className="space-y-8 max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-950/40">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="tracking-widest font-semibold uppercase">VERIFIED CLIENT DELIVERABLES & PORTFOLIO</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05]">
              Architecting Systems That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                Move Visionary Clients Forward.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-normal max-w-3xl">
              From high-throughput FinTech ledgers and HIPAA-compliant diagnostic platforms to autonomous WhatsApp dispatch engines and offline-first mobile apps. Transparent technical breakdowns of systems we have engineered for real businesses.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects-matrix"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 hover:text-black transition-all shadow-xl shadow-white/5 cursor-pointer"
              >
                <span>Browse Client Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                <span>Schedule Architectural Discovery</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </Link>
            </div>
          </div>

          {/* 2. Key Metrics Bar */}
          {CLIENT_STATS?.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {CLIENT_STATS.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-[#090D18]/90 border border-white/8 backdrop-blur-md space-y-1.5 hover:border-cyan-500/30 transition-colors group"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-zinc-300 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. Client Brands Showcase / Marquee Grid */}
          {CLIENT_LOGOS?.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  <Building2 className="w-4 h-4" />
                  <span>TRUSTED BY CLIENTS & INNOVATIVE BUSINESSES</span>
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  REGIONAL & COMMERCIAL PARTNERS
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {CLIENT_LOGOS.map((client) => (
                  <div
                    key={client.id}
                    className="p-4 rounded-2xl bg-[#080C14] border border-white/6 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all flex flex-col items-center justify-center text-center space-y-2 group cursor-default"
                  >
                    {client.logo ? (
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 p-1 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden relative">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="w-full h-full object-contain rounded-lg"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.nextSibling) {
                              e.currentTarget.nextSibling.style.display = 'flex';
                            }
                          }}
                        />
                        <div className={`w-full h-full bg-gradient-to-tr ${client.color || 'from-cyan-500 to-blue-600'} p-[1px] hidden items-center justify-center rounded-lg`}>
                          <div className="w-full h-full bg-[#05070D] rounded-[7px] flex items-center justify-center">
                            <span className="font-extrabold text-xs text-white font-mono">{client.initials}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${client.color || 'from-cyan-500 to-blue-600'} p-[1px] shadow-lg group-hover:scale-105 transition-transform`}>
                        <div className="w-full h-full bg-[#05070D] rounded-[11px] flex items-center justify-center">
                          <span className="font-extrabold text-xs text-white font-mono">{client.initials}</span>
                        </div>
                      </div>
                    )}
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate max-w-[130px]">
                        {client.name}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 truncate max-w-[130px]">
                        {client.category}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Flagship Client Spotlights (Featured Deep Dives) */}
          {featuredProjects?.length > 0 && (
            <div className="space-y-10 pt-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-800/40 text-[11px] font-mono text-violet-300 uppercase">
                  <Zap className="w-3 h-3 text-violet-400" />
                  <span>FLAGSHIP HIGHLIGHTS</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                  Featured Client Spotlights
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 max-w-2xl">
                  Deep architectural breakdowns of milestone platforms built, shipped, and actively scaled by Xenotrix Technologies.
                </p>
              </div>

            <div className="space-y-8">
              {featuredProjects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#090D18] to-[#070912] border border-white/12 shadow-2xl relative overflow-hidden space-y-8 group"
                >
                  {/* Subtle Accent Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 blur-3xl pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6 relative z-10">
                    <div className="space-y-2 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3">
                        {proj.clientLogo && (
                          <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
                            <img
                              src={proj.clientLogo}
                              alt={`${proj.client} logo`}
                              className="w-full h-full object-contain rounded"
                              onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                            />
                          </div>
                        )}
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-800/50 uppercase font-semibold">
                          {proj.client}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          {proj.industry} • {proj.location}
                        </span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/8">
                          {proj.engagementType}
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-cyan-200 transition-colors">
                        {proj.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        {proj.tagline}
                      </p>
                    </div>

                    {/* Hero Metric Pill */}
                    <div className="shrink-0 p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex flex-col justify-center text-left lg:text-right space-y-1">
                      <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest font-semibold">VERIFIED IMPACT</span>
                      <span className="font-display font-extrabold text-xl sm:text-2xl text-white text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
                        {proj.heroMetric}
                      </span>
                    </div>
                  </div>

                  {/* 4 Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                    {proj.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-4 rounded-xl bg-black/40 border border-white/6 space-y-1">
                        <div className="text-xl sm:text-2xl font-extrabold font-mono text-cyan-400">
                          {m.val}
                        </div>
                        <div className="text-[11px] text-zinc-300 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge & Solution Side-by-Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    <div className="p-6 rounded-2xl bg-black/50 border border-rose-500/20 space-y-2.5">
                      <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                        <Clock className="w-4 h-4" />
                        <span>THE CLIENT CHALLENGE</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {proj.challenge}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-black/50 border border-cyan-500/20 space-y-2.5">
                      <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
                        <Cpu className="w-4 h-4" />
                        <span>THE XENOTRIX ARCHITECTURE</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {proj.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack & Action Footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10 relative z-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono text-zinc-400 mr-2 uppercase">STACK:</span>
                      {proj.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-[11px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => setActiveModalProject(proj)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all cursor-pointer border border-white/10"
                      >
                        <span>View Technical Specs</span>
                        <ChevronRight className="w-4 h-4 text-cyan-400" />
                      </button>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-black hover:bg-cyan-300 font-bold text-xs transition-all cursor-pointer shadow-lg shadow-cyan-400/20"
                      >
                        <span>Build Similar</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* 5. Interactive Filterable Client Projects Matrix */}
          <div id="projects-matrix" className="space-y-10 pt-10 border-t border-white/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-[11px] font-mono text-cyan-300 uppercase">
                  <Filter className="w-3 h-3 text-cyan-400" />
                  <span>CLIENT DIRECTORY // ALL VERTICALS</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                  Explore All Client Engagements
                </h2>
                <p className="text-sm sm:text-base text-zinc-300">
                  Filter by engineering pillar, industry, or search by specific technologies (e.g., Python, Flutter, FastAPI, Redis, React).
                </p>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-80 shrink-0">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search clients, tech, domains..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#080C14] border border-white/12 rounded-xl pl-10 pr-10 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Buttons Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white border border-white/8'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results Counter */}
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <div>
                Showing <span className="text-cyan-400 font-bold">{filteredProjects.length}</span> verified client deliverables
              </div>
              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Reset Filters</span>
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Projects Grid */}
            {filteredProjects.length === 0 ? (
              <div className="p-16 rounded-3xl bg-[#090D18] border border-white/10 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-zinc-400">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">No Client Projects Found</h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto">
                  No projects matched your search criteria "{searchQuery}". Try searching for another technology (e.g. "React", "Python", "Flutter") or clear the filters.
                </p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="px-5 py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all cursor-pointer"
                >
                  View All Projects
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="p-7 rounded-3xl bg-[#090D18] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xl hover:-translate-y-1.5"
                  >
                    <div className="space-y-5">
                      {/* Top Card Bar */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 text-zinc-400 border border-white/8 uppercase">
                            {project.industry}
                          </span>
                          <div className="flex items-center gap-2 pt-1">
                            {project.clientLogo && (
                              <div className="w-5 h-5 rounded bg-white/5 border border-white/10 p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
                                <img
                                  src={project.clientLogo}
                                  alt={`${project.client} logo`}
                                  className="w-full h-full object-contain rounded"
                                  onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                                />
                              </div>
                            )}
                            <span className="text-xs font-mono text-cyan-400 font-semibold truncate">
                              {project.client}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {project.location.split(',')[0]}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Hero Impact Badge */}
                      <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 flex items-center gap-2.5 text-xs text-cyan-300 font-mono">
                        <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="font-semibold truncate">{project.heroMetric}</span>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-white/5 text-zinc-300 text-[10px] font-mono border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-400 text-[10px] font-mono">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Card Actions */}
                    <div className="pt-4 border-t border-white/8 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Specifications</span>
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                      </button>

                      <Link
                        to="/contact"
                        className="p-2 rounded-xl bg-white/5 hover:bg-cyan-400 hover:text-black text-zinc-300 transition-all cursor-pointer"
                        title="Inquire about similar solution"
                        aria-label={`Inquire about ${project.title}`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 6. Verified Client Endorsements & Testimonials */}
          {CLIENT_TESTIMONIALS?.length > 0 && (
            <div className="space-y-12 pt-10 border-t border-white/10">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-[11px] font-mono text-cyan-300 uppercase">
                  <Quote className="w-3.5 h-3.5 text-cyan-400" />
                  <span>EXECUTIVE TESTIMONIALS</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                  What Client Leaders Say
                </h2>
                <p className="text-sm sm:text-base text-zinc-300">
                  Unvarnished feedback from founders, owners, and operations directors who partner with Xenotrix Technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CLIENT_TESTIMONIALS.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-[#090D18] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-6 shadow-xl relative group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-cyan-400">
                          {[...Array(5)].map((_, i) => (
                            <Sparkles key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                          {t.metric}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/8 flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${t.avatarColor} p-[1px] shrink-0`}>
                        <div className="w-full h-full bg-[#05070D] rounded-[11px] flex items-center justify-center font-bold text-xs text-white">
                          {t.author.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <div className="text-xs font-bold text-white truncate">
                          {t.author}
                        </div>
                        <div className="text-[11px] text-zinc-400 truncate">
                          {t.role}
                        </div>
                        <div className="text-[10px] font-mono text-cyan-400 truncate">
                          {t.company} • {t.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. Client Engagement Framework / How We Partner */}
          {ENGAGEMENT_WORKFLOW?.length > 0 && (
            <div className="space-y-12 pt-10 border-t border-white/10">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-800/40 text-[11px] font-mono text-violet-300 uppercase">
                  <Terminal className="w-3.5 h-3.5 text-violet-400" />
                  <span>HOW WE COLLABORATE</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                  Our Client Partnership Workflow
                </h2>
                <p className="text-sm sm:text-base text-zinc-300">
                  A predictable, transparent 4-stage engineering lifecycle engineered for zero technical surprises and guaranteed milestone execution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ENGAGEMENT_WORKFLOW.map((wf, idx) => (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-[#090D18] border border-white/10 space-y-4 relative flex flex-col justify-between group hover:border-cyan-500/30 transition-all"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                          {wf.step}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/6">
                          {wf.timeframe}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {wf.phase}
                      </h3>

                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {wf.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/8 space-y-1.5">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">KEY DELIVERABLES:</div>
                      {wf.deliverables?.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                          <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span className="truncate">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. Conversion & Inquiry Callout */}
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0B101E] via-[#090D18] to-[#060910] border border-white/15 relative overflow-hidden text-center space-y-8 shadow-2xl">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/10 blur-[100px] pointer-events-none" />

            <div className="max-w-3xl mx-auto space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-[11px] font-mono text-cyan-300 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START YOUR ENGAGEMENT</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                Have a Mission-Critical System to Build?
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto">
                Schedule an architectural discovery session with our technical leads. We evaluate your scope, analyze edge cases, and present a clear technical blueprint within 48 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 hover:text-black transition-all shadow-xl shadow-white/10 cursor-pointer"
              >
                <span>Talk to Xenotrix Engineering</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Xenotrix team, I reviewed your client portfolio and would like to discuss building a project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-bold text-xs uppercase tracking-wider border border-emerald-500/30 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-zinc-400 relative z-10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>NDA & IP Ownership Included</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>48h Discovery Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 9. Interactive Technical Specs Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#090D18] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8 border-b border-white/10 pb-5">
                <div className="flex flex-wrap items-center gap-2">
                  {activeModalProject.clientLogo && (
                    <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
                      <img
                        src={activeModalProject.clientLogo}
                        alt={`${activeModalProject.client} logo`}
                        className="w-full h-full object-contain rounded"
                        onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                      />
                    </div>
                  )}
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40 uppercase font-semibold">
                    {activeModalProject.client}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {activeModalProject.industry} • {activeModalProject.location}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    Year: {activeModalProject.year}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-mono">
                  {activeModalProject.engagementType}
                </p>
              </div>

              {/* Verified Impact Banner */}
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-300 uppercase">Primary Milestone:</span>
                <span className="text-sm font-bold text-cyan-300 font-mono">{activeModalProject.heroMetric}</span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeModalProject.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/6 space-y-0.5">
                    <div className="text-lg font-bold font-mono text-cyan-400">{m.val}</div>
                    <div className="text-[10px] text-zinc-400">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-black/40 border border-rose-500/20 space-y-1.5">
                  <span className="text-rose-400 font-mono font-bold uppercase text-xs">Business Challenge:</span>
                  <p className="text-zinc-300 leading-relaxed">{activeModalProject.challenge}</p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-cyan-500/20 space-y-1.5">
                  <span className="text-cyan-400 font-mono font-bold uppercase text-xs">Architectural Strategy:</span>
                  <p className="text-zinc-300 leading-relaxed">{activeModalProject.architecture}</p>
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono text-zinc-400 uppercase font-semibold">Key Production Deliverables:</h4>
                <ul className="space-y-2">
                  {activeModalProject.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack Badges */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono text-zinc-400 uppercase font-semibold">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stakeholder Testimonial */}
              {activeModalProject.testimonial && (
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2 italic text-xs text-zinc-300">
                  <p>"{activeModalProject.testimonial.quote}"</p>
                  <div className="not-italic text-[11px] font-mono text-cyan-400">
                    — {activeModalProject.testimonial.author}, {activeModalProject.testimonial.role} ({activeModalProject.testimonial.organization})
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-cyan-400 text-black hover:bg-cyan-300 font-bold text-xs transition-all cursor-pointer shadow-lg shadow-cyan-400/20"
                >
                  <span>Inquire About Similar Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
