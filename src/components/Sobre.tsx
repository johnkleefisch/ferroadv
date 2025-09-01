import { Users, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

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
                <p className="text-accent font-medium text-xs">
                  OAB/SP [Número]
                </p>
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
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#cc8c5d" }}
              ></div>
              <span className="text-sm font-medium">Sobre a Advogada</span>
            </div>

            {/* Título Principal */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Experiência e{" "}
                <span style={{ color: "#cc8c5d" }}>Dedicação</span>
              </h2>
            </div>

            {/* Texto Descritivo */}
            <div className="space-y-4">
              <p className="text-white/90 text-lg leading-relaxed">
                Com mais de uma década dedicada exclusivamente ao Direito
                Criminal, construí minha carreira baseada em três pilares
                fundamentais:
                <span style={{ color: "#cc8c5d", fontWeight: "600" }}>
                  {" "}
                  conhecimento técnico excepcional
                </span>
                ,
                <span style={{ color: "#cc8c5d", fontWeight: "600" }}>
                  {" "}
                  estratégias personalizadas
                </span>{" "}
                e
                <span style={{ color: "#cc8c5d", fontWeight: "600" }}>
                  {" "}
                  comprometimento total
                </span>{" "}
                com cada cliente.
              </p>

              <p className="text-white/80 text-base leading-relaxed">
                Cada caso é único e merece uma abordagem específica. Por isso,
                desenvolvo estratégias jurídicas sob medida, sempre priorizando
                a proteção dos direitos fundamentais e buscando os melhores
                resultados possíveis.
              </p>
            </div>

            {/* Estatísticas em Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
              <div
                className="text-center p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(204, 140, 93, 0.08)",
                  border: "1px solid rgba(204, 140, 93, 0.15)",
                }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#cc8c5d" }}
                >
                  500+
                </div>
                <div className="text-white/90 text-sm font-medium">
                  Casos de Sucesso
                </div>
              </div>

              <div
                className="text-center p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(204, 140, 93, 0.08)",
                  border: "1px solid rgba(204, 140, 93, 0.15)",
                }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#cc8c5d" }}
                >
                  10+
                </div>
                <div className="text-white/90 text-sm font-medium">
                  Especialista na Área Criminal
                </div>
              </div>

              <div
                className="text-center p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(204, 140, 93, 0.08)",
                  border: "1px solid rgba(204, 140, 93, 0.15)",
                }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#cc8c5d" }}
                >
                  99%
                </div>
                <div className="text-white/90 text-sm font-medium">
                  Clientes Satisfeitos
                </div>
              </div>
            </div>

            {/* Citação da Advogada */}
            <div
              className="p-6 rounded-2xl relative"
              style={{
                backgroundColor: "rgba(204, 140, 93, 0.06)",
                border: "1px solid rgba(204, 140, 93, 0.12)",
              }}
            >
              <blockquote className="text-lg italic text-white/95 mb-4 leading-relaxed">
                "Cada cliente que atendo recebe não apenas minha expertise
                técnica, mas também meu comprometimento pessoal. Acredito que a
                advocacia criminal vai além das leis - é sobre defender a
                dignidade humana e garantir justiça."
              </blockquote>
              <cite
                className="text-base font-semibold"
                style={{ color: "#cc8c5d" }}
              >
                — Dra. Diulliany Ferro
              </cite>
            </div>

            {/* Botão CTA */}
            <div className="pt-6 flex flex-col sm:flex-row gap-3">
              {/* Botão WhatsApp CTA */}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 bg-[#cc8c5d] hover:bg-[#b8794c]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 14.487c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.21-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.21 5.077 4.374.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25 21.75 6.615 21.75 12z"
                  />
                </svg>
                <span>CONSULTAR ADVOGADA</span>
              </a>
              {/* Botão Conheça Minha História */}
              <a
                href="#historia"
                className="border-2 border-[#cc8c5d] text-accent hover:text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 hover:bg-[#cc8c5d]"
              >
                <ArrowRight className="h-5 w-5" />
                <span>SAIBA MAIS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
