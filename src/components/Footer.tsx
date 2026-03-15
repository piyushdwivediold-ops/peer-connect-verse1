import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="font-heading text-2xl font-semibold tracking-wide">
            VELVORA
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Where style meets identity. Premium streetwear for the new generation.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] mb-4">Shop</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground transition-colors">New Arrivals</Link></li>
            <li><Link to="/shop" className="hover:text-foreground transition-colors">Best Sellers</Link></li>
            <li><Link to="/shop" className="hover:text-foreground transition-colors">Collections</Link></li>
            <li><Link to="/shop" className="hover:text-foreground transition-colors">Sale</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] mb-4">Connect</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">TikTok</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Twitter / X</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Pinterest</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 Velvora. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">Shipping</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
