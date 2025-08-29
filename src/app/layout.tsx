import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Dra. Diulliany Ferro - Advocacia Criminal | Defesa Especializada São Paulo",
  description:
    "Advocacia criminal especializada com mais de 15 anos de experiência. Defesa eficaz em crimes diversos. Atendimento personalizado 24h. Consulta gratuita.",
  keywords: [
    "advogado criminal São Paulo",
    "advocacia criminal SP",
    "defesa criminal",
    "direito penal",
    "advogado criminalista",
    "Diulliany Ferro",
    "tribunal do júri",
    "crimes contra pessoa",
    "crimes patrimoniais",
    "violência doméstica",
  ],
  authors: [{ name: "Dra. Diulliany Ferro" }],
  creator: "Dra. Diulliany Ferro",
  publisher: "Diulliany Ferro Advocacia Criminal",
  openGraph: {
    title: "Dra. Diulliany Ferro - Advocacia Criminal",
    description:
      "Defesa criminal especializada com mais de 15 anos de experiência em São Paulo",
    type: "website",
    locale: "pt_BR",
    url: "https://diuferroadv.com.br",
    siteName: "Diulliany Ferro Advocacia Criminal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Diulliany Ferro - Advocacia Criminal",
    description:
      "Defesa criminal especializada com mais de 15 anos de experiência",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://diuferroadv.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <GoogleTagManager gtmId="GTM-XXXXXXX" />
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
