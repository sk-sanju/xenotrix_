import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  Layers, 
  BarChart3, 
  CreditCard, 
  Smartphone, 
  GraduationCap, 
  Users, 
  Music,
  Code2
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS, SERVICE_CATEGORIES } from '../../data/companyData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className="fixed top-0 left-0 right-0 z-40 transition-colors duration-200 bg-[#f7f9fa]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            
            {/* Wordmark Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 focus:outline-none shrink-0"
              aria-label="Xenotrix Technologies Home"
            >
              <div className="w-8 h-8 rounded bg-[#1f3038] text-white flex items-center justify-center font-bold text-sm tracking-tight">
                X
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-base tracking-tight text-[#1f3038]">
                  XENOTRIX
                </span>
                <span className="text-sm text-[#5d6b72] leading-none">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 text-[15px] font-normal text-[#1f3038]">
              
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/products"
                  className={`flex items-center gap-1 py-1 transition-colors ${
                    location.pathname.startsWith('/products') ? 'text-[#0d7480] font-medium' : 'text-[#1f3038] hover:text-[#0d7480]'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#5d6b72]" />
                </Link>

                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      data-ui="navbar-menu"
                      className="absolute top-full -left-12 w-[540px] pt-2"
                    >
                      <div className="p-5 rounded-lg bg-white border border-[#ecf0f2] shadow-sm space-y-4">
                        <div className="flex items-center justify-between text-xs text-[#5d6b72]">
                          <span className="font-medium text-[#1f3038]">Proprietary Software Suites</span>
                          <Link to="/products" className="text-[#0d7480] hover:underline flex items-center gap-1 font-medium">
                            <span>Index</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {PRODUCTS.map((prod) => {
                            const Icon = productIcons[prod.id] || Layers;
                            return (
                              <Link
                                key={prod.id}
                                to={prod.ctaLink}
                                className="p-3 rounded bg-[#f7f9fa] hover:bg-[#ecf0f2] transition-colors flex items-start gap-3"
                              >
                                <div className="p-2 rounded bg-white text-[#0d7480] shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-medium text-sm text-[#1f3038] truncate">
                                    {prod.name}
                                  </div>
                                  <p className="text-xs text-[#5d6b72] truncate">
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

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1 py-1 transition-colors ${
                    location.pathname.startsWith('/services') ? 'text-[#0d7480] font-medium' : 'text-[#1f3038] hover:text-[#0d7480]'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#5d6b72]" />
                </Link>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      data-ui="navbar-menu"
                      className="absolute top-full -left-16 w-[540px] pt-2"
                    >
                      <div className="p-5 rounded-lg bg-white border border-[#ecf0f2] shadow-sm space-y-4">
                        <div className="flex items-center justify-between text-xs text-[#5d6b72]">
                          <span className="font-medium text-[#1f3038]">Engineering Capabilities</span>
                          <Link to="/services" className="text-[#0d7480] hover:underline flex items-center gap-1 font-medium">
                            <span>All Services</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {SERVICE_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.id}
                              to={`/services/${cat.slug}`}
                              className="p-3 rounded bg-[#f7f9fa] hover:bg-[#ecf0f2] transition-colors space-y-1"
                            >
                              <div className="font-medium text-sm text-[#1f3038]">
                                {cat.title}
                              </div>
                              <p className="text-xs text-[#5d6b72] line-clamp-1">
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

              <Link
                to="/solutions"
                className={`transition-colors ${
                  location.pathname.startsWith('/solutions') ? 'text-[#0d7480] font-medium' : 'text-[#1f3038] hover:text-[#0d7480]'
                }`}
              >
                Solutions
              </Link>

              <Link
                to="/industries"
                className={`transition-colors ${
                  location.pathname.startsWith('/industries') ? 'text-[#0d7480] font-medium' : 'text-[#1f3038] hover:text-[#0d7480]'
                }`}
              >
                Industries
              </Link>

              <Link
                to="/portfolio"
                className={`transition-colors ${
                  location.pathname === '/portfolio' ? 'text-[#0d7480] font-medium' : 'text-[#1f3038] hover:text-[#0d7480]'
                }`}
              >
                Portfolio
              </Link>

              <Link
                to="/case-studies"
                className={`transition-colors ${
                  location.pathname.startsWith('/case-studies') ? 'text-[#0d7480] font-medium' : 'text-[#1f3038] hover:text-[#0d7480]'
                }`}
              >
                Selected Work
              </Link>

              <Link
                to="/about"
                className={`transition-colors ${
                  location.pathname === '/about' ? 'text-[#0d7480] font-medium' : 'text-[#1f3038] hover:text-[#0d7480]'
                }`}
              >
                Company
              </Link>
            </div>

            {/* Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white text-sm font-medium transition-colors"
              >
                <span>Talk to Xenotrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded text-[#1f3038] hover:bg-[#ecf0f2] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-30 bg-[#f7f9fa] pt-24 px-6 pb-8 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="text-xs text-[#5d6b72] pb-2 border-b border-[#ecf0f2]">
                Navigation
              </div>

              <div className="flex flex-col gap-4 text-lg text-[#1f3038]">
                <Link to="/" className="hover:text-[#0d7480] py-1 font-medium">
                  Home
                </Link>
                <Link to="/products" className="hover:text-[#0d7480] py-1">
                  Products
                </Link>
                <Link to="/services" className="hover:text-[#0d7480] py-1">
                  Services
                </Link>
                <Link to="/solutions" className="hover:text-[#0d7480] py-1">
                  Solutions
                </Link>
                <Link to="/industries" className="hover:text-[#0d7480] py-1">
                  Industries
                </Link>
                <Link to="/portfolio" className="hover:text-[#0d7480] py-1">
                  Portfolio
                </Link>
                <Link to="/case-studies" className="hover:text-[#0d7480] py-1">
                  Selected Work
                </Link>
                <Link to="/about" className="hover:text-[#0d7480] py-1">
                  Company
                </Link>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="text-sm text-[#1f3038]">
                {COMPANY_INFO.systemStatus}
              </div>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded bg-[#1f3038] text-white font-medium text-sm hover:bg-[#0d7480] transition-colors"
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

export default Navbar;
