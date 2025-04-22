import React from "react";
import { comparisons, Comparison } from "../../constants/data.ts";

const ComparisonCard: React.FC<Comparison> = ({
  icon: Icon,
  title,
  features,
  isHighlighted,
}) => (
  <div
    className={`text-center place-items-center p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
      isHighlighted
        ? "bg-gradient-to-br from-black/5 to-white border-2 border-black/20"
        : "bg-white"
    }`}
  >
    <Icon
      className={`text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 ${
        isHighlighted ? "text-black" : "text-gray-400"
      }`}
    />
    <h3
      className={`font-semibold text-sm sm:text-base lg:text-lg ${
        isHighlighted ? "text-black" : "text-gray-400"
      }`}
    >
      {title}
    </h3>
    <div className="mt-2 sm:mt-4">
      {features.map((feature, index) => (
        <p
          key={index}
          className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2"
        >
          {feature}
        </p>
      ))}
    </div>
  </div>
);

const ComparisonSection = () => {
  return (
    <section
      className="relative bg-gradient-to-t from-gray-50 to-white py-6 md:py-10"
      id="Comparison"
    >
      <div className="w-full max-w-7xl mx-auto py-8 md:py-10 lg:py-[3.35rem] px-4 xl:px-0">
        {/* Header Section */}
        <div className="text-center animate-fade-in space-y-3 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
            Comparison
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            See how MeMeY stacks up against traditional tools and modern AI —
            and why it wins.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
          {comparisons.map((item, index) => (
            <ComparisonCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
