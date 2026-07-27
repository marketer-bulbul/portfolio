"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { owner } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-base px-6 py-12 sm:px-10 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 sm:flex-row">
        <Image
          src={owner.logo}
          alt={`${owner.name} logo`}
          width={140}
          height={40}
          className="h-9 w-auto object-contain"
        />

        <p className="text-center text-xs text-white/40">
          © {new Date().getFullYear()} {owner.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={owner.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white/50 hover:text-accent"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href={owner.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/50 hover:text-accent"
          >
            <Facebook size={18} />
          </a>
          <a
            href={owner.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/50 hover:text-accent"
          >
            <Linkedin size={18} />
          </a>

          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            aria-label="Back to top"
            className="glass ml-2 flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:text-accent"
          >
            <ArrowUp size={16} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
