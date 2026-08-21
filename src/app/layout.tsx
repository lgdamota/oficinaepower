import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "E-Power | Oficina de Bikes e Scooters Elétricas em Icaraí",
  description:
    "Oficina especializada em manutenção, diagnóstico e revisão de bikes e scooters elétricas em Icaraí, Niterói.",
  keywords: [
    "Oficina de bike elétrica em Niterói",
    "Manutenção de scooter elétrica",
    "Assistência técnica para bike elétrica",
    "Oficina de scooter elétrica em Icaraí",
    "Revisão de bike elétrica",
    "Manutenção de mobilidade elétrica",
  ],
  openGraph: {
    title: "E-Power | Oficina de Bikes e Scooters Elétricas em Icaraí",
    description:
      "Oficina especializada em manutenção, diagnóstico e revisão de bikes e scooters elétricas em Icaraí, Niterói.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/epower-hero.svg",
        width: 1200,
        height: 630,
        alt: "E-Power — oficina de bikes e scooters elétricas em Icaraí",
      },
    ],
  },
  icons: { icon: "/icon.svg" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.fullName,
  description:
    "Oficina especializada em manutenção, diagnóstico e revisão de bikes e scooters elétricas em Icaraí, Niterói.",
  telephone: `+${siteConfig.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Gavião Peixoto, 31",
    addressLocality: "Niterói",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
