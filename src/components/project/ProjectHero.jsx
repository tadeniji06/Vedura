import Header from "../../layouts/Header";
import { pherov } from "../../assets";

const ProjectHero = () => {
  return (
    <div className='relative'>
      <div className='w-full h-[400px] md:h-[700px] relative overflow-hidden'>
        {/* Header with proper positioning */}
        <div className='absolute top-0 left-0 w-full z-50'>
          <Header />
        </div>

        {/* Video Background */}
        <video
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={pherov}
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
        />

        {/* Overlay for readability */}
        <div className='absolute inset-0 bg-black/30'></div>
      </div>
    </div>
  );
};

export default ProjectHero;
