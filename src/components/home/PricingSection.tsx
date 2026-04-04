import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "DROP-IN",
    price: "₹40–₹50",
    unit: "/hr",
    description: "Standard access to high-performance rigs. Walk in anytime.",
    features: ["Standard or Pro rig access", "All games pre-installed", "AC environment", "Snacks available"],
  },
  {
    name: "SQUAD SESSION",
    price: "GROUP RATE",
    unit: "",
    description: "Book 3+ seats together. Group discount for squad gaming.",
    features: ["3+ seats together", "Group discount applied", "Priority seating", "All games included"],
    featured: true,
  },
  {
    name: "TOURNAMENT SLOT",
    price: "CALL",
    unit: "",
    description: "Competitive event booking for tournaments and scrims.",
    features: ["Full cafe booking", "Tournament setup", "Custom configurations", "Event support"],
  },
];

const PricingSection = () => (
  <section className="py-20 md:py-28 bg-surface-dark" id="pricing">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="section-label mb-3">PRICING</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
          PICK YOUR PLAN
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`glass-card p-6 relative ${
              tier.featured ? "ring-1 ring-primary/40" : ""
            }`}
          >
            {tier.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-heading text-[10px] tracking-widest px-4 py-1 rounded-sm">
                MOST POPULAR
              </div>
            )}
            <h3 className="font-heading text-lg tracking-wider text-foreground mb-2">
              {tier.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-heading text-3xl font-bold text-primary">{tier.price}</span>
              {tier.unit && <span className="text-muted-foreground text-sm">{tier.unit}</span>}
            </div>
            <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
            <ul className="space-y-2 mb-6">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check size={14} className="text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`block text-center font-heading text-sm tracking-widest py-2.5 rounded-sm transition-colors ${
                tier.featured
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-border text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {tier.name === "TOURNAMENT SLOT" ? "INQUIRE NOW" : "BOOK NOW"}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
