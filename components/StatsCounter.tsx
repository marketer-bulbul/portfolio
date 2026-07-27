"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative border-y border-white/5 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-16 sm:px-10 lg:grid-cols-4 lg:px-24">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center lg:text-left"
          >
            <p className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-white/50">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
