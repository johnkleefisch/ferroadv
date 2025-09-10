import { Metadata } from "next";
import { AreasDeAtuacaoClient } from "./client";

export const metadata: Metadata = {
  title: "Áreas de Atuação - Dra. Diulliany Ferro | Advocacia Criminal",
  description:
    "Conheça todas as áreas de atuação da Dra. Diulliany Ferro. Especializada em crimes contra a pessoa, patrimônio, Lei de Drogas, Habeas Corpus e atendimentos de urgência 24h.",
  keywords: [
    "advogada criminal",
    "crimes contra a pessoa",
    "crimes contra o patrimônio",
    "lei de drogas",
    "habeas corpus",
    "tribunal do júri",
    "atendimento urgência",
    "Goiânia",
    "Dra. Diulliany Ferro",
  ],
};

export default function AreasDeAtuacaoPage() {
  return <AreasDeAtuacaoClient />;
}
