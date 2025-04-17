import React from "react";
import MediaText from "../components/walkThrough/mediaText.tsx";
import MinitoolsSection from "../components/walkThrough/miniToolsSection.tsx";
import ExtrasSection from "../components/walkThrough/extrasSection.tsx";
import { walkthrough } from "../constants/data.ts";

const Walkthrough: React.FC = () => {
  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Heading Section */}
        <div className="text-center animate-fade-in mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">
            MeMeY Walkthrough
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how MeMeY simplifies data analysis with these key features
            and tools.
          </p>
        </div>

        {/* Facts Section */}
        <div className="space-y-12 md:space-y-16">
          {walkthrough.map((fact, index) => (
            <MediaText
              key={index}
              factNumber={fact.factNumber}
              description={fact.description}
              imageSrc={fact.imageSrc}
              imageAlt={fact.imageAlt}
              imageCaption={fact.imageCaption}
              imageSrcSet={fact.imageSrcSet}
              imageSizes={fact.imageSizes}
              imageOnRight={fact.imageOnRight}
            />
          ))}
        </div>

        {/* Minitools Section */}
        <MinitoolsSection />

        {/* Extras Section */}
        <ExtrasSection />
      </div>
    </main>
  );
};

export default Walkthrough;
