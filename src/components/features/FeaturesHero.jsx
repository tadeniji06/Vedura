import { feat } from "../../assets";
import Header from "../../layouts/Header";

const FeaturesHero = () => {
  return (
    <div className='relative'>
      <div
        className='bg-cover bg-center bg-no-repeat w-full h-[650px] md:h-[800px] relative'
        style={{ backgroundImage: `url(${feat})` }}
      >
        {/* Header with proper positioning */}
        <div className='absolute top-0 left-0 w-full z-50'>
          <Header className='' />
        </div>
        {/* Optional:  overlay for better text readability */}
        <div className='absolute inset-0 bg-black/20'></div>

        {/* Content area */}
        <div className='relative z-10 flex items-center justify-center min-h-[800px]'>
          <div className='flex flex-col gap-8 text-white items-center mt-[-180px] md:mt-0'>
            <h1 className='text-center md:text-6xl text-3xl font-medium'>
              What to Expect at Vendura
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
