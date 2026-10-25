import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Home, 
  Layers, 
  Cpu, 
  Compass, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Products & Platforms', path: '/products', icon: Cpu, desc: 'Proprietary software suites & applications' },
    { name: 'Engineering Services', path: '/services', icon: Layers, desc: 'Custom software & AI automation' },
    { name: 'Industries Served', path: '/industries', icon: Compass, desc: 'Tailored sector-specific architectures' },
    { name: 'Contact Engineering', path: '/contact', icon: Mail, desc: 'Connect directly with our architects' },
  ];

  return (
    <>
      <SEO 
        title="404 — Page Not Found | Xenotrix Technologies" 
        description="The requested page could not be located in the Xenotrix directory."
        noindex={true}
      />

      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038] min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          
          {/* Main Error */}
          <div className="space-y-4 max-w-xl mx-auto">
            <div className="text-sm font-semibold text-[#0d7480]">
              Error 404
            </div>
            <h1 className="font-normal text-5xl sm:text-7xl text-[#1f3038] tracking-tight leading-[1.04]">
              Page not found.
            </h1>
            <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
              The page or resource you requested does not exist, has been re-indexed, or has moved to a new route.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>

              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#ecf0f2] hover:bg-[#e2e8eb] text-[#1f3038] font-medium text-sm transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>
            </div>
          </div>

          {/* Suggested Destinations */}
          <div className="pt-8 border-t border-[#d8e0e4] space-y-6 text-left max-w-3xl mx-auto">
            <div className="text-xs font-semibold text-[#0d7480]">
              Suggested Destinations
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="p-5 rounded-xl bg-[#ecf0f2] hover:bg-[#e2e8eb] transition-colors flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded bg-[#1f3038] text-white flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-semibold text-base text-[#1f3038] group-hover:text-[#0d7480] transition-colors">
                        {link.name}
                      </div>
                      <div className="text-xs text-[#5d6b72]">
                        {link.desc}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
