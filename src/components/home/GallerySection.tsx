import { motion } from "framer-motion";
import img2 from "@/assets/cafe-interior.jpg";
import img8 from "@/assets/ceiling-lights.jpg";
import img1 from "@/assets/hero-bg.jpg";
import img3 from "@/assets/keyboard-closeup.jpg";
import img4 from "@/assets/monitor-game.jpg";
import img6 from "@/assets/peripherals.jpg";
import img5 from "@/assets/gaming-pc.jpg";
import img7 from "@/assets/setup-row.jpg";

const images = [
  { src: img1, alt: "Gaming cafe setup overview", label: "Main floor" },
  { src: img2, alt: "Cafe interior wide shot", label: "Interior" },
  { src: img3, alt: "Mechanical keyboard close-up", label: "Controls" },
  { src: img4, alt: "Gaming monitor in action", label: "Display" },
  { src: img5, alt: "High-end gaming PC", label: "Hardware" },
  { src: img6, alt: "Gaming peripherals", label: "Peripherals" },
  { src: img7, alt: "Row of gaming setups", label: "Squad row" },
  { src: img8, alt: "Ambient ceiling lights", label: "Atmosphere" },
];

const GallerySection = () => (
  <section className="relative overflow-hidden bg-surface-dark py-20 md:py-28" id="gallery">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
      >
        <div>
          <p className="section-label mb-3">GALLERY</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
            INSIDE THE ARENA
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:ml-auto md:text-base">
          Hardware, mood lighting, rows of systems, and the atmosphere that makes the space feel alive. This section now reads more like a visual showcase than a basic image grid.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-2">
        {images.map((img, i) => {
          const layoutClass =
            i === 0
              ? "md:col-span-5 md:row-span-2"
              : i === 1
                ? "md:col-span-4"
                : i === 6
                  ? "md:col-span-4"
                  : "md:col-span-3";

          return (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative overflow-hidden border border-white/10 bg-card/70 ${layoutClass}`}
              style={{
                clipPath:
                  "polygon(0 12px, 12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i === 0 ? "aspect-[4/5] sm:aspect-[4/4.5] md:aspect-auto" : "aspect-[4/3]"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.62))]" />
              <div className="absolute left-3 top-3 border border-white/12 bg-black/45 px-3 py-1.5 backdrop-blur-sm sm:left-4 sm:top-4">
                <span className="font-heading text-[0.52rem] uppercase tracking-[0.18em] text-white/72 sm:text-[0.58rem] sm:tracking-[0.28em]">
                  {img.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default GallerySection;
