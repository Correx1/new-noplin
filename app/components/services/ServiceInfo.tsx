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
    <section className="py-16 bg-(--bg-page) relative border-t border-(--border-default)">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 lg:gap-16">

        {/* TOP SECTION: The Service & Ideal Profile */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-18 items-start pb-3">
          
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="border-[3px] border-(--text-primary) shadow-[8px_8px_0px_var(--text-primary)] bg-(--bg-card) p-8 lg:p-14 rounded-none relative z-10"
          >
            <div className="mb-6">
                  <span className="relative inline-flex items-center text-[13px] font-semibold py-1.5 tracking-widest text-cyan-500 w-fit uppercase">
 The service
  <span className="absolute bottom-0 h-[2px] w-[50%] bg-cyan-600  md:left-0 md:translate-x-0"></span>
</span>
           
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-display font-bold text-(--text-primary) tracking-tight mb-6 leading-[1.1]">
              What we do
            </h2>
            <p className="text-[17px] lg:text-[18px] leading-relaxed text-(--text-secondary) font-(--font-body)">
              {about}
            </p>
          </motion.div>

          {/* Who It's For */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="border-[3px] border-(--text-primary) shadow-[8px_8px_0px_var(--text-primary)] bg-(--bg-card) p-8 lg:p-14 rounded-none mt-8 lg:mt-32 relative z-0"
          >
            <div className="mb-6">
                 <span className="relative inline-flex items-center text-[13px] font-semibold py-1.5 tracking-widest text-cyan-500 w-fit uppercase">
  Ideal 
  <span className="absolute bottom-0 h-[2px] w-[50%] bg-cyan-600  md:left-0 md:translate-x-0"></span>
</span>
           
            </div>
            <h3 className="text-[clamp(2rem,4vw,3rem)] font-display font-bold text-(--text-primary) tracking-tight mb-6 leading-[1.1]">
              Who is this for?
            </h3>
            <p className="text-[17px] lg:text-[18px] leading-relaxed text-(--text-secondary) font-(--font-body)">
              {whoItsFor}
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-(--border-default)" />

        {/* BOTTOM SECTION: Deliverables Grid */}
        <div className="pt-2 lg:pt-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 max-w-2xl mx-auto flex flex-col items-center text-center"
          >
            <div className="mb-3">
                 <span className="relative inline-flex items-center text-[13px] font-semibold py-1.5 tracking-widest text-cyan-500 w-fit uppercase">
  Deliverables
  <span className="absolute bottom-0 h-[2px] w-[50%] bg-cyan-600 left-1/2 -translate-x-1/2  "></span>
</span>
           
            </div>
            <h2 className="text-[clamp(1.8rem,3.2vw,2.4rem)] font-display font-bold text-(--text-primary) tracking-tight mb-4 leading-tight">
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
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.333rem)] group flex flex-col gap-6 rounded-none border-[2px] border-(--border-card) border-t-[5px] border-t-[var(--electric)] bg-(--bg-card) p-8 xl:p-10 shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-(--electric-10) border-2 border-[var(--electric)]/[0.15] rounded-none">
                  <DeliverableIcon type={item.icon} color="blue" className="w-9 h-9 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] transition-transform group-hover:scale-110 duration-500" />
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