import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Trophy, Waves, Sun, Dumbbell, UtensilsCrossed, TreePine,
  Sparkles, Droplets, Container, Volleyball, Baby, Award,
  Phone, Clock, MessageCircle, ArrowRight, Users, Calendar,
  FileText, Heart, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import heroImg from "@/assets/hero-club.jpg";
import frogMascot from "@/assets/frog-mascot.png";
import logo from "@/assets/logo-ccc.png";

const highlights = [
  { icon: Trophy, title: "50 anos de história", desc: "Tradição e solidez desde 1975" },
  { icon: Waves, title: "Piscina semiolímpica", desc: "Aquecida para uso o ano todo" },
  { icon: Sun, title: "Usina solar", desc: "Energia sustentável e inovação" },
  { icon: Dumbbell, title: "Quadras e campos", desc: "Esportes para todas as idades" },
  { icon: UtensilsCrossed, title: "Restaurante e social", desc: "Gastronomia e convivência" },
  { icon: TreePine, title: "Natureza e família", desc: "242 mil m² de área verde" },
];

const momentItems = [
  { icon: Sun, title: "Usina Solar", desc: "Energia limpa e sustentável para o clube" },
  { icon: Waves, title: "Piscina Aquecida", desc: "Semiolímpica com aquecimento para uso contínuo" },
  { icon: Droplets, title: "Novo Reservatório", desc: "20 mil litros para abastecimento seguro" },
  { icon: Volleyball, title: "Beach Tennis", desc: "Novas quadras para a modalidade que cresce" },
  { icon: Baby, title: "Playground Projetado", desc: "Área infantil moderna e segura" },
  { icon: Award, title: "Utilidade Pública", desc: "Reconhecimento institucional conquistado" },
];

const infraItems = [
  "Campo de Futebol Oficial", "Campo de Futebol Suíço", "Quadras de Tênis",
  "Quadras de Vôlei", "Beach Tennis", "Piscinas",
  "Restaurante", "Casa da Costela", "Quiosques e Churrasqueiras",
  "Sauna", "Salão de Jogos", "Playground"
];

const transparenciaItems = [
  "Estatuto Social", "Regimento Interno", "Atas", "Editais", "Prestação de Contas"
];

const Index = () => (
  <Layout>
    {/* HERO */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img src={heroImg} alt="Castro Clube de Campo" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/50" />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.img
            src={logo}
            alt="Castro Clube de Campo"
            className="w-32 md:w-40 mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-bold mb-6">
            50 anos de história
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-accent-foreground leading-tight">
            Castro Clube<br />de Campo
          </h1>
          <p className="text-xl md:text-2xl text-accent-foreground/90 mt-4 font-heading italic">
            A instituição da família castrense
          </p>
          <p className="text-accent-foreground/75 mt-6 text-base md:text-lg leading-relaxed max-w-lg">
            Tradição, esporte, lazer e convivência em meio à natureza, com uma história de 50 anos e um futuro em expansão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to="/associe-se">
              <Button size="lg" className="rounded-full font-bold text-base px-8 gap-2">
                Associe-se agora <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/o-clube">
              <Button size="lg" variant="outline" className="rounded-full font-bold text-base px-8 bg-accent-foreground/10 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/20">
                Conheça nossa história
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* DESTAQUES */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionTitle subtitle="Destaques" title="Por que escolher o Castro Clube" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* NOSSO MOMENTO */}
    <section className="section-padding bg-accent text-accent-foreground">
      <div className="container mx-auto">
        <SectionTitle subtitle="Nosso Momento" title="O futuro em expansão" description="O Castro Clube de Campo vive uma fase de modernização e crescimento, com investimentos em sustentabilidade, conforto e infraestrutura para seus associados." light />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {momentItems.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <div className="bg-accent-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-accent-foreground/10 hover:bg-accent-foreground/15 transition-all">
                <item.icon size={28} className="text-primary mb-3" />
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="text-accent-foreground/70 text-sm mt-1">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* SOBRE O CLUBE */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <SectionTitle subtitle="Sobre" title="Nossa História" center={false} />
            <p className="text-muted-foreground leading-relaxed text-base">
              O Castro Clube de Campo nasceu do ideal de criar um espaço que unisse lazer, esporte e natureza para as famílias de Castro. Desde 1975, construiu uma trajetória sólida, tornando-se referência regional em convivência social e qualidade de vida.
            </p>
            <Link to="/o-clube" className="mt-6 inline-block">
              <Button variant="outline" className="rounded-full font-bold gap-2">
                Ver história completa <ChevronRight size={16} />
              </Button>
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex items-center justify-center">
              <img src={frogMascot} alt="Mascote do Castro Clube de Campo" className="w-64 md:w-72 drop-shadow-xl" loading="lazy" width={512} height={512} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* INFRAESTRUTURA */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <SectionTitle subtitle="Infraestrutura" title="Nossos Espaços" description="Estrutura completa para esportes, lazer e convivência em 242 mil m² de área." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {infraItems.map((item, i) => (
            <AnimatedSection key={item} delay={i * 0.05}>
              <div className="bg-card rounded-xl p-5 text-center border border-border hover:border-primary/30 hover:shadow-md transition-all">
                <Dumbbell size={24} className="mx-auto mb-2 text-primary" />
                <p className="font-semibold text-sm text-foreground">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/infraestrutura">
            <Button variant="outline" className="rounded-full font-bold gap-2">
              Ver toda infraestrutura <ChevronRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* EVENTOS */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionTitle subtitle="Vida Social" title="Eventos e Convivência" description="Mais do que estrutura, o clube oferece experiências, encontros e memórias para toda a família." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Calendar, title: "Eventos Esportivos", desc: "Torneios e competições" },
            { icon: Heart, title: "Festas e Encontros", desc: "Celebrações memoráveis" },
            { icon: UtensilsCrossed, title: "Gastronomia", desc: "Sabores para toda família" },
            { icon: Users, title: "Confraternizações", desc: "Espaços para reunir" },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-all">
                <item.icon size={32} className="mx-auto mb-3 text-primary" />
                <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* TRANSPARÊNCIA */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <SectionTitle subtitle="Transparência" title="Gestão Séria e Responsável" description="Compromisso com gestão séria, clareza e responsabilidade institucional." />
        <div className="flex flex-wrap justify-center gap-4">
          {transparenciaItems.map((item, i) => (
            <AnimatedSection key={item} delay={i * 0.08}>
              <div className="bg-card rounded-xl px-6 py-4 border border-border flex items-center gap-3 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer">
                <FileText size={20} className="text-primary" />
                <span className="font-semibold text-sm text-foreground">{item}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/transparencia">
            <Button variant="outline" className="rounded-full font-bold gap-2">
              Acessar documentos <ChevronRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* CONTATO RÁPIDO */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionTitle subtitle="Contato" title="Fale Conosco" />
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <Phone size={28} className="mx-auto mb-3 text-primary" />
              <p className="font-bold text-foreground">WhatsApp</p>
              <a href="https://wa.me/5542991213001" className="text-primary font-semibold">(42) 99121-3001</a>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <Clock size={28} className="mx-auto mb-3 text-primary" />
              <p className="font-bold text-foreground">Atendimento</p>
              <p className="text-sm text-muted-foreground">Seg-Sex: 08h–11h30 / 13h–17h30</p>
              <p className="text-sm text-muted-foreground">Sáb: 09h–12h</p>
            </div>
          </div>
          <div className="text-center">
            <a href="https://wa.me/5542991213001">
              <Button size="lg" className="rounded-full font-bold gap-2">
                <MessageCircle size={18} /> Chamar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* CTA FINAL */}
    <section className="relative py-20 md:py-28 overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-accent/85" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatedSection>
          <img src={frogMascot} alt="" className="w-24 mx-auto mb-6 drop-shadow-lg" loading="lazy" width={512} height={512} />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-accent-foreground">
            Faça parte desta história
          </h2>
          <p className="text-accent-foreground/80 mt-4 text-lg max-w-lg mx-auto">
            Viva momentos inesquecíveis com sua família no Castro Clube de Campo.
          </p>
          <Link to="/associe-se" className="mt-8 inline-block">
            <Button size="lg" className="rounded-full font-bold text-base px-10 gap-2">
              Associe-se agora <ArrowRight size={18} />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
