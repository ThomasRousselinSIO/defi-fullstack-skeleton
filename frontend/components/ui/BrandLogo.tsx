import React from "react";

export default function BrandLogo() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 shadow-lg shadow-cyan-500/10 backdrop-blur-xl">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12L10 6L14 10L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 20L10 14L14 18L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="text-[0.7rem] uppercase tracking-[0.35em] text-cyan-200/80">Hotel Horizon</p>
        <p className="text-sm font-semibold text-white">Voyage & Séjour</p>
      </div>
    </div>
  );
}
