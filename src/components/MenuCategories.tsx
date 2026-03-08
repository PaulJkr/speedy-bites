import { useState } from "react";
import { motion } from "framer-motion";
import CategoryMenuModal from "./CategoryMenuModal";
import burgerImg from "@/assets/hero-burger.png";
import wingsImg from "@/assets/wings.png";
import pizzaImg from "@/assets/pizza.png";
import friesImg from "@/assets/fries.png";
import chickenImg from "@/assets/chicken-burger.png";
import shakeImg from "@/assets/shake.png";

const categories = [
  { name: "Smash Burgers", image: burgerImg, count: "24 spots" },
  { name: "Wings", image: wingsImg, count: "18 spots" },
  { name: "Pizza", image: pizzaImg, count: "31 spots" },
  { name: "Loaded Fries", image: friesImg, count: "15 spots" },
  { name: "Chicken", image: chickenImg, count: "22 spots" },
  { name: "Shakes", image: shakeImg, count: "12 spots" },
];

const MenuCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <section id="menu" className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-body font-semibold tracking-widest uppercase text-sm mb-3">
              #OUR FOOD
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-wide">
              ALL ABOUT THE <span className="text-gradient">SAUCY</span>,
              <br />THE <span className="text-gradient">JUICY</span>, THE{" "}
              <span className="text-gradient">FRESH</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelectedCategory(cat.name)}
                className="group relative rounded-xl overflow-hidden bg-card shadow-card cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all active:scale-[0.98]"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="font-display text-2xl md:text-3xl tracking-wide text-foreground">
                    {cat.name}
                  </h3>
                  <p className="font-body text-sm text-primary">{cat.count} · Tap to explore</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CategoryMenuModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </>
  );
};

export default MenuCategories;
