'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function WorkHero() {
  return (
    <section className="hero-section relative flex items-center justify-center w-full min-h-[40vh] lg:min-h-[45vh] pt-[100px] pb-12 lg:pt-[120px] lg:pb-16 overflow-hidden bg-navy">
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
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_600px] lg:gap-24">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="flex max-w-2xl flex-col items-start gap-6"
        >
          <span className="inline-flex items-center text-[12px] font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit uppercase tracking-widest">
            Portfolio
          </span>

          <h1 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
            Our Work Speaks
     
            for Itself.
          </h1>

          <p className="mt-2 font-body text-[17px] leading-[1.6] text-gray-400">
            We build brands that mean something, websites that convert, and
            campaigns that scale. Explore a selection of our recent projects.
          </p>
        </motion.div>

        {/* Right side – Single image (shorter on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="relative mt-10 flex w-full max-w-[480px] ml-auto items-center justify-center lg:mt-0 lg:justify-end"
        >
          {/* Subtle glow */}
          <div className="absolute right-16 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-electric opacity-15 blur-[140px]" />

          {/* OFFSET FRAME */}
          <div className="absolute top-6 left-6 w-full h-full rounded-2xl border-2 border-cyan-400/40" />

          {/* VIDEO CARD */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] w-full bg-[--bg-card]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/portfolio/work.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





    // {/* TEXT SIDE */}
    // <motion.div
    //   initial={{ opacity: 0, y: 24 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.65, ease: EASE }}
    //   className="flex flex-col gap-6"
    // >

    //   <span className="inline-flex items-center text-[12px] font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit uppercase tracking-widest">
    //     What We Do
    //   </span>

    //   <h1 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
    //     Digital Growth, Delivered.
    //   </h1>

    //   <p className="mt-2 font-body text-[17px] leading-[1.6] text-gray-400 max-w-[500px]">
    //     We design brands, build high-performance websites, and run marketing
    //     systems that turn attention into customers.
    //   </p>

    //   <div className="pt-2">
    //     <Link
    //       href="/contact"
    //       className="btn btn-primary"
    //     >
    //       Request a consultation <ArrowRight size={16} />
    //     </Link>
    //   </div>

    // </motion.div>