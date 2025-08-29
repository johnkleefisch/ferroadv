"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Depoimentos() {
  const [depoimentoAtivo, setDepoimentoAtivo] = useState(0);

  const depoimentos = [
    {
      nome: "Carlos M.",
      profissao: "Empresário",
      texto:
        "A Dra. Diulliany foi fundamental na minha defesa. Seu profissionalismo e dedicação fizeram toda a diferença. Conseguimos uma absolvição que parecia impossível.",
      avaliacao: 5,
      caso: "Caso de estelionato - Absolvido",
    },
    {
      nome: "Maria S.",
      profissao: "Professora",
      texto:
        "Excelente profissional! Me atendeu com muita humanidade em um momento muito difícil. Sempre disponível para esclarecer dúvidas e muito transparente.",
      avaliacao: 5,
      caso: "Violência doméstica - Medidas protetivas",
    },
    {
      nome: "João P.",
      profissao: "Comerciante",
      texto:
        "Recomendo totalmente! A advogada tem muito conhecimento e experiência. Conseguiu reduzir significativamente minha pena. Muito grato pelo trabalho.",
      avaliacao: 5,
      caso: "Crime de trânsito - Pena reduzida",
    },
    {
      nome: "Ana L.",
      profissao: "Autônoma",
      texto:
        "Profissional excepcional! Me orientou em cada etapa do processo com muita paciência. O resultado foi melhor do que eu esperava.",
      avaliacao: 5,
      caso: "Injúria e calúnia - Processo arquivado",
    },
    {
      nome: "Roberto F.",
      profissao: "Engenheiro",
      texto:
        "Atendimento nota 10! Sempre muito atenciosa e dedicada. Conseguiu resolver meu caso de forma rápida e eficiente. Recomendo sem hesitar.",
      avaliacao: 5,
      caso: "Apropriação indébita - Acordo extrajudicial",
    },
  ];

  const nextDepoimento = () => {
    setDepoimentoAtivo((prev) => (prev + 1) % depoimentos.length);
  };

  const prevDepoimento = () => {
    setDepoimentoAtivo((prev) =>
      prev === 0 ? depoimentos.length - 1 : prev - 1
    );
  };

  return (
    <section id="depoimentos" className="bg-section-b py-20">
      <div className="container-default">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é o melhor indicador da qualidade
            dos nossos serviços jurídicos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Depoimento Principal */}
          <div className="lg:col-span-2 animate-fade-in-up animate-delay-200">
            <div className="card-glass p-8 lg:p-10 relative">
              <div className="flex items-center mb-8">
                <div className="bg-accent/20 p-3 rounded-2xl mr-6">
                  <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-accent fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-primary leading-relaxed mb-8 font-medium">
                &ldquo;{depoimentos[depoimentoAtivo].texto}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-primary text-lg">
                    {depoimentos[depoimentoAtivo].nome}
                  </div>
                  <div className="text-secondary font-medium">
                    {depoimentos[depoimentoAtivo].profissao}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-accent font-semibold">
                    {depoimentos[depoimentoAtivo].caso}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevDepoimento}
                  className="bg-accent/20 hover:bg-accent/30 p-2 rounded-full transition-all duration-300 focus-visible"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="h-5 w-5 text-accent" />
                </button>
                <button
                  onClick={nextDepoimento}
                  className="bg-accent/20 hover:bg-accent/30 p-2 rounded-full transition-all duration-300 focus-visible"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="h-5 w-5 text-accent" />
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Depoimentos */}
          <div className="space-y-4 animate-fade-in-up animate-delay-300">
            {depoimentos.map((depoimento, index) => (
              <button
                key={index}
                onClick={() => setDepoimentoAtivo(index)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 focus-visible ${
                  index === depoimentoAtivo
                    ? "bg-accent text-white shadow-xl"
                    : "bg-white/10 backdrop-blur-md text-primary hover:bg-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold">{depoimento.nome}</div>
                  <div className="flex">
                    {[...Array(depoimento.avaliacao)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-current fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
                <div
                  className={`text-sm font-medium ${
                    index === depoimentoAtivo
                      ? "text-white/90"
                      : "text-secondary"
                  }`}
                >
                  {depoimento.profissao}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Estatísticas de Satisfação */}
        <div className="card-glass p-8 lg:p-12 animate-fade-in-up animate-delay-400">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-playfair group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-secondary font-semibold uppercase tracking-wide text-sm">
                Clientes Satisfeitos
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-playfair group-hover:scale-110 transition-transform duration-300">
                4.9/5
              </div>
              <div className="text-secondary font-semibold uppercase tracking-wide text-sm">
                Avaliação Média
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-playfair group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-secondary font-semibold uppercase tracking-wide text-sm">
                Recomendariam
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-playfair group-hover:scale-110 transition-transform duration-300">
                24h
              </div>
              <div className="text-secondary font-semibold uppercase tracking-wide text-sm">
                Tempo de Resposta
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 animate-fade-in-up animate-delay-500">
          <p className="text-sm text-secondary font-medium">
            * Depoimentos reais de clientes. Nomes alterados para preservar a
            privacidade.
          </p>
        </div>
      </div>
    </section>
  );
}
