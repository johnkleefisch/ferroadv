"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  AlertTriangle,
} from "lucide-react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log("Formulário enviado:", formData);
    // Resetar formulário após envio
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    });
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contatos = [
    {
      icon: Phone,
      titulo: "Telefone",
      info: "(11) 99999-9999",
      descricao: "Atendimento de segunda a sexta",
      link: "tel:+5511999999999",
    },
    {
      icon: MessageCircle,
      titulo: "WhatsApp",
      info: "(11) 99999-9999",
      descricao: "Resposta rápida",
      link: "https://wa.me/5511999999999",
    },
    {
      icon: Mail,
      titulo: "E-mail",
      info: "diuferroadv@gmail.com",
      descricao: "Resposta em até 24h",
      link: "mailto:diuferroadv@gmail.com",
    },
    {
      icon: MapPin,
      titulo: "Endereço",
      info: "São Paulo - SP",
      descricao: "Atendimento presencial",
      link: "#",
    },
  ];

  return (
    <section id="contato" className="bg-section-b py-20">
      <div className="container-default">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ajudá-lo. Entre em contato conosco para uma
            consulta inicial gratuita e confidencial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Informações de Contato */}
          <div className="space-y-8 animate-fade-in-up animate-delay-200">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Fale Conosco
              </h3>
              <p className="text-secondary leading-relaxed mb-8">
                Oferecemos diferentes canais de atendimento para sua comodidade.
                Escolha o mais conveniente para você.
              </p>
            </div>

            <div className="space-y-6">
              {contatos.map((contato, index) => {
                const IconComponent = contato.icon;
                return (
                  <a
                    key={index}
                    href={contato.link}
                    className="block group"
                    target={
                      contato.titulo === "WhatsApp" ? "_blank" : undefined
                    }
                    rel={
                      contato.titulo === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <div className="card-glass p-6 border border-white/10 hover:border-accent/30 transition-all duration-300 group-hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className="bg-accent/20 p-3 rounded-2xl group-hover:bg-accent/30 transition-all duration-300">
                          <IconComponent
                            className="h-6 w-6 text-accent"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-primary mb-1">
                            {contato.titulo}
                          </h4>
                          <p className="text-accent font-semibold mb-1">
                            {contato.info}
                          </p>
                          <p className="text-secondary text-sm">
                            {contato.descricao}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="card-glass p-6 border border-accent/20">
              <div className="flex items-center mb-4">
                <Clock
                  className="h-5 w-5 text-accent mr-3"
                  aria-hidden="true"
                />
                <span className="font-bold text-primary">
                  Horário de Atendimento
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary">Segunda a Sexta:</span>
                  <span className="text-primary font-medium">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Sábado:</span>
                  <span className="text-primary font-medium">9h às 13h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent font-semibold">
                    Emergências:
                  </span>
                  <span className="text-accent font-semibold">24h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-2 animate-fade-in-up animate-delay-300">
            <div className="card-glass p-8 lg:p-10 border border-white/10">
              <h3 className="text-2xl font-bold text-primary mb-8">
                Envie sua Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-semibold text-primary mb-2"
                    >
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 text-primary placeholder-secondary"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-semibold text-primary mb-2"
                    >
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 text-primary placeholder-secondary"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-primary mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 text-primary placeholder-secondary"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-sm font-semibold text-primary mb-2"
                  >
                    Tipo de Caso *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 text-primary"
                  >
                    <option value="">Selecione o tipo de caso</option>
                    <option value="crimes-pessoa">
                      Crimes contra a Pessoa
                    </option>
                    <option value="crimes-patrimoniais">
                      Crimes Patrimoniais
                    </option>
                    <option value="crimes-transito">Crimes de Trânsito</option>
                    <option value="violencia-domestica">
                      Violência Doméstica
                    </option>
                    <option value="tribunal-juri">Tribunal do Júri</option>
                    <option value="outros">Outros</option>
                    <option value="orientacao">Orientação Jurídica</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-semibold text-primary mb-2"
                  >
                    Descreva seu caso *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={6}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-vertical text-primary placeholder-secondary"
                    placeholder="Descreva brevemente sua situação. Todas as informações serão tratadas com sigilo absoluto."
                  />
                </div>

                <div className="bg-accent/10 border border-accent/20 p-6 rounded-2xl">
                  <p className="text-sm text-primary">
                    <span className="text-accent font-bold">
                      🔒 Sigilo Garantido:
                    </span>{" "}
                    Todas as informações compartilhadas são protegidas pelo
                    sigilo profissional e tratadas com absoluta
                    confidencialidade.
                  </p>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-3 text-lg group"
                >
                  <Send
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Emergência */}
        <div className="text-center animate-fade-in-up animate-delay-400">
          <div className="card-glass border border-red-500/30 p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle
                className="h-8 w-8 text-red-400 mr-4"
                aria-hidden="true"
              />
              <h4 className="text-2xl font-bold text-red-400">
                Situação de Emergência?
              </h4>
            </div>
            <p className="text-primary mb-8 text-lg leading-relaxed">
              Se você foi preso, está sendo procurado ou precisa de atendimento
              urgente, entre em contato imediatamente:
            </p>
            <a
              href="tel:+5511999999999"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center space-x-3 text-lg"
            >
              <Phone className="h-6 w-6" aria-hidden="true" />
              <span>Ligar Agora - Emergência 24h</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
