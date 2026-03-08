import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import heroBurger from "@/assets/hero-burger.png";
import wingsImg from "@/assets/wings.png";
import pizzaImg from "@/assets/pizza.png";
import friesImg from "@/assets/fries.png";
import chickenImg from "@/assets/chicken-burger.png";
import shakeImg from "@/assets/shake.png";

const heroFoods = [
  { image: heroBurger, alt: "Juicy smashburger with melted cheese and bacon" },
  { image: wingsImg, alt: "Crispy fried chicken wings with sauce" },
  { image: pizzaImg, alt: "Pepperoni pizza with melted mozzarella" },
  { image: friesImg, alt: "Loaded cheese fries with toppings" },
  { image: chickenImg, alt: "Crispy chicken burger sandwich" },
  { image: shakeImg, alt: "Chocolate milkshake with whipped cream" },
];

const rotatingWords = ["SMASHED", "LOADED", "CRISPY", "SAUCY", "FLAME-GRILLED"];

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  el?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  const { setIsOpen } = useCart();
  const [currentFood, setCurrentFood] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFood((prev) => (prev + 1) % heroFoods.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(24_60%_45%/0.08),transparent_60%)]" />

      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Fast Food Delivered Fast
          </p>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl leading-[0.85] tracking-wide mb-2">
            HOME OF THE
          </h1>
          <div className="overflow-hidden h-[1.1em]">
            <motion.div
              animate={{ y: [0, -110, -220, -330, -440, 0] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              }}
              className="font-display text-6xl sm:text-7xl lg:text-9xl leading-[1.1] tracking-wide"
            >
              {rotatingWords.map((word) => (
                <div key={word} className="text-gradient">
                  {word}
                </div>
              ))}
            </motion.div>
          </div>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl leading-[0.85] tracking-wide mt-2">
            BURGERS
          </h1>
          <p className="font-body text-muted-foreground text-lg mt-6 max-w-md">
            Order from the dopest spots in your city. Delivered to your door in
            minutes, not hours.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-gradient-hero text-primary-foreground font-display text-xl tracking-wide px-8 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-glow"
            >
              ORDER NOW
            </button>
            <button
              onClick={() => scrollTo("#menu")}
              className="border border-border text-foreground font-display text-xl tracking-wide px-8 py-4 rounded-lg hover:bg-secondary transition-colors"
            >
              EXPLORE MENU
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <AnimatePresence mode="wait">
              <motion.img
                key={currentFood}
                src={heroFoods[currentFood].image}
                alt={heroFoods[currentFood].alt}
                initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: 5 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative z-10 w-full h-full object-cover rounded-3xl"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
