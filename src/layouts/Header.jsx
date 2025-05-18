import { navLinks } from "../utils/data";
import { logo } from "../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className} relative z-50`}>
      {/* Updated container with responsive width and mobile padding */}
      <div className='container mx-auto md:px-8'>
        <div className='flex items-center justify-between p-4 md:p-8 h-16 md:h-14 md:mt-8 md:rounded-2xl relative backdrop-blur-lg bg-white/10 border border-white/20'>
          {/* logo - made more responsive */}
          <div className='flex-shrink-0 z-50'>
            <Link to={"/"}>
              <img
                src={logo}
                alt='Vendura logo'
                className='h-8 md:h-fit w-auto'
              />
            </Link>
          </div>

          {/* desktop navLinks */}
          <div className='hidden md:flex md:gap-8 lg:gap-16'>
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className='text-white font-bold hover:text-gray-300 transition-colors'
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className='hidden md:block'>
            <Link to={"/contact"}>
              <button
                className='bg-white px-4 py-2 rounded-xl border shadow-xl 
              hover:bg-gray-200 transition-colors font-medium'
              >
                Join Waitlist
              </button>
            </Link>
          </div>

          {/* mobile menu button - improved visibility */}
          <div className='md:hidden z-50'>
            <button
              type='button'
              className='text-white p-2 rounded-md focus:outline-none hover:bg-white/10 transition-colors'
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls='mobile-menu'
            >
              <span className='sr-only'>Open main menu</span>
              {!isOpen ? (
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile dropdown - improved positioning and visibility */}
      {isOpen && (
        <div
          className='md:hidden bg-primary-green-900/95 absolute top-full left-0 w-full z-40 
          backdrop-blur-md border-t border-white/20 shadow-lg'
          id='mobile-menu'
        >
          <div className='px-4 pt-4 pb-6 space-y-1'>
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={toggleMenu}
                className='text-white block px-3 py-3 rounded-md text-base font-medium hover:bg-white/10 transition-colors'
              >
                {item.name}
              </Link>
            ))}
            <div className='px-3 pt-4'>
              <Link to={"/contact"} onClick={toggleMenu}>
                <button
                  className='bg-white w-full px-4 py-3 rounded-xl border shadow-xl 
                  hover:bg-gray-100 transition-colors text-slate-900 font-medium'
                >
                  Join Waitlist
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
