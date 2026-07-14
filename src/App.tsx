import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import OClube from "./pages/OClube";
import Infraestrutura from "./pages/Infraestrutura";
import Eventos from "./pages/Eventos";
import Presidentes from "./pages/Presidentes";
import Transparencia from "./pages/Transparencia";
import Contato from "./pages/Contato";
import AssocieSe from "./pages/AssocieSe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-clube" element={<OClube />} />
          <Route path="/infraestrutura" element={<Infraestrutura />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/presidentes" element={<Presidentes />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/associe-se" element={<AssocieSe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
