import Link from "next/link";
import {
  Users,
  CircleDollarSign,
  Pill,
  Gavel,
  Scale,
  ShieldAlert,
} from "lucide-react";

export default function AreasDeAtuacao() {
  const areas = [
    {
      icon: Users,
      title: "Crimes Contra a Pessoa",
      description:
        "Defesa especializada em crimes que atingem a integridade física, moral e psicológica da pessoa.",
      specialties: [
        "Homicídio",
        "Lesão Corporal",
        "Violência Doméstica (Lei Maria da Penha)",
        "Sequestro",
      ],
    },
    {
      icon: CircleDollarSign,
      title: "Crimes Contra o Patrimônio",
      description:
        "Atuação em crimes que visam o patrimônio alheio, desde furtos simples até crimes complexos.",
      specialties: [
        "Furto e Roubo",
        "Estelionato",
        "Apropriação Indébita",
        "Receptação",
      ],
    },
    {
      icon: Pill,
      title: "Lei de Drogas",
      description:
        "Defesa em crimes relacionados ao tráfico e uso de entorpecentes com estratégias diferenciadas.",
      specialties: [
        "Tráfico de Drogas",
        "Porte para Uso",
        "Associação para o Tráfico",
        "Financiamento do Tráfico",
      ],
    },
    {
      icon: Gavel,
      title: "Audiências e Julgamentos",
      description:
        "Atuação especializada em plenário do júri e audiências com estratégias de defesa eficazes.",
      specialties: [
        "Tribunal do Júri",
        "Audiências de Instrução",
        "Sustentação Oral",
        "Interrogatórios",
      ],
    },
    {
      icon: Scale,
      title: "Habeas Corpus",
      description:
        "Medidas de urgência para garantir a liberdade e os direitos fundamentais do cliente.",
      specialties: [
        "Prisão Preventiva",
        "Flagrante",
        "Liberdade Provisória",
        "Relaxamento de Prisão",
      ],
    },
    {
      icon: ShieldAlert,
      title: "Atendimentos de Urgência",
      description:
        "Atendimento imediato 24h para situações que exigem resposta rápida e eficiente.",
      specialties: [
        "Prisão em Flagrante",
        "Acompanhamento em Delegacia",
        "Audiência de Custódia",
        "Medidas Cautelares",
      ],
    },
  ];

  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Título Centralizado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            Áreas de{" "}
            <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
              Atuação
            </span>
          </h2>
          <p className="text-lg font-light text-white max-w-4xl mx-auto leading-relaxed">
            Especialização completa em Direito Criminal com foco em resultados
            excepcionais e defesa estratégica personalizada para cada caso.
          </p>
        </div>

        {/* Cards Grid - 3 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group"
                style={{
                  backgroundColor: "#242b38",
                  background: `
                    linear-gradient(135deg, 
                      rgba(204, 140, 93, 0.03) 0%, 
                      rgba(204, 140, 93, 0.01) 25%, 
                      transparent 50%
                    ),
                    #242b38
                  `,
                  border: "1px solid rgba(204, 140, 93, 0.08)",
                  boxShadow: `
                    0 4px 20px rgba(0, 0, 0, 0.25),
                    inset 0 1px 0 rgba(204, 140, 93, 0.05)
                  `,
                }}
              >
                {/* Efeito de Brilho Superior Esquerdo */}
                <div
                  className="absolute top-0 left-0 w-24 h-24 pointer-events-none opacity-15"
                  style={{
                    background:
                      "radial-gradient(circle at 0% 0%, rgba(204, 140, 93, 0.15) 0%, transparent 70%)",
                  }}
                />

                {/* Ícone e Título na mesma linha */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793]">
                    <IconComponent
                      className="h-7 w-7 text-slate-900"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    {area.title}
                  </h3>
                </div>

                {/* Descrição (Opcional) */}
                <p className="text-sm font-normal text-white/90 mb-6 leading-relaxed">
                  {area.description}
                </p>

                {/* Lista de Serviços */}
                <div className="space-y-3 mb-8">
                  {area.specialties.map((specialty, specIndex) => (
                    <div key={specIndex} className="flex items-center">
                      <div
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: "#cc8c5d" }}
                      />
                      <span className="text-sm font-normal text-white/90">
                        {specialty}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Linha separadora dourada */}
                <div
                  className="w-full h-px mb-6"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />

                {/* CTA WhatsApp Centralizado */}
                <div className="flex justify-center relative z-10">
                  <Link
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-white/80 font-normal text-sm transition-colors duration-300 group"
                  >
                    <svg
                      className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                      fill="#25D366"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    <span>Consultar no WhatsApp</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
