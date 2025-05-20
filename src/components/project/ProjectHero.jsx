import { useState, useRef, useEffect } from "react";
import Header from "../../layouts/Header";
import { pherov } from "../../assets";

const ProjectHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
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
  const handleVideoEvents = () => {
    if (videoRef.current) {
      videoRef.current.addEventListener('pause', () => setIsPlaying(false));
      videoRef.current.addEventListener('ended', () => setIsPlaying(false));
      videoRef.current.addEventListener('playing', () => setIsPlaying(true));
      
      // Clean up event listeners
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('pause', () => setIsPlaying(false));
          videoRef.current.removeEventListener('ended', () => setIsPlaying(false));
          videoRef.current.removeEventListener('playing', () => setIsPlaying(true));
        }
      };
    }
  };

  useEffect(() => {
    const cleanup = handleVideoEvents();
    return cleanup;
  }, []);

  return (
    <div className="relative">
      <div className="w-full h-[400px] md:h-[700px] relative overflow-hidden">
        {/* Header with proper positioning */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* Video element */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={pherov}
          muted={!hasInteracted}
          playsInline
          loop
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Custom play button */}
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

        {/* Optional: Video controls at bottom */}
        {hasInteracted && (
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