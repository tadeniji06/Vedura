import { tour } from "../../assets";
import { Link } from "react-router-dom";
import { formLink } from "../../utils/data";

const Tour = () => {
  return (
    <div className="mt-4 flex flex-col md:flex-row justify-center p-5 mx-auto max-w-[1600px]">
      <div className="bg-gradient-to-b from-primary-green to-primary-peach w-full md:w-1/2 flex flex-col gap-6 justify-center text-white px-6 md:px-14 py-10 md:py-0">
        <span className="text-xl font-semibold">Virtual Tour Coming Soon</span>
        <p>
          Get ready to explore Vedura from anywhere, <br />
          our immersive 3D virtual tour is on the way.
        </p>
        <Link to={formLink}>
          <button className="text-primary-green bg-white py-3 rounded-xl w-[220px]">
            Invest Now
          </button>
        </Link>
      </div>

      <div className="w-full md:w-1/2 relative">
        {/* Video container */}
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover"
            src={tour}
            muted
            playsInline
            loop
            autoPlay
            preload="auto"
          />

          {/* Optional overlay — remove if you don’t want any interaction at all */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Tour;
