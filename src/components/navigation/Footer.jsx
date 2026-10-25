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
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#1f3038] text-white flex items-center justify-center font-bold text-sm">
                X
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-base tracking-tight text-[#1f3038]">
                  XENOTRIX
                </span>
                <span className="text-sm text-[#5d6b72]">
                  Technologies
                </span>
              </div>
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

        {/* Photography & Architectural Media Attribution */}
        <div className="pt-10 text-sm text-[#1f3038] max-w-4xl space-y-2">
          <div>
            Photography: <a href="https://commons.wikimedia.org/wiki/File:Faculty_of_Civil_Engineering_and_Architecture_in_Szczecin,_2016.jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0d7480]">“Faculty of Civil Engineering and Architecture in Szczecin, 2016”</a> by Szczecinolog, <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0d7480]">CC BY-SA 4.0</a>; <a href="https://commons.wikimedia.org/wiki/File:Faculty_of_Civil_Engineering_and_Architecture_in_Szczecin,_2017.jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0d7480]">“Faculty of Civil Engineering and Architecture in Szczecin, 2017”</a> by Szczecinolog, <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0d7480]">CC BY-SA 4.0</a>; <a href="https://commons.wikimedia.org/wiki/File:Bryansk_State_Engineering_and_Technical_University.jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0d7480]">“Bryansk State Engineering and Technical University”</a> by Андрей Осиновский, <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0d7480]">CC BY-SA 4.0</a>; <a href="https://commons.wikimedia.org/wiki/File:Bangladesh_University_of_Engineering_and_Technology,_Dhaka,_Bangladesh.jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0d7480]">“Bangladesh University of Engineering and Technology, Dhaka, Bangladesh”</a> by Tanvir Rahat, <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0d7480]">CC BY-SA 4.0</a> via Wikimedia Commons.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#1f3038]">
          <div>
            © {currentYear} Xenotrix Technologies. Founded in Thrissur, Kerala. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{COMPANY_INFO.systemStatus}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
