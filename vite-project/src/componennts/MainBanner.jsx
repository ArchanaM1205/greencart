import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className='relative'>
      {/* Banner Images */}
      <img src={assets.main_banner_bg} alt='banner' className='w-full hidden md:block' />
      <img src={assets.main_banner_bg_sm} alt='banner' className='w-full md:hidden' />

      {/* Overlay Content at Bottom */}
      <div className='absolute inset-0 flex flex-col justify-end items-center px-4 pb-10 gap-4 text-center'>
        {/* Heading */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black max-w-[90%] md:max-w-[750px] leading-snug'>
          Packed with love, delivered fresh, <br className='hidden md:block' />
          without stretching your wallet’s flesh.
        </h1>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link
            to="/products"
            className='group flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dull transition rounded text-white text-sm sm:text-base'
          >
            Shop now
            <img
              src={assets.white_arrow_icon}
              alt='arrow'
              className='transition group-hover:translate-x-1 w-4 h-4'
            />
          </Link>

          <Link
            to="/products"
            className='group flex items-center justify-center gap-2 px-6 py-3 border border-black rounded text-black hover:bg-gray-100 transition text-sm sm:text-base bg-white md:bg-transparent'
          >
            Explore deals
            <img
              src={assets.black_arrow_icon}
              alt='arrow'
              className='transition group-hover:translate-x-1 w-4 h-4'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
