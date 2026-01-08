import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const CartSidebar = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-accent" />
                <h2 className="font-poppins font-bold text-xl text-foreground">
                  Your Cart
                </h2>
                <span className="px-2 py-0.5 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Add some products to get started
                  </p>
                  <Button variant="accent" onClick={() => setIsCartOpen(false)}>
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4 p-4 bg-secondary/30 rounded-xl"
                      >
                        {/* Product Image */}
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground line-clamp-1 mb-1">
                            {item.product.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.product.brand}
                          </p>
                          <p className="font-bold text-accent">
                            ${item.product.price}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="w-7 h-7 rounded-md bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-semibold text-foreground">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="w-7 h-7 rounded-md bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border bg-card">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-bold text-xl text-foreground">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                  <span>Shipping & taxes calculated at checkout</span>
                </div>
                <Button variant="accent" className="w-full" size="lg">
                  Checkout
                </Button>
                <Button
                  variant="ghost"
                  className="w-full mt-2"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
