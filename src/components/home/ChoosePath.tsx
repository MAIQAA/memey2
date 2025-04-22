import React from "react";
import { paths, Path } from "../../constants/data.ts";

const PathCard: React.FC<Path> = ({
  icon: Icon,
  iconBgColor,
  iconColor,
  title,
  description,
  buttonText,
  buttonBgColor,
  buttonHoverColor,
  link,
}) => (
  <div className="bg-white text-center p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div
      className={`${iconBgColor} w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
    >
      <Icon className={`${iconColor} text-xl sm:text-2xl`} />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
      {description}
    </p>
    <a className="text-white" href={link}>
      <button
        className={`!rounded-lg ${buttonBgColor} text-white px-4 sm:px-6 py-2 text-sm sm:text-base ${buttonHoverColor}`}
      >
        {buttonText}
      </button>
    </a>
  </div>
);

const ChoosePath = () => {
  return (
    <section
      className="relative bg-gradient-to-t from-gray-50 to-white py-6 md:py-10"
      id="choose-path"
    >
      <div className="w-full max-w-7xl mx-auto py-8 md:py-10 lg:py-[3.35rem] px-4 xl:px-0">
        {/* Header Section */}
        <div className="text-center animate-fade-in space-y-3 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
            Choose Your Path
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a student, researcher, or entrepreneur — MeMeY guides
            your data journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {paths.map((path, index) => (
            <PathCard key={index} {...path} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoosePath;
