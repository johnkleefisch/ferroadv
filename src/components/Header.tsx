"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Scale, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Áreas de Atuação", href: "/areas-atuacao" },
    { name: "Artigos", href: "/artigos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contato@diuferroadv.com.br</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Atendimento 24h em casos urgentes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Scale className="h-8 w-8 text-amber-600 mr-3" />
              <div>
                <h1 className="text-2xl font-playfair font-bold text-slate-900">
                  Dra. [Nome]
                </h1>
                <p className="text-sm text-slate-600">Advocacia Criminal</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contato"
              className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors duration-200 font-medium"
            >
              Consulta Gratuita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-slate-900"
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
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-amber-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contato"
              className="bg-amber-600 text-white block px-3 py-2 text-base font-medium rounded-md mt-4 text-center"
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
