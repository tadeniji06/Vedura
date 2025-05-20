import { useState, useRef, useEffect } from "react";
import { tour } from "../../assets";
import { Link } from "react-router-dom";
import { formLink } from "../../utils/data";

const Tour = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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
    }
  };

  // Setup video event listeners
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("pause", () =>
        setIsPlaying(false)
      );
      videoRef.current.addEventListener("ended", () =>
        setIsPlaying(false)
      );
      videoRef.current.addEventListener("playing", () =>
        setIsPlaying(true)
      );

      // Cleanup function
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("pause", () =>
            setIsPlaying(false)
          );
          videoRef.current.removeEventListener("ended", () =>
            setIsPlaying(false)
          );
          videoRef.current.removeEventListener("playing", () =>
            setIsPlaying(true)
          );
        }
      };
    }
  }, []);

  return (
    <div className='mt-4 flex flex-col md:flex-row justify-center p-5 mx-auto max-w-[1600px]'>
      <div className='bg-gradient-to-b from-primary-green to-primary-peach w-full md:w-1/2 flex flex-col gap-6 justify-center text-white px-6 md:px-14 py-10 md:py-0'>
        <span className='text-xl font-semibold'>
          Virtual Tour Coming Soon
        </span>
        <p>
          Get ready to explore Vedura from anywhere, <br />
          our immersive 3D virtual tour is on the way.
        </p>
        <Link to={formLink}>
          <button className='text-primary-green bg-white py-3 rounded-xl w-[220px]'>
            Invest Now
          </button>
        </Link>
      </div>

      <div className='w-full md:w-1/2 relative'>
        {/* Video container */}
        <div className='relative w-full h-full'>
          <video
            ref={videoRef}
            className='w-full h-full object-cover'
            src={tour}
            muted
            playsInline
            loop
          />

          {/* Play button overlay */}
          <div
            className='absolute inset-0 flex items-center justify-center cursor-pointer'
            onClick={togglePlay}
          >
            {!isPlaying && (
              <div
                className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full 
                            flex items-center justify-center border-2 border-white/50 
                            hover:bg-white/30 hover:scale-105 transition-all duration-300'
              >
                {/* Play icon */}
                <div
                  className='w-5 h-8 border-t-[10px] border-b-[10px] border-r-0 border-l-[16px] 
                              border-t-transparent border-b-transparent border-l-white ml-1'
                ></div>
              </div>
            )}
          </div>

          {/* Video controls */}
          {isPlaying && (
            <div className='absolute bottom-4 right-4 z-10'>
              <button
                onClick={togglePlay}
                className='bg-black/50 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/70 transition-colors'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tour;
