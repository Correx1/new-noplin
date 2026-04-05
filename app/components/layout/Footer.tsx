'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Twitter, MapPin, Mail, ArrowRight } from 'lucide-react';

/* ── Data ──────────────────────────────────────────────────── */
const serviceGroups = [
  {
    group: 'Build',
    desc: 'Design & Development',
    categories: [
      {
        heading: 'Design',
        links: [
          { label: 'UI/UX Design', href: '/services/ui-ux-design' },
          { label: 'Social Branding', href: '/services/social-branding' },
          { label: 'Ad Creatives', href: '/services/ad-creatives' },
          { label: 'Pitch Deck Design', href: '/services/pitch-deck' },
          { label: 'Publication Design', href: '/services/publication-design' },
        ],
      },
      {
        heading: 'Development',
        links: [
          { label: 'Website Design', href: '/services/website-design' },
          { label: 'WordPress Dev', href: '/services/wordpress' },
          { label: 'E-Commerce', href: '/services/ecommerce' },
          { label: 'Web Application', href: '/services/web-application' },
          { label: 'Landing Page', href: '/services/landing-page' },
        ],
      },
    ],
  },
  {
    group: 'Grow',
    desc: 'Marketing & Performance',
    categories: [
      {
        heading: 'Marketing',
        links: [
          { label: 'Social Media Management', href: '/services/social-management' },
          { label: 'Social Media Ads', href: '/services/social-ads' },
          { label: 'SEO Optimization', href: '/services/seo' },
          { label: 'Email Marketing', href: '/services/email-marketing' },
          { label: 'Content Marketing', href: '/services/content-marketing' },
        ],
      },
      {
        heading: 'Consulting',
        links: [
          { label: 'Branding Consultation', href: '/services/branding-consultation' },
          { label: 'Website Strategy', href: '/services/website-strategy' },
          { label: 'Marketing Consult', href: '/services/marketing-consultation' },
        ],
      },
      {
        heading: 'Automation',
        links: [
          { label: 'Marketing Automation', href: '/services/marketing-automation' },
          { label: 'CRM Setup', href: '/services/crm-setup' },
          { label: 'Lead Generation', href: '/services/lead-generation' },
        ],
      },
    ],
  },
];

const socials = [
  { icon: Instagram, href: 'https://instagram.com/noplindigital', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/noplindigital', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/noplindigital', label: 'Twitter/X' },
];

const MUTED = '#94A3B8';
const DIM = '#64748B';

/* ── Component ─────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer style={{ background: '#030712', borderTop: '1px solid rgba(26,86,219,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ── Top row: brand (col-3) | two service super-groups (col-9) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center">
              <Image src="/images/logo.png" alt="Noplin Digital" width={140} height={90} />
            </Link>

            <p className="text-sm leading-relaxed max-w-[200px]" style={{ color: MUTED, fontFamily: 'var(--font-body)' }}>
              For ambitious businesses that want real growth.
            </p>

            <div className="flex flex-col gap-2.5 text-[13px]" style={{ color: MUTED, fontFamily: 'var(--font-body)' }}>
              <span className="flex items-center gap-2">
                <MapPin size={13} className="shrink-0" /> London, United Kingdom
              </span>
              <a href="mailto:hello@noplin.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={13} className="shrink-0" /> hello@noplin.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-400/20 text-slate-400 transition-colors hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-1 inline-flex items-center gap-1.5 text-[13px] font-semibold text-amber-500 hover:text-amber-300 transition-colors"
            >
              Get a free quote <ArrowRight size={13} />
            </Link>
          </div>

          {/* Service super-groups */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {serviceGroups.map((group) => (
              <div key={group.group}>
                {/* Group header */}
                <div className="flex items-baseline gap-2 mb-6 pb-3 border-b border-white/10">
                  <span className="font-display font-bold text-[15px] text-white tracking-tight">
                    {group.group}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">{group.desc}</span>
                </div>

                {/* Categories inside the group */}
                <div className={`grid gap-8 ${group.categories.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                  {group.categories.map((cat) => (
                    <div key={cat.heading}>
                      <p
                        className="text-[10px] uppercase tracking-[0.14em] font-semibold mb-3 text-amber-500"
                        
                      >
                        {cat.heading}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {cat.links.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              className="text-[13px] leading-snug transition-colors hover:text-white"
                              style={{ color: MUTED, fontFamily: 'var(--font-body)' }}
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar — darker */}
      <div style={{ background: '#06060F', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px]" style={{ color: DIM, fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} Noplin Digital Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }].map((l) => (
              <Link key={l.href} href={l.href}
                className="text-[13px] transition-colors hover:text-white"
                style={{ color: DIM, fontFamily: 'var(--font-body)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
