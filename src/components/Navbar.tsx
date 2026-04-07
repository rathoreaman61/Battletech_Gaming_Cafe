import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "SETUPS", path: "/setups" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const logoAudioRef = useRef<HTMLAudioElement | null>(null);
  const logoClickAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);
  const navAudioRef = useRef<HTMLAudioElement | null>(null);
  const bookNowAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    logoAudioRef.current = new Audio(import.meta.env.BASE_URL + "sounds/soundforlogo.mp3");
    logoAudioRef.current.volume = 0.3;
    logoAudioRef.current.preload = "auto";

    logoClickAudioRef.current = new Audio(import.meta.env.BASE_URL + "sounds/clicklogo.mp3.mp3");
    logoClickAudioRef.current.volume = 0.4;
    logoClickAudioRef.current.preload = "auto";

    clickAudioRef.current = new Audio(import.meta.env.BASE_URL + "sounds/clickHSACB.mp3");
    clickAudioRef.current.volume = 0.4;
    clickAudioRef.current.preload = "auto";

    navAudioRef.current = new Audio(import.meta.env.BASE_URL + "sounds/HomeSetup.AboutContact.mp3");
    navAudioRef.current.volume = 0.25;
    navAudioRef.current.preload = "auto";

    bookNowAudioRef.current = new Audio(import.meta.env.BASE_URL + "sounds/booknow.mp3");
    bookNowAudioRef.current.volume = 0.25;
    bookNowAudioRef.current.preload = "auto";
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const replayAudio = (audio: HTMLAudioElement | null, label: string) => {
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Ignore playback interruptions from browser gesture rules.
    });
  };

  const playLogoSound = () => {
    replayAudio(logoAudioRef.current, "Logo hover audio");
  };

  const playClickSound = () => {
    replayAudio(clickAudioRef.current, "Click audio");
  };

  const playLogoClickSound = () => {
    replayAudio(logoClickAudioRef.current, "Logo click audio");
  };

  const playNavLinkSound = () => {
    replayAudio(navAudioRef.current, "Nav hover audio");
  };

  const playBookNowHoverSound = () => {
    replayAudio(bookNowAudioRef.current, "Book now hover audio");
  };

  const stopLogoSound = () => {
    if (logoAudioRef.current) {
      logoAudioRef.current.pause();
      logoAudioRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-white/10 ${
          scrolled
            ? "bg-black/84 shadow-[0_20px_55px_rgba(0,0,0,0.42)]"
            : "bg-black/12"
        }`}
      >
        <div className="container mx-auto flex h-[4.5rem] items-center justify-between gap-3 px-4 md:h-20 md:px-8">
          <Link 
            to="/" 
            className="relative flex min-w-0 items-center"
            onPointerDown={playLogoClickSound}
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
              }}
              whileTap={{ scale: 0.9 }}
              onPointerEnter={playLogoSound}
              onPointerLeave={stopLogoSound}
              className="group relative flex items-center"
            >
              <img 
                src={import.meta.env.BASE_URL + "logo.png"} 
                alt="Battletech Logo" 
                className="relative z-10 mt-1 h-[5.35rem] w-auto max-w-[11rem] object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.48)] transition-all duration-300 group-hover:drop-shadow-[0_18px_36px_rgba(255,122,26,0.16)] sm:h-[6.1rem] sm:max-w-[12.5rem] md:mt-2 md:h-[9.4rem] md:max-w-none" 
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-0">
            <div
              className="relative flex h-12 items-stretch overflow-hidden border border-primary/20 bg-[linear-gradient(180deg,rgba(36,24,16,0.9),rgba(16,12,10,0.88))] shadow-[0_12px_32px_rgba(0,0,0,0.28)]"
              style={{ clipPath: "polygon(18px 0, 100% 0, calc(100% - 18px) 100%, 0 100%, 0 18px)" }}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="relative"
                >
                  {index > 0 && (
                    <span className="pointer-events-none absolute left-0 top-1/2 h-5 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/16 to-transparent" />
                  )}
                  <Link
                    to={link.path}
                    onPointerEnter={playNavLinkSound}
                    onPointerDown={playClickSound}
                    aria-current={location.pathname === link.path ? "page" : undefined}
                    className={`group relative flex h-full items-center px-7 font-heading text-[0.72rem] font-semibold tracking-[0.26em] transition-all duration-300 ${
                      location.pathname === link.path
                        ? "text-white"
                        : "text-white/72 hover:text-white"
                    }`}
                  >
                    <span
                      className={`pointer-events-none absolute inset-0 transition-all duration-300 ${
                        location.pathname === link.path
                          ? "bg-[linear-gradient(180deg,rgba(255,122,26,0.18),rgba(255,122,26,0.06))]"
                          : "bg-transparent group-hover:bg-white/[0.03]"
                      }`}
                    />
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className={`pointer-events-none absolute inset-x-5 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 ${
                        location.pathname === link.path
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
            <Link
              to="/contact"
              onPointerEnter={playBookNowHoverSound}
              onPointerDown={playClickSound}
              className="group relative ml-2 inline-flex h-12 items-center overflow-hidden border border-primary/35 bg-[linear-gradient(135deg,rgba(255,122,26,0.98),rgba(255,150,58,0.92))] px-8 font-heading text-sm font-bold tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(255,107,0,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(255,107,0,0.32)] active:scale-95"
              style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%, 10px 50%)" }}
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70" />
              <span className="pointer-events-none absolute -left-8 top-0 h-full w-8 skew-x-[-20deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[calc(100%+1rem)] group-hover:opacity-100" />
              <span className="relative z-10">BOOK NOW</span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="touch-target md:hidden shrink-0 rounded-full border border-primary/20 bg-black/30 p-2.5 text-white transition-all duration-200 hover:border-primary/40 hover:bg-primary/[0.08] hover:text-primary active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-x-4 top-[4.9rem] z-40 max-h-[calc(100vh-6rem)] overflow-y-auto overflow-x-hidden border border-primary/18 bg-[linear-gradient(180deg,rgba(10,10,10,0.97),rgba(18,13,10,0.94))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.46)] backdrop-blur-2xl md:hidden sm:p-5"
            style={{ clipPath: "polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)" }}
          >
            <div className="mb-4 border-b border-primary/12 pb-4">
              <p className="font-heading text-[0.62rem] tracking-[0.36em] text-white/45">BATTLETECH NAVIGATION</p>
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Link
                    to={link.path}
                    onPointerEnter={playNavLinkSound}
                    onPointerDown={playClickSound}
                    aria-current={location.pathname === link.path ? "page" : undefined}
                    className={`group relative block border border-transparent px-4 py-3.5 font-heading text-base font-semibold tracking-[0.18em] transition-all duration-300 sm:text-lg sm:tracking-[0.24em] ${
                      location.pathname === link.path
                        ? "border-primary/20 bg-primary/[0.1] text-white"
                        : "text-white/78 hover:border-white/8 hover:bg-white/[0.04] hover:text-white"
                    }`}
                    style={{ clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className={`pointer-events-none absolute inset-x-4 bottom-3 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 ${
                        location.pathname === link.path
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
            <Link
              to="/contact"
              onPointerEnter={playBookNowHoverSound}
              onPointerDown={playClickSound}
              className="group relative mt-5 inline-flex min-h-[44px] w-full items-center justify-center overflow-hidden border border-primary/35 bg-[linear-gradient(135deg,rgba(255,122,26,0.98),rgba(255,150,58,0.92))] px-6 py-3.5 text-center font-heading text-sm font-bold tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(255,107,0,0.22)] transition-all duration-300 active:scale-95 sm:px-8 sm:py-4 sm:tracking-[0.22em]"
              style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 14px) 100%, 0 100%, 10px 50%)" }}
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70" />
              <span className="pointer-events-none absolute -left-8 top-0 h-full w-8 skew-x-[-20deg] bg-white/20 opacity-0 transition-all duration-500 group-hover:left-[calc(100%+1rem)] group-hover:opacity-100" />
              <span className="relative z-10">BOOK NOW</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
