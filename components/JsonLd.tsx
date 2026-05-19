import { FAQ, SITE_URL } from "@/lib/data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adrien Vidal",
  jobTitle: "Développeur IA & Automatisation",
  url: SITE_URL,
  worksFor: {
    "@type": "LocalBusiness",
    name: "WEBNROLLS EURL",
    url: SITE_URL,
    priceRange: "€€",
    areaServed: "FR",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
  },
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
