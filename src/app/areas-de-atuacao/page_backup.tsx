"use client";

import { Metadata } from "next";
import {
  Phone,
  MessageCircle,
  Users,
  CircleDollarSign,
  Pill,
  Gavel,
  Scale,
  ShieldAlert,
  Shield,
  CheckCircle,
  FileText,
  Clock,
  Award,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Áreas de Atuação - Dra. Diulliany Ferro | Advocacia Criminal",
  description:
    "Conheça todas as áreas de atuação da Dra. Diulliany Ferro. Especializada em crimes contra a pessoa, patrimônio, Lei de Drogas, Habeas Corpus e atendimentos de urgência 24h.",
  keywords: [
    "advogada criminal",
    "crimes contra a pessoa",
    "crimes contra o patrimônio",
    "lei de drogas",
    "habeas corpus",
    "tribunal do júri",
    "atendimento urgência",
    "Goiânia",
    "Dra. Diulliany Ferro",
  ],
};

export default function AreasDeAtuacaoPage() {
  const areas = [
    {
      icon: Users,
      title: "Crimes Contra a Pessoa",
      description:
        "Defesa especializada em crimes que atingem a integridade física, moral e psicológica da pessoa.",
      specialties: [
        "Homicídio",
        "Lesão Corporal",
        "Violência Doméstica (Lei Maria da Penha)",
        "Sequestro",
        "Cárcere Privado",
        "Ameaça",
        "Injúria e Difamação",
        "Calúnia",
      ],
      detailedDescription:
        "Crimes contra a pessoa são aqueles que atingem diretamente a vida, a integridade física, a honra e a liberdade individual. Nossa atuação é focada em uma defesa técnica rigorosa, sempre respeitando a dignidade da pessoa humana e buscando a melhor estratégia para cada caso específico.",
    },
    {
      icon: CircleDollarSign,
      title: "Crimes Contra o Patrimônio",
      description:
        "Atuação em crimes que visam o patrimônio alheio, desde furtos simples até crimes complexos.",
      specialties: [
        "Furto e Roubo",
        "Estelionato",
        "Apropriação Indébita",
        "Receptação",
        "Extorsão",
        "Dano ao Patrimônio",
        "Usurpação",
        "Crimes Digitais",
      ],
      detailedDescription:
        "Os crimes patrimoniais são aqueles que lesam o patrimônio de terceiros. Nossa experiência abrange desde casos simples até esquemas complexos de fraude, sempre com estratégias personalizadas e análise detalhada de cada situação.",
    },
    {
      icon: Pill,
      title: "Lei de Drogas",
      description:
        "Defesa em crimes relacionados ao tráfico e uso de entorpecentes com estratégias diferenciadas.",
      specialties: [
        "Tráfico de Drogas",
        "Porte para Uso",
        "Associação para o Tráfico",
        "Financiamento do Tráfico",
        "Cultivo de Entorpecentes",
        "Crimes Conexos",
        "Desclassificação de Condutas",
        "Redução de Penas",
      ],
      detailedDescription:
        "A Lei 11.343/06 (Lei de Drogas) apresenta nuances importantes que exigem conhecimento especializado. Nossa atuação foca na análise criteriosa dos elementos do tipo penal, buscando sempre a melhor tipificação e as possibilidades de redução de pena ou desclassificação.",
    },
    {
      icon: Gavel,
      title: "Tribunal do Júri",
      description:
        "Atuação especializada em plenário do júri e audiências com estratégias de defesa eficazes.",
      specialties: [
        "Tribunal do Júri",
        "Audiências de Instrução",
        "Sustentação Oral",
        "Interrogatórios",
        "Defesa Prévia",
        "Alegações Finais",
        "Recursos em Júri",
        "Quesitação",
      ],
      detailedDescription:
        "O Tribunal do Júri é um instituto constitucional que exige técnica específica e domínio da oratória jurídica. Nossa experiência em plenário garante uma defesa consistente, sempre respeitando os princípios da ampla defesa e do contraditório.",
    },
    {
      icon: Scale,
      title: "Habeas Corpus",
      description:
        "Medidas de urgência para garantir a liberdade e os direitos fundamentais do cliente.",
      specialties: [
        "Prisão Preventiva",
        "Flagrante",
        "Liberdade Provisória",
        "Relaxamento de Prisão",
        "Medidas Cautelares",
        "Prisão Domiciliar",
        "Excesso de Prazo",
        "Constrangimento Ilegal",
      ],
      detailedDescription:
        "O Habeas Corpus é um remédio constitucional fundamental para garantir a liberdade de locomoção. Nossa atuação é imediata e técnica, sempre priorizando a urgência que esses casos exigem e a proteção dos direitos fundamentais.",
    },
    {
      icon: ShieldAlert,
      title: "Atendimentos de Urgência",
      description:
        "Atendimento imediato 24h para situações que exigem resposta rápida e eficiente.",
      specialties: [
        "Prisão em Flagrante",
        "Acompanhamento em Delegacia",
        "Audiência de Custódia",
        "Medidas Cautelares",
        "Plantão Judiciário",
        "Emergências Criminais",
        "Orientação Imediata",
        "Suporte Familiar",
      ],
      detailedDescription:
        "Situações de urgência na área criminal exigem resposta imediata e conhecimento técnico. Nosso atendimento 24 horas garante que você tenha assistência jurídica no momento em que mais precisa, com orientação clara e ação efetiva.",
    },
  ];

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
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#cc8c5d]/20 to-[#f3c793]/10 rounded-full mb-6">
                <span className="text-[#cc8c5d] text-sm font-medium">
                  Especialização Completa em Direito Criminal
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Áreas de{" "}
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                  Atuação
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                Defendemos nossos clientes em todas as esferas do{" "}
                <strong className="text-[#cc8c5d]">Direito Criminal</strong> com{" "}
                <strong className="text-[#cc8c5d]">excelência técnica</strong> e{" "}
                <strong className="text-[#cc8c5d]">dedicação total</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700">
                  <div className="text-2xl md:text-3xl font-bold text-[#cc8c5d] mb-1">
                    6
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Áreas Principais
                  </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700">
                  <div className="text-2xl md:text-3xl font-bold text-[#cc8c5d] mb-1">
                    24h
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Atendimento
                  </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700">
                  <div className="text-2xl md:text-3xl font-bold text-[#cc8c5d] mb-1">
                    15+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Anos de Experiência
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5562995292129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#cc8c5d] to-[#d4956a] hover:from-[#b8794c] hover:to-[#c88759] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>CONSULTA GRATUITA</span>
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
          </div>
        </section>

        {/* Áreas de Atuação Detalhadas */}
        {areas.map((area, index) => {
          const IconComponent = area.icon;
          const isEven = index % 2 === 0;
          const gradientStyle = isEven
            ? "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)"
            : "linear-gradient(135deg, #334154 0%, #10172a 50%, #334154 100%)";

          return (
            <section
              key={index}
              className="py-20"
              style={{ background: gradientStyle }}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Conteúdo */}
                  <div
                    className={`space-y-8 ${
                      isEven ? "order-1" : "order-2 lg:order-1"
                    }`}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                        <IconComponent
                          className="h-8 w-8 text-slate-900"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {area.title}
                      </h2>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      {area.detailedDescription}
                    </p>

                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-white">
                        Serviços Especializados:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {area.specialties.map((specialty, specIndex) => (
                          <div
                            key={specIndex}
                            className="relative overflow-hidden rounded-xl p-4 transition-all duration-300 group hover:scale-105"
                            style={{
                              backgroundColor: "#242b38",
                              background: `
                                linear-gradient(135deg, 
                                  rgba(204, 140, 93, 0.05) 0%, 
                                  rgba(204, 140, 93, 0.02) 25%, 
                                  transparent 50%
                                ),
                                #242b38
                              `,
                              border: "1px solid rgba(204, 140, 93, 0.15)",
                              boxShadow: `
                                0 2px 10px rgba(0, 0, 0, 0.15),
                                inset 0 1px 0 rgba(204, 140, 93, 0.08)
                              `,
                            }}
                          >
                            {/* Efeito de Brilho */}
                            <div
                              className="absolute top-0 left-0 w-16 h-16 pointer-events-none opacity-10"
                              style={{
                                background:
                                  "radial-gradient(circle at 0% 0%, rgba(204, 140, 93, 0.2) 0%, transparent 70%)",
                              }}
                            />

                            <div className="flex items-center space-x-3 relative z-10">
                              <CheckCircle className="h-5 w-5 text-[#cc8c5d] flex-shrink-0" />
                              <span className="text-white font-medium text-sm">
                                {specialty}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <a
                        href="https://wa.me/5562995292129"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#cc8c5d] to-[#d4956a] hover:from-[#b8794c] hover:to-[#c88759] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Consultar sobre este caso</span>
                      </a>
                    </div>
                  </div>

                  {/* Card Lateral */}
                  <div
                    className={`${isEven ? "order-2" : "order-1 lg:order-2"}`}
                  >
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

                      {/* Ícone e Título */}
                      <div className="text-center mb-6 relative z-10">
                        <div className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                          <IconComponent
                            className="h-10 w-10 text-slate-900"
                            strokeWidth={1.5}
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-white font-inter">
                          {area.title}
                        </h3>
                      </div>

                      {/* Descrição */}
                      <p className="text-sm font-normal text-white/90 mb-6 leading-relaxed text-center">
                        {area.description}
                      </p>

                      {/* Lista de Especialidades */}
                      <div className="space-y-3 mb-8">
                        {area.specialties
                          .slice(0, 4)
                          .map((specialty, specIndex) => (
                            <div key={specIndex} className="flex items-center">
                              <div
                                className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                                style={{ backgroundColor: "#cc8c5d" }}
                              />
                              <span className="text-sm font-normal text-white/90">
                                {specialty}
                              </span>
                            </div>
                          ))}
                        {area.specialties.length > 4 && (
                          <div className="flex items-center">
                            <div
                              className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                              style={{ backgroundColor: "#cc8c5d" }}
                            />
                            <span className="text-sm font-normal text-white/90">
                              E mais {area.specialties.length - 4}{" "}
                              especialidades...
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Linha separadora dourada */}
                      <div
                        className="w-full h-px mb-6"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                          opacity: 0.3,
                        }}
                      />

                      {/* CTA WhatsApp Centralizado */}
                      <div className="flex justify-center relative z-10">
                        <a
                          href="https://wa.me/5562995292129"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-white hover:text-white/80 font-normal text-sm transition-colors duration-300 group"
                        >
                          <svg
                            className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                            fill="#25D366"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                          <span>Conversar sobre este caso</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Card Grande - Crimes Contra a Vida */}
        <section
          className="py-20"
          style={{
            background:
              "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Container Principal - Card Grande */}
            <div
              className="rounded-2xl p-12"
              style={{
                backgroundColor: "#1e2632",
                border: "1px solid rgba(204, 140, 93, 0.15)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* COLUNA LADO ESQUERDO */}
                <div className="space-y-8">
                  {/* Ícone + Título do Macro Serviço */}
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center border-4"
                      style={{
                        backgroundColor: "#cc8c5d",
                        borderColor: "#cc8c5d",
                      }}
                    >
                      <Shield
                        className="h-8 w-8 text-slate-900"
                        strokeWidth={2}
                      />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      Crimes Contra a Vida
                    </h2>
                  </div>

                  {/* Pequeno parágrafo falando do que se trata */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Defesa especializada em crimes contra a pessoa com
                    estratégias técnicas avançadas, abrangendo desde homicídios
                    até lesões corporais e ameaças.
                  </p>

                  {/* Abordagem e estratégia da advogada */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-3">
                        Abordagem:
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Análise detalhada das provas, construção de tese
                        defensiva sólida e estratégia personalizada para cada
                        caso, sempre buscando a melhor defesa técnica possível.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-white font-bold text-xl mb-3">
                        Resultados:
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ color: "#cc8c5d" }}
                      >
                        95% de sucesso em casos de legítima defesa e 90% em
                        redução de penas, com mais de 15 anos de experiência na
                        área.
                      </p>
                    </div>
                  </div>
                </div>

                {/* COLUNA LADO DIREITO */}
                <div className="space-y-8">
                  {/* Serviços Especializados */}
                  <div>
                    <h3 className="text-white font-bold text-xl mb-6">
                      Serviços Especializados
                    </h3>

                    {/* Bullet points dentro de cards dos serviços */}
                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {[
                        "Homicídio doloso e culposo",
                        "Tentativa de homicídio",
                        "Lesão corporal grave e gravíssima",
                        "Ameaça e perseguição",
                        "Sequestro e cárcere privado",
                        "Rixa e vias de fato",
                      ].map((service, index) => (
                        <div
                          key={index}
                          className="rounded-lg p-4 flex items-center space-x-3"
                          style={{
                            backgroundColor: "#242b38",
                          }}
                        >
                          {/* Bullet Point - Check Circle */}
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: "#cc8c5d" }}
                          >
                            <CheckCircle
                              className="h-4 w-4 text-slate-900"
                              strokeWidth={2}
                            />
                          </div>
                          {/* Nome do Serviço */}
                          <span className="text-white font-medium">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outro card abaixo com CTA */}
                  <div
                    className="rounded-lg p-6"
                    style={{
                      backgroundColor: "#242b38",
                      border: "1px solid rgba(204, 140, 93, 0.2)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      {/* Texto à Esquerda */}
                      <div className="flex-1 pr-4">
                        <h4 className="text-white font-bold text-lg mb-2">
                          Precisa de ajuda nesta área?
                        </h4>
                        <p className="text-gray-300">
                          Agende uma consulta para análise personalizada do seu
                          caso.
                        </p>
                      </div>

                      {/* Botão à Direita */}
                      <a
                        href="https://wa.me/5562995292129"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg font-semibold text-slate-900 flex items-center space-x-2 transition-all duration-300 hover:opacity-90 whitespace-nowrap"
                        style={{ backgroundColor: "#cc8c5d" }}
                      >
                        <span>Consultar</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Diferenciais */}
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
                Por que{" "}
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                  Escolher
                </span>{" "}
                Nossa Advocacia?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Diferenciais que fazem a diferença na sua defesa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group text-center"
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
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                  <Award className="h-8 w-8 text-slate-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Experiência Comprovada
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Mais de 15 anos de atuação exclusiva em Direito Criminal com
                  resultados excepcionais em todos os tipos de casos.
                </p>
              </div>

              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group text-center"
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
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                  <Clock className="h-8 w-8 text-slate-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Atendimento 24 Horas
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Emergências criminais não esperam. Nosso atendimento está
                  disponível 24h para quando você mais precisar.
                </p>
              </div>

              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group text-center"
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
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                  <FileText
                    className="h-8 w-8 text-slate-900"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Estratégias Personalizadas
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Cada caso é único. Desenvolvemos estratégias específicas
                  baseadas nas particularidades de sua situação.
                </p>
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
              Precisa de Defesa Criminal?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Não espere mais. Em questões criminais, o tempo é fundamental.{" "}
              <strong>A primeira consulta é gratuita e confidencial.</strong>
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
      </div>
      <Footer />
    </>
  );
}
