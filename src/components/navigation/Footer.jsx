import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../../data/companyData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#04060A] text-zinc-400 border-t border-white/10 pt-20 pb-12 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Tier: Company Brand & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative overflow-hidden rounded-xl border border-white/15 p-0.5 bg-black/40">
                <img
                  src="/assets/logo.jpeg"
                  alt="Xenotrix Technologies Logo"
                  className="h-8 w-auto object-contain rounded-lg"
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
                <span className="font-display font-extrabold tracking-widest text-base text-white group-hover:text-cyan-300 transition-colors">
                  XENOTRIX
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm">
              Xenotrix Technologies develops software products, digital platforms, and intelligent technology solutions that help modern businesses operate smarter and scale faster.
            </p>

            <div className="space-y-2 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            {/* Clean SVG Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/8 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/8 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/8 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/8 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono text-white uppercase tracking-widest font-semibold">
              PROPRIETARY PRODUCTS
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    to={prod.ctaLink}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{prod.name}</span>
                    <span className="text-[10px] text-zinc-500 group-hover:text-cyan-400 transition-colors">
                      {prod.category.split('&')[0]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono text-white uppercase tracking-widest font-semibold">
              TECHNOLOGY SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/services/website-development" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/custom-software-development" className="hover:text-white transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="hover:text-white transition-colors">
                  Mobile App Development (Flutter)
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce-development" className="hover:text-white transition-colors">
                  E-Commerce Development
                </Link>
              </li>
              <li>
                <Link to="/services/crm-erp-development" className="hover:text-white transition-colors">
                  CRM & ERP Development
                </Link>
              </li>
              <li>
                <Link to="/services/ai-automation" className="hover:text-white transition-colors">
                  AI Solutions & Automation
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing-seo" className="hover:text-white transition-colors">
                  Technical SEO & Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono text-white uppercase tracking-widest font-semibold">
              COMPANY & LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Xenotrix
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {currentYear} Xenotrix Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{COMPANY_INFO.systemStatus}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
