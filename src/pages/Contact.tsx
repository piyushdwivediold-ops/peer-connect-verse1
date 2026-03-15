import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Get in Touch</p>
          <h1 className="font-heading text-5xl font-semibold mb-6">Contact Us</h1>
          <p className="text-muted-foreground leading-relaxed">
            Have a question, feedback, or collaboration idea? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs uppercase tracking-[0.15em] mb-2 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full h-12 px-4 bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full h-12 px-4 bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.15em] mb-2 block">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                required
                className="w-full h-12 px-4 bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.15em] mb-2 block">Message</label>
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                rows={6}
                className="w-full p-4 bg-secondary border border-border text-sm resize-none focus:outline-none focus:ring-1 focus:ring-foreground"
              />
            </div>
            <Button type="submit" size="lg">Send Message</Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-10"
          >
            <div className="flex gap-4">
              <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-xs uppercase tracking-[0.15em] mb-1">Email</p>
                <a href="mailto:hello@velvora.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  hello@velvora.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-xs uppercase tracking-[0.15em] mb-1">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (555) 000-0000</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-xs uppercase tracking-[0.15em] mb-1">Address</p>
                <p className="text-sm text-muted-foreground">
                  123 Fashion Ave, Suite 400
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-[0.15em] mb-4">Follow Us</p>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
                <a href="#" className="hover:text-foreground transition-colors">TikTok</a>
                <a href="#" className="hover:text-foreground transition-colors">Twitter / X</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
