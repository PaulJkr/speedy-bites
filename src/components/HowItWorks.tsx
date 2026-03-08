import { motion } from "framer-motion";
import { MapPin, UtensilsCrossed, Bike } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "FIND YOUR SPOT",
    description: "Drop your location and we'll show you the hottest joints near you.",
  },
  {
    icon: UtensilsCrossed,
    title: "PICK YOUR FEAST",
    description: "Browse menus, build your order, and customize it your way.",
  },
  {
    icon: Bike,
    title: "GET IT DELIVERED",
    description: "Track your rider in real-time. Fresh food at your door, fast.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body font-semibold tracking-widest uppercase text-sm mb-3">
            HOW IT WORKS
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wide">
            DEAD <span className="text-gradient">SIMPLE</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <step.icon className="w-9 h-9 text-primary-foreground" />
              </div>
              <div className="font-display text-5xl text-muted-foreground/20 mb-2">
                0{i + 1}
              </div>
              <h3 className="font-display text-2xl md:text-3xl tracking-wide mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="font-body text-muted-foreground max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
