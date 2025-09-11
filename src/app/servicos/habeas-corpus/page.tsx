import { Metadata } from "next";
import { HabeasCorpusClient } from "./client";

export const metadata: Metadata = {
  title: "Habeas Corpus - Dra. Diulliany Ferro | Advocacia Criminal",
  description:
    "Serviço especializado em Habeas Corpus preventivo e liberatório. Proteção imediata da liberdade de locomoção com atuação técnica e estratégica da Dra. Diulliany Ferro.",
  keywords: [
    "habeas corpus",
    "liberdade de locomoção",
    "prisão preventiva",
    "relaxamento de prisão",
    "medidas cautelares",
    "constrangimento ilegal",
    "advogada criminal",
    "Dra. Diulliany Ferro",
    "Goiânia",
    "urgência criminal",
  ],
  openGraph: {
    title: "Habeas Corpus - Dra. Diulliany Ferro",
    description:
      "Proteção imediata da sua liberdade com atuação especializada em Habeas Corpus",
    images: ["/images/habeas-corpus-og.jpg"],
  },
};

export default function HabeasCorpusPage() {
  return <HabeasCorpusClient />;
}
