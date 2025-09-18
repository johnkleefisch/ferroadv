import { Metadata } from "next";
import {
  Phone,
  MessageCircle,
  Award,
  BookOpen,
  Shield,
  Quote,
  FileText,
  Users,
  Target,
  Heart,
  Scale,
  Clock,
  TrendingUp,
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
        {/* Hero Section */}
        <section
          className="relative min-h-[70vh] flex items-center text-white overflow-hidden"
          style={{
            backgroundImage: "url('/images/escritorio-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/90"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#cc8c5d]/20 to-[#f3c793]/10 rounded-full mb-6">
                    <span className="text-[#cc8c5d] text-sm font-medium">
                      Especialista em Direito Criminal
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Dra.{" "}
                    <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                      Diulliany Ferro
                    </span>
                  </h1>

                  <p className="text-xl text-gray-300 leading-relaxed mt-6">
                    Uma trajetória de{" "}
                    <strong className="text-[#cc8c5d]">15 anos</strong> dedicada
                    exclusivamente à defesa criminal com{" "}
                    <strong className="text-[#cc8c5d]">
                      resultados comprovados
                    </strong>
                    .
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700">
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                      15+
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      Anos
                    </div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700">
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                      24h
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      Atendimento
                    </div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700">
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                      95%
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      Sucesso
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5562995292129"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#cc8c5d] to-[#d4956a] hover:from-[#b8794c] hover:to-[#c88759] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>CONVERSAR AGORA</span>
                  </a>
                  <a
                    href="tel:+5562995292129"
                    className="border-2 border-[#cc8c5d] text-[#cc8c5d] hover:bg-gradient-to-r hover:from-[#cc8c5d] hover:to-[#f3c793] hover:text-white hover:border-transparent px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3"
                  >
                    <Phone className="h-5 w-5" />
                    <span>LIGAR AGORA</span>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative max-w-lg mx-auto">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative backdrop-blur-md">
                    <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>
                    <Image
                      src="/images/diulliany-ferro.png"
                      alt="Dra. Diulliany Ferro"
                      fill
                      className="object-cover object-top relative z-10"
                      priority
                    />
                  </div>

                  <div className="absolute bottom-2 right-2 bg-slate-800/80 backdrop-blur-sm rounded-md px-3 py-2 border border-slate-600/50 z-20">
                    <h3 className="font-semibold text-white text-sm">
                      Dra. Diulliany Ferro
                    </h3>
                    <p className="text-accent font-medium text-sm">OAB/GO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formação, Credenciais e Citação */}
        <section
          className="py-20"
          style={{
            background:
              "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Formação e{" "}
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                  Credenciais
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Uma base sólida de conhecimento jurídico aliada à experiência
                prática
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Card Graduação */}
              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group"
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

                {/* Ícone e Título na mesma linha */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                    <BookOpen
                      className="h-7 w-7 text-slate-900"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    Graduação
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-sm font-normal text-white/90 mb-6 leading-relaxed">
                  Formação sólida em Direito com base jurídica completa para
                  atuação na área criminal.
                </p>

                {/* Detalhes da Formação */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Universidade Federal de Goiás
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Bacharel em Direito
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Concluído em 2008
                    </span>
                  </div>
                </div>

                {/* Linha separadora dourada */}
                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />
              </div>

              {/* Card Especialização */}
              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group"
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

                {/* Ícone e Título na mesma linha */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                    <Award
                      className="h-7 w-7 text-slate-900"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    Especialização
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-sm font-normal text-white/90 mb-6 leading-relaxed">
                  Aperfeiçoamento técnico focado exclusivamente no Direito Penal
                  e Processual Penal.
                </p>

                {/* Detalhes da Especialização */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Direito Penal e Processual Penal
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Pós-graduação Lato Sensu
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Concluído em 2010
                    </span>
                  </div>
                </div>

                {/* Linha separadora dourada */}
                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />
              </div>

              {/* Card CDCRIM */}
              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group"
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

                {/* Ícone e Título na mesma linha */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                    <Shield
                      className="h-7 w-7 text-slate-900"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    CDCRIM
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-sm font-normal text-white/90 mb-6 leading-relaxed">
                  Membro ativo da Comissão de Direito Criminal da Ordem dos
                  Advogados do Brasil.
                </p>

                {/* Detalhes do CDCRIM */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Comissão de Direito Criminal
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Membro Ativo OAB/GO
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Participação em estudos técnicos
                    </span>
                  </div>
                </div>

                {/* Linha separadora dourada */}
                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />
              </div>
            </div>

            {/* Citação */}
            <div className="max-w-4xl mx-auto">
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
            </div>
          </div>
        </section>

        {/* Modo de Trabalho */}
        <section
          className="py-20"
          style={{
            background:
              "linear-gradient(135deg, #334154 0%, #10172a 50%, #334154 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Como{" "}
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                  Trabalhamos
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Um processo estruturado e transparente para garantir os melhores
                resultados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1: Primeiro Contato */}
              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group"
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

                {/* Ícone e Título na mesma linha */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                    <MessageCircle
                      className="h-7 w-7 text-slate-900"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    1. Primeiro Contato
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-sm font-normal text-white/90 mb-6 leading-relaxed">
                  Análise inicial do caso, orientações emergenciais e definição
                  da estratégia de defesa mais adequada.
                </p>

                {/* Detalhes */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Consulta gratuita
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Atendimento 24h
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Análise do caso
                    </span>
                  </div>
                </div>

                {/* Linha separadora dourada */}
                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />
              </div>

              {/* Card 2: Plano Jurídico */}
              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group"
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

                {/* Ícone e Título na mesma linha */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                    <FileText
                      className="h-7 w-7 text-slate-900"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    2. Plano Jurídico
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-sm font-normal text-white/90 mb-6 leading-relaxed">
                  Elaboração de estratégia personalizada com cronograma, prazos
                  e expectativas realistas para o caso.
                </p>

                {/* Detalhes */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Estratégia personalizada
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Cronograma detalhado
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Expectativas realistas
                    </span>
                  </div>
                </div>

                {/* Linha separadora dourada */}
                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />
              </div>

              {/* Card 3: Execução */}
              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group"
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

                {/* Ícone e Título na mesma linha */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                    <Scale
                      className="h-7 w-7 text-slate-900"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    3. Execução
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-sm font-normal text-white/90 mb-6 leading-relaxed">
                  Implementação da defesa com petições, recursos, audiências e
                  todas as medidas necessárias.
                </p>

                {/* Detalhes */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Petições e recursos
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Audiências e júri
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Medidas cautelares
                    </span>
                  </div>
                </div>

                {/* Linha separadora dourada */}
                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />
              </div>

              {/* Card 4: Acompanhamento */}
              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group"
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

                {/* Ícone e Título na mesma linha */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                    <Users
                      className="h-7 w-7 text-slate-900"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    4. Acompanhamento
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-sm font-normal text-white/90 mb-6 leading-relaxed">
                  Monitoramento constante do processo com atualizações regulares
                  e suporte contínuo.
                </p>

                {/* Detalhes */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Atualizações regulares
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Suporte contínuo
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Monitoramento total
                    </span>
                  </div>
                </div>

                {/* Linha separadora dourada */}
                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Missão e Pilares */}
        <section
          className="py-20"
          style={{
            background:
              "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nossa{" "}
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                  Missão
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Defender os direitos fundamentais com excelência técnica, ética
                profissional e dedicação total, garantindo que cada cliente
                receba a melhor defesa possível em momentos críticos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Ética e Integridade */}
              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group"
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

                {/* Ícone e Título na mesma linha */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                    <Shield
                      className="h-7 w-7 text-slate-900"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    Ética e Integridade
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-sm font-normal text-white/90 mb-6 leading-relaxed">
                  Conduta pautada pelos mais altos padrões éticos, sempre
                  respeitando o sigilo profissional e a dignidade do cliente.
                </p>

                {/* Detalhes */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Padrões éticos rigorosos
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Sigilo profissional absoluto
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Dignidade do cliente
                    </span>
                  </div>
                </div>

                {/* Linha separadora dourada */}
                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />
              </div>

              {/* Card 2: Excelência Técnica */}
              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group"
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

                {/* Ícone e Título na mesma linha */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                    <Target
                      className="h-7 w-7 text-slate-900"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    Excelência Técnica
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-sm font-normal text-white/90 mb-6 leading-relaxed">
                  Conhecimento jurídico sólido, atualização constante e
                  estratégias personalizadas para cada caso específico.
                </p>

                {/* Detalhes */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Conhecimento jurídico sólido
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Atualização constante
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Estratégias personalizadas
                    </span>
                  </div>
                </div>

                {/* Linha separadora dourada */}
                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />
              </div>

              {/* Card 3: Compromisso Humano */}
              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group"
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

                {/* Ícone e Título na mesma linha */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                    <Heart
                      className="h-7 w-7 text-slate-900"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    Compromisso Humano
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-sm font-normal text-white/90 mb-6 leading-relaxed">
                  Atendimento humanizado, disponibilidade integral e
                  acompanhamento dedicado em todos os momentos.
                </p>

                {/* Detalhes */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Atendimento humanizado
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Disponibilidade integral
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#cc8c5d" }}
                    />
                    <span className="text-sm font-normal text-white/90">
                      Acompanhamento dedicado
                    </span>
                  </div>
                </div>

                {/* Linha separadora dourada */}
                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-[#cc8c5d] via-[#d49968] to-[#f3c793] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sua Defesa Merece o Melhor
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Em momentos críticos, você precisa de uma advocacia que combine
              experiência, competência técnica e dedicação total.{" "}
              <strong>A consulta inicial é gratuita.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href="tel:+5562995292129"
                className="bg-white text-[#cc8c5d] px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-3 text-lg shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>(62) 99529-2129</span>
              </a>
              <a
                href="https://wa.me/5562995292129"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-lg shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="text-white/80">
              <p className="text-sm">
                📞 Atendimento 24 horas para emergências
                <br />
                💬 Primeira consulta gratuita e confidencial
                <br />
                ⚖️ Acompanhamento completo do seu processo
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
