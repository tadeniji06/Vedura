import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactForm = () => {
  const socials = [
    {
      icon: "ic:baseline-facebook",
      link: "",
    },
    {
      icon: "mingcute:instagram-fill",
      link: "https://www.instagram.com/veduraresort?igsh=MWw2NG92dHpzYTJwbw%3D%3D&utm_source=qr",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='mt-6 py-8 px-4 md:px-12 flex flex-col md:flex-row justify-center items-center gap-10'
    >
      {/* Left Block - Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='w-full md:w-[500px] p-8 bg-gradient-to-br from-primary-green to-primary-green/60 flex flex-col gap-8 text-white rounded-xl shadow-lg'
      >
        <h1 className='text-3xl font-bold'>Get in Touch</h1>

        <div>
          <h2 className='text-xl font-semibold'>Visit Us:</h2>
          <p>1 Femi Deru Close, Ikeja Lagos</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold'>Chat Us:</h2>
          <p>Rapid Response! Send a mail to get started</p>
          <p>support@vedura.ng</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold'>
            Your Questions Answered: Connect with an Executive:
          </h2>
          <p>Mon - Fri, 8am - 5pm</p>
          <p>+234 9080702006</p>
          <p>+234 8180000113</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>Social Media</h2>
          <div className='flex gap-5'>
            {socials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={item.link} target='_blank'>
                  <Icon className='text-3xl' icon={item.icon} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Block - Form */}
      <motion.form
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='w-full md:w-[500px] flex flex-col gap-6'
        onSubmit={(e) => e.preventDefault()} // placeholder submit
      >
        <div className='flex flex-col'>
          <label className='mb-1'>Name</label>
          <input
            className='outline-none border border-gray-300 py-3 px-4 rounded'
            type='text'
            required
          />
        </div>

        <div className='flex flex-col'>
          <label className='mb-1'>Email</label>
          <input
            className='outline-none border border-gray-300 py-3 px-4 rounded'
            type='email'
            required
          />
        </div>

        <div className='flex flex-col'>
          <label className='mb-1'>Phone</label>
          <input
            className='outline-none border border-gray-300 py-3 px-4 rounded'
            type='tel'
          />
        </div>

        <div className='flex flex-col'>
          <label className='mb-1'>Message</label>
          <textarea
            className='border border-gray-300 py-4 px-4 resize-none outline-none rounded min-h-[150px]'
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type='submit'
          className='text-white font-semibold bg-primary-green py-3 rounded'
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
