import { motion } from "framer-motion";
import { Monitor, Cpu, Gamepad2, Wifi, Wind, Armchair } from "lucide-react";
import { Link } from "react-router-dom";
import monitorImg from "@/assets/monitor-game.jpg";
import keyboardImg from "@/assets/keyboard-closeup.jpg";
import gamingPcImg from "@/assets/gaming-pc.jpg";

const rigs = [
  {
    name: "STANDARD RIG",
    image: keyboardImg,
    specs: {
      CPU: "High-Performance Processor",
      GPU: "Dedicated Gaming GPU",
      RAM: "16 GB DDR4",
      Monitor: "144Hz Full HD",
      Peripherals: "Mechanical Keyboard + Gaming Mouse",
      Internet: "High-Speed Broadband",
    },
  },
  {
    name: "PRO RIG",
    image: monitorImg,
    featured: true,
    specs: {
      CPU: "Top-Tier Gaming Processor",
      GPU: "Flagship GPU — Up to 400 FPS",
      RAM: "16–32 GB DDR4/DDR5",
      Monitor: "240Hz Full HD / QHD",
      Peripherals: "Premium Mechanical Keyboard + Precision Mouse",
      Internet: "High-Speed Low-Latency",
    },
  },
];

const amenities = [
  { icon: Wind, title: "FULLY AIR-CONDITIONED", desc: "Cool and comfortable gaming environment year-round." },
  { icon: Wifi, title: "HIGH-SPEED INTERNET", desc: "Low-latency broadband for lag-free online play." },
  { icon: Armchair, title: "ERGONOMIC GAMING CHAIRS", desc: "Comfortable seating for long gaming sessions." },
  { icon: Gamepad2, title: "ALL GAMES PRE-INSTALLED", desc: "Trending titles ready to play — no downloads." },
];

const SetupsPage = () => (
  <div className="pt-20">
    {/* Header */}
    <section className="py-16 md:py-24 bg-surface-dark carbon-texture">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="section-label mb-3">OUR ARSENAL</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
            SETUPS & SPECS
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every rig at Battletech is built for performance. Choose your weapon.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Rig Details */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 space-y-16">
        {rigs.map((rig, i) => (
          <motion.div
            key={rig.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img
                src={rig.image}
                alt={rig.name}
                className="w-full rounded-lg object-cover aspect-video"
                loading="lazy"
              />
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {rig.name}
                </h2>
                {rig.featured && (
                  <span className="bg-primary text-primary-foreground font-heading text-[10px] tracking-widest px-3 py-1 rounded-sm">
                    RECOMMENDED
                  </span>
                )}
              </div>
              <div className="glass-card overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(rig.specs).map(([key, val]) => (
                      <tr key={key} className="border-b border-border last:border-0">
                        <td className="px-4 py-3 font-heading text-sm tracking-wider text-primary w-1/3">
                          {key.toUpperCase()}
                        </td>
                        <td className="px-4 py-3 text-sm text-foreground">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link
                to="/contact"
                className="inline-block mt-6 font-heading text-sm tracking-widest bg-primary text-primary-foreground px-6 py-3 rounded-sm hover:bg-primary/90 transition-colors"
              >
                BOOK THIS SETUP
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Gaming PC showcase */}
    <section className="py-16 bg-surface-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="section-label mb-3">THE EXPERIENCE</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              MORE THAN JUST SPECS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenities.map((a) => (
                <div key={a.title} className="glass-card p-4 flex items-start gap-3">
                  <a.icon size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-heading text-xs tracking-wider text-foreground mb-1">{a.title}</p>
                    <p className="text-muted-foreground text-xs">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img src={gamingPcImg} alt="High-end gaming PC" className="w-full rounded-lg object-cover" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

export default SetupsPage;
