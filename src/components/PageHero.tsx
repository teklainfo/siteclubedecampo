import { motion } from "framer-motion";
import heroImg from "@/assets/hero-club.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-accent/80" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 text-center px-4"
    >
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground">{title}</h1>
      {subtitle && <p className="mt-4 text-lg text-accent-foreground/80 max-w-xl mx-auto">{subtitle}</p>}
    </motion.div>
  </section>
);

export default PageHero;
