import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products, categories, colors } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== "All") result = result.filter(p => p.category === selectedCategory);
    if (selectedColor !== "All") result = result.filter(p => p.color === selectedColor);
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    return result;
  }, [selectedCategory, selectedColor, sortBy]);

  const quickAdd = (product: typeof products[0]) => {
    addToCart(product, product.sizes[1] || product.sizes[0]);
    toast({ title: "Added to cart", description: `${product.name} — Size ${product.sizes[1] || product.sizes[0]}` });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="container py-12">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-2">Shop</h1>
        <p className="text-muted-foreground">The full Velvora collection</p>
      </div>

      <div className="container pb-24">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-6 mb-10 border-b border-border pb-6">
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-[0.15em] px-4 py-2 transition-all ${
                  selectedCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap">
            {colors.map(color => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`text-xs uppercase tracking-[0.15em] px-4 py-2 transition-all ${
                  selectedColor === color
                    ? "bg-foreground text-background"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {color}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="ml-auto text-xs uppercase tracking-[0.15em] bg-secondary px-4 py-2 border-none focus:outline-none cursor-pointer"
          >
            <option value="default">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] bg-foreground text-background px-2 py-1">
                      New
                    </span>
                  )}
                  {/* Quick add overlay */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button
                      onClick={e => { e.preventDefault(); quickAdd(product); }}
                      className="w-full rounded-none h-10 text-xs"
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
              </Link>
              <h3 className="text-sm font-medium mb-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground">${product.price}</p>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <p>No products match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
