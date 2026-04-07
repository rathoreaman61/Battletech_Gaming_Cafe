import { motion } from "framer-motion";
import { IndianRupee, Monitor, Star, Zap } from "lucide-react";

const stats = [
  {
    icon: Monitor,
    value: "240Hz / 144Hz",
    label: "Monitors",
    accent: "Display",
  },
  {
    icon: Zap,
    value: "Up to 400 FPS",
    label: "Performance",
    accent: "Power",
  },
  {
    icon: Star,
    value: "4.9★ Google Maps",
    label: "Rated",
    accent: "Trust",
  },
  {
    icon: IndianRupee,
    value: "₹40–₹50",
    label: "Per Hour",
    accent: "Pricing",
  },
];

const StatsBar = () => (
  <section className="relative overflow-hidden border-y border-border bg-[linear-gradient(180deg,rgba(8,8,8,0.98),rgba(16,12,10,0.98))]">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-3 py-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="group relative"
          >
            <div
              className="relative overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 group-hover:border-primary/28 group-hover:shadow-[0_14px_34px_rgba(0,0,0,0.24)]"
              style={{
                clipPath:
                  "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
              }}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-70" />
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary/12 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,122,26,0.08),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/18 bg-primary/[0.08] text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/[0.14] group-hover:text-orange-300 sm:h-11 sm:w-11">
                  <stat.icon size={18} strokeWidth={2.1} />
                </div>

                <div className="min-w-0">
                  <p className="font-heading text-[0.54rem] uppercase tracking-[0.24em] text-white/35 sm:text-[0.58rem] sm:tracking-[0.34em]">
                    {stat.accent}
                  </p>
                  <h3 className="mt-1 font-heading text-sm font-bold tracking-[0.05em] text-foreground transition-colors duration-300 group-hover:text-white sm:text-base sm:tracking-[0.08em]">
                    {stat.value}
                  </h3>
                  <p className="mt-1 font-heading text-[0.62rem] uppercase tracking-[0.18em] text-white/55 transition-colors duration-300 group-hover:text-white/72 sm:text-[0.7rem] sm:tracking-[0.28em]">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
