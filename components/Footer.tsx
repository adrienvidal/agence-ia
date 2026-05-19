"use client";

import Image from "next/image";
import { FOOTER } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Image
            src="/favicon-viloris.webp"
            alt="Viloris"
            width={800}
            height={800}
            className="h-10 w-10"
          />
          <p className="text-sm text-muted-foreground leading-relaxed">
            {FOOTER.address.street}
            <br />
            {FOOTER.address.city}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
            Contact
          </p>
          <ul className="flex flex-col gap-3">
            {FOOTER.contact.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
            Ressources
          </p>
          <ul className="flex flex-col gap-3">
            {FOOTER.ressources.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
            Légal
          </p>
          <ul className="flex flex-col gap-3">
            {FOOTER.legal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-5">
        <p className="text-center text-xs text-muted-foreground">
          {FOOTER.subfooter.text}
          <a
            href={FOOTER.subfooter.linkHref}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors font-bold"
          >
            {FOOTER.subfooter.linkLabel}
          </a>
        </p>
      </div>
    </footer>
  );
}
