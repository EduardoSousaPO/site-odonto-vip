import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Spectral } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const serif = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-serif",
  display: "swap",
});

const SITE_URL = "https://odontovipgo.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "OdontoVip Goiânia | Extração de Siso Rápida, Segura e Sem Dor",
  description:
    "Extração de dente do siso em Goiânia com técnicas modernas, protocolo sem dor e recuperação acelerada. Agende sua avaliação prioritária pelo WhatsApp.",
  keywords: [
    "extração de siso Goiânia",
    "dente do siso",
    "cirurgia do siso",
    "dentista Goiânia",
    "OdontoVip",
  ],
  authors: [{ name: "OdontoVip" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "OdontoVip",
    title: "OdontoVip Goiânia | Extração de Siso Rápida, Segura e Sem Dor",
    description:
      "Resolva o problema do seu siso com segurança e conforto. Técnicas modernas, sem dor e recuperação acelerada em Goiânia.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OdontoVip — Extração de siso em Goiânia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OdontoVip Goiânia | Extração de Siso Rápida, Segura e Sem Dor",
    description:
      "Extração de dente do siso em Goiânia com protocolo sem dor e recuperação acelerada.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e2a38",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${body.variable} ${serif.variable}`}>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
