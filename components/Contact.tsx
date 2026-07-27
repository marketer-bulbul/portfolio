"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Facebook, Linkedin, MapPin, Send } from "lucide-react";
import { owner } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${owner.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="section-padding relative bg-secondary/20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Ready to scale? Let&apos;s talk about your account.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a
              href={owner.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-accent/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <MessageCircle size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">WhatsApp</p>
                <p className="text-xs text-white/50">{owner.whatsappNumber}</p>
              </div>
            </a>

            <a
              href={owner.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-accent2/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent2/15 text-accent2">
                <Facebook size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Facebook</p>
                <p className="text-xs text-white/50">@bulbul.digital.marketer</p>
              </div>
            </a>

            <a
              href={owner.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-white/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <Linkedin size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">LinkedIn</p>
                <p className="text-xs text-white/50">/in/mdtanim54</p>
              </div>
            </a>

            <div className="glass relative h-48 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-secondary/40 text-white/40">
                <MapPin size={22} />
                <p className="text-xs">Map location available on request</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass-strong space-y-4 rounded-3xl p-8"
          >
            <div>
              <label className="mb-2 block text-xs text-white/50">Name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-accent/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs text-white/50">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-accent/50"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs text-white/50">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-accent/50"
                placeholder="Tell me about your project and goals"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-4 text-sm font-semibold text-black shadow-glow transition-transform hover:scale-[1.01]"
            >
              <Send size={16} />
              Send Message
            </button>
            {sent && (
              <p className="text-center text-xs text-accent">
                Opening your email client to send this message...
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
