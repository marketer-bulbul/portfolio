"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let raf: number;

    function onMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;
    }

    function animate() {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (el) {
        el.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[500px] w-[500px] rounded-full opacity-30 blur-[120px] mix-blend-screen md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(0,245,160,0.55) 0%, rgba(0,194,255,0.35) 45%, transparent 70%)",
      }}
    />
  );
}
