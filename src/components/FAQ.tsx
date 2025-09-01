"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(0);

  const faqs = [
    {
      pergunta: "Quando devo procurar um advogado criminalista?",
      resposta:
        "Você deve procurar um advogado criminalista imediatamente quando for intimado, citado ou souber que está sendo investigado. Também em casos de flagrante, prisão preventiva ou quando precisar de orientação sobre questões criminais. A atuação precoce pode ser decisiva para o resultado do caso.",
    },
    {
      pergunta:
        "Qual a diferença entre flagrante, prisão preventiva e prisão temporária?",
      resposta:
        "Prisão em flagrante ocorre durante ou logo após o crime. Prisão preventiva é decretada pelo juiz quando há risco para a ordem pública. Prisão temporária é para investigação, com prazo determinado. Cada tipo tem regras específicas e possibilidades de defesa diferentes.",
    },
    {
      pergunta: "Posso ser defendido mesmo sendo culpado?",
      resposta:
        "Sim! Todo acusado tem direito à defesa, independentemente de culpa. O advogado pode trabalhar para reduzir a pena, buscar benefícios legais, questionar provas, garantir o devido processo legal e assegurar que seus direitos sejam respeitados durante todo o processo.",
    },
    {
      pergunta: "Como funciona o pagamento dos honorários?",
      resposta:
        "Os honorários são definidos conforme a complexidade do caso. Oferecemos consulta inicial gratuita para avaliar a situação. Trabalhamos com parcelamento e diferentes formas de pagamento. O valor é sempre acordado previamente com total transparência.",
    },
    {
      pergunta: "Qual a importância do sigilo profissional?",
      resposta:
        "O sigilo é absoluto e protegido por lei. Tudo que você compartilhar com seu advogado é confidencial e não pode ser revelado. Isso garante que você possa falar abertamente sobre o caso, permitindo uma defesa mais eficaz.",
    },
    {
      pergunta: "Quanto tempo demora um processo criminal?",
      resposta:
        "O tempo varia conforme a complexidade do caso, tipo de crime e instância. Pode durar de alguns meses a alguns anos. Trabalhamos para agilizar o processo dentro das possibilidades legais, sempre informando sobre prazos e etapas.",
    },
    {
      pergunta: "É possível conseguir liberdade provisória?",
      resposta:
        "Sim, em muitos casos é possível. Analisamos os requisitos legais e apresentamos pedido fundamentado ao juiz. A liberdade provisória pode ser concedida com ou sem medidas cautelares, dependendo do caso e das circunstâncias.",
    },
    {
      pergunta: "O que fazer se for intimado para depor na delegacia?",
      resposta:
        "Entre em contato imediatamente com um advogado antes de ir à delegacia. Você tem direito a permanecer em silêncio e ter assistência de advogado. Nunca vá sozinho a um depoimento sem orientação jurídica adequada.",
    },
  ];

  const togglePergunta = (index: number) => {
    setPerguntaAberta(perguntaAberta === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 font-sans"
      style={{
        background:
          "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg font-light text-white max-w-4xl mx-auto leading-relaxed">
            Esclarecemos as principais dúvidas sobre direito criminal e nossos
            serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl transition-all duration-300 group animate-fade-in-up"
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

              <button
                onClick={() => togglePergunta(index)}
                className="w-full px-8 py-6 text-left hover:bg-white/5 transition-all duration-300 flex items-center justify-between focus-visible relative z-10"
                aria-expanded={perguntaAberta === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-white pr-4 text-lg">
                  {faq.pergunta}
                </span>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/10">
                  {perguntaAberta === index ? (
                    <Minus className="h-4 w-4 text-white/70 transition-transform duration-300" />
                  ) : (
                    <Plus className="h-4 w-4 text-white/70 transition-transform duration-300" />
                  )}
                </div>
              </button>

              {perguntaAberta === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-8 pb-6 relative z-10"
                >
                  {/* Linha separadora dourada */}
                  <div
                    className="w-full h-px mb-6"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                      opacity: 0.3,
                    }}
                  />
                  <p className="text-white/90 leading-relaxed text-base">
                    {faq.resposta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-16 p-8 lg:p-12 text-center relative overflow-hidden rounded-2xl transition-all duration-300 group animate-fade-in-up animate-delay-1000"
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
          {/* Efeito de Brilho Superior Esquerdo */}
          <div
            className="absolute top-0 left-0 w-24 h-24 pointer-events-none opacity-15"
            style={{
              background:
                "radial-gradient(circle at 0% 0%, rgba(204, 140, 93, 0.15) 0%, transparent 70%)",
            }}
          />

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
            Não encontrou sua resposta?
          </h3>
          <p className="text-white/90 mb-8 text-lg leading-relaxed relative z-10">
            Entre em contato conosco para uma consulta personalizada. Estamos
            aqui para esclarecer todas as suas dúvidas jurídicas.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 bg-[#cc8c5d] hover:bg-[#b8794c] relative z-10"
          >
            <HelpCircle className="h-5 w-5" />
            <span>Fazer uma Pergunta</span>
          </a>
        </div>
      </div>
    </section>
  );
}
