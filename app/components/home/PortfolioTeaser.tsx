'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const projects = [
  {
    id: 'p1',
    tabLabel: 'Web Design',
    title: 'Modern Digital Experiences',
    desc: 'High-performance websites built to scale and convert. We engineer complete brand ecosystems.',
    category: 'Website Design',
    href: '/work',
    image: '/portfolio/site.png',
  },
  {
    id: 'p2',
    tabLabel: 'Product Branding',
    title: 'Memorable Brand Identities',
    desc: 'Visual systems that cut through the noise. Positioning your company as the premium choice.',
    category: 'Brand Identity',
    href: '/work',
    image: '/portfolio/branding-main.png',
  },
  {
    id: 'p3',
    tabLabel: 'Ad Campaigns',
    title: 'Strategic Growth Marketing',
    desc: 'Data-driven campaigns designed to acquire high-value customers at scale.',
    category: 'Marketing',
    href: '/work',
    image: '/portfolio/work.mp4',
  },
  {
    id: 'p4',
    tabLabel: 'Web Apps',
    title: 'Complex Software Simplified',
    desc: 'Intuitive web applications solving real business challenges smoothly.',
    category: 'Custom Software',
    href: '/work',
    image: '/portfolio/site.png',
  },
];

export default function PortfolioTeaser() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className="bg-(--bg-section) py-24 sm:py-32 xl:py-40 overflow-hidden border-t border-(--grid-line-color)">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">

        {/* --- HEADER --- */}
 <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="flex flex-col items-center text-center gap-3 mb-14"
          >
            <span className="inline-flex items-center text-[11px] font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit uppercase tracking-widest">
              Our Work
            </span>
            <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.625rem)] text-(--text-primary)">
              Work Built to Outperform
            </h2>
            <p className="font-(--font-body) text-(--text-secondary) max-w-md">
              A collection of our best work across different industries.
            </p>
          </motion.div>

        {/* ====== MOBILE LAYOUT: Horizontal pill tabs + full-width media ====== */}
        <div className="lg:hidden flex flex-col gap-6">

          {/* Horizontal pill tabs — scrollable */}
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-(--text-secondary) bg-gray-100/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobileActiveTabPill"
                      className="absolute inset-0 bg-cyan-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{project.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Full-width media viewer — taller on mobile */}
          <div className="relative w-full aspect-[5/4] min-h-[280px] rounded-2xl overflow-hidden bg-(--bg-card) border border-(--border-card) shadow-xl isolate">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-0 w-full h-full"
              >
                {activeProject.image.endsWith('.mp4') || activeProject.image.endsWith('.webm') ? (
                  <video src={activeProject.image} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />

            {/* Floating content — slightly lower, still on image */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`mob-content-${activeProject.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
                  className="flex items-end justify-between gap-4"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-cyan-400">
                      {activeProject.category}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white leading-tight">
                      {activeProject.title}
                    </h3>
                  </div>

                  <Link
                    href={activeProject.href}
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white hover:bg-cyan-400 transition-colors duration-300 shrink-0"
                    aria-label={`View ${activeProject.title}`}
                  >
                    <ArrowRight size={18} strokeWidth={2.5} className="text-navy -rotate-45" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ====== TABLET + DESKTOP LAYOUT: side-by-side ====== */}
        <div className="hidden lg:grid grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* LEFT: Vertical tab menu */}
          <div className="col-span-4 flex flex-col relative">
            <div className="absolute top-1/2 -left-20 w-32 h-64 bg-cyan-400/5 blur-3xl -translate-y-1/2 pointer-events-none" />

            <div className="flex flex-col border-l-2 border-slate-200 dark:border-slate-800">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveIndex(index)}
                    className="group relative flex items-center justify-between w-full text-left py-5 xl:py-7 pl-5 xl:pl-8 pr-4 transition-all duration-300"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="desktopActiveTabIndicator"
                        className="absolute left-[-2px] inset-y-0 w-[2px] bg-cyan-500 z-10"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}

                    <h3
                      className={`font-display text-xl lg:text-2xl xl:text-3xl font-bold transition-all duration-300 ${
                        isActive
                          ? 'text-(--text-primary) translate-x-2'
                          : 'text-gray-400 dark:text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-400'
                      }`}
                    >
                      {project.tabLabel}
                    </h3>

                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 shrink-0 ${
                        isActive
                          ? 'border-cyan-500 text-cyan-500 scale-100 opacity-100 bg-cyan-500/10'
                          : 'border-transparent text-transparent scale-50 opacity-0 group-hover:scale-75 group-hover:opacity-50 group-hover:text-gray-400 group-hover:border-gray-300'
                      }`}
                    >
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </div>
                  </button>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 xl:mt-12 pl-5 xl:pl-8"
            >
              <Link href="/work" className="btn btn-primary">
                View All Works <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Massive media viewer */}
          <div className="col-span-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative w-full a xl:aspect-video rounded-2xl xl:rounded-[2rem] overflow-hidden bg-(--bg-card) border border-(--border-card) shadow-2xl isolate group"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="absolute inset-0 w-full h-full"
                >
                  {activeProject.image.endsWith('.mp4') || activeProject.image.endsWith('.webm') ? (
                    <video src={activeProject.image} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-8 xl:p-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${activeProject.id}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
                    className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
                  >
                    <div className="flex flex-col gap-2 max-w-xl">
                      <span className="font-display text-[11px] font-semibold uppercase tracking-widest text-cyan-400">
                        {activeProject.category}
                      </span>
                      <h3 className="font-display font-bold text-2xl lg:text-3xl xl:text-4xl text-white leading-tight">
                        {activeProject.title}
                      </h3>
                      <p className="font-(--font-body) text-[15px] text-gray-300 leading-relaxed mt-1 max-w-md">
                        {activeProject.desc}
                      </p>
                    </div>

                    <Link
                      href={activeProject.href}
                      className="group/btn inline-flex items-center justify-center w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-white hover:bg-cyan-400 transition-colors duration-300 shrink-0"
                      aria-label={`View ${activeProject.title}`}
                    >
                      <ArrowRight
                        size={20}
                        strokeWidth={2.5}
                        className="text-navy -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300"
                      />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}