import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Viloris.io",
  description: "Mentions légales du site viloris.io — WEBNROLLS EURL, Paris.",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Retour à l&apos;accueil
        </Link>

        <h1 className="font-display text-4xl font-semibold">Mentions légales</h1>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/85">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Éditeur du site</h2>
            <div className="mt-3 space-y-1">
              <p>WEBNROLLS EURL — nom commercial : Viloris.io</p>
              <p>Adrien Vidal — Développeur IA & Automatisation</p>
              <p>Paris, France</p>
              <p>
                Email :{" "}
                <a href="mailto:contact@viloris.io" className="text-primary hover:underline">
                  contact@viloris.io
                </a>
              </p>
              <p>SIRET : 929 895 290 00013</p>
              <p>N° TVA intracommunautaire : FR26 929 895 290</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Hébergement</h2>
            <div className="mt-3 space-y-1">
              <p>Vercel Inc.</p>
              <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p>
                Site :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Propriété intellectuelle
            </h2>
            <p className="mt-3">
              L&apos;ensemble des contenus présents sur ce site (textes, images, code) est la
              propriété exclusive d&apos;Adrien Vidal / WEBNROLLS EURL, sauf mention contraire.
              Toute reproduction, distribution ou utilisation sans autorisation préalable est
              interdite.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Limitation de responsabilité
            </h2>
            <p className="mt-3">
              WEBNROLLS EURL s&apos;efforce de fournir des informations exactes et à jour, mais ne
              peut garantir l&apos;exactitude, l&apos;exhaustivité ou l&apos;actualité des
              informations diffusées. L&apos;utilisation des informations de ce site est sous la
              seule responsabilité de l&apos;utilisateur.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Loi applicable</h2>
            <p className="mt-3">
              Le présent site est soumis au droit français. En cas de litige, les tribunaux français
              seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
