import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Dumbbell, Waves, UtensilsCrossed, Baby } from "lucide-react";

const categories = [
  { key: "all", label: "Todos", icon: null },
  { key: "esportes", label: "Esportes", icon: Dumbbell },
  { key: "aquatico", label: "Parque Aquático", icon: Waves },
  { key: "social", label: "Social e Gastronomia", icon: UtensilsCrossed },
  { key: "infantil", label: "Infantil e Bem-estar", icon: Baby },
];

const items = [
  { title: "Campo de Futebol Oficial", desc: "Gramado oficial para partidas e treinos", cat: "esportes" },
  { title: "Campo de Futebol Suíço", desc: "Campo de dimensões reduzidas para jogos recreativos", cat: "esportes" },
  { title: "Quadras de Tênis", desc: "Quadras de saibro para prática do esporte", cat: "esportes" },
  { title: "Quadras de Vôlei", desc: "Espaço para vôlei de quadra e recreativo", cat: "esportes" },
  { title: "Quadras de Beach Tennis", desc: "Novas quadras de areia para a modalidade em crescimento", cat: "esportes" },
  { title: "Pista de Caminhada", desc: "Percurso em meio à natureza para atividade física", cat: "esportes" },
  { title: "Piscina Semiolímpica Aquecida", desc: "Piscina de 25m com sistema de aquecimento solar", cat: "aquatico" },
  { title: "Piscina Funda", desc: "Piscina para mergulho e lazer adulto", cat: "aquatico" },
  { title: "Sede Social", desc: "Espaço principal para eventos e reuniões", cat: "social" },
  { title: "Restaurante", desc: "Gastronomia de qualidade para sócios e convidados", cat: "social" },
  { title: "Casa da Costela", desc: "Espaço dedicado à tradicional costela no fogo de chão", cat: "social" },
  { title: "Churrasqueira do Galpão", desc: "Espaço amplo para confraternizações", cat: "social" },
  { title: "Salão da Árvore", desc: "Ambiente acolhedor para eventos menores", cat: "social" },
  { title: "Quiosques", desc: "Espaços individuais com churrasqueira para famílias", cat: "social" },
  { title: "Sauna", desc: "Espaço de relaxamento e bem-estar", cat: "infantil" },
  { title: "Salão de Jogos", desc: "Diversão para todas as idades", cat: "infantil" },
  { title: "Playground", desc: "Área infantil moderna e segura para crianças", cat: "infantil" },
];

const Infraestrutura = () => {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? items : items.filter(i => i.cat === filter);

  return (
    <Layout>
      <PageHero title="Infraestrutura" subtitle="Estrutura completa em 242 mil m² de área verde" />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionTitle subtitle="Nossos Espaços" title="Conheça toda a estrutura" />

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  filter === cat.key
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all group">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Dumbbell size={40} className="text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Infraestrutura;
