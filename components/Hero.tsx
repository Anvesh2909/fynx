"use client"
import React from 'react'
import LottieAnimation from './LottieAnimation'
import HeroAnimation from '../public/lottie/Animation-hero.json'

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            {/* Content */}
            <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                        Fynx – The Future of Micro-Influencer Marketing
                    </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed">
                    Affordable marketing for small businesses, powered by real engagement.
                </p>

                <div className="pt-4">
                    <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all hover:opacity-90">
                        Join the Waitlist
                    </button>
                </div>
            </div>

            {/* Animation - Increased size */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="w-full md:w-[120%] lg:w-[130%]">
                    <LottieAnimation
                        animationData={HeroAnimation}
                        className="w-full h-full"
                        autoplay={true}
                    />
                </div>
            </div>
        </div>
    )
}
export default Hero