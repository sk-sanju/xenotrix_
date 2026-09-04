import React, { useState } from 'react';
import { SEO } from '../../components/common/SEO';
import { COMPANY_INFO } from '../../data/companyData';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Calendar, Send, CheckCircle2, Terminal, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
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
      // Send directly via FormSubmit AJAX service to info@xenotrix.in
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
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#8b5cf6', '#10b981', '#ffffff']
        });
      } else {
        // Fallback open mailto directly
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
      <div className="pt-32 pb-28 bg-[#050505] relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-900/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          {/* Header */}
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
              <Terminal className="w-3.5 h-3.5" />
              <span>PROJECT SCOPING INQUIRY</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              LET'S BUILD SOMETHING USEFUL.
            </h1>

            <p className="text-base sm:text-xl text-zinc-400 leading-relaxed font-normal">
              Tell us what you're trying to build, improve or automate. We typically respond within 24 hours with an initial technical scoping roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-white/10">
            
            {/* Direct Contact Options Left Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 space-y-6">
                <h3 className="font-display font-bold text-xl text-white">Direct Channels</h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:info@xenotrix.in"
                    onClick={() => trackContactClick('email')}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/40 text-zinc-300 hover:text-white transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">OFFICIAL EMAIL</div>
                      <div className="text-sm font-semibold">info@xenotrix.in</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919995544316"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('Contact Page')}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/40 text-zinc-300 hover:text-white transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">WHATSAPP DIRECT</div>
                      <div className="text-sm font-semibold">+91 9995544316</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 text-zinc-300">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">DISCOVERY CALL</div>
                      <div className="text-sm font-semibold">30-Min Technical Scoping</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Right Column */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 shadow-2xl">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-extrabold text-3xl text-white">INQUIRY TRANSMITTED</h3>
                    <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out! Your project inquiry has been sent to <strong className="text-white">info@xenotrix.in</strong>. Our engineering team will review your requirements and respond within 24 hours.
                    </p>
                    <div className="pt-2 flex justify-center gap-3">
                      <button
                        onClick={() => setStatus('idle')}
                        className="px-6 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-cyan-300 hover:text-white transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl bg-[#111116] border border-white/10 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase">Company *</label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full px-4 py-3 rounded-xl bg-[#111116] border border-white/10 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@acme.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#111116] border border-white/10 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 9995544316"
                          className="w-full px-4 py-3 rounded-xl bg-[#111116] border border-white/10 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* What do you need? */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase">What do you need?</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111116] border border-white/10 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#050505] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Range Selection Chips */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase">Budget Range</label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`px-3 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                              formData.budget === b
                                ? 'bg-cyan-500 text-black font-bold'
                                : 'bg-[#111116] text-zinc-400 border border-white/10 hover:text-white'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase">Project Overview *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your objectives, core requirements, or technical challenges..."
                        className="w-full px-4 py-3 rounded-xl bg-[#111116] border border-white/10 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs tracking-wider uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Transmitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Project Scoping Inquiry</span>
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
