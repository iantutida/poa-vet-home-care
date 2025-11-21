import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFAB = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta%20domiciliar.",
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp/90 text-white shadow-2xl hover:shadow-3xl transition-all animate-pulse-scale z-40"
      size="icon"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};

export default WhatsAppFAB;
