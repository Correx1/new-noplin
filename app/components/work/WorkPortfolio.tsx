/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import useEmblaCarousel from 'embla-carousel-react';

export interface CaseStudy {
  slug: string;
  name: string;
  tag: string;
  client: string;
  filter: string;
  description: string;
  images: string[];
  link?: string;
}

export const allCaseStudies: CaseStudy[] = [
    { 
    slug: 'School-pilot', 
    name: 'School Pilot', 
    tag: 'Web App', 
    client: 'Education, Nationwide', 
    filter: 'Apps',
    description: 'An all-in-one ERP system that helps schools manage students, staff, finances, and academic activities through dedicated dashboards for admins, teachers, and school owners.',
    images: ['/portfolio/schoolpilot.mp4'],
    link: 'https://schoolpilot.ng'
  },
  { 
    slug: 'elegant-cosmetics', 
    name: ' Beauty Product design', 
    tag: 'Brand Identity', 
    client: 'Elegant Cosmetics', 
    filter: 'Brand Identity',
    description: 'Brand identity for Elegant Cosmetics focused on creating a clean, modern, and cohesive visual system that reflects the brand’s elegance and premium positioning across web, packaging, and digital touchpoints.',
    images: ['/portfolio/branding/Elegant-cosmetics3.png', '/portfolio/branding/Elegant-cosmetics1.png', '/portfolio/branding/Elegant-cosmetics2.png', '/portfolio/branding/Elegant-cosmetics.png', '/portfolio/branding/Elegant-cosmetics4.png']
  },
  { 
    slug: 'agesteph-website', 
    name: 'Agesteph website', 
    tag: 'Web Design', 
    client: 'Agesteph', 
    filter: 'Web Design',
    description: 'Web and product design for Agesteph, delivering a clean, user-focused interface and a cohesive digital experience across multiple packages, tailored to support scalability and brand consistency.',
    images: ['/portfolio/agesteph/agesteph1.png', '/portfolio/agesteph/agesteph4.png', '/portfolio/agesteph/agesteph3.png',  '/portfolio/agesteph/agesteph5R.png'],
    link: 'https://agesteph.com/'
  },
  
  { 
    slug: 'luxury-lighting', 
    name: 'Product Showcase Website', 
    tag: 'Web Design', 
    client: 'Luxury Lighting ltd', 
    filter: 'Web Design',
    description: 'Premium e-commerce website for a luxury lighting brand, focused on clean product browsing, category-based navigation, and a visually rich shopping experience.',
    images: ['/portfolio/luxury-lighting/luxury-lighting.png', '/portfolio/luxury-lighting/luxury-lighting1.png', '/portfolio/luxury-lighting/luxury-lighting2.png'],
    link: 'https://luxurylighting.com'
  },
  {
    slug: 'agesteph-skincare-social-media-management',
    name: 'Agesteph Skincare – Social Media Management',
    tag: 'Social Media',
    client: 'Agesteph Skincare Brand',
    filter: 'Social Media',
    description: 'Managed and grew the Agesteph Skincare Instagram page by creating and structuring skincare-focused content, highlighting product benefits, educating audiences on routines, and building consistent brand storytelling to improve engagement and customer trust.',
    images: ['/portfolio/agestephsm/agestephsm.png', '/portfolio/agestephsm/agestephsm1.png'],
    link:'https://www.instagram.com/agesteph.skincare/'
  },
  { 
  slug: 'divine-crown-ltd-ecommerce-platform', 
  name: 'Beauty & Skincare E-commerce Platform', 
  tag: 'Web App', 
  client: 'Divine Crown Ltd ', 
  filter: 'App',
  description: 'An online store for a skincare and beauty brand featuring multiple product lines, categorized collections, and a structured shopping system for cosmetics, lotions, and personal care products.',
  images: ['/portfolio/divinecrown/divinecrown.png', '/portfolio/divinecrown/divinecrown2.png','/portfolio/divinecrown/divinecrown1.png'],
  link:'https://divinecrownltd.com/'
},

  
  { 
  slug: 'kuviva-tv-platform', 
  name: 'Kuviva TV Streaming Platform', 
  tag: 'Web App', 
  client: 'Digital media / streaming service', 
  filter: 'Apps',
  description: 'A web-based streaming platform for accessing curated video content and online TV experiences, structured around content discovery, playback, and organized media categories for users.',
    images: ['/portfolio/kuviva/kuviva.png'],
  link:'https://kuviva.tv'
}
  
];

export const filters = ['All', 'Web Design', 'Brand Identity', 'Social Media', 'Apps'];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function CaseStudyCarousel({ images, name }: { images: string[], name: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const renderMedia = (src: string, idx?: number) => {
    const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');
    
    if (isVideo) {
      return (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      );
    }
    
    return (
      <Image 
        src={src} 
        alt={idx !== undefined ? `${name} image ${idx + 1}` : name} 
        fill 
        className="object-cover" 
      />
    );
  };

  if (images.length === 1) {
    return (
      <div className="relative w-full aspect-[1.3/1] sm:aspect-[3/2] overflow-hidden lg:rounded-xl border-b lg:border border-[var(--border-default)] shadow-sm transition-shadow duration-300 group-hover:shadow-md">
        {renderMedia(images[0])}
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[1.3/1] sm:aspect-[3/2] overflow-hidden lg:rounded-xl border-b lg:border border-[var(--border-default)] shadow-sm transition-shadow duration-300 group-hover:shadow-md group">
      <div className="overflow-hidden h-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, idx) => (
            <div key={idx} className="relative flex-[0_0_100%] h-full min-w-0 bg-(--bg-card)">
              {renderMedia(src, idx)}
            </div>
          ))}
        </div>
      </div>
      
      {/* Dynamic Slide Counter Overlay */}
      <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[12px] font-medium font-semibold shadow-sm">
        {selectedIndex + 1} / {images.length}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-md ${
              idx === selectedIndex ? 'bg-electric w-8' : 'bg-white/70 hover:bg-white/100'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkPortfolio() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? allCaseStudies : allCaseStudies.filter((p) => p.filter === active);

  return (
    <>
      {/* ── FILTER TABS ────────────────────────── */}
      <div className="sticky top-[72px] z-40 bg-[var(--bg-navbar)] backdrop-blur-md border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-md text-[13px] font-semibold transition-all duration-150 ${
                  active === f ? 'bg-cyan-500 text-[#0A0A1F]' : 'bg-transparent text-(--text-secondary) hover:text-(--text-primary)'
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CASE STUDY LIST ────────────────────── */}
      <section className="max-w-7xl mx-auto px-3 py-12 lg:py-16 flex flex-col gap-8 lg:gap-12">
        {visible.map((cs, i) => {
          const isReversed = i % 2 !== 0; // Alternating layout
          return (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className={`flex flex-col lg:flex-row items-center gap-0 lg:gap-10 group overflow-hidden rounded-xl bg-(--bg-card) border border-(--border-card) lg:p-10 ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Carousel Side */}
              <div className="w-full lg:w-[65%]">
                <CaseStudyCarousel images={cs.images} name={cs.name} />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[45%] flex flex-col gap-5 p-7 lg:p-0">
                <div className="flex flex-col gap-2">
                     <span className="relative inline-flex items-center text-[13px] font-semibold py-1.5 tracking-widest text-cyan-500 w-fit uppercase">
  {cs.tag}
  <span className="absolute bottom-0 h-[2px] w-[50%] bg-cyan-600  left-0 translate-x-0"></span>
</span>
           
                  <h3 className="font-display font-bold text-[clamp(1.5rem,2.5vw,2rem)] text-(--text-primary) leading-[1.2] mt-1">{cs.name}</h3>
                  <p className="font-body text-[14px] text-(--text-muted) italic">Client: {cs.client}</p>
                </div>

                <p className="font-body text-[14.5px] text-(--text-secondary) leading-relaxed">
                  {cs.description}
                </p>

                {/* <ul className="flex flex-col gap-2.5 mt-1">
                  {cs.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <div className="mt-1.5 flex-shrink-0 text-cyan-400">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="8" />
                        </svg>
                      </div>
                      <span className="font-body text-[14px] text-(--text-secondary)">{highlight}</span>
                    </li>
                  ))}
                </ul> */}

                {cs.link && (
                  <a href={cs.link} target="_blank" rel="noopener noreferrer" className="mt-2 text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1 self-start font-semibold text-[14px] group">
                    View Project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}

        {visible.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-(--font-body) text-[16px] text-(--text-secondary)">No case studies found for this category.</p>
          </div>
        )}
      </section>
    </>
  );
}
