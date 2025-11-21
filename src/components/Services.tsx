import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Droplet, TestTube, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Hemograma Completo",
    description: "Análise detalhada das células sanguíneas do seu pet para diagnóstico preciso de anemias, infecções e outras condições.",
  },
  {
    icon: TestTube,
    title: "Análises Hormonais",
    description: "Avaliação dos níveis hormonais para diagnóstico de disfunções da tireoide, diabetes e outras doenças endócrinas.",
  },
  {
    icon: Droplet,
    title: "Exames de Urina e Fezes",
    description: "Análises parasitológicas e químicas essenciais para detectar problemas renais, infecções urinárias e parasitas.",
  },
  {
    icon: Stethoscope,
    title: "Check-up Geriátrico",
    description: "Painel completo de exames preventivos para pets idosos, garantindo mais qualidade de vida na terceira idade.",
  },
];

const Services = () => {
  return (
    <section id="exames" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Exames
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Análises clínicas completas com tecnologia de ponta
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-primary/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
