import { Metadata } from "next";
import {
  Quote,
  Phone,
  MessageCircle,
  Award,
  BookOpen,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre - Dra. Diulliany Ferro | Advocacia Criminal Especializada",
  description:
    "Conheça a trajetória, formação e experiência da Dra. Diulliany Ferro. Mais de 15 anos dedicados à advocacia criminal com resultados excepcionais.",
  keywords: [
    "Dra. Diulliany Ferro",
    "advocacia criminal",
    "advogada criminalista",
    "experiência advocacia",
    "formação jurídica",
    "OAB",
    "CDCRIM",
  ],
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-900">
        {/* 1. Hero Section Minimalista */}
        <section
          className="relative py-20 lg:py-32 overflow-hidden"
          style={{
            backgroundImage: "url('/images/escritorio-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/85"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Conteúdo Principal */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                    Dra.{" "}
                    <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                      Diulliany Ferro
                    </span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent font-semibold mb-8">
                    Especialista em Defesa Criminal
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    <strong>15 anos de dedicação exclusiva</strong> ao Direito
                    Criminal com expertise em casos complexos e resultados
                    comprovados.
                  </p>

                  {/* Citação da Advogada */}
                  <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-[#cc8c5d]/20 mb-8">
                    <Quote className="h-8 w-8 text-[#cc8c5d] mb-4" />
                    <p className="text-lg text-gray-200 italic leading-relaxed mb-4">
                      &ldquo;Cada cliente merece uma defesa técnica de
                      excelência. Minha missão é garantir os melhores resultados
                      com ética e dedicação total.&rdquo;
                    </p>
                    <p className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent font-bold">
                      - Dra. Diulliany Ferro, OAB/GO
                    </p>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5562995292129"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] hover:from-[#b8794c] hover:to-[#d4956a] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 text-center flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-6 w-6" />
                    <span>Conversar Agora</span>
                  </a>
                  <a
                    href="#qualificacoes"
                    className="border-2 border-[#cc8c5d] text-[#cc8c5d] hover:bg-gradient-to-r hover:from-[#cc8c5d] hover:to-[#f3c793] hover:text-white hover:border-transparent px-8 py-4 rounded-lg font-bold transition-all duration-300 text-center"
                  >
                    Conhecer Experiência
                  </a>
                </div>
              </div>

              {/* Foto Principal */}
              <div className="relative">
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/diulliany-ferro.png"
                      alt="Dra. Diulliany Ferro - Especialista em Direito Criminal"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Elementos decorativos com gradiente */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#cc8c5d]/30 to-[#f3c793]/20 rounded-full blur-lg"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-[#f3c793]/25 to-[#cc8c5d]/30 rounded-full blur-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Expertise Resumida */}
        <section
          id="qualificacoes"
          className="py-20 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                  Expertise
                </span>{" "}
                Especializada
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Formação sólida e dedicação exclusiva ao Direito Criminal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 hover:border-[#cc8c5d]/30 transition-all duration-300 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] p-4 rounded-xl mx-auto mb-6 w-fit shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent mb-4">
                  Especialista Criminal
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Pós-graduação em Direito Penal e 15 anos de experiência
                  exclusiva em defesa criminal
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 hover:border-[#cc8c5d]/30 transition-all duration-300 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] p-4 rounded-xl mx-auto mb-6 w-fit shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent mb-4">
                  Membro CDCRIM
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Participação ativa na Comissão de Direito Criminal da OAB/GO
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 hover:border-[#cc8c5d]/30 transition-all duration-300 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] p-4 rounded-xl mx-auto mb-6 w-fit shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent mb-4">
                  Tribunal do Júri
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ampla experiência em defesas no plenário do júri e casos
                  complexos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Segunda Foto + Sobre */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Segunda Foto */}
              <div className="relative order-2 lg:order-1">
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/diulliany-about.webp"
                      alt="Dra. Diulliany Ferro em seu escritório"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Badge com gradiente */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] p-4 rounded-xl shadow-xl">
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">CDCRIM</div>
                      <div className="text-white text-xs">OAB/GO</div>
                    </div>
                  </div>

                  {/* Efeitos de fundo */}
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-[#cc8c5d]/20 to-[#f3c793]/10 rounded-full blur-2xl"></div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                      Trajetória
                    </span>{" "}
                    Profissional
                  </h2>

                  <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                    <p>
                      Formada em Direito pela{" "}
                      <strong className="text-[#cc8c5d]">
                        Universidade Federal de Goiás
                      </strong>{" "}
                      em 2008, a Dra. Diulliany Ferro dedicou sua carreira
                      exclusivamente ao{" "}
                      <strong className="text-[#cc8c5d]">
                        Direito Criminal
                      </strong>
                      .
                    </p>

                    <p>
                      Com{" "}
                      <strong className="text-[#cc8c5d]">
                        pós-graduação em Direito Penal
                      </strong>{" "}
                      e{" "}
                      <strong className="text-[#cc8c5d]">
                        participação ativa na CDCRIM-OAB/GO
                      </strong>
                      , construiu uma sólida reputação baseada em resultados
                      efetivos e ética profissional.
                    </p>

                    <p>
                      Especialista em{" "}
                      <strong className="text-[#cc8c5d]">
                        Tribunal do Júri
                      </strong>
                      ,{" "}
                      <strong className="text-[#cc8c5d]">Lei de Drogas</strong>{" "}
                      e{" "}
                      <strong className="text-[#cc8c5d]">
                        crimes complexos
                      </strong>
                      , oferece defesa técnica de alto nível com atendimento
                      humanizado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Call to Action Final */}
        <section className="py-20 bg-gradient-to-r from-[#cc8c5d] via-[#d49968] to-[#f3c793]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Defesa Criminal Especializada
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Quando sua liberdade está em risco, você precisa de uma advocacia
              de excelência.
              <br />
              <strong>Consulta inicial gratuita.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+5562995292129"
                className="bg-white text-[#cc8c5d] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-3 text-lg shadow-lg hover:shadow-xl"
              >
                <Phone className="h-6 w-6" />
                <span>(62) 99529-2129</span>
              </a>
              <a
                href="https://wa.me/5562995292129"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-lg shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="text-white/80 text-sm mt-6">
              Atendimento 24h para emergências • Primeira consulta gratuita
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
