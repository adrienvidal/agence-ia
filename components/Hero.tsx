"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Shield, Star, CheckCircle2, Loader2, Zap } from "lucide-react";
import { HERO, SHOW_REALISATIONS } from "@/lib/data";
import { useContactModal } from "@/lib/contact-modal-context";

const WORKFLOW_STEPS = HERO.workflow.steps;
const REVEAL_DELAY = 400;
const PROCESS_DURATION = 650;
const STEP_GAP = 950;

function WorkflowCard() {
  const prefersReducedMotion = useReducedMotion();
  type StepState = "hidden" | "processing" | "done";
  const [stepStates, setStepStates] = useState<StepState[]>(() =>
    prefersReducedMotion ? WORKFLOW_STEPS.map(() => "done") : WORKFLOW_STEPS.map(() => "hidden"),
  );
  const [showFooter, setShowFooter] = useState(!!prefersReducedMotion);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    setStepStates(WORKFLOW_STEPS.map(() => "hidden"));
    setShowFooter(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    WORKFLOW_STEPS.forEach((_, i) => {
      timers.push(
        setTimeout(
          () => setStepStates((p) => p.map((s, j) => (j === i ? "processing" : s))),
          REVEAL_DELAY + i * STEP_GAP,
        ),
      );
      timers.push(
        setTimeout(
          () => setStepStates((p) => p.map((s, j) => (j === i ? "done" : s))),
          REVEAL_DELAY + i * STEP_GAP + PROCESS_DURATION,
        ),
      );
    });

    const allDoneAt = REVEAL_DELAY + (WORKFLOW_STEPS.length - 1) * STEP_GAP + PROCESS_DURATION;
    timers.push(setTimeout(() => setShowFooter(true), allDoneAt + 300));
    timers.push(setTimeout(() => setCycleKey((k) => k + 1), allDoneAt + 5000));

    return () => timers.forEach(clearTimeout);
  }, [cycleKey, prefersReducedMotion]);

  return (
    <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-background shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-background/30">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
          </div>
          <span className="font-mono text-[11px] text-muted-foreground">
            {HERO.workflow.filename}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <motion.span
            animate={{ opacity: [1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="block h-1.5 w-1.5 rounded-full bg-green-400"
          />
          <span className="font-mono text-[10px] tracking-widest text-green-400">LIVE</span>
        </div>
      </div>

      <div className="p-5 min-h-[256px] flex flex-col gap-2.5">
        {stepStates.map((state, i) =>
          state === "hidden" ? null : (
            <motion.div
              key={`${cycleKey}-step-${i}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex items-center gap-2.5"
            >
              <div className="w-3.5 shrink-0 flex items-center justify-center">
                {state === "processing" ? (
                  <Loader2 className="h-3.5 w-3.5 text-primary animate-spin" />
                ) : (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  </motion.div>
                )}
              </div>
              <span className="font-mono text-[10px] text-muted-foreground/50 tabular-nums w-[4.5rem] shrink-0">
                {WORKFLOW_STEPS[i].time}
              </span>
              <span
                className={`font-mono text-[11px] leading-relaxed ${
                  state === "processing" ? "text-foreground" : "text-foreground/65"
                }`}
              >
                {WORKFLOW_STEPS[i].label}
                {state === "processing" && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="inline-block ml-0.5 w-[5px] h-[11px] bg-foreground/60 align-middle rounded-[1px]"
                  />
                )}
              </span>
            </motion.div>
          ),
        )}
      </div>

      <AnimatePresence>
        {showFooter && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="border-t border-border/50 px-5 py-3 flex items-center gap-2"
          >
            <Zap className="h-3 w-3 text-primary shrink-0" />
            <span className="font-mono text-[11px] text-muted-foreground">
              {HERO.workflow.footer}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  const { openModal } = useContactModal();
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 banner-bg">
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.86_0.10_200/0.18)] blur-[120px]"
        style={{ willChange: "filter", contain: "layout paint" }}
      />
      <div
        className="pointer-events-none absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-[oklch(0.78_0.13_240/0.18)] blur-[100px]"
        style={{ willChange: "filter", contain: "layout paint" }}
      />
      <div className="absolute inset-0 grain opacity-40" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-mint)]" />
            {HERO.badge}
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[5rem]">
            {HERO.headline}
            <br />
            <span className="gradient-text">{HERO.headline_accent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-foreground/75 leading-relaxed text-balance">
            {HERO.description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-primary shrink-0" />
            {HERO.gdpr}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={openModal}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 glow cursor-pointer"
            >
              {HERO.cta_primary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            {SHOW_REALISATIONS && (
              <a
                href="#realisations"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {HERO.cta_secondary}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>

          <div className="mt-10 border-t border-border/30 pt-8">
            <p className="mb-5 text-sm text-foreground/60">{HERO.clients_tagline}</p>
            <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-6 sm:flex sm:flex-wrap sm:justify-start sm:items-center sm:gap-10">
              {HERO.clients.map((client) => (
                <Image
                  key={client.name}
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={40}
                  priority
                  sizes="(max-width: 640px) 50vw, 120px"
                  className="h-10 w-auto object-contain opacity-65 [filter:brightness(0)_invert(1)]"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <WorkflowCard />
          <p className="mt-3 text-center text-xs text-muted-foreground/50 italic">
            {HERO.workflow.caption}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
