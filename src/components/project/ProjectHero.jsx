import { useState, useRef, useEffect } from "react";
import Header from "../../layouts/Header";
import { pherov } from "../../assets";

const ProjectHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const videoRef = useRef(null);

  // Handle play/pause toggle
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  // Update play state if video ends or pauses for other reasons
  useEffect(() => {
    if (videoRef.current) {
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);
      const handlePlaying = () => setIsPlaying(true);
      
      // Add loading event handlers
      const handleLoadStart = () => setIsLoading(true);
      const handleLoadedData = () => setIsLoading(false);
      const handleProgress = () => {
        if (videoRef.current && videoRef.current.buffered.length > 0) {
          const bufferedEnd = videoRef.current.buffered.end(0);
          const duration = videoRef.current.duration;
          const progress = Math.floor((bufferedEnd / duration) * 100);
          setLoadProgress(progress);
        }
      };
      
      videoRef.current.addEventListener('pause', handlePause);
      videoRef.current.addEventListener('ended', handleEnded);
      videoRef.current.addEventListener('playing', handlePlaying);
      videoRef.current.addEventListener('loadstart', handleLoadStart);
      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      videoRef.current.addEventListener('progress', handleProgress);
      
      // Clean up event listeners
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('pause', handlePause);
          videoRef.current.removeEventListener('ended', handleEnded);
          videoRef.current.removeEventListener('playing', handlePlaying);
          videoRef.current.removeEventListener('loadstart', handleLoadStart);
          videoRef.current.removeEventListener('loadeddata', handleLoadedData);
          videoRef.current.removeEventListener('progress', handleProgress);
        }
      };
    }
  }, []);

  // Preload video with low priority
  useEffect(() => {
    const preloadVideo = () => {
      if (videoRef.current) {
        videoRef.current.preload = "auto";
        
        // Optional: If you have a lower quality poster image, set it here
        // videoRef.current.poster = lowResPlaceholder;
      }
    };
    
    preloadVideo();
  }, []);

  return (
    <div className="relative">
      <div className="w-full h-[400px] md:h-[700px] relative overflow-hidden">
        {/* Header with proper positioning */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* Loading overlay - shows while video is loading */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col items-center justify-center z-30">
            <div className="w-16 h-16 relative">
              <div className="w-16 h-16 rounded-full border-4 border-gray-300 border-t-white animate-spin"></div>
            </div>
            <div className="mt-6 w-64">
              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${loadProgress}%` }}
                ></div>
              </div>
              <p className="text-white text-sm mt-2 text-center">Loading video ({loadProgress}%)</p>
            </div>
          </div>
        )}

        {/* Video element with improved loading attributes */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={pherov}
          muted={!hasInteracted}
          playsInline
          loop
          preload="metadata"
          onCanPlay={() => setIsLoading(false)}
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Custom play button - only show when video is ready */}
        {!isLoading && (
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 
                      group transition-all duration-300 ease-in-out"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full 
                          flex items-center justify-center border-2 border-white/50 
                          group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
              {isPlaying ? (
                // Pause icon
                <div className="flex gap-2">
                  <div className="w-2 h-8 md:h-10 bg-white rounded-sm"></div>
                  <div className="w-2 h-8 md:h-10 bg-white rounded-sm"></div>
                </div>
              ) : (
                // Play icon
                <div className="w-5 h-8 md:w-6 md:h-10 border-t-[10px] border-b-[10px] border-r-0 border-l-[16px] 
                             border-t-transparent border-b-transparent border-l-white ml-1"></div>
              )}
            </div>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-white text-sm 
                          opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap 
                          font-medium tracking-wide">
              {isPlaying ? "Pause" : "Play Video"}
            </span>
          </button>
        )}

        {/* Optional: Video controls at bottom - only show when video is ready and user has interacted */}
        {!isLoading && hasInteracted && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-40">
            <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
              <div className="text-white text-xs font-medium">
                {isPlaying ? "Now Playing" : "Paused"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectHero;