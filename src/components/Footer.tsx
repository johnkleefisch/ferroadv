import Link from "next/link";
import { Scale, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-amber-600 mr-3" />
              <div>
                <h3 className="text-xl font-playfair font-bold">Dra. [Nome]</h3>
                <p className="text-slate-300">Advocacia Criminal</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Advocacia especializada em direito criminal com anos de
              experiência em defesa eficaz. Atendimento personalizado e
              comprometido com a proteção dos seus direitos.
            </p>
            <div className="text-slate-300">
              <p className="font-semibold text-white mb-2">OAB/SP: [Número]</p>
              <p>Registro no Conselho Federal da OAB</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-amber-600" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-amber-600" />
                <span>contato@diuferroadv.com.br</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-amber-600 mt-0.5" />
                <div>
                  <p>Rua [Endereço], 123</p>
                  <p>Centro - São Paulo/SP</p>
                  <p>CEP: 01000-000</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-amber-600" />
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-amber-600 transition-colors"
                >
                  Sobre a Advogada
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-atuacao"
                  className="hover:text-amber-600 transition-colors"
                >
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link
                  href="/artigos"
                  className="hover:text-amber-600 transition-colors"
                >
                  Artigos Jurídicos
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-amber-600 transition-colors"
                >
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidade"
                  className="hover:text-amber-600 transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Dra. [Nome] - Advocacia Criminal.
              Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-slate-400">
              <Link
                href="/termos-uso"
                className="hover:text-amber-600 transition-colors"
              >
                Termos de Uso
              </Link>
              <span>|</span>
              <Link
                href="/politica-privacidade"
                className="hover:text-amber-600 transition-colors"
              >
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
