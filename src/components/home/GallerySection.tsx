import { motion } from "framer-motion";
import img1 from "@/assets/hero-bg.jpg";
import img2 from "@/assets/cafe-interior.jpg";
import img3 from "@/assets/keyboard-closeup.jpg";
import img4 from "@/assets/monitor-game.jpg";
import img5 from "@/assets/gaming-pc.jpg";
import img6 from "@/assets/peripherals.jpg";
import img7 from "@/assets/setup-row.jpg";
import img8 from "@/assets/ceiling-lights.jpg";

const images = [
  { src: img1, alt: "Gaming cafe setup overview" },
  { src: img2, alt: "Cafe interior wide shot" },
  { src: img3, alt: "Mechanical keyboard close-up" },
  { src: img4, alt: "Gaming monitor in action" },
  { src: img5, alt: "High-end gaming PC" },
  { src: img6, alt: "Gaming peripherals" },
  { src: img7, alt: "Row of gaming setups" },
  { src: img8, alt: "Ambient ceiling lights" },
];

const GallerySection = () => (
  <section className="py-20 md:py-28 bg-surface-dark" id="gallery">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="section-label mb-3">GALLERY</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
          THE ARENA
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`relative overflow-hidden rounded-lg group cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 ${
              i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
