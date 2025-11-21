import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Calendar, FileText, Home, Check, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Agendamento",
    description: "Entre em contato via WhatsApp com a requisição do seu veterinário. Nossa equipe te ajudará a escolher o melhor horário.",
  },
  {
    icon: FileText,
    title: "2. Preparo",
    description: "Você receberá todas as instruções necessárias para preparar seu pet antes da coleta (jejum, hidratação, etc).",
  },
  {
    icon: Home,
    title: "3. Visita Domiciliar",
    description: "Nossa equipe vai até sua casa no horário combinado. A coleta é rápida, segura e sem estresse para seu pet.",
  },
  {
    icon: Check,
    title: "4. Resultado Online",
    description: "Você recebe o laudo completo direto no WhatsApp e enviamos uma cópia para o veterinário do seu pet.",
  },
];

const neighborhoods = [
  "Tristeza",
  "Cristal",
  "Cavalhada",
  "Ipanema",
  "Hípica",
  "Belém Novo",
  "Lageado",
  "Vila Nova",
  "Camaquã",
  "Teresópolis",
];

const Coleta = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Coleta Domiciliar
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Seu pet merece conforto. Levamos o laboratório até você, eliminando o estresse do transporte e da espera.
            </p>
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta%20domiciliar.", "_blank")}
              className="bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Agendar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Processo simples e transparente em 4 etapas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-2 border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                  <CardContent className="pt-6 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {/* Connecting Line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-primary/30 transform -translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Área de Atendimento
              </h2>
              <p className="text-lg text-muted-foreground">
                Atendemos toda a Zona Sul de Porto Alegre
              </p>
            </div>

            <Card className="border-2 border-border shadow-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Neighborhoods List */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-primary" />
                      Bairros Atendidos
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {neighborhoods.map((neighborhood, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-foreground font-medium">{neighborhood}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">
                      Não encontrou seu bairro? Entre em contato para consultar disponibilidade.
                    </p>
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-gradient-hero rounded-lg p-8 h-64 flex items-center justify-center border-2 border-primary/20">
                    <div className="text-center space-y-3">
                      <MapPin className="w-12 h-12 text-primary mx-auto" />
                      <p className="text-foreground font-semibold">
                        Zona Sul de Porto Alegre
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Raio de atendimento de aproximadamente 15km
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Investimento Transparente
              </h2>
              <p className="text-lg text-muted-foreground">
                Sem surpresas, sem taxas ocultas
              </p>
            </div>

            <Card className="border-2 border-primary/50 shadow-card-hover">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Taxa Única de Deslocamento
                      </h3>
                      <p className="text-muted-foreground">
                        Valor fixo para cobrir o deslocamento da nossa equipe até sua residência, independente da quantidade de exames.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Valor de Tabela do Exame
                      </h3>
                      <p className="text-muted-foreground">
                        Cada exame é cobrado pelo valor de tabela padrão do laboratório. Consulte valores específicos via WhatsApp.
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6 mt-6">
                    <p className="text-center text-foreground font-semibold">
                      <Calendar className="w-5 h-5 inline-block mr-2" />
                      Solicite um orçamento sem compromisso pelo WhatsApp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Pronto para agendar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender você e seu pet com todo cuidado e profissionalismo.
          </p>
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta%20domiciliar.", "_blank")}
            className="bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full px-8 py-6 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chamar no WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Coleta;
