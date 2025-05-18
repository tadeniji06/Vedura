import { socials, navLinks } from "../utils/data";
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
      className='bg-primary-green mt-10 px-6 py-10 flex flex-col md:flex-row md:justify-between md:items-start gap-10'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left side */}
      <motion.div className='flex flex-col gap-5 md:w-1/2' variants={itemVariants}>
        <img className='w-[120px] h-[38px]' src={logo} alt='Logo' />

        <div className='flex flex-wrap gap-5'>
          {socials.map((item) => (
            <Link
              className='text-white text-sm md:text-base hover:underline'
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
          <div className='flex border-b border-white justify-between items-center'>
            <input
              className='bg-inherit outline-none pb-2 placeholder:text-white text-white w-full pr-4'
              type='email'
              placeholder='Email address'
            />
            <Icon className='text-white text-2xl cursor-pointer' icon={"weui:arrow-filled"} />
          </div>
        </div>

        <div className='mt-5'>
          <p className='text-white text-sm md:text-base font-medium'>
            © 2025 Casafina Development. All rights reserved
          </p>
        </div>
      </motion.div>

      {/* Right side */}
      <motion.div className='flex flex-col gap-8 md:w-1/2' variants={itemVariants}>
        <div className='flex flex-wrap gap-10 text-white'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>Quick Links</p>
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className='hover:underline text-sm md:text-base'
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>News</p>
            <Link to='#' className='hover:underline text-sm md:text-base'>
              Why Arepo?
            </Link>
            <Link to='#' className='hover:underline text-sm md:text-base'>
              Why Vendura?
            </Link>
          </div>
        </div>

        <div className='flex flex-wrap gap-4 text-white text-sm md:text-base'>
          <p className='hover:underline cursor-pointer'>Terms & Conditions</p>
          <p className='hover:underline cursor-pointer'>Cookie Policy</p>
          <p className='hover:underline cursor-pointer'>Privacy Policy</p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
