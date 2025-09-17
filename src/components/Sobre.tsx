"use client";

import { ArrowRight, Scale, CheckCircle, Zap, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { startWhatsappConversation } from "@/utils/whatsapp";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, #334154 0%, #10172a 50%, #334154 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Lado Esquerdo - Foto Principal */}
          <div className="relative min-h-[600px] lg:min-h-full">
            <div className="relative overflow-hidden rounded-3xl h-full">
              <Image
                src="/images/diulliany-about.webp"
                alt="Dra. Diulliany Ferro - Advogada Criminalista"
                fill
                className="object-cover"
                style={{
                  filter: "brightness(0.93)",
                }}
              />

              {/* Overlay gradiente */}
              {/* Gradiente dourado sobre a foto */}
              {/* Gradiente dourado discreto apenas na parte inferior */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(204,140,93,0.00) 0%, rgba(204,140,93,0.10) 60%, rgba(204,140,93,0.18) 100%)",
                }}
              />

              {/* Badge discreto, igual ao do Hero, com nome, título e OAB */}
              <div className="absolute bottom-2 left-2 bg-slate-800/80 backdrop-blur-sm rounded-md px-2 py-1 border border-slate-600/50 z-20">
                <h3 className="font-semibold text-white text-xs">
                  Dra. Diulliany Ferro
                </h3>
                <p className="text-accent font-medium text-xs">OAB/GO 66.387</p>
              </div>

              {/* Pontos de luz dourados nos cantos, igual ao Hero */}
              <div
                className="absolute -top-3 -right-3 w-20 h-20 rounded-full blur-xl"
                style={{ backgroundColor: "rgba(204, 140, 93, 0.2)" }}
              ></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-slate-600/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Lado Direito - Conteúdo */}
          <div className="space-y-8">
            {/* Badge/Tag */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{
                backgroundColor: "rgba(204, 140, 93, 0.1)",
                borderColor: "rgba(204, 140, 93, 0.3)",
                color: "#cc8c5d",
              }}
            >
              <span className="text-sm font-medium">
                Sobre a Dra. Diulliany Ferro
              </span>
            </div>

            {/* Título Principal */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Experiência e{" "}
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent">
                  Dedicação
                </span>
              </h2>
            </div>

            {/* Texto Descritivo */}
            <div className="space-y-4">
              <p className="text-white/90 text-lg leading-relaxed">
                A Dra. Diulliany Ferro é{" "}
                <span className="text-[#cc8c5d] font-semibold">
                  advogada criminalista
                </span>{" "}
                com sólida formação e ampla experiência em{" "}
                <span className="text-[#cc8c5d] font-semibold">
                  Direito Penal
                </span>{" "}
                e{" "}
                <span className="text-[#cc8c5d] font-semibold">
                  Processual Penal
                </span>
                , atuando com seriedade, agilidade e absoluto profissionalismo
                em todas as fases do processo.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                Reconhecida por sua{" "}
                <span className="text-[#cc8c5d] font-semibold">
                  postura firme
                </span>{" "}
                e{" "}
                <span className="text-[#cc8c5d] font-semibold">
                  estratégica
                </span>
                , tem{" "}
                <span className="text-[#cc8c5d] font-semibold">
                  alta taxa de sucesso
                </span>{" "}
                na defesa de seus clientes, tanto em{" "}
                <span className="text-[#cc8c5d] font-semibold">
                  investigações
                </span>{" "}
                quanto em{" "}
                <span className="text-[#cc8c5d] font-semibold">
                  ações penais complexas
                </span>
                .
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                Comprometida com a{" "}
                <span className="text-[#cc8c5d] font-semibold">justiça</span> e{" "}
                <span className="text-[#cc8c5d] font-semibold">ética</span>,
                oferece um{" "}
                <span className="text-[#cc8c5d] font-semibold">
                  atendimento personalizado
                </span>
                , humano e eficiente, sempre focada em{" "}
                <span className="text-[#cc8c5d] font-semibold">
                  resultados concretos
                </span>{" "}
                e na{" "}
                <span className="text-[#cc8c5d] font-semibold">
                  proteção dos direitos fundamentais
                </span>
                .
              </p>
            </div>

            {/* Estatísticas em Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Scale className="h-6 w-6 text-[#cc8c5d]/70" />
                    <div className="text-2xl md:text-3xl font-bold text-[#cc8c5d]">
                      500+
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    <span className="md:hidden">Casos de Sucesso</span>
                    <span className="hidden md:inline">
                      Casos de
                      <br />
                      Sucesso
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-[#cc8c5d]/70" />
                    <div className="text-2xl md:text-3xl font-bold text-[#cc8c5d]">
                      99%
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Clientes Satisfeitos
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-[#cc8c5d]/70" />
                    <div className="text-2xl md:text-3xl font-bold text-[#cc8c5d]">
                      24h
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Atendimento Imediato
                  </div>
                </div>
              </div>
            </div>

            {/* Citação da Advogada */}
            <div className="relative">
              {/* Card principal com efeito glassmorphism */}
              <div
                className="relative rounded-2xl p-6 overflow-hidden"
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
                {/* Efeitos visuais de fundo */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#cc8c5d]/20 to-[#e6b07a]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-slate-600/10 rounded-full blur-2xl"></div>

                {/* Aspas decorativas */}
                <div className="absolute top-2 left-4 text-4xl text-[#cc8c5d]/30 font-serif leading-none">
                  &ldquo;
                </div>

                {/* Conteúdo */}
                <div className="relative z-10 pt-4">
                  <blockquote className="text-lg text-white/95 leading-relaxed mb-4 font-light">
                    Cada cliente que atendo recebe não apenas minha{" "}
                    <span className="text-[#cc8c5d] font-medium">
                      expertise técnica
                    </span>
                    , mas também meu{" "}
                    <span className="text-[#cc8c5d] font-medium">
                      comprometimento pessoal
                    </span>
                    . Acredito que a advocacia criminal vai além das leis - é
                    sobre defender a{" "}
                    <span className="text-[#cc8c5d] font-medium">
                      dignidade humana
                    </span>
                    .
                  </blockquote>

                  <div className="flex items-center justify-end gap-3">
                    {/* Autor */}
                    <cite className="text-base font-semibold text-[#cc8c5d] not-italic">
                      Dra. Diulliany Ferro
                    </cite>

                    {/* Linha decorativa */}
                    <div className="w-8 h-px bg-gradient-to-l from-[#cc8c5d] to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão CTA */}
            <div className="pt-6 flex flex-col sm:flex-row gap-3">
              {/* Botão WhatsApp CTA */}
              <button
                onClick={() => startWhatsappConversation()}
                className="relative bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] hover:from-[#b8794c] hover:to-[#d4a269] text-[#10172a] px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl overflow-hidden group cursor-pointer"
              >
                <WhatsAppIcon className="h-6 w-6 relative z-10" />
                <span className="relative z-10">CONSULTAR ADVOGADA</span>
              </button>

              {/* Botão Saiba Mais */}
              <div className="relative bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] p-[2px] rounded-lg transition-all duration-300 hover:shadow-lg group">
                <Link
                  href="#historia"
                  className="bg-slate-900 hover:bg-gradient-to-r hover:from-[#cc8c5d] hover:to-[#e6b07a] px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 w-full"
                >
                  <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent group-hover:text-[#10172a]">
                    SAIBA MAIS
                  </span>
                  <ArrowRight className="h-5 w-5 text-[#cc8c5d] group-hover:text-[#10172a] transition-colors duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
