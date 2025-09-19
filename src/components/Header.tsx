"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Scale, Phone, ChevronDown } from "lucide-react";
import { acionarTelefone } from "@/utils/telefone";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Áreas de Atuação", href: "/areas-de-atuacao" },
    {
      name: "Serviços",
      href: "#",
      dropdown: [
        { name: "Habeas Corpus", href: "/servicos/habeas-corpus" },
        { name: "Tribunal do Júri", href: "/servicos/tribunal-do-juri" },
        { name: "Lei de Drogas", href: "/servicos/lei-de-drogas" },
        { name: "Crimes Patrimoniais", href: "/servicos/crimes-patrimoniais" },
        { name: "Violência Doméstica", href: "/servicos/violencia-domestica" },
        { name: "Plantão 24h", href: "/servicos/plantao-24h" },
      ],
    },
    { name: "Artigos", href: "/artigos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/30">
      {/* Main elegant header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Modern Refined Logo */}
          <Link href="/" className="flex items-center group">
            {/* Legal Professional Logo Icon */}
            <div className="relative mr-3 flex items-center justify-center">
              <div className="relative">
                {/* Elegant Circular Frame */}
                <div className="w-12 h-12 rounded-full border-2 border-[#cc8c5d] flex items-center justify-center bg-slate-900">
                  {/* Justice Scale Icon */}
                  <Scale className="h-6 w-6 text-[#cc8c5d]" />
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="leading-none">
              <h1 className="text-xl font-bold text-white tracking-wider uppercase mb-0.5">
                DIULLIANY FERRO
              </h1>
              <div className="flex items-center gap-1">
                {/* Linha esquerda */}
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#cc8c5d]"></div>

                <p className="text-sm bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent font-normal uppercase tracking-[0.15em] px-1">
                  ADVOCACIA
                </p>

                {/* Linha direita */}
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#cc8c5d]"></div>
              </div>
            </div>
          </Link>

          {/* Elegant Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.dropdown && setIsServicesOpen(false)}
              >
                {item.dropdown ? (
                  <>
                    <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-[#cc8c5d]/20 rounded-lg transition-all duration-300 relative group flex items-center gap-1">
                      {item.name}
                      <ChevronDown className="h-3 w-3" />
                      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#cc8c5d] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                    </button>

                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl z-50">
                        <div className="p-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-[#cc8c5d]/20 rounded-lg transition-all duration-300"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-[#cc8c5d]/20 rounded-lg transition-all duration-300 relative group"
                  >
                    {item.name}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#cc8c5d] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Elegant CTA */}
          <div className="hidden lg:block">
            {/* Número da Advogada - Botão Estilo Hero */}
            <div className="relative bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] p-[2px] rounded-lg transition-all duration-300 hover:shadow-lg group">
              <button
                onClick={() => acionarTelefone()}
                className="bg-slate-900 hover:bg-gradient-to-r hover:from-[#cc8c5d] hover:to-[#e6b07a] px-4 py-2 rounded-md font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 text-sm"
              >
                <Phone className="h-4 w-4 text-[#cc8c5d] group-hover:text-[#10172a] transition-colors duration-300" />
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent group-hover:text-[#10172a]">
                  (62) 99529-2129
                </span>
              </button>
            </div>
          </div>

          {/* Modern Mobile menu button with animated hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Modern Mobile Navigation with enhanced transitions */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 transform translate-y-0"
            : "max-h-0 opacity-0 transform -translate-y-4"
        }`}
      >
        <div className="bg-slate-900/98 backdrop-blur-xl border-t border-slate-700/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="space-y-2">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className={`transform transition-all duration-500 ease-out ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                  }}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className="w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-[#cc8c5d]/10 hover:to-[#e6b07a]/10 rounded-xl font-medium transition-all duration-300 group flex items-center justify-between border border-transparent hover:border-[#cc8c5d]/20"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 text-[#cc8c5d] ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`ml-4 mt-2 space-y-1 overflow-hidden transition-all duration-300 ease-out ${
                          isServicesOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.dropdown.map((dropdownItem, dropIndex) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={`block px-4 py-2 text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-[#cc8c5d]/10 hover:to-[#e6b07a]/10 rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-[#cc8c5d] transform ${
                              isServicesOpen
                                ? "translate-x-0 opacity-100"
                                : "translate-x-4 opacity-0"
                            }`}
                            style={{
                              transitionDelay: isServicesOpen
                                ? `${dropIndex * 50}ms`
                                : "0ms",
                            }}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-[#cc8c5d]/10 hover:to-[#e6b07a]/10 rounded-xl font-medium transition-all duration-300 group border border-transparent hover:border-[#cc8c5d]/20"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <div className="w-2 h-2 bg-[#cc8c5d] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
