"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL, CTA_FINAL, FOOTER } from "@/lib/data";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />
      </div>
      <div className="absolute inset-0 grain opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl px-5 md:px-8 text-center"
      >
        <h2 className="font-display text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl text-balance">
          {CTA_FINAL.headline} <span className="gradient-text">{CTA_FINAL.headline_accent}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          {CTA_FINAL.description}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition hover:opacity-90 glow"
          >
            {CTA_FINAL.cta}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <div className="text-xs text-muted-foreground">{CTA_FINAL.subtext}</div>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/30 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 md:px-8 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-muted-foreground">{FOOTER.copyright}</div>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {FOOTER.links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
