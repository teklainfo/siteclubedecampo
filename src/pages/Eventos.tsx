import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar, Heart, UtensilsCrossed, Users, PartyPopper, Music, Volleyball, Home } from "lucide-react";

const eventCards = [
  { icon: Volleyball, title: "Eventos Esportivos", desc: "Torneios de futebol, tênis, vôlei e beach tennis que movimentam o clube ao longo do ano." },
  { icon: PartyPopper, title: "Festas e Encontros", desc: "Celebrações temáticas, festas juninas, datas comemorativas e eventos especiais." },
  { icon: UtensilsCrossed, title: "Almoços e Confraternizações", desc: "Costela no fogo de chão, churrascos familiares e almoços nos finais de semana." },
  { icon: Home, title: "Espaços para Família", desc: "Quiosques, churrasqueiras, salões e áreas verdes para reunir quem você ama." },
];

const spaces = [
  { icon: Home, title: "Sede Social", desc: "Para eventos maiores e reuniões institucionais" },
  { icon: UtensilsCrossed, title: "Restaurante", desc: "Gastronomia de qualidade em ambiente acolhedor" },
  { icon: Music, title: "Salão da Árvore", desc: "Ambiente charmoso para eventos intimistas" },
  { icon: Users, title: "Quiosques", desc: "Espaços privativos com churrasqueira" },
];

const Eventos = () => (
  <Layout>
    <PageHero title="Eventos e Social" subtitle="Experiências, encontros e memórias para toda a família" />

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionTitle subtitle="Vida Social" title="Muito mais que estrutura" description="Mais do que estrutura, o clube oferece experiências, encontros e memórias para toda a família." />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {eventCards.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all h-full">
                <item.icon size={36} className="text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <SectionTitle subtitle="Espaços" title="Para Confraternizações" description="Reserve espaços para seus eventos e confraternizações." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {spaces.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-md transition-all">
                <item.icon size={28} className="mx-auto mb-3 text-primary" />
                <h3 className="font-heading font-bold text-foreground text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto text-center">
        <SectionTitle subtitle="Em breve" title="Reservas Online" description="Estamos preparando um sistema de reservas online para facilitar ainda mais o seu dia a dia no clube." />
        <div className="bg-secondary rounded-2xl p-10 max-w-md mx-auto border border-border">
          <Calendar size={48} className="mx-auto mb-4 text-primary/40" />
          <p className="text-muted-foreground font-semibold">Em desenvolvimento</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Eventos;
