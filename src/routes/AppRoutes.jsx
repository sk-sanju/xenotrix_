import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Eagerly import HomePage for INSTANT Zero-Delay First Paint (0ms Waterfall)
import { HomePage } from '../pages/Home/HomePage';

// Subpages remain lazy loaded on demand
const AboutPage = lazy(() => import('../pages/About/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesIndexPage = lazy(() => import('../pages/Services/ServicesIndexPage').then(m => ({ default: m.ServicesIndexPage })));
const ServicePageTemplate = lazy(() => import('../pages/Services/ServicePageTemplate').then(m => ({ default: m.ServicePageTemplate })));
const SolutionsPage = lazy(() => import('../pages/Solutions/SolutionsPage').then(m => ({ default: m.SolutionsPage })));
const IndustriesIndexPage = lazy(() => import('../pages/Industries/IndustriesIndexPage').then(m => ({ default: m.IndustriesIndexPage })));
const IndustryPageTemplate = lazy(() => import('../pages/Industries/IndustryPageTemplate').then(m => ({ default: m.IndustryPageTemplate })));
const ProductsIndexPage = lazy(() => import('../pages/Products/ProductsIndexPage').then(m => ({ default: m.ProductsIndexPage })));
const ProductDetailPage = lazy(() => import('../pages/Products/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const PortfolioPage = lazy(() => import('../pages/Portfolio/PortfolioPage').then(m => ({ default: m.PortfolioPage })));
const CaseStudiesIndexPage = lazy(() => import('../pages/CaseStudies/CaseStudiesIndexPage').then(m => ({ default: m.CaseStudiesIndexPage })));
const CaseStudyDetailPage = lazy(() => import('../pages/CaseStudies/CaseStudyDetailPage').then(m => ({ default: m.CaseStudyDetailPage })));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('../pages/PrivacyTermsPages').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('../pages/PrivacyTermsPages').then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

import { trackPageView } from '../utils/analytics';

// Scroll to top and track GA4 page view on route change
export const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView(pathname + search, document.title);
  }, [pathname, search]);

  return null;
};

// Lightweight Suspense Fallback
const LoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#05070D]">
    <div className="w-6 h-6 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
  </div>
);

export const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Eagerly rendered instant home route */}
          <Route path="/" element={<HomePage />} />
          
          {/* On-demand lazy routes */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsIndexPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/services" element={<ServicesIndexPage />} />
          <Route path="/services/:slug" element={<ServicePageTemplate />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesIndexPage />} />
          <Route path="/industries/:slug" element={<IndustryPageTemplate />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/case-studies" element={<CaseStudiesIndexPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
