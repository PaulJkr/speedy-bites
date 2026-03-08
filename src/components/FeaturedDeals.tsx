import { motion } from "framer-motion";
import { Clock, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import burgerImg from "@/assets/hero-burger.png";
import wingsImg from "@/assets/wings.png";
import pizzaImg from "@/assets/pizza.png";

const deals = [
  {
    id: "deal-smash",
    title: "SMASH COMBO",
    description: "Double smashburger + loaded fries + shake",
    price: 129,
    oldPrice: "R179",
    image: burgerImg,
    badge: "🔥 HOT DEAL",
    time: "25 min",
    rating: "4.9",
  },
  {
    id: "deal-wings",
    title: "WING FEAST",
    description: "12 Wings + 2 dips + large fries",
    price: 149,
    oldPrice: "R199",
    image: wingsImg,
    badge: "⭐ POPULAR",
    time: "30 min",
    rating: "4.8",
  },
  {
    id: "deal-pizza",
    title: "PIZZA MADNESS",
    description: "2 Large pizzas + garlic bread + 2L drink",
    price: 189,
    oldPrice: "R259",
    image: pizzaImg,
    badge: "💰 BEST VALUE",
    time: "35 min",
    rating: "4.7",
  },
];

const FeaturedDeals = () => {
  const { addItem } = useCart();

  return (
    <section id="deals" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body font-semibold tracking-widest uppercase text-sm mb-3">
            LIMITED TIME
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wide">
            FIRE <span className="text-gradient">DEALS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-foreground font-body text-xs font-semibold px-3 py-1 rounded-full">
                  {deal.badge}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-muted-foreground text-xs font-body mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {deal.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-primary" /> {deal.rating}
                  </span>
                </div>
                <h3 className="font-display text-2xl tracking-wide text-foreground mb-1">
                  {deal.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {deal.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl text-primary">R{deal.price}</span>
                    <span className="font-body text-sm text-muted-foreground line-through">{deal.oldPrice}</span>
                  </div>
                  <button
                    onClick={() => addItem({ id: deal.id, name: deal.title, price: deal.price, image: deal.image })}
                    className="bg-gradient-hero text-primary-foreground font-display text-sm tracking-wide px-4 py-2 rounded-lg hover:opacity-90 transition-opacity active:scale-95"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
