"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  AlertTriangle,
  Navigation,
  Building,
  User,
  Send,
} from "lucide-react";

export default function ContatoClient() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formatação da mensagem para WhatsApp
    const message = `
*Novo Contato - DiuferroAdv*

*Nome:* ${formData.nome}
*Email:* ${formData.email}
*Telefone:* ${formData.telefone}
*Assunto:* ${formData.assunto}

*Mensagem:*
${formData.mensagem}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const coordenadas = "-23.5978,-46.6864";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1f2e] via-[#1e2435] to-[#1a1f2e] py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Entre em <span className="text-[#cc8c5d]">Contato</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Precisa de ajuda jurídica? Nossa equipe está pronta para defender
            seus direitos. Entre em contato conosco e receba a orientação que
            você precisa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="relative overflow-hidden rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(26, 31, 46, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 text-[#cc8c5d] mr-3" />
                Envie sua Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-white/90 font-medium mb-2"
                    >
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#cc8c5d] focus:border-transparent transition-all duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-white/90 font-medium mb-2"
                    >
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#cc8c5d] focus:border-transparent transition-all duration-300"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/90 font-medium mb-2"
                  >
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#cc8c5d] focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-white/90 font-medium mb-2"
                  >
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#cc8c5d] focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-[#1a1f2e] text-white">
                      Selecione o assunto
                    </option>
                    <option
                      value="habeas-corpus"
                      className="bg-[#1a1f2e] text-white"
                    >
                      Habeas Corpus
                    </option>
                    <option
                      value="prisao-flagrante"
                      className="bg-[#1a1f2e] text-white"
                    >
                      Prisão em Flagrante
                    </option>
                    <option
                      value="defesa-criminal"
                      className="bg-[#1a1f2e] text-white"
                    >
                      Defesa Criminal
                    </option>
                    <option value="recurso" className="bg-[#1a1f2e] text-white">
                      Recurso
                    </option>
                    <option
                      value="consultoria"
                      className="bg-[#1a1f2e] text-white"
                    >
                      Consultoria Jurídica
                    </option>
                    <option value="outros" className="bg-[#1a1f2e] text-white">
                      Outros
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-white/90 font-medium mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#cc8c5d] focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Descreva detalhadamente sua situação jurídica..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#cc8c5d] hover:bg-[#b8794c] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center space-x-2 group"
                >
                  <Send className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Enviar Mensagem via WhatsApp</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Informações Principais */}
            <div
              className="relative overflow-hidden rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(26, 31, 46, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Building className="h-6 w-6 text-[#cc8c5d] mr-3" />
                Informações de Contato
              </h3>

              <div className="space-y-4">
                {/* Telefone */}
                <a
                  href="tel:+5511999999999"
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 rounded-full bg-[#cc8c5d] mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold block">
                      Telefone:
                    </span>
                    <span className="text-white/90 group-hover:text-[#cc8c5d] transition-colors">
                      (11) 99999-9999
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contato@diuferroadv.com.br"
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 rounded-full bg-[#cc8c5d] mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold block">
                      E-mail:
                    </span>
                    <span className="text-white/90 group-hover:text-[#cc8c5d] transition-colors">
                      contato@diuferroadv.com.br
                    </span>
                  </div>
                </a>

                {/* Endereço */}
                <div className="flex items-start space-x-4 p-3 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#cc8c5d] mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold block">
                      Endereço:
                    </span>
                    <span className="text-white/90">
                      Av. Paulista, 1234 - Sala 567
                      <br />
                      Bela Vista - São Paulo/SP
                      <br />
                      CEP: 01310-100
                    </span>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start space-x-4 p-3 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#cc8c5d] mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold block">
                      Horário de Atendimento:
                    </span>
                    <span className="text-white/90">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 12h
                    </span>
                  </div>
                </div>

                {/* Atendimento Online */}
                <div className="flex items-start space-x-4 p-3 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#cc8c5d] mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold block">
                      Atendimento Online:
                    </span>
                    <span className="text-white/90">Todo o Brasil</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div
              className="relative overflow-hidden rounded-2xl backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(26, 31, 46, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-[#cc8c5d] mr-3" />
                  Localização
                </h3>

                <div className="rounded-xl overflow-hidden border border-white/10 h-64 mb-4">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1153932883!2d-46.6864!3d-23.5978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzUyLjEiUyA0NsKwNDEnMTEuMCJX!5e0!3m2!1spt!2sbr!4v1640995200000!5m2!1spt!2sbr`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do Escritório DiuferroAdv"
                    className="filter saturate-[0.3] brightness-110 contrast-90 hover:saturate-100 hover:brightness-100 hover:contrast-100 transition-all duration-500"
                  />
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${coordenadas}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 inline-flex items-center justify-center space-x-2 bg-[#cc8c5d] hover:bg-[#b8794c] group"
                >
                  <Navigation className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Seção de Emergência */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div
            className="relative overflow-hidden rounded-2xl transition-all duration-300 group p-8 lg:p-12 max-w-4xl mx-auto"
            style={{
              backgroundColor: "#1a1f2e",
              background: `
                linear-gradient(135deg, 
                  rgba(239, 68, 68, 0.05) 0%, 
                  rgba(239, 68, 68, 0.02) 25%, 
                  transparent 50%
                ),
                #1a1f2e
              `,
              border: "1px solid rgba(239, 68, 68, 0.2)",
              boxShadow: `
                0 4px 20px rgba(239, 68, 68, 0.1),
                inset 0 1px 0 rgba(239, 68, 68, 0.05)
              `,
            }}
          >
            {/* Efeito de Brilho Superior Esquerdo */}
            <div
              className="absolute top-0 left-0 w-24 h-24 pointer-events-none opacity-15"
              style={{
                background:
                  "radial-gradient(circle at 0% 0%, rgba(239, 68, 68, 0.15) 0%, transparent 70%)",
              }}
            />

            <div className="flex items-center justify-center mb-6 relative z-10">
              <AlertTriangle
                className="h-8 w-8 text-red-400 mr-4"
                aria-hidden="true"
              />
              <h4 className="text-2xl font-bold text-red-400">
                Situação de Emergência?
              </h4>
            </div>
            <p className="text-white mb-8 text-lg leading-relaxed relative z-10">
              Se você foi preso, está sendo procurado ou precisa de atendimento
              urgente, entre em contato imediatamente:
            </p>
            <a
              href="tel:+5511999999999"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center space-x-3 text-lg group/emergency relative z-10"
            >
              <Phone
                className="h-6 w-6 group-hover/emergency:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              <span>Ligar Agora - Emergência 24h</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
