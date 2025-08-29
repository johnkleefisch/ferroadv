import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Scale, Users, Clock, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dra. [Nome] - Advocacia Criminal Especializada | São Paulo",
  description:
    "Advocacia criminal especializada com anos de experiência. Defesa eficaz em crimes diversos. Atendimento personalizado 24h. Consulta gratuita.",
  keywords: [
    "advogado criminal",
    "advocacia criminal",
    "defesa criminal",
    "direito penal",
    "advogado criminalista",
  ],
  openGraph: {
    title: "Dra. [Nome] - Advocacia Criminal Especializada",
    description:
      "Defesa criminal eficaz com atendimento personalizado em São Paulo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. [Nome] - Advocacia Criminal",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  Defesa Criminal{" "}
                  <span className="text-amber-600">Especializada</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8">
                  Advocacia criminal com anos de experiência, oferecendo defesa
                  eficaz e atendimento personalizado. Protegemos seus direitos
                  com dedicação e competência técnica.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contato"
                    className="bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition-colors font-medium text-center"
                  >
                    Consulta Gratuita
                  </Link>
                  <Link
                    href="tel:+5511999999999"
                    className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-slate-900 transition-colors font-medium text-center flex items-center justify-center"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Emergência 24h
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-xl">
                  <div className="text-slate-900">
                    <h3 className="text-2xl font-bold mb-4">
                      Atendimento Imediato
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span>Consulta gratuita</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span>Atendimento 24h emergências</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span>Experiência comprovada</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span>Sigilo absoluto</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-4">
                Por que escolher nossa advocacia?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Oferecemos defesa criminal especializada com foco em resultados
                e atendimento humanizado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Experiência Comprovada
                </h3>
                <p className="text-slate-600">
                  Anos de atuação em direito criminal com casos exitosos
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Defesa Estratégica
                </h3>
                <p className="text-slate-600">
                  Estratégias personalizadas para cada caso específico
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Atendimento 24h
                </h3>
                <p className="text-slate-600">
                  Disponibilidade total em casos de emergência
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Atendimento Humanizado
                </h3>
                <p className="text-slate-600">
                  Tratamento respeitoso e compreensivo em momentos difíceis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas Preview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-4">
                Áreas de Atuação
              </h2>
              <p className="text-lg text-slate-600">
                Defesa especializada em diversas áreas do direito criminal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Crimes contra a Pessoa
                </h3>
                <p className="text-slate-600 mb-4">
                  Defesa em casos de homicídio, lesão corporal, ameaça e outros
                  crimes contra a pessoa
                </p>
                <Link
                  href="/areas-atuacao"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  Saiba mais →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Crimes Patrimoniais
                </h3>
                <p className="text-slate-600 mb-4">
                  Furto, roubo, estelionato, apropriação indébita e demais
                  crimes patrimoniais
                </p>
                <Link
                  href="/areas-atuacao"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  Saiba mais →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Crimes de Trânsito
                </h3>
                <p className="text-slate-600 mb-4">
                  Homicídio culposo, embriaguez ao volante e demais infrações de
                  trânsito
                </p>
                <Link
                  href="/areas-atuacao"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  Saiba mais →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-amber-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              Precisa de Ajuda Jurídica?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Não deixe sua situação se agravar. Entre em contato agora mesmo e
              garanta a melhor defesa para seu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="bg-white text-amber-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                Agendar Consulta
              </Link>
              <Link
                href="tel:+5511999999999"
                className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-amber-600 transition-colors font-medium flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                (11) 99999-9999
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
