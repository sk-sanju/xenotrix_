import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, FileText, ArrowRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { COMPANY_INFO } from '../data/companyData';

export const PrivacyPage = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy — Xenotrix Technologies" 
        description="Privacy policy and data protection commitments of Xenotrix Technologies."
        canonical="https://xenotrix.in/privacy"
      />
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="space-y-4">
            <div className="text-xs font-semibold text-[#0d7480]">
              Legal Documentation
            </div>
            <h1 className="font-normal text-4xl sm:text-5xl text-[#1f3038] tracking-tight leading-[1.06]">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#5d6b72]">
              Last updated: January 2025 • Governing entity: {COMPANY_INFO.name}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2] space-y-8 text-sm sm:text-base leading-relaxed text-[#1f3038]">
            <div className="space-y-3">
              <h2 className="font-semibold text-xl text-[#1f3038]">1. Operational Scope & Commitment</h2>
              <p className="text-[#5d6b72]">
                At Xenotrix Technologies, we respect customer privacy and maintain strict engineering confidentiality standards. This policy governs how we collect, process, and safeguard information submitted through our website, platforms, and customer engineering engagements.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-semibold text-xl text-[#1f3038]">2. Information Collection</h2>
              <p className="text-[#5d6b72]">
                We only collect data necessary for commercial project scoping, technical consultations, and platform operations. This includes contact details (name, email address, phone number, company name) and technical project briefs submitted via our scoping forms. We never monetize, rent, or sell client information.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-semibold text-xl text-[#1f3038]">3. Data Security & Storage Standards</h2>
              <p className="text-[#5d6b72]">
                All network interactions with our web properties are encrypted in transit using TLS 1.3 protocol. Client records and system configurations are protected at rest utilizing AES-256 encryption. We enforce least-privilege role-based access control (RBAC) across all engineering infrastructure.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-semibold text-xl text-[#1f3038]">4. Confidentiality & Non-Disclosure</h2>
              <p className="text-[#5d6b72]">
                Proprietary business requirements, operational data, and architecture specifications shared with Xenotrix Technologies are held under strict non-disclosure obligations. Mutual NDAs are executed prior to deep architectural audits upon client request.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-semibold text-xl text-[#1f3038]">5. Contact & Privacy Inquiries</h2>
              <p className="text-[#5d6b72]">
                For questions regarding data processing or to request data removal, please contact our administrative office at <strong className="text-[#1f3038]">{COMPANY_INFO.email}</strong> or by writing to:
              </p>
              <div className="p-4 rounded-lg bg-[#f7f9fa] text-xs font-medium text-[#1f3038] space-y-1">
                <div>Xenotrix Technologies</div>
                <div>Thiruvilwamala, Thrissur, Kerala, India — 680594</div>
                <div>Email: {COMPANY_INFO.email} | Phone: {COMPANY_INFO.phone}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#5d6b72] pt-4 border-t border-[#d8e0e4]">
            <Link to="/terms" className="text-[#0d7480] hover:underline font-medium">
              View Terms of Service →
            </Link>
            <Link to="/" className="hover:text-[#1f3038]">
              Return to Home
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export const TermsPage = () => {
  return (
    <>
      <SEO 
        title="Terms of Service — Xenotrix Technologies" 
        description="Terms of service and contract principles governing engagements with Xenotrix Technologies."
        canonical="https://xenotrix.in/terms"
      />
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="space-y-4">
            <div className="text-xs font-semibold text-[#0d7480]">
              Legal Documentation
            </div>
            <h1 className="font-normal text-4xl sm:text-5xl text-[#1f3038] tracking-tight leading-[1.06]">
              Terms of Service
            </h1>
            <p className="text-sm text-[#5d6b72]">
              Last updated: January 2025 • Governing entity: {COMPANY_INFO.name}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2] space-y-8 text-sm sm:text-base leading-relaxed text-[#1f3038]">
            <div className="space-y-3">
              <h2 className="font-semibold text-xl text-[#1f3038]">1. Agreement to Terms</h2>
              <p className="text-[#5d6b72]">
                These Terms govern your use of the Xenotrix Technologies website, proprietary platforms, and technology engineering services. By accessing our services or executing a Statement of Work (SOW), you agree to these commercial terms.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-semibold text-xl text-[#1f3038]">2. Intellectual Property & Code Ownership</h2>
              <p className="text-[#5d6b72]">
                For custom software engineering client contracts, 100% of the developed application code, database schemas, and tailored frontend assets become the sole intellectual property of the client upon final milestone settlement, unless explicitly designated otherwise in licensing schedules.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-semibold text-xl text-[#1f3038]">3. Proprietary Software Licensing</h2>
              <p className="text-[#5d6b72]">
                Pre-built suites (such as XenoCRM, XenoFin, XenoBiz, XenoClass, XenoHR, and Xenotune) are provided under dedicated enterprise license agreements. Tenants receive access to production instances with agreed SLA uptimes (99.98% baseline), updates, and maintenance support.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-semibold text-xl text-[#1f3038]">4. Service Delivery & Milestone Acceptance</h2>
              <p className="text-[#5d6b72]">
                All engineering engagements follow our 4-stage lifecycle: Architectural Discovery, Milestone Implementation, Verification & Security Audit, and Production Deployment. Milestone deliverables undergo written acceptance before stage transitions.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-semibold text-xl text-[#1f3038]">5. Jurisdiction & Governance</h2>
              <p className="text-[#5d6b72]">
                These terms are governed in accordance with the laws of India, under the jurisdiction of the courts of Thrissur, Kerala.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#5d6b72] pt-4 border-t border-[#d8e0e4]">
            <Link to="/privacy" className="text-[#0d7480] hover:underline font-medium">
              View Privacy Policy →
            </Link>
            <Link to="/" className="hover:text-[#1f3038]">
              Return to Home
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
