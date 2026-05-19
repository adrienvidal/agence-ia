import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de cookies — Viloris.io",
  description: "Politique de cookies et traceurs du site viloris.io — WEBNROLLS EURL.",
};

export default function Cookies() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Retour à l&apos;accueil
        </Link>

        <h1 className="font-display text-4xl font-semibold">Politique de cookies (UE)</h1>
        <p className="mt-3 text-sm text-muted-foreground">Dernière mise à jour : mai 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/85">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Qu&apos;est-ce qu&apos;un cookie ?
            </h2>
            <p className="mt-3">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, téléphone,
              tablette) lors de la visite d&apos;un site web. Il permet au site de mémoriser des
              informations sur votre visite pour améliorer votre expérience.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Cookies utilisés sur viloris.io
            </h2>
            <p className="mt-3">
              Ce site n&apos;utilise{" "}
              <strong>aucun cookie publicitaire, de profilage ou de tracking tiers</strong>. Seuls
              des cookies techniques strictement nécessaires au fonctionnement du site peuvent être
              déposés. Ces cookies ne collectent aucune donnée personnelle identifiable et ne
              nécessitent pas de consentement selon la directive ePrivacy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Services tiers</h2>
            <div className="mt-3 space-y-4">
              <div>
                <p className="font-medium text-foreground">Vercel (hébergement)</p>
                <p className="mt-1">
                  L&apos;hébergeur Vercel peut déposer des cookies techniques nécessaires à la
                  diffusion du site. Ces cookies sont soumis à la{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    politique de confidentialité de Vercel
                  </a>
                  .
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Calendly (prise de rendez-vous)</p>
                <p className="mt-1">
                  Si vous utilisez le formulaire de prise de rendez-vous, Calendly peut déposer ses
                  propres cookies. Consultez la{" "}
                  <a
                    href="https://calendly.com/legal/privacy-notice"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    politique de confidentialité de Calendly
                  </a>{" "}
                  pour en savoir plus.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Gestion des cookies
            </h2>
            <p className="mt-3">
              Vous pouvez configurer votre navigateur pour refuser ou supprimer les cookies à tout
              moment. Voici comment procéder selon votre navigateur :
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <strong>Chrome</strong> : Paramètres → Confidentialité et sécurité → Cookies
              </li>
              <li>
                <strong>Firefox</strong> : Préférences → Vie privée et sécurité → Cookies
              </li>
              <li>
                <strong>Safari</strong> : Préférences → Confidentialité → Cookies
              </li>
              <li>
                <strong>Edge</strong> : Paramètres → Cookies et autorisations de site
              </li>
            </ul>
            <p className="mt-3">
              Notez que la désactivation de certains cookies techniques peut affecter le bon
              fonctionnement du site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              Pour toute question relative à notre utilisation des cookies :{" "}
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
