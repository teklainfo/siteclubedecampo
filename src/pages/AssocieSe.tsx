import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Dumbbell, Waves, Calendar, Users, TreePine, Heart, ArrowRight, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const benefits = [
  { icon: Dumbbell, title: "Estrutura Esportiva", desc: "Campos, quadras e pistas" },
  { icon: Waves, title: "Piscinas", desc: "Semiolímpica aquecida e funda" },
  { icon: Calendar, title: "Eventos", desc: "Festas, torneios e encontros" },
  { icon: Users, title: "Ambiente Familiar", desc: "Seguro e acolhedor" },
  { icon: Heart, title: "Espaços Sociais", desc: "Restaurante, quiosques e salões" },
  { icon: TreePine, title: "Natureza", desc: "242 mil m² de área verde" },
];

const AssocieSe = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", cidade: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Interesse registrado com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", telefone: "", email: "", cidade: "", mensagem: "" });
  };

  return (
    <Layout>
      <PageHero title="Associe-se" subtitle="Faça parte do Castro Clube de Campo" />

      <section className="section-padding bg-background">
        <div className="container mx-auto text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Faça parte do Castro Clube de Campo
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Viva momentos inesquecíveis com sua família em um espaço que une tradição, natureza, esporte e convivência.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-secondary pt-0">
        <div className="container mx-auto">
          <SectionTitle subtitle="Vantagens" title="Benefícios para Associados" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-all">
                  <b.icon size={32} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-heading font-bold text-foreground">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-lg">
          <SectionTitle subtitle="Interesse" title="Quero me associar" description="Preencha o formulário e entraremos em contato com todas as informações." />
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Seu nome completo" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required className="rounded-xl" />
            <Input placeholder="Telefone com DDD" value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} required className="rounded-xl" />
            <Input type="email" placeholder="Seu e-mail" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required className="rounded-xl" />
            <Input placeholder="Cidade" value={form.cidade} onChange={e => setForm({ ...form, cidade: e.target.value })} className="rounded-xl" />
            <Textarea placeholder="Mensagem (opcional)" value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} rows={4} className="rounded-xl" />
            <Button type="submit" size="lg" className="rounded-full font-bold w-full gap-2 text-base">
              <Send size={18} /> Quero me associar
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default AssocieSe;
