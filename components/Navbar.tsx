"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { owner } from "@/lib/data";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Experience", href: "#experience" },
  { label: "Clients", href: "#clients" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "glass-strong shadow-card mx-4" : "bg-transparent"
        }`}
        style={{ height: scrolled ? 60 : 72 }}
      >
        <a href="#home" className="flex items-center gap-2">
          <Image
            src={owner.logo}
            alt={`${owner.name} logo`}
            width={40}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={owner.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-accent to-accent2 px-5 py-2.5 text-sm font-semibold text-black shadow-glow transition-transform hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong mx-4 mt-3 rounded-3xl p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-white/80 hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={owner.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-5 py-3 text-center text-sm font-semibold text-black"
              >
                Hire Me on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
