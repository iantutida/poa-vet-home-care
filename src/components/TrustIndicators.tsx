import { Home, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const indicators = [
  {
    icon: Home,
    title: "Coleta Domiciliar",
    description: "Vamos até sua casa com hora marcada.",
  },
  {
    icon: Shield,
    title: "Segurança Clínica",
    description: "Mesma qualidade do hospital, sem o risco de contaminação.",
  },
  {
    icon: Clock,
    title: "Resultados Rápidos",
    description: "Laudos enviados diretamente pro seu WhatsApp e pro seu Veterinário.",
  },
];

const TrustIndicators = () => {
  return (
    <section id="coleta" className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a Poa Vet?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidado veterinário de excelência sem sair de casa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => (
            <Card
              key={index}
              className="border-none shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <indicator.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {indicator.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {indicator.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
