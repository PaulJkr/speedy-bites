import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Deals", href: "#deals" },
  { label: "Find Us", href: "#find-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="FlameBite logo" className="h-10 md:h-12 w-auto" />
          <span className="font-display text-2xl md:text-3xl text-gradient tracking-wider">
            FLAMEBITE
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-lg tracking-wide text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            Find Nearest
          </button>
          <button className="bg-gradient-hero text-primary-foreground font-display text-lg tracking-wide px-6 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-glow">
            ORDER NOW
          </button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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
                <a
                  key={link.label}
                  href={link.href}
                  className="font-display text-2xl tracking-wide text-foreground/70 hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="mt-4 bg-gradient-hero text-primary-foreground font-display text-xl tracking-wide px-6 py-3 rounded-lg shadow-glow">
                ORDER NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
