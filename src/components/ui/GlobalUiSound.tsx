import { useEffect, useRef } from "react";

const HOVER_SELECTOR = "a, button";
const MIN_REPLAY_GAP_MS = 90;

const GlobalUiSound = () => {
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);
  const lastHoverPlayedAtRef = useRef(0);
  const lastClickPlayedAtRef = useRef(0);

  useEffect(() => {
    const hoverAudio = new Audio(import.meta.env.BASE_URL + "sounds/allbuttonhover.mp3");
    hoverAudio.preload = "auto";
    hoverAudio.volume = 0.22;
    hoverAudioRef.current = hoverAudio;

    const clickAudio = new Audio(import.meta.env.BASE_URL + "sounds/allpageclickbtn.mp3");
    clickAudio.preload = "auto";
    clickAudio.volume = 0.22;
    clickAudioRef.current = clickAudio;

    const isInsideNavbar = (target: EventTarget | null) =>
      target instanceof Element && Boolean(target.closest("nav"));

    const replaySound = (
      audioElement: HTMLAudioElement | null,
      lastPlayedAtRef: { current: number },
    ) => {
      if (!audioElement) return;

      const now = performance.now();
      if (now - lastPlayedAtRef.current < MIN_REPLAY_GAP_MS) return;
      lastPlayedAtRef.current = now;

      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.play().catch(() => {
        // Ignore autoplay/user gesture errors.
      });
    };

    const handlePointerOver = (event: PointerEvent) => {
      const interactiveTarget =
        event.target instanceof Element ? event.target.closest(HOVER_SELECTOR) : null;

      if (!interactiveTarget || isInsideNavbar(interactiveTarget)) return;

      const relatedTarget = event.relatedTarget;
      if (relatedTarget instanceof Node && interactiveTarget.contains(relatedTarget)) return;

      replaySound(hoverAudioRef.current, lastHoverPlayedAtRef);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (isInsideNavbar(event.target)) return;
      replaySound(clickAudioRef.current, lastClickPlayedAtRef);
    };

    document.addEventListener("pointerover", handlePointerOver, true);
    document.addEventListener("pointerdown", handlePointerDown, true);

    return () => {
      document.removeEventListener("pointerover", handlePointerOver, true);
      document.removeEventListener("pointerdown", handlePointerDown, true);
      hoverAudio.pause();
      hoverAudio.currentTime = 0;
      clickAudio.pause();
      clickAudio.currentTime = 0;
      hoverAudioRef.current = null;
      clickAudioRef.current = null;
    };
  }, []);

  return null;
};

export default GlobalUiSound;
