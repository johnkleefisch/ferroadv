"use client";

import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  Scale,
  Shield,
  FileText,
  Gavel,
  Search,
  Filter,
  Eye,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function ArtigosClient() {
  const [filtroCategoria, setFiltroCategoria] = useState("todos");
  const [termoBusca, setTermoBusca] = useState("");

  const categorias = [
    { id: "todos", nome: "Todos os Artigos", count: 12 },
    { id: "habeas-corpus", nome: "Habeas Corpus", count: 4 },
    { id: "tribunal-juri", nome: "Tribunal do Júri", count: 3 },
    { id: "lei-drogas", nome: "Lei de Drogas", count: 2 },
    { id: "direito-penal", nome: "Direito Penal", count: 3 },
  ];

  const artigos = [
    {
      id: 1,
      titulo: "Habeas Corpus Preventivo: Quando e Como Utilizar",
      resumo:
        "Entenda quando e como utilizar o Habeas Corpus Preventivo para proteger a liberdade antes mesmo da prisão acontecer. Guia completo com jurisprudência atualizada.",
      categoria: "habeas-corpus",
      autor: "Dra. Diulliany Ferro",
      dataPublicacao: "2024-09-10",
      tempoLeitura: "12 min",
      visualizacoes: "1.5k",
      destaque: true,
      tags: ["Habeas Corpus", "Direito Penal", "Liberdade", "Jurisprudência"],
      imagem: "/images/artigo-habeas-corpus.jpg",
    },
    {
      id: 2,
      titulo: "Estratégias de Defesa no Tribunal do Júri",
      resumo:
        "Técnicas avançadas de defesa em crimes dolosos contra a vida, preparação de teses e abordagem dos jurados.",
      categoria: "tribunal-juri",
      autor: "Dra. Diulliany Ferro",
      dataPublicacao: "2024-03-10",
      tempoLeitura: "12 min",
      visualizacoes: "980",
      destaque: true,
      tags: ["Tribunal do Júri", "Defesa Criminal", "Homicídio"],
      imagem: "/images/artigo-tribunal-juri.jpg",
    },
    {
      id: 3,
      titulo: "Nova Lei de Drogas: Mudanças e Impactos",
      resumo:
        "Análise das recentes alterações na legislação sobre drogas e seus reflexos na prática forense.",
      categoria: "lei-drogas",
      autor: "Dra. Diulliany Ferro",
      dataPublicacao: "2024-03-05",
      tempoLeitura: "6 min",
      visualizacoes: "750",
      destaque: false,
      tags: ["Lei de Drogas", "Legislação", "Tráfico"],
      imagem: "/images/artigo-lei-drogas.jpg",
    },
    {
      id: 4,
      titulo: "Prescrição Penal: Cálculo e Aplicação Prática",
      resumo:
        "Guia completo sobre prescrição em direito penal, com exemplos práticos e jurisprudência atualizada.",
      categoria: "direito-penal",
      autor: "Dra. Diulliany Ferro",
      dataPublicacao: "2024-02-28",
      tempoLeitura: "10 min",
      visualizacoes: "1.5k",
      destaque: false,
      tags: ["Prescrição", "Direito Penal", "Processo Penal"],
      imagem: "/images/artigo-prescricao.jpg",
    },
    {
      id: 5,
      titulo: "Provas Ilícitas: Identificação e Exclusão",
      resumo:
        "Como identificar provas obtidas por meios ilícitos e estratégias para sua exclusão do processo penal.",
      categoria: "direito-penal",
      autor: "Dra. Diulliany Ferro",
      dataPublicacao: "2024-02-20",
      tempoLeitura: "9 min",
      visualizacoes: "890",
      destaque: false,
      tags: ["Provas Ilícitas", "Processo Penal", "Direitos Fundamentais"],
      imagem: "/images/artigo-provas-ilicitas.jpg",
    },
    {
      id: 6,
      titulo: "Revisão Criminal: Hipóteses e Procedimentos",
      resumo:
        "Estudo detalhado sobre a ação de revisão criminal, suas hipóteses de cabimento e procedimentos práticos.",
      categoria: "direito-penal",
      autor: "Dra. Diulliany Ferro",
      dataPublicacao: "2024-02-15",
      tempoLeitura: "11 min",
      visualizacoes: "650",
      destaque: false,
      tags: ["Revisão Criminal", "Recursos", "Erro Judiciário"],
      imagem: "/images/artigo-revisao-criminal.jpg",
    },
  ];

  const artigosFiltrados = artigos.filter((artigo) => {
    const filtroCategoriaPassa =
      filtroCategoria === "todos" || artigo.categoria === filtroCategoria;
    const filtroBuscaPassa =
      artigo.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
      artigo.resumo.toLowerCase().includes(termoBusca.toLowerCase()) ||
      artigo.tags.some((tag) =>
        tag.toLowerCase().includes(termoBusca.toLowerCase())
      );

    return filtroCategoriaPassa && filtroBuscaPassa;
  });

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#10172a] text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                  Artigos
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#94a3b8] mb-12 max-w-3xl mx-auto leading-relaxed">
                Conteúdo especializado em direito criminal
              </p>

              <div className="relative w-full max-w-lg mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#94a3b8]" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={termoBusca}
                  onChange={(e) => setTermoBusca(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-sm border border-[#cc8c5d]/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#cc8c5d] transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filtros e Categorias */}
        <section className="py-20 relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #334154 0%, #10172a 50%, #334154 100%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <Filter className="h-6 w-6 text-[#cc8c5d]" />
                <h2 className="text-2xl font-bold text-white">
                  Filtrar por Categoria
                </h2>
              </div>

              <div className="flex flex-wrap gap-4">
                {categorias.map((categoria) => (
                  <button
                    key={categoria.id}
                    onClick={() => setFiltroCategoria(categoria.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      filtroCategoria === categoria.id
                        ? "bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] text-[#10172a]"
                        : "glass-effect text-white hover:text-[#cc8c5d] border border-[#cc8c5d]/20"
                    }`}
                  >
                    {categoria.nome}
                    <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                      {categoria.count}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Grid de Artigos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artigosFiltrados.map((artigo, index) => (
                <motion.article
                  key={artigo.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass-effect rounded-xl overflow-hidden hover-glow group cursor-pointer ${
                    artigo.destaque ? "ring-2 ring-[#cc8c5d]/50" : ""
                  }`}
                >
                  <Link
                    href={
                      artigo.id === 1
                        ? "/artigos/habeas-corpus-preventivo"
                        : "#"
                    }
                  >
                    {/* Imagem do Artigo */}
                    <div className="h-48 bg-gradient-to-br from-[#cc8c5d]/20 to-[#f3c793]/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#cc8c5d]/10 to-[#f3c793]/10" />
                      <div className="absolute top-4 left-4">
                        {artigo.destaque && (
                          <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] text-[#10172a] px-3 py-1 rounded-full text-xs font-bold">
                            DESTAQUE
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="flex items-center gap-2 text-white/80">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm">
                            {artigo.visualizacoes}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Categoria e Data */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#cc8c5d] font-semibold">
                          {
                            categorias.find((c) => c.id === artigo.categoria)
                              ?.nome
                          }
                        </span>
                        <div className="flex items-center gap-2 text-[#94a3b8]">
                          <Calendar className="h-4 w-4" />
                          <span>{formatarData(artigo.dataPublicacao)}</span>
                        </div>
                      </div>

                      {/* Título */}
                      <h3 className="text-xl font-bold text-white group-hover:text-[#cc8c5d] transition-colors duration-300">
                        {artigo.titulo}
                      </h3>

                      {/* Resumo */}
                      <p className="text-[#94a3b8] leading-relaxed">
                        {artigo.resumo}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {artigo.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/10 rounded-full text-xs text-[#94a3b8]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer do Card */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-[#10172a]" />
                          </div>
                          <div>
                            <div className="text-white text-sm font-semibold">
                              {artigo.autor}
                            </div>
                            <div className="flex items-center gap-1 text-[#94a3b8] text-xs">
                              <Clock className="h-3 w-3" />
                              <span>{artigo.tempoLeitura}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-[#cc8c5d] hover:text-[#f3c793] transition-colors duration-300">
                          <span className="text-sm font-semibold">
                            Ler mais
                          </span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Mensagem quando não há resultados */}
            {artigosFiltrados.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <BookOpen className="h-16 w-16 text-[#94a3b8] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Nenhum artigo encontrado
                </h3>
                <p className="text-[#94a3b8]">
                  Tente ajustar os filtros ou termo de busca.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter/CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#10172a] mb-6">
                Precisa de Consultoria Jurídica?
              </h2>
              <p className="text-xl text-[#10172a]/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                Transforme o conhecimento em{" "}
                <strong>resultados práticos</strong>. Entre em contato para
                consultoria especializada em direito criminal.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <a
                  href="https://wa.me/5562995292129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-lg shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+5562995292129"
                  className="bg-white text-[#cc8c5d] px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-3 text-lg shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <Phone className="h-6 w-6" />
                  <span>(62) 99529-2129</span>
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#10172a]">
                  <div className="text-center">
                    <div className="font-bold text-2xl">24h</div>
                    <div className="text-sm">Atendimento</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl">15+</div>
                    <div className="text-sm">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl">500+</div>
                    <div className="text-sm">Casos de Sucesso</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
