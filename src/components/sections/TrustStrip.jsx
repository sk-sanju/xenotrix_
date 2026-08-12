import React from 'react';

export const TrustStrip = () => {
  const capabilities = [
    "Software Engineering",
    "AI Systems",
    "Workflow Automation",
    "Enterprise SaaS",
    "Data Intelligence",
    "Digital Growth",
    "Distributed Architecture",
    "LLM Integration"
  ];

  return (
    <div className="w-full bg-[#0A0A0D] border-y border-white/10 py-5 overflow-hidden relative z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...capabilities, ...capabilities, ...capabilities].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-8 mx-6 text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
            <span className="hover:text-white transition-colors">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
