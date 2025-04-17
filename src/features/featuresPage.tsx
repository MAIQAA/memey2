import React from "react";
import { FeatureCardProps, featuresDeatiled } from "../constants/data.ts";

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="group w-[300px] h-[400px] bg-white/65 md:w-[330px] md:h-[430px] xl:w-[350px] rounded-xl  border border-black hover:border-blue-600  xl:h-[400px] shadow-lg p-9 space-y-3 relative overflow-hidden  hover:scale-95 transition-all duration-300">
    <div className="text-black group-hover:text-blue-600 text-5xl transition-colors duration-300">
      <Icon className="text-black group-hover:text-blue-600 text-5xl transition-colors duration-300" />
    </div>
    <h1 className="font-bold group-hover:text-blue-600 text-xl transition-colors duration-300">
      {title}
    </h1>
    <p className="text-sm text-zinc-500 leading-6">{description}</p>
  </div>
);

const featuresPage = () => {
  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8">
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
