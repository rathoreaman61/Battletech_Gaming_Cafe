import { motion } from "framer-motion";
import { Cpu, Shield, Snowflake } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";

const highlights = [
  {
    icon: Cpu,
    label: "Performance",
    value: "Esports-tuned rigs",
  },
  {
    icon: Shield,
    label: "Atmosphere",
    value: "Built by gamers",
  },
  {
    icon: Snowflake,
    label: "Comfort",
    value: "Full AC gaming floor",
  },
];

const AboutSection = () => (
  <section className="relative overflow-hidden py-20 md:py-28" id="about">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(255,122,26,0.12),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.04),transparent_26%)]" />

    <div className="container relative z-10 mx-auto px-4 md:px-8">
      <div className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="section-label mb-3">WHY BATTLETECH</p>
          <h2 className="font-heading text-3xl font-bold leading-[0.98] text-foreground md:text-5xl">
            THE CAFE FEEL OF A HANGOUT.
            <br />
            <span className="text-primary">THE ENERGY OF AN ARENA.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="max-w-xl text-sm leading-relaxed text-muted-foreground md:ml-auto md:text-base"
        >
          Battletech is designed for players who care about feel, speed, and vibe. Every section of the cafe is tuned to make casual sessions, ranked grinds, and squad nights feel premium without losing the local community warmth.
        </motion.p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative"
        >
          <div
            className="relative overflow-hidden border border-white/10 bg-card/55 shadow-[0_30px_80px_rgba(0,0,0,0.36)]"
            style={{
              clipPath:
                "polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
            }}
          >
            <img
              src={cafeInterior}
              alt="Battletech Gaming Cafe interior"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={1280}
              height={960}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.58))]" />
            <div className="scanline-overlay absolute inset-0 opacity-35" />

            <div className="absolute left-4 top-4 border border-primary/35 bg-black/55 px-3 py-2 backdrop-blur-md sm:left-5 sm:top-5 sm:px-4">
              <span className="font-heading text-[0.56rem] tracking-[0.24em] text-primary sm:text-[0.64rem] sm:tracking-[0.34em]">
                EST. 2000
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:bottom-5 sm:left-5 sm:right-5 sm:gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="border border-white/10 bg-black/48 px-3 py-3 backdrop-blur-md sm:px-4"
                >
                  <div className="flex items-center gap-2">
                    <item.icon size={15} className="text-primary" />
                    <p className="font-heading text-[0.54rem] uppercase tracking-[0.18em] text-white/45 sm:text-[0.58rem] sm:tracking-[0.28em]">
                      {item.label}
                    </p>
                  </div>
                  <p className="mt-2 font-heading text-xs tracking-[0.06em] text-white sm:text-sm sm:tracking-[0.08em]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="space-y-5"
        >
          {[
            "Walk into Battletech and you step into Jaipur's most serious gaming arena. Fully air-conditioned, equipped with high-performance PCs running top-tier CPUs and GPUs, and monitors that push up to 240Hz, every seat is built for victory.",
            "All trending games come pre-installed, from VALORANT and CS2 to GTA V and FIFA. No downloads, no waiting. Just sit, queue, and dominate.",
            "The owner is a gamer himself, and the vibe reflects that. This is not a generic cafe with gaming PCs dropped in. It is a dedicated space built around what players actually want.",
            "Since 2000, Battletech has stayed affordable, premium, and community-driven, making it one of Jaipur's strongest spots for solo sessions, squads, and competitive grind nights.",
          ].map((paragraph, index) => (
            <div
              key={index}
              className="relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-5 py-5 backdrop-blur-sm"
              style={{
                clipPath:
                  "polygon(0 14px, 14px 0, 100% 0, 100% 100%, calc(100% - 14px) 100%, 0 100%)",
              }}
            >
              <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.96rem]">
                {paragraph}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
