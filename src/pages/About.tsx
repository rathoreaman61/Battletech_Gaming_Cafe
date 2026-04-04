import { useEffect } from "react";
import { motion } from "framer-motion";
import { Target, IndianRupee, Users, Swords } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";
import gamingChair from "@/assets/gaming-chair.jpg";
import { updatePageSEO, pageSEOConfig } from "@/lib/seo";

const milestones = [
  { year: "2000", event: "Battletech Gaming Cafe founded in Vidhyadhar Nagar, Jaipur." },
  { year: "2010", event: "Upgraded to high-performance gaming rigs and expanded capacity." },
  { year: "2018", event: "Added 144Hz and 240Hz monitors for competitive play." },
  { year: "2023", event: "Became Jaipur's highest-rated gaming cafe on JustDial — 4.8★." },
  { year: "2025", event: "Continuing to serve gamers with the latest hardware and titles." },
];

const values = [
  { icon: Swords, title: "PERFORMANCE FIRST", desc: "Every rig is built for speed. No lag, no compromise." },
  { icon: IndianRupee, title: "BUDGET-FRIENDLY ALWAYS", desc: "Premium gaming at ₹40–₹50/hr. Gaming for everyone." },
  { icon: Users, title: "COMMUNITY OVER COMPETITION", desc: "A space built by gamers, for gamers. Everyone is welcome." },
  { icon: Target, title: "ALWAYS CURRENT", desc: "Latest games, latest hardware, latest experience." },
];

const AboutPage = () => {
  useEffect(() => {
    updatePageSEO({
      ...pageSEOConfig.about,
      canonicalUrl: "https://battletechgaming.com/about",
    });
  }, []);

  return (
  <div className="pt-20">
    {/* Header */}
    <section className="py-16 md:py-24 bg-surface-dark carbon-texture">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="section-label mb-3"
          >
            OUR STORY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
            className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            ABOUT BATTLETECH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55, ease: "easeOut" }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            25 years of powering Jaipur's gaming community.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={cafeInterior} alt="Battletech interior" className="w-full rounded-lg object-cover aspect-[4/3]" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              BUILT BY A GAMER. FOR GAMERS.
            </h2>
            <p>
              Battletech Gaming Cafe started in 2000 with a simple mission: give Jaipur's gamers a space where they can play on real hardware — not watered-down setups, but actual performance machines.
            </p>
            <p>
              The owner is a gamer himself, and every decision — from the choice of monitors to the games pre-installed — reflects that passion. This isn't a business run by outsiders. It's a community hub built from the inside out.
            </p>
            <p>
              Today, Battletech is Jaipur's highest-rated gaming cafe. With 240Hz monitors, top-tier CPUs and GPUs, full AC, and rates starting at just ₹40/hr, it's proof that premium gaming doesn't have to break the bank.
            </p>

            <div className="glass-card p-4 mt-6 border-l-2 border-primary">
              <p className="text-foreground italic text-sm">
                "I built Battletech because I wanted a place where I'd want to game. If it's good enough for me, it's good enough for every gamer in Jaipur."
              </p>
              <p className="font-heading text-xs tracking-wider text-primary mt-2">— OWNER, BATTLETECH GAMING CAFE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-16 md:py-24 bg-surface-dark">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">TIMELINE</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">OUR JOURNEY</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-0">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start pb-8 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
              </div>
              <div className="pb-4">
                <span className="font-heading text-lg font-bold text-primary">{m.year}</span>
                <p className="text-muted-foreground text-sm mt-1">{m.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">WHAT WE STAND FOR</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">OUR VALUES</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <v.icon size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading text-sm tracking-wider text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default AboutPage;
