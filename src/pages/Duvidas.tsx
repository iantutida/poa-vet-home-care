import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Droplet, Clock, CreditCard, Pill, AlertCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

type Category = "jejum" | "coleta-urina" | "coleta-fezes" | "pagamento" | "resultados" | "geral";

interface ContentSection {
  category: Category;
  title: string;
  icon: any;
  content: {
    subtitle: string;
    text: string;
  }[];
}

const helpContent: ContentSection[] = [
  {
    category: "jejum",
    title: "Jejum e Preparo",
    icon: Clock,
    content: [
      {
        subtitle: "Jejum para Exames de Sangue",
        text: "Para a maioria dos exames de sangue, recomendamos jejum de 8 a 12 horas. Água deve estar sempre disponível e pode ser oferecida normalmente. Não suspenda medicamentos sem orientação do veterinário.",
      },
      {
        subtitle: "Exceções ao Jejum",
        text: "Animais diabéticos, filhotes muito jovens (menores de 6 meses) e animais debilitados podem ter regras específicas. Sempre consulte seu veterinário antes de realizar o jejum.",
      },
      {
        subtitle: "Hidratação",
        text: "Mesmo durante o jejum, seu pet deve ter acesso livre à água fresca. A hidratação não interfere nos resultados dos exames e é fundamental para o bem-estar do animal.",
      },
    ],
  },
  {
    category: "coleta-urina",
    title: "Coleta de Urina",
    icon: Droplet,
    content: [
      {
        subtitle: "Como Coletar Corretamente",
        text: "O ideal é coletar a primeira urina da manhã, que é mais concentrada. Use um recipiente limpo e seco (de preferência estéril). Para cães, você pode usar um coletor de urina ou recipiente limpo durante o passeio. Para gatos, existem areias especiais não absorventes.",
      },
      {
        subtitle: "Armazenamento",
        text: "Após a coleta, mantenha a amostra refrigerada (não congelada) e entregue em até 2 horas. Se não for possível, pode manter por até 6 horas na geladeira, mas quanto mais fresca, melhor para o resultado.",
      },
      {
        subtitle: "Quantidade Necessária",
        text: "São necessários pelo menos 5-10ml de urina para análise completa. Em caso de dificuldade na coleta, nossa equipe pode realizar a coleta por cistocentese (punção direta da bexiga com ultrassom), procedimento seguro e rápido.",
      },
    ],
  },
  {
    category: "coleta-fezes",
    title: "Coleta de Fezes",
    icon: Pill,
    content: [
      {
        subtitle: "Momento Ideal da Coleta",
        text: "Colete as fezes logo após a evacuação do animal, preferencialmente pela manhã. Use luvas descartáveis e um recipiente limpo e seco (pode ser um pote de coleta ou saco plástico limpo).",
      },
      {
        subtitle: "Quantidade e Armazenamento",
        text: "Colete aproximadamente 1-2 colheres de sopa de fezes. Se o animal evacuar várias vezes, colete de diferentes pontos. Mantenha refrigerado (não congelado) e entregue em até 24 horas.",
      },
      {
        subtitle: "Cuidados Importantes",
        text: "Evite contaminação com terra, areia ou urina. Se as fezes estiverem muito líquidas, colete o máximo possível. Para exames específicos de Giardia, a amostra deve ser a mais fresca possível.",
      },
    ],
  },
  {
    category: "pagamento",
    title: "Formas de Pagamento",
    icon: CreditCard,
    content: [
      {
        subtitle: "Opções Disponíveis",
        text: "Aceitamos pagamento em dinheiro, PIX, cartões de débito e crédito (Visa, Mastercard, Elo). O pagamento pode ser realizado no momento da coleta ou posteriormente via transferência bancária.",
      },
      {
        subtitle: "Parcelamento",
        text: "Oferecemos parcelamento em até 3x sem juros no cartão de crédito para procedimentos acima de R$200. Consulte condições especiais para check-ups completos.",
      },
      {
        subtitle: "Orçamento e Transparência",
        text: "Antes de agendar, você receberá um orçamento completo com a taxa de deslocamento e o valor de cada exame solicitado. Não há cobranças surpresa ou taxas ocultas.",
      },
    ],
  },
  {
    category: "resultados",
    title: "Prazos e Resultados",
    icon: AlertCircle,
    content: [
      {
        subtitle: "Tempos de Processamento",
        text: "Exames de rotina (hemograma, bioquímicos): 24-48h. Exames hormonais: 3-5 dias úteis. Exames microbiológicos (culturas): 5-7 dias úteis. Exames enviados para laboratório de referência: 7-15 dias úteis.",
      },
      {
        subtitle: "Como Receber os Resultados",
        text: "Você receberá o laudo completo via WhatsApp em formato PDF. Simultaneamente, enviamos uma cópia para o veterinário que solicitou o exame (mediante autorização prévia).",
      },
      {
        subtitle: "Interpretação dos Resultados",
        text: "Os laudos contêm valores de referência para facilitar a interpretação. No entanto, apenas o médico veterinário pode interpretar os resultados no contexto clínico do seu pet. Em caso de dúvidas, consulte sempre seu veterinário.",
      },
    ],
  },
  {
    category: "geral",
    title: "Informações Gerais",
    icon: Phone,
    content: [
      {
        subtitle: "Agendamento",
        text: "Trabalhamos com hora marcada para garantir conforto e agilidade. Entre em contato via WhatsApp com antecedência mínima de 24 horas. Para urgências, consulte disponibilidade.",
      },
      {
        subtitle: "Segurança e Biossegurança",
        text: "Nossa equipe utiliza EPIs completos, materiais descartáveis e segue todos os protocolos de biossegurança. Todos os profissionais são treinados e qualificados para coleta veterinária.",
      },
      {
        subtitle: "Animais Agressivos ou Estressados",
        text: "Nossa equipe tem experiência com animais de diferentes temperamentos. Caso seu pet seja muito estressado ou agressivo, avise no agendamento para prepararmos abordagens alternativas e trazer os equipamentos adequados.",
      },
    ],
  },
];

const categories = [
  { id: "jejum" as Category, label: "Jejum e Preparo", icon: Clock },
  { id: "coleta-urina" as Category, label: "Coleta de Urina", icon: Droplet },
  { id: "coleta-fezes" as Category, label: "Coleta de Fezes", icon: Pill },
  { id: "pagamento" as Category, label: "Pagamento", icon: CreditCard },
  { id: "resultados" as Category, label: "Resultados", icon: AlertCircle },
  { id: "geral" as Category, label: "Informações Gerais", icon: Phone },
];

const Duvidas = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("jejum");

  const currentContent = helpContent.find((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Central de Ajuda
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tudo o que você precisa saber sobre preparo de exames e nossos serviços
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar - Categories */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-2">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                    Categorias
                  </h3>
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                          selectedCategory === cat.id
                            ? "bg-primary text-primary-foreground shadow-card"
                            : "bg-background text-foreground hover:bg-accent border border-border"
                        }`}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-sm">{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Content Area */}
              <div className="lg:col-span-3">
                {currentContent && (
                  <div className="space-y-8">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 pb-6 border-b border-border">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <currentContent.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">
                        {currentContent.title}
                      </h2>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-6">
                      {currentContent.content.map((section, index) => (
                        <Card key={index} className="border-2 border-border shadow-card">
                          <CardContent className="p-6 md:p-8">
                            <h3 className="text-xl font-bold text-foreground mb-4">
                              {section.subtitle}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              {section.text}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para esclarecer qualquer questão sobre exames e procedimentos.
          </p>
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/5551999999999?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20exames.", "_blank")}
            className="bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full px-8 py-6 text-lg font-semibold"
          >
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Duvidas;
