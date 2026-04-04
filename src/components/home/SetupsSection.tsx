import { motion } from "framer-motion";
import { Monitor, Cpu, Coffee } from "lucide-react";
import keyboardImg from "@/assets/keyboard-closeup.jpg";
import monitorImg from "@/assets/monitor-game.jpg";
import snacksImg from "@/assets/snacks-gaming.jpg";

const setups = [
  {
    icon: Monitor,
    title: "STANDARD RIG",
    image: keyboardImg,
    description: "144Hz monitor, high-performance CPU/GPU combo, mechanical keyboard & precision mouse. Perfect for casual and ranked play.",
    specs: ["144Hz Monitor", "High-Performance GPU", "Mechanical Keyboard", "Gaming Mouse"],
  },
  {
    icon: Cpu,
    title: "PRO RIG",
    image: monitorImg,
    description: "240Hz monitor, up to 400 FPS, top-tier peripherals. Built for competitive esports and maximum performance.",
    specs: ["240Hz Monitor", "Up to 400 FPS", "Premium Peripherals", "Low Latency Setup"],
    featured: true,
  },
  {
    icon: Coffee,
    title: "SNACKS + GAMING COMBO",
    image: snacksImg,
    description: "Pair your session with snacks and cold drinks. Energy fuel for extended gaming marathons.",
    specs: ["Snacks & Chips", "Cold Drinks", "Energy Drinks", "Affordable Add-on"],
  },
];

const SetupsSection = () => (
  <section className="py-20 md:py-28 bg-surface-dark" id="setups">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="section-label mb-3">OUR RIGS</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
          SETUPS & SPECS
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {setups.map((setup, i) => (
          <motion.div
            key={setup.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`glass-card overflow-hidden group ${
              setup.featured ? "ring-1 ring-primary/40" : ""
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={setup.image}
                alt={setup.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              {setup.featured && (
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground font-heading text-[10px] tracking-widest px-3 py-1 rounded-sm">
                  MOST POPULAR
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <setup.icon size={18} className="text-primary" />
                <h3 className="font-heading text-lg tracking-wider text-foreground">
                  {setup.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {setup.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {setup.specs.map((spec) => (
                  <span
                    key={spec}
                    className="text-[11px] font-heading tracking-wider bg-secondary text-secondary-foreground px-2.5 py-1 rounded-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SetupsSection;
