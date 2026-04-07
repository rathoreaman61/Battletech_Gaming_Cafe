import { motion } from "framer-motion";
import { Coffee, Cpu, Monitor } from "lucide-react";
import keyboardImg from "@/assets/keyboard-closeup.webp";
import monitorImg from "@/assets/monitor-game.webp";
import snacksImg from "@/assets/snacks-gaming.webp";

const setups = [
  {
    icon: Monitor,
    title: "STANDARD RIG",
    image: keyboardImg,
    description:
      "144Hz monitor, high-performance CPU/GPU combo, mechanical keyboard, and precision mouse. Perfect for long sessions and ranked grind.",
    specs: ["144Hz Monitor", "High-Performance GPU", "Mechanical Keyboard", "Gaming Mouse"],
    mode: "Balanced loadout",
  },
  {
    icon: Cpu,
    title: "PRO RIG",
    image: monitorImg,
    description:
      "240Hz monitor, up to 400 FPS, top-tier peripherals, and low-latency response for players chasing sharper reaction time.",
    specs: ["240Hz Monitor", "Up to 400 FPS", "Premium Peripherals", "Low Latency Setup"],
    featured: true,
    mode: "Competitive loadout",
  },
  {
    icon: Coffee,
    title: "SNACKS + GAMING COMBO",
    image: snacksImg,
    description:
      "Pair your session with snacks and cold drinks. Clean fuel for squad nights, tournament watch parties, and marathon play.",
    specs: ["Snacks & Chips", "Cold Drinks", "Energy Drinks", "Affordable Add-on"],
    mode: "Session support",
  },
];

const SetupsSection = () => (
  <section className="relative overflow-hidden bg-surface-dark py-20 md:py-28" id="setups">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,122,26,0.1),transparent_28%)]" />

    <div className="container relative z-10 mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-3xl">
          <p className="section-label mb-3">OUR RIGS</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            PICK YOUR BATTLE STATION
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Whether you want a balanced setup, a full competitive edge, or a long session with squad fuel, the floor is organized like a proper loadout menu instead of generic cafe seating.
        </p>
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr_0.85fr]">
        {setups.map((setup, i) => (
          <motion.article
            key={setup.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`group relative overflow-hidden border ${
              setup.featured ? "border-primary/32 bg-card" : "border-white/10 bg-card/70"
            } shadow-[0_26px_65px_rgba(0,0,0,0.26)]`}
            style={{
              clipPath:
                setup.featured
                  ? "polygon(0 18px, 18px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)"
                  : "polygon(0 14px, 14px 0, 100% 0, 100% 100%, calc(100% - 14px) 100%, 0 100%)",
            }}
          >
            <div className="relative h-52 overflow-hidden sm:h-56">
              <img
                src={setup.image}
                alt={setup.title}
                width="800"
                height="600"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.75))]" />
              <div className="scanline-overlay absolute inset-0 opacity-30" />

              <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/12 bg-black/48 px-3 py-2 backdrop-blur-md sm:left-5 sm:top-5">
                <setup.icon size={15} className="text-primary" />
                <span className="font-heading text-[0.54rem] uppercase tracking-[0.18em] text-white/72 sm:text-[0.58rem] sm:tracking-[0.28em]">
                  {setup.mode}
                </span>
              </div>

              {setup.featured && (
                <div className="absolute right-4 top-4 border border-primary/35 bg-primary px-3 py-2 text-primary-foreground shadow-[0_12px_28px_rgba(255,107,0,0.24)] sm:right-5 sm:top-5 sm:px-4">
                  <span className="font-heading text-[0.54rem] tracking-[0.2em] sm:text-[0.58rem] sm:tracking-[0.3em]">
                    PRO PICK
                  </span>
                </div>
              )}

              <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                <h3 className="font-heading text-xl tracking-[0.08em] text-white sm:text-2xl sm:tracking-[0.12em]">
                  {setup.title}
                </h3>
              </div>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {setup.description}
              </p>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {setup.specs.map((spec) => (
                  <div
                    key={spec}
                    className="border border-white/10 bg-black/20 px-3 py-3 font-heading text-[0.62rem] uppercase tracking-[0.14em] text-white/76 sm:text-[0.68rem] sm:tracking-[0.18em]"
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default SetupsSection;
