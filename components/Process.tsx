"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section className="section-padding relative bg-secondary/20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-2xl">
          <p className="eyebrow mb-4">Process</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            A repeatable process, not guesswork.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
          {process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <div className="relative z-10 mb-6 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-accent2/15">
                <span className="font-display text-2xl font-semibold text-gradient">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
