"use client";

import {
  Phone,
  MessageCircle,
  Scale,
  ShieldAlert,
  Shield,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function AreasDeAtuacaoClient() {
  const [selectedArea, setSelectedArea] = useState(0);
  const [showFixedMenu, setShowFixedMenu] = useState(false);

  const areas = [
    { name: "Crimes Contra a Vida", id: "vida" },
    { name: "Crimes Patrimoniais", id: "patrimonio" },
    { name: "Lei de Drogas", id: "drogas" },
    { name: "Audiências e Julgamentos", id: "audiencias" },
    { name: "Habeas Corpus", id: "habeas" },
    { name: "Plantão de Emergência", id: "plantao" },
    { name: "Violência Doméstica", id: "domestica" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowFixedMenu(scrollY > 800); // Mostra o menu após 800px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToArea = (index: number, areaId: string) => {
    setSelectedArea(index);
    const element = document.getElementById(areaId);
    if (element) {
      const headerHeight = 80; // Altura aproximada do header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header />

      {/* Menu Fixo */}
      {showFixedMenu && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-700"
        >
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-wrap justify-center gap-2">
              {areas.map((area, index) => (
                <button
                  key={area.id}
                  onClick={() => scrollToArea(index, area.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                    selectedArea === index
                      ? "bg-[#cc8c5d] text-[#10172a]"
                      : "text-[#94a3b8] hover:text-[#cc8c5d] hover:bg-slate-800/50"
                  }`}
                >
                  {area.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section
          className="relative min-h-[50vh] flex items-center text-white overflow-hidden"
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
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent">
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
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Scale className="h-6 w-6 text-[#cc8c5d]/70" />
                      <div className="text-2xl md:text-3xl font-bold text-[#cc8c5d]">
                        500+
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      Casos de Sucesso
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

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/5562995292129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[#cc8c5d] to-[#d4956a] hover:from-[#b8794c] hover:to-[#c88759] rounded-lg font-semibold text-[#10172a] flex items-center gap-2 transition-all duration-300 whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Iniciar Atendimento</span>
                </a>
                <a
                  href="tel:+5562995292129"
                  className="border-2 text-[#cc8c5d] hover:text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 whitespace-nowrap"
                  style={{ borderColor: "#cc8c5d" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#cc8c5d";
                    e.currentTarget.style.borderColor = "#cc8c5d";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "#cc8c5d";
                  }}
                >
                  <Phone className="h-4 w-4" />
                  <span>Ligar Agora</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Principal - Big Cards */}
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
            {/* Menu de Navegação */}
            <div className="mb-16">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {areas.map((area, index) => (
                  <button
                    key={area.id}
                    onClick={() => scrollToArea(index, area.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedArea === index
                        ? "bg-[#cc8c5d] text-[#10172a]"
                        : "bg-slate-800/50 backdrop-blur-sm text-[#94a3b8] hover:text-[#cc8c5d] border border-slate-700 hover:border-[#cc8c5d]/50"
                    }`}
                  >
                    {area.name}
                  </button>
                ))}
              </div>
            </div>
            {/* Card Destacado - Crimes Contra a Vida */}
            <motion.div
              id="vida"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="glass-effect rounded-2xl p-8 md:p-12 hover-glow">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  {/* Coluna Esquerda - Menor (2/5) */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Ícone + Título do Macro Serviço */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#cc8c5d] to-[#f3c793] rounded-lg flex items-center justify-center">
                        <div className="w-full h-full bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] rounded-lg flex items-center justify-center">
                          <Shield
                            className="h-8 w-8 text-[#10172a]"
                            strokeWidth={2}
                          />
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-white">
                        Crimes Contra a Vida
                      </h2>
                    </div>

                    {/* Pequeno parágrafo */}
                    <p className="text-[#94a3b8] leading-relaxed text-base">
                      Defesa técnica especializada que protege seus direitos em
                      crimes contra a vida, com atuação firme e resultados
                      comprovados.
                    </p>

                    {/* Abordagem */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-3">
                          Abordagem:
                        </h3>
                        <p className="text-[#94a3b8] leading-relaxed text-sm">
                          Análise detalhada das provas, construção de tese
                          defensiva sólida e estratégia personalizada para cada
                          caso.
                        </p>
                      </div>

                      {/* Cards lado a lado - Formato glassmorphism igual aos da coluna direita */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Card 1 - +500 casos de sucesso */}
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Scale className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                500+
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Casos de Sucesso
                            </div>
                          </div>
                        </div>

                        {/* Card 2 - Atendimento 24h */}
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Zap className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                24h
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Atendimento Imediato
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coluna Direita - Maior (3/5) */}
                  <div className="lg:col-span-3 space-y-8">
                    {/* Serviços Especializados */}
                    <div>
                      <h3 className="text-white font-bold text-xl mb-6">
                        Serviços Especializados
                      </h3>

                      {/* Cards dos serviços em 2 colunas de 3 */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
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
                              <div className="w-full h-full bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] rounded-full flex items-center justify-center">
                                <CheckCircle
                                  className="h-4 w-4 text-[#10172a]"
                                  strokeWidth={2}
                                />
                              </div>
                            </div>
                            <span className="text-white font-medium text-sm">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card CTA */}
                    <div
                      className="rounded-lg p-6 border border-[#cc8c5d]/30 relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(204, 140, 93, 0.15) 0%, rgba(243, 199, 147, 0.08) 50%, rgba(204, 140, 93, 0.12) 100%)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="text-white font-bold text-base mb-2">
                            Precisa de ajuda nesta área?
                          </h4>
                          <p className="text-[#94a3b8] text-sm">
                            Converse agora com a advogada para atendimento
                            personalizado do seu caso.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <a
                            href="https://wa.me/5562995292129"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp</span>
                          </a>

                          <a
                            href="tel:+5562995292129"
                            className="border-2 text-[#cc8c5d] hover:text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
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
                            <Phone className="h-4 w-4" />
                            <span>Ligar</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Crimes Contra o Patrimônio */}
            <motion.div
              id="patrimonio"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="glass-effect rounded-2xl p-8 md:p-12 hover-glow">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  {/* Coluna Esquerda - Menor (2/5) */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Ícone + Título do Macro Serviço */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#cc8c5d] to-[#f3c793] rounded-lg flex items-center justify-center">
                        <Shield
                          className="h-8 w-8 text-[#10172a]"
                          strokeWidth={2}
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-white">
                        Crimes Contra o Patrimônio
                      </h2>
                    </div>

                    {/* Pequeno parágrafo */}
                    <p className="text-[#94a3b8] leading-relaxed text-base">
                      Advocacia criminal especializada em furtos, roubos e
                      estelionatos, com defesa técnica robusta e resultados
                      comprovados.
                    </p>

                    {/* Abordagem */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-3">
                          Abordagem:
                        </h3>
                        <p className="text-[#94a3b8] leading-relaxed text-sm">
                          Análise criteriosa das provas, contestação técnica de
                          evidências e estratégia defensiva personalizada.
                        </p>
                      </div>

                      {/* Cards lado a lado */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Card 1 - +500 casos de sucesso */}
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Scale className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                500+
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Casos de Sucesso
                            </div>
                          </div>
                        </div>

                        {/* Card 2 - Atendimento 24h */}
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Zap className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                24h
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Atendimento Imediato
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coluna Direita - Maior (3/5) */}
                  <div className="lg:col-span-3 space-y-8">
                    {/* Serviços Especializados */}
                    <div>
                      <h3 className="text-white font-bold text-xl mb-6">
                        Serviços Especializados
                      </h3>

                      {/* Cards dos serviços em 2 colunas de 3 */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {[
                          "Furto qualificado",
                          "Roubo simples e qualificado",
                          "Estelionato e fraudes",
                          "Receptação",
                          "Apropriação indébita",
                          "Extorsão",
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
                            <span className="text-white font-medium text-sm">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card CTA */}
                    <div
                      className="rounded-lg p-6 border border-[#cc8c5d]/30 relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(204, 140, 93, 0.15) 0%, rgba(243, 199, 147, 0.08) 50%, rgba(204, 140, 93, 0.12) 100%)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="text-white font-bold text-base mb-2">
                            Precisa de ajuda nesta área?
                          </h4>
                          <p className="text-[#94a3b8] text-sm">
                            Converse agora com a advogada para atendimento
                            personalizado do seu caso.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <a
                            href="https://wa.me/5562995292129"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp</span>
                          </a>

                          <a
                            href="tel:+5562995292129"
                            className="border-2 text-[#cc8c5d] hover:text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
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
                            <Phone className="h-4 w-4" />
                            <span>Ligar</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Lei de Drogas */}
            <motion.div
              id="drogas"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="glass-effect rounded-2xl p-8 md:p-12 hover-glow">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  {/* Coluna Esquerda - Menor (2/5) */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Ícone + Título do Macro Serviço */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#cc8c5d] to-[#f3c793] rounded-lg flex items-center justify-center">
                        <ShieldAlert
                          className="h-8 w-8 text-[#10172a]"
                          strokeWidth={2}
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-white">
                        Lei de Drogas
                      </h2>
                    </div>

                    {/* Pequeno parágrafo */}
                    <p className="text-[#94a3b8] leading-relaxed text-base">
                      Defesa especializada na Lei 11.343/06 com estratégias
                      diferenciadas para cada situação e resultados comprovados
                      em casos complexos.
                    </p>

                    {/* Abordagem */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-3">
                          Abordagem:
                        </h3>
                        <p className="text-[#94a3b8] leading-relaxed text-sm">
                          Análise técnica das substâncias, questionamento de
                          procedimentos e estratégia defensiva personalizada.
                        </p>
                      </div>

                      {/* Cards lado a lado */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Card 1 - +500 casos de sucesso */}
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Scale className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                500+
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Casos de Sucesso
                            </div>
                          </div>
                        </div>

                        {/* Card 2 - Atendimento 24h */}
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Zap className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                24h
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Atendimento Imediato
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coluna Direita - Maior (3/5) */}
                  <div className="lg:col-span-3 space-y-8">
                    {/* Serviços Especializados */}
                    <div>
                      <h3 className="text-white font-bold text-xl mb-6">
                        Serviços Especializados
                      </h3>

                      {/* Cards dos serviços em 2 colunas de 3 */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {[
                          "Tráfico de drogas",
                          "Porte para uso pessoal",
                          "Associação para o tráfico",
                          "Financiamento do tráfico",
                          "Cultivo de entorpecentes",
                          "Apuração de ato infracional",
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
                            <span className="text-white font-medium text-sm">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card CTA */}
                    <div
                      className="rounded-lg p-6 border border-[#cc8c5d]/30 relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(204, 140, 93, 0.15) 0%, rgba(243, 199, 147, 0.08) 50%, rgba(204, 140, 93, 0.12) 100%)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="text-white font-bold text-base mb-2">
                            Precisa de ajuda nesta área?
                          </h4>
                          <p className="text-[#94a3b8] text-sm">
                            Converse agora com a advogada para atendimento
                            personalizado do seu caso.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <a
                            href="https://wa.me/5562995292129"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp</span>
                          </a>

                          <a
                            href="tel:+5562995292129"
                            className="border-2 text-[#cc8c5d] hover:text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
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
                            <Phone className="h-4 w-4" />
                            <span>Ligar</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Audiências e Julgamentos */}
            <motion.div
              id="audiencias"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="glass-effect rounded-2xl p-8 md:p-12 hover-glow">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#cc8c5d] to-[#f3c793] rounded-lg flex items-center justify-center">
                        <Scale
                          className="h-8 w-8 text-[#10172a]"
                          strokeWidth={2}
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-white">
                        Audiências e Julgamentos
                      </h2>
                    </div>
                    <p className="text-[#94a3b8] leading-relaxed text-base">
                      Representação processual completa desde a fase
                      investigativa até o Tribunal do Júri, com estratégia oral
                      persuasiva e resultados efetivos.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-3">
                          Abordagem:
                        </h3>
                        <p className="text-[#94a3b8] leading-relaxed text-sm">
                          Preparação estratégica detalhada, sustentação oral
                          persuasiva e acompanhamento processual personalizado.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Scale className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                500+
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Casos de Sucesso
                            </div>
                          </div>
                        </div>
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Zap className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                24h
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Atendimento Imediato
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 space-y-8">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-6">
                        Serviços Especializados
                      </h3>
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {[
                          "Tribunal do Júri",
                          "Audiências de instrução",
                          "Interrogatórios",
                          "Sustentações orais",
                          "Recursos em geral",
                          "Defesas preliminares",
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
                            <span className="text-white font-medium text-sm">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="rounded-lg p-6 border border-[#cc8c5d]/30 relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(204, 140, 93, 0.15) 0%, rgba(243, 199, 147, 0.08) 50%, rgba(204, 140, 93, 0.12) 100%)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="text-white font-bold text-base mb-2">
                            Precisa de ajuda nesta área?
                          </h4>
                          <p className="text-[#94a3b8] text-sm">
                            Converse agora com a advogada para atendimento
                            personalizado do seu caso.
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <a
                            href="https://wa.me/5562995292129"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp</span>
                          </a>
                          <a
                            href="tel:+5562995292129"
                            className="border-2 text-[#cc8c5d] hover:text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
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
                            <Phone className="h-4 w-4" />
                            <span>Ligar</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 5 - Habeas Corpus */}
            <motion.div
              id="habeas"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="glass-effect rounded-2xl p-8 md:p-12 hover-glow">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#cc8c5d] to-[#f3c793] rounded-lg flex items-center justify-center">
                        <Shield
                          className="h-8 w-8 text-[#10172a]"
                          strokeWidth={2}
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-white">
                        Habeas Corpus
                      </h2>
                    </div>
                    <p className="text-[#94a3b8] leading-relaxed text-base">
                      Proteção constitucional da liberdade com medidas urgentes
                      e fundamentação jurídica sólida para reversão de prisões
                      ilegais.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-3">
                          Abordagem:
                        </h3>
                        <p className="text-[#94a3b8] leading-relaxed text-sm">
                          Análise jurídica da prisão, fundamentação técnica
                          sólida e peticionamento urgente personalizado para
                          cada caso.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Scale className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                500+
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Casos de Sucesso
                            </div>
                          </div>
                        </div>
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Zap className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                24h
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Atendimento Imediato
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 space-y-8">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-6">
                        Serviços Especializados
                      </h3>
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {[
                          "HC preventivo",
                          "HC liberatório",
                          "HC para trancamento",
                          "Relaxamento de prisão",
                          "Revogação de prisão",
                          "Substituição de prisão",
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
                            <span className="text-white font-medium text-sm">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="rounded-lg p-6 border border-[#cc8c5d]/30 relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(204, 140, 93, 0.15) 0%, rgba(243, 199, 147, 0.08) 50%, rgba(204, 140, 93, 0.12) 100%)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="text-white font-bold text-base mb-2">
                            Precisa de ajuda nesta área?
                          </h4>
                          <p className="text-[#94a3b8] text-sm">
                            Converse agora com a advogada para atendimento
                            personalizado do seu caso.
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <a
                            href="https://wa.me/5562995292129"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp</span>
                          </a>
                          <a
                            href="tel:+5562995292129"
                            className="border-2 text-[#cc8c5d] hover:text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
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
                            <Phone className="h-4 w-4" />
                            <span>Ligar</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 6 - Atendimentos de Urgência */}
            <motion.div
              id="plantao"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="glass-effect rounded-2xl p-8 md:p-12 hover-glow">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#cc8c5d] to-[#f3c793] rounded-lg flex items-center justify-center">
                        <Zap
                          className="h-8 w-8 text-[#10172a]"
                          strokeWidth={2}
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-white">
                        Atendimentos de Urgência
                      </h2>
                    </div>
                    <p className="text-[#94a3b8] leading-relaxed text-base">
                      Atendimento imediato 24h em delegacias e situações de
                      flagrante, com resposta rápida e medidas protetivas
                      eficazes.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-3">
                          Abordagem:
                        </h3>
                        <p className="text-[#94a3b8] leading-relaxed text-sm">
                          Resposta imediata e estratégica, análise situacional
                          detalhada e proteção jurídica personalizada para cada
                          caso.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Scale className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                500+
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Casos de Sucesso
                            </div>
                          </div>
                        </div>
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Zap className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                24h
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Atendimento Imediato
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 space-y-8">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-6">
                        Serviços Especializados
                      </h3>
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {[
                          "Flagrante delito",
                          "Atendimento em delegacia",
                          "Medidas cautelares",
                          "Plantão judiciário",
                          "Prisão temporária",
                          "Audiência de custódia",
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
                            <span className="text-white font-medium text-sm">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="rounded-lg p-6 border border-[#cc8c5d]/30 relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(204, 140, 93, 0.15) 0%, rgba(243, 199, 147, 0.08) 50%, rgba(204, 140, 93, 0.12) 100%)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="text-white font-bold text-base mb-2">
                            Precisa de ajuda nesta área?
                          </h4>
                          <p className="text-[#94a3b8] text-sm">
                            Converse agora com a advogada para atendimento
                            personalizado do seu caso.
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <a
                            href="https://wa.me/5562995292129"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp</span>
                          </a>
                          <a
                            href="tel:+5562995292129"
                            className="border-2 text-[#cc8c5d] hover:text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
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
                            <Phone className="h-4 w-4" />
                            <span>Ligar</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 7 - Violência Doméstica */}
            <motion.div
              id="domestica"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="glass-effect rounded-2xl p-8 md:p-12 hover-glow">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  {/* Coluna Esquerda - Menor (2/5) */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Ícone + Título do Macro Serviço */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#cc8c5d] to-[#f3c793] rounded-lg flex items-center justify-center">
                        <ShieldAlert
                          className="h-8 w-8 text-[#10172a]"
                          strokeWidth={2}
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-white">
                        Violência Doméstica
                      </h2>
                    </div>

                    {/* Pequeno parágrafo */}
                    <p className="text-[#94a3b8] leading-relaxed text-base">
                      Defesa especializada na Lei Maria da Penha com abordagem
                      sensível e estratégias técnicas para proteção de direitos
                      em casos complexos.
                    </p>

                    {/* Abordagem */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-3">
                          Abordagem:
                        </h3>
                        <p className="text-[#94a3b8] leading-relaxed text-sm">
                          Análise cuidadosa das circunstâncias, defesa técnica
                          fundamentada e acompanhamento humanizado
                          personalizado.
                        </p>
                      </div>

                      {/* Cards lado a lado */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Card 1 - +500 casos de sucesso */}
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Scale className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                500+
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Casos de Sucesso
                            </div>
                          </div>
                        </div>

                        {/* Card 2 - Atendimento 24h */}
                        <div className="glass-effect text-center p-4 rounded-lg border border-[#cc8c5d]/10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                              <Zap className="h-5 w-5 text-[#cc8c5d]/70" />
                              <div
                                className="text-xl font-bold"
                                style={{ color: "#cc8c5d" }}
                              >
                                24h
                              </div>
                            </div>
                            <div className="text-white/90 text-xs font-medium">
                              Atendimento Imediato
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coluna Direita - Maior (3/5) */}
                  <div className="lg:col-span-3 space-y-8">
                    {/* Serviços Especializados */}
                    <div>
                      <h3 className="text-white font-bold text-xl mb-6">
                        Serviços Especializados
                      </h3>

                      {/* Cards dos serviços em 2 colunas de 3 */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {[
                          "Lesão corporal doméstica",
                          "Ameaça e perseguição",
                          "Injúria e difamação",
                          "Violação de medida protetiva",
                          "Feminicídio tentado",
                          "Crimes contra dignidade sexual",
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
                            <span className="text-white font-medium text-sm">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card CTA */}
                    <div
                      className="rounded-lg p-6 border border-[#cc8c5d]/30 relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(204, 140, 93, 0.15) 0%, rgba(243, 199, 147, 0.08) 50%, rgba(204, 140, 93, 0.12) 100%)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="text-white font-bold text-base mb-2">
                            Precisa de ajuda nesta área?
                          </h4>
                          <p className="text-[#94a3b8] text-sm">
                            Converse agora com a advogada para atendimento
                            personalizado do seu caso.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <a
                            href="https://wa.me/5562995292129"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp</span>
                          </a>

                          <a
                            href="tel:+5562995292129"
                            className="border-2 text-[#cc8c5d] hover:text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm"
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
                            <Phone className="h-4 w-4" />
                            <span>Ligar</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card CTA - Seção da Advogada */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="glass-effect rounded-2xl overflow-hidden hover-glow">
                <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
                  {/* Coluna 1 - Foto da Advogada */}
                  <div className="relative h-full">
                    <img
                      src="/images/diulliany-about.webp"
                      alt="Dra. Diulliany Ferro - Advogada Criminalista"
                      className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px]"
                    />
                    <div className="absolute top-6 left-6 bg-[#cc8c5d] rounded-full p-4 shadow-lg">
                      <Scale className="h-8 w-8 text-[#10172a]" />
                    </div>
                    {/* Overlay gradient para mesclar com o fundo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-800/60 lg:to-slate-800/80"></div>
                  </div>

                  {/* Coluna 2 - Informações da Advogada */}
                  <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Dra. Diulliany Ferro
                      </h2>
                      <p className="text-lg text-[#cc8c5d] font-semibold">
                        Sua Melhor Escolha para Defesa da Liberdade
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#cc8c5d] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-[#94a3b8] leading-relaxed">
                          <strong className="text-white">
                            Advogada Especialista:
                          </strong>{" "}
                          Formação sólida em Direito Criminal com anos de
                          experiência prática
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#cc8c5d] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-[#94a3b8] leading-relaxed">
                          <strong className="text-white">
                            Acompanhamento Personalizado:
                          </strong>{" "}
                          Atendimento próximo e dedicado a cada cliente
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#cc8c5d] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-[#94a3b8] leading-relaxed">
                          <strong className="text-white">
                            Atuação Estratégica:
                          </strong>{" "}
                          Foco em resultados com planejamento detalhado de cada
                          caso
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#cc8c5d] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-[#94a3b8] leading-relaxed">
                          <strong className="text-white">
                            Comunicação Clara:
                          </strong>{" "}
                          Transparência total em todas as etapas do processo
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Coluna 3 - Call to Action */}
                  <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-[#cc8c5d]/10 to-[#f3c793]/10 border-l border-[#cc8c5d]/20">
                    <div className="text-center space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Precisa de Apoio Jurídico?
                      </h3>

                      <p className="text-[#94a3b8] mb-8 leading-relaxed">
                        Entre em contato agora para uma consulta especializada.
                        Defenda seus direitos com quem entende do assunto.
                      </p>

                      <div className="space-y-4">
                        <a
                          href="https://wa.me/5562995292129"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-[#cc8c5d] to-[#d4956a] hover:from-[#b8794c] hover:to-[#c88759] text-[#10172a] px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-transparent"
                        >
                          <MessageCircle className="h-5 w-5" />
                          <span>Conversar no WhatsApp</span>
                        </a>

                        <a
                          href="tel:+5562995292129"
                          className="w-full border-2 border-[#cc8c5d] text-[#cc8c5d] hover:bg-[#cc8c5d] hover:text-[#10172a] px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3"
                        >
                          <Phone className="h-5 w-5" />
                          <span>Ligar Agora</span>
                        </a>
                      </div>

                      <div className="mt-6 text-sm text-[#94a3b8]">
                        <div className="flex items-center justify-center gap-2">
                          <Zap className="h-4 w-4 text-[#cc8c5d]" />
                          <p className="font-medium">
                            Atendimento 24h • Resposta Imediata
                          </p>
                        </div>
                      </div>
                    </div>
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
