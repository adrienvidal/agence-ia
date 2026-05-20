import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { META, SHOW_REALISATIONS, SITE_URL } from "@/lib/data";

// Below-fold sections — lazy-loaded to reduce initial JS bundle
const ToolsBar = dynamic(() =>
  import("@/components/ToolsBar").then((m) => ({ default: m.ToolsBar })),
);
const PainSection = dynamic(() =>
  import("@/components/PainSection").then((m) => ({ default: m.PainSection })),
);
const ServicesSection = dynamic(() =>
  import("@/components/ServicesSection").then((m) => ({ default: m.ServicesSection })),
);
const RealisationsSection = dynamic(() =>
  import("@/components/RealisationsSection").then((m) => ({ default: m.RealisationsSection })),
);
const ProcessSection = dynamic(() =>
  import("@/components/ProcessSection").then((m) => ({ default: m.ProcessSection })),
);
const FounderSection = dynamic(() =>
  import("@/components/FounderSection").then((m) => ({ default: m.FounderSection })),
);
const FaqSection = dynamic(() =>
  import("@/components/FaqSection").then((m) => ({ default: m.FaqSection })),
);
const CtaFinal = dynamic(() =>
  import("@/components/CtaFinal").then((m) => ({ default: m.CtaFinal })),
);
const Footer = dynamic(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

const StickyCtaBar = dynamic(() =>
  import("@/components/StickyCtaBar").then((m) => ({ default: m.StickyCtaBar })),
);
const BackToTop = dynamic(() =>
  import("@/components/BackToTop").then((m) => ({ default: m.BackToTop })),
);

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: META.og.title,
    description: META.og.description,
    type: "website",
    url: SITE_URL,
    locale: "fr_FR",
    siteName: "Adrien Vidal · VILORIS.IO",
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630, alt: META.og.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: META.og.title,
    description: META.og.description,
    images: [`${SITE_URL}/og`],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd />
      <Nav />
      <Hero />
      <ToolsBar />
      <PainSection />
      <ServicesSection />
      {SHOW_REALISATIONS && <RealisationsSection />}
      <ProcessSection />
      <FounderSection />
      <FaqSection />
      <CtaFinal />
      <Footer />
      <StickyCtaBar />
      <BackToTop />
      <SpeedInsights />
    </main>
  );
}
