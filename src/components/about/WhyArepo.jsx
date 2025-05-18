import { map } from "../../assets";
import { Icon } from "@iconify/react";

const WhyArepo = () => {
  return (
    <section className='flex justify-center items-center px-4 py-12'>
      <div className='flex flex-col gap-8 text-center max-w-5xl'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold text-primary-green mb-2'>
            Why Arepo?
          </h2>
          <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
            Tucked just outside the bustle of Lagos, Arepo offers a rare blend of serenity,
            accessibility, and untapped potential. <br />
            This fast-growing residential hub is quietly becoming one of the most
            sought-after destinations for families, professionals, and investors alike. <br />
            With its peaceful surroundings, improving infrastructure, and proximity to key
            areas like Magodo, Berger, and the Lagos-Ibadan Expressway, Arepo is a natural
            choice for a project designed to offer long-term value and tranquility.
          </p>
        </div>

        {/* Image with location pin overlay */}
        <div className='relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden'>
          <img
            src={map}
            alt='Arepo Map'
            className='w-full h-auto object-cover'
          />

          {/* Location Pin */}
          <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
            <div className='flex flex-col items-center bg-white/80 px-4 py-2 rounded-xl shadow-lg'>
              <Icon
                icon='mdi:map-marker'
                className='text-primary-green text-4xl mb-1'
              />
              <p className='text-sm font-semibold text-primary-green'>Arepo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArepo;
