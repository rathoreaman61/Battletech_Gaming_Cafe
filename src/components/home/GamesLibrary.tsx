import { motion } from "framer-motion";

const games = [
  "GTA V", "VALORANT", "CS2", "FIFA 24", "CALL OF DUTY", "PUBG",
  "FORTNITE", "MINECRAFT", "CYBERPUNK 2077", "APEX LEGENDS", "ELDEN RING",
  "GTA V", "VALORANT", "CS2", "FIFA 24", "CALL OF DUTY", "PUBG",
  "FORTNITE", "MINECRAFT", "CYBERPUNK 2077", "APEX LEGENDS", "ELDEN RING",
];

const GamesLibrary = () => (
  <section className="py-20 md:py-28 overflow-hidden" id="games">
    <div className="container mx-auto px-4 md:px-8 text-center mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label mb-3">GAMES LIBRARY</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
          YOUR FAVORITE GAMES. ALREADY INSTALLED.
        </h2>
      </motion.div>
    </div>

    {/* Marquee */}
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-marquee">
        {games.map((game, i) => (
          <span
            key={`${game}-${i}`}
            className="shrink-0 mx-2 font-heading text-sm tracking-widest border border-border text-muted-foreground px-5 py-2.5 rounded-sm hover:border-primary hover:text-primary transition-colors cursor-default"
          >
            {game}
          </span>
        ))}
      </div>
    </div>

    <div className="container mx-auto px-4 md:px-8 mt-10 text-center">
      <p className="text-muted-foreground text-sm">
        All trending titles pre-loaded. No waiting. Just play.
      </p>
    </div>
  </section>
);

export default GamesLibrary;
