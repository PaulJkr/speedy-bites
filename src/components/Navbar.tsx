import { useState } from "react";
import { Menu, X, MapPin, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Deals", href: "#deals" },
  { label: "Find Us", href: "#find-us" },
];

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  el?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { setIsOpen, itemCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollTo("#top")} className="flex items-center gap-2">
          <img src={logo} alt="FlameBite logo" className="h-10 md:h-12 w-auto" />
          <span className="font-display text-2xl md:text-3xl text-gradient tracking-wider">
            FLAMEBITE
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-display text-lg tracking-wide text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollTo("#find-us")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
          >
            <MapPin className="w-4 h-4 text-primary" />
            Find Nearest
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-hero text-primary-foreground font-display text-lg tracking-wide px-6 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-glow flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            ORDER
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-accent-foreground font-body text-xs flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-foreground"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary text-primary-foreground font-body text-[10px] flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => { scrollTo(link.href); setOpen(false); }}
                  className="font-display text-2xl tracking-wide text-foreground/70 hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { setIsOpen(true); setOpen(false); }}
                className="mt-4 bg-gradient-hero text-primary-foreground font-display text-xl tracking-wide px-6 py-3 rounded-lg shadow-glow"
              >
                VIEW CART ({itemCount})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
