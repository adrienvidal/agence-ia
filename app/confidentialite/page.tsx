import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Viloris.io",
  description: "Politique de confidentialité et traitement des données personnelles — viloris.io.",
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Retour à l&apos;accueil
        </Link>

        <h1 className="font-display text-4xl font-semibold">Politique de confidentialité</h1>
        <p className="mt-3 text-sm text-muted-foreground">Dernière mise à jour : mai 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/85">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Responsable du traitement
            </h2>
            <div className="mt-3 space-y-1">
              <p>Viloris.io (WEBNROLLS EURL) — Adrien Vidal</p>
              <p>Paris, France</p>
              <p>
                Contact :{" "}
                <a href="mailto:contact@viloris.io" className="text-primary hover:underline">
                  contact@viloris.io
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Données collectées
            </h2>
            <p className="mt-3">
              Lors de la prise de contact via Calendly (audit gratuit), les données suivantes
              peuvent être collectées : nom, prénom, adresse e-mail, numéro de téléphone, et
              informations relatives à votre projet professionnel. Ces données sont collectées avec
              votre consentement explicite.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Finalités du traitement
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Répondre à vos demandes de contact et organiser des rendez-vous</li>
              <li>Établir des propositions commerciales personnalisées</li>
              <li>Assurer le suivi des projets en cours</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Durée de conservation
            </h2>
            <p className="mt-3">
              Vos données sont conservées pendant 3 ans à compter du dernier contact, conformément
              aux recommandations de la CNIL.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Hébergement et transferts
            </h2>
            <p className="mt-3">
              Ce site est hébergé par Vercel (États-Unis). Les prises de rendez-vous sont gérées via
              Calendly (États-Unis). Ces prestataires disposent de garanties adéquates (clauses
              contractuelles types) pour les transferts hors UE. Sur demande, vos données peuvent
              être traitées exclusivement par des modèles d&apos;IA hébergés en Europe (Mistral,
              Azure EU).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Vos droits (RGPD)
            </h2>
            <p className="mt-3">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (&laquo;&nbsp;droit à l&apos;oubli&nbsp;&raquo;)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@viloris.io" className="text-primary hover:underline">
                contact@viloris.io
              </a>
              . En cas de litige, vous pouvez saisir la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                CNIL
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">Cookies</h2>
            <p className="mt-3">
              Ce site n&apos;utilise pas de cookies publicitaires ou de tracking tiers. Seuls des
              cookies techniques strictement nécessaires au fonctionnement du site peuvent être
              déposés.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
