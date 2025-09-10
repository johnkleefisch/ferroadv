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
        "Calúnia, Difamação e Injúria",
        "Constrangimento Ilegal",
      ],
    },
    {
      icon: CircleDollarSign,
      title: "Crimes Contra o Patrimônio",
      description:
        "Atuação em defesas relacionadas a crimes que violam o patrimônio material e imaterial.",
      specialties: [
        "Furto",
        "Roubo",
        "Extorsão",
        "Apropriação Indébita",
        "Estelionato",
        "Receptação",
        "Dano ao Patrimônio",
        "Invasão de Domicílio",
      ],
    },
    {
      icon: Pill,
      title: "Lei de Drogas (Lei 11.343/06)",
      description:
        "Defesa técnica especializada em crimes relacionados ao tráfico e porte de entorpecentes.",
      specialties: [
        "Tráfico de Drogas",
        "Porte para Consumo Pessoal",
        "Associação para o Tráfico",
        "Financiamento do Tráfico",
        "Cultivo de Cannabis",
        "Prescrição Inadequada",
        "Desacato de Substâncias",
        "Lavagem de Dinheiro do Tráfico",
      ],
    },
    {
      icon: Scale,
      title: "Habeas Corpus",
      description:
        "Impetração de Habeas Corpus preventivo e liberatório para proteção da liberdade de locomoção.",
      specialties: [
        "HC Preventivo",
        "HC Liberatório",
        "HC de Ofício",
        "Relaxamento de Prisão",
        "Prisão Ilegal",
        "Excesso de Prazo",
        "Direito de Ir e Vir",
        "Constrangimento Ilegal",
      ],
    },
    {
      icon: Gavel,
      title: "Tribunal do Júri",
      description:
        "Defesa no Tribunal do Júri com técnicas avançadas de oratória e estratégia processual.",
      specialties: [
        "Homicídio Doloso",
        "Feminicídio",
        "Latrocínio",
        "Infanticídio",
        "Tentativa de Homicídio Qualificado",
        "Júri Popular",
        "Quesitação",
        "Recursos em Júri",
      ],
    },
    {
      icon: ShieldAlert,
      title: "Atendimento de Urgência 24h",
      description:
        "Assistência jurídica imediata em situações emergenciais que exigem resposta rápida.",
      specialties: [
        "Prisão em Flagrante",
        "Audiência de Custódia",
        "Medidas Cautelares",
        "Busca e Apreensão",
        "Operações Policiais",
        "Plantão Judiciário",
        "Acompanhamento em Delegacia",
        "Orientação Familiar",
      ],
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
                    15+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Anos de Experiência
                  </div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700">
                  <div className="text-2xl md:text-3xl font-bold text-[#cc8c5d] mb-1">
                    24h
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Atendimento Urgência
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:62995292129"
                  className="bg-white text-[#cc8c5d] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Phone className="h-5 w-5" />
                  <span>(62) 99529-2129</span>
                </a>
                <a
                  href="https://wa.me/5562995292129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Principal - Cards com Glassmorphism */}
        <section className="py-20 relative">
          {/* Background com gradiente */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Título da Seção */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Áreas de <span className="text-[#cc8c5d]">Especialização</span>
              </h2>
              <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
                Defendemos nossos clientes com excelência técnica em todas as
                áreas do Direito Criminal
              </p>
            </div>

            {/* Grid de Cards com Glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group glass-effect rounded-xl p-6 hover-glow transition-all duration-300 hover:border-[#cc8c5d]/30"
                  >
                    {/* Cabeçalho do Card */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#cc8c5d] to-[#f3c793] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-[#10172a]" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#cc8c5d] transition-colors">
                        {area.title}
                      </h3>
                    </div>

                    {/* Descrição */}
                    <p className="text-[#94a3b8] mb-6 leading-relaxed">
                      {area.description}
                    </p>

                    {/* Lista de Especialidades */}
                    <div className="space-y-2 mb-6">
                      {area.specialties
                        .slice(0, 4)
                        .map((specialty, specIndex) => (
                          <div
                            key={specIndex}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-[#cc8c5d] rounded-full"></div>
                            <span className="text-sm text-[#94a3b8]">
                              {specialty}
                            </span>
                          </div>
                        ))}
                      {area.specialties.length > 4 && (
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#cc8c5d] rounded-full"></div>
                          <span className="text-sm text-[#94a3b8]">
                            +{area.specialties.length - 4} outros serviços
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Rodapé com link */}
                    <div className="pt-4 border-t border-[#cc8c5d]/20">
                      <a
                        href="https://wa.me/5562995292129"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#cc8c5d] hover:text-[#f3c793] font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                      >
                        Consultar sobre esta área
                        <Briefcase className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Card Destacado - Crimes Contra a Vida */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="glass-effect rounded-2xl p-8 md:p-12 hover-glow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Coluna Esquerda */}
                  <div className="space-y-8">
                    {/* Ícone + Título do Macro Serviço */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#cc8c5d] to-[#f3c793] rounded-lg flex items-center justify-center">
                        <Shield
                          className="h-8 w-8 text-[#10172a]"
                          strokeWidth={2}
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-white">
                        Crimes Contra a Vida
                      </h2>
                    </div>

                    {/* Pequeno parágrafo */}
                    <p className="text-[#94a3b8] leading-relaxed text-lg">
                      Defesa especializada em crimes contra a pessoa com
                      estratégias técnicas avançadas, abrangendo desde
                      homicídios até lesões corporais e ameaças.
                    </p>

                    {/* Abordagem e estratégia */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-3">
                          Abordagem:
                        </h3>
                        <p className="text-[#94a3b8] leading-relaxed">
                          Análise detalhada das provas, construção de tese
                          defensiva sólida e estratégia personalizada para cada
                          caso, sempre buscando a melhor defesa técnica
                          possível.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-white font-bold text-xl mb-3">
                          Resultados:
                        </h3>
                        <p className="leading-relaxed text-[#cc8c5d]">
                          95% de sucesso em casos de legítima defesa e 90% em
                          redução de penas, com mais de 15 anos de experiência
                          na área.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Coluna Direita */}
                  <div className="space-y-8">
                    {/* Serviços Especializados */}
                    <div>
                      <h3 className="text-white font-bold text-xl mb-6">
                        Serviços Especializados
                      </h3>

                      {/* Cards dos serviços */}
                      <div className="space-y-3 mb-8">
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
                            className="glass-effect rounded-lg p-4 flex items-center gap-3 border border-[#cc8c5d]/10"
                          >
                            <div className="w-6 h-6 bg-[#cc8c5d] rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckCircle
                                className="h-4 w-4 text-[#10172a]"
                                strokeWidth={2}
                              />
                            </div>
                            <span className="text-white font-medium">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card CTA */}
                    <div className="glass-effect rounded-lg p-6 border border-[#cc8c5d]/20">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="text-white font-bold text-lg mb-2">
                            Precisa de ajuda nesta área?
                          </h4>
                          <p className="text-[#94a3b8]">
                            Agende uma consulta para análise personalizada do
                            seu caso.
                          </p>
                        </div>

                        <a
                          href="https://wa.me/5562995292129"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] rounded-lg font-semibold text-[#10172a] flex items-center gap-2 transition-all duration-300 hover:opacity-90 hover:scale-105 whitespace-nowrap"
                        >
                          <span>Consultar</span>
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção de Contato Final */}
        <section className="py-20 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Precisa de Defesa Criminal Especializada?
            </h2>
            <p className="text-lg text-slate-800 mb-8 leading-relaxed">
              Entre em contato agora mesmo para uma consulta personalizada.
              <br />
              Nossa equipe está preparada para defender seus direitos com
              excelência técnica.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a
                href="tel:62995292129"
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

            <div className="text-slate-800">
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
