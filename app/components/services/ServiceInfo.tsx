'use client';

import { motion } from 'framer-motion';
import DeliverableIcon from './DeliverableIcon';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export interface ServiceInfoProps {
  about: string;
  whatItIncludes: { title: string; description: string; icon: string; color: string }[];
  whoItsFor: string;
}

export default function ServiceInfo({
  about,
  whatItIncludes,
  whoItsFor,
}: ServiceInfoProps) {
  return (
    <section className="py-24 bg-(--bg-page) relative border-t border-(--border-default)">
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-24">

        {/* TOP SECTION: The Service & Ideal Profile */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="mb-4">
              <span className="inline-flex items-center text-[12px] font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit uppercase tracking-widest">
                The Service
              </span>
            </div>
            <h2 className="text-[clamp(1.8rem,3.2vw,2.4rem)] font-display font-bold text-(--text-primary) tracking-tight mb-6">
              What we do
            </h2>
            <p className="text-[17px] leading-relaxed text-(--text-secondary) font-(--font-body)">
              {about}
            </p>
          </motion.div>

          {/* Who It's For */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <div className="mb-4">
              <span className="inline-flex items-center text-[12px] font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit uppercase tracking-widest">
                Ideal Profile
              </span>
            </div>
            <h3 className="text-[clamp(1.8rem,3.2vw,2.4rem)] font-display font-bold text-(--text-primary) tracking-tight mb-6">
              Who is this for?
            </h3>
            <p className="text-[17px] leading-relaxed text-(--text-secondary) font-(--font-body)">
              {whoItsFor}
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-(--border-default)" />

        {/* BOTTOM SECTION: Deliverables Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-12 max-w-2xl"
          >
            <div className="mb-4">
              <span className="inline-flex items-center text-[12px] font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit uppercase tracking-widest">
                Deliverables
              </span>
            </div>
            <h2 className="text-[clamp(1.8rem,3.2vw,2.4rem)] font-display font-bold text-(--text-primary) tracking-tight mb-6">
              What you get
            </h2>
            <p className="text-[17px] leading-relaxed text-(--text-secondary) font-(--font-body)">
              Every engagement is thoroughly customized. Standard inclusions ensure a comprehensive, agency-level standard of delivery.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {whatItIncludes.map((item, i) => (
              <motion.div 
                key={item.title} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 + (i * 0.05), ease: EASE }}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.333rem)] group flex flex-col gap-6 rounded-2xl border border-(--border-card) bg-(--bg-card) p-8 transition-colors hover:border-cyan-500/30"
              >
                <div className="w-12 h-12 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                  <DeliverableIcon type={item.icon} color="blue" className="w-full h-full drop-shadow-sm grayscale contrast-125 brightness-150 dark:brightness-100 dark:grayscale-[0.5] group-hover:grayscale-0" />
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-[19px] font-bold text-(--text-primary) tracking-tight font-display leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[15px] leading-relaxed text-(--text-secondary) font-(--font-body)">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}