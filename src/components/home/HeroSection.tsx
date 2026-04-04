import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Battletech Gaming Cafe interior" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 scanline-overlay" />
    </div>

    {/* Badge removed as requested */}

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-heading font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-[0.9] text-foreground mb-6">
          BATTLETECH
          <br />
          <span className="text-primary">GAMING CAFE</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-heading text-base md:text-lg tracking-[0.2em] text-white mb-10 max-w-xl mx-auto"
      >
        JAIPUR'S PREMIER ESPORTS & GAMING HUB — VIDHYADHAR NAGAR
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/contact"
          className="font-heading text-sm tracking-widest bg-primary text-primary-foreground px-8 py-3.5 rounded-sm hover:bg-primary/90 active:scale-95 transition-all duration-200"
        >
          BOOK A SESSION
        </Link>
        <Link
          to="/setups"
          className="font-heading text-sm tracking-widest border border-foreground/30 text-foreground px-8 py-3.5 rounded-sm hover:border-primary hover:text-primary active:scale-95 transition-all duration-200"
        >
          EXPLORE SETUPS
        </Link>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-5 h-8 border border-muted-foreground/40 rounded-full flex justify-center pt-1.5">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1 h-1 rounded-full bg-primary"
        />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
