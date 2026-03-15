'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, Star, TrendingUp, Globe } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="w-full">

      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center overflow-hidden w-full min-h-[65vh] lg:min-h-[75vh] bg-navy">

        {/* Background art */}
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

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 w-full flex flex-col items-center text-center gap-6 py-20 lg:py-24">

          {/* Headline */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0.05}
            className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-[1.1] tracking-tight text-white"
          >
            We Build Brands That{' '}
            <span className="relative inline-block">
              Win Online
              <motion.span
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-cyan-400 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.15}
            className="text-base sm:text-[1.05rem] text-gray-400 leading-relaxed max-w-xl"
          >
            From your first impression to your next campaign — we handle design,
            development, content, and paid media so you can focus on running your business.
            Serious work. Real results.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.25}
          >
            <button
              onClick={() => router.push('/contact')}
              className="btn btn-primary"
            >
              Get a Free Quote
              <ArrowRight size={15} strokeWidth={2.2} />
            </button>
          </motion.div>

        </div>
      </section>

      {/* ── TRUST STRIP — white bar below hero ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
        className="w-full bg-white border-b border-gray-100"
      >
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col items-center gap-3 text-center">

          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
            Trusted by startups, SMEs &amp; growing businesses — Africa &amp; beyond
          </p>

          <div className="w-6 h-px bg-gray-200" />

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">

            <span className="flex items-center gap-1.5">
              <span className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span className="text-[12px] sm:text-[13px] font-bold text-gray-700">4.9</span>
              <span className="text-[11px] text-gray-400">Client Rating</span>
            </span>

            <span className="h-3.5 w-px bg-gray-200 hidden sm:block" />

            <span className="flex items-center gap-1.5">
              <TrendingUp size={12} className="text-cyan-500" />
              <span className="text-[12px] sm:text-[13px] font-bold text-gray-700">50+</span>
              <span className="text-[11px] text-gray-400">Projects Delivered</span>
            </span>

            <span className="h-3.5 w-px bg-gray-200 hidden sm:block" />

            <span className="flex items-center gap-1.5">
              <Globe size={12} className="text-cyan-500" />
              <span className="text-[12px] sm:text-[13px] font-bold text-gray-700">10+</span>
              <span className="text-[11px] text-gray-400">Countries Served</span>
            </span>

            <span className="h-3.5 w-px bg-gray-200 hidden sm:block" />

            <span className="flex items-center gap-1.5">
              <span className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span className="text-[12px] sm:text-[13px] font-bold text-gray-700">5.0</span>
              <span className="text-[11px] text-gray-400">Design Score</span>
            </span>

          </div>
        </div>
      </motion.div>

    </div>
  );
}