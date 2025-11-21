import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-pet.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Exames do seu Pet no conforto do seu sofá.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Esqueça o estresse de levar seu pet ao laboratório. A Poa Vet vai até você em toda a Zona Sul de Porto Alegre.
            </p>
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta%20domiciliar.", "_blank")}
              className="bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chamar no WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground">
              📍 Atendemos: Tristeza, Cristal, Cavalhada e região
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={heroImage}
                alt="Pet relaxado em casa"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
