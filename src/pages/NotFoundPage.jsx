import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <>
      <SEO title="404 — Node Not Found // Xenotrix Technologies" />
      <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 bg-[#050505] text-center">
        <div className="max-w-md mx-auto px-4 space-y-6">
          <div className="w-16 h-16 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 flex items-center justify-center mx-auto font-mono text-xl font-bold">
            404
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase">
            NODE NOT FOUND
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            The target URL route or system page you requested does not exist or has moved within the Xenotrix network.
          </p>
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-xs hover:bg-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Core System</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
