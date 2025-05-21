import Header from "../../layouts/Header";
import { aboutH } from "../../assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formLink } from "../../utils/data";
import { useState, useEffect } from "react";

const AboutHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = aboutH;
    
    img.onload = () => {
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      setImageError(true);
      // Still set imageLoaded to true to remove loading indicator
      // and show the placeholder instead
      setImageLoaded(true);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <div className='relative'>
      <div className='relative bg-primary-green w-full min-h-[650px] bg-center'>
        {/* Header always on top */}
        <div className='absolute top-0 left-0 w-full z-50'>
          <Header />
        </div>

        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black/20 z-30'></div>

        {/* Main content */}
        <div className='relative z-40 flex flex-col md:flex-row items-center justify-around gap-10 px-4 md:px-24 pt-[120px] pb-10'>
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='flex flex-col gap-4 text-white text-center md:text-left max-w-xl'
          >
            <span className='text-2xl md:text-4xl font-bold leading-snug'>
              The Vision Behind Vedura
            </span>
            <p className='text-sm md:text-base leading-relaxed'>
              At Vedura, we believe that a home should be more than a
              structure — it should be a sanctuary. <br />
              Inspired by nature and refined by design, Vedura is a
              curated response to the need for calm, beauty, and
              functionality in modern living.
            </p>
           <Link to={formLink}>
              <button className='px-5 py-3 bg-white text-primary-green rounded-xl w-[200px] font-bold mx-auto md:mx-0'>
                Be Among The First
              </button>
           </Link>
          </motion.div>

          {/* Right Image Block with Loading State */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: true }}
            className='w-full max-w-[600px] h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl relative'
          >
            {/* Loading animation overlay */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-800/90 z-10 flex items-center justify-center rounded-xl">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
                  <p className="text-white mt-3 text-sm">Loading vision imagery...</p>
                  
                  {/* Subtle animated gradient for visual interest during loading */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-green/30 to-gray-900/80 rounded-xl opacity-70"></div>
                </div>
              </div>
            )}
            
            {/* Progressive loading with blur-up technique */}
            <div 
              className={`absolute inset-0 bg-gray-300 rounded-xl bg-cover bg-center transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
              style={{ 
                backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.05)), url(${aboutH})`,
                filter: 'blur(20px)',
                transform: 'scale(1.1)'
              }}
            ></div>
            
            {/* Actual image */}
            <img
              className={`w-full h-full object-cover rounded-xl shadow-lg transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              src={aboutH}
              alt='About Hero'
              // Redundant onLoad handler as fallback in case useEffect preloading fails
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            
            {/* Fallback for image error */}
            {imageError && (
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-xl">
                <p className="text-gray-600 font-medium">Vision imagery unavailable</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;