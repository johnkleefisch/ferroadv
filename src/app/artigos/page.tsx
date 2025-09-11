import { Metadata } from "next";
import { ArtigosClient } from "./client";

export const metadata: Metadata = {
  title: "Artigos Jurídicos | Diulliany Ferro - Advocacia Criminal",
  description:
    "Artigos especializados em direito criminal, habeas corpus, tribunal do júri e outras áreas do direito penal. Conteúdo atualizado e análises jurídicas aprofundadas.",
  keywords: [
    "artigos jurídicos",
    "direito criminal",
    "advocacia criminal",
    "habeas corpus",
    "tribunal do júri",
    "lei de drogas",
    "direito penal",
    "jurisprudência",
    "análise jurídica",
    "Diulliany Ferro",
    "Goiânia",
    "advogada criminal",
  ],
  openGraph: {
    title: "Artigos Jurídicos | Diulliany Ferro - Advocacia Criminal",
    description:
      "Artigos especializados em direito criminal, habeas corpus, tribunal do júri e outras áreas do direito penal.",
    url: "https://diullianyferro.com.br/artigos",
    siteName: "Diulliany Ferro - Advocacia Criminal",
    images: [
      {
        url: "/images/diulliany-ferro.png",
        width: 1200,
        height: 630,
        alt: "Dra. Diulliany Ferro - Advocacia Criminal",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artigos Jurídicos | Diulliany Ferro - Advocacia Criminal",
    description:
      "Artigos especializados em direito criminal, habeas corpus, tribunal do júri e outras áreas do direito penal.",
    images: ["/images/diulliany-ferro.png"],
  },
  alternates: {
    canonical: "https://diullianyferro.com.br/artigos",
  },
};

export default function ArtigosPage() {
  return <ArtigosClient />;
}
