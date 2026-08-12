import React from 'react';
import { SEO } from '../components/common/SEO';
import { Shield } from 'lucide-react';

export const PrivacyPage = () => {
  return (
    <>
      <SEO title="Privacy Policy — Xenotrix Technologies" />
      <div className="pt-32 pb-28 bg-[#050505] text-zinc-300">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Shield className="w-4 h-4" />
            <span>LEGAL DOCUMENTATION // PRIVACY POLICY</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl text-white uppercase">PRIVACY POLICY</h1>
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-6">
            <p>At Xenotrix Technologies, we respect customer privacy and operate with strict data confidentiality standards.</p>
            <h3 className="font-bold text-white text-base pt-2">Data Collection & Protection</h3>
            <p>We only collect information required for technical inquiries, scoping assessments, and service delivery. We do not sell or monetize client operational data.</p>
            <h3 className="font-bold text-white text-base pt-2">Security Standards</h3>
            <p>All data transmitted through our web interfaces is encrypted in transit via TLS 1.3 and at rest with AES-256 encryption standards.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const TermsPage = () => {
  return (
    <>
      <SEO title="Terms of Service — Xenotrix Technologies" />
      <div className="pt-32 pb-28 bg-[#050505] text-zinc-300">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Shield className="w-4 h-4" />
            <span>LEGAL DOCUMENTATION // TERMS OF SERVICE</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl text-white uppercase">TERMS OF SERVICE</h1>
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-6">
            <p>These terms govern your use of Xenotrix Technologies website, products, and engineering services.</p>
            <h3 className="font-bold text-white text-base pt-2">Intellectual Property</h3>
            <p>All custom software code built for clients under contract becomes the intellectual property of the client upon milestone settlement, unless specified in licensing agreements.</p>
          </div>
        </div>
      </div>
    </>
  );
};
