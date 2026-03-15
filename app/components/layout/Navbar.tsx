/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const megaMenu = [
  {
    heading: 'Design',
    services: [
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
      { label: 'Social Branding', href: '/services/social-branding' },
      { label: 'Ad Creatives (Video)', href: '/services/ad-creatives-video' },
      { label: 'Pitch Deck Design', href: '/services/pitch-deck-design' },
      { label: 'Book / Publication Design', href: '/services/book-publication-design' },
    ],
  },
  {
    heading: 'Development',
    services: [
      { label: 'A-Grade Website Design', href: '/services/a-grade-website-design' },
      { label: 'WordPress Development', href: '/services/wordpress-development' },
      { label: 'E-Commerce Development', href: '/services/e-commerce-development' },
      { label: 'Custom Web Application', href: '/services/custom-web-application' },
      { label: 'Landing Page Design', href: '/services/landing-page-design' },
    ],
  },
  {
    heading: 'Marketing',
    services: [
      { label: 'Social Media Management', href: '/services/social-media-management' },
      { label: 'Social Media Ads', href: '/services/social-media-ads-management' },
      { label: 'SEO Optimization', href: '/services/seo-optimization' },
      { label: 'Email Marketing', href: '/services/email-marketing' },
      { label: 'Content Marketing', href: '/services/content-marketing' },
    ],
  },
  {
    heading: 'Training & Consulting',
    services: [
      { label: 'Branding Consultation', href: '/services/branding-consultation' },
      { label: 'Website Strategy Session', href: '/services/website-strategy-session' },
      { label: 'Digital Marketing Consult', href: '/services/digital-marketing-consultation' },
    ],
  },
  {
    heading: 'Automation',
    services: [
      { label: 'Marketing Automation', href: '/services/marketing-automation-setup' },
      { label: 'CRM Setup', href: '/services/crm-setup' },
      { label: 'Lead Generation System', href: '/services/lead-generation-system' },
    ],
  },
];

const allMobileServices = megaMenu.flatMap((cat) =>
  cat.services.map((s) => ({ ...s }))
);

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    
    // Auto-close submenus when the main mobile menu closes
    if (!mobileOpen) {
      setServicesExpanded(false);
    }

    // Auto-close the mobile menu if the window is resized to desktop width (lg: 1024px)
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileOpen]);

  const openMega = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0D0D2B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={150} height={100} />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Home — first */}
          <Link
            href="/"
            className={`relative group px-4 py-2 text-[15px] rounded-lg transition-colors ${
              pathname === '/'
                ? 'text-white bg-white/5'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Home
            <motion.span
              className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-cyan-400 origin-left rounded-full"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            />
          </Link>

          {/* Services — second (with mega menu) */}
          <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
            <Link
              href="/services"
              className={`group relative flex items-center gap-1 px-4 py-2 text-[15px] rounded-lg transition-colors ${
                pathname?.startsWith('/services') || megaOpen
                  ? 'text-white bg-white/5'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Services
              <motion.span
                animate={{ rotate: megaOpen ? 180 : 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center"
              >
                <ChevronDown size={15} strokeWidth={2.2} className="mt-px" />
              </motion.span>
            </Link>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-[1100px] max-w-[90vw] bg-[#12123A] border border-white/10 rounded-2xl shadow-xl p-8"
                >
                  <div className="grid grid-cols-5 gap-6">
                    {megaMenu.map((col) => (
                      <div key={col.heading}>
                        <p className="mb-3 text-[11px] uppercase tracking-widest text-cyan-400 font-semibold">
                          {col.heading}
                        </p>
                        <ul className="space-y-1">
                          {col.services.map((svc) => (
                            <li key={svc.href}>
                              <Link
                                href={svc.href}
                                className="flex items-center gap-2.5 px-2 py-1.5 -ml-2 rounded-lg text-[14px] text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition"
                              >
                                <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-50" />
                                <span className="truncate">{svc.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/10 flex justify-between text-[13px]">
                    <p className="text-slate-400">
                      Not sure what you need?{' '}
                      <Link href="/contact" className="text-cyan-400 hover:underline font-medium">
                        Let’s talk →
                      </Link>
                    </p>
                    <Link href="/services" className="text-cyan-400 hover:underline font-medium">
                      View all services →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative group px-4 py-2 text-[15px] rounded-lg transition-colors ${
                pathname === link.href
                  ? 'text-white bg-white/5'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
              {/* Animated bottom underline on hover */}
              <motion.span
                className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-cyan-400 origin-left rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              />
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">

          <Link
            href="/contact"
            className="btn btn-primary hidden lg:inline-flex px-5 py-2.5 text-sm"
          >
            Get a Free Quote
          </Link>

          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle mobile menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="h-[2px] w-6 bg-white block origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-[2px] w-6 bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="h-[2px] w-6 bg-white block origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'calc(100vh - 76px)' }}
            exit={{ height: 0 }}
            className="bg-[#0D0D2B] border-t border-white/10 overflow-hidden flex flex-col"
          >
            <div className="px-6 pt-6 pb-6 space-y-4 overflow-y-auto flex-1">

              {/* Services Accordion */}
               {/* Services Accordion with Link + Toggle */}
                  <div className="border-b border-white/10 pb-3">
                    <div className="flex w-full items-center justify-between">
                      <Link
                        href="/services"
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 py-3 font-medium text-white text-[18px] font-display hover:text-cyan-400"
                      >
                        Services
                      </Link>
                      <button
                        onClick={() => setServicesExpanded((v) => !v)}
                        className="p-3 text-white text-[18px]"
                        aria-label="Toggle Services Submenu"
                      >
                        <motion.svg
                          animate={{ rotate: servicesExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-5 h-5 text-gray-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                    </div>

                    <AnimatePresence>
                      {servicesExpanded && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden mt-3 space-y-2"
                        >
                          {allMobileServices.map((svc) => (
                            <li key={svc.href}>
                              <Link
                                href={svc.href}
                                onClick={() => setMobileOpen(false)}
                                className="block pl-6 gap-2 py-1 text-slate-300 hover:text-cyan-400"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                                {svc.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
            

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white text-[18px] border-b border-white/10 pb-3 hover:text-cyan-400 "
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Bottom-pinned CTA */}
            <div className="p-6 border-t border-white/10 bg-[#0D0D2B] shrink-0 mt-auto">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary block w-full text-center px-5 py-3.5 text-[16px]"
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
