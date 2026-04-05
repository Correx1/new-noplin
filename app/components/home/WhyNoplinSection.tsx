/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import {
  Target, Zap, Handshake, MessageCircle,
  Globe, Brain, TrendingUp, Network,
} from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Item = { Icon: React.ElementType; title: string; body: string; num: string };

const items: Item[] = [
  { Icon: Target,        title: 'Results-First',                body: 'Everything we create is designed to deliver measurable impact.',      num: '01' },
  { Icon: Zap,           title: 'We Deliver Fast',              body: 'No months-long timelines or endless back-and-forth.',                 num: '02' },
  { Icon: Handshake,     title: 'Easy to Work With',            body: 'Clear process, professional communication, zero stress.',             num: '03' },
  { Icon: MessageCircle, title: 'Honest',                       body: "We tell you what you need, not just what you want to hear.",          num: '04' },
  { Icon: Globe,         title: 'Global Standards',             body: 'Premium output regardless of budget size.',                           num: '05' },
  { Icon: Brain,         title: 'Specialists, Not Generalists', body: 'Every service has a dedicated team lead.',                            num: '06' },
  { Icon: TrendingUp,    title: 'We Grow With You',             body: 'From a first logo to a full digital marketing strategy.',            num: '07' },
  { Icon: Network,       title: 'Dual Market Understanding',    body: 'We understand both the African market and the global market.',       num: '08' },
];

export default function WhyNoplinSection() {
  return (
    <section className="bg-[#F7F9FC] py-24 relative">

      <div className="max-w-7xl mx-auto px-3">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.6rem)] text-[#0F172A]">
            Why Businesses Choose<br />Noplin Digital
          </h2>

          <p className="text-gray-600 max-w-md mx-auto mt-4">
            Eight principles that define how we work — and why clients keep coming back.
          </p>
        </motion.div>

        {/* Grid Wrapper (Card Container) */}
        <div className=" overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {items.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
                  className={`
                    flex gap-5 p-4 items-start
                    border-t border-gray-100
                    ${!isLeft ? 'md:border-l' : ''}
                    
                  `}
                >

                  {/* Icon Box (Strong Contrast) */}
               <div className="w-12 h-12 rounded-xl 
  bg-gradient-to-br from-amber-500 to-amber-600 
  flex items-center justify-center 
  shadow-[0_4px_14px_rgba(251,191,36,0.15)] 
  shrink-0"
>
  <item.Icon size={20} color="white" strokeWidth={2} />
</div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">

                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-[16px] text-[#0F172A] leading-tight">
                        {item.title}
                      </h3>

                      <span className="text-[10px] font-mono text-gray-300 tracking-widest">
                        {item.num}
                      </span>
                    </div>

                    <p className="text-[14.5px] text-gray-600 leading-relaxed">
                      {item.body}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}