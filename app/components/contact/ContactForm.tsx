'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Toast from '../ui/Toast';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const services = [
  'A-Grade Brand Identity', 'Pitch Deck & Presentation',
  'Conversion-First Web Design', 'Custom Web App Development', 'MVP Development for Startups',
  'E-Commerce Development', 'API Development & Integration',
  'Authority Content (SEO)', 'Conversion Copy', 'Revenue Email System',
  'Video Script & Editing', 'Corporate Comms Suite',
  'Social Growth Engine', 'Precision Ad Campaigns', 'Digital Strategy Consulting',
  'Not sure yet — help me decide',
];

const socials = [
  { label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', href: 'https://instagram.com/noplindigital' },
  { label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', href: 'https://linkedin.com/company/noplindigital' },
  { label: 'TikTok', icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z', href: 'https://tiktok.com/@noplindigital' },
  { label: 'Twitter/X', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', href: 'https://x.com/noplindigital' },
];

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Company name is required."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(20, "Please provide a little more detail about your project."),
})

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [toast, setToast] = useState<{ show: boolean; type: 'success' | 'error'; message: string; description?: string }>({
    show: false, type: 'success', message: '',
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('done');
      form.reset();
      setToast({ show: true, type: 'success', message: 'Inquiry sent!', description: "We'll review your brief and get back to you within 2 hours." });
    } catch (error) {
      console.error(error);
      setStatus('idle');
      setToast({ show: true, type: 'error', message: 'Submission failed', description: 'Please email us at hello@noplindigital.com' });
    }
  }

  return (
    <>
      <section className="max-w-[1400px] mx-auto px-6 xl:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* LEFT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
            className="lg:col-span-7 xl:col-span-8"
          >
            {status === 'done' ? (
              <div className="flex flex-col items-center justify-center text-center gap-6 py-20 bg-(--bg-card) border border-(--border-card) rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(6 182 212)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <h2 className="font-semibold text-2xl text-(--text-primary) mb-2">Inquiry Received!</h2>
                  <p className="font-(--font-body) text-[15px] text-(--text-secondary) max-w-[300px] mx-auto">
                    We&apos;ll review your brief and follow up within 2 hours.
                  </p>
                </div>
                <button onClick={() => setStatus('idle')} className="mt-2 text-amber-500 hover:underline text-sm font-medium">
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10">

                  {/* Personal Details */}
                  <div className="flex flex-col gap-8">
                    <h3 className="text-[13px] font-bold tracking-widest uppercase text-amber-500 pb-4 border-b border-(--border-card)">Personal Details</h3>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <FormField control={form.control} name="fullName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl><Input placeholder="John Adeyemi" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl><Input placeholder="john@company.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl><Input placeholder="Acme Corp" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp / Phone *</FormLabel>
                          <FormControl><Input placeholder="+234 800 000 0000" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-8 mt-4">
                    <h3 className="text-[13px] font-bold tracking-widest uppercase text-amber-500 pb-4 border-b border-(--border-card)">Project Details</h3>
                    <FormField control={form.control} name="service" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primary Service *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Select a focus area…" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Brief *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Outline your goals, timeline, and the core problem you are trying to solve." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className={`btn-primary inline-flex items-center gap-2.5 px-7 py-3 bg-amber-500 hover:bg-amber-500 text-white font-semibold text-[14px] tracking-wide rounded-none transition-colors duration-200 ${status === 'sending' ? 'opacity-60 cursor-not-allowed' : ''}`}
                    >
                      {status === 'sending' ? 'Submitting…' : 'Submit Inquiry'}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                  </div>

                </form>
              </Form>
            )}
          </motion.div>

          {/* RIGHT — Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.25 }}
            className="lg:col-span-5 xl:col-span-4 flex flex-col gap-10 pt-4 lg:pt-2"
          >
            {/* Contact block */}
            <div className="flex flex-col gap-6">
              <p className="text-[11px] font-bold tracking-widest uppercase text-(--text-muted)">Reach Us Directly</p>
              <div className="flex flex-col gap-5">
                <a href="mailto:hello@noplindigital.com" className="group flex items-center gap-4 border-b border-(--border-card) pb-5">
                  <div className="w-10 h-10 flex items-center justify-center border border-(--border-card) rounded-full shrink-0 group-hover:border-amber-500 group-hover:text-amber-500 text-(--text-muted) transition-colors">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-(--text-muted) mb-0.5">Email</p>
                    <p className="text-[15px] font-semibold text-(--text-primary) group-hover:text-amber-500 transition-colors">hello@noplindigital.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 border-b border-(--border-card) pb-5">
                  <div className="w-10 h-10 flex items-center justify-center border border-(--border-card) rounded-full shrink-0 text-(--text-muted)">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-(--text-muted) mb-0.5">Hours</p>
                    <p className="text-[15px] font-semibold text-(--text-primary)">Mon – Fri, 9 AM – 6 PM WAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="flex flex-col gap-5">
              <p className="text-[11px] font-bold tracking-widest uppercase text-(--text-muted)">What Happens Next</p>
              <div className="flex flex-col gap-0">
                {[
                  { n: '01', title: 'We review your brief', desc: 'A real team member reads every submission — no bots.' },
                  { n: '02', title: 'We reach out within 2 hrs', desc: 'Expect a reply via email or WhatsApp during business hours.' },
                  { n: '03', title: 'We propose a plan', desc: 'A tailored scope, timeline, and investment breakdown.' },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-5 pb-7 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full border-2 border-amber-500 flex items-center justify-center shrink-0 bg-(--bg-page)">
                        <span className="text-[10px] font-bold text-amber-500">{n}</span>
                      </div>
                      <div className="w-px flex-1 bg-(--border-card) mt-1" />
                    </div>
                    <div className="pt-1 pb-2">
                      <p className="text-[15px] font-semibold text-(--text-primary) mb-1">{title}</p>
                      <p className="text-[13px] text-(--text-muted) leading-relaxed font-(--font-body)">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <p className="text-[11px] font-bold tracking-widest uppercase text-(--text-muted)">Follow Us</p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center border border-(--border-card) rounded-full text-(--text-muted) hover:border-amber-500 hover:text-amber-500 transition-all duration-200"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon}/></svg>
                  </Link>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        description={toast.description}
        onClose={() => setToast((t) => ({ ...t, show: false }))}
      />
    </>
  );
}
