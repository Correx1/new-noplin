'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

const ceo = {
  name: 'Godwin Chibuike',
  role: 'CEO & Lead Strategist',
  bio: 'Leads brand identity, pitch decks, and visual strategy while driving the overall creative vision and maintaining design excellence across all client engagements.',
  image: '/team/CEO.png',
};

const team = [
    { name: 'Blessing Umahi', role: 'Accountant', image: '/team/blessing.png' },
  { name: 'Chukwu Raphael', role: 'Project Manager', image: '/team/Rex.png' },
  { name: 'Gilbert Ozioma', role: 'CTO & Lead Developer', image: '/team/gilbert.png' },
  { name: 'Funke Sanusi', role: 'Content & SEO Specialist', image: '/team/funke.png' },
    { name: 'Malachy Monday', role: 'Product Designer', image: '/team/malachy.png' },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function AboutTeam() {
  return (
    <section className="relative overflow-hidden bg-(--bg-section-alt) py-10">

      {/* ── Decorative background grid ── */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-px w-2/3 bg-linear-to-r from-transparent via-amber/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ════════════════ CEO FEATURE ════════════════ */}
        <div className="">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-12 flex items-center gap-4"
          >
            <span className="h-px flex-1 max-w-[60px] bg-amber-500/50" />
           
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Photo — reduced size, centered on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative mx-auto w-72 sm:w-80 lg:w-88"
            >
              {/* Corner accents */}
              <span className="absolute -left-3 -top-3 h-12 w-12 rounded-tl-2xl border-l-2 border-t-2 border-amber-500" />
              <span className="absolute -bottom-3 -right-3 h-12 w-12 rounded-br-2xl border-b-2 border-r-2 border-amber-500" />

              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl">
                <Image
                  src={ceo.image}
                  alt={ceo.name}
                  fill
                  className="object-cover "
                />
                {/* Tinted overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/70 via-zinc-900/10 to-transparent" />
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.12 }}
              className="flex flex-col gap-7 pb-6"
            >
              <h2 className="text-5xl font-bold leading-[1.1] text-(--text-primary) sm:text-6xl">
                Meet the<br />
                <span className="text-amber-500">Visionary</span>
              </h2>

              <div>
                <p className="font-semibold text-2xl  text-(--text-primary)">{ceo.name}</p>
                <p className="mt-1 font-semibold text-[11px] uppercase tracking-widest text-amber-500">
                  {ceo.role}
                </p>
              </div>

              <p className="font-(--font-body) text-[16px] leading-[1.6] text-(--text-secondary) max-w-md">
                {ceo.bio}
              </p>

              {/* Social links */}
              <div className="flex gap-3 pt-2">
                {[
                  { Icon: MessageCircle, label: 'WhatsApp' },
                  { Icon: Linkedin, label: 'LinkedIn' },
                  { Icon: Mail, label: 'Email' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500/10 hover:text-amber-500"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ════════════════ TEAM HEADER ════════════════ */}
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className=" mt-14 flex flex-col items-center text-center gap-4"
        >
          <div>
            <div className="mb-4">
                       <span className="relative inline-flex items-center text-[13px] font-semibold py-1.5 tracking-widest text-amber-500 w-fit uppercase">
  Our Team
  <span className="absolute bottom-0 h-[2px] w-[50%] bg-amber-600 left-1/2 -translate-x-1/2"></span>
</span>
            </div>
            <h2 className=" text-4xl font-bold text-(--text-primary) sm:text-5xl">
              The People Behind<br className="hidden sm:block" /> the Results
            </h2>
          </div>
          <p className="max-w-md font-(--font-body) text-[15px] text-(--text-secondary)">
            A cross-functional team built to deliver end-to-end excellence.
          </p>
        </motion.div> 

        {/* ════════════════ TEAM GRID ════════════════ */}
<div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mt-10">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
              className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 transition-all duration-500 hover:border-zinc-400"            > 
              {/* Image */}
               <div className="relative aspect-4/5 overflow-hidden rounded-t-[15px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover  "
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A101D] via-[#0A101D]/40 to-transparent" />
              </div> 

              {/* Info */}
              <div className="absolute bottom-0 left-0 w-full px-3 py-3 md:px-4 md:py-4 rounded-b-2xl bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-semibold text-white text-[13px] md:text-[15px] leading-tight truncate">{member.name}</p>
                <p className="mt-0.5 md:mt-1 font-semibold text-[9px] md:text-[10px] capitalize tracking-widest text-[#94A3B8] leading-tight line-clamp-2">
                  {member.role}
                </p>
              </div> 

              {/* Hover arrow badge */}
              <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                <ArrowUpRight size={13} className="text-gray-950" />
              </div>

              {/* Top amber line reveal */}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-amber-500 transition-all duration-500 group-hover:w-full z-10" />
            </motion.div>
          ))}
        </div>

      </div>
    </section> 
  );
}