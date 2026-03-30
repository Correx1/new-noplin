'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What do your services typically cost?',
    a: 'Pricing depends on the scope of the project. For example, UI/UX design projects typically start from ₦250,000, landing page design from ₦180,000, full website projects from ₦450,000, and social media management retainers from around ₦150,000 per month. Larger systems or multi-service projects are quoted individually.'
  },
  {
    q: 'How do payments work?',
    a: 'Most projects require a 50% deposit to begin and the remaining 50% upon completion. For ongoing services such as marketing retainers or content management, billing is done monthly in advance.'
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. Projects above ₦500,000 may qualify for structured payment plans. Payment schedules are agreed before work begins to ensure clarity for both parties.'
  },
  {
    q: 'How long does a typical project take?',
    a: 'Smaller design projects usually take 1–2 weeks, landing pages around 2–3 weeks, and full website builds typically range from 3–6 weeks depending on complexity and required integrations.'
  },
  {
    q: 'Are prices negotiable?',
    a: 'Our pricing reflects the level of strategy, design quality, and engineering involved. While we do not discount individual services, we provide better value when multiple services are bundled into a larger project.'
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. We work with businesses globally. Projects can be billed in USD, GBP, or NGN depending on the client location and agreement.'
  },
  {
    q: 'Do you offer ongoing support or retainers?',
    a: 'Yes. Many clients continue with us through monthly retainers for marketing, design support, website maintenance, or growth consulting. Retainers typically start from ₦150,000 per month depending on the service scope.'
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border-card)]">
      <button 
        onClick={() => setOpen((v) => !v)} 
        className="flex w-full items-center justify-between py-6 text-left group transition-colors"
      >
        <span className="font-semibold font-semibold text-[16px] text-(--text-primary) group-hover:text-electric transition-colors">
          {q}
        </span>
        <motion.div 
          animate={{ rotate: open ? 45 : 0 }} 
          transition={{ duration: 0.2 }} 
          className="flex h-8 w-8 items-center justify-center rounded-full bg-(--bg-card) border border-[var(--border-card)] shrink-0 ml-4 group-hover:bg-electric/10 group-hover:border-electric/30 group-hover:text-electric transition-colors"
        >
          <span className="text-[20px] leading-none mb-0.5" style={{ color: 'inherit' }}>+</span>
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            transition={{ duration: 0.22 }} 
            style={{ overflow: 'hidden' }}
          >
            <p className="font-(--font-body) text-[15px] text-(--text-secondary) leading-[1.7] pb-6 max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesFAQ() {
  return (
    <section className="bg-(--bg-page) max-w-7xl mx-auto px-6 pt-20 lg:pt-32 pb-24">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        <div className="md:w-1/3 shrink-0">
          <div className="mb-6">
            <span className="relative inline-flex items-center text-[13px] font-semibold  py-1.5 tracking-widest text-cyan-500 w-fit uppercase">
FAQ
<span className="absolute left-0 bottom-0 h-[2px] w-[50%] bg-cyan-600"></span></span>
          </div>
          <h2 className=" font-bold text-[36px] text-(--text-primary) leading-tight tracking-tight">
            Common <br className="hidden md:block"/> Questions
          </h2>
          <p className="font-(--font-body) text-[15px] text-(--text-secondary) mt-4">
            Everything you need to know about our billing, engagements, and process.
          </p>
        </div>
        
        <div className="md:w-2/3 w-full border-t border-[var(--border-card)]">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
