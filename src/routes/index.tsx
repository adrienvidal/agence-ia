import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ToolsBar } from "@/components/ToolsBar";
import { PainSection } from "@/components/PainSection";
import { RealisationsSection } from "@/components/RealisationsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FounderSection } from "@/components/FounderSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaFinal, Footer } from "@/components/CtaFinal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Adrien Vidal — Automatisation IA & Agents sur-mesure" },
      {
        name: "description",
        content:
          "Développeur senior (Chanel, Darty, Fnac) spécialisé en automatisation IA et agents sur-mesure pour les PME qui veulent scaler sans recruter. Diagnostic gratuit 30 min.",
      },
      { property: "og:title", content: "Adrien Vidal — Automatisation IA & Agents sur-mesure" },
      {
        property: "og:description",
        content:
          "Automatisation IA et agents sur-mesure pour PME. Diagnostic gratuit 30 min.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ToolsBar />
      <PainSection />
      <RealisationsSection />
      <ProcessSection />
      <FounderSection />
      <FaqSection />
      <CtaFinal />
      <Footer />
    </main>
  );
}
