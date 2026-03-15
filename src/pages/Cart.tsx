import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X, ArrowRight } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-heading text-4xl font-semibold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">Add something beautiful to get started.</p>
          <Link to="/shop"><Button size="lg">Shop Now</Button></Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="container py-12">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-12">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={`${item.product.id}-${item.size}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-6 border-b border-border pb-6"
              >
                <Link to={`/product/${item.product.id}`} className="w-24 h-32 flex-shrink-0 overflow-hidden bg-muted">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-sm mb-1">{item.product.name}</h3>
                      <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.product.id, item.size)} className="p-1 hover:opacity-60">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center border border-border">
                      <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)} className="h-8 w-8 flex items-center justify-center hover:bg-secondary">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="h-8 w-10 flex items-center justify-center text-xs border-x border-border">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)} className="h-8 w-8 flex items-center justify-center hover:bg-secondary">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="text-sm font-medium">${item.product.price * item.quantity}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary p-8 sticky top-24">
              <h3 className="font-heading text-xl font-semibold mb-6">Order Summary</h3>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{totalPrice >= 150 ? "Free" : "$12"}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between font-medium text-base">
                  <span>Total</span>
                  <span>${totalPrice >= 150 ? totalPrice : totalPrice + 12}</span>
                </div>
              </div>
              <Button className="w-full" size="lg">
                Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-[10px] text-muted-foreground text-center mt-4">
                Free shipping on orders over $150
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
