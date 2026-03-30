'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Dot } from 'lucide-react';

type MediaType = 'image' | 'video';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Dept = {
  id: string; label: string; headline: string; desc: string;
  media: string; mediaType: MediaType; href: string;
  subservices: { name: string; desc: string; href: string }[];
};

const departments: Dept[] = [
  {
    id: 'design', label: 'Design', headline: 'Brand & Visual Identity',
    desc: 'Everything your brand needs to look premium and be remembered — from cohesive social identities to investor-ready pitch decks.',
    media: '/portfolio/branding-main.png', mediaType: 'image', href: '/services#design',
    subservices: [
      { name: 'Social Branding', desc: 'Cohesive, premium social media identities that stand out.', href: '/services/social-branding' },
      { name: 'Ad Creatives', desc: 'High-converting video and static ad designs.', href: '/services/ad-creatives-video' },
      { name: 'UI/UX Design', desc: 'Intuitive interfaces for frictionless digital experiences.', href: '/services/ui-ux-design' },
      { name: 'Pitch Deck Design', desc: 'Investor-ready presentations built to win rooms.', href: '/services/pitch-deck' },
    ],
  },
  {
    id: 'development', label: 'Development', headline: 'Websites & Apps That Work',
    desc: 'High-performance digital products engineered for scale, speed, and maximum conversions.',
    media: '/portfolio/work.mp4', mediaType: 'video', href: '/services#development',
    subservices: [
      { name: 'Website Design', desc: 'Bespoke, conversion-optimized websites.', href: '/services/website-design' },
      { name: 'E-Commerce Development', desc: 'High-performance online stores built to sell.', href: '/services/ecommerce' },
      { name: 'Custom Web Application', desc: 'Scalable web apps for complex business challenges.', href: '/services/web-application' },
      { name: 'Landing Page Design', desc: 'Focused pages engineered for targeted campaigns.', href: '/services/landing-page-design' },
    ],
  },
  {
    id: 'marketing', label: 'Marketing', headline: 'Growth That Scales',
    desc: 'Data-driven marketing strategies that actually move the needle — lower costs, higher authority.',
    media: '/portfolio/marketing.png', mediaType: 'image', href: '/services#marketing',
    subservices: [
      { name: 'Social Media Management', desc: 'End-to-end channel management and community growth.', href: '/services/social-management' },
      { name: 'Paid Ads Management', desc: 'Meta and Google campaigns engineered for ROAS.', href: '/services/social-ads' },
      { name: 'SEO Optimization', desc: 'Dominate search results and drive organic traffic.', href: '/services/seo' },
      { name: 'Email Marketing', desc: 'Campaigns that turn subscribers into loyal customers.', href: '/services/email-marketing' },
    ],
  },
  {
    id: 'consulting', label: 'Consulting', headline: 'Expert Guidance',
    desc: 'Strategic insights and 1-on-1 consulting to align your digital footprint with your revenue targets.',
    media: '/portfolio/consulting.png', mediaType: 'image', href: '/services#consulting',
    subservices: [
      { name: 'Branding Consultation', desc: 'Define your brand architecture, voice, and direction.', href: '/services/branding-consultation' },
      { name: 'Website Strategy Session', desc: 'Map user journeys, structure, and conversion goals.', href: '/services/website-strategy' },
      { name: 'Marketing Consultation', desc: 'Audit your efforts and build a high-ROI playbook.', href: '/services/marketing-consultation' },
      { name: 'Digital Strategy Consulting', desc: 'Full digital strategy for serious, growth-focused businesses.', href: '/services/strategy-consulting' },
    ],
  },
  {
    id: 'automation', label: 'Automation', headline: 'Streamlined Operations',
    desc: 'Automate repetitive tasks, nurture inbound leads, and scale your operational logistics effortlessly.',
    media: '/portfolio/automation.png', mediaType: 'image', href: '/services#automation',
    subservices: [
      { name: 'Marketing Automation Setup', desc: 'Intelligent triggers, workflows, and sequences.', href: '/services/marketing-automation' },
      { name: 'CRM Setup', desc: 'Track and close more deals with the right tools.', href: '/services/crm-setup' },
      { name: 'Lead Generation System', desc: 'Automated funnels that capture high-value leads.', href: '/services/lead-generation' },
      { name: 'Third-Party Integration', desc: 'Connect your stack to SaaS tools, CRMs, and payment gateways.', href: '/services/integration' },
    ],
  },
];

const BG: string[] = ['#F9FAFB', '#F5F6FA'];

export default function WhatWeDoSection() {
  return (
    <section>
      {departments.map((dept, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div key={dept.id} style={{ backgroundColor: BG[idx % 2] }} className="py-14 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

                {/* Media */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className={`rounded-xl overflow-hidden shadow-md ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  {dept.mediaType === 'video' ? (
                    <video src={dept.media} autoPlay loop muted playsInline
                      className="w-full h-full object-cover aspect-[4/3]" />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={dept.media} alt={dept.headline}
                      className="w-full object-cover aspect-[4/3]" />
                  )}
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.08 }}
                  className={`flex flex-col gap-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
  <span className="relative inline-flex items-center text-[12px] font-semibold  py-1.5 tracking-widest text-cyan-600 w-fit capitalize">
  {dept.label}
<span className="absolute left-0 bottom-0 h-[2px] w-[50%] bg-cyan-600"></span></span>

                  <h2 className="text-[clamp(1.7rem,3.2vw,2.8rem)] font-bold leading-[1.1] tracking-tight text-[#0D0D2B]">
                    {dept.headline}
                  </h2>

                  <p className="text-[15px] lg:text-[17px] text-gray-500 leading-relaxed">
                    {dept.desc}
                  </p>

                  <ul className="flex flex-col gap-3.5 mt-1">
                    {dept.subservices.map((s, si) => (
                      <motion.li
                        key={s.name}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, ease: EASE, delay: 0.1 + si * 0.07 }}
                      >
                        <Link href={s.href} className="group flex items-start gap-2.5">
                          <Dot size={20}
                            className="mt-[3px] shrink-0 text-cyan-400 " />
                          <span className="text-[14px] lg:text-[15px] leading-snug">
                            <span className="font-semibold text-[#0D0D2B] group-hover:text-cyan-600 transition-colors">
                              {s.name}:
                            </span>{' '}
                            <span className="text-gray-500">{s.desc}</span>
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

              </div>
            </div>
          </div>
        );
      })}

      {/* View All Services */}
      <div className="bg-white py-12 flex justify-center border-t border-gray-100">
        <Link href="/services" className="btn btn-primary px-8 py-3.5 text-sm sm:text-base">
          View All Services
          <ArrowRight size={15} strokeWidth={2.2} />
        </Link>
      </div>
    </section>
  );
}