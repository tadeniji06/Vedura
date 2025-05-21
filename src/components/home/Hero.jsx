import { Link } from "react-router-dom";
import { hero1, hero3 } from "../../assets";
import Header from "../../layouts/Header";
import { useEffect, useState } from "react";
import { formLink } from "../../utils/data";

const Hero = () => {
  const images = [hero1, hero3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState([false, false]);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  // Preload images and track loading status
  useEffect(() => {
    const imageObjects = images.map((src, index) => {
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          
          // Check if all images are loaded
          if (newState.every(loaded => loaded)) {
            setAllImagesLoaded(true);
          }
          
          return newState;
        });
      };
      
      return img;
    });
    
    // Cleanup
    return () => {
      imageObjects.forEach(img => {
        img.onload = null;
      });
    };
  }, []);

  // Image carousel effect
  useEffect(() => {
    // Only start the carousel when all images are loaded
    if (!allImagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [allImagesLoaded]);

  return (
    <div className="relative">
      <div className="relative w-full h-[650px] md:h-[800px] overflow-hidden">
        {/* Loading Animation Overlay */}
        {!allImagesLoaded && (
          <div className="absolute inset-0 bg-gray-800 z-20 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
              <p className="text-white mt-4">Loading stunning views...</p>
              
              {/* Placeholder blurred gradient background for visual appeal during loading */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-700 to-gray-900 opacity-80"></div>
            </div>
          </div>
        )}

        {/* Background Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              currentIndex === index && allImagesLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Header with highest z-index */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

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