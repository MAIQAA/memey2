import React from "react";

const MinitoolsSection: React.FC = () => {
  const minitools = [
    "Perform targeted analysis of outliers, generating a box plot and data table that are ready to be copied into Excel",
    "Perform regressions, generating a pretty plot that you can copy to your clipboard",
    "Find summary statistics of numeric columns (copiable)",
    "Check normality of numeric columns",
    "Find summary statistics of categorical columns (copiable)",
    "Check categorical columns for sampling bias/irregular observation frequency",
  ];

  return (
    <section className="mt-12 sm:mt-16 animate-fade-in">
      <hr className="border-gray-300 mb-8" />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-6 sm:mb-8">
        Minitools
      </h2>
      <p className="text-gray-700 text-base sm:text-lg text-center mb-6">
        Let’s also take a moment to talk about <strong>minitools</strong>.
      </p>
      <ul className="list-disc pl-6 space-y-3 max-w-2xl mx-auto">
        {minitools.map((tool, index) => (
          <li key={index} className="text-gray-700 text-base sm:text-lg">
            {tool}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MinitoolsSection;
