"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Scale, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Áreas de Atuação", href: "#areas" },
    { name: "Serviços", href: "#servicos" },
    { name: "Artigos", href: "#artigos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/30">
      {/* Main elegant header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Modern Refined Logo */}
          <Link href="/" className="flex items-center group">
            {/* Legal Professional Logo Icon */}
            <div className="relative mr-4 flex items-center justify-center">
              <div className="relative">
                {/* Elegant Circular Frame */}
                <div className="w-12 h-12 rounded-full border-2 border-[#cc8c5d] flex items-center justify-center bg-gradient-to-br from-[#cc8c5d]/10 to-[#b8794c]/10">
                  {/* Justice Scale Icon */}
                  <Scale className="h-6 w-6 text-[#cc8c5d]" />
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="leading-none">
              <h1 className="text-lg font-bold text-white tracking-wider uppercase mb-0.5">
                DIULLIANY FERRO
              </h1>
              <p className="text-xs text-[#cc8c5d] font-normal uppercase tracking-[0.15em]">
                ADVOCACIA
              </p>
            </div>
          </Link>

          {/* Elegant Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-[#cc8c5d]/20 rounded-lg transition-all duration-300 relative group"
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#cc8c5d] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Elegant CTA */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-4">
              {/* Número da Advogada - Botão Estilo Hero */}
              <Link
                href="tel:+5562995292129"
                className="border-2 text-accent hover:text-white px-4 py-2 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 text-sm"
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
                <span className="font-bold">(62) 99529-2129</span>
              </Link>

              {/* Botão Consultar */}
              <Link
                href="#contato"
                className="text-white px-4 py-2.5 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 bg-[#cc8c5d] hover:bg-[#b8794c] group text-sm"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Consultar</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Elegant Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-slate-700/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl font-medium transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <div className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-slate-700/30">
              <Link
                href="#contato"
                className="block w-full bg-gradient-to-r from-[#cc8c5d] to-[#b8794c] hover:from-[#b8794c] hover:to-[#a66d3e] text-white text-center px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-[#cc8c5d]/25 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Consulta Gratuita
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
