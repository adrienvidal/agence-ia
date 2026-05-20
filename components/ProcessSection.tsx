"use client";

import { motion } from "framer-motion";
import { ArrowRight, Infinity as InfinityIcon } from "lucide-react";
import { PROCESS_SECTION, PROCESS_STEPS } from "@/lib/data";
import { useContactModal } from "@/lib/contact-modal-context";

export function ProcessSection() {
  const { openModal } = useContactModal();
  return (
    <section id="processus" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-primary">
            {PROCESS_SECTION.label}
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl text-balance">
            {PROCESS_SECTION.title}
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative rounded-3xl border border-border bg-surface/40 p-7 transition-colors hover:border-primary/40 hover:bg-surface/70"
            >
              <div className="font-display text-5xl font-semibold text-primary/30 transition-colors group-hover:text-primary">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex items-start gap-5 rounded-3xl border border-primary/30 bg-primary/5 p-7"
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <InfinityIcon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">{PROCESS_SECTION.beyond_title}</h3>
            <p className="mt-2 text-sm text-foreground/85 leading-relaxed max-w-2xl">
              {PROCESS_SECTION.beyond_description}
            </p>
          </div>
        </motion.div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={openModal}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            {PROCESS_SECTION.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
