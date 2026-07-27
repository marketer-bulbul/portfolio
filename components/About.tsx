"use client";

import { motion } from "framer-motion";
import { owner, experience } from "@/lib/data";

const skills = [
  "Meta Ads Manager",
  "Google Ads",
  "TikTok Ads Manager",
  "WordPress",
  "Elementor",
  "Facebook Pixel",
  "Conversions API",
  "GTM / Server-Side Tracking",
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div id="experience" className="absolute -top-24" aria-hidden />
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow mb-4">About Me</p>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              A performance marketer obsessed with the number after the
              decimal point.
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              I&apos;m {owner.name}, a Meta and Google Ads specialist who
              treats every ad account like it&apos;s my own money. Over the
              last several years I&apos;ve managed more than{" "}
              <span className="text-accent">2M+ in ad spend</span> across
              e-commerce, local service, and info-product brands — building
              tracking infrastructure first, then scaling budget on top of
              data that can actually be trusted.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              My work doesn&apos;t stop at the ad account. I design the
              WordPress websites and landing pages campaigns send traffic to,
              and I set up the pixel, Conversion API, and server-side
              tracking that keeps reporting accurate as privacy changes
              reshape the industry.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="glass rounded-full px-4 py-2 text-xs text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <p className="eyebrow mb-8">Experience Timeline</p>
            <div className="relative space-y-10 border-l border-white/10 pl-8">
              {experience.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-gradient-to-r from-accent to-accent2 shadow-glow" />
                  <p className="font-mono text-xs text-accent2/80">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
