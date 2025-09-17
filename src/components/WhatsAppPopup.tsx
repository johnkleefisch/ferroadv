"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import Image from "next/image";

interface WhatsAppPopupProps {
  showPopup?: boolean;
  onClose?: () => void;
}

export default function WhatsAppPopup({
  showPopup = false,
  onClose,
}: WhatsAppPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAutoShown, setHasAutoShown] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  // Saudação dinâmica para o botão WhatsApp
  const getGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 18 || hour < 5) {
      return "Boa noite";
    } else if (hour >= 5 && hour < 12) {
      return "Bom dia";
    } else {
      return "Boa tarde";
    }
  };
  const greeting = getGreeting();
  const whatsappMessage = `${greeting}, Dra. Diulliany! Encontrei seu contato no site e gostaria de apoio jurídico.`;

  useEffect(() => {
    // Atualiza o horário atual
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 60000); // Atualiza a cada minuto

    // Mostra o popup automaticamente após 10 segundos (apenas uma vez e se não estiver sendo controlado manualmente)
    let timer: NodeJS.Timeout;
    if (!hasAutoShown && !showPopup) {
      timer = setTimeout(() => {
        setIsVisible(true);
        setHasAutoShown(true);
      }, 10000);
    }

    return () => {
      if (timer) clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, [hasAutoShown, showPopup]);

  // Efeito para mostrar/ocultar popup quando o botão flutuante é clicado
  useEffect(() => {
    console.log("WhatsAppPopup: showPopup changed to:", showPopup);
    if (showPopup) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [showPopup]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/5562995292129?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* CSS para animação customizada */}
      <style jsx>{`
        @keyframes growFromBottom {
          0% {
            height: 0;
            min-height: 0;
            transform: translateY(0);
            opacity: 0;
            overflow: hidden;
          }
          20% {
            height: 60px;
            min-height: 60px;
            transform: translateY(0);
            opacity: 0.3;
            overflow: hidden;
          }
          60% {
            height: 150px;
            min-height: 150px;
            transform: translateY(0);
            opacity: 0.8;
            overflow: hidden;
          }
          100% {
            height: auto;
            min-height: auto;
            transform: translateY(0);
            opacity: 1;
            overflow: visible;
          }
        }

        @keyframes contentSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          60% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .popup-container {
          animation: growFromBottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          transform-origin: bottom center;
        }

        .popup-header {
          animation: contentSlideUp 0.3s ease-out 0.1s both;
        }

        .popup-message {
          animation: contentSlideUp 0.3s ease-out 0.2s both;
        }

        .popup-button {
          animation: contentSlideUp 0.3s ease-out 0.3s both;
        }
      `}</style>

      <div className="fixed bottom-24 right-6 z-40 w-72 popup-container">
        {/* Botão de fechar flutuante */}
        <div className="absolute -top-2 -right-2 z-50">
          <button
            onClick={handleClose}
            className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-1.5 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Fechar"
          >
            <X className="h-3 w-3" />
          </button>
        </div>

        {/* Popup Container */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-[#128C7E] text-white p-2 flex items-center popup-header">
            <div className="flex items-center space-x-2">
              <div className="relative">
                {/* Foto da advogada */}
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-[#cc8c5d] to-[#e6b07a] flex items-center justify-center">
                  <Image
                    src="/images/diulliany-about.webp"
                    alt="Dra. Diulliany Ferro"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Status online */}
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border border-white"></div>
              </div>
              <div>
                <h3
                  className="font-semibold text-sm font-sans"
                  style={{
                    fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Dra. Diulliany Ferro
                </h3>
                <p
                  className="text-[11px] text-green-100 font-sans"
                  style={{ fontFamily: "Inter, Segoe UI, Arial, sans-serif" }}
                >
                  Online
                </p>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="p-3 bg-[#ECE5DD] popup-message">
            {/* Message Bubble */}
            <div className="bg-white rounded-lg p-2.5 shadow-sm relative">
              {/* Message tail */}
              <div className="absolute left-0 top-2 w-0 h-0 border-t-[4px] border-t-transparent border-r-[6px] border-r-white border-b-[4px] border-b-transparent -ml-1.5"></div>

              <p
                className="text-gray-800 text-sm leading-relaxed font-sans"
                style={{ fontFamily: "Inter, Segoe UI, Arial, sans-serif" }}
              >
                Olá! Aqui é a{" "}
                <span className="font-semibold">Dra. Diulliany Ferro</span>. Se
                precisar de apoio jurídico, estou disponível para ajudar você
                agora.
              </p>

              {/* Time and check marks */}
              <div className="flex items-center justify-end mt-1.5 space-x-1">
                <span className="text-xs text-gray-500">{currentTime}</span>
                <div className="flex -space-x-0.5">
                  <svg
                    className="w-2.5 h-2.5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className="w-2.5 h-2.5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-2.5 bg-white popup-button">
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-md hover:shadow-lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="text-sm">Conversar</span>
            </button>
          </div>
        </div>

        {/* Pointer/Arrow pointing to WhatsApp button */}
        <div className="absolute -bottom-1.5 right-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
      </div>
    </>
  );
}
