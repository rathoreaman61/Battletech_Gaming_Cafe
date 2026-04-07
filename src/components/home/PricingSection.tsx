import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "DROP-IN",
    price: "₹40–₹50",
    unit: "/hr",
    description: "Standard access to high-performance rigs. Walk in anytime.",
    features: ["Standard or Pro rig access", "All games pre-installed", "AC environment", "Snacks available"],
    note: "Flexible session",
  },
  {
    name: "SQUAD SESSION",
    price: "GROUP RATE",
    unit: "",
    description: "Book 3+ seats together. Group discount for squad gaming.",
    features: ["3+ seats together", "Group discount applied", "Priority seating", "All games included"],
    featured: true,
    note: "Best for teams",
  },
  {
    name: "TOURNAMENT SLOT",
    price: "CALL",
    unit: "",
    description: "Competitive event booking for tournaments and scrims.",
    features: ["Full cafe booking", "Tournament setup", "Custom configurations", "Event support"],
    note: "Custom event mode",
  },
];

const PricingSection = () => (
  <section className="relative overflow-hidden bg-surface-dark py-20 md:py-28" id="pricing">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,122,26,0.09),transparent_26%)]" />

    <div className="container relative z-10 mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
      >
        <div>
          <p className="section-label mb-3">PRICING</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            PICK YOUR SESSION TYPE
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:ml-auto md:text-base">
          Clear pricing, easy entry, and better value for squads. The section now reads like a proper tactical choice screen instead of a generic pricing table.
        </p>
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-3">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`relative overflow-hidden border ${
              tier.featured ? "border-primary/35 bg-card shadow-[0_34px_80px_rgba(255,107,0,0.12)]" : "border-white/10 bg-card/75"
            } flex h-full`}
            style={{
              clipPath:
                tier.featured
                  ? "polygon(0 16px, 16px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)"
                  : "polygon(0 14px, 14px 0, 100% 0, 100% 100%, calc(100% - 14px) 100%, 0 100%)",
            }}
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
            {tier.featured && (
              <div className="absolute right-5 top-5 border border-primary/40 bg-primary px-4 py-1.5 text-primary-foreground shadow-[0_14px_30px_rgba(255,107,0,0.22)]">
                <span className="font-heading text-[0.58rem] tracking-[0.28em]">MOST POPULAR</span>
              </div>
            )}

              <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
              <p className="font-heading text-[0.58rem] uppercase tracking-[0.22em] text-white/40 sm:text-[0.64rem] sm:tracking-[0.34em]">
                {tier.note}
              </p>
              <h3 className="mt-3 font-heading text-xl tracking-[0.08em] text-foreground sm:text-2xl sm:tracking-[0.12em]">
                {tier.name}
              </h3>

              <div className="mt-6 flex flex-wrap items-end gap-2 border-b border-white/8 pb-6">
                <span className="font-heading text-3xl font-bold tracking-[0.03em] text-primary sm:text-4xl sm:tracking-[0.05em]">
                  {tier.price}
                </span>
                {tier.unit && <span className="pb-1 text-sm text-muted-foreground">{tier.unit}</span>}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {tier.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 border-b border-white/6 pb-3 text-sm text-foreground/92 last:border-b-0 last:pb-0">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.08]">
                      <Check size={13} className="text-primary" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`group relative mt-8 flex min-h-12 items-center justify-center overflow-hidden px-5 py-3 text-center font-heading text-sm tracking-[0.16em] transition-all duration-300 active:scale-95 sm:tracking-[0.24em] ${
                  tier.featured
                    ? "border border-primary/40 bg-primary text-primary-foreground hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_18px_40px_rgba(255,107,0,0.26)]"
                    : "no-global-button-effects border border-white/24 bg-black/18 text-white hover:-translate-y-1 hover:border-primary/75 hover:text-white hover:shadow-[0_16px_34px_rgba(255,107,0,0.16)]"
                }`}
                style={{
                  clipPath: tier.featured
                    ? "polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)"
                    : "polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                <span
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    tier.featured
                      ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_40%)]"
                      : "bg-[linear-gradient(135deg,rgba(255,122,26,0.14),transparent_48%,rgba(255,255,255,0.03))]"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px opacity-70 ${
                    tier.featured
                      ? "bg-gradient-to-r from-transparent via-white/70 to-transparent"
                      : "bg-gradient-to-r from-transparent via-primary/45 to-transparent"
                  }`}
                />
                {tier.featured ? (
                  <span className="pointer-events-none absolute -left-8 top-0 h-full w-8 skew-x-[-20deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[calc(100%+1rem)] group-hover:opacity-100" />
                ) : (
                  <>
                    <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px origin-center scale-x-[0.2] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute left-3 top-3 h-2.5 w-2.5 border-l border-t border-primary/20 opacity-40 transition-all duration-300 group-hover:border-primary/80 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-primary/20 opacity-40 transition-all duration-300 group-hover:border-primary/80 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute -left-10 top-0 h-full w-8 skew-x-[-20deg] bg-white/10 opacity-0 transition-all duration-500 group-hover:left-[calc(100%+1rem)] group-hover:opacity-100" />
                  </>
                )}
                <span className="relative z-10">
                  {tier.name === "TOURNAMENT SLOT" ? "INQUIRE NOW" : "BOOK NOW"}
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
