"use client";

import { useRef, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  href,
  children,
  className = "",
  target,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-[transform,box-shadow] duration-300 ease-out ${className}`}
    >
      {children}
    </motion.a>
  );
}
