import { motion } from "framer-motion";
import cafeInterior from "@/assets/cafe-interior.jpg";

const AboutSection = () => (
  <section className="py-20 md:py-28 carbon-texture" id="about">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={cafeInterior}
            alt="Battletech Gaming Cafe interior"
            className="w-full rounded-lg object-cover aspect-[4/3]"
            loading="lazy"
            width={1280}
            height={960}
          />
          <div className="absolute bottom-4 left-4 glass-card px-4 py-2">
            <span className="font-heading text-xs tracking-[0.3em] text-primary">EST. 2000</span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="section-label mb-3">WHY BATTLETECH</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            NOT JUST A CAFE.
            <br />
            <span className="text-primary">A BATTLEGROUND.</span>
          </h2>

          <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Walk into Battletech and you step into Jaipur's most serious gaming arena. Fully air-conditioned, equipped with high-performance PCs running top-tier CPUs and GPUs, and monitors that push up to 240Hz — every seat is built for victory.
            </p>
            <p>
              All trending games come pre-installed — from VALORANT and CS2 to GTA V and FIFA. No downloads, no waiting. Just sit, play, and dominate.
            </p>
            <p>
              The owner is a gamer himself, and the vibe reflects that: a space built by gamers, for gamers. Snacks, cold drinks, and energy fuel are always on hand.
            </p>
            <p>
              Since 2000, Battletech has been Jaipur's go-to gaming destination — affordable, premium, and community-driven.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
