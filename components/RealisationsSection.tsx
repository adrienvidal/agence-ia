"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { CALENDLY_URL, PROJECTS, UPCOMING_PROJECT } from "@/lib/data";

export function RealisationsSection() {
  return (
    <section id="realisations" className="relative border-t border-border/60 bg-surface/20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Réalisations</div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl text-balance">
            Ce qu&apos;on a déjà construit
          </h2>
        </motion.div>

        <div className="mt-16 space-y-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-7 md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
                  <p className="mt-5 text-base text-foreground/90 leading-relaxed">{p.description}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-background/60 p-4">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Problème</div>
                      <p className="mt-2 text-sm text-foreground/85 leading-relaxed">{p.problem}</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-background/60 p-4">
                      <div className="text-xs uppercase tracking-wider text-primary">Solution</div>
                      <p className="mt-2 text-sm text-foreground/85 leading-relaxed">{p.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 text-center">
                    <div className="font-display text-6xl font-semibold text-primary md:text-7xl">
                      {p.metric.value}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">{p.metric.label}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-dashed border-border bg-surface/30 p-7 md:p-10"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    {UPCOMING_PROJECT.status}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">{UPCOMING_PROJECT.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{UPCOMING_PROJECT.description}</p>
                </div>
              </div>
            </div>
          </motion.article>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Lancer votre projet
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
