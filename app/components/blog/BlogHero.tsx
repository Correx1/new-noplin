import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function BlogHero() {
  return (
      <section className="relative flex items-center justify-center w-full min-h-[40vh] lg:min-h-[45vh] pt-[100px] pb-12 lg:pt-[120px] lg:pb-16 overflow-hidden bg-navy">

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
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_auto] lg:gap-24">
        
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="flex max-w-2xl flex-col items-start gap-5"
        >
          <span className="inline-flex items-center text-[12px] font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit uppercase tracking-widest">
            Noplin Insights
          </span>

          <h1 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em] text-white uppercase">
            Insights &<br />Strategy.
          </h1>

          <p className="mt-2 font-body text-[18px] leading-[1.6] text-gray-400">
            Digital marketing guides, technical design tips, and uncompromising business growth strategies directly from the Noplin team.
          </p>
        </motion.div>

        {/* Right side - Circular CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
           className="hidden lg:flex"
        >
          <div
            className="group relative flex h-48 w-48 cursor-pointer items-center justify-center rounded-full border border-[var(--border-card)] bg-transparent shadow-sm transition-all duration-500 hover:border-electric hover:bg-(--bg-card) hover:shadow-lg hover:shadow-electric/10 ml-auto"
            onClick={() => {
              window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
            }}
          >
             <div className="flex flex-col items-center gap-3 text-center">
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                  Read Latest<br />Insights
                </span>
                <svg 
                  className="h-6 w-6 text-(--text-muted) transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M19 5H8M19 5V16" />
                </svg>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
