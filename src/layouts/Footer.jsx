import { socials } from "../utils/data";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      className='bg-primary-green mt-10 px-6 py-10 flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24 2xl:gap-32 md:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-7xl mx-auto'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left side */}
      <motion.div
        className='flex flex-col gap-5 lg:w-1/2 xl:w-2/5'
        variants={itemVariants}
      >
        <img className='w-[120px] h-[38px]' src={logo} alt='Logo' />

        <div className='flex flex-wrap gap-4 lg:gap-5'>
          {socials.map((item) => (
            <Link
              className='text-white text-sm md:text-base hover:underline transition-all duration-200'
              key={item.name}
              to={item.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className='mt-4 text-white flex flex-col gap-3'>
          <span className='text-lg md:text-xl font-semibold'>
            Got more questions?
          </span>
          <div className='flex border-b border-white justify-between items-center hover:border-gray-200 transition-colors duration-200'>
            <input
              className='bg-inherit outline-none pb-2 placeholder:text-white text-white w-full pr-4 placeholder:opacity-80'
              type='email'
              placeholder='Email address'
            />
            <Icon
              className='text-white text-2xl cursor-pointer hover:text-gray-200 transition-colors duration-200'
              icon={"weui:arrow-filled"}
            />
          </div>
        </div>

        <div className='mt-5'>
          <p className='text-white text-sm md:text-base font-medium opacity-90'>
            © 2025 Casafina Development. All rights reserved
          </p>
        </div>
      </motion.div>

      {/* Right side */}
      <motion.div
        className='flex flex-col gap-6 lg:gap-8 lg:w-1/2 xl:w-3/5'
        variants={itemVariants}
      >
        {/* Navigation Links */}
        <div className='flex flex-wrap gap-8 lg:gap-12 xl:gap-16 text-white'>
          <div className='flex flex-col gap-2 min-w-[120px]'>
            <p className='font-bold text-base md:text-lg mb-1'>News</p>
            <Link 
              to='#' 
              className='hover:underline text-sm md:text-base transition-all duration-200 hover:text-gray-200'
            >
              Why Arepo?
            </Link>
            <Link 
              to='#' 
              className='hover:underline text-sm md:text-base transition-all duration-200 hover:text-gray-200'
            >
              Why Vedura?
            </Link>
          </div>
          
        
        </div>

        {/* Legal Links */}
        <div className='flex flex-wrap gap-4 lg:gap-6 text-white text-sm md:text-base'>
          <p className='hover:underline cursor-pointer transition-all duration-200 hover:text-gray-200'>
            Terms & Conditions
          </p>
          <p className='hover:underline cursor-pointer transition-all duration-200 hover:text-gray-200'>
            Cookie Policy
          </p>
          <p className='hover:underline cursor-pointer transition-all duration-200 hover:text-gray-200'>
            Privacy Policy
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;