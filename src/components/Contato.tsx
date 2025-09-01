"use client";

import { useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  AlertTriangle,
  Navigation,
} from "lucide-react";

export default function Contato() {
  const contatos = [
    {
      icon: Phone,
      titulo: "Telefone",
      info: "(11) 99999-9999",
      link: "tel:+5511999999999",
    },
    {
      icon: MessageCircle,
      titulo: "WhatsApp",
      info: "(11) 99999-9999",
      link: "https://wa.me/5511999999999",
    },
    {
      icon: Mail,
      titulo: "E-mail",
      info: "diuferroadv@gmail.com",
      link: "mailto:diuferroadv@gmail.com",
    },
  ];

  const enderecoCompleto =
    "Rua dos Advogados, 123 - Sala 456, Setor Bueno, Goiânia - GO, 74210-000";
  const coordenadas = "-16.6869,-49.2648"; // Coordenadas exemplo para Setor Bueno, Goiânia

  // Carrega o script do WhatsApp
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/whatsapp.js";
    script.async = true;
    script.onload = () => {
      console.log("Script WhatsApp carregado");
      // Re-configura os botões após o carregamento
      if (window.WhatsAppScript) {
        window.WhatsAppScript.configurarBotoesWhatsApp();
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Função de clique direto como fallback
  const handleWhatsAppClick = () => {
    const numero = "5562995292129";
    const mensagem = "Olá! Gostaria de iniciar um atendimento com a advogada.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contato"
      className="py-20 font-sans"
      style={{
        background:
          "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg font-light text-white max-w-4xl mx-auto leading-relaxed">
            Estamos prontos para ajudá-lo. Entre em contato conosco para uma
            consulta inicial gratuita e confidencial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Informações de Contato */}
          <div className="space-y-8 animate-fade-in-up animate-delay-200 flex flex-col">
            <div
              className="relative overflow-hidden rounded-2xl transition-all duration-300 group p-8 flex-1"
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

              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                Fale Conosco
              </h3>
              <p className="text-white/90 leading-relaxed mb-8 relative z-10">
                Oferecemos diferentes canais de atendimento para sua comodidade.
                Escolha o mais conveniente para você.
              </p>

              <div className="space-y-6 relative z-10">
                {contatos.map((contato, index) => {
                  const IconComponent = contato.icon;
                  return (
                    <a
                      key={index}
                      href={contato.link}
                      className="block group/item"
                      target={
                        contato.titulo === "WhatsApp" ? "_blank" : undefined
                      }
                      rel={
                        contato.titulo === "WhatsApp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group-hover/item:-translate-y-1">
                        <div
                          className="p-3 rounded-xl group-hover/item:scale-110 transition-all duration-300"
                          style={{
                            background:
                              "linear-gradient(135deg, #cc8c5d 0%, #b8794c 100%)",
                          }}
                        >
                          <IconComponent
                            className="h-6 w-6 text-slate-900"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white mb-1">
                            {contato.titulo}
                          </h4>
                          <p className="text-[#cc8c5d] font-semibold">
                            {contato.info}
                          </p>
                        </div>
                        {(contato.titulo === "Telefone" ||
                          contato.titulo === "WhatsApp") && (
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#cc8c5d] text-slate-900">
                              24h
                            </span>
                          </div>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Horário de Atendimento */}
              <div className="mt-8 p-6 rounded-xl bg-white/5 border border-[#cc8c5d]/20 relative z-10">
                <div className="flex items-center mb-4">
                  <Clock
                    className="h-5 w-5 text-[#cc8c5d] mr-3"
                    aria-hidden="true"
                  />
                  <span className="font-bold text-white">
                    Horário de Atendimento
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#cc8c5d] font-semibold">
                      Emergências:
                    </span>
                    <span className="text-[#cc8c5d] font-semibold">24h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Segunda a Sexta:</span>
                    <span className="text-white font-medium">9h às 17h</span>
                  </div>
                </div>
              </div>

              {/* Botão de Ação */}
              <div className="mt-8 relative z-50">
                <button
                  data-whatsapp="iniciarAtendimento"
                  onClick={handleWhatsAppClick}
                  className="w-full text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 bg-[#cc8c5d] hover:bg-[#b8794c] group/agenda cursor-pointer"
                  style={{ zIndex: 50 }}
                >
                  <MessageCircle className="h-5 w-5 group-hover/agenda:scale-110 transition-transform duration-300" />
                  <span>Iniciar Atendimento</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mapa e Endereço */}
          <div className="animate-fade-in-up animate-delay-300 flex flex-col">
            <div
              className="relative overflow-hidden rounded-2xl transition-all duration-300 group flex-1"
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

              <div className="p-8 relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Localização do Escritório
                </h3>

                {/* Endereço */}
                <div className="mb-6">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, #cc8c5d 0%, #b8794c 100%)",
                      }}
                    >
                      <MapPin
                        className="h-6 w-6 text-slate-900"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">
                        Endereço Completo
                      </h4>
                      <p className="text-white/90 leading-relaxed">
                        {enderecoCompleto}
                      </p>
                      <p className="text-white/70 text-sm mt-2">
                        Atendimento presencial com agendamento
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tipos de Atendimento */}
                <div className="mb-6">
                  <div className="p-4 rounded-xl bg-[#cc8c5d]/10 border border-[#cc8c5d]/20">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#cc8c5d] mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-white font-semibold">
                            Atendimento Presencial:
                          </span>
                          <span className="text-white/90 ml-2">
                            Goiânia e Região Metropolitana
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#cc8c5d] mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-white font-semibold">
                            Atendimento Online:
                          </span>
                          <span className="text-white/90 ml-2">
                            Todo o Brasil
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Iframe do Mapa */}
                <div className="mb-6 flex-1">
                  <div className="rounded-xl overflow-hidden border border-white/10 h-full min-h-[280px]">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1153932883!2d-46.6864!3d-23.5978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzUyLjEiUyA0NsKwNDEnMTEuMCJX!5e0!3m2!1spt!2sbr!4v1640995200000!5m2!1spt!2sbr`}
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "280px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização do Escritório DiuferroAdv"
                      className="filter saturate-[0.3] brightness-110 contrast-90 hover:saturate-100 hover:brightness-100 hover:contrast-100 transition-all duration-500"
                    ></iframe>
                  </div>
                </div>

                {/* Botão para Abrir no Google Maps */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${coordenadas}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 bg-[#cc8c5d] hover:bg-[#b8794c] group/nav"
                >
                  <Navigation className="h-5 w-5 group-hover/nav:scale-110 transition-transform duration-300" />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Emergência */}
        <div className="text-center animate-fade-in-up animate-delay-400">
          <div
            className="relative overflow-hidden rounded-2xl transition-all duration-300 group p-8 lg:p-12 max-w-4xl mx-auto"
            style={{
              backgroundColor: "#1a1f2e",
              background: `
                linear-gradient(135deg, 
                  rgba(239, 68, 68, 0.05) 0%, 
                  rgba(239, 68, 68, 0.02) 25%, 
                  transparent 50%
                ),
                #1a1f2e
              `,
              border: "1px solid rgba(239, 68, 68, 0.2)",
              boxShadow: `
                0 4px 20px rgba(239, 68, 68, 0.1),
                inset 0 1px 0 rgba(239, 68, 68, 0.05)
              `,
            }}
          >
            {/* Efeito de Brilho Superior Esquerdo */}
            <div
              className="absolute top-0 left-0 w-24 h-24 pointer-events-none opacity-15"
              style={{
                background:
                  "radial-gradient(circle at 0% 0%, rgba(239, 68, 68, 0.15) 0%, transparent 70%)",
              }}
            />

            <div className="flex items-center justify-center mb-6 relative z-10">
              <AlertTriangle
                className="h-8 w-8 text-red-400 mr-4"
                aria-hidden="true"
              />
              <h4 className="text-2xl font-bold text-red-400">
                Situação de Emergência?
              </h4>
            </div>
            <p className="text-white mb-8 text-lg leading-relaxed relative z-10">
              Se você foi preso, está sendo procurado ou precisa de atendimento
              urgente, entre em contato imediatamente:
            </p>
            <a
              href="tel:+5511999999999"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center space-x-3 text-lg group/emergency relative z-10"
            >
              <Phone
                className="h-6 w-6 group-hover/emergency:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              <span>Ligar Agora - Emergência 24h</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
