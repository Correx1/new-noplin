'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export interface HeroProps {
  serviceName: string;
  tagline: string;
  turnaround?: string;
  heroImage?: string;
}

export default function HeroSection({
  serviceName,
  tagline,
  turnaround,
  heroImage,
}: HeroProps) {
  // If no heroImage provided, fallback to a sensible default or just dark bg
  const bgImage = heroImage || '/images/defaults/service-hero-bg.jpg';

  return (
    <section 
  className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden bg-gray-950 pt-[80px] pb-[100px]"
>
  {/* ── Background Art (copied & adapted) ── */}
  <div className="pointer-events-none absolute inset-0 z-0">
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

      <path
        d="M80 40 C 520 220, 700 580, 1120 760"
        stroke="url(#heroGrad)"
        strokeWidth="3"
        filter="url(#heroGlow)"
      />
      <path
        d="M140 0 C 560 200, 740 560, 1080 800"
        stroke="url(#heroGrad)"
        strokeWidth="2"
        opacity="0.5"
      />
    </svg>

    {/* Glow blobs */}
    <div className="absolute left-[16%] top-[18%] h-28 w-28 rounded-full bg-amber-500/15 blur-3xl" />
    <div className="absolute left-[62%] top-[46%] h-36 w-36 rounded-full bg-blue-500/15 blur-[80px]" />
    <div className="absolute left-[42%] top-[78%] h-24 w-24 rounded-full bg-amber-500/15 blur-2xl" />
  </div>

  {/* ── Optional Background Image ── */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.15]"
    // style={{ backgroundImage: `url('${bgImage}')` }}
  />

  {/* ── Content ── */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col gap-6 items-start w-full cursor-default">
    
    {/* Turnaround Time */}
    {turnaround && (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
        className="inline-flex items-center gap-2"
      >
        <span className="relative inline-flex items-center text-[13px] font-semibold py-1.5 tracking-widest text-amber-500 w-fit uppercase">
          Expected Delivery: {turnaround}
          <span className="absolute left-0 bottom-0 h-[2px] w-[40%] bg-amber-600"></span>
        </span>
      </motion.div>
    )}

    {/* Headline */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
      className="text-[clamp(2.2rem,4vw,3.2rem)] font-display font-bold text-white max-w-[700px] leading-[1.1] tracking-tight"
    >
      {serviceName}
    </motion.h1>

    {/* Tagline */}
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
      className="text-lg md:text-xl font-(--font-body) text-slate-300 max-w-[600px] leading-relaxed"
    >
      {tagline}
    </motion.p>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
      className="mt-4"
    >
      <Link
        href="/contact"
        className="inline-flex px-6 py-3.5 text-[15px] font-semibold text-[#0A0A0A] bg-amber-500 hover:bg-amber-500 rounded-lg transition-colors shadow-lg shadow-amber-500/20"
      >
        Get a quote for this service →
      </Link>
    </motion.div>
  </div>
</section>
  );
}