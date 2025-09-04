import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-section-b py-20">
      <div className="container-default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-8">
              Sobre a Dra.{" "}
              <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                Diulliany Ferro
              </span>
            </h2>

            <div className="prose prose-lg text-secondary mb-8 space-y-6">
              <p className="leading-relaxed text-lg">
                Com mais de 15 anos de experiência em advocacia criminal, a Dra.
                Diulliany Ferro se especializou na defesa de casos complexos,
                sempre priorizando uma abordagem humanizada e estratégica para
                cada cliente.
              </p>

              <p className="leading-relaxed text-lg">
                Formada pela [Universidade] e pós-graduada em Direito Penal e
                Processual Penal, construiu uma carreira sólida baseada na
                ética, dedicação e resultados efetivos na defesa dos direitos de
                seus clientes.
              </p>

              <p className="leading-relaxed text-lg">
                Acredita que cada caso é único e merece uma estratégia
                personalizada, sempre respeitando a dignidade humana e lutando
                incansavelmente pela justiça.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] p-3 rounded-2xl mr-4 group-hover:from-[#b8794c] group-hover:to-[#d4956a] transition-all duration-300">
                  <GraduationCap
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="font-semibold text-primary">Formação</div>
                  <div className="text-sm text-secondary">
                    Direito - [Universidade]
                  </div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] p-3 rounded-2xl mr-4 group-hover:from-[#b8794c] group-hover:to-[#d4956a] transition-all duration-300">
                  <Award className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    Especialização
                  </div>
                  <div className="text-sm text-secondary">
                    Direito Penal e Processual
                  </div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] p-3 rounded-2xl mr-4 group-hover:from-[#b8794c] group-hover:to-[#d4956a] transition-all duration-300">
                  <Users className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Experiência</div>
                  <div className="text-sm text-secondary">15+ anos atuando</div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] p-3 rounded-2xl mr-4 group-hover:from-[#b8794c] group-hover:to-[#d4956a] transition-all duration-300">
                  <BookOpen className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Registro</div>
                  <div className="text-sm text-secondary">OAB/SP [Número]</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up animate-delay-200">
            <div className="card-glass p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                <span className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] bg-clip-text text-transparent">
                  Diferenciais
                </span>
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="bg-gradient-to-r from-[#cc8c5d] to-[#f3c793] rounded-full p-2 mr-4 mt-1 group-hover:from-[#b8794c] group-hover:to-[#d4956a] transition-all duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Atendimento Personalizado
                    </h4>
                    <p className="text-sm text-secondary">
                      Cada cliente recebe atenção individual e estratégia
                      customizada para seu caso específico.
                    </p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="bg-accent/20 rounded-full p-2 mr-4 mt-1 group-hover:bg-accent/30 transition-all duration-300">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Disponibilidade 24h
                    </h4>
                    <p className="text-sm text-secondary">
                      Atendimento de emergência disponível 24 horas para casos
                      urgentes que exigem ação imediata.
                    </p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="bg-accent/20 rounded-full p-2 mr-4 mt-1 group-hover:bg-accent/30 transition-all duration-300">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Experiência Comprovada
                    </h4>
                    <p className="text-sm text-secondary">
                      Mais de 500 casos defendidos com sucesso em diferentes
                      áreas do direito criminal.
                    </p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="bg-accent/20 rounded-full p-2 mr-4 mt-1 group-hover:bg-accent/30 transition-all duration-300">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Transparência Total
                    </h4>
                    <p className="text-sm text-secondary">
                      Comunicação clara sobre o andamento do processo e
                      estratégias adotadas na defesa.
                    </p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="bg-accent/20 rounded-full p-2 mr-4 mt-1 group-hover:bg-accent/30 transition-all duration-300">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Ética Profissional
                    </h4>
                    <p className="text-sm text-secondary">
                      Compromisso com os mais altos padrões éticos da advocacia
                      e sigilo absoluto.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-accent/20 rounded-2xl border border-accent/20">
                <p className="text-center text-primary font-medium italic">
                  &ldquo;A defesa dos direitos humanos é a base de uma sociedade
                  justa. Meu compromisso é garantir que cada cliente tenha seus
                  direitos respeitados e sua dignidade preservada.&rdquo;
                </p>
                <p className="text-center text-accent font-bold mt-3 text-sm uppercase tracking-wide">
                  — Dra. Diulliany Ferro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
