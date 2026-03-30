'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const features = [
  {
    title: 'Flexible structures',
    description: 'Bespoke project pricing, structured payment plans, and ongoing retainers tailored for your scale.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
        <path d="m15 5 4 4" />
      </svg>
    )
  },
  {
    title: 'Bundle discounts',
    description: 'Significant cost reductions when combining design, development, and marketing into unified projects.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    )
  },
  {
    title: 'Dedicated retainers',
    description: 'Consistent, priority access to our entire team of designers and developers at a predictable flat rate.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    title: 'Full transparency',
    description: 'Detailed roadmaps, timeline tracking, and clear deliverables so you know exactly what you are paying for.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
];


export default function PricingFeatures() {
  return (
    <section className="relative overflow-hidden force-dark py-20 lg:py-28">

      {/* ── Background Art ── */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 1200 800"
          className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-10"
          fill="none"
        >
          <defs>
            <linearGradient id="pfCurveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="pfGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M80 40 C 520 220, 700 580, 1120 760" stroke="url(#pfCurveGrad)" strokeWidth="3" filter="url(#pfGlow)" />
          <path d="M140 0 C 560 200, 740 560, 1080 800" stroke="url(#pfCurveGrad)" strokeWidth="2" opacity="0.5" />
          <path d="M1080 20 C 640 240, 460 600, 80 780" stroke="url(#pfCurveGrad)" strokeWidth="1.5" opacity="0.25" />
        </svg>
        <div className="absolute left-[16%] top-[18%] h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute left-[62%] top-[46%] h-36 w-36 rounded-full bg-blue-500/15 blur-[80px]" />
        <div className="absolute left-[42%] top-[78%] h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── col-4 heading | col-8 features ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — heading col-4 */}
          <div className="lg:col-span-4 flex flex-col gap-5">
        
            <h2 className="font-display font-bold text-white text-[clamp(1.9rem,3.5vw,2.75rem)] leading-tight">
              Custom solutions for enterprise scale
            </h2>
            <p className="font-body text-[15px] text-white/60 leading-relaxed">
              Create tailored packages to help you expand into new markets, optimise performance,
              automate workflows, and scale your brand presence.
            </p>
          </div>

          

          {/* Right — features 2×2 col-8 */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
                className="flex flex-col items-start"
              >
                {/* Icon box */}
                <div className="text-cyan-400 mb-5 flex items-center justify-center p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 w-12 h-12 relative">
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-400/20 to-transparent rounded-xl opacity-60" />
                  <div className="relative z-10">{feature.icon}</div>
                </div>

                {/* Title & Description */}
                <div className="border-l-2 border-white/10 pl-4">
                  <h3 className="font-display font-bold text-[17px] text-white">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[14px] text-white/55 mt-2 leading-[1.65]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
