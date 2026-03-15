/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  _id: string;
  customerName: string;
  role: string;
  testimonialText: string;
  rating: number;
  order: number;
};

const testimonials: Testimonial[] = [
  {
    _id: "1",
    customerName: "Emeka Okafor",
    role: "Founder, TechNaira",
    testimonialText: "Noplin Digital transformed our online presence completely. The website they built for us has driven a 3× increase in qualified leads within the first month.",
    rating: 5,
    order: 0,
  },
  {
    _id: "2",
    customerName: "Amina Suleiman",
    role: "CEO, Kano Fresh Foods",
    testimonialText: "Our brand identity went from forgettable to something we are genuinely proud of. The social branding package was worth every naira — and then some.",
    rating: 5,
    order: 1,
  },
  {
    _id: "3",
    customerName: "Chidi Nwosu",
    role: "Marketing Director, BrightPath",
    testimonialText: "The paid ads campaign they ran for us beat our ROAS target by 60%. Real specialists who understand African markets and global platforms.",
    rating: 5,
    order: 2,
  },
  {
    _id: "4",
    customerName: "Fatimah Abdullahi",
    role: "COO, Novara Logistics",
    testimonialText: "From strategy to execution — the team at Noplin is sharp, fast, and detail-obsessed. Exactly what a growing business needs.",
    rating: 5,
    order: 3,
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative py-32 lg:py-36 overflow-hidden" style={{ backgroundColor: '#F5F6FA' }}>
      
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <span className="inline-flex items-center text-[12px] font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 w-fit uppercase tracking-widest">
              Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0D0D2B] leading-tight">
            What Our <span className="text-cyan-500">Clients</span> Say
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-700 max-w-md leading-relaxed">
            Real feedback from founders, marketers, and business owners who trusted
            Noplin Digital to build, grow, and scale their brands.
          </p>
        </motion.div>

        {/* Right Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-xl">
            <div className="rounded-2xl p-8 lg:p-10 bg-white shadow-xl border border-gray-100">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={testimonials.length > 1}
                className="w-full"
              >
                {testimonials.map((t) => (
                  <SwiperSlide key={t._id}>
                    <div className="flex flex-col items-start text-left relative">

                      {/* Customer Avatar & Info */}
                      <div className="flex items-center gap-4 mb-4">
                        {/* Avatar — initial fallback */}
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400 shadow-md flex-shrink-0">
                          <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                            {t.customerName.charAt(0)}
                          </div>
                        </div>

                        {/* Name & Role */}
                        <div>
                          <div className="text-base font-semibold text-gray-900">
                            {t.customerName}
                          </div>
                          <div className="text-sm text-cyan-500 font-medium">
                            {t.role}
                          </div>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < t.rating ? 'text-amber-400' : 'text-gray-300'}`}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                       <p className="text-base md:text-lg text-gray-700 leading-[1.75] italic mb-6">
                        &ldquo;{t.testimonialText}&rdquo;
                      </p>

                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 opacity-5 pointer-events-none">
                        <svg className="w-20 h-20 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                        </svg>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination {
          display: none;
        }
      `}</style>
    </section>
  );
}
