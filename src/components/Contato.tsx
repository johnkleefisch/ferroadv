"use client";

import { useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
  Navigation,
} from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { startWhatsappConversation } from "@/utils/whatsapp";
import { acionarTelefone } from "@/utils/telefone";

export default function Contato() {
  const contatos = [
    {
      icon: WhatsAppIcon,
      titulo: "WhatsApp",
      info: "(62) 99529-2129",
      link: "whatsapp-function", // Marcador para usar a função
    },
    {
      icon: Phone,
      titulo: "Telefone",
      info: "(62) 99529-2129",
      link: "telefone-function", // Marcador para usar a função
    },
    {
      icon: Mail,
      titulo: "E-mail",
      info: "diuferroadv@gmail.com",
      link: "mailto:diuferroadv@gmail.com",
    },
  ];

  const enderecoCompleto =
    "Av. Eng. Atílio Corrêa Lima, 742, Cidade Jardim, Goiânia - GO, 74425-901";
  const coordenadas = "-16.6831813,-49.3047424"; // Coordenadas exatas do escritório Diulliany Ferro

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
      className="py-12 font-sans"
      style={{
        background:
          "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-white/90 mb-8 text-lg leading-relaxed">
            Estamos prontos para ajudá-lo. Entre em contato conosco para
            avaliação inicial do seu caso, com total confidencialidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Informações de Contato */}
          <div className="space-y-8 animate-fade-in-up animate-delay-200 flex flex-col">
            <div
              className="relative overflow-hidden rounded-2xl transition-all duration-300 p-8 flex-1"
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
                  const isWhatsApp = contato.link === "whatsapp-function";
                  const isTelefone = contato.link === "telefone-function";

                  if (isWhatsApp) {
                    return (
                      <button
                        key={index}
                        onClick={() => startWhatsappConversation()}
                        className="block w-full text-left cursor-pointer"
                      >
                        <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-[#cc8c5d]/20 border border-transparent">
                          <div
                            className="p-3 rounded-xl transition-all duration-300"
                            style={{
                              background:
                                "linear-gradient(135deg, #cc8c5d 0%, #e6b07a 100%)",
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
                            <span
                              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold text-slate-900"
                              style={{
                                background:
                                  "linear-gradient(135deg, #cc8c5d 0%, #e6b07a 100%)",
                              }}
                            >
                              24h
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  }

                  if (isTelefone) {
                    return (
                      <button
                        key={index}
                        onClick={() => acionarTelefone()}
                        className="block w-full text-left cursor-pointer"
                      >
                        <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-[#cc8c5d]/20 border border-transparent">
                          <div
                            className="p-3 rounded-xl transition-all duration-300"
                            style={{
                              background:
                                "linear-gradient(135deg, #cc8c5d 0%, #e6b07a 100%)",
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
                            <span
                              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold text-slate-900"
                              style={{
                                background:
                                  "linear-gradient(135deg, #cc8c5d 0%, #e6b07a 100%)",
                              }}
                            >
                              24h
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  }

                  return (
                    <a
                      key={index}
                      href={contato.link}
                      className="block"
                      target={
                        contato.titulo === "WhatsApp" ? "_blank" : undefined
                      }
                      rel={
                        contato.titulo === "WhatsApp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-[#cc8c5d]/20 border border-transparent">
                        <div
                          className="p-3 rounded-xl transition-all duration-300"
                          style={{
                            background:
                              "linear-gradient(135deg, #cc8c5d 0%, #e6b07a 100%)",
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
                            <span
                              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold text-slate-900"
                              style={{
                                background:
                                  "linear-gradient(135deg, #cc8c5d 0%, #e6b07a 100%)",
                              }}
                            >
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
                    <span
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold text-slate-900"
                      style={{
                        background:
                          "linear-gradient(135deg, #cc8c5d 0%, #e6b07a 100%)",
                      }}
                    >
                      24h
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Segunda a Sexta:</span>
                    <span className="text-white font-medium">9h às 17h</span>
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="mt-8 relative z-50 flex gap-3">
                <button
                  onClick={() => startWhatsappConversation()}
                  className="relative bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] hover:from-[#b8794c] hover:to-[#d4a269] text-[#10172a] px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl overflow-hidden group cursor-pointer flex-1"
                  style={{ zIndex: 50 }}
                >
                  <WhatsAppIcon className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">INICIAR ATENDIMENTO</span>
                </button>
                <div className="relative bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] p-[2px] rounded-lg transition-all duration-300 hover:shadow-lg group flex-1">
                  <button
                    onClick={() => acionarTelefone()}
                    className="bg-slate-900 hover:bg-gradient-to-r hover:from-[#cc8c5d] hover:to-[#e6b07a] px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 w-full"
                  >
                    <Phone className="h-5 w-5 text-[#cc8c5d] group-hover:text-[#10172a] transition-colors duration-300" />
                    <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent group-hover:text-[#10172a]">
                      LIGAR AGORA
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa e Endereço */}
          <div className="animate-fade-in-up animate-delay-300 flex flex-col">
            <div
              className="relative overflow-hidden rounded-2xl transition-all duration-300 flex-1"
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
                          "linear-gradient(135deg, #cc8c5d 0%, #e6b07a 100%)",
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
                      <a
                        href="https://www.google.com/maps/place/Diulliany+Ferro+Advogada+Criminal/@-16.6835002,-49.3063929,18.75z/data=!4m6!3m5!1s0x935ef3a425442c83:0x77409912e6f10f58!8m2!3d-16.6831813!4d-49.3047424!16s%2Fg%2F11xm1c_tvj?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 leading-relaxed hover:text-[#cc8c5d] transition-colors duration-300 cursor-pointer block"
                      >
                        Av. Eng. Atílio Corrêa Lima, 742
                        <br />
                        Cidade Jardim, Goiânia - GO, 74425-901
                      </a>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1136.2480799231544!2d-49.30639285158374!3d-16.68350015502697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3a425442c83%3A0x77409912e6f10f58!2sDiulliany%20Ferro%20Advogada%20Criminal!5e0!3m2!1spt-BR!2sde!4v1758197055290!5m2!1spt-BR!2sde&iwloc=near"
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
                <div className="relative bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] p-[2px] rounded-lg transition-all duration-300 hover:shadow-lg group w-full">
                  <a
                    href="https://www.google.com/maps/place/Diulliany+Ferro+Advogada+Criminal/@-16.6835002,-49.3063929,18.75z/data=!4m6!3m5!1s0x935ef3a425442c83:0x77409912e6f10f58!8m2!3d-16.6831813!4d-49.3047424!16s%2Fg%2F11xm1c_tvj?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-900 hover:bg-gradient-to-r hover:from-[#cc8c5d] hover:to-[#e6b07a] px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 w-full"
                  >
                    <Navigation className="h-5 w-5 text-[#cc8c5d] group-hover:text-[#10172a] transition-colors duration-300" />
                    <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent group-hover:text-[#10172a]">
                      Abrir no Google Maps
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
