import { Star, Quote } from "lucide-react";

export default function Depoimentos() {
  const depoimentos = [
    {
      nome: "Carlos M.",
      profissao: "Empresário",
      texto:
        "A Dra. Diulliany foi fundamental na minha defesa. Seu profissionalismo e dedicação fizeram toda a diferença. Conseguimos uma absolvição que parecia impossível.",
      avaliacao: 5,
    },
    {
      nome: "Maria S.",
      profissao: "Professora",
      texto:
        "Excelente profissional! Me atendeu com muita humanidade em um momento muito difícil. Sempre disponível para esclarecer dúvidas e muito transparente.",
      avaliacao: 5,
    },
    {
      nome: "João P.",
      profissao: "Comerciante",
      texto:
        "Recomendo totalmente! A advogada tem muito conhecimento e experiência. Conseguiu reduzir significativamente minha pena. Muito grato pelo trabalho.",
      avaliacao: 5,
    },
    {
      nome: "Ana L.",
      profissao: "Autônoma",
      texto:
        "Profissional excepcional! Me orientou em cada etapa do processo com muita paciência. O resultado foi melhor do que eu esperava.",
      avaliacao: 5,
    },
    {
      nome: "Roberto F.",
      profissao: "Engenheiro",
      texto:
        "Atendimento nota 10! Sempre muito atenciosa e dedicada. Conseguiu resolver meu caso de forma rápida e eficiente. Recomendo sem hesitar.",
      avaliacao: 5,
    },
    {
      nome: "Luciana C.",
      profissao: "Advogada",
      texto:
        "Uma referência no Direito Criminal. Técnica impecável e estratégia brilhante. Recomendo para qualquer colega que precise de uma especialista.",
      avaliacao: 5,
    },
  ];

  return (
    <section
      id="depoimentos"
      className="py-20 font-sans"
      style={{
        background:
          "linear-gradient(135deg, #334154 0%, #10172a 50%, #334154 100%)",
      }}
    >
      <div className="container-default">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg font-light text-white max-w-4xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é o melhor indicador da qualidade
            dos nossos serviços jurídicos
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group animate-fade-in-up"
              style={{
                backgroundColor: "#242b38",
                background: `
                  linear-gradient(135deg, 
                    rgba(204, 140, 93, 0.03) 0%, 
                    rgba(204, 140, 93, 0.01) 25%, 
                    transparent 50%
                  ),
                  #242b38
                `,
                border: "1px solid rgba(204, 140, 93, 0.08)",
                boxShadow: `
                  0 4px 20px rgba(0, 0, 0, 0.25),
                  inset 0 1px 0 rgba(204, 140, 93, 0.05)
                `,
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Efeito de Brilho Superior Esquerdo */}
              <div
                className="absolute top-0 left-0 w-24 h-24 pointer-events-none opacity-15"
                style={{
                  background:
                    "radial-gradient(circle at 0% 0%, rgba(204, 140, 93, 0.15) 0%, transparent 70%)",
                }}
              />

              {/* Ícone de aspas */}
              <div className="flex items-center mb-6 relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #cc8c5d 0%, #b8794c 100%)",
                  }}
                >
                  <Quote className="h-6 w-6 text-slate-900" strokeWidth={1.5} />
                </div>
                <div className="flex ml-auto">
                  {[...Array(depoimento.avaliacao)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-accent fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              {/* Texto do depoimento */}
              <blockquote className="text-sm font-normal text-white/90 mb-6 leading-relaxed">
                &ldquo;{depoimento.texto}&rdquo;
              </blockquote>

              {/* Linha separadora dourada */}
              <div
                className="w-full h-px mb-6"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                  opacity: 0.3,
                }}
              />

              {/* Autor */}
              <div className="relative z-10">
                <div className="font-bold text-white text-base">
                  {depoimento.nome}
                </div>
                <div className="text-white/70 text-sm">
                  {depoimento.profissao}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas de Satisfação */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div
            className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 group animate-fade-in-up animate-delay-700"
            style={{
              backgroundColor: "#242b38",
              background: `
                linear-gradient(135deg, 
                  rgba(204, 140, 93, 0.03) 0%, 
                  rgba(204, 140, 93, 0.01) 25%, 
                  transparent 50%
                ),
                #242b38
              `,
              border: "1px solid rgba(204, 140, 93, 0.08)",
              boxShadow: `
                0 4px 20px rgba(0, 0, 0, 0.25),
                inset 0 1px 0 rgba(204, 140, 93, 0.05)
              `,
            }}
          >
            <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-sans group-hover:scale-110 transition-transform duration-300">
              98%
            </div>
            <div className="text-white/70 font-semibold uppercase tracking-wide text-sm">
              Clientes Satisfeitos
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 group animate-fade-in-up animate-delay-800"
            style={{
              backgroundColor: "#242b38",
              background: `
                linear-gradient(135deg, 
                  rgba(204, 140, 93, 0.03) 0%, 
                  rgba(204, 140, 93, 0.01) 25%, 
                  transparent 50%
                ),
                #242b38
              `,
              border: "1px solid rgba(204, 140, 93, 0.08)",
              boxShadow: `
                0 4px 20px rgba(0, 0, 0, 0.25),
                inset 0 1px 0 rgba(204, 140, 93, 0.05)
              `,
            }}
          >
            <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-sans group-hover:scale-110 transition-transform duration-300">
              4.9/5
            </div>
            <div className="text-white/70 font-semibold uppercase tracking-wide text-sm">
              Avaliação Média
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 group animate-fade-in-up animate-delay-900"
            style={{
              backgroundColor: "#242b38",
              background: `
                linear-gradient(135deg, 
                  rgba(204, 140, 93, 0.03) 0%, 
                  rgba(204, 140, 93, 0.01) 25%, 
                  transparent 50%
                ),
                #242b38
              `,
              border: "1px solid rgba(204, 140, 93, 0.08)",
              boxShadow: `
                0 4px 20px rgba(0, 0, 0, 0.25),
                inset 0 1px 0 rgba(204, 140, 93, 0.05)
              `,
            }}
          >
            <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-sans group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-white/70 font-semibold uppercase tracking-wide text-sm">
              Recomendariam
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 group animate-fade-in-up animate-delay-1000"
            style={{
              backgroundColor: "#242b38",
              background: `
                linear-gradient(135deg, 
                  rgba(204, 140, 93, 0.03) 0%, 
                  rgba(204, 140, 93, 0.01) 25%, 
                  transparent 50%
                ),
                #242b38
              `,
              border: "1px solid rgba(204, 140, 93, 0.08)",
              boxShadow: `
                0 4px 20px rgba(0, 0, 0, 0.25),
                inset 0 1px 0 rgba(204, 140, 93, 0.05)
              `,
            }}
          >
            <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-sans group-hover:scale-110 transition-transform duration-300">
              24h
            </div>
            <div className="text-white/70 font-semibold uppercase tracking-wide text-sm">
              Tempo de Resposta
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in-up animate-delay-1100">
          <p className="text-sm text-white/70 font-medium">
            * Depoimentos reais de clientes. Nomes alterados para preservar a
            privacidade.
          </p>
        </div>
      </div>
    </section>
  );
}
