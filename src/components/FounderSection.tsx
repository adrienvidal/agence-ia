import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { CLIENTS } from "@/lib/data";

export function FounderSection() {
  return (
    <section className="relative border-t border-border/60 bg-surface/20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary">Le mot du fondateur</div>

            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-20 w-20 place-items-center rounded-2xl bg-primary font-display text-3xl font-bold text-primary-foreground glow">
                AV
              </div>
              <div>
                <div className="font-display text-xl font-semibold">Adrien Vidal</div>
                <div className="text-sm text-muted-foreground">Fondateur · WEBNROLLS EURL</div>
                <div className="text-xs text-muted-foreground/70">Développeur IA & Automatisation</div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Ils m'ont fait confiance</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {CLIENTS.map((c) => (
                  <span key={c} className="rounded-lg border border-border bg-background/60 px-3 py-1.5 font-display text-sm text-foreground/85">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90 text-balance">
              J'ai passé 10 ans à construire des interfaces exigeantes pour
              Chanel, Darty, Fnac. Cette rigueur technique, je l'applique
              aujourd'hui à l'automatisation IA pour les PME qui veulent
              scaler sans recruter.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 text-balance">
              Mon objectif : comprendre ce qui freine vraiment votre croissance
              et construire des systèmes sur-mesure qui vous redonnent votre
              temps.
            </p>

            <blockquote className="relative mt-8 rounded-3xl border border-primary/30 bg-primary/5 p-7">
              <Quote className="absolute -top-3 left-6 h-6 w-6 rounded-full bg-primary p-1 text-primary-foreground" />
              <p className="font-display text-xl leading-snug text-foreground text-balance">
                « On n'automatise pas pour remplacer l'humain. On le libère
                pour qu'il se concentre sur ce qui compte vraiment. »
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">
                — Adrien Vidal · Fondateur, WEBNROLLS
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
