import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { buzz } from "../../assets";

const BusinessCenter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      className='py-16 px-4 max-w-7xl mx-auto'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Section */}
      <div className='relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl'>
        {/* Background Image */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={buzz}
          alt='Business Centre at Vedura'
          className='w-full h-full object-cover'
        />

        {/* Dark Overlay for better text contrast */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60' />

        {/* Overlay Text Box - Mobile First Approach */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 50, scale: 0.9 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className='absolute inset-x-4 bottom-6 sm:inset-x-8 sm:bottom-8 lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:bottom-auto lg:w-[450px] xl:w-[500px]'
        >
          <div className='bg-primary-green/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl border border-white/10'>
            {/* Decorative Element */}
            <motion.div
              className='w-12 h-1 bg-primary-peach rounded-full mb-4'
              initial={{ width: 0 }}
              animate={isInView ? { width: "3rem" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            <motion.h3
              className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight'
              initial={{ opacity: 0, x: -20 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Business Centre
            </motion.h3>

            <motion.p
              className='text-sm sm:text-base lg:text-lg leading-relaxed text-gray-100 mb-6'
              initial={{ opacity: 0, x: -20 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Great businesses are not always business as usual. Want a
              space where you can have business talks and handshakes
              outside the usual office setting, then Vedura is your
              destination.
            </motion.p>

            {/* Floating Badge */}
            <motion.div
              className='absolute -top-3 -right-3 bg-primary-peach text-primary-green px-3 py-1 rounded-full text-xs font-semibold'
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.5, delay: 1.1 }}
              whileHover={{ scale: 1.1 }}
            >
              Premium
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className='absolute top-8 left-8 w-16 h-16 border-2 border-primary-peach/50 rounded-full hidden lg:block'
          initial={{ opacity: 0, rotate: -180 }}
          animate={
            isInView
              ? { opacity: 1, rotate: 0 }
              : { opacity: 0, rotate: -180 }
          }
          transition={{ duration: 1, delay: 0.8 }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className='absolute bottom-8 left-8 w-8 h-8 bg-primary-peach/30 rounded-full hidden lg:block'
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.6, delay: 1 }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.section>
  );
};

export default BusinessCenter;
