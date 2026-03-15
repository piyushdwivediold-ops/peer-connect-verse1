import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Minus, Plus } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop"><Button variant="outline">Back to Shop</Button></Link>
        </div>
      </div>
    );
  }

  const recommended = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({ title: "Select a size", description: "Please choose a size before adding to cart.", variant: "destructive" });
      return;
    }
    for (let i = 0; i < quantity; i++) addToCart(product, selectedSize);
    toast({ title: "Added to cart", description: `${product.name} — Size ${selectedSize} × ${quantity}` });
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container py-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="aspect-[3/4] overflow-hidden bg-muted"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {product.isNew && (
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">New Arrival</span>
            )}
            <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-2">{product.name}</h1>
            <p className="text-xl mb-6">${product.price}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Size selector */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] mb-3">Size</p>
              <div className="flex gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-11 w-11 text-sm border transition-all ${
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] mb-3">Quantity</p>
              <div className="inline-flex items-center border border-border">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="h-11 w-11 flex items-center justify-center hover:bg-secondary">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="h-11 w-12 flex items-center justify-center text-sm border-x border-border">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="h-11 w-11 flex items-center justify-center hover:bg-secondary">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1" onClick={handleAddToCart}>
                Buy Now
              </Button>
            </div>

            {/* Details accordion */}
            <div className="mt-12 space-y-4 border-t border-border pt-8">
              <div className="text-sm">
                <p className="font-medium mb-2">Details</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>Category: {product.category}</li>
                  <li>Color: {product.color}</li>
                  <li>Premium quality fabrics</li>
                  <li>Relaxed, modern fit</li>
                </ul>
              </div>
              <div className="text-sm border-t border-border pt-4">
                <p className="font-medium mb-2">Shipping & Returns</p>
                <p className="text-muted-foreground">Free shipping on orders over $150. Easy returns within 30 days.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recommended */}
        {recommended.length > 0 && (
          <section className="py-24">
            <h2 className="font-heading text-3xl font-semibold mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {recommended.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden bg-muted mb-4">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <h3 className="text-sm font-medium mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">${p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
