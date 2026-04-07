import { motion } from "framer-motion";
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const reviews = [
  { text: "Best place to play games with friends. Highly recommend.", stars: 5, name: "Amit R." },
  { text: "Best gaming cafe in all of Rajasthan.", stars: 5, name: "Rahul S." },
  { text: "High-performance CPUs, 240hz screens, budget-friendly. Best in the city.", stars: 5, name: "Arjun M." },
  { text: "Fantastic experience. Game experience + environment was fabulous.", stars: 5, name: "Vikram P." },
  { text: "Owner is very polite and nice. Best gaming zone in the world.", stars: 5, name: "Karan D." },
];
const loopingReviews = [...reviews, ...reviews];

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const pauseAutoScrollUntilRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 340 : 300;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
      pauseAutoScrollUntilRef.current = performance.now() + 1800;
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let lastTimestamp = 0;
    const speed = 0.22;

    const tick = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isDraggingRef.current && timestamp >= pauseAutoScrollUntilRef.current) {
        const loopWidth = container.scrollWidth / 2;
        if (loopWidth > 0) {
          container.scrollLeft += delta * speed;

          if (container.scrollLeft >= loopWidth) {
            container.scrollLeft -= loopWidth;
          }
        }
      }

      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    animationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const pauseAutoScroll = (duration = 1800) => {
    pauseAutoScrollUntilRef.current = performance.now() + duration;
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    isDraggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = scrollRef.current.scrollLeft;
    pauseAutoScroll(2200);
    scrollRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollRef.current) return;

    const deltaX = event.clientX - dragStartXRef.current;
    const container = scrollRef.current;
    const loopWidth = container.scrollWidth / 2;

    container.scrollLeft = dragStartScrollLeftRef.current - deltaX;

    if (loopWidth > 0) {
      if (container.scrollLeft < 0) {
        container.scrollLeft += loopWidth;
        dragStartScrollLeftRef.current = container.scrollLeft + deltaX;
        dragStartXRef.current = event.clientX;
      } else if (container.scrollLeft >= loopWidth) {
        container.scrollLeft -= loopWidth;
        dragStartScrollLeftRef.current = container.scrollLeft + deltaX;
        dragStartXRef.current = event.clientX;
      }
    }
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    isDraggingRef.current = false;
    pauseAutoScroll(1400);

    if (scrollRef.current.hasPointerCapture(event.pointerId)) {
      scrollRef.current.releasePointerCapture(event.pointerId);
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
          className="mb-10 flex flex-wrap items-center justify-center gap-1 text-center"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-primary text-primary" />
          ))}
          <span className="ml-2 font-heading text-lg text-foreground">4.9</span>
          <span className="text-muted-foreground text-sm ml-1">on Google Maps</span>
        </motion.div>

        <div className="mb-6 flex items-center justify-center gap-3 sm:justify-end">
          <button
            onClick={() => scroll("left")}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-primary/45 bg-gradient-to-br from-card via-card to-primary/10 text-foreground shadow-[0_14px_34px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_18px_38px_rgba(255,107,0,0.28)] active:scale-95 focus:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-primary/45 bg-gradient-to-br from-card via-card to-primary/10 text-foreground shadow-[0_14px_34px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_18px_38px_rgba(255,107,0,0.28)] active:scale-95 focus:outline-none"
            aria-label="Next review"
          >
            <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative">

          <div
            ref={scrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={() => {
              if (!isDraggingRef.current) pauseAutoScroll(900);
            }}
            className="flex cursor-grab gap-4 overflow-x-auto pb-4 scrollbar-hide select-none active:cursor-grabbing"
            style={{ scrollbarWidth: "none" }}
          >
          {loopingReviews.map((review, i) => (
            <motion.div
              key={`${review.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % reviews.length) * 0.08 }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="glass-card group relative min-w-[260px] shrink-0 overflow-hidden p-5 sm:min-w-[280px] sm:p-6 md:min-w-[320px]"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,122,26,0.1),transparent_45%,rgba(255,255,255,0.03))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 skew-x-[-18deg] bg-white/10 opacity-0 transition-all duration-500 group-hover:left-[calc(100%+1rem)] group-hover:opacity-100" />
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
