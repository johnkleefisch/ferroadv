import Link from "next/link";
import { Scale, Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer-gradient text-primary">
      <div className="container-default">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Scale
                className="h-10 w-10 text-accent mr-4"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-2xl font-playfair font-bold">
                  <span className="text-accent">D</span>iulliany{" "}
                  <span className="text-accent">F</span>erro
                </h3>
                <p className="text-secondary font-medium uppercase tracking-wider">
                  Advocacia Criminal
                </p>
              </div>
            </div>
            <p className="text-secondary mb-6 max-w-md leading-relaxed text-lg">
              Advocacia especializada em direito criminal com anos de
              experiência em defesa eficaz. Atendimento personalizado e
              comprometido com a proteção dos seus direitos.
            </p>
            <div className="text-secondary">
              <p className="font-bold text-primary mb-2 text-lg">
                OAB/SP: [Número]
              </p>
              <p className="font-medium">Registro no Conselho Federal da OAB</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Contato</h3>
            <div className="space-y-4 text-secondary">
              <div className="flex items-center group">
                <Phone
                  className="h-5 w-5 mr-4 text-accent group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
                <span className="font-medium group-hover:text-accent transition-colors duration-300">
                  (11) 99999-9999
                </span>
              </div>
              <div className="flex items-center group">
                <Mail
                  className="h-5 w-5 mr-4 text-accent group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
                <span className="font-medium group-hover:text-accent transition-colors duration-300">
                  diuferroadv@gmail.com
                </span>
              </div>
              <div className="flex items-start group">
                <MapPin
                  className="h-5 w-5 mr-4 text-accent mt-1 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium group-hover:text-accent transition-colors duration-300">
                    São Paulo - SP
                  </p>
                  <p className="text-sm">Atendimento presencial</p>
                  <p className="text-sm">e online</p>
                </div>
              </div>
              <div className="flex items-center group">
                <Clock
                  className="h-5 w-5 mr-4 text-accent group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium group-hover:text-accent transition-colors duration-300">
                    Seg-Sex: 8h às 18h
                  </p>
                  <p className="text-sm text-accent font-semibold">
                    Emergências: 24h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">
              Links Rápidos
            </h3>
            <ul className="space-y-3 text-secondary">
              <li>
                <Link
                  href="#sobre"
                  className="hover:text-accent transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                >
                  Sobre a Advogada
                </Link>
              </li>
              <li>
                <Link
                  href="#areas"
                  className="hover:text-accent transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                >
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link
                  href="#resultados"
                  className="hover:text-accent transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                >
                  Resultados
                </Link>
              </li>
              <li>
                <Link
                  href="#depoimentos"
                  className="hover:text-accent transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-accent transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="hover:text-accent transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary text-sm font-medium">
              © {new Date().getFullYear()} Dra. Diulliany Ferro - Advocacia
              Criminal. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4 text-sm text-secondary">
              <span>Desenvolvido com</span>
              <Heart
                className="h-4 w-4 text-accent fill-current"
                aria-hidden="true"
              />
              <span>para defender seus direitos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
