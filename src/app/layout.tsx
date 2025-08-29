import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. [Nome] - Advocacia Criminal | Defesa Especializada",
  description:
    "Advocacia criminal especializada com anos de experiência. Defesa eficaz em crimes diversos. Atendimento personalizado e comprometido com seus direitos.",
  keywords: [
    "advogado criminal",
    "advocacia criminal",
    "defesa criminal",
    "direito penal",
    "advogado criminalista",
  ],
  authors: [{ name: "Dra. [Nome]" }],
  openGraph: {
    title: "Dra. [Nome] - Advocacia Criminal",
    description: "Advocacia criminal especializada com anos de experiência",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="GTM-XXXXXXX" />
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
