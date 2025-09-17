"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, ChevronUp, ChevronDown } from "lucide-react";
import { startWhatsappConversation } from "@/utils/whatsapp";

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
            Perguntas{" "}
            <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent">
              Frequentes
            </span>
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
                <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] hover:from-[#b8794c] hover:to-[#d4956a]">
                  {perguntaAberta === index ? (
                    <Minus className="h-4 w-4 text-slate-900 transition-transform duration-300" />
                  ) : (
                    <Plus className="h-4 w-4 text-slate-900 transition-transform duration-300" />
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

        {/* Card CTA sofisticado */}
        <div className="max-w-3xl mx-auto mt-16">
          <div
            className="relative rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 border border-[#cc8c5d]/30 shadow-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #242b38 60%, #cc8c5d1a 100%)",
            }}
          >
            {/* Brilho decorativo */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#cc8c5d]/30 to-transparent rounded-full blur-2xl pointer-events-none"></div>
            {/* Foto da Dra */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#cc8c5d] flex-shrink-0 shadow-lg">
              <img
                src="/images/diulliany-about.webp"
                alt="Dra. Diulliany Ferro"
                className="w-full h-full object-cover scale-150"
                style={{ objectPosition: "center -40%" }}
              />
            </div>
            {/* Conteúdo */}
            <div className="flex-1 text-center">
              {/* Título Chamativo */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-white">Precisa de </span>
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent">
                  defesa criminal especializada?
                </span>
              </h3>
              <p className="text-white/90 text-base mb-4">
                Fale agora com a Dra. Diulliany Ferro e tenha atendimento
                imediato!
              </p>
              {/* Linha decorativa */}
              <div
                className="w-full h-px mb-6"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                  opacity: 0.3,
                }}
              />
              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => startWhatsappConversation()}
                  className="relative bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] hover:from-[#b8794c] hover:to-[#d4a269] text-[#10172a] px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl overflow-hidden group cursor-pointer"
                >
                  <svg
                    className="h-6 w-6 relative z-10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                  </svg>
                  <span className="relative z-10">INICIAR ATENDIMENTO</span>
                </button>
                <div className="relative bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] p-[2px] rounded-lg transition-all duration-300 hover:shadow-lg group">
                  <a
                    href="tel:+5562995292129"
                    className="bg-slate-900 hover:bg-gradient-to-r hover:from-[#cc8c5d] hover:to-[#e6b07a] px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 w-full"
                  >
                    <svg
                      className="h-5 w-5 text-[#cc8c5d] group-hover:text-[#10172a] transition-colors duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.73 3.29a2 2 0 0 1-.45 2.11l-.91.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c1.06.36 2.16.6 3.29.73A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent group-hover:text-[#10172a]">
                      LIGAR AGORA
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
