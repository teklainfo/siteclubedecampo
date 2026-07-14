import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-ccc.png";

const navItems = [
  { label: "Início", path: "/" },
  { label: "O Clube", path: "/o-clube" },
  { label: "Infraestrutura", path: "/infraestrutura" },
  { label: "Eventos", path: "/eventos" },
  { label: "Presidentes", path: "/presidentes" },
  { label: "Transparência", path: "/transparencia" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-white rounded-full p-1">
            <img src={logo} alt="Castro Clube de Campo" className="h-12 md:h-14 w-auto" />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === item.path
                  ? "text-primary bg-secondary"
                  : "text-foreground/70 hover:text-primary hover:bg-secondary/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/associe-se" className="hidden md:block">
            <Button className="rounded-full font-bold px-6">Associe-se</Button>
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto py-4 px-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname === item.path
                    ? "text-primary bg-secondary"
                    : "text-foreground/70 hover:text-primary hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/associe-se" onClick={() => setIsOpen(false)}>
              <Button className="w-full rounded-full font-bold mt-2">Associe-se</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
