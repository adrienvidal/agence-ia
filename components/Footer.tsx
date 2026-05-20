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
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.icon === "linkedin" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 shrink-0"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
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
