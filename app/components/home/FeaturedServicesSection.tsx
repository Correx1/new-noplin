'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const services = [
  {
    dept: 'DESIGN',
    name: 'Social Branding',
    desc: 'Cohesive, premium social media identities that make your brand unforgettable.',
    href: '/services/social-branding',
  },
  {
    dept: 'WEB & DEV',
    name: 'Website Design',
    desc: 'Bespoke, conversion-optimized websites built to impress and sell.',
    href: '/services/website-design',
  },
  {
    dept: 'MARKETING',
    name: 'Social Media Management',
    desc: 'End-to-end channel management that builds community and drives real growth.',
    href: '/services/social-management',
  },
  {
    dept: 'WEB & DEV',
    name: 'Custom Web Application',
    desc: 'Scalable web applications engineered to solve your complex business challenges.',
    href: '/services/web-application',
  },
  {
    dept: 'MARKETING',
    name: 'Paid Ads Management',
    desc: 'Meta and Google ad campaigns managed by specialists, built for ROAS.',
    href: '/services/social-ads',
  },
  {
    dept: 'CONSULTING',
    name: 'Digital Strategy Consulting',
    desc: 'Full digital strategy and 1-on-1 consulting for serious, growth-focused businesses.',
    href: '/services/strategy-consulting',
  },
];

function ServiceItem({ s, i }: { s: typeof services[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.45, ease: EASE, delay: i * 0.04 }}
      className="flex flex-col gap-4"
    >
      <span className="font-display text-[11px] tracking-[0.14em] font-semibold text-white/50">
        {s.dept}
      </span>

      <h3 className="font-display text-[22px] font-bold leading-tight text-white">
        {s.name}
      </h3>

      <p className="font-body text-[15px] text-white/70 max-w-[520px]">
        {s.desc}
      </p>

      <Link
        href={s.href}
        className="font-display text-[14px] font-semibold text-amber-400 hover:text-amber-300 transition-colors w-fit mt-1"
      >
        Learn more →
      </Link>
    </motion.div>
  );
}

export default function FeaturedServicesSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-[140px] [clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]">
      {/* === BACKGROUND ART === */}
      <div className="pointer-events-none absolute inset-0">
        {/* Curved glowing paths */}
        <svg
          viewBox="0 0 1200 800"
          className="absolute left-1/2 top-0 h-full w-[1200px] -translate-x-1/2 opacity-10"
          fill="none"
        >
          <defs>
            <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M80 40 C 520 220, 700 580, 1120 760"
            stroke="url(#curveGrad)"
            strokeWidth="3"
            filter="url(#glow)"
          />

          <path
            d="M140 0 C 560 200, 740 560, 1080 800"
            stroke="url(#curveGrad)"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>

        {/* Bubble anchors */}
        <div className="absolute left-[16%] top-[18%] h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute left-[62%] top-[46%] h-36 w-36 rounded-full bg-blue-500/15 blur-[80px]" />
        <div className="absolute left-[42%] top-[78%] h-24 w-24 rounded-full bg-cyan-400/15 blur-2xl" />
      </div>

      {/* === CONTENT === */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* LEFT */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <span className="inline-flex items-center text-[12px] font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit uppercase tracking-widest">
            OUR SERVICES
          </span>

          <h2 className="font-display font-extrabold text-white text-[clamp(2.2rem,4vw,3.0rem)] leading-[1.1]">
            Focused offerings.
            <br />
            Serious outcomes.
          </h2>

          <p className="font-body text-[17px] text-white/70 max-w-90">
            A tight set of services built for companies that care about execution,
            clarity, and return on spend.
          </p>

           <div className="shrink-0 flex justify-center sm:block">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Start a project <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {services.map((s, i) => (
            <ServiceItem key={s.name} s={s} i={i} />
          ))}

          <div className="md:col-span-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-navy font-display font-semibold text-[14px] hover:bg-white/90 transition"
            >
              View all services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}