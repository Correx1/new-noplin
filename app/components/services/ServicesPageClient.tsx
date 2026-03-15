/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FinalCTASection from '../home/FinalCTASection';
import { ArrowRight, Layers, TrendingUp, Zap } from 'lucide-react';
import ServicesFAQ from './ServicesFAQ';
import PricingFeatures from '../home/PricingFeatures';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Data ──────────────────────────────────────────────────── */
const valueProps = [
  {
    icon: Layers,
    title: 'Full-Funnel Execution',
    desc: 'From the first impression to the closed deal — we cover every stage with strategic, cohesive work.',
  },
  {
    icon: TrendingUp,
    title: 'Performance-Obsessed',
    desc: 'Every deliverable is tied to a measurable outcome. We track, optimise, and iterate until it works.',
  },
  {
    icon: Zap,
    title: 'Zero Compromise Quality',
    desc: 'Startup speed, enterprise quality. We move fast without cutting corners.',
  },
];

const departments = [
  {
    id: 'design',
    index: '01',
    label: 'Design',
    headline: 'Brand & Visual Identity',
    sub: 'Everything your brand needs to look premium and be remembered.',
    services: [
      { name: 'Social Branding', desc: 'Premium branding assets across all relevant social platforms.', href: '/services/social-branding' },
      { name: 'Ad Creatives (Video)', desc: 'High-converting video ads engineered to capture attention and drive action.', href: '/services/ad-creatives-video' },
      { name: 'Ad Creatives (Image)', desc: 'Thumb-stopping static image ads optimized for platform delivery.', href: '/services/ad-creatives-image' },
      { name: 'Infographics', desc: 'Complex data and concepts transformed into visually engaging graphics.', href: '/services/infographics' },
      { name: 'Social Media Design (Content Pack)', desc: 'Batches of custom-designed posts, stories, and carousels.', href: '/services/social-media-design-content-pack' },
      { name: 'Pitch Deck Design', desc: 'Investor-ready presentations that communicate your value and secure funding.', href: '/services/pitch-deck-design' },
      { name: 'Vector Illustration', desc: 'Custom, scalable illustrations tailored to your brand\'s unique voice.', href: '/services/vector-illustration' },
      { name: 'Book / Publication Design', desc: 'Professional layout and cover design for e-books, reports, and print.', href: '/services/book-publication-design' },
      { name: 'UI/UX Design', desc: 'Intuitive, user-centric interfaces designed for frictionless digital experiences.', href: '/services/ui-ux-design' },
    ],
  },
  {
    id: 'development',
    index: '02',
    label: 'Development',
    headline: 'Websites & Apps That Work',
    sub: 'High-performance digital products engineered for scale and conversions.',
    services: [
      { name: 'A-Grade Website Design', desc: 'Bespoke, conversion-optimized websites that serve as your ultimate digital storefront.', href: '/services/a-grade-website-design' },
      { name: 'Landing Page Design', desc: 'Highly focused, standalone pages engineered specifically for targeted campaigns.', href: '/services/landing-page-design' },
      { name: 'Landing Page Hosting & Setup', desc: 'Secure, fast hosting configuration specifically for standalone landing pages.', href: '/services/landing-page-hosting-&-setup' },
      { name: 'Sales Funnel Design', desc: 'Strategic, multi-step user journeys crafted to maximize customer acquisition.', href: '/services/sales-funnel-design' },
      { name: 'Funnel Hosting & Setup', desc: 'End-to-end deployment for complex conversion funnels matching your tech stack.', href: '/services/funnel-hosting-&-setup' },
      { name: 'Web Hosting', desc: 'Reliable, lightning-fast commercial hosting architectures.', href: '/services/web-hosting' },
      { name: 'WordPress Development', desc: 'Custom, scalable content management systems built on the world\'s leading platform.', href: '/services/wordpress-development' },
      { name: 'E-Commerce Development', desc: 'High-performance online stores designed to maximize sales and streamline checkout.', href: '/services/e-commerce-development' },
      { name: 'Custom Web Application', desc: 'Robust, scalable web apps built to solve complex business challenges.', href: '/services/custom-web-application' },
      { name: 'MVP Development', desc: 'Rapid deployment of Minimum Viable Products for agile startups.', href: '/services/mvp-development' },
      { name: 'Custom API Development', desc: 'Tailored backend interconnectivity supporting robust application integrations.', href: '/services/custom-api-development' },
      { name: 'Third-Party Integration', desc: 'Secure, seamless connections between your platforms and external microservices.', href: '/services/third-party-integration' },
      { name: 'Website Hosting Setup', desc: 'Complete deployment configuration, domain binding, and structural setup.', href: '/services/website-hosting-setup' },
      { name: 'Debugging & Maintenance', desc: 'Ongoing technical support to keep your digital assets running flawlessly.', href: '/services/debugging-&-maintenance' },
    ],
  },
  {
    id: 'marketing',
    index: '03',
    label: 'Marketing',
    headline: 'Growth That Scales',
    sub: 'Digital marketing strategies that actually move the needle.',
    services: [
      { name: 'Social Media Management', desc: 'End-to-end management of your social channels to build community and authority.', href: '/services/social-media-management' },
      { name: 'Social Media Ads Management', desc: 'Data-driven paid campaigns across Meta, LinkedIn, and more to maximize ROAS.', href: '/services/social-media-ads-management' },
      { name: 'Email Marketing', desc: 'Automated campaigns that turn subscribers into loyal, paying customers.', href: '/services/email-marketing' },
      { name: 'SEO Optimization', desc: 'Strategic efforts to dominate search rankings and drive high-intent organic traffic.', href: '/services/seo-optimization' },
      { name: 'Content Marketing', desc: 'Authoritative articles and whitepapers that educate prospects and drive inbound leads.', href: '/services/content-marketing' },
      { name: 'Influencer Marketing', desc: 'Strategic partnerships with industry voices to expand your brand\'s reach.', href: '/services/influencer-marketing' },
    ],
  },
  {
    id: 'consulting',
    index: '04',
    label: 'Consulting',
    headline: 'Expert Guidance',
    sub: 'Strategic insights and hands-on consulting to elevate your business.',
    services: [
      { name: 'Branding Consultation', desc: '1-on-1 strategic deep dives to define your brand architecture, voice, and visual direction.', href: '/services/branding-consultation' },
      { name: 'Website Strategy Session', desc: 'Collaborative planning to map out user journeys, site structure, and conversion goals.', href: '/services/website-strategy-session' },
      { name: 'Digital Marketing Consultation', desc: 'Expert guidance to audit your current efforts and build a high-ROI marketing playbook.', href: '/services/digital-marketing-consultation' },
    ],
  },
  {
    id: 'automation',
    index: '05',
    label: 'Automation',
    headline: 'Streamlined Operations',
    sub: 'Automate repetitive tasks, nurture leads, and scale your operations effortlessly.',
    services: [
      { name: 'Marketing Automation Setup', desc: 'Streamline your marketing with intelligent triggers, workflows, and sequences.', href: '/services/marketing-automation-setup' },
      { name: 'CRM Setup', desc: 'Implement and customize CRM tools to track and close more deals efficiently.', href: '/services/crm-setup' },
      { name: 'Lead Generation System', desc: 'Automated funnels that capture, qualify, and route high-value leads to your team.', href: '/services/lead-generation-system' },
    ],
  },
];

/* ── Department Section ────────────────────────────────────── */
function DepartmentBlock({ dept }: { dept: (typeof departments)[0] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = dept.services[activeIdx];

  return (
    <div className="py-12 border-b border-(--border-default)">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-20">

        <div>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-[13px] font-mono text-(--text-muted) font-semibold tabular-nums">{dept.index}</span>
            <h2 className="font-display font-bold text-[clamp(1.8rem,2.8vw,2.4rem)] text-(--text-primary) leading-tight">
              {dept.label}
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {dept.services.map((svc, i) => (
              <Link
                key={svc.name}
                href={svc.href}
                onMouseEnter={() => setActiveIdx(i)}
                className={`px-5 py-2.5 rounded-full border text-[15px] font-medium transition-all duration-200 ${
                  activeIdx === i
                    ? 'bg-cyan-500 border-cyan-500 text-white'
                    : 'border-(--border-default) text-(--text-secondary) hover:border-cyan-400 hover:text-cyan-400'
                }`}
              >
                {svc.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan-500">
                {dept.label}
              </p>

              <p className="font-body text-[14px] text-(--text-muted) leading-relaxed border-b border-(--border-default) pb-4">
                {dept.sub}
              </p>

              <h3 className="font-display font-bold text-[18px] text-(--text-primary) leading-snug mt-1">
                {activeService.name}
              </h3>

              <p className="font-body text-[14px] text-(--text-secondary) leading-relaxed">
                {activeService.desc}
              </p>

              <Link
                href={activeService.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-amber-500 hover:text-amber-400 transition-colors mt-1"
              >
                Learn more <ArrowRight size={13} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function ServicesPageClient() {
  return (
    <main>

      {/* ── HERO (MODIFIED) ── */}
    {/* ── HERO ── */}
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

  <div className="relative max-w-[1400px] mx-auto px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* TEXT SIDE */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: EASE }}
      className="flex flex-col gap-6"
    >

      <span className="inline-flex items-center text-[12px] font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit uppercase tracking-widest">
        What We Do
      </span>

      <h1 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
        Digital Growth, Delivered.
      </h1>

      <p className="mt-2 font-body text-[17px] leading-[1.6] text-gray-400 max-w-[500px]">
        We design brands, build high-performance websites, and run marketing
        systems that turn attention into customers.
      </p>

      <div className="pt-2">
        <Link
          href="/contact"
          className="btn btn-primary"
        >
          Request a consultation <ArrowRight size={16} />
        </Link>
      </div>

    </motion.div>

    {/* VIDEO SIDE */}
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
              <source src="/images/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

  </div>

</section>
     

      {/* ── SERVICES LIST ── */}
      <section className="bg-(--bg-page) py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-4 pb-10 border-b border-(--border-default)">
            <h2 className="font-display font-bold text-[clamp(2.8rem,5vw,5rem)] leading-[1] tracking-tight text-(--text-primary)">
              Our Services
            </h2>
          </div>

          <div>
            {departments.map((dept) => (
              <DepartmentBlock key={dept.id} dept={dept} />
            ))}
          </div>

        </div>
      </section>
      <PricingFeatures/>
      <ServicesFAQ /> 

      <FinalCTASection />
    </main>
  );
}