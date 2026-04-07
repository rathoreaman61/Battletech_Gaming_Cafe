import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Armchair,
  Cpu,
  Gamepad2,
  Monitor,
  ShieldCheck,
  Sparkles,
  Wifi,
  Wind,
} from "lucide-react";
import { Link } from "react-router-dom";
import gamingPcImg from "@/assets/gaming-pc.jpg";
import keyboardImg from "@/assets/keyboard-closeup.jpg";
import monitorImg from "@/assets/monitor-game.jpg";
import setupRowImg from "@/assets/setup-row.jpg";
import { buildBreadcrumbSchema, pageSEOConfig, updatePageSEO } from "@/lib/seo";

const rigs = [
  {
    name: "STANDARD RIG",
    image: keyboardImg,
    tag: "Ranked Ready",
    summary:
      "Built for smooth everyday sessions, late-night grind queues, and reliable competitive play.",
    specs: [
      { label: "CPU", value: "High-Performance Processor" },
      { label: "GPU", value: "Dedicated Gaming GPU" },
      { label: "RAM", value: "16 GB DDR4" },
      { label: "MONITOR", value: "144Hz Full HD" },
      { label: "PERIPHERALS", value: "Mechanical Keyboard + Gaming Mouse" },
      { label: "INTERNET", value: "High-Speed Broadband" },
    ],
  },
  {
    name: "PRO RIG",
    image: monitorImg,
    tag: "Competitive Mode",
    featured: true,
    summary:
      "For players who want the sharpest response, the smoothest frames, and the strongest edge in high-pressure matches.",
    specs: [
      { label: "CPU", value: "Top-Tier Gaming Processor" },
      { label: "GPU", value: "Flagship GPU - Up to 400 FPS" },
      { label: "RAM", value: "16-32 GB DDR4 / DDR5" },
      { label: "MONITOR", value: "240Hz Full HD / QHD" },
      { label: "PERIPHERALS", value: "Premium Mechanical Keyboard + Precision Mouse" },
      { label: "INTERNET", value: "High-Speed Low-Latency" },
    ],
  },
];

const amenities = [
  {
    icon: Wind,
    title: "FULLY AIR-CONDITIONED",
    desc: "A cool, focused environment that stays comfortable through long sessions and tournament nights.",
  },
  {
    icon: Wifi,
    title: "LOW-LATENCY INTERNET",
    desc: "Fast, stable connectivity tuned for online matches, downloads, voice chat, and scrims.",
  },
  {
    icon: Armchair,
    title: "ERGONOMIC SEATING",
    desc: "Supportive gaming chairs made for stamina, posture, and comfortable extended play.",
  },
  {
    icon: Gamepad2,
    title: "READY-TO-PLAY LIBRARY",
    desc: "Popular titles are installed and ready so you spend your time gaming, not waiting.",
  },
];

const setupHighlights = [
  "144Hz / 240Hz display options",
  "Up to 400 FPS performance",
  "Mechanical keyboard and precision mouse",
  "Competitive-ready seating and cooling",
];

const SetupsPage = () => {
  useEffect(() => {
    updatePageSEO({
      ...pageSEOConfig.setups,
      canonicalUrl: "https://battletechgaming.com/setups",
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Battletech Gaming Cafe Setups",
          description: pageSEOConfig.setups.description,
          url: "https://battletechgaming.com/setups",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: rigs.map((rig, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                name: rig.name,
                description: rig.summary,
              },
            })),
          },
        },
        buildBreadcrumbSchema([
          { name: "Home", url: "https://battletechgaming.com/" },
          { name: "Setups", url: "https://battletechgaming.com/setups" },
        ]),
      ],
    });
  }, []);

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,rgba(8,8,8,0.96),rgba(12,10,9,0.98))]">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={setupRowImg}
            alt="Battletech gaming setup row"
            className="h-full w-full object-cover opacity-20"
            loading="eager"
          />
          <div className="scanline-overlay absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,0,0.14),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.8))]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="section-label mb-4">SETUP BAY</p>
              <h1 className="max-w-4xl font-heading text-[2.5rem] font-black leading-[0.92] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                BATTLE-READY
                <span className="mt-2 block text-primary">RIGS & SPECS</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                Every station at Battletech is designed for faster response, cleaner visuals, and
                a smoother competitive experience. Walk in, lock in, and play on hardware that
                actually keeps up.
              </p>

              <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
                {setupHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.08, duration: 0.45 }}
                    className="flex items-center gap-3 border border-white/8 bg-white/[0.03] px-4 py-3 backdrop-blur-sm"
                    style={{
                      clipPath:
                        "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                    }}
                  >
                    <ShieldCheck size={16} className="shrink-0 text-primary" />
                    <span className="font-heading text-[0.72rem] tracking-[0.14em] text-white/82 sm:text-xs sm:tracking-[0.22em]">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="group relative w-full overflow-hidden border border-primary/40 bg-primary px-8 py-4 text-center font-heading text-sm font-bold tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_16px_36px_rgba(255,107,0,0.28)] active:scale-95 sm:w-auto sm:tracking-[0.24em]"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70" />
                  <span className="pointer-events-none absolute -left-8 top-0 h-full w-8 skew-x-[-20deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[calc(100%+1rem)] group-hover:opacity-100" />
                  <span className="relative z-10">BOOK YOUR RIG</span>
                </Link>
                <Link
                  to="/contact"
                  className="no-global-button-effects group relative w-full overflow-hidden border border-white/24 bg-black/18 px-8 py-4 text-center font-heading text-sm tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/75 hover:text-white hover:shadow-[0_16px_34px_rgba(255,107,0,0.16)] active:scale-95 sm:w-auto sm:tracking-[0.24em]"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,122,26,0.14),transparent_48%,rgba(255,255,255,0.03))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px origin-center scale-x-[0.2] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute left-3 top-3 h-2.5 w-2.5 border-l border-t border-primary/20 opacity-40 transition-all duration-300 group-hover:border-primary/80 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-primary/20 opacity-40 transition-all duration-300 group-hover:border-primary/80 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute -left-10 top-0 h-full w-8 skew-x-[-20deg] bg-white/10 opacity-0 transition-all duration-500 group-hover:left-[calc(100%+1rem)] group-hover:opacity-100" />
                  <span className="relative z-10">ASK FOR RECOMMENDATION</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
              className="relative"
            >
              <div
                className="relative overflow-hidden border border-primary/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.32)]"
                style={{
                  clipPath:
                    "polygon(22px 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%, 0 22px)",
                }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <p className="font-heading text-[0.62rem] tracking-[0.34em] text-white/40">
                      LIVE BAY
                    </p>
                    <h2 className="mt-1 font-heading text-lg tracking-[0.14em] text-foreground">
                      PRO FLOOR PREVIEW
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 font-heading text-[0.65rem] tracking-[0.3em] text-primary">
                    <Sparkles size={14} />
                    ONLINE
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={gamingPcImg}
                    alt="Battletech gaming hardware"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.42))]" />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="border border-white/8 bg-black/20 p-3">
                    <p className="font-heading text-[0.58rem] tracking-[0.3em] text-white/40">
                      REFRESH
                    </p>
                    <p className="mt-2 font-heading text-xl text-primary">240Hz</p>
                  </div>
                  <div className="border border-white/8 bg-black/20 p-3">
                    <p className="font-heading text-[0.58rem] tracking-[0.3em] text-white/40">
                      TARGET FPS
                    </p>
                    <p className="mt-2 font-heading text-xl text-primary">400+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="section-label mb-3">RIG BREAKDOWN</p>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
              CHOOSE YOUR LOADOUT
            </h2>
          </motion.div>

          <div className="space-y-10">
            {rigs.map((rig, index) => (
              <motion.div
                key={rig.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div
                  className={`relative overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4 shadow-[0_14px_32px_rgba(0,0,0,0.24)] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                  style={{
                    clipPath:
                      "polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)",
                  }}
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <img
                    src={rig.image}
                    alt={rig.name}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div
                  className={`flex flex-col justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-2xl font-black tracking-[0.12em] text-foreground md:text-3xl">
                      {rig.name}
                    </h3>
                    <span className="border border-primary/25 bg-primary/[0.08] px-3 py-1 font-heading text-[0.62rem] tracking-[0.28em] text-primary">
                      {rig.tag}
                    </span>
                    {rig.featured && (
                      <span className="border border-white/10 bg-white/[0.04] px-3 py-1 font-heading text-[0.62rem] tracking-[0.28em] text-white/75">
                        TOP PICK
                      </span>
                    )}
                  </div>

                  <p className="mb-6 max-w-xl text-sm leading-7 text-white/68 md:text-base">
                    {rig.summary}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {rig.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="border border-white/8 bg-white/[0.03] px-4 py-3"
                        style={{
                          clipPath:
                            "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                        }}
                      >
                        <p className="font-heading text-[0.58rem] tracking-[0.34em] text-white/38">
                          {spec.label}
                        </p>
                        <p className="mt-2 text-sm text-foreground">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7">
                    <Link
                      to="/contact"
                      className="group relative inline-flex overflow-hidden border border-primary/40 bg-primary px-7 py-3 font-heading text-sm font-bold tracking-[0.24em] text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_16px_36px_rgba(255,107,0,0.28)] active:scale-95"
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70" />
                      <span className="pointer-events-none absolute -left-8 top-0 h-full w-8 skew-x-[-20deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[calc(100%+1rem)] group-hover:opacity-100" />
                      <span className="relative z-10">BOOK THIS SETUP</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-dark py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="section-label mb-3">ENVIRONMENT</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
                THE FULL SETUP EXPERIENCE
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/66 md:text-base">
                Good gaming is not just FPS. It is cooling, seating, latency, installed games, and
                a space that keeps the squad focused from warm-up to final round.
              </p>

              <div className="mt-7 space-y-3">
                {amenities.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07, duration: 0.45 }}
                    className="flex items-start gap-4 border border-white/8 bg-white/[0.03] px-4 py-4"
                    style={{
                      clipPath:
                        "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                    }}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-primary/18 bg-primary/[0.08] text-primary">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="font-heading text-[0.7rem] tracking-[0.28em] text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/62">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <div
                className="overflow-hidden border border-white/8 bg-white/[0.03] p-3 sm:col-span-2"
                style={{
                  clipPath:
                    "polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)",
                }}
              >
                <img
                  src={setupRowImg}
                  alt="Row of Battletech setups"
                  className="aspect-[16/8] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="border border-white/8 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <Monitor size={18} className="text-primary" />
                  <p className="font-heading text-[0.7rem] tracking-[0.28em] text-foreground">
                    DISPLAY EDGE
                  </p>
                </div>
                <p className="mt-4 font-heading text-2xl text-primary">144Hz / 240Hz</p>
                <p className="mt-2 text-sm text-white/62">Sharper motion. Faster tracking. Cleaner visual response.</p>
              </div>
              <div className="border border-white/8 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <Cpu size={18} className="text-primary" />
                  <p className="font-heading text-[0.7rem] tracking-[0.28em] text-foreground">
                    PERFORMANCE
                  </p>
                </div>
                <p className="mt-4 font-heading text-2xl text-primary">UP TO 400 FPS</p>
                <p className="mt-2 text-sm text-white/62">Competitive-level output for esports and fast-paced titles.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SetupsPage;
