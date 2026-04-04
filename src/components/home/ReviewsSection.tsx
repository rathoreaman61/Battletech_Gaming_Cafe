import { motion } from "framer-motion";
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const reviews = [
  { text: "Best gaming cafe in all of Rajasthan.", stars: 5, name: "Rahul S." },
  { text: "High-performance CPUs, 240hz screens, budget-friendly. Best in the city.", stars: 5, name: "Arjun M." },
  { text: "Fantastic experience. Game experience + environment was fabulous.", stars: 5, name: "Vikram P." },
  { text: "Owner is very polite and nice. Best gaming zone in the world.", stars: 5, name: "Karan D." },
  { text: "Best place to play games with friends. Highly recommend.", stars: 5, name: "Amit R." },
];

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 340 : 300;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28" id="reviews">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="section-label mb-3">TESTIMONIALS</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            WHAT GAMERS SAY
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-1 mb-10"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-primary text-primary" />
          ))}
          <span className="ml-2 font-heading text-lg text-foreground">4.8</span>
          <span className="text-muted-foreground text-sm ml-1">on JustDial</span>
        </motion.div>

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-background/95 text-foreground border border-border shadow-lg rounded-full hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all duration-200 focus:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-background/95 text-foreground border border-border shadow-lg rounded-full hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all duration-200 focus:outline-none"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 min-w-[280px] md:min-w-[320px] snap-start shrink-0"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm mb-4 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <User size={14} className="text-muted-foreground" />
                </div>
                <span className="font-heading text-sm tracking-wider text-muted-foreground">
                  {review.name}
                </span>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
