import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../../data/companyData';

export const FAQAccordion = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section className="py-24 bg-[#f7f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="font-normal text-3xl sm:text-5xl text-[#1f3038] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#5d6b72] leading-relaxed">
            Direct, transparent insights into our products, engineering approach, and client engagements.
          </p>
        </div>

        {/* Index on left, Answer pane on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Question Index (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-sm font-medium text-[#1f3038] mb-2">
              Question index
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedIdx(idx)}
                    onMouseEnter={() => setSelectedIdx(idx)}
                    className={`w-full text-left py-3 px-4 rounded-lg flex items-center gap-3 transition-colors cursor-pointer text-base ${
                      isSelected
                        ? 'bg-[#ecf0f2] text-[#1f3038] font-semibold'
                        : 'text-[#5d6b72] hover:text-[#1f3038]'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        isSelected ? 'bg-[#0d7480]' : 'bg-[#d8e0e4]'
                      }`}
                    />
                    <span className="leading-snug">{faq.q}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sticky Answer Pane (Cols 7-12) */}
          <div className="lg:col-span-7 lg:sticky lg:top-32">
            <div className="p-8 sm:p-12 rounded-xl bg-[#ecf0f2] space-y-6">
              <span className="text-sm font-medium text-[#0d7480]">
                Answer
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-4"
                >
                  <div className="text-xl sm:text-2xl font-normal text-[#1f3038] leading-snug">
                    {FAQS[selectedIdx].q}
                  </div>
                  <p className="text-base sm:text-lg text-[#1f3038] leading-relaxed">
                    {FAQS[selectedIdx].a}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQAccordion;
