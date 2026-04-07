import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
    {/* Background */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.img
        src="/hero-bg.webp"
        alt="Battletech Gaming Cafe interior"
        className="w-full h-full object-cover"
        width="1920"
        height="1080"
        fetchPriority="high"
        loading="eager"
        initial={{ scale: 1, y: 0 }}
        animate={{ y: [0, -12, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="scanline-overlay absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
    </div>

    {/* Subtle HUD Elements */}
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 0.95, x: 0 }}
      transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
      className="absolute bottom-6 left-4 z-20 max-w-[calc(100%-2rem)] overflow-hidden border-l-4 border-primary py-2 pl-3 sm:bottom-12 sm:left-4 sm:pl-4 md:left-12"
      style={{ willChange: "transform" }}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/0 via-primary/45 to-primary/0" />
      <motion.span
        animate={{ x: [0, 3, 0], opacity: [0.72, 1, 0.72] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="text-[0.52rem] font-bold uppercase tracking-[0.22em] text-white/80 sm:text-[0.6rem] sm:tracking-[0.3em]"
      >
        SYSTEM: STABLE
      </motion.span>
      <div className="flex items-center gap-2">
        <motion.span
          animate={{ scale: [1, 1.45, 1], opacity: [0.55, 1, 0.55], boxShadow: [
            "0 0 8px rgba(255,107,0,0.35)",
            "0 0 18px rgba(255,107,0,0.85)",
            "0 0 8px rgba(255,107,0,0.35)",
          ] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,107,0,0.6)]"
        />
        <motion.span
          animate={{ opacity: [0.66, 1, 0.66], x: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[0.56rem] font-normal uppercase tracking-[0.14em] text-white sm:text-[0.65rem] sm:tracking-[0.2em]"
        >
          NOW OPEN • 9 AM – 9 PM
        </motion.span>
      </div>
      <motion.span
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="text-[0.52rem] font-medium uppercase tracking-[0.08em] text-white/60 sm:text-[0.55rem] sm:tracking-[0.1em]"
      >
        VIDHYADHAR NAGAR, JAIPUR
      </motion.span>
    </motion.div>

    <div className="relative z-10 container mx-auto px-4 text-center md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55, ease: "easeOut" }}
          className="mb-4 font-heading text-[0.62rem] uppercase tracking-[0.24em] text-white/50 sm:text-[0.72rem] sm:tracking-[0.46em] md:text-[0.78rem]"
          style={{ willChange: "transform" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.span
            animate={{ letterSpacing: ["0.24em", "0.28em", "0.24em"], opacity: [0.45, 0.75, 0.45] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            JAIPUR'S NEXT-LEVEL ESPORTS DESTINATION
          </motion.span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6 font-heading leading-[0.86] text-foreground sm:leading-[0.82]"
        >
          <motion.span
            initial={{ opacity: 0, x: -28 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -3, 0],
              textShadow: [
                "0 10px 28px rgba(0,0,0,0.44)",
                "0 10px 36px rgba(255,255,255,0.08)",
                "0 10px 28px rgba(0,0,0,0.44)",
              ],
            }}
            transition={{
              opacity: { duration: 0.55, ease: "easeOut" },
              x: { duration: 0.55, ease: "easeOut" },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
              textShadow: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
            }}
            className="block text-[2.5rem] font-black tracking-[0.04em] text-[#f3eee8] drop-shadow-[0_10px_28px_rgba(0,0,0,0.44)] sm:text-[4rem] sm:tracking-[0.08em] md:text-[6.2rem] md:tracking-[0.1em] lg:text-[7.2rem] xl:text-[7.9rem]"
          >
            BATTLETECH
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 28 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 3, 0],
              textShadow: [
                "0 10px 26px rgba(255,107,0,0.14)",
                "0 10px 42px rgba(255,107,0,0.34)",
                "0 10px 26px rgba(255,107,0,0.14)",
              ],
            }}
            transition={{
              opacity: { delay: 0.1, duration: 0.58, ease: "easeOut" },
              x: { delay: 0.1, duration: 0.58, ease: "easeOut" },
              y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
              textShadow: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
            }}
            className="mt-1 block text-[2.1rem] font-black tracking-[0.04em] text-primary drop-shadow-[0_10px_26px_rgba(255,107,0,0.18)] sm:mt-0.5 sm:text-[3.35rem] sm:tracking-[0.06em] md:text-[5.5rem] md:tracking-[0.08em] lg:text-[6.5rem] xl:text-[7rem]"
          >
            GAMING CAFE
          </motion.span>
        </motion.h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.6, ease: "easeOut" }}
        className="mx-auto mb-8 max-w-3xl font-heading text-[0.68rem] uppercase tracking-[0.18em] text-white/76 sm:mb-10 sm:text-[0.82rem] sm:tracking-[0.28em] md:text-[0.98rem] md:tracking-[0.34em]"
      >
        <motion.span
          animate={{ opacity: [0.68, 1, 0.68], y: [0, 2, 0], letterSpacing: ["0.18em", "0.22em", "0.18em"] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block"
        >
          JAIPUR'S PREMIER ESPORTS &amp; GAMING HUB - VIDHYADHAR NAGAR
        </motion.span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col justify-center gap-4 sm:flex-row"
      >
        <Link
          to="/contact"
          className="group relative min-h-[48px] w-full overflow-hidden border border-primary/40 bg-primary px-6 py-4 text-center font-heading text-sm font-bold tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_16px_36px_rgba(255,107,0,0.28)] active:scale-95 sm:w-auto sm:px-8 sm:tracking-[0.24em]"
        >
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70" />
          <span className="pointer-events-none absolute -left-8 top-0 h-full w-8 skew-x-[-20deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[calc(100%+1rem)] group-hover:opacity-100" />
          <span className="relative z-10">BOOK A SESSION</span>
        </Link>
        <Link
          to="/setups"
          className="no-global-button-effects group relative min-h-[48px] w-full overflow-hidden border border-white/24 bg-black/18 px-6 py-4 text-center font-heading text-sm tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/75 hover:text-white hover:shadow-[0_16px_34px_rgba(255,107,0,0.16)] active:scale-95 sm:w-auto sm:px-8 sm:tracking-[0.24em]"
        >
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,122,26,0.14),transparent_48%,rgba(255,255,255,0.03))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px origin-center scale-x-[0.2] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
          <span className="pointer-events-none absolute left-3 top-3 h-2.5 w-2.5 border-l border-t border-primary/20 opacity-40 transition-all duration-300 group-hover:border-primary/80 group-hover:opacity-100" />
          <span className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-primary/20 opacity-40 transition-all duration-300 group-hover:border-primary/80 group-hover:opacity-100" />
          <span className="pointer-events-none absolute -left-10 top-0 h-full w-8 skew-x-[-20deg] bg-white/10 opacity-0 transition-all duration-500 group-hover:left-[calc(100%+1rem)] group-hover:opacity-100" />
          <span className="relative z-10">EXPLORE SETUPS</span>
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
      <div className="flex flex-col items-center gap-3">
        <span className="font-heading text-[0.55rem] uppercase tracking-[0.34em] text-white/45">
          Scroll
        </span>
        <div
          className="relative h-12 w-12 border border-white/10 bg-black/22 backdrop-blur-sm"
          style={{
            clipPath:
              "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
          }}
        >
          <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent" />
          <span className="pointer-events-none absolute left-1/2 top-2 h-5 w-px -translate-x-1/2 bg-gradient-to-b from-white/15 via-primary/70 to-transparent" />
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [0.55, 1, 0.55] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 top-3 h-2 w-2 -translate-x-1/2 rotate-45 border-r-2 border-b-2 border-primary"
          />
        </div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
