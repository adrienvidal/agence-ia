import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adrien Vidal — Automatisation IA & Agents sur-mesure",
  description:
    "Développeur senior (Chanel, Darty, Fnac) spécialisé en automatisation IA et agents sur-mesure pour les PME qui veulent scaler sans recruter.",
  authors: [{ name: "Adrien Vidal" }],
  openGraph: {
    siteName: "Adrien Vidal · WEBNROLLS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  themeColor: "#0e1117",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
