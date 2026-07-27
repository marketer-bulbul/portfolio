"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { adResults } from "@/lib/data";

export default function AdResults() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function close() {
    setActiveIndex(null);
  }

  function next(e?: React.MouseEvent) {
    e?.stopPropagation();
    setActiveIndex((i) => (i === null ? null : (i + 1) % adResults.length));
  }

  function prev(e?: React.MouseEvent) {
    e?.stopPropagation();
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + adResults.length) % adResults.length
    );
  }

  return (
    <section id="results" className="section-padding relative bg-secondary/20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Ad Results</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Real dashboards. Real spend. Real results.
          </h2>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>div]:mb-5">
          {adResults.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              onClick={() => setActiveIndex(i)}
              className="group glass relative cursor-zoom-in overflow-hidden rounded-2xl break-inside-avoid"
            >
              <Image
                src={src}
                alt={`Ad campaign result screenshot ${i + 1}`}
                width={600}
                height={500}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                <ZoomIn className="text-accent" size={28} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute right-6 top-6 text-white/70 hover:text-accent"
            >
              <X size={30} />
            </button>
            <button
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-4 text-white/60 hover:text-accent sm:left-8"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
            >
              <Image
                src={adResults[activeIndex]}
                alt={`Ad campaign result screenshot ${activeIndex + 1}`}
                width={1200}
                height={1000}
                className="h-auto max-h-[85vh] w-auto object-contain"
              />
            </motion.div>
            <button
              aria-label="Next image"
              onClick={next}
              className="absolute right-4 text-white/60 hover:text-accent sm:right-8"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
