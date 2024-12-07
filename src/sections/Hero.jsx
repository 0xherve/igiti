import { useData } from "../DataContext.jsx";
import Button from "../components/Button";
import Loader from "../pages/Loader";
import { arrowRight } from '../assets/icons';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
// import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { loading, store } = useData();

  if (loading) return <Loader />;

  const videoSrc1 = "videos/hero-1.mp4";
  const videoSrc2 = "videos/hero-2.mp4";

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
  {/* Video Frame with Overlay */}
  <div
    id="video-frame"
    className="relative h-dvh w-screen overflow-hidden rounded-lg bg-black-200"
  >
    {/* Background Video */}
    <video
      src={videoSrc1}
      autoPlay
      loop
      muted
      className="absolute left-0 top-0 h-full w-full object-cover"
    />
    <video
      src={videoSrc2}
      autoPlay
      loop
      muted
      className="absolute left-0 top-0 h-full w-full object-cover opacity-0"
    />

    {/* Dark Overlay with Hint of Orange */}
    <div className="absolute inset-0 bg-black bg-opacity-70 mix-blend-multiply" />
    <div className="absolute inset-0 bg-orange-500 bg-opacity-10 mix-blend-multiply" />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-5">
      <div className="my-28">
       <h1 className="special-font hero-heading text-blue-100 mb-12">Bringing <b>A</b>frica to <strong className="text-orange-400">Life</strong></h1> 
       <h3 className="text-slate-300 font-medium text-3xl">Journey through Africa, Piece by Piece</h3>
      </div>
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
