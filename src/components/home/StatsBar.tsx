import { motion } from "framer-motion";
import { Monitor, Zap, Star, IndianRupee } from "lucide-react";

const stats = [
  { icon: Monitor, label: "240Hz & 144Hz Monitors" },
  { icon: Zap, label: "Up to 400 FPS Performance" },
  { icon: Star, label: "4.8★ Rated on JustDial" },
  { icon: IndianRupee, label: "₹40–₹50 Per Hour" },
];

const StatsBar = () => (
  <section className="bg-surface-dark border-y border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`flex items-center gap-3 py-6 px-4 justify-center ${
              i < stats.length - 1 ? "md:border-r md:border-border" : ""
            }`}
          >
            <stat.icon size={20} className="text-primary shrink-0" />
            <span className="font-heading text-xs md:text-sm tracking-wider text-foreground">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
