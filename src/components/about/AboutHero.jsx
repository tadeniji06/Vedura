import Header from "../../layouts/Header";
import { hero9 } from "../../assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formLink } from "../../utils/data";

const AboutHero = () => {
  return (
    <div className='relative'>
      <div className='relative bg-primary-green w-full min-h-[650px] bg-center'>
        {/* Header always on top */}
        <div className='absolute top-0 left-0 w-full z-50'>
          <Header />
        </div>

        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black/20 z-30' />

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
            <p className='text-sm sm:text-base lg:text-lg leading-relaxed'>
              At Vedura, we believe that a home should be more than a
              structure, it should be a sanctuary. <br /> Inspired by
              nature and refined by design, Vedura is a curated response to
              the need for calm, beauty, and functionality in modern
              living. We are not just selling land. We are offering people
              the chance to invest in a lifestyle that is being built from
              the ground up
            </p>
            <Link to={formLink}>
              <button className='px-5 py-3 bg-white text-primary-green rounded-xl w-[200px] font-bold mx-auto md:mx-0'>
                Be Among The First
              </button>
            </Link>
          </motion.div>

          {/* Right Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: true }}
            className='w-full max-w-[600px] h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl relative'
          >
            {/* Offscreen image preload (optional but helps speed) */}
            <div className='hidden'>
              <img src={hero9} alt='Preload Vision' />
            </div>

            {/* Actual image with native fade-in */}
            <img
              src={hero9}
              alt='About Hero'
              className='w-full h-full object-cover rounded-xl shadow-lg transition-opacity duration-700 ease-in-out'
              loading='eager'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
