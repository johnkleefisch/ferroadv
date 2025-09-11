"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  BookOpen,
  Scale,
  Shield,
  AlertTriangle,
  CheckCircle,
  FileText,
  Gavel,
  Eye,
  Copy,
  MessageCircle,
  Phone,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Ícones customizados das redes sociais
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

export default function HabeasCorpusPreventivo() {
  const [views] = useState(1543);

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: WhatsAppIcon,
      color: "hover:bg-green-500/20 hover:text-green-400",
      action: () => {
        const text = encodeURIComponent(
          "Habeas Corpus Preventivo: Quando e Como Utilizar - DiuferroAdv"
        );
        const url = encodeURIComponent(window.location.href);
        window.open(`https://wa.me/?text=${text}%20${url}`, "_blank");
      },
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      color: "hover:bg-blue-500/20 hover:text-blue-400",
      action: () => {
        const url = encodeURIComponent(window.location.href);
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          "_blank"
        );
      },
    },
    {
      name: "X (Twitter)",
      icon: TwitterIcon,
      color: "hover:bg-gray-500/20 hover:text-gray-400",
      action: () => {
        const text = encodeURIComponent(
          "Habeas Corpus Preventivo: Quando e Como Utilizar"
        );
        const url = encodeURIComponent(window.location.href);
        window.open(
          `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
          "_blank"
        );
      },
    },
    {
      name: "Telegram",
      icon: TelegramIcon,
      color: "hover:bg-blue-400/20 hover:text-blue-300",
      action: () => {
        const text = encodeURIComponent(
          "Habeas Corpus Preventivo: Quando e Como Utilizar"
        );
        const url = encodeURIComponent(window.location.href);
        window.open(`https://t.me/share/url?url=${url}&text=${text}`, "_blank");
      },
    },
    {
      name: "Copiar Link",
      icon: Copy,
      color: "hover:bg-purple-500/20 hover:text-purple-400",
      action: () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copiado para a área de transferência!");
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#10172a] via-[#1a2332] to-[#0f1419]">
        {/* Header do Artigo */}
        <section className="relative pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navegação */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link
                href="/artigos"
                className="inline-flex items-center gap-2 text-[#cc8c5d] hover:text-[#f3c793] transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar para Artigos</span>
              </Link>
            </motion.div>

            {/* Título e Metadados */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 text-[#cc8c5d] mb-4">
                <Scale className="h-5 w-5" />
                <span className="font-medium">Habeas Corpus</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Habeas Corpus Preventivo:
                <span className="text-[#cc8c5d]"> Quando e Como Utilizar</span>
              </h1>

              <p className="text-xl text-[#94a3b8] mb-8 leading-relaxed max-w-3xl">
                Entenda quando e como utilizar o Habeas Corpus Preventivo para
                proteger a liberdade antes mesmo da prisão acontecer.
              </p>

              {/* Metadados do Artigo */}
              <div className="flex flex-wrap items-center gap-6 text-[#94a3b8] mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#cc8c5d]">
                    <Image
                      src="/images/diulliany-ferro.png"
                      alt="Dra. Diulliany Ferro"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover object-top scale-125"
                    />
                  </div>
                  <span>Dra. Diulliany Ferro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#cc8c5d]" />
                  <span>10 de Setembro, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#cc8c5d]" />
                  <span>12 min de leitura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-[#cc8c5d]" />
                  <span>{views} visualizações</span>
                </div>
              </div>

              {/* Compartilhamento com Linhas */}
              <div className="flex items-center gap-4 mb-8">
                {/* Linha esquerda */}
                <div className="flex-1 h-px bg-[#cc8c5d]"></div>

                {/* Ícones das redes sociais */}
                <div className="flex items-center gap-3 px-4">
                  {shareOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <button
                        key={index}
                        onClick={option.action}
                        className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#94a3b8] transition-all duration-300 hover:scale-110 ${option.color}`}
                        title={option.name}
                      >
                        <IconComponent className="h-4 w-4" />
                      </button>
                    );
                  })}
                </div>

                {/* Linha direita */}
                <div className="flex-1 h-px bg-[#cc8c5d]"></div>
              </div>

              {/* Imagem do Artigo */}
              <div className="mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/images/escritorio-background.jpg"
                  alt="Habeas Corpus Preventivo - Proteção Legal"
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                  priority
                />
              </div>

              {/* Primeiro Parágrafo - Introdução Chamativa */}
              <div className="text-lg leading-relaxed space-y-6 mb-8">
                <p className="text-[#f3c793] text-xl font-medium">
                  <strong>Imagine esta situação:</strong> você descobre que
                  existe uma investigação em seu nome e há risco iminente de
                  decretação de prisão. Como se proteger legalmente antes que
                  isso aconteça?
                </p>

                <p className="text-[#94a3b8]">
                  É exatamente para essas situações que existe o{" "}
                  <strong className="text-white">
                    Habeas Corpus Preventivo
                  </strong>{" "}
                  - um instrumento jurídico que pode proteger sua liberdade{" "}
                  <strong className="text-[#cc8c5d]">antes mesmo</strong>
                  de uma prisão ilegal ocorrer.
                </p>

                <p className="text-[#94a3b8]">
                  Neste artigo, explicaremos de forma clara e objetiva quando
                  este remédio constitucional pode ser utilizado e qual o
                  procedimento adequado para sua aplicação na defesa de seus
                  direitos fundamentais.
                </p>
              </div>

              {/* Seção: O que é */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-[#cc8c5d]" />O que é o Habeas
                  Corpus Preventivo?
                </h2>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-[#94a3b8]">
                    O <strong className="text-white">Habeas Corpus</strong> é
                    uma garantia constitucional fundamental que protege o
                    direito de locomoção dos cidadãos. Quando falamos em
                    <strong className="text-[#cc8c5d]">
                      {" "}
                      Habeas Corpus Preventivo
                    </strong>
                    , nos referimos à modalidade que visa evitar uma prisão
                    antes mesmo dela acontecer.
                  </p>

                  <p className="text-[#94a3b8]">
                    Diferentemente do Habeas Corpus Liberatório, que visa
                    libertar quem já se encontra preso, o preventivo atua de
                    forma <strong className="text-white">antecipatória</strong>,
                    protegendo o direito fundamental à liberdade quando há
                    ameaça iminente de constrangimento ilegal.
                  </p>

                  <div className="bg-gradient-to-r from-[#cc8c5d]/10 to-[#f3c793]/5 border-l-4 border-[#cc8c5d] p-6 rounded-r-xl my-8">
                    <p className="text-[#cc8c5d] font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Distinção importante:
                    </p>
                    <p className="text-[#94a3b8] m-0">
                      <strong>HC Liberatório:</strong> Busca a soltura de quem
                      já está preso
                      <br />
                      <strong>HC Preventivo:</strong> Impede uma prisão ilegal
                      antes que ela ocorra
                    </p>
                  </div>

                  <p className="text-[#94a3b8]">
                    Este instrumento não impede investigações legítimas ou
                    procedimentos regulares, mas sim protege contra{" "}
                    <strong className="text-white">abusos de autoridade</strong>
                    e{" "}
                    <strong className="text-white">
                      prisões sem fundamentação legal adequada
                    </strong>
                    .
                  </p>
                </div>

                {/* Seção: Quando usar */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <AlertTriangle className="h-8 w-8 text-[#cc8c5d]" />
                    Quando o HC Preventivo pode ser utilizado?
                  </h2>

                  <p className="text-[#94a3b8] text-lg mb-8">
                    O Habeas Corpus Preventivo deve ser utilizado em situações
                    específicas onde há ameaça concreta e iminente de prisão
                    ilegal. As principais hipóteses são:
                  </p>

                  <div className="space-y-8">
                    <div className="border-l-4 border-[#cc8c5d] pl-6">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                        <FileText className="h-6 w-6 text-[#cc8c5d]" />
                      1. Mandado de Prisão com Vícios
                    </h3>
                    <p className="text-[#94a3b8] mb-4">
                      Quando existe um mandado de prisão expedido sem
                      fundamentação legal adequada, com vícios processuais, ou
                      por autoridade incompetente para o caso específico.
                    </p>
                    <p className="text-[#f3c793] font-medium">
                      <strong>Exemplo:</strong> Mandado baseado exclusivamente
                      em suspeitas não fundamentadas em elementos probatórios
                      concretos.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#cc8c5d] pl-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <Scale className="h-6 w-6 text-[#cc8c5d]" />
                      2. Prisão Preventiva Indevida
                    </h3>
                    <p className="text-[#94a3b8] mb-4">
                      Quando há indícios de que será decretada prisão preventiva
                      sem que estejam presentes os requisitos legais
                      estabelecidos no Código de Processo Penal.
                    </p>
                    <p className="text-[#f3c793] font-medium">
                      <strong>Exemplo:</strong> Situações onde o investigado
                      possui residência fixa, trabalho lícito e não representa
                      risco para a ordem pública ou instrução criminal.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#cc8c5d] pl-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <Clock className="h-6 w-6 text-[#cc8c5d]" />
                      3. Excesso de Prazo Processual
                    </h3>
                    <p className="text-[#94a3b8] mb-4">
                      Quando o inquérito policial ou processo criminal
                      ultrapassa os prazos estabelecidos em lei sem
                      justificativa fundamentada, mantendo-se o risco de prisão.
                    </p>
                    <p className="text-[#f3c793] font-medium">
                      <strong>Exemplo:</strong> Inquérito policial que excede
                      significativamente o prazo legal de 30 dias sem
                      prorrogação devidamente motivada.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#cc8c5d] pl-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <AlertTriangle className="h-6 w-6 text-[#cc8c5d]" />
                      4. Risco de Flagrante Ilegal
                    </h3>
                    <p className="text-[#94a3b8] mb-4">
                      Quando há elementos que indicam possível prisão em
                      flagrante forjado ou em situação que não configura
                      infração penal.
                    </p>
                    <p className="text-[#f3c793] font-medium">
                      <strong>Exemplo:</strong> Informações credíveis sobre
                      tentativa de incriminação através de plantio de evidências
                      ou outras práticas irregulares.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seção: Como usar */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Gavel className="h-8 w-8 text-[#cc8c5d]" />
                  Procedimento para Impetração
                </h2>

                <p className="text-[#94a3b8] text-lg mb-8">
                  A impetração do Habeas Corpus Preventivo segue um procedimento
                  específico que deve ser conduzido por advogado especializado:
                </p>

                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#cc8c5d] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Análise Jurídica Preliminar
                      </h3>
                      <p className="text-[#94a3b8]">
                        Avaliação técnica da situação para verificar a presença
                        dos requisitos legais para a impetração, incluindo a
                        análise da ameaça concreta e iminente.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#cc8c5d] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Coleta de Documentação
                      </h3>
                      <p className="text-[#94a3b8]">
                        Reunião de toda documentação probatória que demonstre a
                        ilegalidade da ameaça, incluindo mandados, decisões
                        judiciais e demais elementos relevantes.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#cc8c5d] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Elaboração da Petição Inicial
                      </h3>
                      <p className="text-[#94a3b8]">
                        Redação técnica da petição com fundamentação jurídica
                        sólida, identificação clara do paciente e da autoridade
                        coatora.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#cc8c5d] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Definição da Competência
                      </h3>
                      <p className="text-[#94a3b8]">
                        Identificação do tribunal competente para julgamento,
                        considerando a hierarquia da autoridade coatora e as
                        regras de competência.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#cc8c5d] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Protocolo e Acompanhamento
                      </h3>
                      <p className="text-[#94a3b8]">
                        Protocolo da petição e acompanhamento rigoroso do
                        processo, que possui tramitação prioritária conforme
                        legislação específica.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seção: Jurisprudência */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Scale className="h-8 w-8 text-[#cc8c5d]" />
                  Jurisprudência dos Tribunais Superiores
                </h2>

                <p className="text-[#94a3b8] text-lg mb-8">
                  Os tribunais superiores têm consolidado entendimento favorável
                  à utilização do Habeas Corpus Preventivo em situações de
                  ameaça concreta à liberdade:
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#cc8c5d]/5 to-[#f3c793]/5 border border-[#cc8c5d]/20 p-6 rounded-xl">
                    <h3 className="text-[#cc8c5d] font-bold mb-3">
                      Supremo Tribunal Federal
                    </h3>
                    <p className="text-[#94a3b8] italic mb-3">
                      "O habeas corpus preventivo constitui remédio idôneo para
                      obstar ameaça ao direito de locomoção, desde que a coação
                      seja iminente e tenha por objeto a liberdade de ir e vir."
                    </p>
                    <p className="text-[#94a3b8] text-sm">
                      HC 126.292/SP - Rel. Min. Teori Zavascki
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#cc8c5d]/5 to-[#f3c793]/5 border border-[#cc8c5d]/20 p-6 rounded-xl">
                    <h3 className="text-[#cc8c5d] font-bold mb-3">
                      Superior Tribunal de Justiça
                    </h3>
                    <p className="text-[#94a3b8] italic mb-3">
                      "É cabível o habeas corpus preventivo quando demonstrada a
                      ameaça concreta de constrangimento ilegal, ainda que a
                      prisão não tenha se consumado."
                    </p>
                    <p className="text-[#94a3b8] text-sm">
                      HC 315.847/RJ - Rel. Min. Ribeiro Dantas
                    </p>
                  </div>
                </div>

                <p className="text-[#f3c793] mt-6 font-medium">
                  <strong>Interpretação jurisprudencial:</strong> Os tribunais
                  reconhecem que a proteção preventiva é um direito fundamental
                  que não deve aguardar a consumação do constrangimento ilegal.
                </p>
              </div>

              {/* Conclusão */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-[#cc8c5d]" />
                  Considerações Finais
                </h2>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-[#94a3b8]">
                    O Habeas Corpus Preventivo representa uma garantia
                    constitucional fundamental na proteção dos direitos
                    individuais, permitindo que constrangimentos ilegais sejam
                    impedidos antes de sua consumação.
                  </p>

                  <p className="text-[#94a3b8]">
                    <strong className="text-white">
                      Este instrumento não constitui uma prerrogativa absoluta
                    </strong>
                    , mas sim uma proteção contra{" "}
                    <strong className="text-[#cc8c5d]">
                      abusos de autoridade
                    </strong>
                    e{" "}
                    <strong className="text-[#cc8c5d]">
                      prisões sem fundamentação legal
                    </strong>
                    .
                  </p>

                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <p className="text-red-400 font-semibold mb-2">
                      Importante:
                    </p>
                    <p className="text-[#94a3b8] m-0">
                      Diante de situações que configurem as hipóteses
                      mencionadas,
                      <strong className="text-white">
                        {" "}
                        a celeridade na busca por assistência jurídica é
                        fundamental
                      </strong>
                      . O tempo pode ser determinante para a efetividade da
                      proteção legal.
                    </p>
                  </div>

                  <p className="text-[#94a3b8]">
                    A avaliação de cada caso deve ser realizada por profissional
                    especializado, considerando as particularidades processuais
                    e os precedentes jurisprudenciais aplicáveis.
                    <strong className="text-[#cc8c5d]">
                      O conhecimento dos direitos fundamentais é essencial para
                      sua efetiva proteção
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Card CTA - Seção da Advogada */}
    <section className="pt-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
            <div className="glass-effect rounded-2xl overflow-hidden hover-glow max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[400px]">
                  {/* Coluna 1 - Foto da Advogada */}
                  <div className="relative h-full">
                    <img
                      src="/images/diulliany-about.webp"
                      alt="Dra. Diulliany Ferro - Advogada Criminalista"
                      className="w-full h-full object-cover min-h-[250px] lg:min-h-[400px]"
                    />
                    <div className="absolute top-4 left-4 bg-[#cc8c5d] rounded-full p-3 shadow-lg">
                      <Scale className="h-6 w-6 text-[#10172a]" />
                    </div>
                    {/* Overlay gradient para mesclar com o fundo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-800/60 lg:to-slate-800/80"></div>
                  </div>

                  {/* Coluna 2 - Informações da Advogada */}
                  <div className="p-6 md:p-8 space-y-4 flex flex-col justify-center">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                        Dra. Diulliany Ferro
                      </h2>
                      <p className="text-base text-[#cc8c5d] font-semibold">
                        Sua Melhor Escolha para Defesa da Liberdade
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#cc8c5d] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-[#94a3b8] leading-relaxed text-sm">
                          <strong className="text-white">
                            Advogada Especialista:
                          </strong>{" "}
                          Formação sólida em Direito Criminal com anos de
                          experiência prática
                        </p>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#cc8c5d] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-[#94a3b8] leading-relaxed text-sm">
                          <strong className="text-white">
                            Acompanhamento Personalizado:
                          </strong>{" "}
                          Atendimento próximo e dedicado a cada cliente
                        </p>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#cc8c5d] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-[#94a3b8] leading-relaxed text-sm">
                          <strong className="text-white">
                            Atuação Estratégica:
                          </strong>{" "}
                          Foco em resultados com planejamento detalhado de cada
                          caso
                        </p>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#cc8c5d] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-[#94a3b8] leading-relaxed text-sm">
                          <strong className="text-white">
                            Comunicação Clara:
                          </strong>{" "}
                          Transparência total em todas as etapas do processo
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Coluna 3 - Call to Action */}
                  <div className="p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-[#cc8c5d]/10 to-[#f3c793]/10 border-l border-[#cc8c5d]/20">
                    <div className="text-center space-y-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        Precisa de Apoio Jurídico?
                      </h3>

                      <p className="text-[#94a3b8] mb-6 leading-relaxed text-sm">
                        Entre em contato agora para uma consulta especializada.
                        Defenda seus direitos com quem entende do assunto.
                      </p>

                      <div className="space-y-3">
                        <a
                          href="https://wa.me/5562995292129"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-[#cc8c5d] to-[#d4956a] hover:from-[#b8794c] hover:to-[#c88759] text-[#10172a] px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-transparent text-sm"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>Conversar no WhatsApp</span>
                        </a>

                        <a
                          href="tel:+5562995292129"
                          className="w-full border-2 border-[#cc8c5d] text-[#cc8c5d] hover:bg-[#cc8c5d] hover:text-[#10172a] px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                        >
                          <Phone className="h-4 w-4" />
                          <span>Ligar Agora</span>
                        </a>
                      </div>

                      <div className="mt-4 text-xs text-[#94a3b8]">
                        <div className="flex items-center justify-center gap-2">
                          <Zap className="h-3 w-3 text-[#cc8c5d]" />
                          <p className="font-medium">
                            Atendimento 24h • Resposta Imediata
                          </p>
                        </div>
                      </div>
                    </div>
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
