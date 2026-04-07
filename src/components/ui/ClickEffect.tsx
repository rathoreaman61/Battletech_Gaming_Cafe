import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Spark {
  id: number;
  x: number;
  y: number;
}

const ClickEffect: React.FC = () => {
  const [clicks, setClicks] = useState<Spark[]>([]);
  const cursorTimeoutRef = useRef<number | null>(null);
  const fireTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (window.innerWidth < 768) return;

      document.body.classList.add('sniper-shot-active');
      document.body.classList.remove('sniper-shot-fired');

      if (cursorTimeoutRef.current) {
        window.clearTimeout(cursorTimeoutRef.current);
      }

      if (fireTimeoutRef.current) {
        window.clearTimeout(fireTimeoutRef.current);
      }

      fireTimeoutRef.current = window.setTimeout(() => {
        document.body.classList.add('sniper-shot-fired');

        const newClick = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
        };

        setClicks((prev) => [...prev, newClick]);

        window.setTimeout(() => {
          setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
        }, 300);
      }, 60);

      cursorTimeoutRef.current = window.setTimeout(() => {
        document.body.classList.remove('sniper-shot-active', 'sniper-shot-fired');
      }, 260);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);

      if (cursorTimeoutRef.current) {
        window.clearTimeout(cursorTimeoutRef.current);
      }

      if (fireTimeoutRef.current) {
        window.clearTimeout(fireTimeoutRef.current);
      }

      document.body.classList.remove('sniper-shot-active', 'sniper-shot-fired');
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              left: click.x,
              top: click.y,
              width: 0,
              height: 0,
            }}
          >
            {/* Instant Muzzle Flash (White Core) */}
            <motion.div 
              className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white z-10"
              initial={{ scale: 0.1, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
            
            {/* Secondary Fire (Yellow/Orange) */}
            <motion.div 
              className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-400 blur-[2px]"
              initial={{ scale: 0.2, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
            
            {/* Hitmarker (X Shape) - Faster */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 1, scale: 0.8 }}
              animate={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.12 }}
            >
              {[45, 135, 225, 315].map((angle) => (
                <div
                  key={angle}
                  className="absolute w-6 h-[2.5px] bg-red-600 origin-center"
                  style={{ transform: `rotate(${angle}deg) translate(12px)` }}
                />
              ))}
            </motion.div>

            {/* Tactical High-Speed Sparks */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <motion.div
                key={angle}
                className="absolute w-12 h-[2px] bg-yellow-200 origin-left"
                style={{
                  transform: `rotate(${angle}deg) translateX(10px)`,
                }}
                initial={{ opacity: 1, scaleX: 0 }}
                animate={{ opacity: 0, scaleX: 2.5 }}
                transition={{ duration: 0.2, ease: "circOut" }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ClickEffect;
