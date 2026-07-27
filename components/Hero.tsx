"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { owner } from "@/lib/data";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-base pt-32 lg:pt-24"
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" />
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent2/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6"
          >
            {owner.titles.join(" · ")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Grow Your Business With{" "}
            <span className="text-gradient">Data-Driven</span> Digital
            Marketing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            I help businesses scale profitably using Facebook Ads, Google
            Ads, High-Converting Landing Pages, and Server-Side Tracking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#contact"
              className="bg-gradient-to-r from-accent to-accent2 text-black shadow-glow hover:shadow-glow2"
            >
              Hire Me
            </MagneticButton>
            <MagneticButton
              href={owner.whatsappLink}
              target="_blank"
              className="glass text-white hover:border-accent/40"
            >
              <MessageCircle size={18} />
              WhatsApp
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {[
              ["2M+", "Ad Spend"],
              ["50+", "Clients"],
              ["10+", "Brands"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-xs text-white/50">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass-strong shadow-card relative rounded-[2rem] p-3">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src={owner.profileImage}
                alt={owner.name}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong shadow-glow absolute -left-8 top-8 rounded-2xl px-4 py-3"
          >
            <p className="font-display text-lg font-semibold text-accent">2M+</p>
            <p className="text-[11px] text-white/60">Ad Spend Experience</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong shadow-glow2 absolute -right-6 bottom-16 rounded-2xl px-4 py-3"
          >
            <p className="font-display text-lg font-semibold text-accent2">50+</p>
            <p className="text-[11px] text-white/60">Clients</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong absolute -bottom-8 left-6 rounded-2xl px-4 py-3"
          >
            <p className="font-display text-lg font-semibold text-white">10+</p>
            <p className="text-[11px] text-white/60">Brands</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/40 hover:text-accent"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
