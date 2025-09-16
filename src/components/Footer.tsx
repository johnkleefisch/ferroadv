import Link from "next/link";
import { Scale, Phone, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/30">
      <div className="container mx-auto px-6 py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center group mb-6">
              {/* Logo */}
              <div className="w-12 h-12 rounded-full border-2 border-[#cc8c5d] flex items-center justify-center bg-slate-900 mr-4">
                <Scale className="h-6 w-6 text-[#cc8c5d]" />
              </div>

              {/* Typography */}
              <div className="leading-none">
                <h1 className="text-xl font-bold text-white tracking-wider uppercase mb-0.5">
                  DIULLIANY FERRO
                </h1>
                <div className="flex items-center gap-1">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#cc8c5d]"></div>
                  <p className="text-sm bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent font-semibold uppercase tracking-[0.15em] px-1">
                    ADVOCACIA
                  </p>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#cc8c5d]"></div>
                </div>
              </div>
            </Link>

            {/* Descrição simples */}
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Advocacia especializada em direito criminal com atendimento
              personalizado e defesa estratégica.
            </p>

            {/* CTAs - Iguais ao Hero */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] hover:from-[#b8794c] hover:to-[#d4a269] text-[#10172a] px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl overflow-hidden group"
              >
                {/* Gradiente sutil overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/5 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <WhatsAppIcon className="h-6 w-6 relative z-10" />
                <span className="relative z-10">INICIAR ATENDIMENTO</span>
              </a>

              <div className="relative bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] p-[2px] rounded-lg transition-all duration-300 hover:shadow-lg group">
                <a
                  href="tel:062995292129"
                  className="bg-slate-900 hover:bg-gradient-to-r hover:from-[#cc8c5d] hover:to-[#e6b07a] px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 w-full"
                >
                  <Phone className="h-5 w-5 text-[#cc8c5d] group-hover:text-[#10172a] transition-colors duration-300" />
                  <span className="bg-gradient-to-r from-[#cc8c5d] to-[#e6b07a] bg-clip-text text-transparent group-hover:text-[#10172a]">
                    LIGAR AGORA
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegação</h4>
            <nav className="space-y-2">
              {[
                { href: "#sobre", label: "Sobre" },
                { href: "#areas-de-atuacao", label: "Áreas de Atuação" },
                { href: "#resultados", label: "Resultados" },
                { href: "#depoimentos", label: "Depoimentos" },
                { href: "#contato", label: "Contato" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-slate-400 hover:text-[#cc8c5d] transition-colors duration-300 py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-[#cc8c5d] mr-3 mt-0.5" />
                <div>
                  <span className="text-slate-300 text-sm block">
                    Av. Eng. Atílio Corrêa Lima, 742
                  </span>
                  <span className="text-slate-300 text-sm">
                    Cidade Jardim, Goiânia - GO
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-4 w-4 text-[#cc8c5d] mr-3" />
                <a
                  href="tel:+5562995292129"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  (62) 99529-2129
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="h-4 w-4 text-[#cc8c5d] mr-3" />
                <a
                  href="mailto:contato.ferroadv@gmail.com"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  contato.ferroadv@gmail.com
                </a>
              </div>

              {/* Redes Sociais */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://wa.me/5562995292129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700/50 hover:bg-[#cc8c5d] rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5 text-slate-300 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700/50 hover:bg-[#cc8c5d] rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5 text-slate-300 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="tel:+5562995292129"
                  className="w-10 h-10 bg-slate-700/50 hover:bg-[#cc8c5d] rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label="Telefone"
                >
                  <Phone className="h-5 w-5 text-slate-300 group-hover:text-white" />
                </a>
                <a
                  href="mailto:contato.ferroadv@gmail.com"
                  className="w-10 h-10 bg-slate-700/50 hover:bg-[#cc8c5d] rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label="E-mail"
                >
                  <Mail className="h-5 w-5 text-slate-300 group-hover:text-white" />
                </a>
                <a
                  href="https://maps.google.com/?q=Av.+Eng.+Atílio+Corrêa+Lima,+742,+Cidade+Jardim,+Goiânia+-+GO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700/50 hover:bg-[#cc8c5d] rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label="Localização"
                >
                  <MapPin className="h-5 w-5 text-slate-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700/30 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <div className="mb-2 md:mb-0">
              © {new Date().getFullYear()}{" "}
              <span className="text-[#e6b07a] font-semibold">
                DIULLIANY FERRO
              </span>{" "}
              - Todos os direitos reservados
            </div>
            <div>OAB/GO: 123.456</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
