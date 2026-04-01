'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export interface HeroProps {
  serviceName: string;
  tagline: string;
  turnaround?: string;
  heroImage?: string;
}

export default function HeroSection({
  serviceName,
  tagline,
  turnaround,
  heroImage,
}: HeroProps) {
  // If no heroImage provided, fallback to a sensible default or just dark bg
  const bgImage = heroImage || '/images/defaults/service-hero-bg.jpg';

  return (
    <section 
      className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden bg-[#0D0D2B] pt-[80px] pb-[100px]"
    >
      {/* ── Background Image & Dark Blue Gradient Overlay ── */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url('${bgImage}')` }}
       />
      <div 
        className="absolute inset-0 z-0 bg-linear-to-r from-[#0D0D2B]/90 via-[#0D0D2B]/80 to-[#1A56DB]/60"
      />
      
      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col gap-6 items-start w-full cursor-default">
       

        {/* Turnaround Time Badge */}
        {turnaround && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
            className="inline-flex items-center gap-2"
          >
           
              <span className="relative inline-flex items-center text-[13px] font-semibold  py-1.5 tracking-widest text-cyan-500 w-fit uppercase">
              Expected Delivery: {turnaround}

              <span className="absolute left-0 bottom-0 h-[2px] w-[40%] bg-cyan-600"></span>
            </span>
          
          </motion.div>
        )}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          className="text-[clamp(2.2rem,4vw,3.2rem)] font-display font-bold text-white max-w-[700px] leading-[1.1] tracking-tight"
        >
          {serviceName}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
          className="text-lg md:text-xl font-(--font-body) text-slate-200 max-w-[600px] leading-relaxed"
        >
          {tagline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
          className="mt-4"
        >
          <Link
            href="/contact"
            className="inline-flex px-6 py-3.5 text-[15px] font-semibold text-[#0D0D2B] bg-cyan-500 hover:bg-cyan-400 rounded-lg transition-colors shadow-lg shadow-cyan-500/20"
          >
            Get a Quote for This Service →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}