import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

type ExamCategory = "Hematologia" | "Hormônios" | "Parasitologia" | "Check-ups" | "Todos";

interface Exam {
  name: string;
  category: ExamCategory;
  sample: string;
  turnaround: string;
  preparation: string;
}

const exams: Exam[] = [
  {
    name: "Hemograma Completo",
    category: "Hematologia",
    sample: "Sangue",
    turnaround: "24h",
    preparation: "Jejum 8h",
  },
  {
    name: "Bioquímica Renal",
    category: "Hematologia",
    sample: "Sangue",
    turnaround: "24h",
    preparation: "Jejum 12h",
  },
  {
    name: "Bioquímica Hepática",
    category: "Hematologia",
    sample: "Sangue",
    turnaround: "24h",
    preparation: "Jejum 12h",
  },
  {
    name: "T4 Total (Tireoide)",
    category: "Hormônios",
    sample: "Sangue",
    turnaround: "3-5 dias",
    preparation: "Jejum 8h",
  },
  {
    name: "T4 Livre",
    category: "Hormônios",
    sample: "Sangue",
    turnaround: "3-5 dias",
    preparation: "Jejum 8h",
  },
  {
    name: "Cortisol",
    category: "Hormônios",
    sample: "Sangue",
    turnaround: "3-5 dias",
    preparation: "Jejum 8h",
  },
  {
    name: "Progesterona",
    category: "Hormônios",
    sample: "Sangue",
    turnaround: "3-5 dias",
    preparation: "Jejum 8h",
  },
  {
    name: "Parasitológico de Fezes",
    category: "Parasitologia",
    sample: "Fezes",
    turnaround: "48h",
    preparation: "Amostra recente",
  },
  {
    name: "Giardia (Antígeno)",
    category: "Parasitologia",
    sample: "Fezes",
    turnaround: "48h",
    preparation: "Amostra recente",
  },
  {
    name: "Urinálise Completa",
    category: "Parasitologia",
    sample: "Urina",
    turnaround: "24h",
    preparation: "Primeira urina da manhã",
  },
  {
    name: "Urocultura",
    category: "Parasitologia",
    sample: "Urina",
    turnaround: "5-7 dias",
    preparation: "Coleta estéril",
  },
  {
    name: "Check-up Geriátrico Básico",
    category: "Check-ups",
    sample: "Sangue + Urina",
    turnaround: "24-48h",
    preparation: "Jejum 12h",
  },
  {
    name: "Check-up Geriátrico Completo",
    category: "Check-ups",
    sample: "Sangue + Urina",
    turnaround: "3-5 dias",
    preparation: "Jejum 12h",
  },
  {
    name: "Check-up Pré-Cirúrgico",
    category: "Check-ups",
    sample: "Sangue",
    turnaround: "24h",
    preparation: "Jejum 8h",
  },
];

const Exames = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ExamCategory>("Todos");

  const categories: ExamCategory[] = ["Todos", "Hematologia", "Hormônios", "Parasitologia", "Check-ups"];

  const filteredExams = exams.filter((exam) => {
    const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || exam.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Catálogo de Exames
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Confira nossa lista completa de exames veterinários disponíveis
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Digite o nome do exame (ex: Hemograma)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg rounded-full border-2 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="text-muted-foreground flex-shrink-0" />
            <div className="flex gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exam List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {filteredExams.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredExams.map((exam, index) => (
                <Card
                  key={index}
                  className="border-2 border-border hover:border-primary/50 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">{exam.name}</CardTitle>
                      <Badge variant="secondary" className="ml-2 flex-shrink-0">
                        {exam.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Amostra:</span>
                      <span className="font-medium text-foreground">{exam.sample}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Resultado:</span>
                      <span className="font-medium text-foreground">{exam.turnaround}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Preparo:</span>
                      <span className="font-medium text-foreground">{exam.preparation}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                Nenhum exame encontrado com esses critérios.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Não achou o que procura?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco pelo WhatsApp e nossa equipe te ajudará a encontrar o exame ideal para seu pet.
          </p>
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20informações%20sobre%20exames.", "_blank")}
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

export default Exames;
