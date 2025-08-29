import Link from "next/link";
import { Scale, Shield, Users, Car, Home, CreditCard } from "lucide-react";

export default function AreasDeAtuacao() {
  const areas = [
    {
      icon: Scale,
      title: "Crimes contra a Pessoa",
      description:
        "Defesa em casos de homicídio, lesão corporal, ameaça, injúria, calúnia e difamação.",
      examples: ["Homicídio", "Lesão Corporal", "Ameaça", "Injúria e Calúnia"],
    },
    {
      icon: CreditCard,
      title: "Crimes Patrimoniais",
      description:
        "Especialização em furto, roubo, estelionato, apropriação indébita e receptação.",
      examples: [
        "Furto e Roubo",
        "Estelionato",
        "Apropriação Indébita",
        "Receptação",
      ],
    },
    {
      icon: Car,
      title: "Crimes de Trânsito",
      description:
        "Defesa em homicídio culposo, embriaguez ao volante e outras infrações graves.",
      examples: [
        "Homicídio Culposo",
        "Embriaguez",
        "Direção Perigosa",
        "Fuga do Local",
      ],
    },
    {
      icon: Shield,
      title: "Crimes contra a Dignidade Sexual",
      description:
        "Defesa sensível e especializada em casos delicados que exigem discrição máxima.",
      examples: [
        "Estupro",
        "Assédio Sexual",
        "Exploração Sexual",
        "Pornografia",
      ],
    },
    {
      icon: Users,
      title: "Violência Doméstica",
      description:
        "Acompanhamento em casos de violência doméstica com foco na proteção de direitos.",
      examples: [
        "Lei Maria da Penha",
        "Medidas Protetivas",
        "Ameaça Doméstica",
        "Lesão Doméstica",
      ],
    },
    {
      icon: Home,
      title: "Tribunal do Júri",
      description:
        "Ampla experiência em defesas perante o Tribunal do Júri em crimes dolosos contra a vida.",
      examples: [
        "Plenário do Júri",
        "Estratégia de Defesa",
        "Interrogatório",
        "Sustentação Oral",
      ],
    },
  ];

  return (
    <section id="areas" className="bg-section-a py-20">
      <div className="container-default">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Defesa especializada em diversas áreas do direito criminal com
            estratégias personalizadas para cada tipo de caso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className={`card-elevated group animate-fade-in-up animate-delay-${
                  index * 100
                }`}
              >
                <div className="bg-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                  <IconComponent
                    className="h-8 w-8 text-accent"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-xl font-bold text-primary mb-4 text-center">
                  {area.title}
                </h3>

                <p className="text-secondary mb-6 text-center leading-relaxed">
                  {area.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-accent text-sm uppercase tracking-wider text-center">
                    Especialidades:
                  </h4>
                  <ul className="text-sm text-secondary space-y-2">
                    {area.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        <span className="font-medium">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in-up animate-delay-600">
          <Link
            href="#contato"
            className="btn-primary inline-flex items-center space-x-3 text-lg group"
          >
            <span>Discutir Meu Caso</span>
            <Scale
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
