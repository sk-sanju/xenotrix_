import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Terminal, ChevronDown, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Solutions', path: '/services' },
    { name: 'Products', path: '/products', isDropdown: true },
    { name: 'Industries', path: '/industries' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
  ];

  const productList = [
    { name: 'XenoCRM', path: '/products/xenocrm', badge: 'SaaS OS', desc: 'Business Operating System' },
    { name: 'Xenotune', path: '/products/xenotune', badge: 'AI Audio', desc: 'Neural Soundscapes' },
    { name: 'XenoBiz', path: '/products/xenobiz', badge: 'COMING SOON', isUpcoming: true, desc: 'Business + CRM + WhatsApp' }
  ];

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
                ? 'bg-[#0A0A0D]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50'
                : 'bg-[#0A0A0D]/40 backdrop-blur-md border border-white/5'
            }`}
          >
            {/* Official Xenotrix Company Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Xenotrix Technologies Home"
            >
              <div className="relative overflow-hidden rounded-xl border border-white/15 group-hover:border-cyan-500/50 transition-colors p-0.5 bg-black/40">
                <img
                  src="/assets/logo.jpeg"
                  alt="Xenotrix Technologies Official Logo"
                  className="h-8 w-auto object-contain rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px] hidden items-center justify-center">
                  <div className="w-full h-full bg-[#050505] rounded-[7px] flex items-center justify-center">
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname.startsWith(link.path);

                if (link.isDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setProductsDropdownOpen(true)}
                      onMouseLeave={() => setProductsDropdownOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`text-xs font-medium tracking-wider uppercase transition-colors relative py-1 flex items-center gap-1.5 ${
                          isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-3 h-3" />
                      </Link>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {productsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 w-64 pt-2"
                          >
                            <div className="p-3 rounded-2xl bg-[#0A0A0D]/95 border border-white/10 backdrop-blur-xl shadow-2xl space-y-2">
                              {productList.map((prod) => (
                                <Link
                                  key={prod.name}
                                  to={prod.path}
                                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group"
                                >
                                  <div>
                                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                                      {prod.name}
                                    </div>
                                    <div className="text-[10px] text-zinc-400">{prod.desc}</div>
                                  </div>
                                  <span
                                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                                      prod.isUpcoming
                                        ? 'bg-amber-950/80 text-amber-300 border-amber-800/40'
                                        : 'bg-cyan-950/80 text-cyan-300 border-cyan-800/40'
                                    }`}
                                  >
                                    {prod.badge}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-xs font-medium tracking-wider uppercase transition-colors relative py-1 ${
                      isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Action CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide bg-white text-black hover:bg-cyan-400 hover:text-black transition-all duration-200 shadow-md shadow-cyan-500/10 cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white focus:outline-none cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-[#050505]/95 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between md:hidden border-b border-white/10 overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 border-b border-white/10 pb-3">
                <Terminal className="w-4 h-4" />
                <span>NAVIGATION // XENOTRIX</span>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-white/5 pb-2">
                    <Link
                      to={link.path}
                      className="text-2xl font-display font-bold tracking-tight text-white hover:text-cyan-400 flex items-center justify-between py-1"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-5 h-5 text-zinc-600" />
                    </Link>
                    {link.isDropdown && (
                      <div className="pl-4 pt-2 space-y-2">
                        {productList.map((p) => (
                          <Link
                            key={p.name}
                            to={p.path}
                            className="flex items-center justify-between text-sm text-zinc-400 hover:text-cyan-300 py-1"
                          >
                            <span>{p.name}</span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-amber-300">
                              {p.badge}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{COMPANY_INFO.systemStatus}</span>
              </div>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
