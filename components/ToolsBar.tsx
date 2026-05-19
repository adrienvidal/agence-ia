"use client";

import { motion } from "framer-motion";
import { TOOLS } from "@/lib/data";

export function ToolsBar() {
  return (
    <section className="border-y border-border/60 bg-surface/30 py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Les outils que j&apos;utilise au quotidien
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12"
        >
          {TOOLS.map((t) => (
            <span key={t} className="font-display text-lg font-medium text-muted-foreground/80 transition-colors hover:text-foreground">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
