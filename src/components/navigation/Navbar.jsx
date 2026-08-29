import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Terminal, 
  ChevronDown, 
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  BarChart3,
  CreditCard,
  GraduationCap,
  Users,
  Music,
  Smartphone,
  Code2,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS, SERVICE_CATEGORIES } from '../../data/companyData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const productIcons = {
    xenocrm: BarChart3,
    xenofin: CreditCard,
    xenobiz: Smartphone,
    xenoclass: GraduationCap,
    xenohr: Users,
    xenotune: Music
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between px-5 py-2.5 rounded-2xl transition-all duration-300 ${
              scrolled
                ? 'bg-[#080C14]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50'
                : 'bg-[#080C14]/60 backdrop-blur-md border border-white/8'
            }`}
          >
            {/* Official Xenotrix Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none shrink-0"
              aria-label="Xenotrix Technologies Home"
            >
              <div className="relative overflow-hidden rounded-xl border border-white/15 group-hover:border-cyan-500/50 transition-colors p-0.5 bg-black/40">
                <img
                  src="/assets/logo.jpeg"
                  alt="Xenotrix Technologies Logo"
                  width="32"
                  height="32"
                  decoding="async"
                  fetchPriority="high"
                  className="h-8 w-8 object-contain rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px] hidden items-center justify-center">
                  <div className="w-full h-full bg-[#05070D] rounded-[7px] flex items-center justify-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-extrabold text-sm">X</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold tracking-widest text-sm text-white group-hover:text-cyan-300 transition-colors">
                  XENOTRIX
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Mega Menus */}
            <div className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide">
              
              {/* Products Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/products"
                  className={`flex items-center gap-1.5 py-2 uppercase transition-colors ${
                    location.pathname.startsWith('/products') ? 'text-cyan-300 font-semibold' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                </Link>

                {/* Products Mega Dropdown */}
                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full -left-20 w-[580px] pt-3"
                    >
                      <div className="p-5 rounded-3xl bg-[#090D18]/95 border border-white/12 backdrop-blur-2xl shadow-2xl space-y-4">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[11px] font-mono text-zinc-400">
                          <span className="text-cyan-400 font-semibold uppercase">PROPRIETARY SOFTWARE ECOSYSTEM</span>
                          <Link to="/products" className="text-zinc-400 hover:text-white flex items-center gap-1">
                            <span>View All</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {PRODUCTS.map((prod) => {
                            const Icon = productIcons[prod.id] || Layers;
                            return (
                              <Link
                                key={prod.id}
                                to={prod.ctaLink}
                                className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-cyan-500/30 transition-all flex items-start gap-3 group"
                              >
                                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all shrink-0">
                                   <Icon className="w-4 h-4" />
                                </div>
                                <div className="space-y-0.5 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-white text-xs group-hover:text-cyan-300 transition-colors truncate">
                                      {prod.name}
                                    </span>
                                    <span className={`text-[8px] font-mono px-1.5 py-0.2 rounded border ${
                                      prod.isUpcoming ? 'bg-amber-950/80 text-amber-300 border-amber-800/40' : 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40'
                                    }`}>
                                      {prod.badge}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-zinc-400 truncate leading-tight">
                                    {prod.category}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1.5 py-2 uppercase transition-colors ${
                    location.pathname.startsWith('/services') ? 'text-violet-300 font-semibold' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                </Link>

                {/* Services Mega Dropdown */}
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full -left-28 w-[580px] pt-3"
                    >
                      <div className="p-5 rounded-3xl bg-[#090D18]/95 border border-white/12 backdrop-blur-2xl shadow-2xl space-y-4">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[11px] font-mono text-zinc-400">
                          <span className="text-violet-400 font-semibold uppercase">ENGINEERING PILLARS</span>
                          <Link to="/services" className="text-zinc-400 hover:text-white flex items-center gap-1">
                            <span>All Services</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {SERVICE_CATEGORIES.map((cat, idx) => (
                            <Link
                              key={cat.id}
                              to={`/services/${cat.slug}`}
                              className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-violet-500/30 transition-all space-y-1 group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-white text-xs group-hover:text-violet-300 transition-colors">
                                  {cat.title}
                                </span>
                                <span className="text-[10px] font-mono text-zinc-500">0{idx + 1}</span>
                              </div>
                              <p className="text-[11px] text-zinc-400 line-clamp-1">
                                {cat.tagline}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions Link */}
              <Link
                to="/solutions"
                className={`py-2 uppercase transition-colors ${
                  location.pathname.startsWith('/solutions') ? 'text-white font-semibold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                Solutions
              </Link>

              {/* Industries Link */}
              <Link
                to="/industries"
                className={`py-2 uppercase transition-colors ${
                  location.pathname.startsWith('/industries') ? 'text-white font-semibold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                Industries
              </Link>

              {/* Case Studies Link */}
              <Link
                to="/case-studies"
                className={`py-2 uppercase transition-colors ${
                  location.pathname.startsWith('/case-studies') ? 'text-white font-semibold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                Selected Work
              </Link>

              {/* About Link */}
              <Link
                to="/about"
                className={`py-2 uppercase transition-colors ${
                  location.pathname === '/about' ? 'text-white font-semibold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                Company
              </Link>

            </div>

            {/* Right Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide bg-white text-zinc-950 hover:bg-cyan-300 hover:text-black transition-all shadow-md shadow-white/10 cursor-pointer"
              >
                <span>Talk to Xenotrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white focus:outline-none cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-[#05070D]/98 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between lg:hidden border-b border-white/10 overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>XENOTRIX NAVIGATION</span>
                </div>
                <span className="text-[10px] text-zinc-400">EST. 2025</span>
              </div>

              <div className="flex flex-col gap-3 font-display">
                <Link
                  to="/"
                  className="text-xl font-bold text-white hover:text-cyan-400 py-1.5 border-b border-white/5"
                >
                  Home
                </Link>

                <div className="border-b border-white/5 pb-2">
                  <div className="flex items-center justify-between text-xl font-bold text-white mb-2">
                    <span>Products</span>
                    <span className="text-xs font-mono text-cyan-400">6 PLATFORMS</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pl-2">
                    {PRODUCTS.map((p) => (
                      <Link
                        key={p.id}
                        to={p.ctaLink}
                        className="text-xs text-zinc-400 hover:text-cyan-300 py-1"
                      >
                        • {p.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-b border-white/5 pb-2">
                  <div className="flex items-center justify-between text-xl font-bold text-white mb-2">
                    <span>Services</span>
                    <span className="text-xs font-mono text-violet-400">4 PILLARS</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 pl-2">
                    {SERVICE_CATEGORIES.map((c) => (
                      <Link
                        key={c.id}
                        to={`/services/${c.slug}`}
                        className="text-xs text-zinc-400 hover:text-violet-300 py-0.5"
                      >
                        • {c.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/solutions"
                  className="text-xl font-bold text-white hover:text-cyan-400 py-1.5 border-b border-white/5"
                >
                  Solutions
                </Link>

                <Link
                  to="/industries"
                  className="text-xl font-bold text-white hover:text-cyan-400 py-1.5 border-b border-white/5"
                >
                  Industries
                </Link>

                <Link
                  to="/case-studies"
                  className="text-xl font-bold text-white hover:text-cyan-400 py-1.5 border-b border-white/5"
                >
                  Selected Work
                </Link>

                <Link
                  to="/about"
                  className="text-xl font-bold text-white hover:text-cyan-400 py-1.5 border-b border-white/5"
                >
                  Company Profile
                </Link>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{COMPANY_INFO.systemStatus}</span>
              </div>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/20"
              >
                <span>Talk to Xenotrix</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
