import { FaWandMagic } from "react-icons/fa6";
import { FaBroom } from "react-icons/fa6";
import { PiTestTubeFill } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";
import React from "react";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <Icon className="text-black text-xl sm:text-2xl mb-2 sm:mb-3" />
    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: FaWandMagic,
      title: "One-Click Analysis",
      description: "Just click 'analyze' and let MeMeY handle the complexity",
    },
    {
      icon: FaBroom,
      title: "Data Cleaning",
      description: "Automated data cleaning and preprocessing",
    },
    {
      icon: PiTestTubeFill,
      title: "Testing",
      description: "Comprehensive statistical testing suite",
    },
    {
      icon: IoDocumentText,
      title: "Reporting",
      description: "Automated report generation with insights",
    },
  ];

  return (
    <main className="relative" id="Feature">
      <div className="w-full max-w-8xl mx-auto py-8 sm:py-10 lg:py-[3.35rem] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Features;