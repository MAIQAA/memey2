import React from "react";
import { FeatureCardProps, featuresDeatiled } from "../constants/data.ts";

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="group relative w-full max-w-sm md:max-w-xs overflow-hidden rounded-lg shadow-lg bg-white p-0.5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-100">
    <div className="relative h-[480px] z-10 flex flex-col items-center overflow-hidden rounded-[7px] bg-white p-8 transition-colors duration-300">
      <Icon className="relative z-10 mb-10 mt-2 rounded-full border-2 border-blue-500 bg-blue-100 p-4 text-7xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:border-white transition-colors duration-500" />
      <h4 className="relative z-10 mb-4 w-full text-xl font-bold text-slate-900">
        {title}
      </h4>
      <p className="relative z-10 text-slate-600">{description}</p>
    </div>
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-100 group-hover:opacity-100 transition-opacity duration-500 animate-rotate-slow"></div>
  </div>
);

const featuresPage = () => {
  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent mb-6 md:mb-8">
            Features of MeasureMenuY
          </h1>
          <p className="max-w-4xl">
            MeasureMenuY (MeMeY) is an intelligent data analysis platform that
            turns raw data into clear insights — without the need for coding or
            complex statistics. Whether you’re a researcher, business owner, or
            student, MeMeY helps you analyze data faster, better, and with
            confidence.
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap justify-center items-center gap-8 my-8 sm:my-10 lg:my-12">
            {featuresDeatiled.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default featuresPage;
