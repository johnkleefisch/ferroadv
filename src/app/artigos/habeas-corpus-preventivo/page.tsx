import { Metadata } from "next";
import HabeasCorpusPreventivo from "./client";

export const metadata: Metadata = {
  title: "Habeas Corpus Preventivo: Quando e Como Utilizar | DiuferroAdv",
  description:
    "Entenda quando e como utilizar o Habeas Corpus Preventivo para proteger a liberdade antes mesmo da prisão. Guia completo com jurisprudência atualizada e casos práticos.",
  keywords:
    "habeas corpus preventivo, direito penal, liberdade, prisão preventiva, advogado criminal, jurisprudência",
  authors: [{ name: "Dra. Diulliany Ferro" }],
  openGraph: {
    title: "Habeas Corpus Preventivo: Quando e Como Utilizar",
    description:
      "Guia completo sobre Habeas Corpus Preventivo - proteção jurídica antes da prisão.",
    url: "https://diuferroadv.com.br/artigos/habeas-corpus-preventivo",
    siteName: "DiuferroAdv",
    images: [
      {
        url: "/images/artigos/habeas-corpus-preventivo.jpg",
        width: 1200,
        height: 630,
        alt: "Habeas Corpus Preventivo - DiuferroAdv",
      },
    ],
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Habeas Corpus Preventivo: Quando e Como Utilizar",
    description:
      "Guia completo sobre Habeas Corpus Preventivo - proteção jurídica antes da prisão.",
    images: ["/images/artigos/habeas-corpus-preventivo.jpg"],
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

export default function HabeasCorpusPreventivePage() {
  return <HabeasCorpusPreventivo />;
}
