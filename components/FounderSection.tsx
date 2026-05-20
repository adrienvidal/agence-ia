"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FOUNDER_SECTION } from "@/lib/data";
import { useContactModal } from "@/lib/contact-modal-context";

export function FounderSection() {
  const { openModal } = useContactModal();
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
            <div className="text-xs uppercase tracking-[0.2em] text-primary">
              {FOUNDER_SECTION.label}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl ring-1 ring-border shadow-lg sm:h-[300px] sm:w-[220px]">
                <Image
                  src="/adrien-profil.webp"
                  alt="Adrien Vidal"
                  fill
                  className="object-cover object-center sm:object-top"
                  sizes="(max-width: 640px) 100vw, 220px"
                />
              </div>
              <div>
                <div className="font-display text-xl font-semibold">{FOUNDER_SECTION.name}</div>
                <div className="text-sm text-muted-foreground">{FOUNDER_SECTION.company}</div>
                <div className="text-xs text-muted-foreground">{FOUNDER_SECTION.role}</div>
              </div>
            </div>

            {/* Testimonial visible sur desktop uniquement dans la colonne gauche */}
            <blockquote className="mt-8 hidden lg:block border-l-2 border-primary/60 pl-4">
              <p className="text-sm leading-relaxed text-foreground/80 italic">
                &ldquo;{FOUNDER_SECTION.testimonial.quote}&rdquo;
              </p>
              <footer className="mt-3">
                <span className="text-sm font-medium text-foreground">
                  {FOUNDER_SECTION.testimonial.author}
                </span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {FOUNDER_SECTION.testimonial.role}
                </span>
              </footer>
            </blockquote>
          </div>

          <div className="space-y-6">
            {FOUNDER_SECTION.bio.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-foreground/90 text-balance">
                {paragraph}
              </p>
            ))}
            <button
              onClick={openModal}
              className="group mt-4 inline-flex items-center gap-2 rounded-full cta-btn px-6 py-3.5 text-sm font-medium text-primary-foreground cursor-pointer"
            >
              Réserver mon audit gratuit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Testimonial visible sur mobile uniquement, après la bio */}
            <blockquote className="lg:hidden border-l-2 border-primary/60 pl-4 pt-2">
              <p className="text-sm leading-relaxed text-foreground/80 italic">
                &ldquo;{FOUNDER_SECTION.testimonial.quote}&rdquo;
              </p>
              <footer className="mt-3">
                <span className="text-sm font-medium text-foreground">
                  {FOUNDER_SECTION.testimonial.author}
                </span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {FOUNDER_SECTION.testimonial.role}
                </span>
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
