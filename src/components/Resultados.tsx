import {
  TrendingUp,
  Users,
  Unlock,
  ArrowDown,
  AlertTriangle,
  Zap,
} from "lucide-react";

export default function Resultados() {
  const cards = [
    {
      number: "98%",
      title: "Taxa de Sucesso",
      desc: "Em absolvições e resultados favoráveis aos clientes.",
      icon: TrendingUp,
      delay: 100,
    },
    {
      number: "1000+",
      title: "Casos Atuados",
      desc: "Defesas criminais realizadas com máxima dedicação e excelência.",
      icon: Users,
      delay: 200,
    },
    {
      number: "85%",
      title: "Liberdade Provisória",
      desc: "De sucesso em pedidos de soltura imediata para nossos clientes.",
      icon: Unlock,
      delay: 300,
    },
    {
      number: "80%",
      title: "Redução de Pena",
      desc: "Ou conversão para medidas alternativas mais brandas.",
      icon: ArrowDown,
      delay: 400,
    },
    {
      number: "800+",
      title: "Atendimentos de Urgência",
      desc: "Em prisões em flagrante e audiências de custódia.",
      icon: AlertTriangle,
      delay: 500,
    },
    {
      number: "24h",
      title: "Atendimento Imediato",
      desc: "Resposta rápida para urgências, a qualquer hora do dia.",
      icon: Zap,
      delay: 600,
    },
  ];
  return (
    <section
      id="resultados"
      className="py-20 font-sans"
      style={{
        background:
          "linear-gradient(135deg, #10172a 0%, #334154 50%, #10172a 100%)",
      }}
    >
      <div className="container-default">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sans">
            Resultados que{" "}
            <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
              Falam por Si
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={
                  "relative overflow-hidden rounded-2xl p-8 transition-all duration-300 group text-center animate-fade-in-up animate-delay-" +
                  item.delay +
                  " font-sans"
                }
                style={{
                  backgroundColor: "#242b38",
                  background:
                    "linear-gradient(135deg, rgba(204, 140, 93, 0.03) 0%, rgba(204, 140, 93, 0.01) 25%, transparent 50%), #242b38",
                  border: "1px solid rgba(204, 140, 93, 0.08)",
                  boxShadow:
                    "0 4px 20px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(204, 140, 93, 0.05)",
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
                {/* Ícone lúdico centralizado */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] group-hover:from-[#b8794c] group-hover:to-[#d4956a] transition-all duration-300">
                  <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                </div>
                <div className="text-5xl font-bold text-accent mb-2 font-sans">
                  {item.number}
                </div>
                <div className="text-lg font-semibold text-white mb-2 font-sans">
                  {item.title}
                </div>
                <div className="text-secondary text-base mb-2 font-sans">
                  {item.desc}
                </div>
                {/* Linha separadora dourada */}
                <div
                  className="w-full h-px mt-6"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #cc8c5d 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in-up animate-delay-800">
          {/* Informação de sigilo removida conforme solicitado */}
        </div>
      </div>
    </section>
  );
}
