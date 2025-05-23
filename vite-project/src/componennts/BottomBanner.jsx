import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      {/* Banner Images */}
      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className="w-full hidden md:block rounded-md"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="w-full md:hidden rounded-md"
      />

      {/* Features Overlay */}
      <div
        className={`
          absolute inset-0 flex flex-col items-center md:items-end md:justify-center
          pt-16 md:pt-0 md:pr-24 px-4 space-y-6
          text-primary
        `}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 md:mb-6">
          Why We Are Best
        </h1>

        <div className="space-y-4 w-full md:w-[320px]">
          {features.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white/70 p-3 rounded-md"
            >
              <img src={icon} alt={title} className="w-10 h-10 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomBanner
