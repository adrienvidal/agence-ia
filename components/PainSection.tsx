"use client";

import { motion } from "framer-motion";
import { Clock, Database, TrendingDown, ArrowRight } from "lucide-react";
import { CALENDLY_URL, PAINS } from "@/lib/data";

const icons = [Clock, Database, TrendingDown];

export function PainSection() {
  return (
    <section id="diagnostic" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Diagnostic</div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl text-balance">
            Votre entreprise est freinée par l&apos;opérationnel.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Vous scalez, mais vos process ne suivent pas…
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PAINS.map((p, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-3xl border border-border bg-surface/40 p-7 transition hover:border-primary/40 hover:bg-surface"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Automatiser mes process
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
