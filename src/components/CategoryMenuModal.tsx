import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Clock, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import burgerImg from "@/assets/hero-burger.png";
import wingsImg from "@/assets/wings.png";
import pizzaImg from "@/assets/pizza.png";
import friesImg from "@/assets/fries.png";
import chickenImg from "@/assets/chicken-burger.png";
import shakeImg from "@/assets/shake.png";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  time: string;
  rating: string;
}

const menuData: Record<string, MenuItem[]> = {
  "Smash Burgers": [
    { id: "b1", name: "Classic Smash", description: "Beef patty, cheddar, pickles, special sauce", price: 79, image: burgerImg, time: "20 min", rating: "4.9" },
    { id: "b2", name: "Double Stack", description: "Double beef, double cheese, onion rings", price: 109, image: burgerImg, time: "22 min", rating: "4.8" },
    { id: "b3", name: "Bacon Blaze", description: "Crispy bacon, jalapeños, smoked cheddar", price: 99, image: burgerImg, time: "20 min", rating: "4.7" },
  ],
  "Wings": [
    { id: "w1", name: "6 Hot Wings", description: "Crispy wings, buffalo sauce, ranch dip", price: 69, image: wingsImg, time: "18 min", rating: "4.8" },
    { id: "w2", name: "12 Wing Platter", description: "Mix of 3 sauces, celery sticks, 2 dips", price: 119, image: wingsImg, time: "25 min", rating: "4.9" },
    { id: "w3", name: "BBQ Wings", description: "Sticky BBQ glaze, coleslaw", price: 79, image: wingsImg, time: "18 min", rating: "4.6" },
  ],
  "Pizza": [
    { id: "p1", name: "Pepperoni Classic", description: "Mozzarella, pepperoni, oregano", price: 89, image: pizzaImg, time: "30 min", rating: "4.7" },
    { id: "p2", name: "Meat Feast", description: "Bacon, sausage, ham, beef", price: 109, image: pizzaImg, time: "32 min", rating: "4.8" },
    { id: "p3", name: "Margherita", description: "Fresh basil, tomato, buffalo mozzarella", price: 79, image: pizzaImg, time: "28 min", rating: "4.5" },
  ],
  "Loaded Fries": [
    { id: "f1", name: "Cheese Fries", description: "Cheddar sauce, jalapeños, sour cream", price: 59, image: friesImg, time: "15 min", rating: "4.6" },
    { id: "f2", name: "Bacon Ranch Fries", description: "Crispy bacon bits, ranch, spring onion", price: 69, image: friesImg, time: "15 min", rating: "4.7" },
    { id: "f3", name: "Chilli Cheese Fries", description: "Beef chilli, cheese sauce, sour cream", price: 79, image: friesImg, time: "18 min", rating: "4.8" },
  ],
  "Chicken": [
    { id: "c1", name: "Crispy Chicken Burger", description: "Buttermilk chicken, slaw, pickles", price: 89, image: chickenImg, time: "20 min", rating: "4.8" },
    { id: "c2", name: "Spicy Chicken Wrap", description: "Grilled chicken, peri-peri, salad", price: 79, image: chickenImg, time: "18 min", rating: "4.6" },
    { id: "c3", name: "Chicken Strips", description: "5 strips, honey mustard, fries", price: 69, image: chickenImg, time: "15 min", rating: "4.7" },
  ],
  "Shakes": [
    { id: "s1", name: "Choc Overload", description: "Double chocolate, whipped cream, sprinkles", price: 49, image: shakeImg, time: "5 min", rating: "4.9" },
    { id: "s2", name: "Oreo Crush", description: "Oreo cookies, vanilla ice cream, cream", price: 49, image: shakeImg, time: "5 min", rating: "4.8" },
    { id: "s3", name: "Strawberry Dream", description: "Fresh strawberries, vanilla, cream", price: 45, image: shakeImg, time: "5 min", rating: "4.7" },
  ],
};

interface CategoryMenuModalProps {
  category: string | null;
  onClose: () => void;
}

const CategoryMenuModal = ({ category, onClose }: CategoryMenuModalProps) => {
  const { addItem } = useCart();
  const items = category ? menuData[category] || [] : [];

  return (
    <AnimatePresence>
      {category && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/70 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-4 md:inset-x-auto md:inset-y-12 md:max-w-2xl md:mx-auto bg-card border border-border rounded-2xl z-40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-3xl tracking-wide">{category}</h2>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4 bg-secondary rounded-xl p-4 hover:ring-1 hover:ring-primary/30 transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-xl tracking-wide">{item.name}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-0.5">{item.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground font-body">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.time}</span>
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 text-primary" /> {item.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <span className="font-display text-xl text-primary">R{item.price}</span>
                    <button
                      onClick={() => addItem({ id: item.id, name: item.name, price: item.price, image: item.image })}
                      className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center hover:opacity-90 transition-opacity shadow-glow"
                    >
                      <Plus className="w-4 h-4 text-primary-foreground" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CategoryMenuModal;
