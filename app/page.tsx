import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ToolsBar } from "@/components/ToolsBar";
import { PainSection } from "@/components/PainSection";
import { ServicesSection } from "@/components/ServicesSection";
import { RealisationsSection } from "@/components/RealisationsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FounderSection } from "@/components/FounderSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaFinal, Footer } from "@/components/CtaFinal";
import { META } from "@/lib/data";

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  openGraph: {
    title: META.og.title,
    description: META.og.description,
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ToolsBar />
      <PainSection />
      <ServicesSection />
      <RealisationsSection />
      <ProcessSection />
      <FounderSection />
      <FaqSection />
      <CtaFinal />
      <Footer />
    </main>
  );
}
