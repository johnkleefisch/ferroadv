"use client";

import { Star, Quote } from "lucide-react";
import { startWhatsappConversation } from "@/utils/whatsapp";
import { acionarTelefone } from "@/utils/telefone";

export default function Depoimentos() {
  const depoimentos = [
    {
      nome: "J. Silva",
      profissao: "",
      texto:
        "Profissional extremamente competente e dedicada. A Dra. Diulliany foi essencial para a resolução do meu processo com um resultado positivo. Recomendo fortemente.",
      avaliacao: 5,
    },
    {
      nome: "M. A. Pereira",
      profissao: "",
      texto:
        "Recebi um atendimento humano, sigiloso e muito técnico. Senti-me seguro e amparado durante todo o processo criminal. Gratidão eterna pela dedicação.",
      avaliacao: 5,
    },
    {
      nome: "R. S. Ferreira",
      profissao: "",
      texto:
        "A agilidade e o conhecimento técnico da Dra. foram impressionantes. Conseguiu minha liberdade em tempo recorde. Não tenho palavras para agradecer tamanha dedicação.",
      avaliacao: 5,
    },
    {
      nome: "L. C. Machado",
      profissao: "",
      texto:
        "Desde o primeiro contato na delegacia até o final do processo, a Dra. demonstrou profissionalismo ímpar. Recomendo de olhos fechados para qualquer caso criminal.",
      avaliacao: 5,
    },
    {
      nome: "A. B. Bastos",
      profissao: "",
      texto:
        "Uma advogada que realmente luta pelo cliente. Transparente, honesta e incansável na busca pela justiça. Fez toda a diferença no meu caso difícil e complexo.",
      avaliacao: 5,
    },
    {
      nome: "E. Gomes",
      profissao: "",
      texto:
        "Tive meu caso arquivado graças à atuação brilhante da Dra. Diulliany. Sua estratégia de defesa foi impecável. Sou muito grato pelo excelente resultado obtido.",
      avaliacao: 5,
    },
  ];

  return (
    <section
      id="depoimentos"
      className="font-sans"
      style={{
        background:
          "linear-gradient(135deg, #334154 0%, #10172a 50%, #334154 100%)",
      }}
    >
      <div className="container-default">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O Que Dizem{" "}
            <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent">
              Nossos Clientes
            </span>
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
                      "linear-gradient(135deg, #cc8c5d 0%, #e6b07a 100%)",
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
                  <button
                    onClick={() => acionarTelefone()}
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
