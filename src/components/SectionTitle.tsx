interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle = ({ subtitle, title, description, center = true, light = false }: SectionTitleProps) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    {subtitle && (
      <span className={`text-sm font-bold uppercase tracking-widest ${light ? "text-primary-foreground/70" : "text-primary"}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionTitle;
