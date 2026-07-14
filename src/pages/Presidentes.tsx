import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { User } from "lucide-react";

const presidentes = [
  { periodo: "1975/1977", nome: "Albino Schultz e Reinaldo Cardoso" },
  { periodo: "1977/1979", nome: "Hideo Kayano e Dionisio Bertolini" },
  { periodo: "1979/1981", nome: "Reinaldo Cardoso e Jones E. M. Lima" },
  { periodo: "1981/1983", nome: "Domingos Faustino de Carvalho e Leonildo Razera" },
  { periodo: "1983/1985", nome: "Claudioni Braga e Dionisio Bertolini" },
  { periodo: "1985/1987", nome: "Leonildo Razera e Juarez Rupel" },
  { periodo: "1987/1989", nome: "Albino Schultz e Neodo Carlos S Pereira" },
  { periodo: "1989/1991", nome: "Ilvo Enio Buske e Ricardo Nardi Cardoso" },
  { periodo: "1991/1993", nome: "Ilvo Enio Buske e Pedro O. Pereira" },
  { periodo: "1993/1995", nome: "Ricardi Zappe e João Galvão Prestes" },
  { periodo: "1995/1997", nome: "João Galvão Prestes e Laercio Carlos Pereira" },
  { periodo: "1997/1999", nome: "Ricardi Zappe e João Galvão Prestes" },
  { periodo: "1999/2001", nome: "Ricardi Zappe e Rosmir Cesar de Oliveira" },
  { periodo: "2001/2003", nome: "José Augusto Fanha Rosa e Fredi Wilson Schoembacler" },
  { periodo: "2003/2005", nome: "José Augusto Fanha Rosa e João Galvão Prestes" },
  { periodo: "2005/2007", nome: "Mauricio Proença e José Augusto Fanha Rosa" },
  { periodo: "2007/2009", nome: "Mauricio Proença e José Carlos de Azambuja Souto de Oliveira" },
  { periodo: "2009/2011", nome: "Cristiano Meira de Lima e José Carlos de Azambuja Souto de Oliveira" },
  { periodo: "2011/2013", nome: "José Eneas Nunes Prestes e João Galvão Prestes" },
  { periodo: "2013/2015", nome: "José Eneas Nunes Prestes e Reginaldo Fittkau" },
  { periodo: "2015/2017", nome: "Reginaldo Fittkau e Pedro Paulo Rankel" },
  { periodo: "2017/2019", nome: "Reginaldo Fittkau e Pedro Paulo Rankel" },
  { periodo: "2019/2021", nome: "José Henrique de Oliveira e Reginaldo Fittkau" },
  { periodo: "2021/2023", nome: "Reginaldo Fittkau e Pedro Paulo Rankel" },
  { periodo: "2023/2025", nome: "Reginaldo Fittkau e Pedro Paulo Rankel" },
];

const Presidentes = () => (
  <Layout>
    <PageHero title="Mural de Presidentes" subtitle="Homenagem às lideranças que construíram nossa história" />

    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle subtitle="Lideranças" title="Nossos Presidentes" description="Cada gestão deixou sua contribuição para a construção da história, da estrutura e da solidez institucional do Castro Clube de Campo." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {presidentes.map((p, i) => (
            <AnimatedSection key={p.periodo} delay={i * 0.03}>
              <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <User size={18} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary">{p.periodo}</span>
                    <p className="text-sm font-semibold text-foreground mt-0.5 leading-snug">{p.nome}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Presidentes;
