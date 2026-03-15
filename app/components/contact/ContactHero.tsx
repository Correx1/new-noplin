'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ContactHero() {
  return (
    <section className="hero-section relative flex items-center justify-center w-full min-h-[40vh] lg:min-h-[45vh] pt-[100px] pb-12 lg:pt-[120px] lg:pb-16 overflow-hidden border-b border-(--grid-line-color) bg-navy z-0">
      
      {/* ── Background art ── */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 1200 800"
          className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-10"
          fill="none"
        >
          <defs>
            <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="heroGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M80 40 C 520 220, 700 580, 1120 760" stroke="url(#heroGrad)" strokeWidth="3" filter="url(#heroGlow)" />
          <path d="M140 0 C 560 200, 740 560, 1080 800" stroke="url(#heroGrad)" strokeWidth="2" opacity="0.5" />
        </svg>
        <div className="absolute left-[16%] top-[18%] h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute left-[62%] top-[46%] h-36 w-36 rounded-full bg-blue-500/15 blur-[80px]" />
        <div className="absolute left-[42%] top-[78%] h-24 w-24 rounded-full bg-cyan-400/15 blur-2xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto w-full px-6 xl:px-12 flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 16 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: EASE }} 
          className="flex items-center mb-6"
        >
          <span className="inline-flex items-center text-[12px] font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit uppercase tracking-widest">
            Start your project
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }} 
          className="text-4xl md:text-6xl lg:text-7xl max-w-4xl font-display font-bold text-white leading-[1.05] tracking-tight"
        >
          Lets build something <span className="text-electric">extraordinary</span> together.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }} 
          className="mt-8 max-w-xl font-(--font-body) text-lg text-gray-400 leading-relaxed"
        >
          Fill out the brief below to help us understand your needs. We review every submission manually and will respond within two business hours.
        </motion.p>
      </div>
    </section>
  );
}
