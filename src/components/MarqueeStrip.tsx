const words = ["SMASHED", "BEEFY", "SAUCY", "CHEESY", "CRISPY", "SPICY", "LOADED", "FLAME-GRILLED"];

interface MarqueeStripProps {
  variant?: "primary" | "muted";
}

const MarqueeStrip = ({ variant = "primary" }: MarqueeStripProps) => {
  const items = [...words, ...words, ...words, ...words];
  
  return (
    <div className={`py-4 overflow-hidden border-y border-border ${variant === "primary" ? "bg-primary/10" : "bg-secondary"}`}>
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((word, i) => (
          <span
            key={i}
            className={`font-display text-2xl md:text-3xl tracking-widest mx-6 ${
              variant === "primary" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {word} •
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
