/**
 * Google Analytics 4 (GA4) Utilities for Xenotrix Technologies
 * Tracking ID: G-70W923NZBJ
 */

export const GA_TRACKING_ID = 'G-70W923NZBJ';

// Track Single Page Application (SPA) Page Views
export const trackPageView = (url, title) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
      page_location: window.location.href
    });
  }
};

// Generic Custom Event Tracking
export const trackEvent = (action, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
};

// Track WhatsApp Outbound Click Conversion
export const trackWhatsAppClick = (source = 'General') => {
  trackEvent('whatsapp_click', {
    event_category: 'Conversion',
    event_label: source,
    value: 1
  });
};

// Track Contact / Project Scoping Form Submission
export const trackFormSubmission = (service = 'General', budget = 'Not Specified') => {
  trackEvent('generate_lead', {
    event_category: 'Lead',
    event_label: service,
    service_type: service,
    budget_range: budget,
    value: 1
  });
};

// Track Product Demo Inquiries
export const trackDemoRequest = (productName = 'Product') => {
  trackEvent('demo_request', {
    event_category: 'Product',
    event_label: productName,
    product_name: productName,
    value: 1
  });
};

// Track Direct Email or Phone Inquiries
export const trackContactClick = (type = 'email') => {
  trackEvent('contact_click', {
    event_category: 'Contact',
    event_label: type
  });
};
