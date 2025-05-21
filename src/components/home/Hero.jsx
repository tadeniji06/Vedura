import { Link } from "react-router-dom";
import { hero1, hero3 } from "../../assets";
import Header from "../../layouts/Header";
import { useEffect, useState } from "react";
import { formLink } from "../../utils/data";

const Hero = () => {
  const images = [hero1, hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Basic image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="relative w-full h-[650px] md:h-[800px] overflow-hidden">

        {/* Preload images using off-screen <img> for faster rendering */}
        <div className="hidden">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`preload-${index}`} />
          ))}
        </div>

        {/* Background Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Header with highest z-index */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[800px]">
          <div className="flex flex-col gap-8 text-white items-center mt-[-180px] md:mt-0 px-4">
            <h1 className="text-center md:text-6xl text-3xl font-medium">
              Vedura: Live.Work.Play
            </h1>
            <p className="text-center font-semibold text-lg">
              An exclusive resort-inspired community where luxury meets{" "}
              <br />
              nature in the heart of Arepo
            </p>
            <Link to={formLink}>
              <button className="text-black bg-white px-4 py-4 rounded-3xl w-[270px] h-auto font-semibold">
                Secure Your Portion Of Earth
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
