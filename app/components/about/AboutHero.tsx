'use client';

import { motion } from 'framer-motion';
import { EASE } from './AboutShared';

export default function AboutHero() {
  return (
    <section className="hero-section relative flex items-center justify-center w-full min-h-[75vh] lg:min-h-[50vh] pt-28 pb-14 lg:pt-[120px] lg:pb-16 overflow-hidden bg-navy">
      
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

      {/* Content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_450px] lg:gap-24">

        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="flex max-w-2xl flex-col items-start gap-6"
        >
          <span className="inline-flex items-center text-[12px] font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit uppercase tracking-widest">
            We Are Different
          </span>

          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
            We Are Not a
            <br />
            Typical Agency.
          </h1>

          <p className="mt-2 font-body text-[18px] leading-[1.6] text-gray-400">
            We are a results-obsessed team that builds brands that mean something,
            websites that convert, content that engages, and marketing that grows
            businesses — delivered fast, and with excellence.
          </p>
        </motion.div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="hidden lg:flex relative w-full max-w-[480px] ml-auto"
        >
          {/* OFFSET FRAME */}
          <div className="absolute top-6 left-6 w-full h-full rounded-2xl border-2 border-cyan-400/40 z-0" />

          {/* CONTENT CARD */}
          <div className="relative z-10 flex aspect-4/3 w-full flex-col overflow-hidden rounded-2xl border border-[var(--border-card)] bg-(--bg-card) shadow-xl">
            <div className="flex items-center gap-3 border-b border-[var(--border-card)] px-5 py-4">
              <svg className="h-4 w-4 text-(--text-muted)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <div className="h-5 w-32 rounded bg-[var(--text-muted)] opacity-20" />
            </div>
            <div className="border-b border-[var(--border-card)] px-5 py-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-(--text-muted)">Why Choose Us</span>
            </div>
            <div className="relative flex-1 overflow-hidden p-5">
              <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-6 bg-linear-to-b from-[var(--bg-card)] to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-10 bg-linear-to-t from-[var(--bg-card)] to-transparent" />
              <div className="flex flex-col gap-5 animate-[scrollList_15s_linear_infinite] hover:[animation-play-state:paused]">
                {[
                  { id: 'results', val: 'Results-First Focus' },
                  { id: 'speed', val: 'Fast Turnarounds' },
                  { id: 'design', val: 'Premium UI/UX' },
                  { id: 'seo', val: 'Built-in SEO' },
                  { id: 'growth', val: 'Scalable Architecture' },
                  { id: 'support', val: 'Ongoing Partnership' },
                  { id: 'roi', val: 'High ROI Focus' },
                  { id: 'results-2', val: 'Results-First Focus' },
                  { id: 'speed-2', val: 'Fast Turnarounds' },
                ].map((item) => (
                  <div key={item.id} className="group flex items-center justify-between">
                    <span className="font-mono text-[13px] text-(--text-primary)">{item.id}</span>
                    <span className="font-mono text-[13px] text-(--text-muted) transition-colors group-hover:text-electric">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scrollList {
          0% { transform: translateY(0); }
          100% { transform: translateY(-300px); }
        }
      `}</style>
    </section>
  );
}