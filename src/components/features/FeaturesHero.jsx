import { feat } from "../../assets";
import Header from "../../layouts/Header";
import { useState, useEffect } from "react";

const FeaturesHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Simulate and track loading progress
  useEffect(() => {
    // Start with artificial progress to show immediate feedback
    let progress = 10;
    setLoadingProgress(progress);
    
    const progressInterval = setInterval(() => {
      // Simulate loading with random increments, slower toward the end
      const increment = Math.max(1, Math.floor(Math.random() * 15) * (1 - progress / 100));
      progress = Math.min(90, progress + increment);
      setLoadingProgress(progress);
    }, 200);
    
    // Preload the actual image
    const img = new Image();
    img.src = feat;
    
    img.onload = () => {
      // When image is actually loaded, quickly finish the progress bar
      clearInterval(progressInterval);
      setLoadingProgress(100);
      
      // Small delay before removing loading overlay for smooth transition
      setTimeout(() => {
        setImageLoaded(true);
      }, 300);
    };
    
    img.onerror = () => {
      // Handle error case
      clearInterval(progressInterval);
      setLoadingProgress(100);
      setImageLoaded(true); // Remove loading screen even on error
    };
    
    return () => {
      clearInterval(progressInterval);
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <div className='relative'>
      <div
        className='bg-cover bg-center bg-no-repeat w-full h-[650px] md:h-[800px] relative'
        style={{ backgroundImage: imageLoaded ? `url(${feat})` : 'none' }}
      >
        {/* Loading Animation Overlay */}
        {!imageLoaded && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="flex flex-col items-center max-w-md px-4">
              {/* Branded loading animation */}
              <div className="w-16 h-16 mb-4">
                <div className="w-full h-full border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
              </div>
              
              <h2 className="text-white text-xl font-medium mb-2">Preparing Your Vedura Experience</h2>
              <p className="text-white/80 text-center mb-6">Loading stunning visuals of our community features...</p>
              
              {/* Progress bar */}
              <div className="w-full bg-gray-700/50 rounded-full h-2 mb-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              
              {/* Progress percentage */}
              <p className="text-white/70 text-sm">{Math.round(loadingProgress)}%</p>
              
              {/* Subtle low-quality image placeholder for visual interest during loading */}
              <div 
                className="absolute inset-0 -z-10 bg-cover bg-center opacity-20 blur-xl"
                style={{ 
                  backgroundImage: `url(${feat})`,
                  transform: 'scale(1.1)'
                }}
              ></div>
            </div>
          </div>
        )}

        {/* Header with proper positioning - always visible */}
        <div className='absolute top-0 left-0 w-full z-50'>
          <Header />
        </div>
        
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-black/20'></div>

        {/* Content area */}
        <div className='relative z-10 flex items-center justify-center min-h-[800px]'>
          <div className='flex flex-col gap-8 text-white items-center mt-[-180px] md:mt-0 px-4'>
            <h1 className='text-center md:text-6xl text-3xl font-medium'>
              What to Expect at Vedura
            </h1>
            <p className='text-center font-semibold text-lg'>
              A thoughtfully planned community where every detail - from
              <br />
              relaxation to innovation - supports your lifestyle.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHero;