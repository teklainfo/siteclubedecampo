import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Target, Eye, Heart } from "lucide-react";

const timelineData = [
  { year: "1975", text: "Fundação oficial e assinatura do Estatuto Social" },
  { year: "1977", text: "Aquisição da sede campestre (242.000m²)" },
  { year: "1980", text: "Inauguração da Piscina Funda e do primeiro Bar" },
  { year: "1997", text: "Entrega da Piscina Semiolímpica" },
  { year: "2006", text: "Incorporação do Clube União" },
  { year: "2012", text: "Campo oficial e Casa da Costela" },
  { year: "2024", text: "Usina Solar, aquecimento da piscina e nova churrasqueira" },
  { year: "2025", text: "Quadras de beach tennis e reservatório de 20 mil litros" },
  { year: "2026", text: "Playground e consolidação do ciclo patrimonial" },
];

const values = [
  { icon: Target, title: "Missão", text: "Promover lazer, esporte e convivência com qualidade, fortalecendo os laços da família castrense." },
  { icon: Eye, title: "Visão", text: "Ser referência regional como clube social, esportivo e familiar." },
  { icon: Heart, title: "Valores", text: "Tradição, respeito, acolhimento, responsabilidade, transparência e inovação." },
];

const OClube = () => (
  <Layout>
    <PageHero title="O Clube" subtitle="Conheça a história e os valores do Castro Clube de Campo" />

    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <SectionTitle subtitle="História" title="Nossa História" />
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>O Castro Clube de Campo nasceu do ideal de criar um espaço que unisse lazer, esporte e natureza para as famílias de Castro. Em 1975, um grupo de visionários fundou oficialmente o clube, dando início a uma trajetória que se tornaria referência regional.</p>
          <p>Em 1977, foi adquirida a sede campestre com 242.000m² de área, estabelecendo o espaço que hoje abriga toda a infraestrutura do clube. Nas décadas seguintes, o clube cresceu com a construção de piscinas, quadras, campos esportivos e espaços sociais.</p>
          <p>Em 2006, a incorporação do Clube União marcou um momento de expansão e consolidação patrimonial. Desde então, o Castro Clube de Campo segue investindo em modernização, sustentabilidade e qualidade para seus associados.</p>
          <p>Em 2025, o clube celebra 50 anos de existência, reafirmando seu compromisso com a família castrense e projetando um futuro de ainda mais conquistas.</p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-3xl">
        <SectionTitle subtitle="Marcos" title="Linha do Tempo" />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-0.5" />
          {timelineData.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 0.08}>
              <div className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-1 z-10" />
                <div className="ml-10 md:ml-0 md:w-1/2 bg-card rounded-xl p-5 border border-border shadow-sm">
                  <span className="text-primary font-bold text-lg">{item.year}</span>
                  <p className="text-foreground mt-1">{item.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionTitle subtitle="Identidade" title="Missão, Visão e Valores" />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.15}>
              <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-all h-full">
                <v.icon size={36} className="mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default OClube;
