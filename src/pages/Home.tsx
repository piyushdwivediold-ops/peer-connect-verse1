import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import collectionImg from "@/assets/collection-streetwear.jpg";
import { products } from "@/data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const Home = () => {
  const trendingProducts = products.filter(p => p.isTrending).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Fashion model in streetwear" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="container relative z-10 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] mb-4 opacity-80">New Collection — Spring 2026</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] mb-6">
              Where Style
              <br />
              Meets Identity
            </h1>
            <p className="text-base md:text-lg opacity-80 mb-8 max-w-md leading-relaxed">
              Premium streetwear crafted for those who define their own aesthetic. Bold, modern, unapologetic.
            </p>
            <div className="flex gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border py-4 overflow-hidden bg-background">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Free Shipping Over $150 • Premium Quality • Sustainable Fashion • Limited Drops
            </span>
          ))}
        </div>
      </div>

      {/* Featured Collection */}
      <section className="container py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div custom={0} variants={fadeUp}>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Featured</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              The Essentials
              <br />
              Collection
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Timeless pieces built for everyday wear. Our Essentials line blends premium fabrics
              with clean silhouettes — designed to be styled your way.
            </p>
            <Link to="/shop">
              <Button variant="outline" size="lg">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div custom={1} variants={fadeUp} className="aspect-[4/5] overflow-hidden">
            <img
              src={collectionImg}
              alt="Essentials collection flatlay"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Trending Products */}
      <section className="bg-secondary py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Trending Now</p>
              <h2 className="font-heading text-4xl font-semibold">Best Sellers</h2>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-[0.2em] hover:opacity-60 transition-opacity flex items-center gap-2">
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {trendingProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden bg-muted mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-sm font-medium mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">${product.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Split */}
      <section className="container py-24">
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] overflow-hidden group"
          >
            <img src={lifestyle1} alt="Urban streetwear look" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
            <div className="absolute bottom-8 left-8 text-primary-foreground">
              <p className="text-xs uppercase tracking-[0.3em] mb-2">Men's</p>
              <h3 className="font-heading text-3xl font-semibold">Street Edit</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-[3/4] overflow-hidden group"
          >
            <img src={lifestyle2} alt="Minimal luxury look" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
            <div className="absolute bottom-8 left-8 text-primary-foreground">
              <p className="text-xs uppercase tracking-[0.3em] mb-2">Unisex</p>
              <h3 className="font-heading text-3xl font-semibold">Quiet Luxury</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-foreground text-background py-24">
        <div className="container text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-8">What People Say</p>
          <blockquote className="font-heading text-3xl md:text-4xl font-semibold leading-snug mb-8">
            "Velvora changed how I think about streetwear. The quality is unreal and every piece just fits perfectly into my wardrobe."
          </blockquote>
          <p className="text-sm opacity-60">— Alex M., New York</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Stay in the Loop</h2>
          <p className="text-muted-foreground mb-8">
            Be the first to know about new drops, exclusive offers, and style inspiration.
          </p>
          <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-12 px-4 bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            <Button className="h-12">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
