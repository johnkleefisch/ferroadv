"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Scale } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Áreas de Atuação", href: "#areas" },
    { name: "Resultados", href: "#resultados" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/30">
      {/* Main elegant header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Refined Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative mr-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#cc8c5d] to-[#b8794c] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[#cc8c5d]/25 transition-all duration-300">
                <Scale className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#cc8c5d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">
                Diulliany <span className="text-accent">Ferro</span>
              </h1>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-[0.2em]">
                Advocacia Criminal
              </p>
            </div>
          </Link>

          {/* Elegant Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 relative group"
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Elegant CTA */}
          <div className="hidden lg:block">
            <Link
              href="#contato"
              className="bg-gradient-to-r from-[#cc8c5d] to-[#b8794c] hover:from-[#b8794c] hover:to-[#a66d3e] text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-[#cc8c5d]/25 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Consulta Gratuita</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#b8794c] to-[#cc8c5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
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
