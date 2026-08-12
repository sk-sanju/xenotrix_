import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Lazy Loaded Pages for Maximum Speed & Code Splitting
const HomePage = lazy(() => import('../pages/Home/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('../pages/About/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesIndexPage = lazy(() => import('../pages/Services/ServicesIndexPage').then(m => ({ default: m.ServicesIndexPage })));
const ServicePageTemplate = lazy(() => import('../pages/Services/ServicePageTemplate').then(m => ({ default: m.ServicePageTemplate })));
const IndustriesIndexPage = lazy(() => import('../pages/Industries/IndustriesIndexPage').then(m => ({ default: m.IndustriesIndexPage })));
const IndustryPageTemplate = lazy(() => import('../pages/Industries/IndustryPageTemplate').then(m => ({ default: m.IndustryPageTemplate })));
const ProductsIndexPage = lazy(() => import('../pages/Products/ProductsIndexPage').then(m => ({ default: m.ProductsIndexPage })));
const ProductDetailPage = lazy(() => import('../pages/Products/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const XenoBizPage = lazy(() => import('../pages/Products/XenoBiz/XenoBizPage').then(m => ({ default: m.XenoBizPage })));
const CaseStudiesIndexPage = lazy(() => import('../pages/CaseStudies/CaseStudiesIndexPage').then(m => ({ default: m.CaseStudiesIndexPage })));
const CaseStudyDetailPage = lazy(() => import('../pages/CaseStudies/CaseStudyDetailPage').then(m => ({ default: m.CaseStudyDetailPage })));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('../pages/PrivacyTermsPages').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('../pages/PrivacyTermsPages').then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Scroll to top helper
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Ultra-fast Page Loading Indicator
const LoadingFallback = () => (
  <div className="min-h-[70vh] flex items-center justify-center bg-[#050505]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin" />
      <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
        LOADING NODE...
      </span>
    </div>
  </div>
);

export const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Services Routes */}
          <Route path="/services" element={<ServicesIndexPage />} />
          <Route path="/services/:slug" element={<ServicePageTemplate />} />

          {/* Industries Routes */}
          <Route path="/industries" element={<IndustriesIndexPage />} />
          <Route path="/industries/:slug" element={<IndustryPageTemplate />} />

          {/* Products Routes */}
          <Route path="/products" element={<ProductsIndexPage />} />
          <Route path="/products/xenobiz" element={<XenoBizPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />

          {/* Case Studies Routes */}
          <Route path="/case-studies" element={<CaseStudiesIndexPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />

          {/* Contact & Legal Routes */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
