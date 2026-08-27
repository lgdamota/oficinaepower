import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import { UnitSelectorProvider } from "@/components/unit-selector";
import { siteConfig } from "@/data/site";
import { units } from "@/data/units";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "E-Power | Oficina de Bikes e Scooters Elétricas no Rio e em Niterói",
  description:
    "Manutenção e assistência especializada para bikes e scooters elétricas, com unidades em Icaraí, Botafogo e Flamengo.",
  keywords: [
    "Oficina de bike elétrica em Niterói",
    "Manutenção de scooter elétrica",
    "Assistência técnica para bike elétrica",
    "Oficina de scooter elétrica em Icaraí",
    "Oficina de bike elétrica em Botafogo",
    "Oficina de bike elétrica no Flamengo",
    "Revisão de bike elétrica",
    "Manutenção de mobilidade elétrica",
  ],
  openGraph: {
    title:
      "E-Power | Oficina de Bikes e Scooters Elétricas no Rio e em Niterói",
    description:
      "Manutenção e assistência especializada para bikes e scooters elétricas, com unidades em Icaraí, Botafogo e Flamengo.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/epower-hero.svg",
        width: 1600,
        height: 950,
        alt: "E-Power — oficina de bikes e scooters elétricas no Rio e em Niterói",
      },
    ],
  },
  icons: { icon: "/icon.svg" },
};

const structuredData = units.map((unit) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `${siteConfig.fullName} — ${unit.name}`,
  description:
    "Oficina especializada em manutenção, diagnóstico e revisão de bikes e scooters elétricas.",
  telephone: `+${unit.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: unit.address,
    addressLocality: unit.city,
    addressRegion: "RJ",
    addressCountry: "BR",
  },
}));

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${rajdhani.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <UnitSelectorProvider>{children}</UnitSelectorProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
