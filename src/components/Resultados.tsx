import { TrendingUp, Users, Clock, Award } from "lucide-react";

export default function Resultados() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Casos Defendidos",
      description: "Mais de 500 casos atendidos com sucesso",
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Taxa de Sucesso",
      description: "Alta taxa de absolvições e redução de penas",
    },
    {
      icon: Clock,
      number: "15+",
      label: "Anos de Experiência",
      description: "Mais de uma década de atuação especializada",
    },
    {
      icon: Award,
      number: "24h",
      label: "Atendimento",
      description: "Disponibilidade para emergências",
    },
  ];

  const resultados = [
    {
      tipo: "Absolvição",
      caso: "Homicídio Doloso",
      resultado: "Cliente absolvido por legítima defesa",
      ano: "2024",
    },
    {
      tipo: "Redução de Pena",
      caso: "Tráfico de Drogas",
      resultado: "Pena reduzida de 8 para 3 anos",
      ano: "2024",
    },
    {
      tipo: "Arquivamento",
      caso: "Estelionato",
      resultado: "Processo arquivado na fase investigativa",
      ano: "2023",
    },
    {
      tipo: "Liberdade Provisória",
      caso: "Roubo Qualificado",
      resultado: "Cliente solto em 48 horas",
      ano: "2023",
    },
    {
      tipo: "Desclassificação",
      caso: "Tentativa de Homicídio",
      resultado: "Desclassificado para lesão corporal",
      ano: "2023",
    },
    {
      tipo: "Prescrição",
      caso: "Crimes Patrimoniais",
      resultado: "Extinção da punibilidade",
      ano: "2024",
    },
  ];

  return (
    <section id="resultados" className="bg-section-a py-20">
      <div className="container-default">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Resultados Comprovados
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Nossa experiência se traduz em resultados efetivos na defesa dos
            direitos de nossos clientes
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`text-center animate-fade-in-up animate-delay-${
                  index * 100
                }`}
              >
                <div className="bg-accent/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-all duration-300 hover:scale-110">
                  <IconComponent
                    className="h-10 w-10 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-playfair">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2 text-primary">
                  {stat.label}
                </div>
                <div className="text-secondary text-sm font-medium">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Casos de Sucesso */}
        <div className="animate-fade-in-up animate-delay-400">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Casos de Sucesso Recentes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resultados.map((resultado, index) => (
              <div
                key={index}
                className={`card-elevated hover:border-accent/50 border border-white/10 animate-fade-in-up animate-delay-${
                  (index + 5) * 100
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    {resultado.tipo}
                  </span>
                  <span className="text-secondary text-sm font-medium">
                    {resultado.ano}
                  </span>
                </div>

                <h4 className="text-lg font-semibold mb-4 text-accent">
                  {resultado.caso}
                </h4>

                <p className="text-secondary text-sm leading-relaxed font-medium">
                  {resultado.resultado}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in-up animate-delay-800">
          <div className="card-glass p-8 border border-accent/20">
            <p className="text-lg text-primary mb-4">
              <strong className="text-accent">Importante:</strong> Os resultados
              passados não garantem resultados futuros. Cada caso é único e
              analisado individualmente.
            </p>
            <p className="text-sm text-secondary">
              Todas as informações são apresentadas de forma genérica,
              respeitando o sigilo profissional e a privacidade dos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
