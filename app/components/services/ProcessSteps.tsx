'use client';
import { motion } from 'framer-motion';

interface Step {
  step: string;
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ProcessSteps({ steps }: Props) {
  return (
    <section className="bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
          {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
           <span className="relative inline-flex items-center text-[13px] font-semibold  py-1.5 tracking-widest text-amber-500 w-fit uppercase">
  How it works
<span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-[50%] bg-amber-600"></span></span>
          <h2 className="font-display font-bold text-white text-[clamp(1.75rem,4vw,2.5rem)] leading-tight">
            Simple Process. Fast Results.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          <motion.div
            className="flex flex-wrap justify-center gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {steps.map((s) => (
              <motion.div
                key={s.step}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] relative text-center lg:text-left flex flex-col items-center lg:items-start gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                {/* Ghost step number */}
                <span className="absolute -top-4 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-5xl font-bold text-white/5 select-none pointer-events-none">
                  {s.step}
                </span>

                {/* Icon circle (step number) */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-4">
                  <span className="text-amber-500 font-bold">{s.step}</span>
                </div>

                {/* Step title */}
                <h3 className="text-white text-lg font-semibold mb-2 tracking-tight">{s.title}</h3>

                {/* Step description */}
                <p className="text-white/60 text-[15px] leading-relaxed font-(--font-body)">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}