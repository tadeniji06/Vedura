import { motion } from "framer-motion";
import { life } from "../../assets";

const Expectations = () => {
  return (
    <section className='mt-10 px-6 md:px-16 lg:px-36 flex flex-col gap-6'>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='flex flex-col gap-2 text-center md:text-left'
      >
        <h2 className='text-3xl md:text-4xl font-semibold'>See It Come to Life</h2>
        <p className='text-gray-600 text-lg'>
          A glimpse into the lifestyle and spaces you'll soon call home
        </p>
      </motion.div>

      {/* Image Section */}
      <div className='relative w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-xl overflow-hidden'>
        {/* Background Image */}
        <motion.img
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={life}
          alt='Lifestyle'
          className='w-full h-full object-cover rounded-xl'
        />

        {/* Overlay Text Box */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className='absolute right-5 sm:right-14 md:right-24 top-1/2 -translate-y-1/2 bg-primary-green/60 backdrop-blur-sm rounded-lg p-6 sm:p-10 text-white w-[90%] sm:w-[400px] md:w-[430px] shadow-lg'
        >
          <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Poolside Serenity</h3>
          <p className='text-sm sm:text-base leading-relaxed'>
            Relax and reconnect in <br />
            tranquil resort-style pool <br />
            settings
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Expectations;
