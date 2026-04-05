/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";

import * as React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type Testimonial = {
  _id: string;
  customerName: string;
  role: string;
  testimonialText: string;
  rating: number;
  order: number;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    _id: "1",
    customerName: "Emeka Okafor",
    role: "Founder, TechNaira",
    testimonialText:
      "Noplin Digital transformed our online presence completely. The website they built for us has driven a 3× increase in qualified leads within the first month.",
    rating: 5,
    order: 0,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    _id: "2",
    customerName: "Amina Suleiman",
    role: "CEO, Kano Fresh Foods",
    testimonialText:
      "Our brand identity went from forgettable to something we are genuinely proud of. The social branding package was worth every naira — and then some.",
    rating: 5,
    order: 1,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    _id: "3",
    customerName: "Chidi Nwosu",
    role: "Marketing Director, BrightPath",
    testimonialText:
      "The paid ads campaign they ran for us beat our ROAS target by 60%. Real specialists who understand African markets and global platforms.",
    rating: 5,
    order: 2,
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    _id: "4",
    customerName: "Fatimah Abdullahi",
    role: "COO, Novara Logistics",
    testimonialText:
      "From strategy to execution — the team at Noplin is sharp, fast, and detail-obsessed. Exactly what a growing business needs.",
    rating: 5,
    order: 3,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#F8FAFC] overflow-hidden">

      {/* Soft Background Shapes */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

              {/* --- HEADER --- */}
        <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.55}}
                   className="flex flex-col items-center text-center gap-3 mb-14"
                 >
                  
                <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.625rem)] text-(--text-primary)">
  What Our Clients Say About Us
</h2>

<p className="font-(--font-body) text-(--text-secondary) max-w-md">
  Real feedback from founders, teams, and businesses we’ve worked with
</p>
                 </motion.div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t._id} className="h-full">
              <motion.div
               
                className="h-full"
              >
                <div className="h-[280px] flex flex-col justify-between rounded-xl bg-white p-6 shadow-md border border-gray-100">

                  {/* Top */}
                  <div>
                    {/* Profile */}
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        width={100}
                        height={100}
                        src={t.image}
                        alt={t.customerName}
                        className="w-14 h-14 rounded-full object-cover border border-gray-200"
                      />

                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {t.customerName}
                        </div>
                        <div className="text-xs text-gray-700">
                          {t.role}
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < t.rating ? "text-amber-500" : "text-gray-300"
                          }`}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                      “{t.testimonialText}”
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-[2px] w-10 bg-amber-500"></div>

                    {/* Quote Icon */}
                    <svg
                      className="w-8 h-8 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}