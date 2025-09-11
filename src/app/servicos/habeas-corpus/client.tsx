"use client";

import {
  Phone,
  MessageCircle,
  Scale,
  Shield,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  Gavel,
  Users,
  ArrowRight,
  Star,
  Award,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function HabeasCorpusClient() {
  const situacoesAtendidas = [
    {
      title: "Prisão em Flagrante",
      description:
        "Quando a prisão em flagrante apresenta vícios ou ilegalidades que comprometem sua validade.",
      icon: AlertTriangle,
      casos: [
        "Flagrante forjado ou provocado",
        "Prisão sem observar direitos constitucionais",
        "Flagrante de crime inexistente",
        "Prisão em local protegido constitucionalmente",
      ],
    },
    {
      title: "Prisão Preventiva",
      description:
        "Contestação de prisões preventivas decretadas sem fundamentação adequada ou requisitos legais.",
      icon: Shield,
      casos: [
        "Ausência dos requisitos legais",
        "Fundamentação genérica ou inadequada",
        "Falta de contemporaneidade",
        "Prisão baseada apenas em informações de delação",
      ],
    },
    {
      title: "Prisão Temporária",
      description:
        "Questionamento da legalidade de prisões temporárias que extrapolam os limites legais.",
      icon: Clock,
      casos: [
        "Prazo superior ao legal",
        "Crime não previsto em lei",
        "Ausência de fundamentação",
        "Renovação ilegal do prazo",
      ],
    },
    {
      title: "Constrangimento Ilegal",
      description:
        "Proteção contra qualquer forma de constrangimento ilegal à liberdade de locomoção.",
      icon: Scale,
      casos: [
        "Prisão domiciliar indevida",
        "Imposição de medidas cautelares ilegais",
        "Restrições não previstas em lei",
        "Prisão civil por dívida",
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#10172a] text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                  Habeas Corpus
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#94a3b8] mb-8 max-w-4xl mx-auto leading-relaxed">
                Defesa especializada da{" "}
                <span className="text-[#cc8c5d] font-semibold">
                  liberdade de locomoção
                </span>
                . Atuação imediata em casos de prisão ilegal ou constrangimento
                indevido.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://wa.me/5562995292129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] text-[#10172a] px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 text-lg shadow-xl hover:shadow-2xl"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>Consulta Urgente</span>
                </a>
                <a
                  href="tel:+5562995292129"
                  className="border-2 border-[#cc8c5d] text-[#cc8c5d] hover:bg-[#cc8c5d] hover:text-[#10172a] px-10 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
                >
                  <Phone className="h-6 w-6" />
                  <span>(62) 99529-2129</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção de Estatísticas */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {[
                { icon: Clock, value: "24h", label: "Atendimento" },
                { icon: Shield, value: "2h", label: "Tempo Resposta" },
                { icon: Scale, value: "85%", label: "Taxa de Sucesso" },
                { icon: Award, value: "500+", label: "Casos Resolvidos" },
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-effect rounded-xl p-8 text-center hover-glow"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-[#10172a]" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[#94a3b8]">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Seção - Tipos de Habeas Corpus */}
        <section className="py-20 relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tipos de{" "}
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                  Habeas Corpus
                </span>
              </h2>
              <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
                Cada situação exige uma estratégia específica. Conheça os tipos
                de HC e quando aplicar.
              </p>
            </motion.div>

            {/* Card Único - Três Tipos de HC em Colunas */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect rounded-2xl p-8 md:p-12 hover-glow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Coluna 1 - HC Preventivo */}
                  <div className="space-y-6">
                    {/* Ícone + Título */}
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto">
                        <Shield
                          className="h-8 w-8 text-white"
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        HC Preventivo
                      </h3>
                    </div>

                    {/* Parágrafo */}
                    <p className="text-[#94a3b8] leading-relaxed text-sm text-center">
                      Proteção antes que a prisão aconteça. Quando há fundado
                      receio de prisão ilegal, atuamos preventivamente para
                      garantir sua liberdade.
                    </p>

                    {/* Quando Usar */}
                    <div className="space-y-3">
                      <h4 className="text-white font-bold text-lg text-center">
                        Quando Usar
                      </h4>
                      <p className="text-[#94a3b8] text-xs text-center">
                        Aplicado quando há indícios ou fundado receio de que a
                        liberdade será cerceada ilegalmente.
                      </p>
                    </div>

                    {/* Situações Atendidas */}
                    <div className="space-y-4">
                      <h4 className="text-white font-bold text-lg text-center">
                        Situações Atendidas
                      </h4>
                      <div className="space-y-2">
                        {[
                          "Ameaça de prisão preventiva",
                          "Mandado de prisão irregular",
                          "Risco de flagrante forjado",
                          "Operações policiais direcionadas",
                        ].map((situacao, index) => (
                          <div
                            key={index}
                            className="glass-effect rounded-lg p-3 flex items-center gap-2 border border-[#cc8c5d]/10"
                          >
                            <div className="w-4 h-4 bg-[#cc8c5d] rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckCircle
                                className="h-3 w-3 text-[#10172a]"
                                strokeWidth={2}
                              />
                            </div>
                            <span className="text-white font-medium text-xs">
                              {situacao}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Coluna 2 - HC Liberatório */}
                  <div className="space-y-6">
                    {/* Ícone + Título */}
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto">
                        <Scale className="h-8 w-8 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        HC Liberatório
                      </h3>
                    </div>

                    {/* Parágrafo */}
                    <p className="text-[#94a3b8] leading-relaxed text-sm text-center">
                      Para quem já está preso. Analisamos a legalidade da prisão
                      e buscamos sua liberdade imediata quando há ilegalidade.
                    </p>

                    {/* Quando Usar */}
                    <div className="space-y-3">
                      <h4 className="text-white font-bold text-lg text-center">
                        Quando Usar
                      </h4>
                      <p className="text-[#94a3b8] text-xs text-center">
                        Aplicado quando a pessoa já está presa e há vícios na
                        prisão que permitem a soltura imediata.
                      </p>
                    </div>

                    {/* Situações Atendidas */}
                    <div className="space-y-4">
                      <h4 className="text-white font-bold text-lg text-center">
                        Situações Atendidas
                      </h4>
                      <div className="space-y-2">
                        {[
                          "Prisão preventiva sem fundamentação",
                          "Excesso de prazo processual",
                          "Prisão após cumprimento da pena",
                          "Constrangimento ilegal comprovado",
                        ].map((situacao, index) => (
                          <div
                            key={index}
                            className="glass-effect rounded-lg p-3 flex items-center gap-2 border border-[#cc8c5d]/10"
                          >
                            <div className="w-4 h-4 bg-[#cc8c5d] rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckCircle
                                className="h-3 w-3 text-[#10172a]"
                                strokeWidth={2}
                              />
                            </div>
                            <span className="text-white font-medium text-xs">
                              {situacao}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Coluna 3 - HC para Trancamento */}
                  <div className="space-y-6">
                    {/* Ícone + Título */}
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto">
                        <FileText
                          className="h-8 w-8 text-white"
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        HC para Trancamento
                      </h3>
                    </div>

                    {/* Parágrafo */}
                    <p className="text-[#94a3b8] leading-relaxed text-sm text-center">
                      Quando a ação penal não deveria nem existir. Solicitamos o
                      trancamento definitivo do processo por falta de justa
                      causa.
                    </p>

                    {/* Quando Usar */}
                    <div className="space-y-3">
                      <h4 className="text-white font-bold text-lg text-center">
                        Quando Usar
                      </h4>
                      <p className="text-[#94a3b8] text-xs text-center">
                        Quando há falta de justa causa ou vícios insanáveis que
                        impedem o prosseguimento da ação penal.
                      </p>
                    </div>

                    {/* Situações Atendidas */}
                    <div className="space-y-4">
                      <h4 className="text-white font-bold text-lg text-center">
                        Situações Atendidas
                      </h4>
                      <div className="space-y-2">
                        {[
                          "Ausência de justa causa",
                          "Prescrição antecipada",
                          "Atipicidade da conduta",
                          "Extinção da punibilidade",
                        ].map((situacao, index) => (
                          <div
                            key={index}
                            className="glass-effect rounded-lg p-3 flex items-center gap-2 border border-[#cc8c5d]/10"
                          >
                            <div className="w-4 h-4 bg-[#cc8c5d] rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckCircle
                                className="h-3 w-3 text-[#10172a]"
                                strokeWidth={2}
                              />
                            </div>
                            <span className="text-white font-medium text-xs">
                              {situacao}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section - Fora das colunas */}
                <div className="mt-12 pt-8 border-t border-[#cc8c5d]/20">
                  <div
                    className="rounded-lg p-6 border border-[#cc8c5d]/30 relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(204, 140, 93, 0.15) 0%, rgba(243, 199, 147, 0.08) 50%, rgba(204, 140, 93, 0.12) 100%)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="text-center space-y-4">
                      <h4 className="text-white font-bold text-xl">
                        Precisa de Habeas Corpus?
                      </h4>
                      <p className="text-[#94a3b8] text-base">
                        Converse agora para análise do seu caso específico.
                        Atendimento 24h para situações urgentes.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                          href="https://wa.me/5562995292129"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white flex items-center gap-3 transition-all duration-300 text-lg"
                        >
                          <MessageCircle className="h-5 w-5" />
                          <span>WhatsApp Urgência</span>
                        </a>

                        <a
                          href="tel:+5562995292129"
                          className="border-2 text-[#cc8c5d] hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 text-lg"
                          style={{ borderColor: "#cc8c5d" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#cc8c5d";
                            e.currentTarget.style.borderColor = "#cc8c5d";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.borderColor = "#cc8c5d";
                          }}
                        >
                          <Phone className="h-5 w-5" />
                          <span>(62) 99529-2129</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção - Situações Atendidas */}
        <section className="py-20 relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #334154 0%, #10172a 50%, #334154 100%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Situações{" "}
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                  Atendidas
                </span>
              </h2>
              <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
                Atuamos em todas as situações que violam sua liberdade de
                locomoção
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {situacoesAtendidas.map((situacao, index) => {
                const IconComponent = situacao.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-effect rounded-xl p-8 hover-glow"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-[#10172a]" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {situacao.title}
                      </h3>
                    </div>

                    <p className="text-[#94a3b8] mb-6 leading-relaxed">
                      {situacao.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Exemplos:</h4>
                      {situacao.casos.map((caso, casoIndex) => (
                        <div
                          key={casoIndex}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-[#cc8c5d] rounded-full"></div>
                          <span className="text-[#94a3b8] text-sm">{caso}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção CTA Final */}
        <section className="py-20 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#10172a] mb-6">
                Sua Liberdade Não Pode Esperar
              </h2>
              <p className="text-xl text-[#10172a]/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                Em casos de <strong>Habeas Corpus</strong>, o tempo é
                fundamental. Nossa equipe está preparada para atuar{" "}
                <strong>24 horas por dia</strong>
                na proteção dos seus direitos.
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
                  <span>WhatsApp Urgência</span>
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#10172a]">
                  <div className="text-center">
                    <div className="font-bold text-2xl">24h</div>
                    <div className="text-sm">Atendimento</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl">2h</div>
                    <div className="text-sm">Resposta Máxima</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl">85%</div>
                    <div className="text-sm">Taxa de Sucesso</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
