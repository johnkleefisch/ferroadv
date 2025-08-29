"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Scale, Phone, Mail } from "lucide-react";

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
    <header className="bg-header-gradient sticky top-0 z-50 backdrop-blur-sm">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-[#080a10] to-[#10172a] text-primary py-1 border-b border-white/10">
        <div className="container-default py-0">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone
                  className="h-4 w-4 mr-2 text-accent"
                  aria-hidden="true"
                />
                <span className="font-medium">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-accent" aria-hidden="true" />
                <span className="font-medium">diuferroadv@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-secondary font-medium">
                Atendimento 24h em casos urgentes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-default py-0">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Scale
                  className="h-8 w-8 text-accent mr-3 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-xl font-playfair font-bold text-primary tracking-tight">
                  <span className="text-accent">D</span>iulliany{" "}
                  <span className="text-accent">F</span>erro
                </h1>
                <p className="text-xs text-secondary font-medium uppercase tracking-wider">
                  Advocacia Criminal
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-accent px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 rounded-lg hover:bg-white/5 focus-visible"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contato"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Consulta Gratuita</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:text-accent p-2 rounded-lg transition-colors duration-300 focus-visible"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#10172a] to-[#334154] border-t border-white/10 backdrop-blur-md">
          <div className="px-6 pt-4 pb-6 space-y-3">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-secondary hover:text-accent block px-4 py-3 text-base font-semibold uppercase tracking-wide rounded-lg hover:bg-white/5 transition-all duration-300 animate-fade-in-up animate-delay-${
                  index * 100
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contato"
              className="btn-primary w-full text-center mt-6 animate-fade-in-up animate-delay-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Consulta Gratuita
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
