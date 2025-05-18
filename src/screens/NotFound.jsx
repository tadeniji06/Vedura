import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Simulated recent pages - you can replace with actual router history
  const recentPages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4 overflow-hidden relative'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-4 -left-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse'></div>
        <div className='absolute -bottom-8 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000'></div>
      </div>

      <div className='max-w-2xl w-full text-center relative z-10'>
        {/* Floating particles */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {[...Array(6)].map((_, i) => (
            <Icon
              icon='tabler:sparkles'
              key={i}
              className={`absolute text-green-300 opacity-40 animate-bounce`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
              width={16 + Math.random() * 8}
              height={16 + Math.random() * 8}
            />
          ))}
        </div>

        {/* Main 404 content */}
        <div className='space-y-8'>
          {/* 404 Number with glassmorphism effect */}
          <div className='relative'>
            <div className='text-8xl md:text-9xl font-black bg-gradient-to-r from-primary-peach via-emerald-600 to-primary-green bg-clip-text text-transparent animate-pulse'>
              404
            </div>
            <div className='absolute inset-0 text-8xl md:text-9xl font-black text-primary-green blur-sm -z-10'>
              404
            </div>
          </div>

          {/* Error message */}
          <div className='space-y-3'>
            <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
              Oops! Page not found
            </h1>
            <p className='text-gray-600 max-w-md mx-auto leading-relaxed'>
              The page you're looking for seems to have wandered off into
              the digital wilderness. Let's get you back on track!
            </p>
          </div>

          {/* Action buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link to={"/"}>
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className='group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-peach via-emerald-600 to-primary-green text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/30'
              >
                <Icon
                  icon='tabler:home'
                  width={20}
                  height={20}
                  className={`transition-transform duration-300 ${
                    isHovered ? "rotate-12" : ""
                  }`}
                />
                Go Home
              </button>
            </Link>

            {/* <button className="flex items-center gap-3 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300/30">
              <Icon icon="tabler:arrow-left" width={20} height={20} />
              Go Back
            </button> */}
          </div>

          {/* Quick search */}
          <div className='mt-8'>
            <div className='relative max-w-sm mx-auto'>
              <Icon
                icon='tabler:search'
                className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'
                width={20}
                height={20}
              />
              <input
                type='text'
                placeholder='Search for a page...'
                className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300'
              />
            </div>
          </div>

          {/* Quick links */}
          <div className='mt-8 pt-6 border-t border-gray-200'>
            <p className='text-sm text-gray-500 mb-4'>
              Or try one of these pages:
            </p>
            <div className='flex flex-wrap gap-3 justify-center'>
              {recentPages.map((page, index) => (
                <button
                  key={index}
                  className='px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 hover:scale-105'
                >
                  {page.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Fun easter egg */}
        <div className='mt-12 text-xs text-gray-400'>
          <p>Error Code: LOST_IN_DIGITAL_SPACE_42</p>
          <p className='mt-1'>
            🚀 Fun fact: You're the {Math.floor(Math.random() * 1000) + 1}
            th visitor to find this page today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
