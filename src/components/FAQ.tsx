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
    {
      pergunta: "Posso recorrer de uma sentença condenatória?",
      resposta:
        "Sim! Você pode recorrer em segunda instância e, em casos específicos, nos tribunais superiores. Analisamos as possibilidades de recurso e as chances de sucesso, sempre trabalhando para reverter ou reduzir condenações.",
    },
    {
      pergunta: "Como é o atendimento em casos de emergência?",
      resposta:
        "Oferecemos atendimento 24 horas para emergências como prisões em flagrante, mandados de busca e apreensão, ou situações urgentes. Entre em contato pelo telefone de emergência e terá orientação imediata.",
    },
  ];

  const togglePergunta = (index: number) => {
    setPerguntaAberta(perguntaAberta === index ? null : index);
  };

  return (
    <section id="faq" className="bg-section-a py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle
              className="h-12 w-12 text-accent mr-4"
              aria-hidden="true"
            />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">
              Perguntas Frequentes
            </h2>
          </div>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Esclarecemos as principais dúvidas sobre direito criminal e nossos
            serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`card-glass border border-white/10 overflow-hidden animate-fade-in-up animate-delay-${
                index * 100
              }`}
            >
              <button
                onClick={() => togglePergunta(index)}
                className="w-full px-6 py-6 text-left hover:bg-white/5 transition-all duration-300 flex items-center justify-between focus-visible"
                aria-expanded={perguntaAberta === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-primary pr-4 text-lg">
                  {faq.pergunta}
                </span>
                <div className="bg-accent/20 p-2 rounded-full transition-all duration-300 group">
                  {perguntaAberta === index ? (
                    <Minus className="h-5 w-5 text-accent transition-transform duration-300" />
                  ) : (
                    <Plus className="h-5 w-5 text-accent transition-transform duration-300" />
                  )}
                </div>
              </button>

              {perguntaAberta === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 py-6 bg-white/5 border-t border-white/10 animate-fade-in-up"
                >
                  <p className="text-secondary leading-relaxed text-base">
                    {faq.resposta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 card-glass p-8 lg:p-12 text-center border border-accent/20 animate-fade-in-up animate-delay-1000">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Não encontrou sua resposta?
          </h3>
          <p className="text-secondary mb-8 text-lg leading-relaxed">
            Entre em contato conosco para uma consulta personalizada. Estamos
            aqui para esclarecer todas as suas dúvidas jurídicas.
          </p>
          <a
            href="#contato"
            className="btn-primary inline-flex items-center space-x-3 text-lg group"
          >
            <span>Fazer uma Pergunta</span>
            <HelpCircle
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
