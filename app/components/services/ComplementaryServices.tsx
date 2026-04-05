'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Service {
  name: string;
  url: string;
  desc?: string;
}

interface Props {
  services: Service[];
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ComplementaryServices({ services }: Props) {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-24 bg-(--bg-page) border-t border-(--border-default)">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-16 md:grid md:grid-cols-2 md:items-end gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
       
           
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-bold text-(--text-primary) leading-[1.1] tracking-tight">
              Recommended Services
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="mt-6 md:mt-0"
          >
            <p className="text-[17px] leading-relaxed text-(--text-secondary) font-(--font-body) max-w-[500px]">
            Enhance your baseline deliverables with our most commonly requested service combinations.
            </p>
          </motion.div>
        </div>

        {/* List Layout (No Cards) */}
        <div className="flex flex-col border-t border-(--border-default)">
          {services.map((cs, i) => (
            <motion.div
              key={cs.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
            >
              <Link
                href={cs.url}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 md:py-10 border-b border-(--border-default) transition-colors hover:border-amber-500/50"
              >
                {/* Title */}
                <div className="md:w-5/12">
                  <h3 className="text-2xl lg:text-[28px] font-display font-bold text-(--text-primary) group-hover:text-amber-500 transition-colors duration-300">
                    {cs.name}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="md:w-5/12">
                  <p className="text-[16px] text-(--text-secondary) font-(--font-body) leading-relaxed">
                    {cs.desc || "Enhance your campaign with this specialized complementary service to drive even greater outcomes."}
                  </p>
                </div>
                
                {/* Arrow Icon */}
                <div className="md:w-2/12 flex justify-start md:justify-end">
                  <div className="w-12 h-12 flex items-center justify-center border border-(--border-card) rounded-full text-(--text-secondary) group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight strokeWidth={2} size={20} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}