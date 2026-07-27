"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="mx-auto max-w-4xl text-center">
        <p className="eyebrow mb-4">Client Reviews</p>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          What clients say after the campaign runs.
        </h2>

        <div className="relative mt-14 h-72 sm:h-56">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-strong shadow-card absolute inset-0 flex flex-col items-center justify-center rounded-3xl px-8 py-10 sm:px-16"
            >
              <Quote className="mb-4 text-accent" size={28} />
              <p className="text-base leading-relaxed text-white/75 sm:text-lg">
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <div className="mt-5 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 font-display text-sm font-semibold text-white">
                {testimonials[index].name}
              </p>
              <p className="text-xs text-white/50">
                {testimonials[index].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-accent" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
