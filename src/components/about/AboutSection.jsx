import { Link } from "react-router-dom";
import { about } from "../../assets";
import { motion } from "framer-motion";
import { formLink } from "../../utils/data";

const AboutSection = () => {
  return (
    <section className='px-4 py-12 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20'>
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='w-full lg:w-[600px] h-[300px] lg:h-[480px]'
      >
        <img
          className='w-full h-full object-cover rounded-xl'
          src={about}
          alt='About Vedura'
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className='flex flex-col gap-6 lg:gap-12 max-w-[600px]'
      >
        <span className='font-bold text-xl lg:text-2xl text-primary-green'>
          Where Calm Meets Contemporary Living
        </span>

        <p className='text-sm md:text-base leading-relaxed text-gray-700'>
          Vedura is not your typical land investment. It is a business and
          family resort in the making-a masterfully planned off-plan
          community that brings together business, comfort, nature, and
          lifestyle. At Vedura, you do not just own land. You own a part
          of something that is growing, evolving, and set to thrive.
        </p>

        <p className='text-sm md:text-base leading-relaxed text-gray-700'>
          Today, that swamp is becoming a sanctuary - a thriving resort
          town in the making, one that is set to be the perfect blend of
          lifestyle. A space where families can live well, where businesses
          can thrive, and where nature is not just preserved, but
          celebrated. We are not just promising a resort. We are building
          it.
        </p>

        <Link to={formLink}>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgba(0, 128, 0, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className='text-white bg-primary-green px-3 py-4 w-[220px] h-[55px] rounded-xl font-medium'
          >
            Be Among The First
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutSection;
