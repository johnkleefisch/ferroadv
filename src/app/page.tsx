"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AreasDeAtuacao from "@/components/AreasDeAtuacao";
import Sobre from "@/components/Sobre";
import Resultados from "@/components/Resultados";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import Contato from "@/components/Contato";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  const { ref: areasRef, isVisible: areasVisible } = useScrollAnimation(0.1);
  const { ref: sobreRef, isVisible: sobreVisible } = useScrollAnimation(0.1);
  const { ref: resultadosRef, isVisible: resultadosVisible } =
    useScrollAnimation(0.1);
  const { ref: depoimentosRef, isVisible: depoimentosVisible } =
    useScrollAnimation(0.1);
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation(0.1);
  const { ref: contatoRef, isVisible: contatoVisible } =
    useScrollAnimation(0.1);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero sem animação pois já está visível */}
      <Hero />

      {/* Áreas de Atuação com fade-up */}
      <section
        ref={areasRef}
        className={`transform transition-all duration-1000 ease-out ${
          areasVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <AreasDeAtuacao />
      </section>

      {/* Sobre com slide-in da esquerda */}
      <section
        ref={sobreRef}
        className={`transform transition-all duration-1000 ease-out delay-100 ${
          sobreVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-10 opacity-0"
        }`}
      >
        <Sobre />
      </section>

      {/* Resultados com scale */}
      <section
        ref={resultadosRef}
        className={`transform transition-all duration-1000 ease-out delay-200 ${
          resultadosVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <Resultados />
      </section>

      {/* Depoimentos com slide-in da direita */}
      <section
        ref={depoimentosRef}
        className={`transform transition-all duration-1000 ease-out delay-300 ${
          depoimentosVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-10 opacity-0"
        }`}
      >
        <Depoimentos />
      </section>

      {/* FAQ com fade-up */}
      <section
        ref={faqRef}
        className={`transform transition-all duration-1000 ease-out delay-400 ${
          faqVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <FAQ />
      </section>

      {/* Contato com slide-in da esquerda */}
      <section
        ref={contatoRef}
        className={`transform transition-all duration-1000 ease-out delay-500 ${
          contatoVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-10 opacity-0"
        }`}
      >
        <Contato />
      </section>

      <Footer />
    </main>
  );
}
