import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../../data/companyData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ecf0f2] text-[#5d6b72] pt-20 pb-12 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block focus:outline-none" aria-label="Xenotrix Technologies Home">
              <img
                src="/apple-touch-icon.png"
                alt="Xenotrix Technologies"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-base text-[#1f3038] leading-relaxed max-w-sm">
              Xenotrix Technologies develops software products, digital platforms, and intelligent automation solutions for modern businesses.
            </p>

            <div className="space-y-2 text-sm text-[#1f3038]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0d7480]" />
                <span>Thiruvilwamala, Thrissur, Kerala, India (680594)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0d7480]" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0d7480]" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Proprietary Products Col */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-sm font-semibold text-[#1f3038]">
              Proprietary Products
            </div>
            <ul className="space-y-2 text-sm">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link to={prod.ctaLink} className="hover:text-[#0d7480] transition-colors">
                    {prod.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Services Col */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-sm font-semibold text-[#1f3038]">
              Engineering Services
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/custom-software" className="hover:text-[#0d7480] transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/ai-automation" className="hover:text-[#0d7480] transition-colors">
                  AI & Workflow Automation
                </Link>
              </li>
              <li>
                <Link to="/services/web-mobile" className="hover:text-[#0d7480] transition-colors">
                  Web & Mobile Applications
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-platforms" className="hover:text-[#0d7480] transition-colors">
                  Cloud & High-Scale Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-sm font-semibold text-[#1f3038]">
              Company
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#0d7480] transition-colors">
                  About Xenotrix
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#0d7480] transition-colors">
                  Client Portfolio
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-[#0d7480] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-[#0d7480] transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#0d7480] transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0d7480] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="pt-6 text-sm text-[#1f3038]">
          <div>
            © {currentYear} Xenotrix Technologies. Founded in Thrissur, Kerala. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
