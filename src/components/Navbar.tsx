import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Poa Vet Análises" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === "/" ? "text-primary" : ""
              }`}
            >
              Início
            </Link>
            <Link
              to="/exames"
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === "/exames" ? "text-primary" : ""
              }`}
            >
              Exames
            </Link>
            <Link
              to="/coleta"
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === "/coleta" ? "text-primary" : ""
              }`}
            >
              Coleta Domiciliar
            </Link>
            <Link
              to="/duvidas"
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === "/duvidas" ? "text-primary" : ""
              }`}
            >
              Dúvidas
            </Link>
            <Button
              onClick={() => window.open("https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta%20domiciliar.", "_blank")}
              className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-6"
            >
              Agendar Coleta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 ${
                location.pathname === "/" ? "text-primary" : ""
              }`}
            >
              Início
            </Link>
            <Link
              to="/exames"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 ${
                location.pathname === "/exames" ? "text-primary" : ""
              }`}
            >
              Exames
            </Link>
            <Link
              to="/coleta"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 ${
                location.pathname === "/coleta" ? "text-primary" : ""
              }`}
            >
              Coleta Domiciliar
            </Link>
            <Link
              to="/duvidas"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 ${
                location.pathname === "/duvidas" ? "text-primary" : ""
              }`}
            >
              Dúvidas
            </Link>
            <Button
              onClick={() => window.open("https://wa.me/5551999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta%20domiciliar.", "_blank")}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-full"
            >
              Agendar Coleta
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
