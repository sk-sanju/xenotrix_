import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Loader2, 
  MapPin, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SEO } from '../../components/common/SEO';
import { COMPANY_INFO } from '../../data/companyData';
import { trackFormSubmission, trackWhatsAppClick, trackContactClick } from '../../utils/analytics';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    service: 'Web Development',
    budget: '$10K–$25K',
    timeline: '1-2 Months',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const budgetOptions = [
    '<$5K',
    '$5K–$10K',
    '$10K–$25K',
    '$25K–$50K',
    '$50K+'
  ];

  const serviceOptions = [
    'Web Development',
    'Mobile Application',
    'AI & ML Systems',
    'Workflow Automation',
    'SaaS Development',
    'Data Analytics',
    'Digital Growth'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@xenotrix.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          country: formData.country,
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          _subject: `New Project Inquiry from ${formData.name} (${formData.company || 'Website Visitor'})`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const resData = await response.json();

      if (response.ok || resData.success === 'true' || resData.success === true) {
        setStatus('success');
        trackFormSubmission(formData.service, formData.budget);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#0d7480', '#1f3038', '#5d6b72']
        });
      } else {
        const emailSubject = `Project Inquiry: ${formData.service}`;
        const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
        window.location.href = `mailto:info@xenotrix.in?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        setStatus('success');
      }
    } catch (err) {
      console.warn("Direct HTTP form submission fallback triggered", err);
      const emailSubject = `Project Inquiry: ${formData.service}`;
      const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
      window.location.href = `mailto:info@xenotrix.in?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      setStatus('success');
    }
  };

  const canonicalUrl = "https://xenotrix.in/contact";
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Contact', item: '/contact' }
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${canonicalUrl}#contactpage`,
    "name": "Contact Xenotrix Technologies",
    "description": "Get in touch with Xenotrix Technologies for software development, AI automation, and product inquiries.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://xenotrix.in/#organization",
      "name": "Xenotrix Technologies",
      "telephone": COMPANY_INFO.phone,
      "email": COMPANY_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Thiruvilwamala",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "postalCode": "680594",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <SEO
        title="Contact Xenotrix Technologies — Request a Quote & Project Scoping | Kerala & Global"
        description="Contact Xenotrix Technologies in Thrissur, Kerala for website development, custom software, Flutter mobile apps, and AI automation. Fast technical response within 24 hours."
        canonical={canonicalUrl}
        breadcrumbs={breadcrumbs}
        schema={contactSchema}
      />
      <div className="pt-32 pb-24 bg-[#f7f9fa] text-[#1f3038]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="font-normal text-4xl sm:text-5xl lg:text-6xl text-[#1f3038] tracking-tight leading-[1.06]">
              Let's build something <br />that works.
            </h1>

            <p className="text-lg sm:text-xl text-[#5d6b72] leading-relaxed">
              Tell us what you're trying to build, improve or automate. Our senior engineering leads typically respond within 24 hours with an initial technical scoping roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Direct Contact Options Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-xl bg-[#ecf0f2] space-y-6">
                <div>
                  <h3 className="font-semibold text-xl text-[#1f3038]">Direct Channels</h3>
                  <p className="text-sm text-[#5d6b72] mt-1">Connect directly with our engineering office.</p>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="mailto:info@xenotrix.in"
                    onClick={() => trackContactClick('email')}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#f7f9fa] hover:bg-[#e2e8eb] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded bg-[#1f3038] text-white flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#5d6b72]">Official Email</div>
                      <div className="text-sm font-semibold text-[#1f3038]">info@xenotrix.in</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919995544316"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('Contact Page')}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#f7f9fa] hover:bg-[#e2e8eb] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded bg-[#1f3038] text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#5d6b72]">WhatsApp Direct</div>
                      <div className="text-sm font-semibold text-[#1f3038]">+91 9995544316</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-[#f7f9fa]">
                    <div className="w-10 h-10 rounded bg-[#1f3038] text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#5d6b72]">Headquarters</div>
                      <div className="text-sm font-semibold text-[#1f3038]">Thrissur, Kerala (680594)</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#d8e0e4] space-y-2 text-xs text-[#5d6b72]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0d7480]" />
                    <span>Non-Disclosure Agreement (NDA) on request</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0d7480]" />
                    <span>Guaranteed response within 24 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Right Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-xl bg-[#ecf0f2]">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded bg-[#0d7480] text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-2xl text-[#1f3038]">Inquiry Received</h3>
                    <p className="text-sm text-[#5d6b72] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out! Your project inquiry has been transmitted to <strong className="text-[#1f3038]">info@xenotrix.in</strong>. Our engineering leads will review your requirements and respond within 24 hours.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setStatus('idle')}
                        className="px-5 py-2.5 rounded bg-[#1f3038] text-white text-xs font-semibold hover:bg-[#0d7480] transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#1f3038]">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#d8e0e4] text-[#1f3038] text-sm focus:outline-none focus:ring-1 focus:ring-[#0d7480]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#1f3038]">Company / Entity *</label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#d8e0e4] text-[#1f3038] text-sm focus:outline-none focus:ring-1 focus:ring-[#0d7480]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#1f3038]">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#d8e0e4] text-[#1f3038] text-sm focus:outline-none focus:ring-1 focus:ring-[#0d7480]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#1f3038]">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 9995544316"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#d8e0e4] text-[#1f3038] text-sm focus:outline-none focus:ring-1 focus:ring-[#0d7480]"
                        />
                      </div>
                    </div>

                    {/* What do you need? */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#1f3038]">Primary Area of Interest</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#d8e0e4] text-[#1f3038] text-sm focus:outline-none focus:ring-1 focus:ring-[#0d7480]"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Range Selection Chips */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#1f3038]">Estimated Investment Scope</label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                              formData.budget === b
                                ? 'bg-[#1f3038] text-white'
                                : 'bg-white text-[#1f3038] border border-[#d8e0e4] hover:bg-[#f7f9fa]'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#1f3038]">Project Brief / Objectives *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly outline what you are building, the existing bottlenecks, or expected timelines..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#d8e0e4] text-[#1f3038] text-sm focus:outline-none focus:ring-1 focus:ring-[#0d7480] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3.5 rounded-lg bg-[#1f3038] hover:bg-[#0d7480] text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Transmitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Scoping Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
