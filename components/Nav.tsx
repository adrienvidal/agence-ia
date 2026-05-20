"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, NAV_LINKS, SHOW_REALISATIONS } from "@/lib/data";
import { useContactModal } from "@/lib/contact-modal-context";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { openModal } = useContactModal();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center">
          <Image
            src="/logo-viloris-dark.webp"
            alt="Viloris"
            width={827}
            height={117}
            className="h-8 w-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV_LINKS.filter((l) => l.href !== "#realisations" || SHOW_REALISATIONS).map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={openModal}
          className="hidden md:inline-flex items-center gap-1.5 rounded-full cta-btn px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          {NAV.cta} <ArrowUpRight className="h-4 w-4" />
        </button>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 -mr-2 text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/40 bg-background px-5 py-6 animate-fade-in">
          <div className="flex flex-col gap-5 text-base">
            {NAV_LINKS.filter((l) => l.href !== "#realisations" || SHOW_REALISATIONS).map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                openModal();
                setOpen(false);
              }}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full cta-btn px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              {NAV.cta} <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
