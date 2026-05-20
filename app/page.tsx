import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ToolsBar } from "@/components/ToolsBar";
import { PainSection } from "@/components/PainSection";
import { ServicesSection } from "@/components/ServicesSection";
import { RealisationsSection } from "@/components/RealisationsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FounderSection } from "@/components/FounderSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { BackToTop } from "@/components/BackToTop";
import { META, SHOW_REALISATIONS, SITE_URL } from "@/lib/data";

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
    siteName: "Adrien Vidal · WEBNROLLS",
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
