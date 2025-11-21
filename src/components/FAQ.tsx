import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Precisa de jejum para exame de sangue?",
    answer: "Geralmente são recomendadas 8 horas de jejum alimentar para exames de sangue. Água está liberada e deve ser oferecida normalmente. Sempre siga as orientações específicas do seu veterinário.",
  },
  {
    question: "Como coletar fezes?",
    answer: "O ideal é coletar logo após a evacuação e manter refrigerado se não for entregar na hora. Use um recipiente limpo e seco. Colete uma quantidade suficiente (cerca de uma colher de sopa) e armazene em geladeira por no máximo 24 horas.",
  },
  {
    question: "Atendem quais bairros?",
    answer: "Atendemos toda a Zona Sul de Porto Alegre com foco nos bairros Tristeza, Cristal, Cavalhada, Ipanema, Hípica, Belém Novo e arredores. Entre em contato para confirmar se atendemos sua região.",
  },
  {
    question: "Quanto tempo demora para sair o resultado?",
    answer: "O prazo varia de acordo com o tipo de exame. Exames simples como hemograma ficam prontos em até 24 horas. Exames mais complexos podem levar de 3 a 7 dias úteis. Você receberá o laudo diretamente no WhatsApp.",
  },
  {
    question: "Como funciona o agendamento?",
    answer: "É super simples! Clique no botão de WhatsApp, informe o tipo de exame que seu veterinário solicitou e combine o melhor horário. Nossa equipe vai até você na data e hora marcadas.",
  },
];

const FAQ = () => {
  return (
    <section id="duvidas" className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preparo de Exames
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas mais frequentes sobre coleta e preparo
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6 shadow-card hover:shadow-card-hover transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
