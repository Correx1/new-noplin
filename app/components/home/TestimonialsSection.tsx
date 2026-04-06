/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
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
};

const testimonials: Testimonial[] = [
  {
    _id: "1",
    customerName: "Rock Art",
    role: "Saudi Arabia",
    testimonialText: "One of the best designers and designs. Amazing work and thank you for the good job.",
    rating: 5,
    order: 0,
  },
  {
    _id: "2",
    customerName: "Mr. Chukwudi Emeh",
    role: "Divine Crown Ltd.",
    testimonialText: "All our branding, website and developent services are handled by Noplin and it has been nothing short of Amazing. They have never failed to produce outstanding quality work.",
    rating: 5,
    order: 1,
  },
  {
    _id: "3",
    customerName: "Mrs. Goodness Anih",
    role: "AE Luxury lightings",
    testimonialText: "Amazing work from Noplin. They work is great.",
    rating: 5,
    order: 2,
  },
  {
    _id: "4",
    customerName: "Mr. Paschal Achunine",
    role: "hei.org.ng",
    testimonialText: "We have worked with Noplin for over decade and their always reliable and deliver excellent work. Highly Recommended.",
    rating: 5,
    order: 3,
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
                <div className="h-[300px] md:h-[280px] flex flex-col justify-between rounded-xl bg-white p-7 shadow-sm border border-zinc-100">
                  {/* Top Content */}
                  <div>
                    {/* Quote Icon */}
                    <svg
                      className="w-8 h-8 text-amber-500/20 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                    
                    {/* Text */}
                    <p className="text-[14px] text-(--text-secondary) leading-relaxed font-medium italic">
                      &quot;{t.testimonialText}&quot;
                    </p>
                  </div>

                  {/* Bottom User Info */}
                  <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-2">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < t.rating ? "text-amber-400" : "text-gray-200"
                          }`}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    <div>
                      <div className="text-[14px] font-bold text-(--text-primary)">
                        {t.customerName}
                      </div>
                      <div className="text-[12px] font-medium text-gray-700 tracking-wider mt-0.5">
                        {t.role}
                      </div>
                    </div>
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