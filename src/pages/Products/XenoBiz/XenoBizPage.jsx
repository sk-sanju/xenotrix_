import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../../components/common/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { XENOBIZ_DATA } from './data';
import {
  Smartphone, ShieldCheck, CheckCircle2, ArrowRight, ArrowDown, Zap,
  MessageSquare, WifiOff, RefreshCw, FileText, Users, Package, CreditCard,
  Calendar, BarChart3, Clock, Layers, ChevronRight, Send, Check, Bell, PlusCircle,
  TrendingUp, TrendingDown, ShoppingBag, UserPlus, PackagePlus, DollarSign, Mail, Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const XenoBizPage = () => {
  // Waitlist form state
  const [waitlist, setWaitlist] = useState({
    name: '',
    email: '',
    businessType: 'Retail / Shop',
    country: 'India',
    phone: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  // Active Mobile Mockup Screen State
  const [activeScreen, setActiveScreen] = useState('dashboard');

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@xenotrix.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: waitlist.name,
          email: waitlist.email,
          businessType: waitlist.businessType,
          country: waitlist.country,
          phone: waitlist.phone,
          _subject: `XenoBiz Early Access Waitlist Registration: ${waitlist.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const resData = await response.json();
      if (response.ok || resData.success === 'true' || resData.success === true) {
        setStatus('success');
      } else {
        const emailSubject = `XenoBiz Waitlist: ${waitlist.name}`;
        const emailBody = `Name: ${waitlist.name}\nEmail: ${waitlist.email}\nBusiness: ${waitlist.businessType}\nPhone: ${waitlist.phone}`;
        window.location.href = `mailto:info@xenotrix.in?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        setStatus('success');
      }
    } catch (err) {
      const emailSubject = `XenoBiz Waitlist: ${waitlist.name}`;
      const emailBody = `Name: ${waitlist.name}\nEmail: ${waitlist.email}\nBusiness: ${waitlist.businessType}\nPhone: ${waitlist.phone}`;
      window.location.href = `mailto:info@xenotrix.in?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      setStatus('success');
    }

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#8b5cf6', '#10b981', '#ffffff']
    });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "XenoBiz",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Android, iOS",
    "description": "XenoBiz is a mobile-first business management and CRM application for small businesses combining billing, inventory, payments, customer management, follow-ups and WhatsApp communication.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/PreOrder"
    }
  };

  return (
    <>
      <SEO
        title="XenoBiz — Business Management & CRM App | Xenotrix Technologies"
        description="XenoBiz is a mobile-first business management and CRM application for small businesses, combining billing, inventory, payments, customer management, follow-ups and WhatsApp communication."
        schema={schema}
      />

      <div className="pt-28 pb-24 bg-[#050505] text-[#F5F5F5] relative overflow-hidden">
        
        {/* Background Ambient Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-cyan-500/10 via-violet-600/10 to-transparent blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 relative z-10">

          {/* =================================================================
              1. HERO SECTION
          ================================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Eyebrow Status Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>{XENOBIZ_DATA.heroEyebrow}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-800/40 text-xs font-mono text-amber-300">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>{XENOBIZ_DATA.status}</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95]">
                RUN YOUR BUSINESS. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-300 to-white">
                  FROM ONE PLACE.
                </span>
              </h1>

              {/* Subheadline & Description */}
              <div className="space-y-3">
                <p className="text-base sm:text-xl text-cyan-200 font-medium">
                  {XENOBIZ_DATA.heroSubheadline}
                </p>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal max-w-xl">
                  {XENOBIZ_DATA.description}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#waitlist"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/20"
                >
                  <span>Join the Waitlist</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm border border-white/10 transition-all duration-200"
                >
                  <span>Explore the Product</span>
                  <ArrowDown className="w-4 h-4 text-zinc-400" />
                </a>
              </div>

              {/* Development Stack Specs Pills */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                <span className="text-cyan-400">TECH SPEC:</span>
                <span>Flutter (Android & iOS)</span>
                <span>•</span>
                <span>REST API</span>
                <span>•</span>
                <span>Offline-First Sync</span>
              </div>
            </div>

            {/* Hero Right Interactive Mobile Device Mockup Visual */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-sm rounded-[40px] bg-[#111116] border-4 border-white/15 p-4 shadow-2xl space-y-4">
                
                {/* Mobile Speaker Notch */}
                <div className="w-28 h-4 rounded-full bg-black mx-auto border border-white/10" />

                {/* Mobile Screen Switcher Tabs */}
                <div className="flex justify-between gap-1 border-b border-white/10 pb-2 text-[10px] font-mono">
                  {[
                    { id: 'dashboard', label: 'Dashboard' },
                    { id: 'invoice', label: 'Invoice' },
                    { id: 'customer', label: 'Customer' },
                    { id: 'inventory', label: 'Stock' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveScreen(s.id)}
                      className={`px-2 py-1 rounded transition-colors ${
                        activeScreen === s.id
                          ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* Simulated Screen Body */}
                <div className="p-4 rounded-2xl bg-black/70 border border-white/5 min-h-[380px] font-sans space-y-4">
                  {activeScreen === 'dashboard' && (
                    <div className="space-y-3 text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <div>
                          <div className="text-[10px] text-zinc-400 font-mono">XENOBIZ MOBILE OS</div>
                          <div className="font-bold text-white text-sm">Today's Business Summary</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40 text-[9px] font-mono">
                          OFFLINE SYNC READY
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/5">
                          <div className="text-[10px] text-zinc-400">TODAY'S SALES</div>
                          <div className="text-base font-extrabold text-emerald-400">₹14,500</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/5">
                          <div className="text-[10px] text-zinc-400">PENDING DUES</div>
                          <div className="text-base font-extrabold text-amber-400">₹4,200</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 space-y-2">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-white">Recent Transactions</span>
                          <span className="text-[9px] text-cyan-400 font-mono">View All</span>
                        </div>
                        <div className="flex justify-between text-[11px] text-zinc-300">
                          <span>Invoice #XB-9021 (Kumar Stores)</span>
                          <span className="text-emerald-400 font-bold">+₹4,500</span>
                        </div>
                        <div className="flex justify-between text-[11px] text-zinc-300">
                          <span>Payment Recd (Vanguard Retail)</span>
                          <span className="text-emerald-400 font-bold">+₹2,000</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'invoice' && (
                    <div className="space-y-3 text-xs">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="font-bold text-white text-sm">Create New Invoice</span>
                        <span className="text-[10px] text-cyan-400 font-mono">#INV-8042</span>
                      </div>
                      <div className="space-y-2">
                        <div className="p-2 rounded bg-zinc-900 text-zinc-300 text-[11px]">Customer: Apex Electronics</div>
                        <div className="p-2 rounded bg-zinc-900 text-zinc-300 text-[11px] flex justify-between">
                          <span>Items (3 Products)</span>
                          <span>₹8,900</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 flex items-center justify-between font-mono text-[11px]">
                          <span>Share via WhatsApp</span>
                          <MessageSquare className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'customer' && (
                    <div className="space-y-3 text-xs">
                      <div className="border-b border-white/10 pb-2">
                        <div className="font-bold text-white text-sm">Customer Profile</div>
                        <div className="text-[10px] text-zinc-400">Metro Wholesalers Ltd</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/5 space-y-1.5 text-[11px]">
                        <div className="flex justify-between text-zinc-400">
                          <span>Total Ledger Value:</span>
                          <span className="text-white font-bold">₹42,500</span>
                        </div>
                        <div className="flex justify-between text-zinc-400">
                          <span>Outstanding Balance:</span>
                          <span className="text-amber-400 font-bold">₹6,200</span>
                        </div>
                        <div className="pt-1 flex gap-2">
                          <button className="flex-1 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono">Send Reminder</button>
                          <button className="flex-1 py-1 rounded bg-zinc-800 text-zinc-300 text-[10px] font-mono">Add Note</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'inventory' && (
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="font-bold text-white text-sm">Stock Inventory</span>
                        <span className="text-[10px] text-amber-400 font-mono">2 Low Stock Alerts</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="p-2 rounded bg-zinc-900 flex justify-between text-[11px]">
                          <span className="text-white">Wireless Scanner Model-X</span>
                          <span className="text-emerald-400">In Stock (42)</span>
                        </div>
                        <div className="p-2 rounded bg-zinc-900 flex justify-between text-[11px]">
                          <span className="text-white">Thermal Receipt Paper 80mm</span>
                          <span className="text-amber-400">Low Stock (5 left)</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 text-center text-[10px] font-mono text-zinc-500">
                    CONCEPTUAL XENOBIZ UI PREVIEW
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* =================================================================
              2. THE PROBLEM SECTION
          ================================================================== */}
          <div id="overview" className="py-16 border-t border-white/10 space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-mono text-amber-400 uppercase">OPERATIONAL FRAGMENTATION</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
                SMALL BUSINESSES SHOULDN'T NEED FIVE DIFFERENT APPS.
              </h2>
              <p className="text-base text-zinc-400">
                Most small business owners waste hours jumping between scattered apps: billing in one app, customer info in spreadsheets, WhatsApp on their phone, and payments tracked manually.
              </p>
            </div>

            {/* Fragmented Tools Diagram */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              {[
                { title: "Billing App", label: "Tool 1" },
                { title: "Customer Sheets", label: "Tool 2" },
                { title: "Inventory Notes", label: "Tool 3" },
                { title: "Manual WhatsApp", label: "Tool 4" },
                { title: "Payment Ledger", label: "Tool 5" },
                { title: "Scattered Reports", label: "Tool 6" }
              ].map((t, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0A0A0D] border border-red-500/20 space-y-1">
                  <div className="text-[10px] font-mono text-red-400">{t.label}</div>
                  <div className="text-xs font-bold text-zinc-300">{t.title}</div>
                </div>
              ))}
            </div>

            {/* Converged System Banner */}
            <div className="p-8 rounded-2xl bg-[#0A0A0D] border border-cyan-500/30 text-center space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase">THE CONVERGENCE</span>
              <h3 className="font-display font-extrabold text-3xl text-white">XenoBiz brings them together.</h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
                One simple mobile platform connecting daily operations, customer relationship ledgers, and WhatsApp communication into one unified flow.
              </p>
            </div>
          </div>

          {/* =================================================================
              3. CORE PRODUCT SYSTEM (01 RUN, 02 MANAGE, 03 GROW)
          ================================================================== */}
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
              <div>
                <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                  PRODUCT PILLARS // XENOBIZ
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-2 uppercase">
                  ONE BUSINESS. ONE SYSTEM.
                </h2>
              </div>
              <p className="text-sm text-zinc-400 max-w-md">
                Three interconnected pillars built for modern small businesses, retail shops, wholesalers, and local service teams.
              </p>
            </div>

            {/* 3 Pillars Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {XENOBIZ_DATA.pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="p-8 rounded-2xl bg-[#0A0A0D] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 space-y-6 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                        {pillar.num}
                      </span>
                      <span className="text-xs font-mono text-cyan-400 uppercase">{pillar.title}</span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.subtitle}
                    </h3>

                    <div className="space-y-2 pt-4 border-t border-white/5">
                      {pillar.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================================
              4. CORE FEATURES GRID
          ================================================================== */}
          <div className="space-y-16 pt-8 border-t border-white/10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-mono text-cyan-400 uppercase">DOCUMENTED CAPABILITIES</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
                EVERYTHING YOUR BUSINESS NEEDS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {XENOBIZ_DATA.features.map((feat) => (
                <div
                  key={feat.id}
                  className="p-6 rounded-2xl bg-[#0A0A0D] border border-white/10 space-y-3 group hover:border-cyan-500/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================================
              5. WHATSAPP DIFFERENTIATOR
          ================================================================== */}
          <div className="p-8 md:p-12 rounded-3xl bg-[#0A0A0D] border border-emerald-500/30 space-y-10 relative overflow-hidden">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950 text-emerald-300 text-xs font-mono border border-emerald-800/40">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>CORE DIFFERENTIATOR</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
                YOUR BUSINESS ALREADY RUNS ON WHATSAPP.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400">
                XenoBiz connects everyday business workflows directly with customer communication channels.
              </p>
            </div>

            {/* Workflow Diagram */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 text-center text-xs font-mono">
              {[
                "Invoice Created",
                "WhatsApp Sent",
                "Payment Reminder",
                "Payment Received",
                "Timeline Updated",
                "Follow-up Task",
                "Repeat Sale"
              ].map((step, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-black/60 border border-emerald-500/20 space-y-1">
                  <div className="text-[9px] text-emerald-400">STEP 0{idx + 1}</div>
                  <div className="text-zinc-200 font-bold">{step}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] font-mono text-zinc-500 border-t border-white/10 flex items-center justify-between">
              <span>* Official WhatsApp Business Platform integrations labeled as: PLANNED / FUTURE</span>
              <span>DIRECT MESSAGING INTEGRATION</span>
            </div>
          </div>

          {/* =================================================================
              6. OFFLINE-FIRST SECTION
          ================================================================== */}
          <div className="p-8 md:p-12 rounded-3xl bg-[#0A0A0D] border border-cyan-500/30 space-y-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950 text-cyan-300 text-xs font-mono border border-cyan-800/40">
                <WifiOff className="w-3.5 h-3.5" />
                <span>RESILIENT ARCHITECTURE</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
                BUSINESS DOESN'T STOP WHEN THE INTERNET DOES.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400">
                XenoBiz is engineered with offline-first local database persistence so essential billing and customer tracking continue uninterrupted without internet connectivity.
              </p>
            </div>

            {/* Sync Diagram */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono p-4 rounded-xl bg-black/60 border border-white/10">
              <span className="text-red-400">NO INTERNET</span>
              <span>→</span>
              <span className="text-white">CREATE INVOICE</span>
              <span>→</span>
              <span className="text-cyan-400">SAVE LOCALLY</span>
              <span>→</span>
              <span className="text-emerald-400">INTERNET RESTORED</span>
              <span>→</span>
              <span className="text-cyan-300">AUTO-SYNCHRONIZE</span>
            </div>
          </div>

          {/* =================================================================
              7. CUSTOMER ACTIVITY TIMELINE
          ================================================================== */}
          <div className="space-y-10 pt-8 border-t border-white/10">
            <div className="space-y-4 max-w-3xl">
              <span className="text-xs font-mono text-cyan-400 uppercase">CUSTOMER LEDGER TIMELINE</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase">
                COMPLETE CUSTOMER HISTORY AT A GLANCE
              </h2>
            </div>

            <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-[#0A0A0D] border border-white/10 space-y-4 font-mono text-xs">
              {[
                { date: "09 AUG", title: "Invoice Created", detail: "₹4,500 (#XB-9021)", color: "text-cyan-400" },
                { date: "09 AUG", title: "Payment Received", detail: "₹2,000 Cash Entry", color: "text-emerald-400" },
                { date: "09 AUG", title: "Invoice Shared via WhatsApp", detail: "Sent to +91 99955...", color: "text-violet-400" },
                { date: "01 AUG", title: "Follow-up Call Completed", detail: "Quotation agreed", color: "text-zinc-400" }
              ].map((ev, eIdx) => (
                <div key={eIdx} className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] text-zinc-500">{ev.date}</span>
                    <span className={`font-bold ${ev.color}`}>{ev.title}</span>
                  </div>
                  <span className="text-zinc-300 text-[11px]">{ev.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================================
              8. MOBILE-FIRST EXPERIENCE & QUICK ACTIONS
          ================================================================== */}
          <div className="space-y-10 pt-8 border-t border-white/10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-mono text-cyan-400 uppercase">USER EXPERIENCE</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
                BUILT FOR THE PERSON BEHIND THE COUNTER.
              </h2>
              <p className="text-sm text-zinc-400">
                Designed for shop owners, retail businesses, wholesalers, and local service teams—fast actions, large touch targets, and zero bloated enterprise complexity.
              </p>
            </div>

            {/* Quick Actions Chips */}
            <div className="flex flex-wrap justify-center gap-3">
              {XENOBIZ_DATA.quickActions.map((qa, qIdx) => (
                <div
                  key={qIdx}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs flex items-center gap-2 border ${
                    qa.highlight
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold'
                      : 'bg-[#0A0A0D] text-zinc-300 border-white/10'
                  }`}
                >
                  <PlusCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{qa.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================================
              9. ROADMAP / DEVELOPMENT MILESTONES
          ================================================================== */}
          <div className="space-y-12 pt-8 border-t border-white/10">
            <div className="text-center space-y-4">
              <span className="text-xs font-mono text-amber-400 uppercase">DEVELOPMENT PROGRESS</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
                BUILDING XENOBIZ
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {XENOBIZ_DATA.roadmap.map((r, rIdx) => (
                <div key={rIdx} className="p-5 rounded-2xl bg-[#0A0A0D] border border-white/10 space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-cyan-400">{r.phase}</span>
                    <span className="text-amber-400">{r.status}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-white">{r.title}</h3>
                  <div className="space-y-1 text-xs text-zinc-400 pt-2 border-t border-white/5">
                    {r.items.map((it, iIdx) => (
                      <div key={iIdx}>• {it}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================================
              10. WAITLIST CTA FORM
          ================================================================== */}
          <div id="waitlist" className="p-8 md:p-12 rounded-3xl bg-[#0A0A0D] border border-white/10 space-y-8 max-w-3xl mx-auto">
            <div className="text-center space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase">EARLY ACCESS REGISTRATION</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase">
                BE FIRST TO USE XENOBIZ.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                XenoBiz is currently under active development. Join the early-access waitlist to receive product updates and early preview invitations.
              </p>
            </div>

            {status === 'success' ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">YOU'RE ON THE LIST.</h3>
                <p className="text-xs text-zinc-400">Your registration has been transmitted to info@xenotrix.in.</p>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={waitlist.name}
                    onChange={(e) => setWaitlist({ ...waitlist, name: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-[#111116] border border-white/10 text-white text-xs focus:border-cyan-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Business Email *"
                    value={waitlist.email}
                    onChange={(e) => setWaitlist({ ...waitlist, email: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-[#111116] border border-white/10 text-white text-xs focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    value={waitlist.businessType}
                    onChange={(e) => setWaitlist({ ...waitlist, businessType: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-[#111116] border border-white/10 text-white text-xs focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="Retail / Shop">Retail / Shop</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Local Service">Local Service Business</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Other">Other</option>
                  </select>

                  <input
                    type="tel"
                    placeholder="WhatsApp Number (Optional)"
                    value={waitlist.phone}
                    onChange={(e) => setWaitlist({ ...waitlist, phone: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-[#111116] border border-white/10 text-white text-xs focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Join Early Access Waitlist</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* =================================================================
              11. FINAL PRODUCT CTA
          ================================================================== */}
          <div className="py-16 border-t border-white/10 text-center space-y-6">
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              YOUR BUSINESS. ONE SIMPLE SYSTEM.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
              Billing, customers, inventory, payments and WhatsApp—designed to work together seamlessly.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#waitlist"
                className="px-6 py-3 rounded-xl bg-white text-black font-bold text-xs hover:bg-cyan-300 transition-colors"
              >
                Join the XenoBiz Waitlist →
              </a>
              <Link
                to="/"
                className="px-6 py-3 rounded-xl bg-white/[0.04] text-white border border-white/10 text-xs font-mono hover:bg-white/[0.08]"
              >
                Back to Xenotrix →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};
