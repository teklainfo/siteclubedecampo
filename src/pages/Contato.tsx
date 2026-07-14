import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Clock, MapPin, MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  };

  return (
    <Layout>
      <PageHero title="Contato" subtitle="Estamos à disposição para atendê-lo" />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimatedSection>
              <SectionTitle subtitle="Informações" title="Como nos encontrar" center={false} />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Endereço</p>
                    <p className="text-muted-foreground text-sm">Castro - Paraná</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Telefones</p>
                    <a href="https://wa.me/5542991213001" className="text-primary text-sm font-semibold block">(42) 99121-3001 (WhatsApp)</a>
                    <a href="tel:4232332959" className="text-muted-foreground text-sm">(42) 3233-2959</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Horários da Secretaria</p>
                    <p className="text-muted-foreground text-sm">Seg a Sex: 08h às 11h30 e 13h às 17h30</p>
                    <p className="text-muted-foreground text-sm">Sábados: 09h às 12h</p>
                  </div>
                </div>
                <a href="https://wa.me/5542991213001">
                  <Button className="rounded-full font-bold gap-2 mt-4">
                    <MessageCircle size={18} /> Chamar no WhatsApp
                  </Button>
                </a>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden border border-border h-[250px] bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Mapa preparado para incorporação</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <SectionTitle subtitle="Formulário" title="Envie sua mensagem" center={false} />
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={e => setForm({ ...form, nome: e.target.value })}
                  required
                  className="rounded-xl"
                />
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  className="rounded-xl"
                />
                <Input
                  placeholder="Seu telefone"
                  value={form.telefone}
                  onChange={e => setForm({ ...form, telefone: e.target.value })}
                  className="rounded-xl"
                />
                <Input
                  placeholder="Assunto"
                  value={form.assunto}
                  onChange={e => setForm({ ...form, assunto: e.target.value })}
                  required
                  className="rounded-xl"
                />
                <Textarea
                  placeholder="Sua mensagem"
                  value={form.mensagem}
                  onChange={e => setForm({ ...form, mensagem: e.target.value })}
                  required
                  rows={5}
                  className="rounded-xl"
                />
                <Button type="submit" size="lg" className="rounded-full font-bold w-full gap-2">
                  <Send size={18} /> Enviar mensagem
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
