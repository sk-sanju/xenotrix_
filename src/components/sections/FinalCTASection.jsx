import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const FinalCTASection = () => {
  return (
    <section className="py-32 bg-[#f7f9fa] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Plain Sentence */}
        <p className="text-2xl sm:text-3xl text-[#1f3038] font-normal max-w-xl mx-auto leading-snug">
          Have an idea or business challenge? Let's turn it into technology that works.
        </p>

        {/* One Primary Action + One Text Link */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hello Xenotrix Technologies team, I'd like to discuss a project.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#0d7480] hover:underline"
          >
            Direct WhatsApp Discussion
          </a>
        </div>

        {/* Quiet Contact Line */}
        <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-[#1f3038]">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#0d7480]" />
            <span>{COMPANY_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#0d7480]" />
            <span>{COMPANY_INFO.phone}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;
