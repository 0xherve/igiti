import { useEffect, useRef } from "react";
import { useData } from "../DataContext.jsx";
import Button from "../components/Button";
import { arrowRight } from '../assets/icons';
const Hero = () => {
  const { store } = useData();
  const frameRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const frame = frameRef.current;
    if (!video || !frame) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;
    const updatePlayback = () => {
      if (reduceMotion.matches || !isVisible || document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      updatePlayback();
    });
    const onVisibilityChange = () => updatePlayback();
    observer.observe(frame);
    document.addEventListener("visibilitychange", onVisibilityChange);
    reduceMotion.addEventListener("change", updatePlayback);
    updatePlayback();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reduceMotion.removeEventListener("change", updatePlayback);
      video.pause();
    };
  }, []);

  return (
    <section id="home">
      <div className="relative min-h-[100svh] w-full overflow-hidden">
        <div
          id="video-frame"
          ref={frameRef}
          className="relative min-h-[100svh] w-full overflow-hidden rounded-lg bg-black"
        >
          <video
            ref={videoRef}
            src="/videos/hero-1.mp4"
            playsInline
            preload="none"
            poster="/videos/hero-poster.webp"
            loop
            muted
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-500/10 mix-blend-multiply" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 pt-28 pb-12 text-center">
            <div className="mb-8 max-w-4xl">
              <h1 className="mb-6 font-sans text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-[1.1] text-balance text-on-dark">Bringing Africa to <strong className="text-brand-400">Life</strong></h1>
              <h3 className="text-xl sm:text-3xl font-medium text-slate-300">Journey through Africa, Piece by Piece</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                label="Play Igiti"
                iconURL={arrowRight}
                link="https://play.igiti.africa"
                className="bg-green-800 hover:bg-green-900"
              />
              <Button
                label={store?.label || "Shop Now"}
                iconURL={arrowRight}
                link={store?.link || "https://buy.igiti.africa/"}
                className="bg-brand-500 hover:bg-brand-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
