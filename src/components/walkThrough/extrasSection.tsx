import React from "react";

const ExtrasSection: React.FC = () => {
  const extras = [
    "MeMeY automatically estimates how many samples you would likely need to trust the results you’re seeing",
    "A machine-learning classifier shows how well categorical columns can be predicted based on other numeric columns",
    "Built-in notes for each result",
    "No need for specialized export packages: every table, interpretation, and result is easy to copy and paste",
  ];

  return (
    <div className="mt-12 sm:mt-16 animate-fade-in">
      <hr className="border-gray-300 mb-8" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-6 sm:mb-8">
        Extras
      </h2>
      <p className="text-gray-700 text-base sm:text-lg text-center mb-6">
        Here are{" "}
        <span className="italic">four specialty features that are</span>{" "}
        annoying to implement in R. Measure Menu Y lets you take these for
        granted.
      </p>
      <ul className="list-disc pl-6 space-y-3 max-w-2xl mx-auto">
        {extras.map((extra, index) => (
          <li key={index} className="text-gray-700 text-base sm:text-lg">
            {extra}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtrasSection;
