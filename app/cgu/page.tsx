import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Viloris.io",
  description: "Conditions générales d'utilisation du site viloris.io — WEBNROLLS EURL.",
};

export default function CGU() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Retour à l&apos;accueil
        </Link>

        <h1 className="font-display text-4xl font-semibold">
          Conditions générales d&apos;utilisation
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Dernière mise à jour : mai 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/85">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Objet</h2>
            <p className="mt-3">
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et
              l&apos;utilisation du site viloris.io, édité par WEBNROLLS EURL, nom commercial
              Viloris.io (Adrien Vidal), Paris, France.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Accès au site</h2>
            <p className="mt-3">
              L&apos;accès au site est gratuit. WEBNROLLS EURL se réserve le droit de modifier,
              suspendre ou interrompre l&apos;accès au site à tout moment, sans préavis ni
              indemnité.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Propriété intellectuelle
            </h2>
            <p className="mt-3">
              L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes, logo,
              code source) est la propriété exclusive d&apos;Adrien Vidal / WEBNROLLS EURL, sauf
              mention contraire. Toute reproduction, représentation, modification ou adaptation,
              totale ou partielle, est strictement interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Responsabilité</h2>
            <p className="mt-3">
              WEBNROLLS EURL s&apos;efforce de maintenir les informations publiées sur le site
              exactes et à jour. Cependant, elle ne saurait être tenue responsable des erreurs ou
              omissions, ni des dommages directs ou indirects résultant de l&apos;utilisation du
              site ou de l&apos;impossibilité d&apos;y accéder.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Liens hypertextes
            </h2>
            <p className="mt-3">
              Le site peut contenir des liens vers des sites tiers. WEBNROLLS EURL n&apos;exerce
              aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou
              leurs pratiques.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Droit applicable</h2>
            <p className="mt-3">
              Les présentes CGU sont soumises au droit français. Tout litige relatif à leur
              interprétation ou leur exécution relève de la compétence exclusive des tribunaux
              français.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              Pour toute question relative aux présentes CGU :{" "}
              <a href="mailto:contact@viloris.io" className="text-primary hover:underline">
                contact@viloris.io
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
