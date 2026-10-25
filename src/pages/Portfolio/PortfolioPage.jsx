import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Search, 
  X, 
  ChevronRight,
  TrendingUp,
  Clock,
  Cpu,
  Building2,
  Quote,
  ShieldCheck,
  Mail,
  Phone,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { 
  CLIENT_STATS, 
  CLIENT_LOGOS, 
  PORTFOLIO_PROJECTS, 
  CLIENT_TESTIMONIALS, 
  ENGAGEMENT_WORKFLOW 
} from '../../data/portfolioData';
import { COMPANY_INFO } from '../../data/companyData';

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

  return (
    <>
      <SEO
        title="Client Portfolio & Engineering Showcases — Xenotrix Technologies"
        description="Explore Xenotrix Technologies' client portfolio: mission-critical SaaS architectures, AI-powered automation pipelines, mobile apps (Flutter), and cloud microservices built for market leaders."
        canonical="https://xenotrix.in/portfolio"
        breadcrumbs={breadcrumbs}
      />

      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* 1. Header Hero Section */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="font-normal text-4xl sm:text-5xl lg:text-6xl text-[#1f3038] tracking-tight leading-[1.06]">
              Client deliverables and <br />engineering proof.
            </h1>

            <p className="text-lg sm:text-xl text-[#5d6b72] leading-relaxed">
              From high-throughput ledgers and diagnostic platforms to autonomous WhatsApp dispatch engines and offline-first mobile apps. Transparent technical breakdowns of systems we have engineered for real businesses.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects-matrix"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors"
              >
                <span>Browse Client Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#ecf0f2] hover:bg-[#e2e8eb] text-[#1f3038] font-medium text-sm transition-colors"
              >
                <span>Schedule Architectural Discovery</span>
                <ChevronRight className="w-4 h-4 text-[#5d6b72]" />
              </Link>
            </div>
          </div>

          {/* 2. Key Metrics Bar */}
          {CLIENT_STATS?.length > 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {CLIENT_STATS.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-xl bg-[#ecf0f2] space-y-1"
                >
                  <div className="text-2xl sm:text-3xl font-semibold text-[#1f3038]">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-[#1f3038]">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#5d6b72]">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. Client Brands Showcase */}
          {CLIENT_LOGOS?.length > 0 && (
            <div id="trusted-partners" className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#d8e0e4] pb-4">
                <div className="text-xs font-semibold text-[#0d7480]">
                  Trusted by Regional & Commercial Partners
                </div>
                <span className="text-xs text-[#5d6b72]">
                  Kerala, India & Global Operations
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {CLIENT_LOGOS.map((client) => (
                  <div
                    key={client.id}
                    className="p-4 rounded-xl bg-[#ecf0f2] flex flex-col items-center justify-center text-center space-y-3 transition-transform hover:-translate-y-0.5 duration-200"
                  >
                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center p-2.5 shadow-xs border border-[#1f3038]/5 overflow-hidden shrink-0">
                      {client.logo ? (
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full rounded-lg bg-[#1f3038] text-white flex items-center justify-center font-bold text-xs">
                          {client.initials}
                        </div>
                      )}
                    </div>
                    <div className="w-full space-y-0.5">
                      <div className="text-xs font-semibold text-[#1f3038] truncate">
                        {client.name}
                      </div>
                      <div className="text-[11px] text-[#5d6b72] truncate">
                        {client.category}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Flagship Client Spotlights */}
          {featuredProjects?.length > 0 && (
            <div className="space-y-10">
              <div className="space-y-2">
                <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                  Featured Client Spotlights
                </h2>
                <p className="text-sm sm:text-base text-[#5d6b72] max-w-2xl">
                  Deep architectural breakdowns of milestone platforms built, shipped, and actively scaled by Xenotrix Technologies.
                </p>
              </div>

              <div className="space-y-8">
                {featuredProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2] space-y-8"
                  >
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#d8e0e4] pb-6">
                      <div className="space-y-2 max-w-3xl">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="font-semibold text-[#0d7480] bg-[#f7f9fa] px-3 py-1 rounded">
                            {proj.client}
                          </span>
                          <span className="text-[#5d6b72]">
                            {proj.industry} • {proj.location}
                          </span>
                          <span className="text-[#1f3038] bg-[#f7f9fa] px-2.5 py-1 rounded font-medium">
                            {proj.engagementType}
                          </span>
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0d7480]/10 hover:bg-[#0d7480]/20 text-[#0d7480] font-semibold transition-colors"
                              title="Visit live client website"
                            >
                              <span>
                                {proj.liveUrl.includes('google.com') || proj.liveUrl.includes('maps')
                                  ? 'Google Business Profile'
                                  : proj.liveUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                              </span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>

                        <h3 className="font-semibold text-2xl sm:text-3xl text-[#1f3038]">
                          {proj.title}
                        </h3>

                        <p className="text-sm sm:text-base text-[#5d6b72] leading-relaxed">
                          {proj.tagline}
                        </p>
                      </div>

                      {/* Hero Metric Pill */}
                      <div className="shrink-0 p-5 rounded-lg bg-[#f7f9fa] space-y-1 text-left lg:text-right">
                        <span className="text-xs font-semibold text-[#0d7480]">Verified Impact</span>
                        <div className="font-semibold text-xl text-[#1f3038]">
                          {proj.heroMetric}
                        </div>
                      </div>
                    </div>

                    {/* 4 Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {proj.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-4 rounded-lg bg-[#f7f9fa] space-y-1">
                          <div className="text-xl font-semibold text-[#1f3038]">
                            {m.val}
                          </div>
                          <div className="text-xs text-[#5d6b72]">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Challenge & Solution Side-by-Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-lg bg-[#f7f9fa] space-y-2">
                        <div className="text-xs font-semibold text-[#5d6b72]">
                          The Operational Challenge
                        </div>
                        <p className="text-sm text-[#1f3038] leading-relaxed">
                          {proj.challenge}
                        </p>
                      </div>

                      <div className="p-6 rounded-lg bg-[#f7f9fa] space-y-2">
                        <div className="text-xs font-semibold text-[#0d7480]">
                          The Xenotrix Architecture
                        </div>
                        <p className="text-sm text-[#1f3038] leading-relaxed">
                          {proj.solution}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack & Action Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#d8e0e4]">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-medium text-[#5d6b72] mr-1">Stack:</span>
                        {proj.techStack.map((tech, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2.5 py-1 rounded bg-[#f7f9fa] text-xs font-medium text-[#1f3038]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 shrink-0 flex-wrap">
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#0d7480] hover:bg-[#0b5f69] text-white text-xs font-semibold transition-colors shadow-xs"
                          >
                            <span>
                              {proj.liveUrl.includes('instagram.com')
                                ? 'Instagram Store'
                                : proj.liveUrl.includes('google.com') || proj.liveUrl.includes('maps')
                                ? 'Google Business Profile'
                                : 'Live Website'}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <button
                          onClick={() => setActiveModalProject(proj)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#f7f9fa] hover:bg-[#e2e8eb] text-xs font-semibold text-[#1f3038] transition-colors cursor-pointer"
                        >
                          <span>Specifications</span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#0d7480]" />
                        </button>

                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white text-xs font-semibold transition-colors"
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
          <div id="projects-matrix" className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                  All Client Engagements
                </h2>
                <p className="text-sm sm:text-base text-[#5d6b72]">
                  Filter by sector, domain, or search by specific technologies (e.g., Python, Flutter, FastAPI, Redis, React).
                </p>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-80 shrink-0">
                <Search className="w-4 h-4 text-[#5d6b72] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search clients, tech, domains..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#ecf0f2] rounded-lg pl-10 pr-10 py-2.5 text-sm text-[#1f3038] placeholder-[#5d6b72] focus:outline-none focus:ring-1 focus:ring-[#0d7480]"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5d6b72] hover:text-[#1f3038]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Buttons Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#1f3038] text-white'
                      : 'bg-[#ecf0f2] text-[#1f3038] hover:bg-[#e2e8eb]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results Counter */}
            <div className="flex items-center justify-between text-xs text-[#5d6b72]">
              <div>
                Showing <span className="text-[#0d7480] font-semibold">{filteredProjects.length}</span> verified client deliverables
              </div>
              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="text-[#0d7480] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>Reset Filters</span>
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Projects Grid */}
            {filteredProjects.length === 0 ? (
              <div className="p-16 rounded-xl bg-[#ecf0f2] text-center space-y-4">
                <h3 className="text-xl font-semibold text-[#1f3038]">No Client Projects Found</h3>
                <p className="text-sm text-[#5d6b72] max-w-md mx-auto">
                  No projects matched your search criteria "{searchQuery}". Try searching for another technology (e.g. "React", "Python", "Flutter") or clear the filters.
                </p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="px-5 py-2.5 rounded bg-[#1f3038] text-white text-xs font-semibold hover:bg-[#0d7480] transition-colors cursor-pointer"
                >
                  View All Projects
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="p-8 rounded-xl bg-[#ecf0f2] hover:bg-[#e2e8eb] transition-colors flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-4">
                      {/* Top Card Bar */}
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-xs font-medium text-[#0d7480] bg-[#f7f9fa] px-2.5 py-1 rounded">
                          {project.industry}
                        </span>
                        <span className="text-xs text-[#5d6b72]">
                          {project.location.split(',')[0]}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1.5">
                        <div className="text-xs font-semibold text-[#0d7480]">
                          {project.client}
                        </div>
                        <h3 className="font-semibold text-xl text-[#1f3038] leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#5d6b72] line-clamp-3 leading-relaxed">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Hero Impact Badge */}
                      <div className="p-3 rounded-lg bg-[#f7f9fa] flex items-center gap-2.5 text-xs text-[#1f3038] font-medium">
                        <TrendingUp className="w-4 h-4 text-[#0d7480] shrink-0" />
                        <span className="truncate">{project.heroMetric}</span>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-[#f7f9fa] text-[#1f3038] text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Card Actions */}
                    <div className="pt-4 border-t border-[#d8e0e4] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="text-xs font-semibold text-[#0d7480] hover:text-[#1f3038] flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <span>Specifications</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-[#0d7480] hover:text-[#0b5f69] flex items-center gap-1 transition-colors"
                          >
                            <span>
                              {project.liveUrl.includes('instagram.com')
                                ? 'Instagram Store'
                                : project.liveUrl.includes('google.com') || project.liveUrl.includes('maps')
                                ? 'Google Maps'
                                : 'Live Site'}
                            </span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      <Link
                        to="/contact"
                        className="p-2 rounded bg-[#f7f9fa] hover:bg-[#1f3038] hover:text-white text-[#1f3038] transition-colors cursor-pointer"
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
            <div className="space-y-10">
              <div className="space-y-2">
                <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                  Client Leadership Endorsements
                </h2>
                <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                  Feedback from enterprise founders, directors, and operational heads who build with Xenotrix.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CLIENT_TESTIMONIALS.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-xl bg-[#ecf0f2] flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="text-xs font-semibold text-[#0d7480] bg-[#f7f9fa] px-3 py-1 rounded inline-block">
                        {t.metric}
                      </div>

                      <p className="text-sm text-[#1f3038] leading-relaxed italic">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#d8e0e4] flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-[#1f3038] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {t.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[#1f3038] truncate">
                          {t.author}
                        </div>
                        <div className="text-xs text-[#5d6b72] truncate">
                          {t.role}
                        </div>
                        <div className="text-xs text-[#0d7480] truncate font-medium">
                          {t.company} • {t.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. Client Engagement Framework */}
          {ENGAGEMENT_WORKFLOW?.length > 0 && (
            <div className="space-y-10">
              <div className="space-y-2">
                <h2 className="font-normal text-3xl sm:text-4xl text-[#1f3038] tracking-tight">
                  Engineering Partnership Lifecycle
                </h2>
                <p className="text-sm sm:text-base text-[#5d6b72] max-w-xl">
                  A predictable, transparent 4-stage engineering process designed for zero surprises and guaranteed milestone execution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ENGAGEMENT_WORKFLOW.map((wf, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-xl bg-[#ecf0f2] space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-2xl text-[#0d7480]">
                          {wf.step}
                        </span>
                        <span className="text-xs text-[#5d6b72] bg-[#f7f9fa] px-2 py-0.5 rounded">
                          {wf.timeframe}
                        </span>
                      </div>

                      <h3 className="font-semibold text-lg text-[#1f3038]">
                        {wf.phase}
                      </h3>

                      <p className="text-sm text-[#5d6b72] leading-relaxed">
                        {wf.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#d8e0e4] space-y-1.5">
                      <div className="text-xs font-semibold text-[#1f3038]">Key Deliverables:</div>
                      {wf.deliverables?.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-1.5 text-xs text-[#5d6b72]">
                          <Check className="w-3.5 h-3.5 text-[#0d7480] shrink-0" />
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
          <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-normal text-2xl sm:text-3xl text-[#1f3038]">
                Have a mission-critical system to build?
              </h2>
              <p className="text-sm sm:text-base text-[#5d6b72]">
                Schedule an architectural discovery session with our technical leads. We evaluate your scope, analyze edge cases, and present a clear technical blueprint within 48 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors"
              >
                <span>Talk to Xenotrix Engineering</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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
              className="fixed inset-0 bg-[#1f3038]/50"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-3xl rounded-xl bg-[#f7f9fa] p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto z-10 text-[#1f3038] border border-[#d8e0e4] shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded bg-[#ecf0f2] hover:bg-[#e2e8eb] text-[#5d6b72] hover:text-[#1f3038] transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8 border-b border-[#d8e0e4] pb-5">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-[#0d7480] bg-[#ecf0f2] px-2.5 py-1 rounded">
                    {activeModalProject.client}
                  </span>
                  <span className="text-[#5d6b72]">
                    {activeModalProject.industry} • {activeModalProject.location}
                  </span>
                  <span className="text-[#5d6b72]">
                    Year: {activeModalProject.year}
                  </span>
                </div>
                <h3 className="font-semibold text-2xl sm:text-3xl text-[#1f3038]">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs font-semibold text-[#0d7480]">
                  {activeModalProject.engagementType}
                </p>
              </div>

              {/* Verified Impact Banner */}
              <div className="p-4 rounded-lg bg-[#ecf0f2] flex items-center justify-between text-xs">
                <span className="text-[#5d6b72] font-medium">Primary Milestone:</span>
                <span className="font-semibold text-[#0d7480] text-sm">{activeModalProject.heroMetric}</span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeModalProject.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#ecf0f2] space-y-0.5">
                    <div className="text-lg font-semibold text-[#1f3038]">{m.val}</div>
                    <div className="text-xs text-[#5d6b72]">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-lg bg-[#ecf0f2] space-y-1">
                  <span className="text-xs font-semibold text-[#5d6b72]">Business Challenge:</span>
                  <p className="text-[#1f3038] leading-relaxed">{activeModalProject.challenge}</p>
                </div>

                <div className="p-4 rounded-lg bg-[#ecf0f2] space-y-1">
                  <span className="text-xs font-semibold text-[#0d7480]">Architectural Strategy:</span>
                  <p className="text-[#1f3038] leading-relaxed">{activeModalProject.architecture}</p>
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold text-[#1f3038]">Key Production Deliverables:</h4>
                <ul className="space-y-2">
                  {activeModalProject.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#5d6b72]">
                      <Check className="w-4 h-4 text-[#0d7480] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack Badges */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-semibold text-[#1f3038]">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded bg-[#ecf0f2] text-xs text-[#1f3038] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#d8e0e4] flex flex-col sm:flex-row items-center justify-end gap-3">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded bg-[#0d7480] hover:bg-[#0b5f69] text-white text-xs font-semibold transition-colors"
                  >
                    <span>
                      {activeModalProject.liveUrl.includes('instagram.com')
                        ? 'View Instagram Store'
                        : activeModalProject.liveUrl.includes('google.com') || activeModalProject.liveUrl.includes('maps')
                        ? 'View on Google Maps'
                        : 'Visit Live Website'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded bg-[#ecf0f2] hover:bg-[#e2e8eb] text-[#1f3038] text-xs font-medium cursor-pointer"
                >
                  Close
                </button>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white text-xs font-medium transition-colors cursor-pointer"
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

export default PortfolioPage;
