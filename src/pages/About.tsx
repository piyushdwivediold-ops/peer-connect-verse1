import { motion } from "framer-motion";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";

const About = () => (
  <div className="min-h-screen pt-16">
    {/* Hero */}
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Our Story</p>
        <h1 className="font-heading text-5xl md:text-6xl font-semibold leading-tight mb-8">
          Fashion for Those
          <br />
          Who Define Themselves
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Velvora was born from a simple belief: clothing should be an extension of who you are,
          not a costume you wear. We create pieces that feel as good as they look — blending
          premium craftsmanship with modern streetwear sensibility.
        </p>
      </motion.div>
    </section>

    {/* Image + Text */}
    <section className="container pb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/5] overflow-hidden"
        >
          <img src={lifestyle1} alt="Velvora lifestyle" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Built for the
            <br />
            New Generation
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We started Velvora with a vision: to bridge the gap between luxury fashion and
              everyday streetwear. Every piece in our collection is thoughtfully designed, using
              premium fabrics and sustainable practices.
            </p>
            <p>
              Our design process starts on the streets — observing how people actually dress,
              move, and express themselves. From there, we refine each garment until it's
              something we'd be proud to wear ourselves.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-foreground text-background py-24">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-16 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Quality First", desc: "Every garment uses premium fabrics sourced from the finest mills. We never compromise on materials." },
            { title: "Sustainable Design", desc: "We're committed to reducing our footprint. From organic cotton to recycled packaging, sustainability guides every decision." },
            { title: "Inclusive Identity", desc: "Fashion has no boundaries. We design for every body, every style, every identity. You define your look — we just provide the canvas." },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <h3 className="font-heading text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="opacity-60 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Full width image */}
    <section>
      <div className="aspect-[21/9] overflow-hidden">
        <img src={lifestyle2} alt="Brand lifestyle" className="w-full h-full object-cover" />
      </div>
    </section>
  </div>
);

export default About;
