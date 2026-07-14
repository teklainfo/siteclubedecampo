import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { FileText, Search, Download } from "lucide-react";
import { Input } from "@/components/ui/input";

const docCategories = ["Todos", "Estatuto Social", "Regimento Interno", "Atas", "Editais", "Prestação de Contas"];

const documents = [
  { title: "Estatuto Social Vigente", cat: "Estatuto Social", date: "2024" },
  { title: "Regimento Interno", cat: "Regimento Interno", date: "2024" },
  { title: "Ata da Assembleia Geral Ordinária", cat: "Atas", date: "2025" },
  { title: "Ata da Assembleia Geral Extraordinária", cat: "Atas", date: "2024" },
  { title: "Edital de Convocação – Assembleia 2025", cat: "Editais", date: "2025" },
  { title: "Prestação de Contas Anual 2024", cat: "Prestação de Contas", date: "2024" },
  { title: "Prestação de Contas Anual 2023", cat: "Prestação de Contas", date: "2023" },
];

const Transparencia = () => {
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");
  const filtered = documents.filter(d =>
    (filter === "Todos" || d.cat === filter) &&
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <PageHero title="Transparência" subtitle="Compromisso com gestão séria, clareza e responsabilidade institucional" />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle subtitle="Documentos" title="Acesso à Informação" />

          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar documento..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {docCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((doc, i) => (
              <AnimatedSection key={doc.title} delay={i * 0.05}>
                <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all flex items-center justify-between gap-4 cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <FileText size={24} className="text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{doc.title}</p>
                      <p className="text-xs text-muted-foreground">{doc.cat} · {doc.date}</p>
                    </div>
                  </div>
                  <Download size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
              </AnimatedSection>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-10">Nenhum documento encontrado.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transparencia;
