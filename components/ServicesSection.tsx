"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Wrench, Check, LucideIcon } from "lucide-react";
import { SERVICES_SECTION, SERVICES, SERVICES_LIAISON } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = { Bot, Globe, Wrench };

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-primary">
            {SERVICES_SECTION.label}
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl text-balance">
            {SERVICES_SECTION.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-balance">
            {SERVICES_SECTION.intro}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.icon}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col rounded-3xl border border-border bg-surface/40 p-7 transition hover:border-primary/40 hover:-translate-y-1"
              >
                <span className="self-start rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  {service.badge}
                </span>

                <div className="mt-5 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold leading-snug">
                  {service.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center text-sm italic text-muted-foreground/60"
        >
          {SERVICES_LIAISON}
        </motion.p>
      </div>
    </section>
  );
}
