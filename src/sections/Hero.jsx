import { useData } from "../DataContext.jsx";
import Button from "../components/Button";
import Loader from "../pages/Loader";
import { arrowRight } from '../assets/icons';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { puzzles, product, setProduct, loading, store } = useData();

  if (loading) return <Loader />;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const totalVideos = 5;

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    setHasClicked(true);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 1 ? totalVideos : prevIndex - 1
    );
    setHasClicked(true);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <section id="home">
      <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
          {/* Video Player */}
          <video
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 z-30 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-30 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75"
          >
            →
          </button>

          {/* Overlay Text and Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-5">
            <h1 className="special-font hero-heading text-blue-100">
              Bringing <b>A</b>frica to Life
            </h1>
            <p className="max-w-lg text-blue-100 mb-5">
              Journey through Africa <br /> Piece by Piece
            </p>
            <Button
              label={store?.label || "Shop Now"}
              iconURL={arrowRight}
              link={store?.link || "https://buy.igiti.africa/"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
