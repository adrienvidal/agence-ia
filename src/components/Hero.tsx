import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, Clock } from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 banner-bg">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.86_0.10_200/0.18)] blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-[oklch(0.78_0.13_240/0.18)] blur-[100px]" />
      <div className="absolute inset-0 grain opacity-40" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-mint)] animate-pulse" />
            Automatisations & Agents IA
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[5.5rem]">
            Travaillez moins.<br />
            <span className="gradient-text">Produisez plus.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-foreground/75 leading-relaxed text-balance">
            J'aide les <strong className="text-foreground font-semibold">entreprises</strong> à se doter
            d'une <strong className="text-foreground font-semibold">infrastructure web et IA</strong> performante —
            pour scaler sans recruter.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 glow"
            >
              Réserver mon audit gratuit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur hover:bg-surface"
            >
              Voir mes réalisations
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              100% clients satisfaits
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              RGPD · données hébergées en Europe
            </div>
          </div>
        </motion.div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-6 md:p-8 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-primary font-display text-2xl font-bold text-primary-foreground">
                AV
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background bg-primary animate-pulse" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold">Adrien Vidal</div>
                <div className="text-sm text-muted-foreground">Développeur IA & Automatisation</div>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
              <Clock className="h-3 w-3" />
              Répond en 24h
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-background/50 p-5">
                <div className="font-display text-4xl font-semibold text-primary">10 ans</div>
                <div className="mt-1 text-xs text-muted-foreground">Expérience front-end senior</div>
              </div>
              <div className="rounded-2xl border border-border bg-background/50 p-5">
                <div className="font-display text-4xl font-semibold text-primary">+8</div>
                <div className="mt-1 text-xs text-muted-foreground">Systèmes IA déployés</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-background/50 p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Stack signature</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["N8n", "OpenAI", "Anthropic", "Next.js", "Notion"].map((t) => (
                  <span key={t} className="rounded-md bg-surface px-2 py-1 text-xs text-foreground">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
