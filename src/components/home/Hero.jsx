import { Link } from "react-router-dom";
import { hero1, hero3, hero9 } from "../../assets";
import Header from "../../layouts/Header";
import { useEffect, useState } from "react";
import { formLink } from "../../utils/data";

const Hero = () => {
  const images = [hero1, hero3, hero9].filter(Boolean); // Filter out any undefined images
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images and check if they load successfully
  useEffect(() => {
    const imagePromises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
      });
    });

    Promise.allSettled(imagePromises).then((results) => {
      console.log("Image loading results:", results);
      setImagesLoaded(true);
    });
  }, []);

  // Basic image carousel effect
  useEffect(() => {
    if (!imagesLoaded || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, imagesLoaded]);

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className='relative'>
      <div className='relative w-full h-[650px] md:h-[800px] overflow-hidden'>
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
        <div className='absolute top-0 left-0 w-full z-50'>
          <Header />
        </div>

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/20' />

        {/* Content */}
        <div className='relative z-10 flex items-center justify-center min-h-[800px]'>
          <div className='flex flex-col gap-8 text-white items-center mt-[-180px] md:mt-0 px-4'>
            <h1 className='text-center md:text-6xl text-3xl font-medium'>
              Vedura Resort <br />
              <p className="text-3xl">Escape. Connect. Thrive</p>
            </h1>
            <p className='text-center font-semibold text-lg'>
              You deserve more than survival
              <br />
              15 minutes from Central Business District, Alausa{" "}
            </p>
            <Link to={formLink}>
              <button className='text-black bg-white px-4 py-4 rounded-3xl w-[270px] h-auto font-semibold'>
                Secure Your Portion Of Earth
              </button>
            </Link>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
