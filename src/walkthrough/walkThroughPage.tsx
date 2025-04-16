import React from "react";
import MediaText from "../components/walkThrough/mediaText.tsx";
import MinitoolsSection from "../components/walkThrough/miniToolsSection.tsx";
import ExtrasSection from "../components/walkThrough/extrasSection.tsx";

const Walkthrough: React.FC = () => {
  const facts = [
    {
      factNumber: "MeMeY fact #1",
      description:
        "MeMeY has some built-in smarts for guessing which folders contain your spreadsheets, so you can find them quicker",
      imageSrc:
        "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-1.png?w=1024",
      imageAlt: "MeMeY graphic 1",
      imageCaption: "Click the thingy with the folder",
      imageSrcSet:
        "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-1.png?w=1024 1024w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-1.png?w=150 150w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-1.png?w=300 300w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-1.png?w=768 768w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-1.png 1578w",
      imageSizes: "(max-width: 1024px) 100vw, 1024px",
      imageOnRight: false,
    },
    {
      factNumber: "MeMeY fact #2",
      description:
        "MeMeY will protect you from overanalyzing by letting you know how much work each job will take",
      imageSrc:
        "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-2.png?w=1024",
      imageAlt: "MeMeY graphic 2",
      imageCaption: "Click everything interesting",
      imageSrcSet:
        "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-2.png?w=1024 1024w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-2.png?w=150 150w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-2.png?w=300 300w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-2.png?w=768 768w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-2.png 1559w",
      imageSizes: "(max-width: 1024px) 100vw, 1024px",
      imageOnRight: true,
    },
    {
      factNumber: "MeMeY fact #3",
      description:
        "Once you’ve read in your data, you can now use MeMeY’s simple but powerful suite of minitools.",
      imageSrc:
        "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-3.png",
      imageAlt: "MeMeY graphic 3",
      imageCaption:
        "This button is basically magic. It does everything you want it to do without any of your effort or thinking.",
      imageSrcSet:
        "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-3.png 1572w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-3.png?w=150&h=91 150w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-3.png?w=300&h=182 300w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-3.png?w=768&h=467 768w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-3.png?w=1024&h=623 1024w",
      imageSizes: "(max-width: 1572px) 100vw, 1572px",
      imageOnRight: false,
    },
    {
      factNumber: "MeMeY fact #4",
      description:
        "MeMeY uses (proven) estimates, but unlike some statistical software out there, it doesn’t cut corners. It also doesn’t make heavy assumptions, unlike lots of the AI-powered data analyzers. Beware of heavy assumptions, they can destroy or invalidate your results without you realizing it!",
      imageSrc:
        "https://memey.cloud/wp-content/uploads/2024/10/designer-1.png?w=1024",
      imageAlt: "Designer 1",
      imageCaption: "",
      imageSrcSet:
        "https://memey.cloud/wp-content/uploads/2024/10/designer-1.png?w=1022 1022w, https://memey.cloud/wp-content/uploads/2024/10/designer-1.png?w=150 150w, https://memey.cloud/wp-content/uploads/2024/10/designer-1.png?w=300 300w, https://memey.cloud/wp-content/uploads/2024/10/designer-1.png?w=768 768w, https://memey.cloud/wp-content/uploads/2024/10/designer-1.png 2018w",
      imageSizes: "(max-width: 1024px) 100vw, 1024px",
      imageOnRight: true,
    },
    {
      factNumber: "MeMeY fact #5",
      description:
        "The top radio bar lets you filter results even further, so you often don’t even need to look through most of the results to find the surprising insights!",
      imageSrc:
        "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-5.png?w=1024",
      imageAlt: "MeMeY graphic 5",
      imageCaption: "Shows ONLY significant results",
      imageSrcSet:
        "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-5.png?w=1024 1024w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-5.png?w=150 150w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-5.png?w=300 300w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-5.png?w=768 768w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-5.png 1634w",
      imageSizes: "(max-width: 1024px) 100vw, 1024px",
      imageOnRight: false,
    },
    {
      factNumber: "MeMeY fact #6",
      description:
        "MeMeY was designed to be easy mode for data science. As a result, it clarifies results more clearly even super expensive, professional software does.",
      imageSrc:
        "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-6.png?w=1024",
      imageAlt: "MeMeY graphic 6",
      imageCaption: "Get a nice results table that actually explains itself",
      imageSrcSet:
        "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-6.png?w=1024 1024w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-6.png?w=150 150w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-6.png?w=300 300w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-6.png?w=768 768w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-6.png 1636w",
      imageSizes: "(max-width: 1024px) 100vw, 1024px",
      imageOnRight: true,
    },
    {
      factNumber: "MeMeY fact #7",
      description:
        "You only clicked one button one time to perform the entire analysis!",
      imageSrc:
        "https://memey.cloud/wp-content/uploads/2024/08/memey-graphic-7.png?w=1024",
      imageAlt: "MeMeY graphic 7",
      imageCaption: "",
      imageSrcSet:
        "https://memey.cloud/wp-content/uploads/2024/08/memey-graphic-7.png?w=1024 1024w, https://memey.cloud/wp-content/uploads/2024/08/memey-graphic-7.png?w=150 150w, https://memey.cloud/wp-content/uploads/2024/08/memey-graphic-7.png?w=300 300w, https://memey.cloud/wp-content/uploads/2024/08/memey-graphic-7.png?w=768 768w, https://memey.cloud/wp-content/uploads/2024/08/memey-graphic-7.png 1662w",
      imageSizes: "(max-width: 1024px) 100vw, 1024px",
      imageOnRight: false,
    },
  ];

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
          {facts.map((fact, index) => (
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

      {/* Custom Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }
        `}
      </style>
    </main>
  );
};

export default Walkthrough;
