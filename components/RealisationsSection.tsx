"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import {
  PROJECTS,
  REALISATIONS_SECTION,
  SHOW_UPCOMING_PROJECT,
  UPCOMING_PROJECT,
} from "@/lib/data";
import { useContactModal } from "@/lib/contact-modal-context";

export function RealisationsSection() {
  const { openModal } = useContactModal();
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (i: number) => {
    setExpandedProjects((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section
      id="realisations"
      className="relative border-t border-border/60 bg-surface/20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-primary">
            {REALISATIONS_SECTION.label}
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl text-balance">
            {REALISATIONS_SECTION.title}
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-xl">
            {REALISATIONS_SECTION.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 space-y-6">
          {PROJECTS.map((p, i) => {
            const isExpanded = expandedProjects.has(i);
            return (
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
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[13px] text-amber-400">
                        {REALISATIONS_SECTION.demo_badge}
                      </span>
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[13px] text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
                    <p className="mt-5 text-base text-foreground/90 leading-relaxed">
                      {p.description}
                    </p>

                    {/* Mobile: metric visible inline, details collapsible */}
                    <div className="mt-6 md:hidden">
                      <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-center">
                        <div className="font-display text-5xl font-semibold text-primary">
                          {p.metric.value}
                        </div>
                        <div className="mt-1.5 text-sm text-muted-foreground">{p.metric.label}</div>
                      </div>
                    </div>

                    {/* Problem/solution toggle on mobile */}
                    <button
                      onClick={() => toggleProject(i)}
                      className="mt-5 flex items-center gap-1.5 text-sm text-primary font-medium md:hidden cursor-pointer"
                    >
                      {isExpanded ? "Masquer le détail" : "Voir le problème & la solution"}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Always visible on desktop, toggle on mobile */}
                    <AnimatePresence initial={false}>
                      {(isExpanded) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden md:hidden"
                        >
                          <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-border bg-background/60 p-4">
                              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                                {REALISATIONS_SECTION.problem_label}
                              </div>
                              <p className="mt-2 text-sm text-foreground/85 leading-relaxed">{p.problem}</p>
                            </div>
                            <div className="rounded-2xl border border-border bg-background/60 p-4">
                              <div className="text-xs uppercase tracking-wider text-primary">
                                {REALISATIONS_SECTION.solution_label}
                              </div>
                              <p className="mt-2 text-sm text-foreground/85 leading-relaxed">
                                {p.solution}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Always visible on desktop */}
                    <div className="mt-6 hidden md:grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-border bg-background/60 p-4">
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                          {REALISATIONS_SECTION.problem_label}
                        </div>
                        <p className="mt-2 text-sm text-foreground/85 leading-relaxed">{p.problem}</p>
                      </div>
                      <div className="rounded-2xl border border-border bg-background/60 p-4">
                        <div className="text-xs uppercase tracking-wider text-primary">
                          {REALISATIONS_SECTION.solution_label}
                        </div>
                        <p className="mt-2 text-sm text-foreground/85 leading-relaxed">
                          {p.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative hidden md:block">
                    <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 text-center">
                      <div className="font-display text-6xl font-semibold text-primary md:text-7xl">
                        {p.metric.value}
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">{p.metric.label}</div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}

          {SHOW_UPCOMING_PROJECT && (
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
                    <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                      {UPCOMING_PROJECT.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {UPCOMING_PROJECT.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          )}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {REALISATIONS_SECTION.note}
        </p>

        <div className="mt-6 flex justify-center">
          <button
            onClick={openModal}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 cursor-pointer"
          >
            {REALISATIONS_SECTION.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
