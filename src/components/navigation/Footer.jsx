import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../data/companyData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial from-violet-900/10 via-cyan-900/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="p-0.5 rounded-xl border border-white/15 bg-black/40">
                <img
                  src="/assets/logo.jpeg"
                  alt="Xenotrix Technologies Official Logo"
                  className="h-8 w-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold tracking-widest text-base text-white">
                  XENOTRIX
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Xenotrix Technologies is an enterprise digital agency founded by Sanjay S specializing in Digital Marketing, Website & App Development, Mobile Apps (Flutter), and SaaS Solutions.
            </p>

            <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{COMPANY_INFO.systemStatus}</span>
            </div>
          </div>

          {/* Column 1: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><Link to="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/mobile-development" className="hover:text-white transition-colors">Mobile Engineering</Link></li>
              <li><Link to="/services/ai-development" className="hover:text-white transition-colors">AI & ML Systems</Link></li>
              <li><Link to="/services/automation" className="hover:text-white transition-colors">Workflow Automation</Link></li>
              <li><Link to="/services/saas-development" className="hover:text-white transition-colors">SaaS Development</Link></li>
              <li><Link to="/services/data-analytics" className="hover:text-white transition-colors">Data Intelligence</Link></li>
              <li><Link to="/services/digital-growth" className="hover:text-white transition-colors">Digital Growth</Link></li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><Link to="/products/xenocrm" className="hover:text-white transition-colors flex items-center gap-1.5"><span>XenoCRM</span><span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">SaaS</span></Link></li>
              <li><Link to="/products/xenotune" className="hover:text-white transition-colors flex items-center gap-1.5"><span>Xenotune</span><span className="text-[9px] px-1.5 py-0.5 rounded bg-violet-950 text-violet-400 border border-violet-800/40">AI Audio</span></Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><Link to="/industries/retail" className="hover:text-white transition-colors">Retail & E-Commerce</Link></li>
              <li><Link to="/industries/healthcare" className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link to="/industries/finance" className="hover:text-white transition-colors">Finance & Fintech</Link></li>
              <li><Link to="/industries/logistics" className="hover:text-white transition-colors">Logistics & Supply</Link></li>
              <li><Link to="/industries/education" className="hover:text-white transition-colors">Education</Link></li>
              <li><Link to="/industries/real-estate" className="hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors text-cyan-400">View All →</Link></li>
            </ul>
          </div>

          {/* Column 4: Company & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Inquiry</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Social & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            © {currentYear} Xenotrix Technologies. Founded by Sanjay S. All rights reserved. Thrissur, Kerala, India.
          </div>

          <div className="flex items-center gap-6 text-zinc-400">
            {/* LinkedIn */}
            <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            {/* GitHub */}
            <a href={COMPANY_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
            </a>
            {/* Instagram */}
            <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
