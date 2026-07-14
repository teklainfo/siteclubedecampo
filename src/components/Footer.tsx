import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-ccc.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-1.5">
              <img src={logo} alt="Logo" className="h-16 w-auto" loading="lazy" />
            </div>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            A instituição da família castrense. Tradição, esporte, lazer e convivência em meio à natureza desde 1975.
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading font-bold text-base">Navegação</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/" className="hover:opacity-100 transition-opacity">Início</Link>
            <Link to="/o-clube" className="hover:opacity-100 transition-opacity">O Clube</Link>
            <Link to="/infraestrutura" className="hover:opacity-100 transition-opacity">Infraestrutura</Link>
            <Link to="/eventos" className="hover:opacity-100 transition-opacity">Eventos</Link>
            <Link to="/transparencia" className="hover:opacity-100 transition-opacity">Transparência</Link>
            <Link to="/contato" className="hover:opacity-100 transition-opacity">Contato</Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading font-bold text-base">Contato</h4>
          <div className="space-y-3 text-sm opacity-80">
            <a href="https://wa.me/5542991213001" className="flex items-center gap-2 hover:opacity-100">
              <Phone size={14} /> (42) 99121-3001
            </a>
            <a href="tel:4232332959" className="flex items-center gap-2 hover:opacity-100">
              <Phone size={14} /> (42) 3233-2959
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>Castro - Paraná</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading font-bold text-base">Horários</h4>
          <div className="space-y-2 text-sm opacity-80">
            <div className="flex items-start gap-2">
              <Clock size={14} className="mt-0.5 shrink-0" />
              <div>
                <p>Seg a Sex: 08h às 11h30</p>
                <p>e 13h às 17h30</p>
                <p>Sábados: 09h às 12h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nature-divider my-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
        <p>© {new Date().getFullYear()} Castro Clube de Campo. Todos os direitos reservados.</p>
        <p>Castro - Paraná | CNPJ preparado para inserção</p>
      </div>
    </div>
  </footer>
);

export default Footer;
