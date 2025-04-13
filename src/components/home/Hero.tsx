import React from "react";
import SmoothScrollLink from "../SmoothScrollLink.tsx";

const Hero = () => {
  return (
    <main className="relative">
      <div className="w-full max-w-8xl mx-auto py-8 sm:py-10 lg:py-[3.35rem] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <div className="absolute -top-3 md:-top-4 left-0">
              <span className="bg-black/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                🚀 Simplify Your Research
              </span>
            </div>
            <h1 className="text-4xl  md:text-5xl lg:text-7xl font-bold mt-8 sm:mt-10 lg:mt-4 mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-black via-purple-600 to-blue-600 text-transparent bg-clip-text">
              Data Analysis Made Easy for Students
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 lg:mb-10 leading-relaxed">
              MeMeY simplifies research data analysis while maintaining powerful
              capabilities. Focus on results, not complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:space-x-7">
              <SmoothScrollLink className="text-white" href="#choose-path">
                <button className="rounded-lg bg-black  px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm md:text-base lg:text-lg hover:bg-black/90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Get Started
                </button>
              </SmoothScrollLink>
              <a className="text-black" href="/help">
                <button className="rounded-lg border-2 border-black  px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm md:text-base lg:text-lg hover:bg-black/5 transform hover:-translate-y-1 transition-all duration-300">
                  Learn More
                </button>
              </a>
            </div>
          </div>
          <div>
            <img
              src="/Hero.png"
              alt="Data Analysis"
              className="w-full rounded-xl sm:rounded-2xl transform hover:scale-105 transition-transform duration-400"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
