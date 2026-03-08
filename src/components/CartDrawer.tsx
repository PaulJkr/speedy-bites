import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const CartDrawer = () => {
  const {
    items,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeItem,
    clearCart,
    total,
    itemCount,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-border z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-display text-2xl tracking-wide">
                  YOUR ORDER
                </h2>
                {itemCount > 0 && (
                  <span className="bg-primary text-primary-foreground font-body text-xs font-bold px-2 py-0.5 rounded-full">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
                  <p className="font-display text-xl text-muted-foreground">
                    CART IS EMPTY
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    Add some fire items from the menu
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex gap-4 bg-secondary rounded-xl p-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-lg tracking-wide truncate">
                          {item.name}
                        </h4>
                        <p className="font-display text-primary text-lg">
                          R{item.price * item.quantity}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-7 h-7 rounded-md bg-card flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-body text-sm font-semibold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-7 h-7 rounded-md bg-card flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-muted-foreground hover:text-accent transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-body text-muted-foreground">
                    Subtotal
                  </span>
                  <span className="font-display text-2xl">Ksh.{total}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-muted-foreground">
                    Delivery
                  </span>
                  <span className="font-body text-sm text-primary">FREE</span>
                </div>
                <div className="flex justify-between items-center border-t border-border pt-3">
                  <span className="font-display text-xl">TOTAL</span>
                  <span className="font-display text-3xl text-primary">
                    Ksh.{total}
                  </span>
                </div>
                <button
                  onClick={() => {
                    toast.success("Order placed! Your food is on the way.");
                    clearCart();
                    setIsOpen(false);
                  }}
                  className="w-full bg-gradient-hero text-primary-foreground font-display text-xl tracking-wide py-4 rounded-lg hover:opacity-90 transition-opacity shadow-glow"
                >
                  CHECKOUT — Ksh.{total}
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-muted-foreground font-body text-sm hover:text-foreground transition-colors"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
