"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  FileText,
  Clock,
  TrendingUp,
  Phone,
  Scale,
  CheckCircle,
  Zap,
} from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import WhatsAppPopup from "./WhatsAppPopup";
import { startWhatsappConversation } from "@/utils/whatsapp";
import { forcarDiscador } from "@/utils/telefone";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Anima a entrada após o componente montar
    setIsLoaded(true);
  }, []);

  const handleFloatingButtonClick = () => {
    console.log("Button clicked, current showPopup:", showPopup);
    if (showPopup) {
      console.log("Closing popup");
      setShowPopup(false);
    } else {
      console.log("Opening popup");
      setShowPopup(true);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[60vh] flex items-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/escritorio-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/90"></div>

      {/* Background architectural elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-slate-700/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-slate-800/40 to-transparent"></div>
      </div>

      {/* WhatsApp floating button */}
      <button
        onClick={handleFloatingButtonClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer animate-float"
        aria-label="Contato via WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </button>

      {/* WhatsApp Popup */}
      <WhatsAppPopup showPopup={showPopup} onClose={handlePopupClose} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ease-out ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Main Title */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Defesa Criminal
                <br />
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent">
                  Ágil e Especializada
                </span>
              </h1>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Está sendo preso, investigado ou processado? Conte com uma
                advogada experiente, estratégica e dedicada, pronta para agir
                com rapidez e precisão.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => startWhatsappConversation()}
                className="relative bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] hover:from-[#b8794c] hover:to-[#d4a269] text-[#10172a] px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl overflow-hidden group cursor-pointer"
              >
                <WhatsAppIcon className="h-6 w-6 relative z-10" />
                <span className="relative z-10">INICIAR ATENDIMENTO</span>
              </button>

              <div className="relative bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] p-[2px] rounded-lg transition-all duration-300 hover:shadow-lg group">
                <button
                  onClick={() => forcarDiscador()}
                  className="bg-slate-900 hover:bg-gradient-to-r hover:from-[#cc8c5d] hover:to-[#e6b07a] px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 w-full cursor-pointer"
                >
                  <Phone className="h-5 w-5 text-[#cc8c5d] group-hover:text-[#10172a] transition-colors duration-300" />
                  <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent group-hover:text-[#10172a]">
                    LIGAR AGORA
                  </span>
                </button>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-xl mx-auto pt-6">
              <div
                className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 text-center border border-slate-700 transform transition-all duration-800 ease-out delay-700 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1">
                    <Scale className="h-5 w-5 text-[#cc8c5d]/70" />
                    <div className="text-xl md:text-2xl font-bold text-[#cc8c5d]">
                      500+
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Casos de Sucesso
                  </div>
                </div>
              </div>
              <div
                className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 text-center border border-slate-700 transform transition-all duration-800 ease-out delay-800 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-5 w-5 text-[#cc8c5d]/70" />
                    <div className="text-xl md:text-2xl font-bold text-[#cc8c5d]">
                      99%
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Clientes Satisfeitos
                  </div>
                </div>
              </div>
              <div
                className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 text-center border border-slate-700 transform transition-all duration-800 ease-out delay-900 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1">
                    <Zap className="h-5 w-5 text-[#cc8c5d]/70" />
                    <div className="text-xl md:text-2xl font-bold text-[#cc8c5d]">
                      24h
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Atendimento Imediato
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Lawyer Photo */}
          <div
            className={`relative lg:ml-4 transform transition-all duration-1200 ease-out delay-300 ${
              isLoaded
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-10 opacity-0 scale-95"
            }`}
          >
            {/* Main Image Container */}
            <div className="relative flex justify-end">
              {/* Placeholder for lawyer photo */}
              <div className="relative max-w-lg w-full">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative backdrop-blur-md">
                  {/* Glass effect overlay - only blur, no solid color */}
                  <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>
                  {/* Photo */}
                  <Image
                    src="/images/diulliany-ferro.png"
                    alt="Dra. Diulliany Ferro - Advogada Criminalista"
                    fill
                    className="object-cover object-top relative z-10"
                    priority
                  />
                </div>

                {/* Professional Info Card - Compact and positioned at bottom-right corner */}
                <div className="absolute bottom-2 right-2 bg-slate-800/80 backdrop-blur-sm rounded-md px-2 py-1 border border-slate-600/50 z-20">
                  <h3 className="font-semibold text-white text-xs">
                    Dra. Diulliany Ferro
                  </h3>
                  <p className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent font-medium text-xs">
                    OAB/GO 66.387
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-3 -right-3 w-20 h-20 rounded-full blur-xl"
                style={{ backgroundColor: "rgba(204, 140, 93, 0.2)" }}
              ></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-slate-600/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(204, 140, 93, 0.05)" }}
        ></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
