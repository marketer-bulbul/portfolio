"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Search,
  Music2,
  LayoutTemplate,
  Rocket,
  Target,
  Server,
  Radio,
} from "lucide-react";
import { services } from "@/lib/data";

const icons = [Megaphone, Search, Music2, LayoutTemplate, Rocket, Target, Server, Radio];

export default function Services() {
  return (
    <section id="services" className="section-padding relative bg-secondary/20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Services</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Everything a scaling ad account needs, in one place.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-accent/30"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-all duration-500 group-hover:bg-accent/25" />
                <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="relative font-display text-base font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm text-white/55 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
