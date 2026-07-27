"use client";

import { motion } from "framer-motion";
import { whyChooseMe } from "@/lib/data";

export default function WhyChooseMe() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Why Choose Me</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Numbers that come from managing real budgets, not slides.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseMe.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong relative rounded-2xl p-7"
            >
              <p className="font-display text-3xl font-semibold text-gradient">
                {item.stat}
              </p>
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
