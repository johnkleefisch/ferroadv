import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contato from "@/components/Contato";

export const metadata: Metadata = {
  title: "Contato | DiuferroAdv - Advocacia Criminal Especializada",
  description:
    "Entre em contato com a Dra. Diulliany Ferro para consulta jurídica especializada em direito criminal. Atendimento 24h, consulta inicial gratuita e confidencial.",
  keywords:
    "contato advogado criminal, consulta jurídica, Dra Diulliany Ferro, advocacia criminal Goiânia, atendimento 24h",
  authors: [{ name: "Dra. Diulliany Ferro" }],
  openGraph: {
    title: "Contato | DiuferroAdv - Advocacia Criminal",
    description:
      "Entre em contato para consulta jurídica especializada. Atendimento 24h e consulta inicial gratuita.",
    url: "https://diuferroadv.com.br/contato",
    siteName: "DiuferroAdv",
    images: [
      {
        url: "/images/contato-diuferroadv.jpg",
        width: 1200,
        height: 630,
        alt: "Contato DiuferroAdv - Advocacia Criminal",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato | DiuferroAdv - Advocacia Criminal",
    description:
      "Entre em contato para consulta jurídica especializada. Atendimento 24h e consulta inicial gratuita.",
    images: ["/images/contato-diuferroadv.jpg"],
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
};

export default function ContatoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Contato />
      <Footer />
    </main>
  );
}
