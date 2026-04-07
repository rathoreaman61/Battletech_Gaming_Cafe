import { useEffect } from "react";
import { motion } from "framer-motion";
import { IndianRupee, ShieldCheck, Swords, Target, Users } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";
import gamingChair from "@/assets/gaming-chair.jpg";
import { buildBreadcrumbSchema, pageSEOConfig, updatePageSEO } from "@/lib/seo";

const milestones = [
  { year: "2000", event: "Battletech Gaming Cafe was founded in Vidhyadhar Nagar, Jaipur." },
  { year: "2010", event: "The floor expanded with stronger gaming rigs and a sharper local player base." },
  { year: "2018", event: "144Hz and 240Hz monitors were introduced for serious competitive sessions." },
  { year: "2023", event: "The cafe became one of Jaipur's best-rated gaming spaces, earning 4.9 on Google Maps." },
  { year: "2025", event: "Battletech continues upgrading hardware, atmosphere, and game-ready sessions for modern players." },
];

const values = [
  {
    icon: Swords,
    title: "PERFORMANCE FIRST",
    desc: "Every station is built for low friction, clean response, and a stronger in-game feel.",
  },
  {
    icon: IndianRupee,
    title: "PREMIUM WITHOUT EGO",
    desc: "High-end sessions stay accessible with pricing that works for regular players and squads.",
  },
  {
    icon: Users,
    title: "COMMUNITY OVER CLUTTER",
    desc: "The cafe is built for repeat players, team nights, and a culture that feels local and real.",
  },
  {
    icon: Target,
    title: "ALWAYS MOVING FORWARD",
    desc: "Games, rigs, peripherals, and presentation keep evolving instead of staying stuck in the past.",
  },
];

const aboutStats = [
  { label: "Years Active", value: "25+" },
  { label: "Rating", value: "4.9" },
  { label: "Display Modes", value: "144Hz / 240Hz" },
];

const AboutPage = () => {
  useEffect(() => {
    updatePageSEO({
      ...pageSEOConfig.about,
      canonicalUrl: "https://battletechgaming.com/about",
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Battletech Gaming Cafe",
          description: pageSEOConfig.about.description,
          url: "https://battletechgaming.com/about",
          mainEntity: {
            "@type": "Organization",
            name: "Battletech Gaming Cafe",
            foundingDate: "2000",
            sameAs: [
              "https://facebook.com/btgcvdn",
              "https://www.instagram.com/battletechgamingcafe/",
            ],
          },
        },
        buildBreadcrumbSchema([
          { name: "Home", url: "https://battletechgaming.com/" },
          { name: "About", url: "https://battletechgaming.com/about" },
        ]),
      ],
    });
  }, []);

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,rgba(8,8,8,0.98),rgba(13,10,8,0.98))]">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={cafeInterior}
            alt="Battletech cafe interior"
            className="h-full w-full object-cover opacity-20"
            loading="eager"
          />
          <div className="scanline-overlay absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,0,0.14),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.8))]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:px-8 md:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="section-label mb-4">OUR STORY</p>
              <h1 className="max-w-5xl font-heading text-[2.5rem] font-black leading-[0.92] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                BUILT BY A GAMER.
                <span className="mt-2 block text-primary">TUNED FOR JAIPUR.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/72 md:text-base">
                Battletech started with one simple belief: if a gaming cafe is going to exist, it
                should actually feel good to play in. That idea shaped the rigs, the seating, the
                game library, and the atmosphere from day one.
              </p>

              <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                {aboutStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: index === 0 ? -12 : index === 2 ? 12 : 0, y: 12 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.12 + index * 0.08, duration: 0.45 }}
                    className="border border-white/8 bg-white/[0.03] px-4 py-4 backdrop-blur-sm"
                    style={{
                      clipPath:
                        "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                    }}
                  >
                    <p className="font-heading text-[0.58rem] tracking-[0.3em] text-white/42">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-heading text-2xl tracking-[0.06em] text-primary">
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
              className="relative"
            >
              <div className="ui-panel-strong relative p-4">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <p className="font-heading text-[0.62rem] tracking-[0.34em] text-white/40">
                      ORIGIN FILE
                    </p>
                    <h2 className="mt-1 font-heading text-lg tracking-[0.14em] text-foreground">
                      BATTLETECH PROFILE
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 font-heading text-[0.65rem] tracking-[0.3em] text-primary">
                    <ShieldCheck size={14} />
                    VERIFIED
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={gamingChair}
                    alt="Battletech gaming chair and setup"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.45))]" />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="border border-white/8 bg-black/20 p-3">
                    <p className="font-heading text-[0.58rem] tracking-[0.3em] text-white/40">
                      FOUNDED
                    </p>
                    <p className="mt-2 font-heading text-xl text-primary">2000</p>
                  </div>
                  <div className="border border-white/8 bg-black/20 p-3">
                    <p className="font-heading text-[0.58rem] tracking-[0.3em] text-white/40">
                      COMMUNITY
                    </p>
                    <p className="mt-2 font-heading text-xl text-primary">PLAYER-LED</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <div
                className="ui-panel relative"
              >
                <img
                  src={cafeInterior}
                  alt="Battletech interior wide shot"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.58))]" />
                <div className="scanline-overlay absolute inset-0 opacity-30" />
                <div className="absolute bottom-5 left-5 border border-primary/35 bg-black/52 px-4 py-2 backdrop-blur-md">
                  <span className="font-heading text-[0.6rem] tracking-[0.32em] text-primary">
                    JAIPUR GAMING HUB
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="space-y-5"
            >
              <div>
                <p className="section-label mb-3">BUILT DIFFERENT</p>
                <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
                  A SPACE MADE FROM ACTUAL PLAYER EXPECTATIONS
                </h2>
              </div>

              {[
                "Battletech Gaming Cafe started with a simple mission: give Jaipur's gamers a space where they can play on real hardware, not watered-down systems that look good only in photos.",
                "The owner is a gamer himself, and every decision, from monitor choices to the games pre-installed, reflects that. This is not a business run from the outside. It is a space shaped from inside the community.",
                "Today, Battletech stands out with high-refresh displays, strong CPUs and GPUs, full AC comfort, and pricing that keeps premium gaming accessible instead of exclusive.",
              ].map((paragraph, index) => (
                <div
                  key={index}
                  className="ui-panel px-5 py-5"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {paragraph}
                  </p>
                </div>
              ))}

              <div className="border border-primary/18 bg-primary/[0.06] px-5 py-5">
                <p className="text-sm italic leading-relaxed text-foreground md:text-base">
                  "I built Battletech because I wanted a place where I'd want to game. If it's
                  good enough for me, it's good enough for every gamer in Jaipur."
                </p>
                <p className="mt-3 font-heading text-[0.64rem] tracking-[0.3em] text-primary">
                  OWNER, BATTLETECH GAMING CAFE
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-dark py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,122,26,0.09),transparent_28%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
          >
            <div>
              <p className="section-label mb-3">TIMELINE</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
                HOW THE ARENA EVOLVED
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:ml-auto md:text-base">
              Battletech did not appear fully formed. It grew with the local player base, stronger hardware, and a clearer idea of what a real gaming cafe should feel like.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="ui-panel relative p-5"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
                <p className="font-heading text-2xl font-bold tracking-[0.08em] text-primary">
                  {milestone.year}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {milestone.event}
                </p>
              </motion.div>
            ))}
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
            <p className="section-label mb-3">WHAT WE STAND FOR</p>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
              THE PRINCIPLES BEHIND THE FLOOR
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="ui-panel group p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/[0.08] text-primary transition-all duration-300 group-hover:border-primary/35 group-hover:bg-primary/[0.12]">
                  <value.icon size={22} />
                </div>
                <h3 className="mt-5 font-heading text-sm tracking-[0.22em] text-foreground">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
