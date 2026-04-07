import { motion } from "framer-motion";

const games = [
  "GTA V",
  "VALORANT",
  "CS2",
  "FIFA 24",
  "CALL OF DUTY",
  "PUBG",
  "FORTNITE",
  "MINECRAFT",
  "CYBERPUNK 2077",
  "APEX LEGENDS",
  "ELDEN RING",
];

const GamesLibrary = () => (
  <section className="relative overflow-hidden py-20 md:py-28" id="games">
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,122,26,0.04),transparent)]" />

    <div className="container relative z-10 mx-auto mb-12 px-4 text-center md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label mb-3">GAMES LIBRARY</p>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
          LOCK IN. QUEUE FAST. PLAY IMMEDIATELY.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          The floor is ready for ranked, casual, story mode, and squad nights. The biggest titles are already installed, so the time you spend at Battletech goes into play, not setup.
        </p>
      </motion.div>
    </div>

    <div className="relative">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <div className="mb-4 flex animate-marquee gap-3">
        {[...games, ...games].map((game, i) => (
          <span
            key={`${game}-top-${i}`}
            className="shrink-0 border border-white/10 bg-card/70 px-4 py-3 font-heading text-[0.64rem] uppercase tracking-[0.16em] text-white/74 backdrop-blur-sm transition-colors hover:border-primary/55 hover:text-primary sm:px-5 sm:text-[0.72rem] sm:tracking-[0.24em]"
          >
            {game}
          </span>
        ))}
      </div>

      <div className="flex animate-marquee [animation-direction:reverse] [animation-duration:28s] gap-3">
        {[...games.slice(3), ...games.slice(0, 3), ...games].map((game, i) => (
          <span
            key={`${game}-bottom-${i}`}
            className="shrink-0 border border-primary/18 bg-[linear-gradient(180deg,rgba(255,122,26,0.08),rgba(255,122,26,0.02))] px-4 py-3 font-heading text-[0.64rem] uppercase tracking-[0.16em] text-primary/90 transition-colors hover:border-primary/60 hover:text-white sm:px-5 sm:text-[0.72rem] sm:tracking-[0.24em]"
          >
            {game}
          </span>
        ))}
      </div>
    </div>

    <div className="container relative z-10 mx-auto mt-10 px-4 text-center md:px-8">
      <p className="text-sm text-muted-foreground">
        Trending titles pre-loaded and updated for instant sessions.
      </p>
    </div>
  </section>
);

export default GamesLibrary;
