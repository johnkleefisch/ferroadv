import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AreasDeAtuacao from "@/components/AreasDeAtuacao";
import Sobre from "@/components/Sobre";
import Resultados from "@/components/Resultados";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import Contato from "@/components/Contato";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dra. Diulliany Ferro - Advocacia Criminal Especializada | São Paulo",
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
  openGraph: {
    title: "Dra. Diulliany Ferro - Advocacia Criminal Especializada",
    description:
      "Defesa criminal eficaz com atendimento personalizado em São Paulo. Mais de 15 anos de experiência.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Diulliany Ferro - Advocacia Criminal",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AreasDeAtuacao />
      <Sobre />
      <Resultados />
      <Depoimentos />
      <FAQ />
      <Contato />
      <Footer />
    </main>
  );
}
